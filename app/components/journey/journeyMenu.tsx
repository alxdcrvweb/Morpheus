"use client";
import React, { useMemo } from "react";
import "@/styles/journey.scss";
import { useJourney } from "@/store/useJourney";
import classNames from "classnames";
import journey from "@/journey.json";

const statsData = [
  { label: "All", value: 38 },
  { label: "Story", value: 4 },
  { label: "Community", value: 12 },
  { label: "Collabs", value: 7 },
  { label: "Art", value: 16 },
  { label: "Gated", value: 4 },
  { label: "Tools", value: 1 },
  { label: "News", value: 1 },
];

function JourneyMenu() {
  const { currentType, setCurrentType } = useJourney();
  const values = useMemo(() => {
    return statsData.map((data) => {
      if (data.label == "Gated") {
        return journey.filter((el) => el.gated).length;
      }
      if (data.label == "All") {
        return journey.length;
      }
      return journey.filter((el) => data.label == el.type).length;
    });
  }, []);
  return (
    <div className="journey__menu">
      <div className="journey__divider" />
      <div className="journey__description">
        Learn more about our collection and events related to it
      </div>
      <div className="journey__stats">
        {statsData.map((stat, i) => (
          <div
            key={i}
            className={classNames(
              "journey__stats_item",
              stat.label == currentType && "journey__stats_active"
            )}
            onClick={() => setCurrentType(stat.label)}
          >
            <div className="journey__stats_label">{stat.label}:</div>
            <div className="journey__stats_value">{values[i]}</div>
          </div>
        ))}
      </div>
      <div className="journey__divider journey__divider_large" />
      <div className="journey__contribute">
        The page is open-source. Learn how to contribute to it{" "}
        <span>
          <a href="">here</a>
        </span>
      </div>
    </div>
  );
}

export default JourneyMenu;
