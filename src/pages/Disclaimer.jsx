import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const clauses = [
  "You may be roasted without prior notice.",
  "Your embarrassing moments may be presented as historical evidence.",
  "Excessive affection and emotional damage are highly probable.",
  "The person responsible accepts zero liability for your dramatic reactions.",
];

function Disclaimer() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#05030a] text-white px-5 py-12 md:px-10 flex items-center justify-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      {/* Decorative background stamp */}
      <div className="absolute top-8 right-8 md:top-12 md:right-16 rotate-12 border-2 border-red-400/30 text-red-300/50 px-4 py-2 text-xs md:text-sm tracking-[0.3em] font-bold">
        TOP SECRET
      </div>

      <motion.main
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-3xl border border-pink-300/20 bg-white/[0.04] backdrop-blur-xl rounded-3xl p-6 md:p-12 shadow-[0_0_80px_rgba(236,72,153,0.08)]"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-pink-300 uppercase tracking-[0.35em] text-xs mb-3">
            Official Disclaimer · Case No. 1010
          </p>

          <div className="text-4xl mb-4">⚖️</div>

          <h1 className="elegant text-4xl md:text-6xl font-bold text-pink-100">
            Before you proceed,
          </h1>

          <h2 className="handwritten text-5xl md:text-7xl text-pink-300 mt-2">
            Kalli...
          </h2>

          <div className="w-24 h-px bg-pink-300/50 mx-auto mt-6" />
        </div>

        {/* Introduction */}
        <p className="text-gray-300 text-center leading-7 max-w-xl mx-auto mb-9">
          This website has been created by a highly unreliable individual
          with suspicious amounts of your photographs, questionable
          intentions, and absolutely no intention of letting you have a
          normal birthday.
        </p>

        {/* Terms and conditions */}
        <div className="mb-8">
          <h3 className="elegant text-2xl md:text-3xl text-pink-200 mb-5">
            By proceeding, you acknowledge that:
          </h3>

          <div className="space-y-5">
            {clauses.map((clause, index) => (
              <motion.div
                key={clause}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.12 }}
                className="flex items-start gap-4"
              >
                <span className="text-pink-300 text-xl leading-6">☑</span>
                <p className="text-gray-300 leading-6">{clause}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Warning */}
        <div className="border-y border-pink-300/20 py-5 my-8 text-center">
          <p className="text-pink-300 italic leading-7">
            ⚠ Warning: This website contains dangerously high levels of love
            disguised as nonsense. ⚠
          </p>
        </div>

        {/* Final question */}
        <h3 className="elegant text-2xl md:text-3xl text-center mb-7">
          Do you accept the consequences?
        </h3>

        {/* Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/home")}
            className="rounded-full px-6 py-4 bg-pink-400 text-[#180712] font-semibold shadow-[0_0_25px_rgba(244,114,182,0.2)] hover:bg-pink-300 transition"
          >
            I accept my fate 💀
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/lawyer")}
            className="rounded-full px-6 py-4 border border-pink-300/50 bg-white/[0.03] text-pink-200 hover:bg-pink-300/10 transition"
          >
            ⚖️ I need a lawyer
          </motion.button>
        </div>

        <p className="text-gray-500 text-xs text-center mt-7 tracking-wide">
          BY CLICKING ANY BUTTON, YOU AGREE THAT YOUR BEST FRIEND IS NOT
          RESPONSIBLE FOR YOUR LAUGHTER.
        </p>

        <p className="handwritten text-pink-300/80 text-xl text-center mt-5">
          Too late. You're already in trouble. ♡
        </p>
      </motion.main>
    </div>
  );
}

export default Disclaimer;