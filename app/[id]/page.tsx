"use client";

import GalleryComponent from "../components/gallery/gallery";
import GalleryProfile from "../components/gallery/galleryProfile";
import Web3 from "web3";
import { isAddress } from "web3-validator";
import "@/styles/gallery.scss";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { IChar, useGallery } from "@/store/useGallery";
import axios from "axios";
import { chainId } from "@/config/config";
const UserPage = () => {
  const [user, setUser] = useState<string | undefined>("");
  const [userName, setUserName] = useState(undefined);
  const [type, setType] = useState<string>("");
  const pathname = usePathname();
  const { setHolderGallery } = useGallery();

  const check = async (address: string) => {
    console.log(address);
    const web3 = new Web3(
      new Web3.providers.HttpProvider("https://eth.llamarpc.com")
    );
    // console.log(web3)
    if (isAddress(address)) {
      setUser(address);
      setType("address");
      return;
    }
    const a = await web3.eth.ens.getAddress(address);
    console.log(`Address for ${address}: ${a}`);
    if (a) {
      setUserName(address);
      setUser(a as string);
      setType("ens");
      return;
    }
    setUser(address);
    setType("fid");
  };
  useEffect(() => {
    check(pathname.replace("/", ""));
  }, []);
  const getGallery = async () => {
    console.log(chainId, type, user);
    const params = {
      address: (type == "address" || type == "ens") && user,
      fid: type == "fid" && user,
    };
    //@ts-ignore
    const query = new URLSearchParams(params).toString();

    try {
      const res = await axios.get("/api/nfts?" + query);
      console.log(res);

      return res.data;
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    console.log(user);
    if (user) {
      getGallery().then((gal: IChar[]) => {
        //@ts-ignore
        console.log("gallery", gal);
        setHolderGallery(gal);
      });
    }
  }, [user]);
  return (
    <div className="gallery_page">
      <div className="gallery_scroll">
        <GalleryProfile
          mainImage={"/gallery/profile.png"}
          user={user}
          userName={userName}
          type={type}
        />
        <GalleryComponent user={true} type={type} />
      </div>
    </div>
  );
};
export default UserPage;
