"use client";
import "../styles/globals.scss";
import "../styles/layout.scss";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import "@rainbow-me/rainbowkit/styles.css";
import React from "react";
import RainbowProvider from "./components/connect/rainbowProvider";
import Index from "./components/background";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RainbowProvider>
          <Index />
            <Header />
              <main>{children}</main>
            <Footer />
        </RainbowProvider>
      </body>
    </html>
  );
}
