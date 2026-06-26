"use client";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { useCapability } from "@/hooks/useCapability";
import { useInView } from "@/hooks/useInView";
import { effectGates } from "@/lib/device-capability";
const DotGrid = dynamic(() => import("../_source/DotGrid"), { ssr: false });
/**
 * Mounts the real DotGrid only while on-screen (RAF pauses when unmounted).
 * Particle DENSITY scales via the component's own `gap` prop — not a behavior change,
 * just the supported knob for fewer dots on weaker GPUs.
 */
export default function DotGridGate({ baseColor, activeColor }: { baseColor?: string; activeColor?: string }) {
  const cap = useCapability();
  // no rootMargin cushion: unmount (and stop the WebGL RAF) as soon as it leaves the viewport
  const { ref, inView } = useInView<HTMLDivElement>({ rootMargin: "0px", threshold: 0 });
  const gap = cap ? effectGates.dotGridGap(cap) : 32;
  return (
    <div ref={ref} className="absolute inset-0">
      {inView && cap && (
        <DotGrid gap={gap} baseColor={baseColor ?? "var(--particle)"} activeColor={activeColor ?? "var(--accent)"} proximity={120} />
      )}
    </div>
  );
}
