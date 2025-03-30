import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import axios from 'axios';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const { translations } = useLanguage();
  const { theme } = useTheme();
  const URL = import.meta.env.VITE_BACKEND_URL;

  const getProjects = async () => {
    try {
      const response = await axios.get(`${URL}/projects`);

      setProjects(response.data);
    } catch (e) {
      console.error(e.message);
    }
  }

  useEffect(() => {
    getProjects();
  }, []);

  if (!translations) {
    return <p>Loading...</p>;
  }

  const { project: proj } = translations;

  return (
    <section
      className={`py-16 px-6 ${theme === 'dark' ? 'bg-slate-900' : 'bg-slate-300'}`}
    >
      <h2
        className={`text-3xl md:text-4xl font-extrabold ${
          theme === 'dark' ? 'text-slate-100' : 'text-slate-900'
        } mb-8 text-center`}
      >
        {proj.title}
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
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            <div className="relative p-6 z-10 text-white">
              <h3 className="text-xl font-bold mb-3">{project.name}</h3>
              <p className="text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techstack.split(", ").map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gradientToRight text-white text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link.startsWith("http") ? project.link : `https://${project.link}`}
                className="text-teal-400 text-sm font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {proj.visit}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}