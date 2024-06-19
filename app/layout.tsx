"use client";
import "../styles/globals.scss";
import "../styles/layout.scss";
import Image from "next/image";
import background from "@/public/bg.png";
import background2 from "@/public/bg_2.png";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import "@rainbow-me/rainbowkit/styles.css";
import React from "react";
import RainbowProvider from "./components/connect/rainbowProvider";
import Background from "./components/mainPage/background";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/*background*/}
        <RainbowProvider>
          <Background />
          <Header />
          <main>{children}</main>
          <Footer />
        </RainbowProvider>
      </body>
    </html>
  );
}
