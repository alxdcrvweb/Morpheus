import { NextPage } from "next";
import "../../styles/backstory.scss";
import StorySlider from "../components/story/StorySlider";

const Backstory: NextPage = () => {
  return <section className="story">{<StorySlider />}</section>;
};

export default Backstory;
