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
const GalleryOne = ({ tokenId }: { tokenId: number }) => {
  const { oneChar, gallery, setOneChar } = useGallery();
  const [show, setShow] = useState(false);
  const [details, setDetails] = useState<any>({});

  const decor = useMemo(() => {
    return (
      details.mirage ? details.mirage : details.droids ? details.droids : "None"
    ).replace("oberver", "observer");
  }, [details]);

  useEffect(() => {
    if (oneChar?.metadata) {
      setDetails({});
      oneChar?.metadata?.map((el: any) => {
        setDetails((prev: any) => ({ ...prev, [el.trait_type]: el.value }));
      });
    }
  }, [oneChar]);

  const checkOne = async () => {
    try {
      if (gallery && gallery.length > 0) {
        console.log(gallery, tokenId);
        let i = gallery.findIndex((el) => el.tokenId == tokenId);
        console.log(i);
        //@ts-ignore
        setOneChar(gallery[i]);
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
                <a
                  href={`https://basescan.org/address/${oneChar?.owner}`}
                  target="_blank"
                  className="gallery__stats__dots"
                >
                  {addressSlice(oneChar?.owner)}
                </a>
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
              <CopyToClipboard
                text={`https://mrhps.io/gallery/${oneChar?.tokenId}`}
              >
                <div className="gallery__link">Share as Frame</div>
              </CopyToClipboard>

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
