/**
 * THEME REGISTRY — 11 themes.
 * `key` maps to [data-theme="..."] in themes.css.
 * Inkriot is the default brand identity; Aurora effects are an
 * opt-in special-moment layer (hero, 3D, featured, loader, hover).
 */
export type ThemeKey =
  | "inkriot" | "aurora-noir" | "cyber-purple" | "ocean-blue"
  | "emerald" | "crimson" | "sunset" | "rose-gold"
  | "neon-lime" | "arctic" | "midnight-gold";

export interface ThemeMeta {
  key: ThemeKey;
  name: string;
  bg: string;
  accent: string;
  /** secondary swatch dot (for multi-color themes) */
  accent2?: string;
}

export const THEMES: ThemeMeta[] = [
  { key: "inkriot",       name: "Inkriot Original", bg: "#0B0B0B", accent: "#FFCC00" },
  { key: "aurora-noir",   name: "Aurora Noir",      bg: "#0A0A0A", accent: "#FFD60A", accent2: "#7C3AED" },
  { key: "cyber-purple",  name: "Cyber Purple",     bg: "#050510", accent: "#8B5CF6" },
  { key: "ocean-blue",    name: "Ocean Blue",       bg: "#06131D", accent: "#00C2FF" },
  { key: "emerald",       name: "Emerald",          bg: "#061A14", accent: "#10B981" },
  { key: "crimson",       name: "Crimson",          bg: "#130606", accent: "#FF3B3B" },
  { key: "sunset",        name: "Sunset",           bg: "#160B04", accent: "#FF7A00" },
  { key: "rose-gold",     name: "Rose Gold",        bg: "#1A1313", accent: "#E8A87C" },
  { key: "neon-lime",     name: "Neon Lime",        bg: "#060806", accent: "#B7FF00" },
  { key: "arctic",        name: "Arctic",           bg: "#09111A", accent: "#8DEBFF" },
  { key: "midnight-gold", name: "Midnight Gold",    bg: "#040404", accent: "#D4AF37" },
];

export const DEFAULT_THEME: ThemeKey = "inkriot";

/** Section -> whether it may use the Aurora special-moment layer */
export const AURORA_SECTIONS = new Set([
  "hero", "logo3d", "featured", "loader",
]);
