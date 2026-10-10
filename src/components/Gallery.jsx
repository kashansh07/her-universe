import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img11 from "../assets/images/img11.jpg";
import img12 from "../assets/images/img12.jpg";
//import img6 from "../assets/images/img6.jpg";

// Add your videos here if you want to import them instead
import video1 from "../assets/videos/video1.mp4";

const memories = [
  {
    type: "photo",
    src: img1,
    title: "The first little memory",
    text: "Some moments quietly become permanent.",
  },

  {
    type: "photo",
    src: img2,
    title: "A day worth remembering",
    text: "The kind of day I'd happily experience again.",
  },

  {
    type: "video",
    src: video1,
    title: "A little moment",
    text: "Some memories are better when they move.",
  },

  {
    type: "photo",
    src: img3,
    title: "That smile",
    text: "Probably one of my favourite things in this universe.",
  },

  {
    type: "photo",
    src: img11,
    title: "The first little memory",
    text: "Some moments quietly become permanent.",
  },

  {
    type: "photo",
    src: img12,
    title: "A day worth remembering",
    text: "The kind of day I'd happily experience again.",
  },
];

  // {
  //   type: "photo",
  //   src: img6,
  //   title: "Another little moment",
  //   text: "A memory that deserved its own little space.",
  // },

  // Add more memories here
  //
  // {
  //   type: "video",
  //   src: "/videos/video2.mp4",
  //   title: "Another little moment",
  //   text: "A memory that deserved its own little space.",
  // },
// ];

function VideoCard({ src, title }) {
  const videoRef = useRef(null);
  const cardRef = useRef(null);

  // Play / pause based on scrolling
  useEffect(() => {
    const video = videoRef.current;
    const card = cardRef.current;

    if (!video || !card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(card);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Play when hovered
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  // Pause when mouse leaves
  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden rounded-3xl"
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={title}
        className="
          w-full
          h-[350px]
          md:h-[420px]
          object-cover
          bg-black
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

      {/* Video overlay */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/50
          via-transparent
          to-transparent
          pointer-events-none
        "
      />

      {/* Muted indicator */}

      <div
        className="
          absolute
          top-4
          right-4
          px-3
          py-2
          rounded-full
          bg-black/40
          backdrop-blur-md
          text-sm
          text-white
          pointer-events-none
        "
      >
        🔇
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <section className="px-6 py-32">

      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADING */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
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
          className="text-center mb-20"
        >

          <p className="text-pink-200 text-lg mb-4">
            Little pieces of time
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            A few pieces of you 📸
          </h2>

          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
            Some photographs are just photographs.
            <br />
            And then there are the ones that somehow hold an entire moment.
          </p>

        </motion.div>


        {/* MEMORY GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">

          {memories.map((memory, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 80,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: (index % 2) * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >

              {/* MEDIA */}

              <motion.div
                whileHover={{
                  scale: 1.02,
                  y: -5,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                "
              >

                {memory.type === "video" ? (

                  <VideoCard
                    src={memory.src}
                    title={memory.title}
                  />

                ) : (

                  <>
                    <img
                      src={memory.src}
                      alt={memory.title}
                      className="
                        w-full
                        h-[350px]
                        md:h-[420px]
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/50
                        via-transparent
                        to-transparent
                        opacity-60
                        group-hover:opacity-80
                        transition
                        pointer-events-none
                      "
                    />
                  </>

                )}

              </motion.div>


              {/* MEMORY TEXT */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                }}
                className="px-2 pt-6"
              >

                <p className="text-pink-200 text-sm uppercase tracking-[0.3em] mb-3">
                  Memory {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                  {memory.title}
                </h3>

                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  {memory.text}
                </p>

              </motion.div>

            </motion.div>

          ))}

        </div>


        {/* GALLERY MESSAGE */}

        <motion.h2
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
          className="
            text-center
            mt-24
            text-2xl
            md:text-4xl
            elegant
            text-gray-300
          "
        >
          this gallery will keep updating with time
        </motion.h2>

      </div>

    </section>
  );
}

export default Gallery;