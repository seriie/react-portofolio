import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

const skills = [
  { name: "ReactJS", color: "bg-blue-500", icon: "⚛️" },
  { name: "Tailwind CSS", color: "bg-teal-500", icon: "💨" },
  { name: "MySQL", color: "bg-yellow-500", icon: "🛢️" },
  { name: "JavaScript", color: "bg-yellow-400", icon: "📜" },
  { name: "API Development", color: "bg-indigo-500", icon: "🔗" },
  { name: "Git & GitHub", color: "bg-gray-700", icon: "🐙" },
];

export default function Skills() {
  const { translations } = useLanguage();
  const { theme } = useTheme();

  if (!translations) {
    return <p>Loading...</p>;
  }

  const { myskills } = translations;

  return (
    <section className={`py-16 px-6 ${theme === "dark" ? 'bg-slate-800' : 'bg-slate-100'}`}>
      <h2 className={`text-3xl md:text-4xl font-extrabold ${theme === "dark" ? 'text-slate-50' : 'text-slate-900'} mb-8 text-center`}>
        {myskills.title}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ${skill.color}`}
          >
            <div className="text-4xl md:text-5xl text-white mb-4">{skill.icon}</div>

            <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};