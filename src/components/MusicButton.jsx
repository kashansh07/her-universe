import { useRef, useState } from "react";
import musicFile from "../assets/music/BlueBird.mp3";

function MusicButton() {

    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    const toggleMusic = () => {

        if (playing) {
            audioRef.current.pause();
        } 
          else {
            audioRef.current.play();
          }

          setPlaying(!playing);
    };

    return (
        <>
        <audio ref={audioRef} loop>
            <source src={musicFile} type="audio/mp3" />
        </audio>

        <button
           onClick={toggleMusic}
           className="fixed top-6 right-6 z-50 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 rounded-full text-white hover:scale-110 transition duration-300">
            {playing ? "Pause Music🌙" : "Play Music🎵"}
           </button>
        </>
    );
}

export default MusicButton;