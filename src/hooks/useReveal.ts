"use client";
import { useEffect, useRef } from "react";
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { el.style.opacity = "1"; return; }
    let trigger: any = null; let tween: any = null; let killed = false;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (killed) return;
      gsap.registerPlugin(ScrollTrigger);
      tween = gsap.fromTo(el, { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true } });
      trigger = tween.scrollTrigger;
    })();
    // PROPER cleanup: kill the ScrollTrigger + tween (fixes observer leak)
    return () => { killed = true; trigger?.kill?.(); tween?.kill?.(); };
  }, []);
  return ref;
}
