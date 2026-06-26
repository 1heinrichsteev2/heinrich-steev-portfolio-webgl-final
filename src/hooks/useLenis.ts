"use client";
import { useEffect } from "react";
import Lenis from "lenis";
/**
 * Single shared RAF loop driving BOTH Lenis and GSAP ScrollTrigger.
 * One source of truth — prevents competing rAF loops (a primary scroll-lag cause).
 * Tuned for a premium, slightly-weighted, responsive feel.
 * Skipped entirely under prefers-reduced-motion.
 */
export function useLenis() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let lenis: Lenis | null = null;
    let raf = 0;
    let cleanup = () => {};
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      lenis = new Lenis({
        duration: 1.2,
        lerp: 0.08,            // weighted but responsive
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        syncTouch: true,       // crisp touch tracking on mobile
        infinite: false,
      });
      lenis.on("scroll", ScrollTrigger.update);
      const loop = (t: number) => { lenis!.raf(t); raf = requestAnimationFrame(loop); };
      raf = requestAnimationFrame(loop);
      cleanup = () => { lenis?.off("scroll", ScrollTrigger.update); };
    })();
    return () => { cancelAnimationFrame(raf); cleanup(); lenis?.destroy(); };
  }, []);
}
