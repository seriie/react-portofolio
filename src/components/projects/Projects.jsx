import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import onetap from '../../assets/project_img/onetap.png';
import animeweb from '../../assets/project_img/anime_web.png';
import mangaweb from '../../assets/project_img/manga_web.png';
import earthquakeweb from '../../assets/project_img/earthquake_web.png'

export default function Projects() {
  const { translations } = useLanguage();
  const { theme } = useTheme();

  if (!translations) {
    return <p>Loading...</p>;
  }

  const { project } = translations;

  const projects = [
    {
      title: project.onetap.title,
      description: project.onetap.description,
      image: onetap,
      tech: ["ReactJS", "Tailwind CSS"],
      link: "https://justonetap.vercel.app",
      visit: project.visit,
    },
    {
      title: project.animeweb.title,
      description: project.animeweb.description,
      image: animeweb,
      tech: ["ReactJS", "Tailwind CSS", "API"],
      link: "https://your-anime-web.vercel.app",
      visit: project.visit,
    },
    {
      title: project.mangaweb.title,
      description: project.mangaweb.description,
      image: mangaweb,
      tech: ["ReactJS", "Tailwind CSS", "API"],
      link: "https://your-manga-web.vercel.app",
      visit: project.visit,
    },
    {
      title: project.earthquakeapi.title,
      description: project.earthquakeapi.description,
      image: earthquakeweb,
      tech: ["ReactJS", "Tailwind CSS", "API"],
      link: "https://earthquakeapi-bmkg.vercel.app",
      visit: project.visit,
    }
  ];

  return (
    <section
      className={`py-16 px-6 ${theme === 'dark' ? 'bg-slate-900' : 'bg-slate-300'}`}
    >
      <h2
        className={`text-3xl md:text-4xl font-extrabold ${
          theme === 'dark' ? 'text-slate-100' : 'text-slate-900'
        } mb-8 text-center`}
      >
        {project.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300`}
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            {/* Konten */}
            <div className="relative p-6 z-10 text-white">
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>

              {/* Teknologi */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gradientToRight text-white text-xs px-3 py-1 rounded-full"
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
          </div>
        ))}
      </div>
    </section>
  );
}