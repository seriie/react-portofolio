import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import sunIcon from "../../assets/icons/sun.svg";
import moonIcon from "../../assets/icons/moon.svg";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [themeIcon, setThemeIcon] = useState(
    theme === "dark" ? moonIcon : sunIcon
  );

  useEffect(() => {
    setThemeIcon(theme === "dark" ? sunIcon : moonIcon);
  }, [theme]);

  const handleClick = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  }

  return (
    <>
      <button 
        onClick={handleClick}
        className={`triggered-hover absolute right-4 top-4 p-2 rounded-full focus:outline-none hover:bg-teal-500 ${theme === "dark" ? 'bg-slate-800' : 'bg-slate-300'}`}
      >
        <img 
          src={themeIcon}
          alt={`${theme} icon`}
          className={`w-6 h-6 ${theme === "dark" ? 'invert' : 'invert-0'}`} 
        />
      </button>
    </>
  );
}