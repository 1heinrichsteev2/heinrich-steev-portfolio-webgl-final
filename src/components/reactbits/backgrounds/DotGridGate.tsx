"use client";

import dynamic from "next/dynamic";

const DotField: any = dynamic(
  () => import("../_source/DotField.js"),
  { ssr: false }
);

export default function DotGridGate() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <DotField
        dotRadius={1.5}
        dotSpacing={14}
        bulgeStrength={90}
        glowRadius={120}
        sparkle={false}
        waveAmplitude={0}
        cursorRadius={280}
        cursorForce={0.1}
        bulgeOnly
        gradientFrom="rgba(168,85,247,0.80)"
gradientTo="rgba(180,151,207,0.65)"
        glowColor="#120F17"
      />
    </div>
  );
}