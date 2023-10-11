import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("pink");

    const themes = {
        pink: {
            "--color-background": "hsl(0, 100%, 96%)",
            "--color-light": "hsl(0, 100%, 96%)",
            "--color-dark": "hsl(0, 90%, 80%)",
        },
        orange: {
            "--color-background": "hsl(37, 100%, 95%)",
            "--color-light": "hsl(36, 100%, 95%)",
            "--color-dark": "orange",
        },
        black: {
            "--color-background": "hsl(94, 85%, 95%)",
            "--color-light": "hsl(94, 100%, 92%)",
            "--color-dark": "hsl(138, 42%, 65%)",
        },
        blue: {
            "--color-background": "hsl(199, 85%, 95%)",
            "--color-light": "hsl(194, 95%, 92%)",
            "--color-dark": "hsl(195, 96%, 63%)",
        },
        green: {
            "--color-background": "hsl(136, 100%, 93%)",
            "--color-light": "hsl(138, 80%, 92%)",
            "--color-dark": "hsl(137, 49%, 59%)",
        },
        purple: {
            "--color-background": "rgb(254, 244, 244)",
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
