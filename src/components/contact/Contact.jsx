import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

export default function Contact() {
  const { translations } = useLanguage();
  const { theme } = useTheme();

  if(!translations) {
    return <p>Loading....</p>
  }

  const { contact } = translations;

  return (
    <section className={`py-16 px-6 ${theme === "dark" ? 'bg-slate-800' : 'bg-slate-100'}`}>
      <h2 className={`text-3xl md:text-4xl font-extrabold ${theme === "dark" ? 'text-slate-50' : 'text-slate-900'} mb-8 text-center`}>
        {contact.title}
      </h2>

      <form
        action="http://localhost:9000/form"
        method="POST"
        className={`max-w-3xl mx-auto ${theme === "dark" ? 'bg-slate-900' : 'bg-slate-300'} p-6 rounded-lg shadow-lg`}
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className={`block text-sm font-medium ${theme === "dark" ? 'text-slate-400' : 'text-slate-400'} mb-1`}
          >
            {contact.name}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={`w-full px-4 py-2 rounded-lg ${theme === "dark" ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-900' } border focus:outline-none focus:ring-2 focus:ring-teal-500`}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className={`block text-sm font-medium ${theme === "dark" ? 'text-slate-400' : 'text-slate-400'} mb-1`}
          >
            {contact.email}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={`w-full px-4 py-2 rounded-lg ${theme === "dark" ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-900' } border focus:outline-none focus:ring-2 focus:ring-teal-500`}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className={`block text-sm font-medium ${theme === "dark" ? 'text-slate-400' : 'text-slate-400'} mb-1`}
          >
            {contact.message}
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className={`w-full px-4 py-2 rounded-lg ${theme === "dark" ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-900' } border focus:outline-none focus:ring-2 focus:ring-teal-500`}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-teal-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-teal-600 transition duration-300"
        >
          {contact.send}
        </button>
      </form>
    </section>
  );
};