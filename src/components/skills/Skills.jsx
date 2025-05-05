import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";

const skills = [
  { name: "ReactJS", icon: "⚛️", background: "bg-blue-400" },
  { name: "Next.js", icon: "⏭️", background: "bg-neutral-800" },
  { name: "Tailwind CSS", icon: "💨", background: "bg-teal-400" },
  { name: "JavaScript", icon: "📜", background: "bg-yellow-300" },
  { name: "API Development", icon: "🔗", background: "bg-indigo-400" },
  { name: "Express.js", icon: "🚂", background: "bg-green-500" },
  { name: "PHP", icon: "🐘", background: "bg-purple-500" },
  { name: "MySQL", icon: "🛢️", background: "bg-amber-500" },
  { name: "Git & GitHub", icon: "🐙", background: "bg-gray-600" },
];


export default function Skills() {
  const { translations } = useLanguage();
  const { theme } = useTheme();

  if (!translations) {
    return <p className="text-center mt-8">Loading...</p>;
  }

  const { myskills } = translations;

  return (
    <section className={`py-16 px-6 ${theme === "dark" ? "bg-slate-900" : "bg-slate-100"}`}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`text-3xl md:text-4xl font-extrabold mb-8 text-center ${theme === "dark" ? "text-white" : "text-gray-900"}`}
      >
        {myskills.title}
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.01, delay: 0.01 }}
            className={`
              flex flex-col items-center justify-center p-6 rounded-xl 
              bg-gradient-to-r ${skill.background} border border-white/20
              shadow-md hover:shadow-lg
              transition-all duration-300
            `}
          >
            <div className="text-4xl md:text-5xl text-white mb-3 drop-shadow-md">{skill.icon}</div>
            <h3 className="text-lg font-semibold text-white drop-shadow-sm">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
