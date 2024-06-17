"use client";

import { useRouter } from "next/router";
import cn from "classnames";
import { useEffect, useState } from "react";

import Link from "next/link";
import "../../../styles/header.scss";
import Menu from "@/app/components/header/menu";
import AudioPlayer from "@/app/components/header/audioPlayer";

const Header = () => {
  // const [openMenu, setOpenMenu] = useState(false)
  return (
    <header className={"header"}>
      <div className={"header__line"}>
        <div className={"headerBurger"}>
          <div className={cn("headerBurger__box")}>
            <div>Menu</div>
          </div>
          <AudioPlayer />
        </div>
        <Menu />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            pointerEvents: "auto",
          }}
        >
          <div style={{ opacity: 1, color: "white" }}>
            <Link href={"/connect"}>
              <button className={"wrapcast__connect"}>Connect</button>
            </Link>
          </div>
        </div>
      </div>
      {/* <HeaderMenu
        openMenu={openMenu}
        closeMenuHandler={setOpenMenu}
      /> */}
    </header>
  );
};

export default Header;
