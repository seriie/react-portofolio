import { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import profile from "../../assets/image/profile.png";
import ChangeLang from "../change_lang/ChangeLang";
import ThemeToggle from "../theme_toggle/ThemeToggle";

export default function Header() {
  const { theme } = useTheme();
  const [designMode, setDesignMode] = useState(false);
  const name = "Roxy Miguardia";

  const handleDesignMode = () => {
    setDesignMode(!designMode);
  }

  useEffect(() => {
    if(designMode) {
      document.designMode = 'on';
    } else {
      document.designMode = 'off';
    }
  });

  return (
    <div
      className={`header-bg flex flex-col items-center justify-center min-h-screen px-6 transition-all ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-900 to-gray-800 text-white"
          : "bg-gradient-to-b from-gray-100 to-white text-gray-900"
      }`}
    >
      <ChangeLang />
        <div className={`text-lg absolute top-4 cursor-pointer p-2 ${theme === "dark" ? 'bg-slate-800' : 'bg-slate-300'} rounded-md hover:bg-teal-500`} onClick={handleDesignMode}>Design Mode: {designMode ? 'on' : 'off'}</div>
      <ThemeToggle />

      <div className={`relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden ${theme === "dark" ? 'hover:shadow-customLight' : 'hover:shadow-customDark'} hover:scale-110 transition-all`}>
        <img
          src={profile}
          alt="Profile"
          className="object-cover w-full h-full"
        />
      </div>

      <h1 className="header-name mt-6 text-3xl md:text-5xl font-extrabold tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
        {name}
      </h1>

      <p className="header-text mt-4 text-sm md:text-lg text-center max-w-md leading-relaxed">
        Web Developer specializing in{" "}
        <span className="font-semibold text-blue-400">ReactJS</span>,{" "}
        <span className="font-semibold text-teal-400">Tailwind CSS</span>, and
        modern web technologies.
      </p>

      <div className="mt-6 flex gap-4">
        <a href="https://github.com/seriie" target="_blank" className="group">
          <span className="sr-only">GitHub</span>
          <div className={`w-10 h-10 flex items-center justify-center rounded-full ${theme === "dark" ? 'bg-slate-700' : 'bg-slate-300'} group-hover:bg-blue-500 transition duration-300`}>
            <svg
              className={`w-6 h-6 ${theme === "dark" ? 'text-slate-300 group-hover:text-slate-50' : 'text-slate-700 group-hover:text-slate-900'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.477 2 2 6.485 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.683-.217.683-.482 0-.238-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.152-1.11-1.459-1.11-1.459-.908-.62.07-.608.07-.608 1.003.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.912.833.091-.647.35-1.088.636-1.338-2.221-.253-4.555-1.112-4.555-4.95 0-1.093.39-1.986 1.03-2.685-.103-.253-.447-1.27.098-2.646 0 0 .84-.27 2.75 1.026a9.564 9.564 0 0 1 2.5-.336 9.565 9.565 0 0 1 2.5.336c1.91-1.296 2.75-1.026 2.75-1.026.545 1.376.202 2.393.1 2.646.64.7 1.029 1.592 1.029 2.685 0 3.847-2.336 4.693-4.564 4.944.36.31.682.92.682 1.852 0 1.336-.013 2.415-.013 2.743 0 .268.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.515-4.477-10-10-10z" />
            </svg>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/mohammad-zidane-rahadian-0b2815290/" target="_blank" className="group">
          <span className="sr-only">LinkedIn</span>
          <div className={`w-10 h-10 flex items-center justify-center rounded-full ${theme === "dark" ? 'bg-slate-700' : 'bg-slate-300'} group-hover:bg-blue-600 transition duration-300`}>
            <svg
              className={`w-6 h-6 ${theme === "dark" ? 'text-slate-300 group-hover:text-slate-50' : 'text-slate-700 group-hover:text-slate-900'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C4.98 4.879 3.88 6 2.5 6S0 4.879 0 3.5 1.1 1 2.5 1s2.48 1.121 2.48 2.5zM.49 8.001h3.994V24H.49V8.001zM8.09 8.001H12V10c.83-1.506 3.104-2.022 4.8-2.022 4.28 0 5.11 2.76 5.11 6.326V24h-3.991v-7.326c0-1.75-.03-3.994-2.43-3.994-2.43 0-2.804 1.892-2.804 3.856V24H8.09V8.001z" />
            </svg>
          </div>
        </a>
        <a href="mailto:mohammadzidane058@gmail.com" className="group">
          <span className="sr-only">Email</span>
          <div className={`w-10 h-10 flex items-center justify-center rounded-full ${theme === "dark" ? 'bg-slate-700' : 'bg-slate-300'} group-hover:bg-green-500 transition duration-300`}>
            <svg
              className={`w-6 h-6 ${theme === "dark" ? 'text-slate-300 group-hover:text-slate-50' : 'text-slate-700 group-hover:text-slate-900'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12.713l11.955-7.448A1.5 1.5 0 0 0 22.5 4H1.5a1.5 1.5 0 0 0-1.455 1.265l11.955 7.448zM0 6.561v13.687a1.5 1.5 0 0 0 1.5 1.5h21a1.5 1.5 0 0 0 1.5-1.5V6.561l-11.31 7.055a1.5 1.5 0 0 1-1.38 0L0 6.561z" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}