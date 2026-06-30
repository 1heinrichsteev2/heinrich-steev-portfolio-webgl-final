/**
 * INKRIOT — Wear the Rebellion
 * Self-Initiated Brand Campaign by Heinrich Steev.
 * NOT client work. A personal brand / creative project, presented
 * as the flagship case study. Image slugs match public/portfolio/manifest.
 */
export interface PortfolioItem {
  slug: string; title: string; group: "campaign" | "concept"; blurb: string;
}

export const caseStudy = {
  brand: "INKRIOT",
  motto: "Wear the Rebellion",
  label: "Self-Initiated Brand Campaign",
  by: "Heinrich Steev",
  overview:
    "INKRIOT is my own brand and a self-initiated creative project — a streetwear-inspired identity built around a single idea: design as rebellion. The campaign is a connected poster series that runs a narrative from building something bigger to recognition, momentum, and a 2027 vision, plus a moodier concept strand exploring the cost of the grind.",
  role: ["Brand identity", "Art direction", "Poster design", "Typography", "Photo compositing"],
  tools: ["Photoshop", "Illustrator", "After Effects", "Lightroom"],
};

export const portfolio: PortfolioItem[] = [
  { slug: "fried",             title: "Build Something Bigger", group: "campaign", blurb: "The campaign opener — ambition as a headline." },
  { slug: "the-destination",   title: "The Authority",          group: "campaign", blurb: "Lead with vision, inspire with action." },
  { slug: "the-connection-ii", title: "The Recognition",        group: "campaign", blurb: "A brand presence that earns attention and trust." },
  { slug: "the-growth",        title: "The Momentum",           group: "campaign", blurb: "Consistent innovation that fuels growth." },
  { slug: "the-innovation",    title: "The Expansion",          group: "campaign", blurb: "Scale your reach, unlock new opportunities." },
  { slug: "the-connection",    title: "Success by Design",      group: "campaign", blurb: "Every blueprint, pixel, and frame working together." },
  { slug: "success-by-design", title: "The Innovation",         group: "campaign", blurb: "Creative ideas powered by modern technology." },
  { slug: "the-momentum",      title: "The Connection",         group: "campaign", blurb: "Reach the right audience — connect today." },
  { slug: "the-expansion",     title: "The Connection II",      group: "campaign", blurb: "Meaningful marketing that builds lasting relationships." },
  { slug: "the-recognition",   title: "The Growth",             group: "campaign", blurb: "Think, build, grow, repeat." },
  { slug: "the-authority",     title: "The Destination",        group: "campaign", blurb: "From blueprint to big screen — one creative partner." },
  { slug: "build-bigger",      title: "Fried",                  group: "concept",  blurb: "Running on caffeine, deadlines, and determination." },
  { slug: "design-beyond-limits", title: "Design Beyond Limits", group: "concept", blurb: "Smart ideas, creative design, real results." },
  { slug: "2027-state-of-mind", title: "Just Noise",            group: "concept",  blurb: "Smiling outside, glitching inside — no signal, no peace." },
  { slug: "just-noise",         title: "2027 State of Mind",    group: "concept",  blurb: "Pain made power. Future in focus." },
];

export const groups = [
  { key: "all", label: "All Work" },
  { key: "campaign", label: "Campaign" },
  { key: "concept", label: "Concept" },
] as const;
