import React from "react";
import stlye from "../styles/leaderboard.module.scss";
import Image from "next/image";
import logo from '../../public/showdown.svg'
import '../../styles/showdown.scss'
const Leaderboard: React.FC = () => {
    return (
        <div className={"leaderboard"}>
            <Image src={logo} alt={"logo"} />
            {/*<img src="/leaderboard/showdown.svg" />*/}
            <div className={"leaderboard__title"}>The Showdown</div>
            <div className={"leaderboard__text"}>
                The Chapter 2 coming soon to the Morpheus world. But who will be the
                leader?{" "}
            </div>
        </div>
    );
};

export default Leaderboard;
