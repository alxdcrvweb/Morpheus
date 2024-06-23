"use client";

import GalleryComponent from "../components/gallery/gallery";
import GalleryProfile from "../components/gallery/galleryProfile";
import "../../styles/gallery.scss";
const GalleryPage = () => {
  return (
    <div className="gallery_page">
      <GalleryProfile />
      <GalleryComponent />
    </div>
  );
};
export default GalleryPage;
