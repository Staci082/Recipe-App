import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
    const themes = {
        pink: {
            "--color-background": "hsl(0, 84%, 97%)",
            "--color-light": "hsl(0, 84%, 90%)",
            "--color-primary": "hsl(0, 100%, 72%)",
        },
        orange: {
            "--color-background": "hsl(28, 100%, 97%)",
            "--color-light": "hsl(37, 100%, 74%)",
            "--color-primary": "hsl(39, 100%, 50%)",
        },
        blue: {
            "--color-background": "hsl(193, 100%, 96%)",
            "--color-light": "hsl(194, 81%, 86%)",
            "--color-primary": "hsl(195, 98%, 61%)",
        },
        green: {
            "--color-background": "hsl(150, 100%, 97%)",
            "--color-light": "hsl(138, 81%, 85%)",
            "--color-primary": "hsl(152, 95%, 38%)",
        },
        purple: {
            "--color-background": "hsl(270, 100%, 97%)",
            "--color-light": "hsl(272, 93%, 88%)",
            "--color-primary": "hsl(271, 90%, 64%)",
        },
    };

    const initialTheme = localStorage.getItem("theme") || "pink";
    const [theme, setTheme] = useState(initialTheme);

    useEffect(() => {
        const selectedTheme = themes[theme];
        if (selectedTheme) {
            for (const [property, value] of Object.entries(selectedTheme)) {
                document.documentElement.style.setProperty(property, value);
            }
        }

        localStorage.setItem("theme", theme);
    }, [theme]);

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
