import * as React from "react";
import "@/styles/addChar.scss";
import { useGallery } from "@/store/useGallery";
import Image from "next/image";
import { morphUrl } from "@/config/config";
import classNames from "classnames";
import { useConnect } from "@/store/useConnect";
import Link from "next/link";
import axios from "axios";
import { backendUrl } from "../api/nfts/route";
import { towerContract } from "@/utils/contracts/tower";

function AddChar() {
  const filters = ["My team", "Sleeper", "Vigilant"];
  const [activeFilter, setActiveFilter] = React.useState("My team");
  const { myGallery } = useGallery();
  const { address, tower, mint } = useConnect();
  const activeCards = React.useMemo(() => {
    if (!myGallery) return [];
    if (activeFilter == "My team") return myGallery;
    return (
      //@ts-ignore
      myGallery.filter(
        (el) =>
          el.metadata[el.metadata.length - 1].value ==
          activeFilter.toLowerCase()
      )
    );
  }, [myGallery, activeFilter]);
  const emptyCards = React.useMemo(() => {
    if (!activeCards) return 5;
    if (activeCards.length > 5) {
      return 0;
    }
    if (activeCards.length <= 5) {
      return 5 - activeCards.length;
    }
  }, [activeCards]);
  const checkApprove = async () => {
    try {
      const isApproved = await mint.methods
        .isApprovedForAll(address, towerContract)
        .call();
      console.log(isApproved);
      return isApproved;
    } catch (e) {
      console.log(e);
    }
  };
  const approveAndStake = async (
    tokenId: number,
    faction: string,
    proof: string[]
  ) => {
    checkApprove().then((res) => {
      if (res == true) {
        stake();
      } else if (res == false) {
        approve().then((r) => {
          r && stake();
        });
      }
    });
    const approve = async () => {
      try {
        const res = await mint.methods
          .setApprovalForAll(towerContract, true)
          .send({
            from: address,
          });
        console.log(res);
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    };
    const stake = async () => {
      try {
        console.log(tokenId, faction, proof);
        const f = faction == "sleeper" ? 1 : 0;
        const res = await tower.methods
          .startExploration(tokenId, f, proof)
          .send({
            from: address,
          });
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    };
  };
  return (
    <>
      <div className="container">
        <div className="innerContainer">
          <div className="headerText">And now it’s time to</div>
          <div className="mainTitle">Choose a Morph to Explore</div>
          <div className="mainLine" />
          <div className="descriptionText">
            Choose a side and explore the tower. More floors to clear - the more
            locations will be open on the map with the new characters and Ayyon
            lore
          </div>
          {address ? (
            <div className="bottomContainer">
              <div className="thumbnailContainer">
                {filters.map((el, i) => {
                  return (
                    <div
                      className="thumbnailImage"
                      key={i}
                      onClick={() => {
                        setActiveFilter(el);
                      }}
                      style={{
                        color: activeFilter !== el ? "#E2E2E2" : "black",
                        border:
                          activeFilter == el
                            ? "1px solid transparent"
                            : "1px solid #E2E2E2",
                        backgroundColor:
                          activeFilter == el ? "#E2E2E2" : "transparent",
                      }}
                    >
                      {el}
                    </div>
                  );
                })}
              </div>
              <div className="imageRow">
                {activeCards.map((el) => {
                  return (
                    <div
                      key={el.image}
                      className="fullImage"
                      onClick={() =>
                        approveAndStake(
                          el.tokenId,
                          el.metadata[el.metadata.length - 1].value,
                          el.proof
                        )
                      }
                    >
                      <Image
                        alt={el.tokenId.toString()}
                        src={morphUrl + "/api/image?id=" + el.tokenId}
                        width={165}
                        placeholder="blur"
                        blurDataURL="/gallery/profile.png"
                        height={183}
                        className={"galleryImage"}
                      />
                    </div>
                  );
                })}
                {Array.from({ length: emptyCards }).map((_, index) => {
                  return <div key={index} className="galleryPlaceholder" />;
                })}
              </div>
              <ul className="instructionsText">
                <li>
                  You can select Morpheus from only one faction (sleepers or
                  vigilant).{" "}
                </li>
                <li>You can send only one Morph per one transaction.</li>
                <li>You can withdraw anytime.</li>
                <li>The Score updates every hour.</li>
              </ul>
            </div>
          ) : (
            <div className="connect">
              <Link href="/connect">
                <div className="leftCol">Connect</div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AddChar;
