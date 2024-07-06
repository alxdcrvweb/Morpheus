import { IChar } from "@/store/useGallery";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const GalleryImage = ({ el, i }: { el: IChar; i: number }) => {
  return (
    <Link href={`/gallery/${el.tokenId}`}>
      <Image
        alt={el.tokenId.toString()}
        width={156}
        height={183}
        src={"/api/image?id=" + el.tokenId}
        placeholder='empty'
        blurDataURL="/gallery/profile.png"
        className={classNames("gallery_image")}
      />
    </Link>
  );
};
export default GalleryImage;
