"use client";
import * as React from "react";
import "@/styles/connect.scss";
import Image from "next/image";
import logo from "@/public/logo.svg";
import card_image from "@/public/connect/portal.png";
import wallet from "@/public/connect/wallet.svg";
import farcaster from "@/public/connect/farcaster.svg";
import CustomConnect from "./customConnect";
import { SignInButton } from "@farcaster/auth-kit";
import "@farcaster/auth-kit/styles.css";
import { UserVerification, useConnect } from "@/store/useConnect";
import { useRouter } from "next/navigation";

// import SignInButton from
function ConnectCard() {
  const { setWarpcastUser, warpcastUser } = useConnect();
  const router = useRouter();
  const [user, setUser] = React.useState<UserVerification | undefined>(
    undefined
  );

  React.useEffect(() => {
    if (user) {
      localStorage.setItem("warpcastUser", JSON.stringify(user));
      setWarpcastUser(user);
      router.push("/");
    }
  }, [user]);

  React.useEffect(() => {
    let user = localStorage.getItem("warpcastUser");
    if (user) {
      let userObject = JSON.parse(user);
      setWarpcastUser(userObject as UserVerification);
      router.push("/");
    }
  }, []);

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
          </div>
          {/* <div className="card_farcaster_cast"> */}
          {!warpcastUser && (
            <SignInButton
              onSuccess={(profile) => {
                console.log(profile, "profile");
                setUser(profile as UserVerification);
              }}
            />
          )}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default ConnectCard;
