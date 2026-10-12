import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function BirthdayCake() {

  const [candlesOut, setCandlesOut] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setCandlesOut(true);
    }, 4000);

    return () => clearTimeout(timer);

  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
          y: 80,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="text-center"
      >

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-pink-200 text-lg md:text-xl mb-4"
        >
          Make a wish... ✨
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-3xl md:text-5xl font-semibold mb-14"
        >
          Blow the candles 🎂
        </motion.h1>


        {/* CAKE */}

        <div className="relative inline-flex flex-col items-center">

          {/* CANDLES */}

          <div className="flex gap-6 mb-[-2px]">

            {[1, 2, 3].map((candle) => (

              <div
                key={candle}
                className="relative flex flex-col items-center"
              >

                {/* Flame */}

                {!candlesOut && (

                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{
                      opacity: [1, 0.7, 1],
                      scale: [1, 1.15, 0.95],
                    }}
                    transition={{
                      duration: 1 ,
                      repeat: Infinity,
                    }}
                    className="
                      absolute
                      -top-8
                      w-4
                      h-6
                      rounded-full
                      bg-orange-300
                      shadow-[0_0_20px_rgba(255,180,80,0.9)]
                    "
                  />

                )}

                {/* Candle */}

                <div className="
                  w-4
                  h-16
                  rounded-t-md
                  bg-pink-300
                  border
                  border-white/20
                " />

              </div>

            ))}

          </div>


          {/* CAKE TOP */}

          <div className="
            w-64
            md:w-80
            h-20
            rounded-t-[2rem]
            bg-pink-300/90
            border
            border-white/20
            shadow-[0_0_50px_rgba(255,150,200,0.2)]
          ">

            <div className="flex justify-around pt-5 text-white/80">
              <span>♡</span>
              <span>♡</span>
              <span>♡</span>
              <span>♡</span>
              <span>♡</span>
            </div>

          </div>


          {/* CAKE BODY */}

          <div className="
            w-72
            md:w-96
            h-24
            bg-pink-400/80
            rounded-b-[2rem]
            border
            border-white/20
            shadow-[0_20px_60px_rgba(255,100,180,0.15)]
          " />

        </div>


        {/* MESSAGE AFTER FLAMES */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={
            candlesOut
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          transition={{
            duration: 1,
          }}
          className="mt-14"
        >

          <p className="handwritten text-3xl md:text-5xl">
            Happy Birthday, KALLLIIIII 🌹
          </p>

          <p className="text-gray-400 mt-4">
            May this year give you more reasons to smile.
          </p>

        </motion.div>

      </motion.div>

    </section>
  );
}

export default BirthdayCake;