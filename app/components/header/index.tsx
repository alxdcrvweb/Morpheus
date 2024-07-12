"use client";
import cn from "classnames";

import Link from "next/link";
import "@/styles/header.scss";
import Menu from "../../components/header/menu";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { useConnect } from "@/store/useConnect";
import { addressSlice } from "@/utils/common";
// import Index from "../footer/player/player";
import opensea from "@/public/opensea.svg";
import farcaster from "@/public/farcaster.svg";
import { useEffect, useState } from "react";
import HeaderMobileMenu from "./mobileMenu";
import Opensea from "../svg/opensea";
import Farcaster from "../svg/farcaster";
import { IChar, useGallery } from "@/store/useGallery";
import { chainId } from "@/config/config";
import Web3 from "web3";
import { isAddress } from "web3-validator";
import axios from "axios";

const Header = () => {
  const { address, warpcastUser, ens } = useConnect();
  const [openMenu, setOpenMenu] = useState(false);
  const [type, setType] = useState("");
  const { setMyGallery } = useGallery();
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
  useEffect(() => {
    if (address || warpcastUser) {
      check(address || warpcastUser.fid.toString());
    }
  }, [address, warpcastUser]);
  useEffect(() => {
    if (type !== "") {
      getGallery().then((gal: IChar[]) => {
        console.log("gallery", gal);
        setMyGallery(gal);
      });
    }
  }, [type]);
  return (
    <header className={"header"}>
      {openMenu && <HeaderMobileMenu setOpenMenu={setOpenMenu} />}

      <div className={"header__line"}>
        <div className={"headerBurger"}>
          <div
            className={cn("headerBurger__box")}
            onClick={() => {
              setOpenMenu(true);
            }}
          >
            <div>Menu</div>
          </div>

          <Link href={"/"}>
            <Image style={{ marginTop: "7px" }} src={logo} alt={"Logo"} className="header__logo" />
          </Link>
        </div>
        <Menu />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            pointerEvents: "auto",
          }}
        >
          <div className="header__links">
            <a
              href="https://opensea.io/collection/morpheus-pfp"
              target="_blank"
            >
              <Opensea />
            </a>
            <a href="https://warpcast.com/~/channel/morpheus" target="_blank">
              <Farcaster />
            </a>
          </div>
          <div style={{ color: "white" }}>
            {warpcastUser ? (
              <a
                href={`https://warpcast.com/${warpcastUser.username}`}
                target="_blank"
              >
                <button className={"wrapcast__connect"}>
                  {warpcastUser.displayName}
                </button>
              </a>
            ) : (
              <Link
                href={
                  address
                    ? "https://basescan.org/address/" + address
                    : "/connect"
                }
              >
                <button className={"wrapcast__connect"}>
                  {!address ? "Connect" : ens ? ens : addressSlice(address)}
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
