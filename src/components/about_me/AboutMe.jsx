import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

export default function AboutMe() {
  const { theme } = useTheme();

  const { translations } = useLanguage();

  if (!translations) {
    return <p>Loading...</p>;
  }

  const { about } = translations;

  return (
      <section className={`flex flex-col items-center justify-center py-16 px-6 ${theme === "dark" ? 'bg-slate-900' : 'bg-slate-300'}`}> 
      
        <h2 className={`text-3xl md:text-4xl font-extrabold ${theme === "dark" ? 'text-slate-50' : 'text-slate-900'} mb-6 text-center`}>
          {about.title}
        </h2>
      
        <p className={`max-w-3xl text-center text-sm md:text-lg leading-relaxed ${theme === "dark" ? 'text-slate-50' : 'text-slate-900'}`}>
          {about.ima} <span className="text-blue-400 font-medium">Web Developer</span> {about.focusat} 
          <span className="text-teal-400 font-medium"> ReactJS</span>, 
          <span className="text-indigo-400 font-medium"> Tailwind CSS</span>, {about.more}
        </p>
      
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-blue-500 rounded-lg text-white">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 9l-3 3m0 0l-3-3m3 3V4m-7 16h14"
                />
              </svg>
            </div>
            <p className={`${theme === "dark" ? 'text-slate-50' : 'text-slate-900'}`}>
              {about.react} <span className="text-blue-400 font-medium">ReactJS</span>.
            </p>
          </div>
      
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-teal-500 rounded-lg text-white">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4c2.21 0 4-1.79 4-4s-1.79-4-4-4z"
                />
              </svg>
            </div>
            <p className={`${theme === "dark" ? 'text-slate-50' : 'text-slate-900'}`}>
              {about.tailwind} <span className="text-teal-400 font-medium">Tailwind CSS</span>.
            </p>
          </div>
      
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-indigo-500 rounded-lg text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h11m-5 4l5-4-5-4v8zm5-4h8v10H3V4h5"
                />
              </svg>
            </div>
            <p className={`${theme === "dark" ? 'text-slate-50' : 'text-slate-900'}`}>
              {about.mysql.first} <span className="text-indigo-400 font-medium">MySQL</span> {about.mysql.last}
            </p>
          </div>
      
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-purple-500 rounded-lg text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.752 11.168l-3.197 5.533m-.976-3.21A6.03 6.03 0 013.33 6.035c-.944 1.615-1.54 3.272-1.54 5.097 0 6.254 5.486 11.33 12.21 11.33a12.21 12.21 0 004.49-.807M6.843 2.871l-3.197 5.534m8.064-2.324a6.03 6.03 0 011.274 7.137M3.3 3.743a6.036 6.036 0 018.2-.063"
                />
              </svg>
            </div>
            <p className={`${theme === "dark" ? 'text-slate-50' : 'text-slate-900'}`}>
              {about.cyber}
            </p>
          </div>
        </div>
      </section>
  );
}