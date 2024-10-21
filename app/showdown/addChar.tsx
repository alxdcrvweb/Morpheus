import * as React from "react";
import "@/styles/addChar.scss";
import { IChar, useGallery } from "@/store/useGallery";
import Image from "next/image";
import { chainId, morphUrl } from "@/config/config";
import classNames from "classnames";
import { useConnect } from "@/store/useConnect";
import Link from "next/link";
import axios from "axios";
import { towerContract } from "@/utils/contracts/tower";
import { isAddress } from "web3-validator";

function AddChar() {
  const filters = ["My team", "Sleeper", "Vigilant"];
  const [activeFilter, setActiveFilter] = React.useState("My team");
  const { myGallery, setMyGallery } = useGallery();
  const [hover, setHover] = React.useState("");
  const { address, tower, ens, warpcastUser, mint } = useConnect();
  const [type, setType] = React.useState("");
  const [selected, setSelected] = React.useState(0);
  // console.log(selected);
  const checkSelected = async () => {
    try {
      const res = await tower.methods.accountToSelectedFaction(address).call();
      setSelected(Number(res));
    } catch (e) {
      console.log(e);
    }
  };
  const check = async (user: string) => {
    console.log(user);
    // console.log(web3)
    if (isAddress(user)) {
      setType("address");
      return;
    }
    setType("fid");
  };
  const getGallery = async () => {
    console.log(chainId, address);
    const params = {
      address: type == "address" && address,
      fid: type == "fid" && warpcastUser.fid,
    };
    //@ts-ignore
    const query = new URLSearchParams(params).toString();

    try {
      const res = await axios.get("/api/nfts?" + query);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };
  React.useEffect(() => {
    if (address || warpcastUser) {
      check(address || warpcastUser.fid.toString());
    }
  }, [address, warpcastUser]);
  const getGal = () => {
    if (type !== "") {
      getGallery().then((gal: IChar[]) => {
        console.log("gallery", gal);
        setMyGallery(gal);
      });
    }
  };
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
    if (!activeCards) return 6;
    if (activeCards.length % 6 == 0) return 6;
    if (activeCards.length > 6) {
      return 0;
    }
    if (activeCards.length <= 6) {
      return 6 - activeCards.length;
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
  const withdraw = async (tokenId: number) => {
    try {
      await tower.methods.endExploration(tokenId).send({
        from: address,
      });
      let ind = myGallery.findIndex((el) => el.tokenId == tokenId);

      if (ind !== -1) {
        let newGall = [
          ...myGallery.slice(0, ind),
          { ...myGallery[ind], stakedIn: "" },
          ...myGallery.slice(ind + 1),
        ];
        console.log(newGall);
        setMyGallery(newGall);
      }
    } catch (e) {
      console.log(e);
    }
  };
  // let isUsed = true;
  const approveAndStake = async (
    tokenId: number,
    faction: number,
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
        const res = await tower.methods
          .startExploration(tokenId, faction, proof)
          .send({
            from: address,
          });
        let ind = myGallery.findIndex((el) => el.tokenId == tokenId);

        if (ind !== -1) {
          let newGall = [
            ...myGallery.slice(0, ind),
            { ...myGallery[ind], stakedIn: towerContract },
            ...myGallery.slice(ind + 1),
          ];
          console.log(newGall);
          setMyGallery(newGall);
        }
      } catch (e) {
        console.log(e);
      }
    };
  };
  React.useEffect(() => {
    if (tower) {
      checkSelected();
    }
  }, [tower, myGallery]);
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
                      onMouseEnter={() => setHover(el.name)}
                      onMouseLeave={() => setHover("")}
                      className="fullImage"
                      onClick={() => {
                        if (
                          !el.stakedIn &&
                          (selected == 0 || selected == el.faction)
                        )
                          approveAndStake(el.tokenId, el.faction, el.proof);
                      }}
                    >
                      {!el.stakedIn && hover == el.name && (
                        <div className="galleryExploring">
                          {" "}
                          {/* {console.log(el.faction)} */}
                          <div className="galleryExploringText">{el.name}</div>
                          <button className="galleryExploringWithdraw">
                            {selected == 0 || selected == el.faction
                              ? "Explore"
                              : "Wrong faction"}
                          </button>
                        </div>
                      )}
                      {el.stakedIn && (
                        <div className="galleryExploring">
                          <div className="galleryExploringText">
                            Already exploring
                          </div>
                          <button
                            className="galleryExploringWithdraw"
                            onClick={() => {
                              if (el.stakedIn) {
                                withdraw(el.tokenId);
                              }
                            }}
                          >
                            Withdraw
                          </button>
                        </div>
                      )}
                      <Image
                        alt={el.tokenId.toString()}
                        src={morphUrl + "/api/image?id=" + el.tokenId}
                        width={165}
                        placeholder="blur"
                        blurDataURL="/gallery/profile.png"
                        height={183}
                        className={"towerImage"}
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
