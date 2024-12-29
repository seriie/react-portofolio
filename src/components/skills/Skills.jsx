import { useLanguage } from "../../context/LanguageContext"; // Mengambil context untuk bahasa
import { useTheme } from "../../context/ThemeContext"; // Mengambil context untuk tema

// Daftar keterampilan yang ditampilkan
const skills = [
  { name: "ReactJS", color: "bg-blue-500", icon: "⚛️" }, // Keterampilan ReactJS
  { name: "Tailwind CSS", color: "bg-teal-500", icon: "💨" }, // Keterampilan Tailwind CSS
  { name: "MySQL", color: "bg-yellow-500", icon: "🛢️" }, // Keterampilan MySQL
  { name: "JavaScript", color: "bg-yellow-400", icon: "📜" }, // Keterampilan JavaScript
  { name: "API Development", color: "bg-indigo-500", icon: "🔗" }, // Keterampilan API Development
  { name: "Git & GitHub", color: "bg-gray-700", icon: "🐙" }, // Keterampilan Git & GitHub
];

export default function Skills() {
  const { translations } = useLanguage(); // Mengambil data terjemahan dari context Language
  const { theme } = useTheme(); // Mengambil tema saat ini dari context Theme

  // Menampilkan loading jika data terjemahan belum dimuat
  if (!translations) {
    return <p>Loading...</p>;
  }

  const { myskills } = translations; // Mengambil bagian 'myskills' dari data terjemahan

  return (
    <section className={`py-16 px-6 ${theme === "dark" ? 'bg-slate-800' : 'bg-slate-100'}`}>
      {/* Judul bagian keterampilan */}
      <h2 className={`text-3xl md:text-4xl font-extrabold ${theme === "dark" ? 'text-slate-50' : 'text-slate-900'} mb-8 text-center`}>
        {myskills.title} {/* Menampilkan judul keterampilan */}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {/* Menampilkan daftar keterampilan */}
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ${skill.color}`} // Mengatur gaya setiap keterampilan
          >
            <div className="text-4xl md:text-5xl text-white mb-4">{skill.icon}</div> {/* Ikon keterampilan */}

            <h3 className="text-lg font-semibold text-white">{skill.name}</h3> {/* Nama keterampilan */}
          </div>
        ))}
      </div>
    </section>
  );
};