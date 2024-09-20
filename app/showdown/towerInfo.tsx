import * as React from "react";
import "@/styles/towerInfo.scss";

function TowerInfo() {
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
        <div className="content">
          <img loading="lazy" src="/showdown.svg" className="mainImage" />
          <div className="agreement">Tower of Agreement</div>
          <div className="subtitle">
            Even a shaky peace is better than any clash because in peace,
            creation is possible.
          </div>
          <div className="towerLine" />

          <div className="wrapper">
            <img
              loading="lazy"
              src="/background/tower1.png"
              className="tower1"
            />

            <div className="description">
              A place of power for anyone in the city, here you can find anyone
              from implant-packed punks from downtown to occultists from the
              flooded city, covered head to toe in dirty clothes. All come to
              contemplate and find a moment of peace in this cold and predatory
              world - the monumental Tower of Agreement exudes calm and hope.
            </div>
            <img src="/background/tower2.png" className="tower2" />
          </div>
          <div className="description2">
            The imposing Tower of Agreement rises in the center of the Ayyon,
            dividing it into two conventional parts and reminding each
            inhabitant of what must not be forgotten in this unfriendly world
            despite differences of opinion.
          </div>
          <div className="description3">
            The Tower is unaffected by the unfriendly weather of this terrain,
            as it is built with the finest materials available to the Vigilants
            at the time of construction and covered with eye symbols both inside
            and out. The Sleepers use these symbols to protect their homes. It
            is the only building in the city that uses technology and tradition
            to its fullest potential.
          </div>
        </div>
      </div>
    </>
  );
}

export default TowerInfo;
