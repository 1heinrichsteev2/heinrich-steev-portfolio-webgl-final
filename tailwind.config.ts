import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: { 1: "var(--surface-1)", 2: "var(--surface-2)", 3: "var(--surface-3)" },
        content: { DEFAULT: "var(--text-primary)", secondary: "var(--text-secondary)", muted: "var(--text-muted)" },
        accent: { DEFAULT: "var(--accent)", soft: "var(--accent-soft)", on: "var(--on-accent)" },
        line: { DEFAULT: "var(--border)", strong: "var(--border-strong)", accent: "var(--border-accent)" },
      },
      boxShadow: { glow: "var(--glow)", "aurora-glow": "var(--aurora-glow)", themed: "var(--shadow-lg)" },
      borderRadius: { sm: "var(--radius-sm)", md: "var(--radius-md)", lg: "var(--radius-lg)" },
      fontFamily: { display: ["var(--font-display)", "system-ui", "sans-serif"], sans: ["var(--font-body)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
