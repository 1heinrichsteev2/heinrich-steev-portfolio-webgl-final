/**
 * TAILWIND THEME EXTENSION
 * Merge `theme.extend` into your tailwind.config.ts.
 * Every value references a CSS variable, so utilities like
 * `bg-surface-1`, `text-accent`, `shadow-glow-violet` stay theme-reactive.
 */
import type { Config } from "tailwindcss";

export const themeExtend: Config["theme"] = {
  extend: {
    colors: {
      surface: {
        0: "var(--surface-0)",
        1: "var(--surface-1)",
        2: "var(--surface-2)",
        3: "var(--surface-3)",
        glass: "var(--surface-glass)",
      },
      content: {
        DEFAULT: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        muted: "var(--text-muted)",
        "on-accent": "var(--text-on-accent)",
      },
      accent: {
        DEFAULT: "var(--accent-primary)",
        secondary: "var(--accent-secondary)",
        tertiary: "var(--accent-tertiary)",
        emphasis: "var(--accent-emphasis)",
      },
      line: {
        DEFAULT: "var(--border)",
        strong: "var(--border-strong)",
        accent: "var(--border-accent)",
      },
    },
    backgroundImage: {
      aurora: "var(--gradient-aurora)",
      "gradient-amber": "var(--gradient-amber)",
      "gradient-text": "var(--gradient-text)",
      mesh: "var(--gradient-mesh)",
    },
    boxShadow: {
      "glow-soft": "var(--glow-soft)",
      "glow-violet": "var(--glow-violet)",
      "glow-cyan": "var(--glow-cyan)",
      "glow-rose": "var(--glow-rose)",
      sm: "var(--shadow-sm)",
      md: "var(--shadow-md)",
      lg: "var(--shadow-lg)",
    },
    borderRadius: {
      sm: "var(--radius-sm)",
      md: "var(--radius-md)",
      lg: "var(--radius-lg)",
      full: "var(--radius-full)",
    },
  },
};
