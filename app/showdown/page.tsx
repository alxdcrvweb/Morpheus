"use client";
import React, { useEffect, useMemo, useState } from "react";
import "@/styles/tower.scss";
import Modal from "./modal";
import axios from "axios";
import { towerContract } from "@/utils/contracts/tower";
import { backendUrl } from "../api/nfts/route";
import { useConnect } from "@/store/useConnect";
const Leaderboard: React.FC = () => {
  const [animation, setAnimation] = useState("");
  const [opacity, setOpacity] = useState(false);
  const [hud, setHud] = useState(true);
  const { address } = useConnect();

  const getStats = async () => {
    try {
      const res = await axios.get(
        backendUrl + "/api/rankings/global/" + towerContract
      );
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getStats();
  }, [address]);
  let sleep = 530;
  let vig = 280;
  const precent = useMemo(() => {
    let sum = sleep + vig;
    return {
      vig: Math.round((vig / sum) * 100),
      sleep: Math.round((sleep / sum) * 100),
    };
  }, [sleep, vig]);
  const tr = useMemo(() => {
    if (animation == "tower")
      return {
        tower: "translateX(-33.3vw) scale(1.4) translateY(10vh)",
        modal: "translateX(-70vw)",
      };
    return {
      tower: "translateX(0vw) scale(1) translateY(0vh)",
      modal: "translateX(0vw)",
    };
  }, [animation]);
  useEffect(() => {
    setTimeout(() => {
      setOpacity(true);
    }, 200);
  }, []);
  return (
    <>
      <div
        className="clickable"
        onClick={() => {
          setHud(false);
          setTimeout(() => {
            if (animation == "tower") {
              setAnimation("");
            } else {
              setAnimation("tower");
            }
          }, 1000);
        }}
      />
      <div
        className={"tower"}
        style={{ opacity: hud ? 1 : 0, transition: "1s ease all" }}
      >
        <div className="tower__descr">
          Exploration Phase 1. The first facti Exploration Phase 1. The first
          faction to achieve 500 points will unlock new locationon to achieve
          500
        </div>
        <div className="tower__bottom">
          <div className="tower__bottom__text">
            Exploration Phase 1. The first faction to achieve 500 points will
            unlock new location
          </div>
          <div className="tower__stats">
            <div className="tower__name">Sleepers</div>
            <div className="tower__nums">
              <div
                className="tower__num_s"
                style={{ width: precent.sleep + "%" }}
              >
                {sleep}
              </div>
              <div
                className="tower__num_v"
                style={{ width: precent.vig + "%" }}
              >
                {vig}
              </div>
            </div>
            <div className="tower__name">Vigilant</div>
          </div>
        </div>
      </div>
      <video
        preload="auto"
        loop
        autoPlay
        muted
        playsInline
        className="video2"
        style={{
          opacity: opacity ? 1 : 0,
          transition: "1000ms cubic-bezier(.65,0,.78,.36) all",
          transform: tr.tower,
        }}
      >
        <source src="/background/map.mp4" type="video/mp4"></source>
      </video>
      <div className="tower__modal" style={{ transform: tr.modal }}>
        <img
          src="/close.svg"
          className="mainClose"
          onClick={() => {
            setAnimation("");
            setHud(true);
          }}
        />
        <Modal setAnimation={setAnimation} setHud={setHud} />
      </div>
    </>
  );
};

export default Leaderboard;
