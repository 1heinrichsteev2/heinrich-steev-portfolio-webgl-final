"use client";
import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from "react";
import { DEFAULT_THEME, type ThemeKey } from "@/lib/theme-registry";

interface ThemeContextValue { theme: ThemeKey; setTheme: (t: ThemeKey) => void; }
const ThemeContext = createContext<ThemeContextValue | null>(null);
const STORAGE_KEY = "hs-theme";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeKey>(DEFAULT_THEME);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as ThemeKey | null;
    if (saved) { setThemeState(saved); document.documentElement.setAttribute("data-theme", saved); }
  }, []);

  const setTheme = useCallback((t: ThemeKey) => {
    setThemeState(t);
    document.documentElement.setAttribute("data-theme", t);
    window.localStorage.setItem(STORAGE_KEY, t);
    // notify 3D + canvas listeners that themed CSS vars changed
    window.dispatchEvent(new CustomEvent("themechange", { detail: t }));
  }, []);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

export const themeNoFlashScript = `(function(){try{var t=localStorage.getItem('${STORAGE_KEY}')||'${DEFAULT_THEME}';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','${DEFAULT_THEME}');}})();`;
