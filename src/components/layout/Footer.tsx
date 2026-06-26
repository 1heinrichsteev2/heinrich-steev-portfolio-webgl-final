import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface-1 themed">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-bold text-content">{siteConfig.name}</p>
          <p className="text-sm text-content-muted">{siteConfig.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-content-secondary">
          <a href={`mailto:${siteConfig.email}`} className="hover:text-accent">{siteConfig.email}</a>
          <a href={siteConfig.behance} target="_blank" rel="noopener" className="hover:text-accent">Behance</a>
          <Link href="/contact" className="hover:text-accent">Contact</Link>
        </div>
      </div>
      <p className="pb-6 text-center text-xs text-content-muted">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
    </footer>
  );
}
