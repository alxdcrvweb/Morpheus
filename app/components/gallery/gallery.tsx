import * as React from "react";
import "@/styles/gallery.scss";
import { IChar, useGallery } from "@/store/useGallery";
import { useConnect } from "@/store/useConnect";
import axios from "axios";
import { chainId } from "@/config/config";
import logo from "@/public/logo.svg";
import view from "@/public/gallery/view.svg";
import Image from "next/image";
import classNames from "classnames";
import GalleryImage from "./galleryImage";

function GalleryComponent({ user, type }: { user?: string; type: string }) {
  const { gallery, setGallery } = useGallery();
  const [fullView, setFullView] = React.useState(false);
  const emptyCards = React.useMemo(() => {
    if (!gallery) return 5;
    if (gallery.length > 5) {
      return 0;
    }
    if (gallery.length <= 5) {
      return 5 - gallery.length;
    }
  }, [gallery]);
  const getGallery = async () => {
    console.log(chainId);
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
  React.useEffect(() => {
    if (user) {
      getGallery().then((gal: IChar[]) => {
        //@ts-ignore
        setGallery(gal);
      });
    }
  }, [user]);

  return (
    <div
      className={classNames(
        "gallery_container",
        fullView && "gallery_container_all"
      )}
    >
      <div className="gallery_main_content">
        <div className="gallery_header">
          <div className="gallery_title">Morpheus: {gallery?.length}</div>
          <Image
            alt="logo"
            loading="lazy"
            src={logo}
            className="gallery_avatar"
          />
        </div>
        <div className="gallery">
          {gallery &&
            gallery
              .filter((_, i) => i < 5)
              .map((el, i) => {
                return <GalleryImage el={el} i={i} key={i} />;
              })}
          {Array(emptyCards)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="gallery_placeholder" />
            ))}
          {gallery &&
            fullView &&
            gallery
              .filter((_, i) => i >= 5)
              .map((el, i) => {
                return <GalleryImage el={el} i={i} key={i} />;
              })}
        </div>
        {!fullView && (
          <div className="gallery_footer">
            <div className="gallery_view_all" onClick={() => setFullView(true)}>
              View all
            </div>

            <Image
              alt="view_icon"
              loading="lazy"
              src={view}
              className="gallery_view_icon"
            />
          </div>
        )}
      </div>
      {!fullView && (
        <div className="gallery_development_info">
          <div className="gallery_info_content">
            <div className="gallery_info_column">
              <div className="gallery_info_text">
                In development. To learn more read our docs{" "}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryComponent;
