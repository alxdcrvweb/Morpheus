import * as React from "react";
import Image, { StaticImageData } from "next/image";
import logo from "@/public/logo.svg";
import { useConnect } from "@/store/useConnect";
import { addressSlice } from "@/utils/common";
import "@/styles/profile.scss";
const GalleryProfile = ({
  mainImage,
  user,
  type,
  userName,
}: {
  mainImage: string;
  user?: string;
  type?: string;
  userName?: string;
}) => {
  return (
    <>
      <div className="profile_container">
        <img
          loading="lazy"
          src={mainImage}
          key={mainImage}
          alt="profile"
          className="profile_main_image"
        />
        <div className="profile_content">
          <Image
            loading="lazy"
            src={logo}
            className="profile_logo"
            alt="logo"
          />
          <div className="profile_username">
            {userName
              ? userName
              : type == "fid"
              ? user
              : addressSlice(user)}
          </div>
          <div className="profile_message">Welcome to the Journey</div>
          <div className="profile_button">Ch. 2 Entrance</div>
        </div>
      </div>
    </>
  );
};

export default GalleryProfile;
