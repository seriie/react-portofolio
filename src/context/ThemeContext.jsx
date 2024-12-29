import { createContext, useContext, useEffect, useState } from "react";

// Membuat konteks untuk tema
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Fungsi untuk mendapatkan tema sistem (dark atau light)
  const getSystemTheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  // Fungsi untuk mendapatkan tema awal, baik dari localStorage atau default "dark"
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "dark"; // Jika tidak ada, default "dark"
  };

  // State untuk menyimpan tema saat ini
  const [theme, setTheme] = useState(getInitialTheme);

  // Fungsi untuk menerapkan tema ke dokumen
  const applyTheme = (currentTheme) => {
    const root = document.documentElement; // Mengakses elemen root HTML

    // Jika tema adalah "system", kita ikuti preferensi tema sistem pengguna
    if (currentTheme === "system") {
      const systemTheme = getSystemTheme(); // Menentukan tema sistem
      root.className = systemTheme; // Menerapkan tema sistem ke root
    } else {
      root.className = currentTheme; // Menerapkan tema yang dipilih (dark atau light)
    }
  };

  // Menggunakan useEffect untuk menerapkan tema setiap kali tema berubah
  useEffect(() => {
    applyTheme(theme); // Menerapkan tema baru
    localStorage.setItem("theme", theme); // Menyimpan tema yang dipilih ke localStorage
  }, [theme]); // Efek ini dijalankan setiap kali 'theme' berubah

  // Fungsi untuk mengganti tema
  const changeTheme = (newTheme) => {
    setTheme(newTheme); // Mengubah tema
  };

  // Menyediakan konteks dengan nilai tema dan fungsi untuk mengubahnya
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children} {/* Komponen anak yang membungkus provider */}
    </ThemeContext.Provider>
  );
};

// Custom hook untuk menggunakan ThemeContext
export const useTheme = () => useContext(ThemeContext);