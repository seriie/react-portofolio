import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import MySwiper from '../template/MySwiper';
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
  };

  useEffect(() => {
    getProjects();
  }, []);

  if (!translations) {
    return <p>Loading...</p>;
  }

  const { project: proj } = translations;

  return (
    <section
      className={`py-20 px-6 transition-all duration-500 ${
        theme === 'dark' ? 'bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-b from-slate-100 via-slate-200 to-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-14 transition-all duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}
        >
          🚀 {proj.title}
        </h2>

        <div className="relative">
          <div className="glass-bg p-2 rounded-2xl shadow-2xl">
            <MySwiper projects={projects} />
          </div>
        </div>
      </div>
    </section>
  );
}