"use client";
import "../styles/globals.scss";
import "../styles/layout.scss";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import "@rainbow-me/rainbowkit/styles.css";
import React from "react";
import ConnectProvider from "./components/connect/connectProvider";
import Index from "./components/background";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ConnectProvider>
          <Index />
          <Header />
          <main>{children}</main>
          <Footer />
        </ConnectProvider>
      </body>
    </html>
  );
}
