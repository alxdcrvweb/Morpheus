"use client";
import cn from "classnames";

import Link from "next/link";
import "../../../styles/header.scss";
import Menu from "../../components/header/menu";
import AudioPlayer from "../../components/header/audioPlayer";

const Header = () => {
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
