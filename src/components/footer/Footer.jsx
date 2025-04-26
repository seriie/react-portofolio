import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
  const { translations } = useLanguage();
  const { theme } = useTheme();

  if (!translations) {
    return <p>Loading...</p>;
  }

  const { support } = translations;

  return (
    <footer className={`${theme === "dark" ? 'bg-gradient-to-t from-slate-900 to-slate-800 text-slate-100' : 'bg-gradient-to-t from-slate-200 to-slate-100 text-slate-900'} py-10`}>
      <div className="container mx-auto flex flex-col items-center text-center space-y-8">
        <div className="flex justify-center space-x-8">
          {[
            { href: "https://github.com/seriie", icon: "fab fa-github", label: "GitHub" },
            { href: "https://www.linkedin.com/in/mohammad-zidane-rahadian-0b2815290/", icon: "fab fa-linkedin", label: "LinkedIn" },
            { href: "https://www.instagram.com/zzzeeee05", icon: "fab fa-instagram", label: "Instagram" },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              className="text-2xl transition-colors duration-300 hover:text-teal-400"
            >
              <i className={`${item.icon}`}></i> <span className="text-sm ml-2">{item.label}</span>
            </a>
          ))}
        </div>

        <div className="text-lg">
          <p>{support.title}</p>
        </div>

        <a
          href="https://ko-fi.com/justacoders"
          target="_blank"
          className="flex items-center space-x-2 text-teal-500 hover:text-teal-400 transition-colors duration-300"
        >
          <i className="fas fa-coffee"></i> 
          <span className="text-base">{support.link}</span>
        </a>

        <div className="text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Zee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}