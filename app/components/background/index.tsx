"use client";
import "@/styles/globals.scss";
import "@/styles/layout.scss";

const Index = () => {
  return (
    <div className="bg">
      <video preload="auto" loop autoPlay muted className="video">
        <source src="/background/bg_video.mp4" type="video/mp4"></source>
      </video>
    </div>
  );
};
export default Index;
