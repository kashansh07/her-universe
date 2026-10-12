import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import homeMusic from "../assets/music/home.mp3";
import nxtFloorMusic from "../assets/music/birthday.mp3";
import letter1Music from "../assets/music/letter1.mp3";
import letter2Music from "../assets/music/letter2.mp3";
import letter3Music from "../assets/music/letter3.mp3";
import letter4Music from "../assets/music/letter4.mp3";
import letter5Music from "../assets/music/letter5.mp3";

const musicMap = {
  "/home": homeMusic,
  "/nxt-floor": nxtFloorMusic,
  "/letter/1": letter1Music,
  "/letter/2": letter2Music,
  "/letter/3": letter3Music,
  "/letter/4": letter4Music,
  "/letter/5": letter5Music,
};

function MusicButton() {
  const audioRef = useRef(null);
  const location = useLocation();

  const [playing, setPlaying] = useState(false);
  const [currentMusic, setCurrentMusic] = useState("");

  useEffect(() => {
    const music = musicMap[location.pathname];

    if (!music || !audioRef.current) return;

    const changeMusic = async () => {
      audioRef.current.pause();

      audioRef.current.src = music;
      audioRef.current.currentTime = 0;

      setCurrentMusic(music);

      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch (error) {
        // Browser may block autoplay.
        // User can start it using the button.
        setPlaying(false);
      }
    };

    changeMusic();
  }, [location.pathname]);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setPlaying(true);
    } catch (error) {
      console.log("Music could not start:", error);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
      />

      <button
        onClick={toggleMusic}
        className="
          fixed
          top-6
          right-6
          z-50
          px-5
          py-3
          rounded-full
          bg-white/10
          backdrop-blur-md
          border
          border-white/20
          text-white
          shadow-[0_0_25px_rgba(255,255,255,0.08)]
          hover:bg-white/20
          hover:scale-105
          transition
        "
      >
        {playing ? "🔊 Music On" : "🎵 Music"}
      </button>
    </>
  );
}

export default MusicButton;