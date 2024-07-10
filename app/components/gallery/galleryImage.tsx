import { morphUrl } from "@/config/config";
import { IChar } from "@/store/useGallery";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

const GalleryImage = ({ el, i }: { el: IChar; i: number }) => {
  return (
    <div className="gallery_image_container">
      <Link href={`/gallery/${el.tokenId}`}>
        <Image
          alt={el.tokenId.toString()}
          src={morphUrl + "/api/image?id=" + el.tokenId}
          width={156}
          placeholder="blur"
          blurDataURL="/gallery/profile.png"
          height={183}
          className={classNames("gallery_image")}
        />
      </Link>
    </div>
  );
};
export default GalleryImage;
