import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const accusations = [
  {
    number: "01",
    title: "THEFT OF HEARTS",
    description:
      "Suspect has allegedly stolen at least one best friend's heart and refuses to return it.",
    evidence: "Evidence: suspiciously cute face",
    icon: "💘",
  },
  {
    number: "02",
    title: "EXCESSIVE CUTENESS",
    description:
      "Multiple reports confirm that being this adorable should probably require a licence.",
    evidence: "Evidence: photographic records",
    icon: "🚨",
  },
  {
    number: "03",
    title: "DISTURBING THE PEACE",
    description:
      "Suspect causes emotional damage by being annoying, lovable, and impossible to stay mad at.",
    evidence: "Evidence: countless incidents",
    icon: "⚖️",
  },
];

function BreakingNews() {
  const navigate = useNavigate();

  const ticker =
    "BREAKING NEWS • KALLI CAUGHT BEING ICONIC • BEST FRIEND UNDER INVESTIGATION • " +
    "CUTENESS LEVELS EXCEED LEGAL LIMITS • MORE UPDATES NEVER COMING • ";

  return (
    <div className="min-h-screen bg-[#05030a] text-white overflow-hidden">
      {/* News ticker animation */}
      <style>{`
        @keyframes news-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .news-ticker {
          display: flex;
          width: max-content;
          animation: news-scroll 24s linear infinite;
        }

        .news-ticker:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .news-ticker {
            animation: none;
          }
        }
      `}</style>

      {/* Top newsroom bar */}
      <header className="border-b border-white/10 bg-[#100810]">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between gap-4">
          <div>
            <p className="font-black tracking-[0.2em] text-xl md:text-2xl">
              KNN<span className="text-pink-400">.</span>
            </p>
            <p className="text-[10px] tracking-[0.25em] text-gray-500">
              KALLI NEWS NETWORK
            </p>
          </div>

          <motion.div
            animate={{ opacity: [1, 0.55, 1] }}
            transition={{ duration: 1.3, repeat: Infinity }}
            className="flex items-center gap-2 border border-red-400/30 bg-red-500/10 px-3 py-2 rounded-full"
          >
            <span className="w-2 h-2 bg-red-500 rounded-full" />
            <span className="text-red-300 text-xs font-bold tracking-widest">
              LIVE
            </span>
          </motion.div>
        </div>
      </header>

      {/* Ticker */}
      <div className="bg-red-600 py-3 overflow-hidden">
        <div className="news-ticker">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex shrink-0"
              aria-hidden={copy === 1 ? "true" : undefined}
            >
              <span className="px-5 font-black tracking-wider text-sm">
                {ticker}
              </span>
            </div>
          ))}
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-5 py-14 md:py-20">
        {/* Headline */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-pink-300 uppercase tracking-[0.35em] text-xs md:text-sm mb-5">
            Special birthday investigation · Report 001
          </p>

          <h1 className="text-5xl md:text-8xl font-black leading-tight tracking-tight">
            <motion.span
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="block text-red-500"
            >
              BREAKING
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="block"
            >
              NEWS.
            </motion.span>
          </h1>

          <p className="elegant text-2xl md:text-3xl text-pink-100 mt-6">
            Local girl turns one year older.
          </p>

          <p className="text-gray-400 mt-3 max-w-2xl mx-auto leading-7">
            Authorities suspect absolutely nothing good. Her best friend has
            been taken in for questioning and is refusing to act normal.
          </p>
        </motion.section>

        {/* News alert strip */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="border-l-4 border-red-500 bg-red-500/10 p-5 mb-8"
        >
          <p className="text-red-300 font-bold tracking-widest text-xs mb-2">
            DEVELOPING STORY
          </p>
          <p className="text-lg md:text-xl">
            Birthday girl identified as the prime suspect in a series of
            dangerously adorable incidents.
          </p>
        </motion.div>

        {/* Accusations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {accusations.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.18 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 hover:border-pink-300/40 transition-colors"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-pink-300 text-sm font-mono">
                  CASE {item.number}
                </span>
                <span className="text-2xl">{item.icon}</span>
              </div>

              <h2 className="font-bold tracking-wide text-lg mb-3">
                {item.title}
              </h2>

              <p className="text-gray-400 leading-7 text-sm mb-6">
                {item.description}
              </p>

              <div className="border-t border-white/10 pt-4">
                <p className="text-pink-200/80 text-xs italic">
                  {item.evidence}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Reporter conclusion */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 text-xs uppercase tracking-[0.3em] mb-4">
            Exclusive statement from the reporter
          </p>

          <p className="handwritten text-3xl md:text-4xl text-pink-200 leading-relaxed max-w-2xl mx-auto">
            "After extensive investigation, I can confirm that she's guilty...
            of being my favourite headache." ♡
          </p>

          <p className="text-gray-500 text-sm mt-5 mb-9">
            This report is heavily biased. The reporter is her best friend.
          </p>

          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/nxt-floor")}
            className="rounded-full px-9 py-4 bg-pink-400 text-[#180712] font-semibold shadow-[0_0_30px_rgba(244,114,182,0.2)] hover:bg-pink-300 transition"
          >
            Continue the investigation →
          </motion.button>
        </motion.section>
      </main>

      <footer className="border-t border-white/10 py-6 text-center text-gray-600 text-xs tracking-wider">
        KNN · KALLI NEWS NETWORK · COMPLETELY UNRELIABLE SINCE DAY ONE
      </footer>
    </div>
  );
}

export default BreakingNews;