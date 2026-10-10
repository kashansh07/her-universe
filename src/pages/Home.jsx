import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Gallery from "../components/Gallery";
import BalloonSection from "../components/BalloonSection";
import BirthdayDecor from "../components/BirthdayDecor";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-x-hidden">

      <BirthdayDecor />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6">

        <div className="relative z-10 text-center max-w-4xl">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-pink-200 text-lg md:text-xl mb-6"
          >
            A little place made just for you
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              scale: 1.8,
              y: 80,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-5xl md:text-8xl font-bold"
          >
            Happy Birthday Rossiee🌹
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.4,
              duration: 1,
            }}
            className="mt-8 text-gray-300 text-lg md:text-2xl leading-relaxed"
          >
            Some people deserve more than a birthday wish.
            <br />

            They deserve an entire little universe.

            <br />
            <br />

            Balloon ko fodiyega 🏹,
            kuchh hehe hai.
          </motion.p>

        </div>

      </section>


      {/* BALLOONS */}

      <BalloonSection />


      {/* GALLERY */}

      <Gallery />


      {/* THE NXT FLOOR */}

      <section className="min-h-screen flex flex-col items-center justify-center px-6">

        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="text-gray-400 text-lg mb-8"
        >
          And this is only the beginning...
        </motion.p>


        <motion.button
          onClick={() => navigate("/breaking-news")}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.08, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-5 rounded-full border border-pink-200/30 bg-white/5 backdrop-blur-md text-xl md:text-2xl font-medium shadow-[0_0_40px_rgba(255,255,255,0.08)] hover:bg-white/10 transition"
        >
        Wait... Breaking News? 🚨
        </motion.button>

      </section>

    </div>
  );
}

export default Home;