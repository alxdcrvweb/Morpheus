"use client";
import * as React from "react";
import "../../../styles/connect.scss";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import card_image from "../../../public/connect/portal.png";
import wallet from "../../../public/connect/wallet.svg";
import farcaster from "../../../public/connect/farcaster.svg";
import CustomConnect from "./customConnect";
// import SignInButton from 
function ConnectCard() {
  return (
    <>
      <div className="card">
        <Image
          alt="portal"
          loading="lazy"
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
          <div className="card_farcaster">
            <Image
              loading="lazy"
              alt="farcaster"
              src={farcaster}
              className="card_farcaster_icon"
            />
            <div className="card_farcaster_connect">Connect Farcaster</div>
            {/* <SignInButton
              onSuccess={(profile) => {
                console.log(profile, "profile");
              }}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ConnectCard;
