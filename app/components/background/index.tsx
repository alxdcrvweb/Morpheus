"use client";
import "../../../styles/globals.scss";
import "../../../styles/layout.scss";
import Image from "next/image";
import background from "@/public/bg.png";
import background2 from "@/public/bg_2.png";

const Index = () => {
  return (
    <div className="container">
      <Image className={"bg"} src={background} alt={"background"} fill={true} />
      <Image
        className={"bg"}
        src={background2}
        alt={"background"}
        fill={true}
      />
    </div>
  );
};
export default Index;
