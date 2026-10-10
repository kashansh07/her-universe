import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function LawyerPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#05030a] text-white flex items-center justify-center px-6 py-16 relative overflow-hidden">
      {/* Pink courtroom glow */}
      <div className="absolute w-80 h-80 bg-pink-500/10 rounded-full blur-3xl top-10 left-10" />
      <div className="absolute w-80 h-80 bg-purple-500/10 rounded-full blur-3xl bottom-10 right-10" />

      <motion.main
        initial={{ opacity: 0, y: 35, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-xl text-center border border-pink-300/20 bg-white/[0.04] backdrop-blur-xl rounded-3xl p-7 md:p-10 shadow-[0_0_60px_rgba(236,72,153,0.08)]"
      >
        <p className="uppercase tracking-[0.3em] text-pink-300 text-xs mb-6">
          Legal Assistance Department
        </p>

        {/* Add your lawyer picture to public/lawyer.jpg */}
        <motion.div
          initial={{ rotate: -5, scale: 0.8 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mb-7 w-56 h-56 rounded-2xl overflow-hidden border border-pink-300/30 shadow-[0_0_35px_rgba(236,72,153,0.15)]"
        >
          <img
            src="/lawyer.jpg"
            alt="Your temporarily unavailable birthday lawyer"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <p className="text-pink-300 text-sm tracking-widest mb-2">
          CASE STATUS: LAWYER IN TRAINING
        </p>

        <h1 className="handwritten text-5xl md:text-6xl text-pink-200 mb-5">
          Hey, Kalli! ⚖️
        </h1>

        <p className="elegant text-2xl md:text-3xl leading-relaxed text-gray-100">
          You're a bit early.
        </p>

        <p className="text-gray-300 leading-8 mt-5 mb-8">
          It will take me some time before I complete learning law, so go
          accept your fate for now. 😭
        </p>

        <div className="border-y border-pink-300/20 py-4 mb-8">
          <p className="text-pink-200/80 text-sm italic">
            "Your case is important to me. Unfortunately, so are my exams."
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/disclaimer")}
          className="w-full rounded-full px-6 py-4 bg-pink-400 text-[#180712] font-semibold shadow-[0_0_25px_rgba(244,114,182,0.2)] hover:bg-pink-300 transition"
        >
          Fine, I'll accept my fate 💀 →
        </motion.button>

        <p className="text-gray-500 text-xs mt-5">
          No legal advice. No refunds. No escape.
        </p>
      </motion.main>
    </div>
  );
}

export default LawyerPage; 