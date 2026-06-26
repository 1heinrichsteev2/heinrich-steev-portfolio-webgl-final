"use client";
import dynamic from "next/dynamic";
import { useCapability } from "@/hooks/useCapability";
import { effectGates } from "@/lib/device-capability";
// Canonical source, code-split so its 40KB WebGL sim never ships to devices that won't run it
const SplashCursor = dynamic(() => import("../_source/SplashCursor"), { ssr: false });
/** Gate only — does NOT alter the simulation. Mounts real SplashCursor when capable. */
export default function SplashCursorGate() {
  const cap = useCapability();
  if (!cap || !effectGates.fluidCursor(cap)) return null; // low-end/mobile → native cursor
  return <SplashCursor />;
}
