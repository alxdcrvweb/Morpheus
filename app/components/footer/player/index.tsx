"use client";
import cn from "classnames";
import { FC, useEffect, useState } from "react";
import "@/styles/audio.scss";
import Image from "next/image";
import play from "@/public/player/play.svg";
import pause from "@/public/player/pause.svg";

const playlist = [
  {
    path: "/player/music/vigilant.mp3",
    title: "VIGILANT OST",
    artist: "Morpheus Team",
    cover: "/player/playerBackground.png",
  },
  {
    path: "/player/music/sleeper.mp3",
    title: "SLEEPER OST",
    artist: "Morpheus Team",
    cover: "/player/playerBackground.png",
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
      activateMusic(playlist[activeTrack].path);
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
    if (currentTrack == playlist[activeTrack].path && music) {
      music.play();
      music.loop = true;
      music.volume = 0.2;
      localStorage.setItem("audio", "true");
    } else if (music && currentTrack !== playlist[activeTrack].path) {
      music.src = playlist[activeTrack + 1]
        ? playlist[activeTrack + 1].path
        : playlist[0].path;
      const index = playlist.findIndex((el) => el.path == currentTrack);
      setMusicStatus(true);
      setActiveTrack(index);
      music.play();
      music.loop = true;
      music.volume = 0.2;
    }
  };
  useEffect(() => {
    setMusic(new Audio(playlist[0].path));
  }, []);
  return (
    <>
      <div
        className={cn(
          "audio_start",
          init ? "audio_start_active" : "audio_start_off"
        )}
        onClick={() => {
          setMusicStatus(!musicStatus);
          setInit(true);
        }}
      >
        {!init && <Image src={play} alt="play" />}
      </div>
      <div
        className={cn("audio", init && "audio_active")}
        style={{ backgroundImage: `url(${playlist[activeTrack].cover})` }}
      >
        <div>
          <span
            className={cn("audio_title", musicStatus && "audio_title_changed")}
          >
            {playlist[activeTrack].title}
          </span>
          <div className="audio_author">{playlist[activeTrack].artist}</div>
        </div>
        <div
          onClick={() => !musicStatus && setMusicStatus(!musicStatus)}
          className={cn("audio_open")}
        >
          <Image
            alt="play"
            src={play}
            className="audio_change_reverse"
            onClick={() => {
              if (activeTrack > 0) {
                activateMusic(playlist[activeTrack - 1].path);
              } else {
                activateMusic(playlist[playlist.length - 1].path);
              }
            }}
          />

          <div className="audio_pause">
            <Image
              src={pause}
              alt="pause"
              onClick={() => {
                setInit(false);
                setMusicStatus(!musicStatus);
              }}
            />
          </div>

          <Image
            alt="next"
            src={play}
            className="audio_change"
            onClick={() => {
              if (activeTrack < playlist.length - 1) {
                activateMusic(playlist[activeTrack + 1].path);
              } else {
                activateMusic(playlist[0].path);
              }
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Player;
