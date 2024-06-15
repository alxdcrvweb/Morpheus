import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import  openGraphImage  from '../public/MetadataImage.png'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Morpheus",
  description: "Hand drawn, Farcaster native collection focused on world building and immersive experience",
  openGraph:{
    ...openGraphImage,
    title: "Morpheus"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
