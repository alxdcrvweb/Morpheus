import "../styles/globals.scss";
import "../styles/layout.scss";
import Image from "next/image";
import background from "@/public/bg.png";
import background2 from "@/public/bg_2.png";
import Header from "@/app/components/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/*background*/}
        <div className="container">
          <Image className={"bg"} src={background} fill={true} />
          <Image className={"bg"} src={background2} fill={true} />
        </div>
        <Header />

        <main>{children}</main>
      </body>
    </html>
  );
}
