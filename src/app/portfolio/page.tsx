"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Section, { Eyebrow } from "@/components/ui/Section";
import { portfolio, groups, caseStudy } from "@/lib/portfolio-data";
export default function PortfolioPage() {
  const [filter, setFilter] = useState<string>("all");
  const items = filter === "all" ? portfolio : portfolio.filter((p) => p.group === filter);
  return (
    <div className="pt-24">
      <Section>
        <Eyebrow>Portfolio</Eyebrow>
        <h1 className="max-w-3xl text-4xl font-black text-content sm:text-6xl">{caseStudy.brand} — <span className="gradient-text">{caseStudy.motto}</span></h1>
        <p className="mt-3 text-sm uppercase tracking-wide text-content-muted">{caseStudy.label} by {caseStudy.by}</p>
        <p className="mt-6 max-w-2xl text-content-secondary">{caseStudy.overview}</p>
        <div className="mt-8 flex gap-2">
          {groups.map((g) => (
            <button key={g.key} onClick={() => setFilter(g.key)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${filter === g.key ? "border-line-accent text-accent" : "border-line text-content-secondary hover:text-content"}`}>
              {g.label}
            </button>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <Link key={p.slug} href={`/portfolio/${p.slug}`}
              className="group relative overflow-hidden rounded-lg border border-line bg-surface-2 themed">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={`/portfolio/${p.slug}-640.webp`} alt={p.title} fill sizes="(max-width:640px) 100vw, 320px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-content">{p.title}</h3>
                <p className="text-sm text-content-muted">{p.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
