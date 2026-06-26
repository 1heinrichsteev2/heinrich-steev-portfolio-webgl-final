"use client";
import Section, { Eyebrow } from "@/components/ui/Section";
import { LogoLoop } from "@/components/reactbits/_source/LogoLoop";
import { portfolio } from "@/lib/portfolio-data";
import { useInView } from "@/hooks/useInView";
import Image from "next/image";
import Link from "next/link";

export default function Featured() {
  const featured = portfolio.filter((p) => p.group === "campaign").slice(0, 8);
  const { ref, inView } = useInView<HTMLDivElement>({ rootMargin: "200px" });
  const logos = featured.map((p) => ({
    node: (
      <Link href={`/portfolio/${p.slug}`} className="group relative block aspect-[4/5] w-[200px] overflow-hidden rounded-lg border border-line">
        <Image src={`/portfolio/${p.slug}-640.webp`} alt={p.title} fill sizes="200px"
          className="object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
          <span className="text-sm font-medium text-white">{p.title}</span>
        </div>
      </Link>
    ),
    title: p.title,
  }));
  return (
    <Section id="featured" className="max-w-none px-0">
      <div className="mx-auto max-w-6xl px-5">
        <Eyebrow>Featured</Eyebrow>
        <h2 className="mb-10 text-3xl font-bold text-content sm:text-4xl">INKRIOT — Wear the Rebellion</h2>
      </div>
      {/* Gate mounting so LogoLoop's RAF only runs while the section is visible */}
      <div ref={ref} className="min-h-[266px]">
        {inView && (
          <LogoLoop logos={logos} speed={60} direction="left" gap={20} pauseOnHover scaleOnHover ariaLabel="Featured INKRIOT campaign work" />
        )}
      </div>
    </Section>
  );
}
