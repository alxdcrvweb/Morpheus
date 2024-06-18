import { FC } from "react";
import Player from "@/app/components/footer/player";
import "../../../styles/footer.scss";
//music player only, but could be more in future updates.

const Footer: FC = () => {
  return (
    <footer className="footer">
      <Player />
    </footer>
  );
};

export default Footer;
