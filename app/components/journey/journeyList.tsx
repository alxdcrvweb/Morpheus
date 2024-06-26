"use client";
import "../../../styles/journey.scss";
import { useJourney } from "@/store/useJourney";

const JourneyList = () => {
  const { currentType } = useJourney();
  const test = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="journey__all">
      <div className="journey__title">{currentType}: 8</div>
      <div className="journey__list">
        {test.map((story, i) => {
          return (
            <div className="journey__el" key={i}>
              <img src="/backstory/ayyon.png" className="journey__image" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default JourneyList;
