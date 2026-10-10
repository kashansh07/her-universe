import { motion } from "framer-motion";

const confetti = Array.from({ length: 45 }, (_, index) => ({
  id: index,
  left: Math.random() * 100,
  delay: Math.random() * 5,
  duration: Math.random() * 5 + 5,
  rotate: Math.random() * 360,
  size: Math.random() * 5 + 4,
}));

function BirthdayDecor() {
  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">

      {/* TOP PARTY LIGHTS */}

      <div className="absolute top-0 left-0 right-0 flex justify-between px-6 md:px-20">

        {Array.from({ length: 14 }).map((_, index) => (
          <motion.div
            key={index}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.15, 0.8],
            }}
            transition={{
              duration: 2,
              delay: index * 0.15,
              repeat: Infinity,
            }}
            className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-pink-200 shadow-[0_0_12px_rgba(255,255,255,0.8)]"
          />
        ))}

      </div>


      {/* SIDE STREAMERS */}

      <div className="absolute top-0 left-4 md:left-10 w-1 h-48 bg-gradient-to-b from-pink-300/40 to-transparent rotate-12" />

      <div className="absolute top-0 right-4 md:right-10 w-1 h-56 bg-gradient-to-b from-purple-300/40 to-transparent -rotate-12" />


      {/* CONFETTI */}

      {confetti.map((piece) => (

        <motion.span
          key={piece.id}
          initial={{
            y: "-10vh",
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            y: "110vh",
            opacity: [0, 1, 1, 0],
            rotate: piece.rotate,
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute rounded-sm"
          style={{
            left: `${piece.left}%`,
            width: `${piece.size}px`,
            height: `${piece.size * 1.8}px`,
            background: "rgba(255,255,255,0.45)",
          }}
        />

      ))}


      {/* CORNER DECORATIONS */}

      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [-3, 3, -3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-24 left-6 md:left-16 text-3xl md:text-5xl"
      >
        🎁
      </motion.div>


      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [3, -3, 3],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-32 right-6 md:right-16 text-3xl md:text-5xl"
      >
        🎂
      </motion.div>


      {/* FLOATING SPARKLES */}

      <div className="absolute inset-0">

        {Array.from({ length: 18 }).map((_, index) => (

          <motion.span
            key={index}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              delay: Math.random() * 3,
              repeat: Infinity,
            }}
            className="absolute text-white text-sm md:text-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            ✦
          </motion.span>

        ))}

      </div>

    </div>
  );
}

export default BirthdayDecor;