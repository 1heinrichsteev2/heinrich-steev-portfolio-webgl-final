"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useCapability } from "@/hooks/useCapability";
import { useInView } from "@/hooks/useInView";
import { effectGates } from "@/lib/device-capability";
const CircularGallery = dynamic(() => import("../_source/CircularGallery"), { ssr: false });

interface Item { image: string; text: string; }
/**
 * OGL gallery mounts only when scrolled into view (its render loop tears down on unmount).
 * Low-end / no-WebGL → a static responsive grid fallback (no recreation of the curve effect).
 * textColor is resolved to a REAL hex from the theme — OGL draws text to a canvas texture
 * and cannot read CSS variables, so passing var(--...) renders as the component's dark default.
 */
export default function CircularGalleryGate({ items, fallback }: { items: Item[]; fallback: React.ReactNode }) {
  const cap = useCapability();
  const { ref, inView } = useInView<HTMLDivElement>({ rootMargin: "150px" });
  const capable = cap && effectGates.oglGallery(cap);

  // resolve --text-primary to a concrete color; re-resolve when the theme changes
  const [textColor, setTextColor] = useState("#FFFFFF");
  useEffect(() => {
    const read = () => {
      const v = getComputedStyle(document.documentElement).getPropertyValue("--text-primary").trim();
      if (v) setTextColor(v);
    };
    read();
    window.addEventListener("themechange", read);
    return () => window.removeEventListener("themechange", read);
  }, []);

  return (
    <div ref={ref} style={{ height: 600 }} className="relative">
      {capable
        ? inView && <CircularGallery key={textColor} items={items} bend={3} textColor={textColor} borderRadius={0.05} scrollEase={0.02} />
        : fallback}
    </div>
  );
}
