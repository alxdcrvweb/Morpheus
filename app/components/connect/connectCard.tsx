"use client";
import * as React from "react";
import "../../../styles/connect.scss";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import card_image from "../../../public/connect/connectImage.png";
import wallet from "../../../public/connect/wallet.svg";
import warpcast from "../../../public/connect/warpcast.svg";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import CustomConnect from "./customConnect";

function ConnectCard() {
  return (
    <>
      <div className="card">
        <Image
          loading="lazy"
          alt="cardImage"
          src={card_image}
          className="card_image"
        />
        <div className="card_content">
          <Image loading="lazy" src={logo} alt="logo" className="card_logo" />
          <div className="card_title">Morpheus Portal</div>
          <div className="card_subtitle">
            Log into your account to start Journey
          </div>
          <div className="card_wallet">
            <Image
              loading="lazy"
              src={wallet}
              alt="wallet_icon"
              className="wallet_icon"
            />

            <CustomConnect />
          </div>
          <div className="card_separator">or</div>
          <div className="card_warpcast">
            <Image
              loading="lazy"
              src={warpcast}
              className="card_warpcast_icon"
              alt="card_warpcast_icon"
            />
            <div className="card_warpcast_connect">Connect Farcaster</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConnectCard;
