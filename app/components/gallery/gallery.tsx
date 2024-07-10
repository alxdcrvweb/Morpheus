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

function GalleryComponent({ user, type }: { user?: boolean; type: string }) {
  const { myGallery, holderGallery } = useGallery();
  const currentGallery = React.useMemo(() => {
    if (user && holderGallery.length > 0) {
      return holderGallery;
    }
    if (!user && myGallery.length > 0) {
      return myGallery;
    }
    return [];
  }, [myGallery, holderGallery, user]);
  const [fullView, setFullView] = React.useState(false);
  const emptyCards = React.useMemo(() => {
    if (!currentGallery) return 5;
    if (currentGallery.length > 5) {
      return 0;
    }
    if (currentGallery.length <= 5) {
      return 5 - currentGallery.length;
    }
  }, [currentGallery]);

  return (
    <div
      className={classNames(
        "gallery_container",
        fullView && "gallery_container_all"
      )}
    >
      <div className="gallery_main_content">
        <div className="gallery_header">
          <div className="gallery_title">
            Morpheus: {currentGallery?.length}
          </div>
          <Image
            alt="logo"
            loading="lazy"
            src={logo}
            className="gallery_avatar"
          />
        </div>
        <div className="gallery">
          {currentGallery &&
            currentGallery
              .filter((_, i) => i < 5)
              .map((el, i) => {
                return <GalleryImage el={el} i={i} key={i} />;
              })}
          {Array(emptyCards)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="gallery_placeholder" />
            ))}
          {currentGallery &&
            fullView &&
            currentGallery
              .filter((_, i) => i >= 5)
              .map((el, i) => {
                return <GalleryImage el={el} i={i} key={i} />;
              })}
        </div>

        <div className={!fullView ? "gallery_footer" : "gallery_footer_active"}>
          <div
            className="gallery_view_all"
            onClick={() => setFullView(!fullView)}
          >
            {!fullView ? "View all" : "Hide"}
          </div>

          <Image
            alt="view_icon"
            loading="lazy"
            src={view}
            className="gallery_view_icon"
          />
        </div>
      </div>
      {!fullView && (
        <div className="gallery_development_info">
          <div className="gallery_info_content">
            <div className="gallery_info_column">
              <div className="gallery_info_text">
                In development. To learn more read our{" "}
                <span>
                  <a
                    href="https://trello.com/b/9fZr2Gcc/morpheus"
                    target="_blank"
                  >
                    docs
                  </a>
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryComponent;
