import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("pink");

    const themes = {
        pink: {
            "--color-background": "#fcfefc",
            "--color-light": "#ffebeb",
            "--color-dark": "#faa0a0",
        },
        orange: {
            "--color-background": "rgb(24, 24, 24)",
            "--color-light": "#fcf7ef",
            "--color-dark": "rgb(0, 0, 0)",
        },
        green: {
            "--color-background": "rgb(254, 244, 244)",
            "--color-light": "rgb(255, 80, 80)",
            "--color-dark": "rgb(255, 50, 50)",
        },
        blue: {
            "--color-background": "rgb(254, 244, 244)",
            "--color-light": "rgb(255, 80, 80)",
            "--color-dark": "rgb(255, 50, 50)",
        },
        green: {
            "--color-background": "rgb(254, 244, 244)",
            "--color-light": "rgb(255, 80, 80)",
            "--color-dark": "rgb(255, 50, 50)",
        },
        purple: {
            "--color-background": "rgb(254, 244, 244)",
            "--color-light": "rgb(255, 80, 80)",
            "--color-dark": "rgb(255, 50, 50)",
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
