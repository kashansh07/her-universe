import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  "You",
  "make",
  "every",
  "day",
  "brighter",
];

const colors = [
  "bg-pink-400",
  "bg-purple-400",
  "bg-blue-400",
  "bg-pink-300",
  "bg-purple-300",
];

function BalloonSection() {
  const [balloons, setBalloons] = useState([]);
  const [poppedWords, setPoppedWords] = useState([]);

  useEffect(() => {
    let id = 0;

    const spawnBalloon = () => {
      const balloon = {
        id: id++,
        word: words[Math.floor(Math.random() * words.length)],
        left: Math.random() * 90 + 5,
        size: Math.random() * 25 + 65,
        duration: Math.random() * 5 + 8,
        drift: Math.random() * 120 - 60,
        color: colors[Math.floor(Math.random() * colors.length)],
      };

      setBalloons((current) => [...current, balloon]);

      setTimeout(() => {
        setBalloons((current) =>
          current.filter((item) => item.id !== balloon.id)
        );
      }, (balloon.duration + 1) * 1000);
    };

    // Initial balloons
    for (let i = 0; i < 8; i++) {
      setTimeout(() => {
        spawnBalloon();
      }, i * 500);
    }

    // Continuous spawning
    const interval = setInterval(spawnBalloon, 1400);

    return () => clearInterval(interval);
  }, []);

  const popBalloon = (balloon) => {
    setBalloons((current) =>
      current.filter((item) => item.id !== balloon.id)
    );

    setPoppedWords((current) => {
      if (current.includes(balloon.word)) {
        return current;
      }

      return [...current, balloon.word];
    });
  };

  return (
    <>
      {/* FULL SCREEN BALLOON LAYER */}

      <div className="fixed inset-0 z-40 pointer-events-none overflow-hidden">

        <AnimatePresence>

          {balloons.map((balloon) => (

            <motion.button
              key={balloon.id}
              onClick={() => popBalloon(balloon)}

              initial={{
                y: "110vh",
                x: 0,
                opacity: 0,
              }}

              animate={{
                y: "-120vh",
                x: [
                  0,
                  balloon.drift,
                  -balloon.drift,
                  balloon.drift / 2,
                ],
                opacity: [0, 1, 1, 1],
              }}

              exit={{
                scale: 1.5,
                opacity: 0,
              }}

              transition={{
                duration: balloon.duration,
                ease: "linear",
                x: {
                  duration: balloon.duration,
                  ease: "easeInOut",
                },
              }}

              className="
                absolute
                bottom-0
                pointer-events-auto
                cursor-crosshair
              "

              style={{
                left: `${balloon.left}%`,
              }}
            >

              {/* BALLOON */}

              <div className="flex flex-col items-center">

                <div
                  className={`
                    ${balloon.color}
                    rounded-[50%]
                    shadow-[0_0_35px_rgba(255,255,255,0.2)]
                    transition-transform
                  `}
                  style={{
                    width: `${balloon.size}px`,
                    height: `${balloon.size * 1.25}px`,
                  }}
                />

                {/* Knot */}

                <div
                  className={`
                    ${balloon.color}
                    w-3
                    h-3
                    rotate-45
                    -mt-1
                  `}
                />

                {/* String */}

                <div className="w-px h-24 bg-white/30" />

              </div>

            </motion.button>

          ))}

        </AnimatePresence>
      </div>


      {/* MESSAGE */}

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">

        <div className="flex flex-wrap justify-center gap-x-3 max-w-[90vw]">

          {words.map((word) => {

            const revealed = poppedWords.includes(word);

            return (
              <motion.span
                key={word}
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  y: 20,
                }}
                animate={
                  revealed
                    ? {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                      }
                    : {
                        opacity: 0,
                      }
                }
                transition={{
                  duration: 0.5,
                  type: "spring",
                }}
                className="
                  handwritten
                  text-3xl
                  md:text-5xl
                  text-white
                  drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]
                "
              >
                {word}
              </motion.span>
            );
          })}

        </div>

      </div>
    </>
  );
}

export default BalloonSection;