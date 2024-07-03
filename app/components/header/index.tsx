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

const Header = () => {
  const { address, warpcastUser, ens } = useConnect();
  // console.log(ens)
  return (
    <header className={"header"}>
      <div className={"header__line"}>
        <div className={"headerBurger"}>
          <div className={cn("headerBurger__box")}>
            <div>Menu</div>
          </div>

          <Image style={{ marginTop: "7px" }} src={logo} alt={"Logo"} />
          {/*<Index />*/}
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
              href="https://opensea.io/assets/base/0x670971dcb8e1a510253511427593007e074954b7/106"
              target="_blank"
            >
              <img src="/opensea.svg" />
            </a>
            <a href="https://warpcast.com/~/channel/morpheus" target="_blank">
              <img src="/farcaster.svg" />
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
      {/* <HeaderMenu
        openMenu={openMenu}
        closeMenuHandler={setOpenMenu}
      /> */}
    </header>
  );
};

export default Header;
