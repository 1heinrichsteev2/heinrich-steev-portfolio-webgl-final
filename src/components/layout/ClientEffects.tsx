"use client";
import dynamic from "next/dynamic";
const SplashCursorGate = dynamic(() => import("@/components/reactbits/cursor/SplashCursorGate"), { ssr: false });
export default function ClientEffects() {
  return <SplashCursorGate />;
}
