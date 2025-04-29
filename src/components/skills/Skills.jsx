import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";

const skills = [
  { name: "ReactJS", color: "bg-blue-500", icon: "⚛️" },
  { name: "Next.js", color: "bg-black", icon: "⏭️" },
  { name: "Tailwind CSS", color: "bg-teal-500", icon: "💨" },
  { name: "JavaScript", color: "bg-yellow-400", icon: "📜" },
  { name: "API Development", color: "bg-indigo-500", icon: "🔗" },
  { name: "Express.js", color: "bg-green-600", icon: "🚂" },
  { name: "PHP", color: "bg-purple-600", icon: "🐘" },
  { name: "MySQL", color: "bg-yellow-500", icon: "🛢️" },
  { name: "Git & GitHub", color: "bg-gray-700", icon: "🐙" },
];

export default function Skills() {
  const { translations } = useLanguage();
  const { theme } = useTheme();

  if (!translations) {
    return <p className="text-center mt-8">Loading...</p>; // Sedikit centering + spacing biar rapi
  }

  const { myskills } = translations;

  return (
    <section className={`py-16 px-6 ${theme === "dark" ? "bg-slate-800" : "bg-slate-100"}`}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`text-3xl md:text-4xl font-extrabold mb-8 text-center ${theme === "dark" ? "text-slate-50" : "text-slate-900"}`}
      >
        {myskills.title}
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`flex flex-col items-center justify-center p-6 rounded-xl shadow-lg cursor-pointer ${skill.color}`}
          >
            <div className="text-4xl md:text-5xl text-white mb-4">{skill.icon}</div>
            <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
