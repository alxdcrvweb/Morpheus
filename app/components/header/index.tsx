"use client";
import cn from "classnames";

import Link from "next/link";
import "../../../styles/header.scss";
import Menu from "../../components/header/menu";
import Image from "next/image";
import logo from '../../../public/logo.svg'
// import Index from "../footer/player/player";

const Header = () => {
  return (
    <header className={"header"}>
      <div className={"header__line"}>
        <div className={"headerBurger"}>
          <div className={cn("headerBurger__box")}>
            <div>Menu</div>
          </div>

           <Image style={{marginTop:"7px"}} src={logo} alt={'Logo'} />
          {/*<Index />*/}
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
