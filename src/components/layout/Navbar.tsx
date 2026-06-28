"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import GooeyNav from "@/components/reactbits/_source/GooeyNav";

import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import { navLinks, siteConfig } from "@/lib/site-config";

export default function Navbar() {
  const pathname = usePathname();

  const activeIndex = Math.max(
    0,
    navLinks.findIndex((l) =>
      l.href === "/"
        ? pathname === "/"
        : pathname.startsWith(l.href)
    )
  );

  const gooeyItems = navLinks.map((l) => ({
    label: l.label,
    href: l.href,
  }));

  const menuItems = navLinks.map((l) => ({
    label: l.label,
    link: l.href,
    ariaLabel: l.label,
  }));

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line">
      <div className="relative mx-auto flex items-center justify-between px-4 py-3 md:max-w-6xl md:px-5">
        {/* Logo */}
        <Link
          href="/"
          className="text-base font-bold tracking-tight text-content md:text-lg shrink-0"
        >
          {siteConfig.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </Link>

        {/* Desktop Navigation */}
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

        {/* Right Side */}
        <div className="flex items-center gap-3 shrink-0">
  {/* Mobile Menu */}
 

  <ThemeSwitcher />
</div>
      </div>
    </header>
  );
}