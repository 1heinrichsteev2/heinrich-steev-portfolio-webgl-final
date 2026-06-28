"use client";

import GradientText from "@/components/reactbits/_source/GradientText";
import FloatingSoftwareIcons from "@/components/hero/FloatingSoftwareIcons";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";



export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20 aurora-mesh">
      <FloatingSoftwareIcons />
      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center justify-center px-5 text-center">
        <div className="flex flex-col items-center">
          <motion.p
            className="mb-5 inline-block rounded-full border border-line bg-surface-1/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-content-muted backdrop-blur"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {siteConfig.roles.slice(0, 3).join(" · ")}
          </motion.p>

          <motion.h1
  className="inline-flex flex-row flex-nowrap items-baseline gap-x-[0.25em] whitespace-nowrap text-center font-black"
  style={{ fontSize: "clamp(1.6rem,5.2vw,4rem)" }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
>
  <span>HEINRICH</span>

  <GradientText
    colors={[
      "#7C3AED",
      "#FFCC00",
      "#06B6D4",
      "#FFCC00",
    ]}
    animationSpeed={8}
  >
    STEEV
  </GradientText>
</motion.h1>

          <motion.p
            className="mt-6 max-w-3xl text-base text-content-secondary sm:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {siteConfig.tagline}. {siteConfig.summary}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="https://www.behance.net/heinrichsteev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>View Portfolio</Button>
            </a>

            <Button href={siteConfig.resume} variant="ghost">
              Download Résumé
            </Button>
          </motion.div>
        </div>

        
      </div>
    </section>
  );
}