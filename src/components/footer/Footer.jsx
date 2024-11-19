import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
    const { translations } = useLanguage();
    const { theme } = useTheme();

    if(!translations) {
        return <p>Loading...</p>;
    }

    const { support } = translations;
    return (
        <footer className={`${theme === "dark" ? 'bg-slate-900 text-slate-50' : 'bg-slate-300 text-slate-900'} py-8`}>
          <div className="container mx-auto text-center">
            <div className="flex justify-center mb-8 space-x-10">
              <a href="https://github.com/seriie" target="_blank" className={`triggered-hover ${theme === "dark" ? 'text-slate-400 hover:text-slate-300' : 'text-slate-700 hover:text-slate-900'}`}>
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="https://www.linkedin.com/in/mohammad-zidane-rahadian-0b2815290/" target="_blank" className={`triggered-hover ${theme === "dark" ? 'text-slate-400 hover:text-slate-300' : 'text-slate-700 hover:text-slate-900'}`}>
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="https://www.instagram.com/zzzeeee05" target="_blank" className={`triggered-hover ${theme === "dark" ? 'text-slate-400 hover:text-slate-300' : 'text-slate-700 hover:text-slate-900'}`}>
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>

            <p className="text-lg mb-4">{support.title}</p>
            <div className="flex justify-center mb-8 space-x-10">
            <a 
              href="https://ko-fi.com/justacoders" 
              target="_blank" 
              className={`${theme === "dark" ? 'text-slate-400 hover:text-slate-300' : 'text-slate-700 hover:text-slate-900'} flex items-center`}
            >
              <i className="triggered-hover fas fa-coffee mr-2"></i> 
              {support.link}
            </a>
            </div>

            <div className={`text-sm ${theme === "dark" ? 'text-slate-400' : 'text-slate-700'}`}>
              <p>&copy; {new Date().getFullYear()} Zee. All rights reserved.</p>
            </div>
          </div>
        </footer>
    );
  }  