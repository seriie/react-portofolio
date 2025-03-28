import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

export default function ChangeLang() {
  const { theme } = useTheme();

  const { changeLanguage, langCode } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: "ind_ID", label: "🇮🇩 ID" },
    { code: "en_US", label: "🇺🇸 EN" },
  ];

  const handleSelect = (code) => {
    changeLanguage(code);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return() => {
      document.removeEventListener("click", handleClickOutside);
    }
  });

  return (
    <div className="triggered-hover absolute left-4 top-4 w-40" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full ${theme === "dark" ? 'bg-slate-800 text-slate-100 hover:bg-slate-700' : 'bg-slate-300 text-slate-900 hover:bg-slate-200'} text-sm font-medium border border-gray-600 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none cursor-pointer`}
      >
        {languages.find((lang) => lang.code === langCode)?.label}
      </button>

      {isOpen && (
        <ul className={`triggered-hover dropdown absolute z-10 w-full ${theme === "dark" ? 'bg-slate-700 text-slate-100' : 'bg-slate-300 text-slate-900'} rounded-lg shadow-md mt-2 p-1`}>
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className="px-3 py-2 hover:bg-teal-400 cursor-pointer rounded-md"
            >
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}