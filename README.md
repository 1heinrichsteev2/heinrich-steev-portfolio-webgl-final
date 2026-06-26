# Heinrich Steev — Portfolio

Awwwards-quality portfolio for Heinrich Steev (Graphic Designer · Video Editor · Brand Designer). Next.js 15 App Router · TypeScript · Tailwind · React Bits · GSAP · Framer Motion · Three.js · Lenis.

## Setup
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```
> Note: the first build downloads Google Fonts (Space Grotesk + Inter) via `next/font`. Ensure network access on first build.

## Dynamic Theme Engine
11 themes, switchable instantly with animated transitions (top-right palette icon). Default is **Inkriot Original** (#0B0B0B / #FFCC00). Each theme owns its accent; a shared **Aurora** layer adds violet→cyan→amber gradients/glows on special moments only (hero, 3D logo, featured cards, loader, premium hover). Add a theme: append a `[data-theme="..."]` block in `src/styles/themes.css` and an entry in `src/lib/theme-registry.ts`.

## 3D Hero
`src/components/three/Logo3D.tsx` — slow auto-rotate, drag-to-orbit with inertia, zoom disabled, cursor changes while dragging. Glow/bloom/reflections sample the active theme (`--three-glow` / `--three-ambient`) via `useThemeColors`. Three compressed models in `public/models`; one loads initially, others on demand via the dots.

## Portfolio
**INKRIOT — Wear the Rebellion**, Self-Initiated Brand Campaign by Heinrich Steev. Data in `src/lib/portfolio-data.ts`; optimized images + `manifest.json` in `public/portfolio`. Re-run optimization with the scripts in the project root if you add posters.

## React Bits
Exact-source components live in `src/components/reactbits/`, tracked in `src/lib/reactbits-registry.ts`. All theme-reactive.

## Deploy
Push to a Git repo and import into Vercel — it builds automatically. No env vars required.
