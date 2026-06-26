"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

import DotGridGate from "@/components/reactbits/backgrounds/DotGridGate";
import GradientText from "@/components/reactbits/_source/GradientText";
import { siteConfig } from "@/lib/site-config";

import ThreeErrorBoundary from "@/components/three/ThreeErrorBoundary";

const Logo3D = dynamic(() => import("@/components/three/Logo3D"), {
  ssr: false,
  loading: () => <div className="grid h-[420px] place-items-center text-content-muted sm:h-[520px]">Loading 3D…</div>,
});

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20 aurora-mesh">
      <div className="absolute inset-0 opacity-60"><DotGridGate /></div>
      <div className="relative mx-auto grid w-full max-w-6xl gap-8 px-5 lg:grid-cols-2 lg:items-center">
        <div>
          <motion.p className="mb-5 inline-block rounded-full border border-line bg-surface-1/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-content-muted backdrop-blur"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            {siteConfig.roles.slice(0, 3).join(" · ")}
          </motion.p>
          <motion.h1 className="flex w-full flex-row flex-nowrap items-baseline justify-center gap-x-[0.25em] whitespace-nowrap text-center font-black leading-[0.95] tracking-tight text-content"
            style={{ fontSize: "clamp(1.6rem,5.2vw,4rem)" }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <span>HEINRICH</span>
            <GradientText colors={["#FFCC00", "#FFE9A8", "#06B6D4", "#FFCC00"]} animationSpeed={8}>STEEV</GradientText>
          </motion.h1>
          <motion.p className="mt-6 max-w-md text-base text-content-secondary sm:text-lg"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            {siteConfig.tagline}. {siteConfig.summary}
          </motion.p>
          <motion.div className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            <a
  href="https://www.behance.net/heinrichsteev"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button>View Portfolio</Button>
</a>
            <Button href={siteConfig.resume} variant="ghost">Download Résumé</Button>
          </motion.div>
        </div>
        <div className="relative"><ThreeErrorBoundary><Logo3D modelIndex={0} /></ThreeErrorBoundary></div>
      </div>
    </section>
  );
}
