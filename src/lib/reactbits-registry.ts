/** Tracks installed React Bits components, their source URL + deps. */
export const reactBitsRegistry = {
  "dot-field":       { path: "backgrounds/DotField", url: "https://reactbits.dev/backgrounds/dot-field", deps: [] },
  "gradient-text":   { path: "text/GradientText", url: "https://reactbits.dev/text-animations/gradient-text", deps: [] },
  "glass-icons":     { path: "components/GlassIcons", url: "https://reactbits.dev/components/glass-icons", deps: ["react-icons"] },
  "border-glow":     { path: "effects/BorderGlow", url: "https://reactbits.dev/components/border-glow", deps: [] },
  "spotlight-card":  { path: "effects/SpotlightCard", url: "https://reactbits.dev/components/spotlight-card", deps: [] },
  "gooey-nav":       { path: "navigation/GooeyNav", url: "https://reactbits.dev/components/gooey-nav", deps: [] },
  "staggered-menu":  { path: "navigation/StaggeredMenu", url: "https://reactbits.dev/components/staggered-menu", deps: ["framer-motion"] },
  "magic-bento":     { path: "cards/MagicBento", url: "https://reactbits.dev/components/magic-bento?enableStars=false", deps: [] },
  "splash-cursor":   { path: "cursor/SplashCursor", url: "https://reactbits.dev/animations/splash-cursor?CURL=8", deps: [] },
  "logo-loop":       { path: "animations/LogoLoop", url: "https://reactbits.dev/animations/logo-loop", deps: [] },
  "circular-gallery":{ path: "animations/CircularGallery", url: "https://reactbits.dev/components/circular-gallery", deps: [] },
} as const;
