import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { portfolio } from "@/lib/portfolio-data";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const routes = ["", "/about", "/experience", "/portfolio", "/services", "/contact"]
    .map((r) => ({ url: `${base}${r}`, lastModified: new Date() }));
  const projects = portfolio.map((p) => ({ url: `${base}/portfolio/${p.slug}`, lastModified: new Date() }));
  return [...routes, ...projects];
}
