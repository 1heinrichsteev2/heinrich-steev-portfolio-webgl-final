"use client";
import { useState } from "react";
import Section, { Eyebrow } from "@/components/ui/Section";
import CircularGalleryGate from "@/components/reactbits/animations/CircularGalleryGate";
import GalleryFallback from "@/components/reactbits/animations/GalleryFallback";
import Lightbox from "@/components/sections/Lightbox";
import { portfolio } from "@/lib/portfolio-data";
import manifest from "../../../public/portfolio/manifest.json";

export default function PortfolioGallery() {
  const [active, setActive] = useState<string | null>(null);
  // CircularGallery (OGL) expects items: { image, text }
  const oglItems = portfolio.map((p) => ({ image: `/portfolio/${p.slug}-1080.webp`, text: p.title }));
  const fallbackItems = portfolio.map((p) => ({
    slug: p.slug, title: p.title,
    blur: (manifest as any[]).find((m) => m.slug === p.slug)?.blur,
  }));
  return (
    <Section id="portfolio" className="max-w-none">
      <div className="mx-auto max-w-6xl">
        <Eyebrow>Portfolio</Eyebrow>
        <h2 className="mb-2 text-3xl font-bold text-content sm:text-4xl">Creative Universe</h2>
        <p className="mb-8 text-content-secondary">Drag to explore. Built with the React Bits Circular Gallery.</p>
      </div>
      <CircularGalleryGate items={oglItems} fallback={<GalleryFallback items={fallbackItems} />} />
      {active && <Lightbox slug={active} onClose={() => setActive(null)} />}
    </Section>
  );
}
