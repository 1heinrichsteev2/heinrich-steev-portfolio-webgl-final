"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919487306712"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-[30px] right-[30px] z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg"
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{
        scale: 1.08,
        boxShadow: "0 12px 28px rgba(37, 211, 102, 0.5)",
      }}
    >
      <Image
        src="/icons/whatsapp.svg"
        alt="WhatsApp"
        width={56}
        height={56}
        draggable={false}
        className="h-14 w-14 select-none rounded-full"
        priority
      />
    </motion.a>
  );
}
