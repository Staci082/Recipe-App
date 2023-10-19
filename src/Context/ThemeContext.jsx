import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("pink");

    const themes = {
        pink: {
            "--color-background": "hsl(0, 84%, 97%)",
            "--color-light": "#fbd1d1",
            "--color-primary": "hsl(0, 100%, 72%)",
        },
        orange: {
            "--color-background": "hsl(36, 100%, 93%)",
            "--color-light": "",
            "--color-primary": "orange",
        },
        blue: {
            "--color-background": "hsl(194, 95%, 92%)",
            "--color-light": "",
            "--color-primary": "hsl(195, 96%, 63%)",
        },
        green: {
            "--color-background": "hsl(138, 80%, 92%)",
            "--color-light": "",
            "--color-primary": "hsl(137, 49%, 59%)",
        },
        purple: {
            "--color-background": "hsl(272, 89%, 93%)",
            "--color-light": "",
            "--color-primary": "hsl(271, 91%, 74%)",
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
