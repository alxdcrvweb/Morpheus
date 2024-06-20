import { NextPage } from "next";
import StorySlider from "../components/Story/StorySlider";
import "../../styles/backstory.scss";

const Backstory: NextPage = () => {

    return <section className="story">{<StorySlider />}</section>;
};

export default Backstory;