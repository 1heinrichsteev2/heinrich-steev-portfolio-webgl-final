"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type FloatingIcon = {
  src: string;
  label: string;
  duration: number; // seconds per float cycle
  delay: number; // stagger offset
  drift: number; // px of vertical travel (10–20)
  /** Tailwind position utilities placing the icon in empty hero space. */
  position: string;
  /** Hidden on mobile to keep small screens clean. */
  hideOnMobile?: boolean;
};

/**
 * The hero content is a centered, single max-w-4xl column.
 * Icons are distributed symmetrically into the left and right margins
 * and the top/bottom bands — never over the centered headline,
 * description, or buttons. The whole layer sits behind content at -z-10.
 */
const ICONS: FloatingIcon[] = [
  // Left side
  {
    src: "/icons/photoshop.svg",
    label: "Adobe Photoshop",
    duration: 5,
    delay: 0,
    drift: 14,
    position: "top-[22%] left-[8%]",
  },
  {
    src: "/icons/after-effects.svg",
    label: "Adobe After Effects",
    duration: 8,
    delay: 1.1,
    drift: 16,
    position: "top-[50%] left-[5%]",
  },
  {
    src: "/icons/adobe-premiere-pro.svg",
    label: "Adobe Premiere Pro",
    duration: 6.5,
    delay: 0.9,
    drift: 15,
    position: "bottom-[18%] left-[10%]",
    hideOnMobile: true,
  },
  {
    src: "/icons/indesign.svg",
    label: "Adobe InDesign",
    duration: 8.5,
    delay: 0.7,
    drift: 11,
    position: "top-[16%] left-[24%]",
    hideOnMobile: true,
  },
  // Right side
  {
    src: "/icons/illustrator.svg",
    label: "Adobe Illustrator",
    duration: 7,
    delay: 0.6,
    drift: 18,
    position: "top-[22%] right-[8%]",
  },
  {
    src: "/icons/figma.svg",
    label: "Figma",
    duration: 6,
    delay: 0.3,
    drift: 12,
    position: "top-[50%] right-[5%]",
  },
  {
    src: "/icons/canva.svg",
    label: "Canva",
    duration: 7.5,
    delay: 0.4,
    drift: 13,
    position: "bottom-[18%] right-[10%]",
    hideOnMobile: true,
  },
  {
    src: "/icons/lightroom.svg",
    label: "Adobe Lightroom",
    duration: 9,
    delay: 1.4,
    drift: 17,
    position: "top-[16%] right-[24%]",
    hideOnMobile: true,
  },
];

export default function FloatingSoftwareIcons() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {ICONS.map(({ src, label, duration, delay, drift, position, hideOnMobile }) => (
        <motion.div
          key={label}
          className={`absolute ${position} ${hideOnMobile ? "hidden md:block" : ""}`}
          initial={{ y: 0 }}
          animate={{ y: [0, -drift, 0] }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="pointer-events-auto cursor-pointer transition-[filter] duration-300 hover:[filter:drop-shadow(0_0_16px_rgba(255,204,0,0.45))]"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Image
              src={src}
              alt={label}
              title={label}
              width={60}
              height={60}
              draggable={false}
              className="h-8 w-8 select-none md:h-[50px] md:w-[50px] lg:h-[60px] lg:w-[60px]"
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
