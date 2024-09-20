"use client";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import logo from "@/public/showdown.svg";
import "@/styles/showdown.scss";
const Leaderboard: React.FC = () => {
  const [animation, setAnimation] = useState("");
  const [opacity, setOpacity] = useState(false);
  const tr = useMemo(() => {
    if (animation == "tower")
      return "translateX(400px) scale(2.5) translateY(0px)";
    return "translateX(0px) scale(1) translateY(0px)";
  }, [animation]);
  useEffect(() => {
    setTimeout(() => {
      setOpacity(true);
    }, 200);
  }, []);
  return (
    <>
      <div className={"leaderboard"}>
        <Image src={logo} alt={"logo"} />
        <div className={"leaderboard__title"}>The Showdown</div>
        <div className={"leaderboard__text"}>
          The Chapter 2 coming soon to the Morpheus world. But who will be the
          leader?{" "}
        </div>
      </div>
      {/* <video
        preload="auto"
        loop
        autoPlay
        muted
        playsInline
        className="video2"
        style={{
          opacity: opacity ? 1 : 0,
          transition: "1000ms cubic-bezier(.65,0,.78,.36) all",
          transform: tr,
        }}
      >
        <source src="/background/map.mp4" type="video/mp4"></source>
      </video> */}
    </>
  );
};

export default Leaderboard;
