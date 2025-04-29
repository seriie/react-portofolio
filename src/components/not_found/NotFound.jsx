import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  const location = useLocation();
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-800 via-slate-900 to-black text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-xl w-full backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/20 shadow-xl"
      >
        <p className="mb-4 text-sm md:text-base text-slate-300">
          You were trying to access:
        </p>
        <p className="mb-8 text-lg font-semibold text-pink-400 break-words">
          {pathname}
        </p>

        <motion.h1
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-md"
        >
          404
        </motion.h1>

        <p className="text-lg md:text-xl text-slate-300 mb-8">
          Sorry, page not found 😢
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.history.back()}
          className="bg-white/10 text-white px-6 py-3 rounded-lg border border-white/20 backdrop-blur hover:bg-white/20 transition-all duration-300 shadow-md"
        >
          ⬅️ Go Back
        </motion.button>
      </motion.div>
    </section>
  );
}
