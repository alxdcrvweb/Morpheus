import { FC } from "react";
import Player from "@/app/components/footer/player";
import "@/styles/footer.scss";
import CustomConnect from "../connect/customConnect";
//music player only, but could be more in future updates.

const Footer: FC = () => {
  return (
    <footer className="footer">
      <Player />
      <div className="footer_opacity">
        <CustomConnect />
      </div>
    </footer>
  );
};

export default Footer;
