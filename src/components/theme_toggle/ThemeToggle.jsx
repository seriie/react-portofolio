import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext"; // Mengambil context tema
import sunIcon from "../../assets/icons/sun.svg"; // Ikon untuk tema terang
import moonIcon from "../../assets/icons/moon.svg"; // Ikon untuk tema gelap

export default function ThemeToggle() {
  const { theme, changeTheme } = useTheme(); // Mendapatkan tema saat ini dan fungsi untuk mengubah tema
  const [themeIcon, setThemeIcon] = useState(
    theme === "dark" ? moonIcon : sunIcon // Menentukan ikon yang ditampilkan berdasarkan tema
  );

  // Efek untuk mengganti ikon setiap kali tema berubah
  useEffect(() => {
    setThemeIcon(theme === "dark" ? sunIcon : moonIcon); // Mengubah ikon sesuai dengan tema yang aktif
  }, [theme]); // Efek ini dijalankan setiap kali tema berubah

  // Fungsi untuk menangani klik tombol untuk mengganti tema
  const handleClick = () => {
    const nextTheme = theme === "dark" ? "light" : "dark"; // Menentukan tema berikutnya
    changeTheme(nextTheme); // Mengubah tema ke tema berikutnya
  }

  return (
    <button 
      onClick={handleClick} // Menangani klik untuk mengganti tema
      className={`triggered-hover absolute right-4 top-4 p-2 rounded-full focus:outline-none hover:bg-teal-500 ${theme === "dark" ? 'bg-slate-800' : 'bg-slate-300'}`}
    >
      {/* Menampilkan ikon sesuai dengan tema saat ini */}
      <img 
        src={themeIcon} 
        alt={`${theme} icon`} // Alt text untuk gambar sesuai dengan tema
        className={`w-6 h-6 ${theme === "dark" ? 'invert' : 'invert-0'}`} 
      />
    </button>
  );
}