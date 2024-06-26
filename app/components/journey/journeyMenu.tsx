import React from "react";
import "../../../styles/journey.scss";

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
  return (
    <div className="journey__menu">
      <div className="journey__divider" />
      <div className="journey__description">
        Learn more about our collection and events related to it
      </div>
      <div className="journey__stats">
        {statsData.map((stat, index) => (
          <div key={index} className="journey__stats_item">
            <div className="journey__stats_label">{stat.label}:</div>
            <div className="journey__stats_value">{stat.value}</div>
          </div>
        ))}
      </div>
      <div className="journey__divider journey__divider_large" />
      <div className="journey__contribute">
        The page is open-source. Learn how to contribute to it <span><a href="">here</a></span>
      </div>
    </div>
  );
}

export default JourneyMenu;
