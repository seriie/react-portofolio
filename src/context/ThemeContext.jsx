import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const getSystemTheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    return getSystemTheme();
  };

  const [theme, setTheme] = useState(getInitialTheme());

  const applyTheme = (currentTheme) => {
    const htmlElement = document.querySelector("html");
    if (currentTheme === "system") {
      const systemTheme = getSystemTheme();
      htmlElement.className = systemTheme;
    } else {
      htmlElement.className = currentTheme;
    }
  };

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const changeTheme = (newTheme) => {
    if (newTheme === "system") {
      setTheme(getSystemTheme());
    } else {
      setTheme(newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);