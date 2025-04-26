import { motion } from "framer-motion";

export default function FeatureCard({ theme, color, iconPath, text }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-start space-x-4 transition-transform duration-300"
    >
      <div
        className={`w-10 h-10 flex-shrink-0 flex items-center justify-center ${color} rounded-lg text-white`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
        </svg>
      </div>
      <p
        className={`text-sm md:text-base ${
          theme === "dark" ? "text-slate-50" : "text-slate-900"
        }`}
      >
        {text}
      </p>
    </motion.div>
  );
}