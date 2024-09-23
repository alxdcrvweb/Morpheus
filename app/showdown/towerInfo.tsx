import * as React from "react";
import "@/styles/towerInfo.scss";

function TowerInfo({
  setAnimation,
  setHud,
}: {
  setAnimation: (a: string) => void;
  setHud: (h: boolean) => void;
}) {
  return (
    <>
      <div className="container">
        <div className="head">
          <div className="leftCol">Score: 56</div>
          <div className="rightCol">
            <div className="location">Location</div>
            <div className="locationName">
              Exploration Phase 1. Tower of Agreement
            </div>
          </div>
        </div>
        <img
          src="/close.svg"
          className="mainClose"
          onClick={() => {
            setAnimation("");
            setHud(true);
          }}
        />
        <div className="content">
          <img loading="lazy" src="/showdown.svg" className="mainImage" />
          <div className="agreement">Tower of Agreement</div>
          <div className="subtitle">
            Even a shaky peace is better than any clash because in peace,
            creation is possible.
          </div>
          <div className="towerLine" />
          <div className="subtitle">
            All come to contemplate and find a moment of peace in this cold and
            predatory world - the monumental Tower of Agreement exudes calm and
            hope.
          </div>
          <div className="towerTop">
            <img src="/background/tower/tower1.png" className="tower1" />
          </div>
          <img src="/background/tower/line1.svg" className="lineTop" />
          <div className="wrapper">
            <img
              loading="lazy"
              src="/background/tower/tower2.png"
              className="tower2"
            />
            <img
              loading="lazy"
              src="/background/tower/tower3.png"
              className="tower3"
            />
            <img
              loading="lazy"
              src="/background/tower/tower4.png"
              className="tower4"
            />
          </div>{" "}
          <div className="description">
            A place of power for anyone in the city, here you can find anyone
            from implant-packed punks from downtown to occultists from the
            flooded city, covered head to toe in dirty clothes.
          </div>
          <div className="agree">
            <img
              loading="lazy"
              src="/background/tower/tower5.png"
              className="tower5"
            />
            <div className="description2">
              The imposing Tower of Agreement rises in the center of the Ayyon,
              dividing it into two conventional parts and reminding each
              inhabitant of what must not be forgotten in this unfriendly world
              despite differences of opinion.
            </div>
          </div>
          <div className="tower6container">
            <img src="/background/tower/tower6.png" className="tower6" />
          </div>
          <div className="t7">
            <div className="tower7container">
              <div className="bazar">Bazar floor</div>
              <img src="/background/tower/tower7.png" className="tower7" />
              <div className="description3">
                The Tower is unaffected by the unfriendly weather of this
                terrain, as it is built with the finest materials available to
                the Vigilants at the time of construction and covered with eye
                symbols both inside and out.
              </div>
              <img src="/background/tower/line2.svg" className="line2" />
            </div>
          </div>
          <div className="tower8container">
            <img src="/background/tower/tower8.png" className="tower8" />
          </div>
          <div className="t9">
            <div className="tower9container">
              <img src="/background/tower/line2.svg" />
              <div className="description4">
                The Sleepers use these symbols to protect their homes. It is the
                only building in the city that uses technology and tradition to
                its fullest potential.
              </div>
              <img src="/background/tower/line2.svg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TowerInfo;
