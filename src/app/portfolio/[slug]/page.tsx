import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Section, { Eyebrow } from "@/components/ui/Section";
import { portfolio, caseStudy } from "@/lib/portfolio-data";

export function generateStaticParams() { return portfolio.map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = portfolio.find((p) => p.slug === slug);
  return { title: item ? item.title : "Project" };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = portfolio.find((p) => p.slug === slug);
  if (!item) return notFound();
  const idx = portfolio.findIndex((p) => p.slug === item.slug);
  const next = portfolio[(idx + 1) % portfolio.length];
  return (
    <div className="pt-24">
      <Section>
        <Link href="/portfolio" className="text-sm text-content-muted hover:text-accent">← Back to portfolio</Link>
        <Eyebrow>{caseStudy.brand} · {item.group === "campaign" ? "Campaign" : "Concept"}</Eyebrow>
        <h1 className="text-4xl font-black text-content sm:text-6xl">{item.title}</h1>
        <p className="mt-4 max-w-2xl text-content-secondary">{item.blurb}</p>
        <div className="relative mx-auto mt-10 aspect-[4/5] w-full max-w-xl overflow-hidden rounded-lg border border-line">
          <Image src={`/portfolio/${item.slug}-1080.webp`} alt={item.title} fill sizes="(max-width:768px) 100vw, 576px" className="object-cover" priority />
        </div>
        <div className="mx-auto mt-8 max-w-xl">
          <p className="text-sm uppercase tracking-wide text-content-muted">Role</p>
          <p className="mt-1 text-content-secondary">{caseStudy.role.join(" · ")}</p>
          <p className="mt-4 text-sm uppercase tracking-wide text-content-muted">Tools</p>
          <p className="mt-1 text-content-secondary">{caseStudy.tools.join(" · ")}</p>
        </div>
        <div className="mt-12 border-t border-line pt-6">
          <Link href={`/portfolio/${next.slug}`} className="group flex items-center justify-between">
            <span className="text-content-muted">Next project</span>
            <span className="text-lg font-semibold text-content group-hover:text-accent">{next.title} →</span>
          </Link>
        </div>
      </Section>
    </div>
  );
}
