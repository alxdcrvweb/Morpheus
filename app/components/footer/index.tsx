import { FC, useEffect, useState } from "react";
import Player from "@/app/components/footer/player";
import "@/styles/footer.scss";
import CustomConnect from "../connect/customConnect";
import Opensea from "../svg/opensea";
import Farcaster from "../svg/farcaster";
import { usePathname } from "next/navigation";
//music player only, but could be more in future updates.

const Footer: FC = () => {
  const [path, setPath] = useState("empty");
  const pname = usePathname();

  useEffect(() => {
    setPath(pname.replaceAll("/", ""));
  }, [pname]);
  return (
    <footer className="footer">
      {path !== "showdown" && <Player />}
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
