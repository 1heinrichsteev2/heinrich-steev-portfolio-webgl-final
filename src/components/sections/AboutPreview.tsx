"use client";
import { memo } from "react";
import Section, { Eyebrow } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { useReveal } from "@/hooks/useReveal";
import { siteConfig } from "@/lib/site-config";
function AboutPreview() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <Section id="about">
      <div ref={ref} className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <Eyebrow>About</Eyebrow>
          <h2 className="text-3xl font-bold text-content sm:text-4xl">Design as <span className="gradient-text">rebellion</span>, built on discipline.</h2>
          <p className="mt-5 max-w-xl text-content-secondary">{siteConfig.summary}</p>
          <p className="mt-4 max-w-xl text-content-secondary">A civil-engineering background turned design discipline — structure first, then the visual risk. Five years across branding, events, e-learning, and motion.</p>
          <div className="mt-7"><Button href="/about" variant="ghost">More about me</Button></div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[["5+","Years designing"],["7","Roles held"],["15","Campaign pieces"],["∞","Ideas shipped"]].map(([n,l]) => (
            <div key={l} className="rounded-lg border border-line bg-surface-2 p-5 themed">
              <p className="text-3xl font-black text-accent">{n}</p>
              <p className="mt-1 text-sm text-content-muted">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default memo(AboutPreview);
