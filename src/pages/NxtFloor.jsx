import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { letters } from "../data/letters";
import BirthdayCake from "../components/BirthdayCake";

function NxtFloor() {
  const navigate = useNavigate();

  // Always start from the top when entering this page
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#050816] text-white">

      {/* BIRTHDAY CAKE */}

      <BirthdayCake />


      {/* INTRO */}

      <section className="min-h-[70vh] flex items-center justify-center px-6">

        <motion.div
          initial={{
            opacity: 0,
            scale: 1.2,
            y: 50,
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
          className="text-center max-w-3xl"
        >

          <p className="text-pink-200 text-lg mb-6">
            You made it here ✨
          </p>

          <h1 className="text-5xl md:text-8xl font-bold mb-8">
            The Nxt Floor
          </h1>

          <p className="text-gray-300 text-lg md:text-2xl leading-relaxed">
            Some things are easier to write than say.
            <br />
            So I left a few words here for you.
          </p>

        </motion.div>

      </section>


      {/* LETTERS */}

      <section className="max-w-5xl mx-auto px-6 pb-32">

        <motion.h2
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-4xl md:text-6xl font-semibold text-center mb-20"
        >
          A few letters 💌
        </motion.h2>


        <div className="space-y-10">

          {letters.map((letter, index) => (

            <motion.div
              key={letter.id}
              initial={{
                opacity: 0,
                x: -100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.02,
                x: 10,
              }}
              onClick={() => navigate(`/letter/${letter.id}`)}
              className="
                cursor-pointer
                p-8
                md:p-10
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-md
                hover:bg-white/10
                transition
              "
            >

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                <div>

                  <p className="text-pink-200 text-sm tracking-[0.3em] uppercase mb-3">
                    Letter {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="text-2xl md:text-4xl font-semibold mb-3">
                    {letter.title}
                  </h3>

                  <p className="text-gray-400 text-lg">
                    {letter.preview}
                  </p>

                </div>

                <div className="text-3xl">
                  💌
                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default NxtFloor;