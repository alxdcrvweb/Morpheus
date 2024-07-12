import { backendUrl } from "@/app/api/nfts/route";
import GalleryOne from "@/app/components/gallery/galleryOne";
import { morphUrl } from "@/config/config";
import "@/styles/gallery.scss";
import axios from "axios";
import { getFrameFlattened, Frame } from "frames.js";

export async function generateMetadata(props: any) {
  let { id } = props.params;
  const res = await axios.get(backendUrl + "/api/token/" + id);
  let imageUrl = morphUrl + "/api/og?id=" + id;
  // console.log(res.data.token[0].owner)
  const initialFrame: Frame = {
    image: imageUrl,
    version: "vNext",
    buttons: [
      {
        action: "link",
        label: "Opensea",
        target: `https://opensea.io/assets/base/0x670971dcb8e1a510253511427593007e074954b7/${id}`,
      },
      {
        action: "link",
        label: "Profile",
        target: `https://mrphs.io/gallery/${id}`,
      },
      {
        action: "link",
        label: "Owner",
        target: `https://mrphs.io/${res.data.token[0].owner}`,
      },
    ],
    imageAspectRatio: "1:1",
  };
  return {
    title: "Morpheus #" + id,
    other: getFrameFlattened(initialFrame),
  };
}

const GalleryOnePage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <div className="gallery_page">
      <div className="gallery_scroll">
        <GalleryOne tokenId={Number(id)} />
      </div>
    </div>
  );
};

export default GalleryOnePage;
