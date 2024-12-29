import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

export default function ChangeLang() {
  const { theme } = useTheme(); // Mengambil tema saat ini dari context Theme

  const { changeLanguage, langCode } = useLanguage(); // Mengambil fungsi dan kode bahasa dari context Language
  const [isOpen, setIsOpen] = useState(false); // State untuk mengatur apakah dropdown terbuka atau tidak
  const dropdownRef = useRef(null); // Ref untuk elemen dropdown agar bisa mendeteksi klik di luar dropdown

  // Daftar bahasa yang tersedia beserta label dan kode bahasa
  const languages = [
    { code: "ind_ID", label: "🇮🇩 ID" },
    { code: "en_US", label: "🇺🇸 EN" },
  ];

  // Fungsi untuk menangani pemilihan bahasa baru
  const handleSelect = (code) => {
    changeLanguage(code); // Mengubah bahasa ke yang dipilih
    setIsOpen(false); // Menutup dropdown setelah memilih bahasa
  };

  // Fungsi untuk menutup dropdown jika klik di luar elemen dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false); // Menutup dropdown jika klik di luar
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside); // Menambahkan event listener klik

    return() => {
      document.removeEventListener("click", handleClickOutside); // Menghapus event listener ketika komponen tidak lagi digunakan
    }
  });

  return (
    <div className="triggered-hover absolute left-4 top-4 w-40" ref={dropdownRef}>
      {/* Tombol untuk membuka/menutup dropdown */}
      <button
        onClick={() => setIsOpen(!isOpen)} // Toggle state isOpen
        className={`w-full ${theme === "dark" ? 'bg-slate-800 text-slate-100 hover:bg-slate-700' : 'bg-slate-300 text-slate-900 hover:bg-slate-200'} text-sm font-medium border border-gray-600 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none cursor-pointer`}
      >
        {/* Menampilkan label bahasa yang sedang dipilih */}
        {languages.find((lang) => lang.code === langCode)?.label}
      </button>

      {/* Dropdown menu yang menampilkan pilihan bahasa jika isOpen true */}
      {isOpen && (
        <ul className={`triggered-hover dropdown absolute z-10 w-full ${theme === "dark" ? 'bg-slate-700 text-slate-100' : 'bg-slate-300 text-slate-900'} rounded-lg shadow-md mt-2 p-1`}>
          {/* Daftar bahasa yang bisa dipilih */}
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => handleSelect(lang.code)} // Menangani pemilihan bahasa
              className="px-3 py-2 hover:bg-teal-400 cursor-pointer rounded-md"
            >
              {lang.label} {/* Menampilkan label untuk tiap bahasa */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}