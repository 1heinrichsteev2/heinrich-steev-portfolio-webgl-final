"use client";
import { useEffect, useState, useRef } from "react";
export interface ThemeColors { accent: string; glow: string; ambient: string; bg: string; }

function read(): ThemeColors {
  const s = getComputedStyle(document.documentElement);
  return {
    accent: s.getPropertyValue("--accent").trim() || "#FFCC00",
    glow: s.getPropertyValue("--three-glow").trim() || "#FFE9A8",
    ambient: s.getPropertyValue("--three-ambient").trim() || "#FFCC00",
    bg: s.getPropertyValue("--bg").trim() || "#0B0B0B",
  };
}

/**
 * Live theme colors for Three.js. Returns a STABLE object reference that only
 * changes identity when the actual color VALUES change — prevents R3F scene
 * re-reconciliation on every parent render (a scroll-lag source).
 */
export function useThemeColors(): ThemeColors {
  const [c, setC] = useState<ThemeColors>({ accent: "#FFCC00", glow: "#FFE9A8", ambient: "#FFCC00", bg: "#0B0B0B" });
  const ref = useRef(c);
  useEffect(() => {
    const apply = () => {
      const next = read();
      const prev = ref.current;
      // only update state if a value actually changed → stable identity otherwise
      if (next.accent !== prev.accent || next.glow !== prev.glow || next.ambient !== prev.ambient || next.bg !== prev.bg) {
        ref.current = next;
        setC(next);
      }
    };
    apply();
    window.addEventListener("themechange", apply);
    return () => window.removeEventListener("themechange", apply);
  }, []);
  return c;
}
