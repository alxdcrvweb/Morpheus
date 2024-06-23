import * as React from "react";
import "../../../styles/gallery.scss";
import Image from "next/image";
import mainImage from "../../../public/gallery/profile.png";
import logo from "../../../public/logo.svg";
import button from "../../../public/gallery/button.svg";

import { useConnect } from "@/store/useConnect";
import { addressSlice } from "@/utils/common";

const GalleryProfile = () => {
  const { address } = useConnect();
  return (
    <>
      <div className="profile_container">
        <Image
          loading="lazy"
          src={mainImage}
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
          <div className="profile_username">{addressSlice(address)}</div>
          <div className="profile_message">Welcome to the Journey</div>
          <div className="profile_button">Ch. 2 Entrance</div>
        </div>
      </div>
    </>
  );
};

export default GalleryProfile;
