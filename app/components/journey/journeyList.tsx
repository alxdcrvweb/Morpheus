"use client";
import "@/styles/journey.scss";
import { useJourney } from "@/store/useJourney";
import journey from "@/journey.json";
import Link from "next/link";
import { useMemo } from "react";
import classNames from "classnames";
import { useGallery } from "@/store/useGallery";

const JourneyList = () => {
  const { currentType } = useJourney();
  const { myGallery } = useGallery();
  const isHolder = useMemo(() => myGallery.length > 0, [myGallery]);
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
              href={!isHolder && story.gated ? "/journey" : story.link}
              target={story.link.includes("http") ? "_blank" : "_self"}
              key={story.title}
            >
              <div
                className={classNames(
                  "journey__el",
                  !isHolder && story.gated && "journey__blocked"
                )}
                key={i}
              >
                <div className="journey__type">{story.category}</div>
                <img
                  src={story.image}
                  className="journey__image"
                  alt={story.title}
                />
                {story.gated && (
                  <div className="journey__gated">
                    For holders only
                  </div>
                )}
                <div className="journey__text">{story.title}</div>
                <div className="journey__author">{story.author}</div>
              </div>
              {!isHolder && story.gated && (
                <div
                  className={classNames(
                    "journey__gated",
                    "journey__gated_active"
                  )}
                >
                  <img src="/gated.svg" />
                  For holders only
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default JourneyList;
