"use client";
import React, { useEffect, useMemo, useState } from "react";
import classNames from "classnames";
import "@/styles/galleryOne.scss";
import { addressSlice } from "@/utils/common";
import { useGallery } from "@/store/useGallery";
import { RotatingLines } from "react-loader-spinner";
import Image from "next/image";
import story from "@/public/gallery/story.png";
import logo from "@/public/logo.svg";
import GalleryProfile from "./galleryProfile";
import chevron from "@/public/chevron.svg";
import axios from "axios";
import { backendUrl } from "@/app/api/nfts/route";
import { CopyToClipboard } from "react-copy-to-clipboard";
import BackButton from "./backButton";
import Link from "next/link";
import Web3 from "web3";
const GalleryOne = ({ tokenId }: { tokenId: number }) => {
  const { oneChar, myGallery, holderGallery, setOneChar } = useGallery();
  const [show, setShow] = useState(false);
  const [details, setDetails] = useState<any>({});
  const [owner, setOwner] = useState("");
  const decor = useMemo(() => {
    return (
      details.mirage ? details.mirage : details.droids ? details.droids : "None"
    ).replace("oberver", "observer");
  }, [details]);

  useEffect(() => {
    if (oneChar?.metadata) {
      getENSName(oneChar.owner);
      setDetails({});
      oneChar?.metadata?.map((el: any) => {
        setDetails((prev: any) => ({ ...prev, [el.trait_type]: el.value }));
      });
    }
  }, [oneChar]);
  async function getENSName(address: string) {
    const web3 = new Web3(
      new Web3.providers.HttpProvider("https://eth.llamarpc.com")
    );
    try {
      const ensName = await web3.eth.ens.getName(address);
      console.log(ensName);
      if (ensName) {
        setOwner(ensName);
      } else {
        setOwner(address);
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }
  const checkOne = async () => {
    let myIndex = myGallery.findIndex((el) => el.tokenId == tokenId);
    let holderIndex = holderGallery.findIndex((el) => el.tokenId == tokenId);

    try {
      if (myGallery && myGallery.length > 0 && myIndex >= 0) {
        //@ts-ignore
        setOneChar(myGallery[i]);
        return;
      } else if (
        holderGallery &&
        holderGallery.length > 0 &&
        holderIndex >= 0
      ) {
        //@ts-ignore
        setOneChar(holderGallery[holderIndex]);
        return;
      } else {
        let res = await axios.get(backendUrl + "/api/token/" + tokenId);
        //@ts-ignore
        setOneChar(res.data.token[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkOne();
  }, []);

  return (
    <div className="gallery__container__one">
      <div className="gallery__one">
        <div className="gallery__col">
          <BackButton />
          <div>
            <GalleryProfile
              mainImage={"/api/image/?id=" + oneChar?.tokenId}
              userName={oneChar?.name}
            />
            {/* {console.log(oneChar?.name)} */}
            <div className="gallery__loader__big">
              <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="50"
                visible={false}
              />
            </div>
          </div>
          <div className="gallery__info">
            <Image src={logo} alt="logo" className="gallery__logo" />
            <div className="gallery__wake">Wake Up date: 27.02.24</div>
            <div className="gallery__stats">
              <div className="gallery__stats__row">
                <div>Owner</div>
                <div className="gallery__stats__dots"></div>
                <Link href={`/${owner}`} className="gallery__stats__dots">
                  {owner}
                </Link>
              </div>
              <div className="gallery__stats__row">
                <div>Faction</div>
                <div className="gallery__stats__dots"></div>
                <div>{details.faction}</div>
              </div>
              <div className="gallery__stats__row">
                <div>{details.faction == "sleeper" ? "Mirage" : "Droid"}</div>
                <div className="gallery__stats__dots"></div>
                <div>{decor}</div>
              </div>
              <div className="gallery__stats__row">
                <div>Faction power</div>
                <div className="gallery__stats__dots"></div>
                <div>???</div>
              </div>
            </div>
            <div
              className="gallery__detail"
              onClick={() => {
                setShow(!show);
              }}
            >
              <div>Character detail</div>
              <Image alt="chevron" src={chevron} />
            </div>
            <div className="gallery__stats" style={{ marginTop: "15px" }}>
              {show &&
                oneChar?.metadata?.map((el: any) => {
                  if (
                    el.trait_type == "faction" ||
                    el.trait_type == "mirage" ||
                    el.trait_type == "droids"
                  )
                    return null;
                  return (
                    <div
                      className={classNames(
                        "gallery__stats__row",
                        "gallery__second__row"
                      )}
                      key={el.trait_type}
                    >
                      <div>{el.trait_type}</div>
                      <div
                        className={classNames(
                          "gallery__stats__dots",
                          "gallery__second__dots"
                        )}
                      ></div>
                      <div>{el.value}</div>
                    </div>
                  );
                })}
            </div>
            <div className="gallery__buttons">
              <a
                href={`https://warpcast.com/~/compose?text=Morph#${oneChar?.tokenId}&embeds[]=https://mrphs.io/gallery/${oneChar?.tokenId}`}
                target="_blank"
              >
                <div className="gallery__link">Share as Frame</div>
              </a>

              <a
                href={`https://opensea.io/assets/base/0x670971dcb8e1a510253511427593007e074954b7/${oneChar?.tokenId}`}
                target="_blank"
              >
                <div className="gallery__link">Opensea</div>
              </a>
            </div>
          </div>
        </div>

        <div className={classNames("gallery__right", "gallery__soon2")}>
          <Image className="gallery__soon" src={story} alt="story" />
        </div>
      </div>
    </div>
  );
};

export default GalleryOne;
