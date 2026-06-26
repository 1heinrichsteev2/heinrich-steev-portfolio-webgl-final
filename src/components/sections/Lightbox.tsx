"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { portfolio } from "@/lib/portfolio-data";
export default function Lightbox({ slug, onClose }: { slug: string; onClose: () => void }) {
  const item = portfolio.find((p) => p.slug === slug);
  if (!item) return null;
  return (
    <motion.div className="fixed inset-0 z-[80] grid place-items-center bg-black/90 p-6 backdrop-blur"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <button aria-label="Close" className="absolute right-6 top-6 text-3xl text-white" onClick={onClose}><IoClose /></button>
      <motion.div className="relative max-h-[85vh] w-auto" initial={{ scale: 0.95 }} animate={{ scale: 1 }}
        onClick={(e) => e.stopPropagation()}>
        <Image src={`/portfolio/${slug}-1080.webp`} alt={item.title} width={1080} height={1350}
          className="max-h-[85vh] w-auto rounded-lg object-contain" />
        <p className="mt-3 text-center text-sm text-white/80">{item.title} — {item.blurb}</p>
      </motion.div>
    </motion.div>
  );
}
