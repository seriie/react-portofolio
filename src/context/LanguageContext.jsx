import { createContext, useContext, useState, useEffect } from "react";

// Membuat konteks untuk bahasa
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // State untuk menyimpan kode bahasa yang sedang dipakai, default 'en_US'
  const [langCode, setLangCode] = useState("en_US");

  // State untuk menyimpan data terjemahan yang di-load
  const [translations, setTranslations] = useState(null);

  // Menggunakan useEffect untuk memuat data bahasa setiap kali langCode berubah
  useEffect(() => {
    const loadLanguageData = async () => {
      try {
        // Memuat file JSON terjemahan sesuai dengan langCode
        const langData = await import(`../lang/${langCode}.json`);
        setTranslations(langData); // Menyimpan data terjemahan ke state
      } catch (error) {
        // Menangani error jika file tidak ditemukan atau terjadi masalah
        console.error("Error loading language file:", error);
      }
    };

    loadLanguageData(); // Memanggil fungsi untuk load data bahasa
  }, [langCode]); // Efek ini berjalan setiap kali langCode berubah

  // Fungsi untuk mengganti bahasa
  const changeLanguage = (newLangCode) => {
    setLangCode(newLangCode); // Mengubah kode bahasa
  };

  // Memberikan nilai ke komponen lain melalui context provider
  return (
    <LanguageContext.Provider value={{ translations, changeLanguage, langCode }}>
      {children} {/* Komponen anak yang membungkus provider */}
    </LanguageContext.Provider>
  );
};

// Custom hook untuk menggunakan LanguageContext
export const useLanguage = () => useContext(LanguageContext);