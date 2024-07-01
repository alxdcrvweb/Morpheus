
"use client";
import cn from "classnames";
import opensea from "@/public/backstory/agreement/opensea.svg";
import cube from "@/public/backstory/agreement/cube.png";
import logo from "@/public/backstory/agreement/logo.png";
import screen from "@/public/backstory/agreement/screen.png";
import fanatic from "@/public/backstory/agreement/fanatic.png";
import first from "@/public/backstory/agreement/first.png";
import art from "@/public/backstory/agreement/art.png";
import icon from "@/public/storyDecor.svg";
import arrow from "@/public/arrow.svg";
import change from "@/public/backstory/agreement/change.svg";
import "@/styles/storyPage.scss";
import "@/styles/story.scss";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export const renderHoverImage = (key: string, src: string, prev: string) => (
  <img style={{ opacity: prev === key ? 1 : 0 }} src={src} alt={key} />
);
const Agreement = () => {
  const router = useRouter();
  const [prev, setPrev] = useState("");
  const handleClick = () => {
    router.push("/backstory");
  };
  const slide = (dir: string) => {
    router.push("/backstory/" + dir);
  };
  const handleMouseEnter = (key: string) => {
    setPrev(key);
  };
  const handleMouseLeave = () => {
    setPrev("");
  };

  return (
    <div className="firstStoryPage">
      <div className="firstStoryPage__box">
        <div className="showdown">
          <h1 className={cn("showdown__title", "_subtitle")}>
            <span>02</span>
            <Image src={icon} alt="story decor" />
            Agreement
          </h1>
          <div className="showdown__grid">
            <div className={cn("showdown__bigText", "_bigText")}>
              Years passed and the camps of both factions grew. Occupying the
              flooded part first, the followers of the{" "}
              <span
                onMouseEnter={() => handleMouseEnter("first1")}
                onMouseLeave={handleMouseLeave}
              >
                First
                {renderHoverImage("first1", "agreement/first_prev.png", prev)}
              </span>{" "}
              moved deeper into the city, not renovating, but transforming the
              ruins of old Ayyon into the semblance of a living temple.
            </div>
            <div className={cn("showdown__littleText", "_littleText")}>
              Their goal was to get as many residents as possible to begin
              taking the Steps.
            </div>
          </div>
          <div className="showdown__image">
            <Image src={art} alt="Art depiction" quality={100} />
          </div>
        </div>
        <div className="gatherer">
          <div className="gatherer__grid2">
            <div className="gatherer__image">
              <a
                style={{ cursor: "pointer" }}
                href="https://opensea.io/assets/base/0x670971dcb8e1a510253511427593007e074954b7/440"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="gatherer__image_in"
                  src={first}
                  alt="First"
                  quality={100}
                />
              </a>
              <Image
                className="gatherer__image_opeansea"
                src={opensea}
                alt="OpenSea logo"
                quality={100}
              />
              <div>First</div>
            </div>
            <div className="gatherer__content">
              <h1 className={cn("gatherer__title", "_subtitle")}>
                First Clashes
              </h1>
              <div className="gatherer__box">
                <div className="_littleText2">
                  The{" "}
                  <span
                    onMouseEnter={() => handleMouseEnter("first2")}
                    onMouseLeave={handleMouseLeave}
                  >
                    First
                    {renderHoverImage(
                      "first2",
                      "agreement/first_prev.png",
                      prev
                    )}
                  </span>{" "}
                  was assisted in organizing the learning process by the very
                  first responders to his whispers - they would eventually be
                  given the names{" "}
                  <span
                    onMouseEnter={() => handleMouseEnter("law")}
                    onMouseLeave={handleMouseLeave}
                  >
                    Law
                    {renderHoverImage("law", "agreement/law.png", prev)}
                  </span>{" "}
                  and{" "}
                  <span
                    onMouseEnter={() => handleMouseEnter("fanatic")}
                    onMouseLeave={handleMouseLeave}
                  >
                    Fanatic
                    {renderHoverImage(
                      "fanatic",
                      "agreement/fanatic_prev.png",
                      prev
                    )}
                  </span>
                  {Array.from({ length: 11 }).map((_, i) => {
                    return <div key={i}>.</div>;
                  })}
                  This continued until they encountered the first dome in their
                  path. This object was so alien to them, with its incessant
                  burning cold light and palpable craving for life, that they
                  destroyed it without waiting for orders. The owners of the
                  dome, the survivors, were nearby. But the closer they got to
                  the dome - the more they wanted to sleep. In the ruins of
                  their creation, they fell into a restless sleep full of
                  nightmares.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gatherer">
          <div className="third__grid">
            <div className="third__content">
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "50px",
                }}
              >
                <Image src={logo} alt="Logo" quality={100} />
              </div>
              <div className="third__box">
                <p className="_littleText">
                  After that, the clashes became more frequent. The survivors
                  first developed medications to keep them awake and keep their
                  minds clear so they wouldn&apos;t hallucinate, and then they
                  developed mechanical implants that increased their resilience
                  tenfold. It was because of the methods of these two groups
                  that the names we know now - the Sleepers and the Vigilants -
                  stuck to them. The more there were clashes, the more the
                  people of Ayyon realized that they were starting to roll back
                  everything they had built with their hard work. By destroying
                  each other&apos;s craft, they were making things worse for
                  humanity. Despite the great difference in their views and
                  approaches to the future - they began peace talks.
                </p>
              </div>
            </div>
            <div className="third__image">
              <a
                style={{ cursor: "pointer" }}
                href="https://opensea.io/assets/base/0x670971dcb8e1a510253511427593007e074954b7/459"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="gatherer__image_in"
                  src={fanatic}
                  quality={100}
                  alt="Fanatic"
                />
              </a>
              <Image
                src={opensea}
                className="gatherer__image_opeansea"
                quality={100}
                alt="OpenSea logo"
              />
              <div>Fanatic</div>
            </div>
          </div>
        </div>
        <div className="forth">
          <Image src={cube} alt="Cube" quality={100} />
          <div className="forth__box">
            <div className="_littleText">
              <div style={{ marginTop: "60px" }}>
                <span
                  onMouseEnter={() => handleMouseEnter("order")}
                  onMouseLeave={handleMouseLeave}
                >
                  Order
                  {renderHoverImage("order", "agreement/order.png", prev)}
                </span>
                , under the protection of{" "}
                <span
                  onMouseEnter={() => handleMouseEnter("spider")}
                  onMouseLeave={handleMouseLeave}
                >
                  Spider
                  {renderHoverImage("spider", "agreement/spider.png", prev)}
                </span>{" "}
                - a pioneer of body modifications - came to the center of the
                city day after day to talk to the First. To talk physically, not
                through mental whispers. It was the only time the First&apos;s voice
                could be heard with your own ears.
              </div>{" "}
              <br />
              <div style={{ marginTop: "80px" }}>
                After a week of negotiations, an Agreement was made. The
                Sleepers did not disrupt the flow of progress, the Vigilants did
                not intrude on tradition. At the site of their negotiations,
                they worked together to build a tower, made of new materials,
                but covered with the symbols of the eyes and fumigated with the
                smoke of altars. This tower divided the city into two districts
                - later to be called Slums and Polis.
              </div>
              <br />
              <div style={{ marginTop: "80px", zIndex: 1000 }}>
                It can be said that the real development of culture began here.
              </div>
            </div>
          </div>
          <Image
            src={screen}
            alt="Screen"
            className="story__full"
            quality={100}
          />
        </div>

        <div>
          <div className={cn("story__content", "story__content_padding")}>
            <div className="story__main">
              <div
                className="story__slide"
                onClick={() => slide("nightmare_fuel")}
              >
                <h2 className={cn("story__title", "story__subtitle")}>
                  <span>01</span>
                  <Image src={icon} alt="story decor" />
                  Nightmare Fuel
                </h2>
                <div className="story__status__subtitle">Passed</div>
              </div>
              <div className="story__footer">
                <h2 className={cn("story__title", "story__subtitle")}>
                  <span>02</span>
                  <Image src={icon} alt="story decor" />
                  Agreement
                </h2>
                <div className="story__status__subtitle">Playing</div>
                <div
                  onClick={handleClick}
                  className={cn(
                    "story__explore",
                    "story__explore_dark",
                    "story__explore_desctop"
                  )}
                >
                  Back to chapters
                </div>
                <div className="story__row">
                  <Image
                    src={arrow}
                    className="story__back"
                    onClick={() => slide("nightmare_fuel")}
                    alt="Previous"
                  />
                  <Image src={change} alt="change" />

                  <Image
                    style={{ transform: "rotate(180deg)" }}
                    className="story__back"
                    src={arrow}
                    onClick={() => slide("3")}
                    alt="Next"
                  />
                </div>
              </div>
              <div className="story__slide" onClick={() => slide("modern")}>
                <h2 className={cn("story__title", "story__subtitle")}>
                  <span>03</span>
                  <Image src={icon} alt="story decor" />
                  Modern Ayyon
                </h2>
                <div className="story__status__subtitle">Next</div>
              </div>
              <div
                onClick={handleClick}
                className={cn(
                  "story__explore",
                  "story__explore_dark",
                  "story__explore_mobile"
                )}
              >
                Back to chapters
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agreement;
