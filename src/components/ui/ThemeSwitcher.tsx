"use client";
import { useState } from "react";
import { THEMES } from "@/lib/theme-registry";
import { useTheme } from "@/providers/ThemeProvider";
import { IoColorPaletteOutline } from "react-icons/io5";
export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button aria-label="Change theme" onClick={() => setOpen((v) => !v)}
        className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface-1/60 text-lg text-content backdrop-blur transition-colors hover:border-line-accent">
        <IoColorPaletteOutline />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 z-50 mt-2 w-56 rounded-lg border border-line bg-surface-1/95 p-2 shadow-themed backdrop-blur-xl">
            {THEMES.map((t) => (
              <button key={t.key} onClick={() => { setTheme(t.key); setOpen(false); }}
                className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-surface-2 ${theme === t.key ? "text-accent" : "text-content-secondary"}`}>
                <span className="flex gap-1">
                  <span className="h-4 w-4 rounded-full ring-1 ring-white/10" style={{ background: t.accent }} />
                  {t.accent2 && <span className="h-4 w-4 rounded-full ring-1 ring-white/10" style={{ background: t.accent2 }} />}
                </span>
                {t.name}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
