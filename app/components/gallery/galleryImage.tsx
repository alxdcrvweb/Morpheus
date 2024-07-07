import { IChar } from "@/store/useGallery";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const GalleryImage = ({ el, i }: { el: IChar; i: number }) => {
  return (
    <Link href={`/gallery/${el.tokenId}`}>
      <img
        alt={el.tokenId.toString()}
        src={"/api/image?id=" + el.tokenId}
        className={classNames("gallery_image")}
      />
    </Link>
  );
};
export default GalleryImage;
