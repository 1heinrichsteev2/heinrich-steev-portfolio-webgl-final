"use client";
import dynamic from "next/dynamic";
import { useCapability } from "@/hooks/useCapability";
import { effectGates } from "@/lib/device-capability";
const MagicBento = dynamic(() => import("../_source/MagicBento"), { ssr: false });
/**
 * Real MagicBento. `enableStars`/particleCount use the component's OWN props —
 * the documented switches, not edits to its behavior.
 */
export default function MagicBentoGate(props: any) {
  const cap = useCapability();
  const stars = cap ? effectGates.bentoParticles(cap) : false;
  return <MagicBento enableStars={stars} enableSpotlight enableBorderGlow enableMagnetism={cap?.tier === "high"} {...props} />;
}
