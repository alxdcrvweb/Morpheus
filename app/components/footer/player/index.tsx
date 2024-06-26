"use client";
import cn from "classnames";
import { FC, useEffect, useState } from "react";
import "../../../../styles/audio.scss";
import Image from "next/image";
import play from "../../../../public/player/play.svg";
import pause from "../../../../public/player/pause.svg";

const playlist = [
  "/player/awake.mp3",
  // "/player/terminal.mp3",
  "/player/sleeping.mp3",
];

//temporary solution
const titles = ["VIGILANT OST", "SLEEPER OST"];

//so the idea is to be able to add songs and change cover
// we need a more complex object to do this

//example object
const playlist_2 = [
  {
    path: "/player/awake.mp3",
    title: "VIGILAN OST",
    cover: "/public/music/vigilant.png",
  },
];

//and so on

const Player: FC = () => {
  const [music, setMusic] = useState<HTMLAudioElement | undefined>(undefined);
  const [init, setInit] = useState<boolean>(false);
  const [activeTrack, setActiveTrack] = useState(0);
  const [musicStatus, setMusicStatus] = useState(false);
  useEffect(() => {
    if (musicStatus) {
      activateMusic(playlist[activeTrack]);
    } else {
      activateMusic("");
    }
  }, [musicStatus]);

  const activateMusic = (currentTrack: string) => {
    if (music && currentTrack == "") {
      music.pause();
      music.volume = 0;
      localStorage.setItem("audio", "false");
      return;
    }
    if (currentTrack == playlist[activeTrack] && music) {
      music.play();
      music.loop = true;
      music.volume = 0.2;
      localStorage.setItem("audio", "true");
    } else if (music && currentTrack !== playlist[activeTrack]) {
      music.src = playlist[activeTrack + 1]
        ? playlist[activeTrack + 1]
        : playlist[0];
      const index = playlist.findIndex((el) => el == currentTrack);
      setMusicStatus(true);
      setActiveTrack(index);
      music.play();
      music.loop = true;
      music.volume = 0.2;
    }
  };
  useEffect(() => {
    setMusic(new Audio(playlist[0]));
  }, []);
  return (
    <>
      <div
        className={cn("audio_start", init && "audio_start_active")}
        onClick={() => {
          setMusicStatus(!musicStatus);
          setInit(true);
        }}
      >
        {!init && <Image src={play} alt="play" />}
      </div>
      <div className={cn("audio", init && "audio_active")}>
        <div>
          <span
            className={cn("audio_title", musicStatus && "audio_title_changed")}
          >
            {titles[activeTrack]}
          </span>
          <div className="audio_author">Morpheus team</div>
        </div>
        <div
          onClick={() => !musicStatus && setMusicStatus(!musicStatus)}
          className={cn("audio_open")}
        >
          {
            <Image
              alt="play"
              src={play}
              className="audio_change_reverse"
              onClick={() => {
                if (activeTrack > 0) {
                  activateMusic(playlist[activeTrack - 1]);
                } else {
                  activateMusic(playlist[playlist.length - 1]);
                }
              }}
            />
          }
          <div className="audio_pause">
            {!musicStatus ? (
              <Image
                src={play}
                alt="play"
                onClick={() => setMusicStatus(!musicStatus)}
              />
            ) : (
              <Image
                src={pause}
                alt="pause"
                onClick={() => setMusicStatus(!musicStatus)}
              />
            )}
          </div>
          {
            <Image
              alt="next"
              src={play}
              className="audio_change"
              onClick={() => {
                if (activeTrack < playlist.length - 1) {
                  activateMusic(playlist[activeTrack + 1]);
                } else {
                  activateMusic(playlist[0]);
                }
              }}
            />
          }
        </div>
      </div>
    </>
  );
};

export default Player;
