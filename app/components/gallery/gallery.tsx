import * as React from "react";
import "../../../styles/gallery.scss";
import { useGallery } from "@/store/useGallery";
import { useConnect } from "@/store/useConnect";
import axios from "axios";
import { chainId } from "@/config/config";
import logo from "../../../public/logo.svg";
import view from "../../../public/gallery/view.svg";
import Image from "next/image";

function GalleryComponent() {
  const { gallery, setGallery } = useGallery();
  const { address } = useConnect();
  const getGallery = async () => {
    console.log(chainId);
    const params = {
      chain: chainId,
      address: address,
    };

    const query = new URLSearchParams(params).toString();

    try {
      const res = await axios.get("/api/nfts?" + query);
      console.log(res);

      return (
        res.data
          // .filter((el: any) => el.token_uri)
          .map((el: any) => {
            // console.log(el);
            return {
              block_number: el.block_number,
              id: el.token_id,
              owner: el.owner_of,
              ...el.normalized_metadata,
            };
          })
      );
    } catch (e) {
      console.log(e);
    }
  };
  React.useEffect(() => {
    if (address) {
      getGallery().then((gal: any) => {
        setGallery(gal);
      });
    }
  }, [address]);
  console.log(gallery);
  return (
    <div className="gallery_container">
      <div className="gallery_main_content">
        <div className="gallery_header">
          <div className="gallery_title">Morpheus: 1</div>
          <Image
            alt="logo"
            loading="lazy"
            src={logo}
            className="gallery_avatar"
          />
        </div>
        <div className="gallery">
          {gallery
            .filter((_, i) => i < 5)
            .map((el, i) => {
              return (
                <img
                  key={i}
                  src={"/api/image?id=" + el.id}
                  className="gallery_image"
                />
              );
            })}
          {Array(5 - (gallery?.length ? gallery?.length : 0)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="gallery_placeholder" />
            ))}
        </div>
        <div className="gallery_footer">
          <div className="gallery_view_all">View all</div>
          <Image
            alt="view_icon"
            loading="lazy"
            src={view}
            className="gallery_view_icon"
          />
        </div>
      </div>
      <div className="gallery_development_info">
        <div className="gallery_info_content">
          <div className="gallery_info_column">
            <div className="gallery_info_text">
              In development. To learn more read our docs{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryComponent;
