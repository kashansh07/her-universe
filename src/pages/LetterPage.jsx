import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { letters } from "../data/letters";

function LetterPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const letter = letters.find(
    (item) => item.id === Number(id)
  );


  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);


  if (!letter) {
    return (
      <div className="min-h-screen bg-[#050816] text-white flex items-center justify-center">

        <h1 className="text-3xl">
          Letter not found 💔
        </h1>

      </div>
    );
  }


  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="min-h-screen bg-[#050816] text-white px-6 py-20"
    >

      {/* BACK BUTTON */}

      <motion.button
        initial={{
          opacity: 0,
          x: -30,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        onClick={() => navigate("/nxt-floor")}
        className="
          mb-16
          px-5
          py-3
          rounded-full
          border
          border-white/10
          bg-white/5
          backdrop-blur-md
          text-gray-300
          hover:bg-white/10
          hover:text-white
          transition
        "
      >
        ← Back to The Nxt Floor
      </motion.button>


      {/* LETTER */}

      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            rounded-[2rem]
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            px-8
            py-12
            md:px-16
            md:py-20
            shadow-[0_0_80px_rgba(255,255,255,0.04)]
          "
        >

          <p className="text-pink-200 text-sm uppercase tracking-[0.35em] mb-6">
            A letter for you
          </p>


          <h1 className="text-4xl md:text-6xl elegant mb-12">
            {letter.title}
          </h1>


          <TypeAnimation
            sequence={[letter.content]}
            wrapper="p"
            speed={100}
            cursor={true}
            className="
              handwritten
              text-gray-200
              text-3xl
              md:text-5xl
              leading-relaxed
            "
            style={{
              whiteSpace: "pre-line",
            }}
          />

        </motion.div>


        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 2,
            duration: 1,
          }}
          className="text-center mt-20 text-gray-500"
        >
          Made with a little bit of love 🌙
        </motion.div>

      </div>

    </motion.div>
  );
}

export default LetterPage;