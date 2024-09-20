"use client";
import "@/styles/globals.scss";
import "@/styles/layout.scss";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Background = () => {
  const pname = usePathname();
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(pname.replaceAll("/", ""));
  }, [pname]);
  return (
    <div
      className="bg"
      style={{ opacity: path !== "showdown" && path !== "" ? 1 : 0 }}
    >
      {
        <video preload="auto" loop autoPlay muted playsInline className="video">
          <source src="/background/bg_video.mp4" type="video/mp4"></source>
        </video>
      }
      {
        <div className="video2" style={{ opacity: path == "showdown" ? 1 : 0 }}>
          <img src="/background/bg_3.png" className="bg_3" />
        </div>
      }
    </div>
  );
};
export default Background;
