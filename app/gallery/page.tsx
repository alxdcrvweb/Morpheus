"use client";

import { useConnect } from "@/store/useConnect";
import GalleryComponent from "../components/gallery/gallery";
import GalleryProfile from "../components/gallery/galleryProfile";
import "@/styles/gallery.scss";
import { useMemo, useState } from "react";
const GalleryPage = () => {
  const { address, ens, warpcastUser } = useConnect();
  const currentUser = useMemo(() => {
    if (ens) {
      return { user: ens, type: "ens" };
    } else if (address) {
      return { user: address, type: "address" };
    } else if (warpcastUser?.fid) {
      return { user: warpcastUser.fid.toString(), type: "fid" };
    }
  }, []);
  return (
    <div className="gallery_page">
      <div className="gallery_scroll">
        {" "}
        <GalleryProfile
          mainImage={"/gallery/profile.png"}
          userName={ens}
          user={currentUser?.user}
          type={currentUser?.type}
        />
        <GalleryComponent user={currentUser?.user} type={currentUser?.type} />
      </div>
    </div>
  );
};
export default GalleryPage;
