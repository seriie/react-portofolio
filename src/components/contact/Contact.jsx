import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

export default function Contact() {
  const [error, setError] = useState('');
  const { translations } = useLanguage();
  const { theme } = useTheme();
  const URL = import.meta.env.VITE_BACKEND_URL;

  if (!translations) {
    return <p>Loading....</p>;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(`${URL}/form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formObject)
      });
      
      if (response.ok) {
        setError(false);
        console.log("Form submitted successfully!");
        location.reload();
      } else {
        console.error("Failed to submit form");
        setError("Failed to submit form");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Error: " + error.message)
    }
  };

  const { contact } = translations;
  return (
    <section
      className={`py-16 px-6 ${
        theme === "dark" ? "bg-slate-800" : "bg-slate-100"
      }`}
    >
      <h2
        className={`text-3xl md:text-4xl font-extrabold ${
          theme === "dark" ? "text-slate-50" : "text-slate-900"
        } mb-8 text-center`}
      >
        {contact.title}
      </h2>

      <form
        onSubmit={handleSubmit}
        className={`max-w-3xl mx-auto ${
          theme === "dark" ? "bg-slate-900" : "bg-slate-300"
        } p-6 rounded-lg shadow-lg`}
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className={`block text-sm font-medium ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            } mb-1`}
          >
            {contact.name}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={`w-full px-4 py-2 rounded-lg ${
              theme === "dark"
                ? "bg-slate-800 text-slate-300"
                : "bg-slate-100 text-slate-900"
            } focus:outline-none focus:ring-2 focus:ring-teal-500`}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className={`block text-sm font-medium ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            } mb-1`}
          >
            {contact.email}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={`w-full px-4 py-2 rounded-lg ${
              theme === "dark"
                ? "bg-slate-800 text-slate-300"
                : "bg-slate-100 text-slate-900"
            } focus:outline-none focus:ring-2 focus:ring-teal-500`}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className={`block text-sm font-medium ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            } mb-1`}
          >
            {contact.message}
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className={`w-full px-4 py-2 rounded-lg ${
              theme === "dark"
                ? "bg-slate-800 text-slate-300"
                : "bg-slate-100 text-slate-900"
            } focus:outline-none focus:ring-2 focus:ring-teal-500`}
          ></textarea>
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          className="triggered-hover focus:outline-teal-400 w-full bg-teal-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-teal-600 transition duration-300" // Tombol submit form dengan animasi hover
        >
          {contact.send}
        </button>
      </form>
    </section>
  );
}