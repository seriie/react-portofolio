import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [langCode, setLangCode] = useState("en_US");
  const [translations, setTranslations] = useState(null);

  useEffect(() => {
    const loadLanguageData = async () => {
      try {
        const langData = await import(`../lang/${langCode}.json`);
        setTranslations(langData);
      } catch (error) {
        console.error("Error loading language file:", error);
      }
    };

    loadLanguageData();
  }, [langCode]);

  const changeLanguage = (newLangCode) => {
    setLangCode(newLangCode);
  };

  return (
    <LanguageContext.Provider value={{ translations, changeLanguage, langCode }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);