"use client";
import cn from "classnames";
import { FC, useEffect, useState } from "react";
import "../../../../styles/audio.scss";

const playlist = [
  "/player/awake.mp3",
  "/player/terminal.mp3",
  "/player/sleeping.mp3",
];

const Index: FC = () => {
  const [music, setMusic] = useState<HTMLAudioElement | undefined>(undefined);
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
    <div className={cn("audio", "audio_terminal")}>
      <div>
        <span
          className={cn("audio_title", musicStatus && "audio_title_changed")}
        >
          {playlist[activeTrack].replace("/player/", "")}
        </span>
        <div className="audio_author">Morpheus team</div>
      </div>
      <div
        onClick={() => !musicStatus && setMusicStatus(!musicStatus)}
        className={cn("audio_open")}
      >
        {
          <img
            src="/player/play.svg"
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
            <img src="/player/play.svg" />
          ) : (
            <img
              src="/player/pause.svg"
              onClick={() => setMusicStatus(!musicStatus)}
            />
          )}
        </div>
        {
          <img
            src="/player/play.svg"
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
  );
};

export default Index;
