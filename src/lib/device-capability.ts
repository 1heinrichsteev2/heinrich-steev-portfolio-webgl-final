/**
 * Device capability detection — decides WHICH components run, never HOW they look.
 * Heavy GPU effects (fluid cursor, OGL gallery) gate on this.
 * Result is computed once and cached.
 */
export interface Capability {
  tier: "high" | "mid" | "low";
  isMobile: boolean;
  isTouch: boolean;
  prefersReducedMotion: boolean;
  cores: number;
  memoryGB: number;
  hasWebGL2: boolean;
  saveData: boolean;
}

let cached: Capability | null = null;

function detectWebGL2(): boolean {
  try {
    const c = document.createElement("canvas");
    return !!c.getContext("webgl2");
  } catch { return false; }
}

export function getCapability(): Capability {
  if (cached) return cached;
  if (typeof window === "undefined") {
    return { tier: "high", isMobile: false, isTouch: false, prefersReducedMotion: false, cores: 8, memoryGB: 8, hasWebGL2: true, saveData: false };
  }
  const nav = navigator as any;
  const cores = nav.hardwareConcurrency || 4;
  const memoryGB = nav.deviceMemory || 4;
  const isTouch = window.matchMedia("(pointer: coarse)").matches;
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(nav.userAgent || "");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const saveData = !!(nav.connection && nav.connection.saveData);
  const hasWebGL2 = detectWebGL2();

  // tiering: high = desktop, plenty of cores/mem, WebGL2, not save-data
  let tier: Capability["tier"] = "high";
  if (prefersReducedMotion || saveData || !hasWebGL2) tier = "low";
  else if (isMobile || isTouch || cores <= 4 || memoryGB <= 4) tier = "mid";
  if ((isMobile && memoryGB <= 3) || cores <= 2) tier = "low";

  cached = { tier, isMobile, isTouch, prefersReducedMotion, cores, memoryGB, hasWebGL2, saveData };
  return cached;
}

/** Per-effect gates derived from capability. */
export const effectGates = {
  fluidCursor: (c: Capability) => c.tier === "high" && !c.isTouch,        // WebGL fluid sim: desktop high-end only
  oglGallery:  (c: Capability) => c.tier !== "low" && c.hasWebGL2,        // OGL: mid+ with WebGL
  dotGridFull: (c: Capability) => c.tier === "high",                     // full particle count
  dotGridGap:  (c: Capability) => (c.tier === "high" ? 32 : c.tier === "mid" ? 48 : 64), // wider gap = fewer dots
  bentoParticles: (c: Capability) => c.tier === "high",                  // MagicBento star particles
  threeAutoRotate: (c: Capability) => c.tier !== "low",
};
