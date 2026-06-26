"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import GooeyNav from "@/components/reactbits/_source/GooeyNav";
import { StaggeredMenu } from "@/components/reactbits/_source/StaggeredMenu";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import { navLinks, siteConfig } from "@/lib/site-config";

export default function Navbar() {
  const pathname = usePathname();
  const activeIndex = Math.max(
    0,
    navLinks.findIndex((l) => (l.href === "/" ? pathname === "/" : pathname.startsWith(l.href)))
  );

  const gooeyItems = navLinks.map((l) => ({ label: l.label, href: l.href }));
  const menuItems = navLinks.map((l) => ({ label: l.label, link: l.href, ariaLabel: l.label }));

  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const m = () => setMobile(window.matchMedia("(max-width: 767px)").matches);
    m(); window.addEventListener("resize", m); return () => window.removeEventListener("resize", m);
  }, []);

  return (
    // Header creates NO stacking-context-forming property (no backdrop-filter, no isolation,
    // no transform). GooeyNav's natural blend backdrop is therefore the dark page / Dot Field.
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line">
      {/* GLASS = sibling BEHIND content. Its backdrop-filter is scoped to ITSELF, not an
          ancestor of GooeyNav, so it never traps mix-blend-mode: lighten. */}
      {/* 
<div
  className="pointer-events-none absolute inset-0 bg-black/20 backdrop-blur-xl"
  aria-hidden
/>
*/}
      {/* Content sits in a sibling that does NOT establish a blend-trapping context.
          position:relative alone does not create a stacking context unless z-index is set;
          we omit z-index here so GooeyNav keeps the header as its stacking context. */}
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="text-lg font-bold tracking-tight text-content">
          {siteConfig.name.split(" ")[0]}<span className="text-accent">.</span>
        </Link>
        {!mobile && (
          <div className="hidden md:block">
            <GooeyNav
  key={`gooey-${activeIndex}`}
  items={gooeyItems}
  initialActiveIndex={activeIndex}
  particleCount={20}
  particleDistances={[90, 10]}
  particleR={120}
  animationTime={2000}
  timeVariance={1000}
  colors={[1, 2, 3, 1, 2, 3, 1, 4]}
/>
          </div>
        )}
        <div className="flex items-center gap-3">
          <ThemeSwitcher />
          {mobile && (
            <div className="md:hidden">
              <StaggeredMenu items={menuItems} position="right" colors={["#1B1B1B", "var(--accent)"]}
                displaySocials={false} displayItemNumbering accentColor="var(--accent)"
                isFixed={false} menuButtonColor="var(--text-primary)" openMenuButtonColor="var(--text-primary)"
                logoUrl="" changeMenuColorOnOpen closeOnClickAway />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
