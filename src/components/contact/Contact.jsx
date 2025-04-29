import { useState } from "react";
import axios from "axios";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion"; // Tambahan kecil buat animasi smooth

export default function Contact() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const { translations } = useLanguage();
  const { theme } = useTheme();
  const URL = import.meta.env.VITE_BACKEND_URL;

  if (!translations) {
    return <p className="text-center mt-8">Loading...</p>;
  }

  const { contact } = translations;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post(`${URL}/form`, formObject, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        setError("");
        setSuccess(true);
        console.log("Form submitted successfully!");
        event.target.reset();
      }
    } catch (error) {
      console.error("Error:", error);
      setError(
        error.response?.data?.message || error.message || "Unknown error"
      );
    }
  };

  return (
    <section
      className={`py-16 px-6 ${
        theme === "dark" ? "bg-slate-800" : "bg-slate-100"
      }`}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-3xl md:text-4xl font-extrabold mb-8 text-center ${
          theme === "dark" ? "text-slate-50" : "text-slate-900"
        }`}
      >
        {contact.title}
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className={`max-w-3xl mx-auto ${
          theme === "dark" ? "bg-slate-900" : "bg-slate-300"
        } p-8 rounded-xl shadow-lg`}
      >
        <div className="mb-6">
          <label
            htmlFor="name"
            className={`block text-sm font-semibold mb-2 ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            }`}
          >
            {contact.name}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={`w-full px-4 py-3 rounded-lg ${
              theme === "dark"
                ? "bg-slate-800 text-slate-300"
                : "bg-white text-slate-900"
            } focus:outline-none focus:ring-2 focus:ring-teal-400`}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className={`block text-sm font-semibold mb-2 ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            }`}
          >
            {contact.email}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={`w-full px-4 py-3 rounded-lg ${
              theme === "dark"
                ? "bg-slate-800 text-slate-300"
                : "bg-white text-slate-900"
            } focus:outline-none focus:ring-2 focus:ring-teal-400`}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className={`block text-sm font-semibold mb-2 ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            }`}
          >
            {contact.message}
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className={`w-full px-4 py-3 rounded-lg ${
              theme === "dark"
                ? "bg-slate-800 text-slate-300"
                : "bg-white text-slate-900"
            } focus:outline-none focus:ring-2 focus:ring-teal-400`}
          />
        </div>

        {error && (
          <p className="text-red-500 text-center mb-4 animate-pulse">
            ⚡ {error}
          </p>
        )}
        {success && (
          <p className="text-green-500 text-center mb-4 animate-bounce">
            🎉 {contact.successMessage || "Message sent successfully!"}
          </p>
        )}

        <button
          type="submit"
          className={`w-full ${
            theme === "dark" ? "bg-teal-500 hover:bg-teal-600" : "bg-sky-500 hover:bg-sky-600"
          } text-white py-3 px-4 rounded-lg font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400`}
        >
          {contact.send}
        </button>
      </motion.form>
    </section>
  );
}
