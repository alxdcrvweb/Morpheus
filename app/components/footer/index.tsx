import { FC } from "react";
import Player from "@/app/components/footer/player";
import "@/styles/footer.scss";
import CustomConnect from "../connect/customConnect";
import Opensea from "../svg/opensea";
import Farcaster from "../svg/farcaster";
//music player only, but could be more in future updates.

const Footer: FC = () => {
  return (
    <footer className="footer">
      <Player />
      <div className="footer_opacity">
        <CustomConnect />
      </div>
      <div className="footer_links">
        <a href="https://opensea.io/collection/morpheus-pfp" target="_blank">
          <Opensea />
        </a>
        <a href="https://warpcast.com/~/channel/morpheus" target="_blank">
          <Farcaster />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
