import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("system");

    const getSystemTheme = () => {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    
    const applyTheme = (currentTheme) => {
        const root = document.documentElement;

        if(currentTheme === "system") {
            const systemTheme = getSystemTheme();

            root.className = systemTheme;
        } else {
            root.className = currentTheme;
        }
    }

    useEffect(() => {
        applyTheme(theme);

        localStorage.setItem("theme", theme);
    }, [theme]);

    const changeTheme = (newTheme) => {
        setTheme(newTheme);
    }

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);