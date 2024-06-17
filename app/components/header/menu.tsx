import cn from "classnames";
// import { useInjection } from "inversify-react";
// import { observer } from "mobx-react";
import { FC, useEffect, useState } from "react";
import styles from "../../styles/header.module.scss";
// import { maskAddress } from "../../utils/utilities";
// import Social from "../Social";
// import eye from "../../public/icons/eye.svg";
// import Image from "next/image";
// import { useRouter } from "next/router";
import Link from "next/link";
// import { Web3Store } from "../../stores/Web3Store";

interface HeaderProps {
    routerPath: string;
    active: string;
}

const Menu: FC<HeaderProps> = () => {
    // const router = useRouter();
    // const web3Store = useInjection<Web3Store>(Web3Store);

    return (
        <div className={"header__actions"}>
            {
                <Link href="/">
                    <div
                        className={cn(
                            "header__menu",
                            "header__active",
                            "first"
                        )}
                    >
                        Journey
                    </div>
                </Link>
            }
            {
                <Link href="/story">
                    <div
                        className={cn(
                           "header__menu",
                            // active == "story" && styles.header__active
                        )}
                    >
                        Story
                    </div>
                </Link>
            }
            {
                <Link href="/sleeping">
                    <div
                        className={cn(
                             "header__menu",
                            // active == "active" && styles.header__active
                        )}
                    >
                        Factions
                    </div>
                </Link>
            }
            {
                <Link href="/gallery">
                    <div
                        className={cn(
                            "header__menu",
                            // active == "gallery" && styles.header__active,
                            // !web3Store.farcasterUser &&
                            // !web3Store.address &&
                            "header__disabled"
                        )}
                    >
                        Gallery
                    </div>
                </Link>
            }
            {
                <Link href="/leaderboard">
                    <div
                        className={cn(
                            "header__menu",

                            "last",
                            // active == "leaderboard" && styles.header__active
                        )}
                    >
                        Leaderboard
                    </div>
                </Link>
            }
        </div>
    );
}

export default Menu;
