"use client";
import "@/styles/globals.scss";
import "@/styles/layout.scss";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Index = () => {
  const pname = usePathname();
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(pname.replaceAll("/", ""));
  }, [pname]);
  return (
    <div className="bg">
      {
        <video preload="auto" loop autoPlay muted playsInline className="video" style={{opacity: path !== "showdown" ? 1 : 0}}>
          <source src="/background/bg_video.mp4" type="video/mp4"></source>
        </video>
      }
      {
        <video preload="auto" loop autoPlay muted playsInline className="video2" style={{opacity: path == "showdown" ? 1 : 0}}>
          <source src="/background/map.mp4" type="video/mp4"></source>
        </video>
      }
    </div>
  );
};
export default Index;
