import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import FeatureCard from "../template/FeaturedCard";
import LoadingSkeleton from "../template/LoadingSkeleton";

export default function AboutMe() {
  const { theme } = useTheme();
  const { translations } = useLanguage();

  if (!translations) {
    return <LoadingSkeleton />;
  }

  const { about } = translations;

  return (
    <section
      className={`flex flex-col items-center justify-center py-16 px-6 transition-colors duration-500 ${
        theme === "dark" ? "bg-slate-900" : "bg-slate-300"
      }`}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`text-3xl md:text-4xl font-extrabold mb-6 text-center ${
          theme === "dark" ? "text-slate-50" : "text-slate-900"
        }`}
      >
        {about.title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className={`max-w-3xl text-center text-sm md:text-lg leading-relaxed ${
          theme === "dark" ? "text-slate-50" : "text-slate-900"
        }`}
      >
        {about.ima}{" "}
        <span className="text-blue-400 font-medium">Web Developer</span>{" "}
        {about.focusat}
        <span className="text-teal-400 font-medium">ReactJS</span>,{" "}
        <span className="text-indigo-400 font-medium">Tailwind CSS</span>,{" "}
        {about.more}
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1 },
        }}
        transition={{ duration: 0.5 }}
        className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl"
      >
        <FeatureCard
          theme={theme}
          color="bg-blue-500"
          iconPath="M14 9l-3 3m0 0l-3-3m3 3V4m-7 16h14"
          text={
            <>
              {about.react}{" "}
              <span className="text-blue-400 font-medium">ReactJS</span>.
            </>
          }
        />
        <FeatureCard
          theme={theme}
          color="bg-teal-500"
          iconPath="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4c2.21 0 4-1.79 4-4s-1.79-4-4-4z"
          text={
            <>
              {about.tailwind}{" "}
              <span className="text-teal-400 font-medium">Tailwind CSS</span>.
            </>
          }
        />
        <FeatureCard
          theme={theme}
          color="bg-indigo-500"
          iconPath="M3 10h11m-5 4l5-4-5-4v8zm5-4h8v10H3V4h5"
          text={
            <>
              {about.mysql.first}{" "}
              <span className="text-indigo-400 font-medium">MySQL</span>{" "}
              {about.mysql.last}
            </>
          }
        />
        <FeatureCard
          theme={theme}
          color="bg-purple-500"
          iconPath="M14.752 11.168l-3.197 5.533m-.976-3.21A6.03 6.03 0 013.33 6.035c-.944 1.615-1.54 3.272-1.54 5.097 0 6.254 5.486 11.33 12.21 11.33a12.21 12.21 0 004.49-.807M6.843 2.871l-3.197 5.534m8.064-2.324a6.03 6.03 0 011.274 7.137M3.3 3.743a6.036 6.036 0 018.2-.063"
          text={about.cyber}
        />
      </motion.div>
    </section>
  );
}
