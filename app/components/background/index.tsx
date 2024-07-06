"use client";
import "@/styles/globals.scss";
import "@/styles/layout.scss";
import Image from "next/image";
import background from "@/public/background/bg.png";
import background2 from "@/public/background/bg_2.png";

const Index = () => {
  return (
    <div className="bg">
      {/* <Image className={"bg"} src={background} alt={"background"} fill={true} />
      <Image
        className={"bg"}
        src={background2}
        alt={"background"}
        fill={true}
      /> */}
      <video preload="auto" loop autoPlay muted className="video">
        <source src="/background/bg_video.webm" type="video/webm"></source>
      </video>
    </div>
  );
};
export default Index;
