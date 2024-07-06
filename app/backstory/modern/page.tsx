"use client";
import { NextPage } from "next";
import cn from "classnames";
import "@/styles/storyPage.scss";
import "@/styles/story.scss";
import change from "@/public/backstory/agreement/change.svg";
import { useRouter } from "next/navigation";
import { useState } from "react";
import classNames from "classnames";
import arrow from "@/public/arrow.svg";
import Link from "next/link";
import Image from "next/image";
import ayyon from "@/public/backstory/modern/ayyon.png";
import bottom from "@/public/backstory/modern/bottom.png";
import logo from "@/public/backstory/modern/logo.svg";
import people from "@/public/backstory/modern/people.png";
import life from "@/public/backstory/modern/life.png";
import opensea from "@/public/backstory/agreement/opensea.svg";
import { renderHoverImage } from "../agreement/page";
import line from "@/public/storyDecor.svg";
const Modern: NextPage = () => {
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
      <div className={cn("firstStoryPage__container", "_container")}>
        <div className="firstStoryPage__box">
          <div className="showdown">
            <h1 className={cn("showdown__title", "_subtitle")}>
              <span>03</span>
              <Image src={line} alt="" />
              Modern Ayyon
            </h1>

            <div
              className={cn(
                "showdown__littleText",
                "_littleText",
                "showdown__center"
              )}
            >
              100 years after agreement
            </div>

            <div className="showdown__image">
              <div className="gatherer__image">
                <Image src={ayyon} alt="" quality={100} />
              </div>
            </div>
          </div>
          <div className="gatherer">
            <div className="gatherer__grid2">
              <div className="gatherer__image">
                <a
                  style={{ cursor: "pointer" }}
                  href="https://opensea.io/assets/base/0x670971dcb8e1a510253511427593007e074954b7/106"
                  target="_blank"
                >
                  <Image
                    className="gatherer__image_modern"
                    quality={100}
                    src={life}
                    alt=""
                  />
                </a>
                <Image
                  className="gatherer__image_opeansea"
                  quality={100}
                  src={opensea}
                  alt=""
                />
                <div>Adam and Eve</div>
              </div>
              <div className="gatherer__content">
                <h1 className={cn("gatherer__title", "_subtitle")}>
                  Life in Ayyon
                </h1>
                <div className="gatherer__box">
                  <div className={"_littleText2"}>
                    It seems that advances in science and occult knowledge have
                    significantly increased the longevity of the Ayyonians. This
                    is a significant plus, given the unfriendly environment and
                    the difficulty in raising children.The rhythm of life had
                    settled down if you could say that about a post-apocalyptic
                    world. <div>.</div>
                    The Sleepers were moving through the Steps and getting on
                    with life. The Vigilants led progress - restoring flora and
                    fauna in the Domes and dealing with implants. Despite the
                    Agreement, implants turned out to be incredibly handy -
                    there was at least some benefit from the clashes of the
                    past.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gatherer">
            <div className="ride__grid">
              <div className="third__content">
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "50px",
                  }}
                >
                  <Image src={logo} alt="" />
                </div>
                <div className="third__box">
                  <div className={"_littleText2"}>
                    The common people - namely the Sleepers who hadn&apos;t
                    advanced high up the Steps and the Vigilants who hadn&apos;t
                    delved into the infrastructure of governance - maintained
                    good neighborly relations among themselves. Until knowledge
                    divorced them from each other. The houses around the Tower
                    of Agreement were largely populated by such residents.{" "}
                    <div>.</div> <div>.</div> Most of the knowledgeable ones on
                    both sides were too enthralled with achieving their
                    faction&apos;s goals - but not all of them.{" "}
                    <span
                      onMouseEnter={() => handleMouseEnter("Mandala")}
                      onMouseLeave={handleMouseLeave}
                    >
                      Mandala&apos;s
                      {renderHoverImage(
                        "Mandala",
                        "backstory/modern/Mandala.png",
                        prev
                      )}
                    </span>
                    social media live’s could be watched by both the youth on
                    the Sleeper’s side and the Vigilant’s side. Sometimes you
                    could even see the same{" "}
                    <span
                      onMouseEnter={() => handleMouseEnter("Mandala2")}
                      onMouseLeave={handleMouseLeave}
                    >
                      Mandala
                      {renderHoverImage(
                        "Mandala2",
                        "/backstory/modern/Mandala.png",
                        prev
                      )}
                    </span>
                    , along with{" "}
                    <span
                      onMouseEnter={() => handleMouseEnter("Adam")}
                      onMouseLeave={handleMouseLeave}
                    >
                      Adam
                      {renderHoverImage(
                        "Adam",
                        "/backstory/modern/Adam.png",
                        prev
                      )}
                    </span>
                    ,{" "}
                    <span
                      onMouseEnter={() => handleMouseEnter("eve")}
                      onMouseLeave={handleMouseLeave}
                    >
                      Eve
                      {renderHoverImage(
                        "eve",
                        "/backstory/modern/Eve.png",
                        prev
                      )}
                    </span>
                    , and{" "}
                    <span
                      onMouseEnter={() => handleMouseEnter("rider")}
                      onMouseLeave={handleMouseLeave}
                    >
                      Rider
                      {renderHoverImage(
                        "rider",
                        "/backstory/modern/Rider.png",
                        prev
                      )}
                    </span>
                    , strutting around the neighborhoods of Ayyon in the latest
                    muscle car.
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <a>
                  <Image
                    className="ride__image"
                    quality={100}
                    src={people}
                    alt=""
                  />
                </a>

                <div className="ride__image_text">Rider</div>
              </div>
            </div>
          </div>
          <div className="forth">
            <Image
              className="forth__img"
              quality={100}
              src={bottom}
              alt="forth"
            />
            <div className="forth__box">
              <div className={"_littleText"}>
                <div className="forth__text">
                  Despite the Agreement, some of the high-ranking Sleepers were
                  downright dangerous. One could say it wasn&apos;t entirely
                  their fault - great knowledge could drive them mad enough that
                  even a whisper from the First wouldn&apos;t keep them sane.
                  <div style={{ marginTop: "80px", zIndex: 1000 }}>
                    But that didn&apos;t diminish the danger. Many of the
                    Vigilants were using an app from the{" "}
                    <span
                      onMouseEnter={() => handleMouseEnter("Innovator")}
                      onMouseLeave={handleMouseLeave}
                    >
                      Innovator
                      {renderHoverImage(
                        "Innovator",
                        "/backstory/modern/Innovator.png",
                        prev
                      )}
                    </span>
                    : a tracker for where the{" "}
                    <span
                      onMouseEnter={() => handleMouseEnter("Wendigo")}
                      onMouseLeave={handleMouseLeave}
                    >
                      Wendigo
                      {renderHoverImage(
                        "Wendigo",
                        "/backstory/modern/Wendigo.png",
                        prev
                      )}
                    </span>{" "}
                    or the{" "}
                    <span
                      onMouseEnter={() => handleMouseEnter("Gatherer")}
                      onMouseLeave={handleMouseLeave}
                    >
                      Gatherer
                      {renderHoverImage(
                        "Gatherer",
                        "/backstory/modern/Gatherer.png",
                        prev
                      )}
                    </span>
                    is now. Nominally there were no witnesses of harm from them.
                    So either there was no harm - or no surviving witnesses,
                    there is no answer to that question yet. Better to use the
                    app.
                  </div>
                </div>
                <br />
                <div style={{ marginTop: "80px", zIndex: 1000 }}>
                  Life in Ayyon has begun to at least remotely resemble the
                  times before the{" "}
                  <span>
                    <Link href="/backstory/nightmare_fuel">Nightmare Fuel</Link>
                  </span>{" "}
                  . At least now there was a warm, comforting existence - as
                  wild as it would have looked from the people of the past.
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className={cn("story__content", "story__content_padding")}>
              {/* <div className="story__head}>Next chapter</div> */}
              <div className="story__main">
                <div
                  className="story__slide"
                  onClick={() => slide("agreement")}
                >
                  <h2 className={cn("story__title", "story__subtitle")}>
                    <span>02</span>
                    <Image src={line} alt="" />
                    Agreement
                  </h2>
                  <div className="story__status__subtitle">Passed</div>
                </div>
                <div className="story__footer">
                  <h2 className={cn("story__title", "story__subtitle")}>
                    <span>03</span>
                    <Image src={line} alt="" />
                    Modern Ayyon
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
                      className={cn("story__back", "story__slide__empty")}
                      onClick={() => slide("1")}
                      alt="arrow"
                    />
                    <Image src={change} alt="" />

                    <Image
                      style={{ transform: "rotate(180deg)" }}
                      className={"story__back"}
                      src={arrow}
                      alt="arrow"
                      onClick={() => slide("agreement")}
                    />
                  </div>
                </div>
                <div
                  className={classNames("story__slide", "story__slide__empty")}
                >
                  <h2 className={classNames("story__title", "story__subtitle")}>
                    <span>03</span>
                    <Image src={line} alt="" />
                    Modre
                  </h2>
                  <div className="story__status__subtitle">
                    Work in progress
                  </div>
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
    </div>
  );
};

export default Modern;
