import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';

export default function Projects() {
  const { translations } = useLanguage();
  const { theme } = useTheme();

  if(!translations) {
    return <p>Loading...</p>
  }

  const { project } = translations;

  const projects = [
    {
      title: project.onetap.title,
      description:
        project.onetap.description,
      tech: ["ReactJS", "Tailwind CSS"],
      link: "https://justonetap.vercel.app",
      visit: project.visit
    },
    {
      title: project.animeweb.title,
      description:
        project.animeweb.description,
      tech: ["ReactJS", "Tailwind CSS", "API"],
      link: "https://your-anime-web.vercel.app",
      visit: project.visit
    },
    {
      title: project.mangaweb.title,
      description:
        project.mangaweb.description,
      tech: ["ReactJS", "Tailwind CSS", "API"],
      link: "https://your-manga-web.vercel.app",
      visit: project.visit
    },
  ];

  return (
    <section className={`py-16 px-6 ${theme === "dark" ? 'bg-slate-900' : 'bg-slate-300'}`}>
      <h2 className={`text-3xl md:text-4xl font-extrabold ${theme === "dark" ? 'text-slate-100' : 'text-slate-900'} mb-8 text-center`}>
        {project.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${theme === "dark" ? 'bg-slate-800' : 'bg-slate-100'} p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300`}
          >
            <h3 className={`text-xl font-bold ${theme === "dark" ? 'text-slate-50': 'text-slate-900'} mb-3`}>
              {project.title}
            </h3>

            <p className="text-sm text-gray-400 mb-4">{project.description}</p>

            {/* Teknologi */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className={`bg-teal-500 text-slate-50 text-xs px-3 py-1 rounded-full`}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Link */}
            <a
              href={project.link}
              className="text-teal-400 text-sm font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.visit}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};