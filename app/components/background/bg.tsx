"use client";
import "@/styles/globals.scss";
import "@/styles/layout.scss";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Background = ({ children }: { children: React.ReactNode }) => {
  const pname = usePathname();
  const [path, setPath] = useState("empty");
  useEffect(() => {
    setPath(pname.replaceAll("/", ""));
  }, [pname]);
  return (
    <div>
      <div
        className="bg"
        style={{ opacity: path !== "showdown" && path !== "empty" ? 1 : 0 }}
      >
        <video preload="auto" loop autoPlay muted playsInline className="video">
          <source src="/background/bg_video.mp4" type="video/mp4"></source>
        </video>
      </div>
      <div className="video2" style={{ opacity: path == "showdown" ? 1 : 0 }}>
        <img src="/background/bg_3.png" className="bg_3" />
      </div>
      {path !== "empty" && children}
    </div>
  );
};
export default Background;
