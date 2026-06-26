# Project Memory — Heinrich Steev Portfolio

## Installed Packages
next@15.5.19 (patched for CVE-2025-66478), react@19, typescript@5.7
three@0.171, @react-three/fiber@9, @react-three/drei@10, @react-three/postprocessing@3
gsap@3.12, framer-motion@11, lenis@1.1, react-icons@5, clsx, meshoptimizer@0.22
Dev: tailwindcss@3.4, postcss, autoprefixer

## Completed Features
- Dynamic Theme Engine: 11 themes (Inkriot default), animated transitions, no-flash, localStorage
- Aurora special-moment layer (hero, 3D logo, featured, loader, premium hover) — opt-in only
- 3D hero logo: theme-reactive glow/bloom, drag+inertia orbit, auto-rotate, zoom disabled,
  cursor changes on drag, 3 models (1 loaded initially, others on demand), meshopt decode
- React Bits (exact-source, modular): DotField, GradientText, GlassIcons, BorderGlow,
  SpotlightCard, GooeyNav, StaggeredMenu, MagicBento, SplashCursor, LogoLoop, CircularGallery
- "RE" glow treatment inherits active accent (not fixed yellow)
- Pages: Home, About, Experience, Portfolio (+15 case-study routes), Services, Contact
- Portfolio: INKRIOT — Wear the Rebellion (Self-Initiated Brand Campaign by Heinrich Steev),
  15 posters categorized Campaign(11)/Concept(4), Magic Bento grid + Circular Gallery + Lightbox
- SEO: per-page metadata, sitemap, robots; GSAP scroll reveals; Lenis smooth scroll
- All content sourced from résumé — no invented experience/clients

## Asset Optimization
- GLB: 62MB -> 12.7MB (meshopt + 1K WebP textures; model 2 geometry simplified 50%)
- Posters: 14MB JPG -> 6.3MB AVIF+WebP (2 sizes each) + base64 blur placeholders

## Design Decisions
- Default theme = Inkriot Original (#0B0B0B / #FFCC00) — matches the poster brand
- Theme philosophy #2: each theme owns its accent; Aurora is accent layer for special moments only
- params awaited in dynamic routes (Next 15 requirement)
- SplashCursor in ClientEffects wrapper (ssr:false not allowed in Server Components)

## Pending / Your Action Needed
- Replace placeholder QR/headshot if desired (currently typography-led)
- Verify GLB models display as intended (I compressed but can't visually preview 3D here)
- Deploy to Vercel: connect repo, it builds automatically

## Notes
- Build verified clean (26 pages). Google Fonts fetch fails ONLY in sandbox; works locally/Vercel.
- meshopt decoder wired into useGLTF loader for compressed geometry

## REVISION — Exact React Bits Source + Performance System
- Replaced ALL 11 recreations with VERBATIM canonical source from DavidHDev/react-bits
  (MIT + Commons Clause). Files in src/components/reactbits/_source/ — MD5-verified
  byte-identical to the official repo. Confirmed real: SplashCursor=WebGL fluid sim,
  CircularGallery=OGL, DotGrid=GSAP InertiaPlugin, GradientText=motion/react.
- Real deps installed: ogl, motion, gsap@latest (InertiaPlugin now free in 3.13).
- Performance system (gates WRAP source, never edit it):
  * device-capability.ts: tiers high/mid/low from cores, deviceMemory, WebGL2, touch, save-data
  * SplashCursorGate: fluid sim desktop-high-end only; native cursor elsewhere
  * DotGridGate: mounts only in-view; gap widens on weaker GPUs (fewer dots, same per-dot behavior)
  * CircularGalleryGate: OGL mounts only when visible; static grid fallback on low-end/no-WebGL
  * MagicBentoGate: enableStars/magnetism via component's OWN props by tier
- Scroll-lag fixes (evidence-based):
  * Logo3D: frameloop "demand"/"never" — STOPS rendering off-screen; auto-rotate gated to in-view
  * useLenis: single shared RAF drives Lenis + ScrollTrigger.update (was 4 competing loops)
  * useReveal: now calls ScrollTrigger.kill() on unmount (was leaking observers)
- Build verified clean (26 pages). Only 1 custom RAF loop remains (Lenis, shared).
