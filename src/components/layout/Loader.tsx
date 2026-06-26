"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

/**
 * Shows ONLY on first visit / hard refresh — never on client route changes.
 * sessionStorage flag persists across SPA navigations (cleared when tab closes,
 * so a fresh visit or hard refresh shows it again). The loader lives in the root
 * layout which does NOT remount on route change, so this runs exactly once.
 */
export default function Loader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("hs-loaded");
    if (seen) { setShow(false); return; }       // already loaded this session → no loader
    setShow(true);
    const t = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("hs-loaded", "1");  // mark loaded so route changes skip it
    }, 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div className="fixed inset-0 z-[100] grid place-items-center bg-bg aurora-mesh"
          initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
          <div className="text-center">
            <motion.h1 className="aurora-text text-5xl font-black tracking-tight sm:text-7xl"
              initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
              {siteConfig.name.split(" ")[0]}
            </motion.h1>
            <motion.div className="mx-auto mt-4 h-0.5 w-40 overflow-hidden rounded-full bg-surface-2">
              <motion.div className="h-full" style={{ background: "var(--accent)" }}
                initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 1.4 }} />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
