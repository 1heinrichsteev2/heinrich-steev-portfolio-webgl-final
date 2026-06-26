"use client";
import { useEffect, useRef, useState } from "react";
/**
 * Visibility gate. Used to mount/unmount or pause heavy components.
 * `once` keeps it mounted after first reveal (for non-loop content).
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  opts: { rootMargin?: string; threshold?: number; once?: boolean } = {}
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting && opts.once) io.disconnect();
      },
      { rootMargin: opts.rootMargin ?? "200px", threshold: opts.threshold ?? 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [opts.rootMargin, opts.threshold, opts.once]);
  return { ref, inView };
}
