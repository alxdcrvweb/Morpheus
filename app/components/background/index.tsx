"use client";
import "@/styles/globals.scss";
import "@/styles/layout.scss";

const Index = () => {
  return (
    <div className="bg">
      <video preload="auto" loop autoPlay muted className="video">
        <source src="/background/bg_video.webm" type="video/webm"></source>
      </video>
    </div>
  );
};
export default Index;
