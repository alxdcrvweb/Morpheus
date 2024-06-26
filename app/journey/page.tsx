import JourneyList from "../components/journey/journeyList";
import JourneyMenu from "../components/journey/journeyMenu";
import "../../styles/journey.scss";

const JourneyPage = () => {
  return (
    <div className="journey">
      <JourneyMenu />
      <JourneyList />
    </div>
  );
};
export default JourneyPage;
