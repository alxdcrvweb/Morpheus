"use client";

import {useRouter} from "next/router";
import cn from "classnames";
import {useState} from "react";

import Link from "next/link";
import '../../../styles/header.scss'
import Menu from "@/app/components/header/menu";
import AudioPlayer from "@/app/components/header/AudioPlayer";
interface HeaderProps {
    routerPath: string;
    csrfToken: string;
}

const Header = () => {

    // const [menu, setMenu] = useState(false);
    // const [openMenu, setOpenMenu] = useState(false);
    // const router = useRouter();
    // const web3store = useInjection(Web3Store);
    // const galleryStore = useInjection(GalleryStore);
    const [active, setActive] = useState("");

    return (
        <header className={"header"}>
            <div className={"header__line"}>
                <div
                    className={"headerBurger"}
                >
                    <div
                        className={cn(
                            "headerBurger__box"
                        )}
                    >
                        <div>Menu</div>
                    </div>
                </div>
                <div className={cn(active == "nft" && "inactive")}>
                    <AudioPlayer />
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                    <Menu
                        active={active}
                        // routerPath={props.routerPath}
                        // openMenuHandler={openMenuHandler}
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        pointerEvents: "auto",
                    }}
                >
                    {/*{!web3store.farcasterUser && !web3store.address ? (*/}
                        <>
                            <div style={{ opacity: 1, color: "white" }}>
                                <Link href={"/connect"}>
                                    <button className={"wrapcast__connect"}>Connect</button>
                                </Link>
                            </div>
                            <div style={{ display: "none" }}>
                                {/*<ConnectButtonCustom />*/}
                            </div>
                        </>
                    )
                </div>
            </div>
            {/*<HeaderMenu*/}
            {/*    routerPath={props.routerPath}*/}
            {/*    openMenu={openMenu}*/}
            {/*    closeMenuHandler={closeMenuHandler}*/}
            {/*/>*/}
        </header>
)
}

export default Header