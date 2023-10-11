import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("pink");

    const themes = {
        pink: {
            "--color-light": "hsl(340, 100%, 93%)",
            "--color-dark": "hsl(340, 100%, 78%)",
        },
        orange: {
            "--color-light": "hsl(36, 100%, 93%)",
            "--color-dark": "orange",
        },
        blue: {
            "--color-light": "hsl(194, 95%, 92%)",
            "--color-dark": "hsl(195, 96%, 63%)",
        },
        green: {
            "--color-light": "hsl(138, 80%, 92%)",
            "--color-dark": "hsl(137, 49%, 59%)",
        },
        purple: {
            "--color-light": "hsl(272, 89%, 93%)",
            "--color-dark": "hsl(271, 91%, 74%)",
        },
    };

    const changeTheme = (newTheme) => {
        setTheme(newTheme);
      
        if (themes[newTheme]) {
            for (const [property, value] of Object.entries(themes[newTheme])) {
                document.documentElement.style.setProperty(property, value);
            }
        }
    };
    return <ThemeContext.Provider value={{ theme, changeTheme, themes }}>{children}</ThemeContext.Provider>;
}
