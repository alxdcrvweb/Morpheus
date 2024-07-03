"use client";
import "@/styles/journey.scss";
import { useJourney } from "@/store/useJourney";
import journey from "@/journey.json";
import Link from "next/link";
import { useMemo } from "react";
const JourneyList = () => {
  const { currentType } = useJourney();
  const journeyFilter = useMemo(() => {
    if (currentType == "Gated") {
      return journey.filter((el) => el.gated);
    } else if (currentType !== "All") {
      return journey.filter((el) => el.category == currentType);
    } else {
      return journey;
    }
  }, [currentType]);
  return (
    <div className="journey__all">
      <div className="journey__title">
        {currentType}: {journeyFilter.length}
      </div>
      <div className="journey__list">
        {journeyFilter.map((story, i) => {
          return (
            <Link
              href={story.link}
              target={story.link.includes("http") ? "_blank" : "_self"}
              key={story.title}
            >
              <div className="journey__el" key={i}>
                <div className="journey__type">{story.category}</div>
                <img src={story.image} className="journey__image" />
                <div className="journey__text">{story.title}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default JourneyList;
