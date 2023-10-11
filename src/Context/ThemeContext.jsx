import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("pink");

    const themes = {
        pink: {
            "--color-background": "hsl(340, 60%, 98%)",
            "--color-light": "hsl(340, 100%, 93%)",
            "--color-dark": "hsl(340, 100%, 78%)",
        },
        orange: {
            "--color-background": "hsl(0, 0%, 99%)",
            "--color-light": "hsl(36, 100%, 95%)",
            "--color-dark": "orange",
        },
        blue: {
            "--color-background": "hsl(199, 85%, 95%)",
            "--color-light": "hsl(194, 95%, 92%)",
            "--color-dark": "hsl(195, 96%, 63%)",
        },
        green: {
            "--color-background": "hsl(136, 100%, 87%)",
            "--color-light": "hsl(138, 80%, 92%)",
            "--color-dark": "hsl(137, 49%, 59%)",
        },
        purple: {
            "--color-background": "hsl(290, 100%, 95%)",
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
