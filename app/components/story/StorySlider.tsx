"use client";

import { FC } from "react";
import "@/styles/backstory.scss";
import storyDecor from '@/public/backstory/storyDecor.svg'
import classNames from "classnames";
import { useRouter } from "next/navigation";
import Image from "next/image";
const story = [
  {
    className: "story__nightmare",
    link: "nightmare_fuel",
    title: "Nightmare Fuel",
    description:
      "City of Ayyon - the only inhabited place left on the planet after the. Nightmare Fuel also known as Great Conflict.",
  },
  {
    className: "story__agreement",
    link: "agreement",
    title: "Agreement",
    description:
      "Years passed and the camps of both factions grew.The followers of the First moved deeper into the city, not renovating, but transforming the ruins of old Ayyon into the semblance of a living temple.",
  },
  {
    className: "story__ayyon",
    link: "modern",
    title: "Modern Ayyon",
    description: "100 years after agreement",
  },
];
const StorySlider: FC = () => {
  const router = useRouter();

  const slide = (dir: string) => {
    router.push("/backstory/" + dir);
  };

  return (
    <div className={"story__choose"}>
      <div className={"story__backstory"}>Backstory</div>
      {story.map((story, i) => (
        <div
          className={classNames("story__part", story.className)}
          onClick={() => slide(story.link)}
          key={i}
        >
          <h2 className={classNames("story__title", "story__subtitle")}>
            <span>0{i + 1}</span>
            <Image src={storyDecor} alt="story" />
            {story.title}
          </h2>
          <div>{story.description}</div>
        </div>
      ))}
    </div>
  );
};

export default StorySlider;
