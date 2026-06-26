/** All roles verbatim from the résumé. No invented achievements. */
export interface Role {
  title: string; company: string; period: string; points: string[];
}
export const experience: Role[] = [
  { title: "Creative Associate", company: "Demos Project", period: "Jun 2025 – Apr 2026",
    points: ["Led campaign branding (logo, color, typography)", "Created high-impact print & digital assets", "Maintained consistent, audience-driven visuals"] },
  { title: "Consultant Graphic Designer (Part-time)", company: "Global Remote Integrated Access Solutions", period: "Oct 2024 – Jun 2025",
    points: ["Designed key brand assets", "Enhanced engagement through social creatives"] },
  { title: "Manager – Design", company: "Instyn (E-learning)", period: "Apr 2024 – Sep 2024",
    points: ["Led e-learning design production", "Managed team workflow and quality", "Streamlined design processes"] },
  { title: "Graphic Designer & Event Coordinator", company: "Global Remote Integrated Access Solutions", period: "Jan 2023 – Apr 2024",
    points: ["Designed marketing and event assets", "Managed event visuals and execution", "Improved brand visibility via social media"] },
  { title: "Graphic Designer", company: "Extracts Events & Promotions", period: "Jan 2022 – Jan 2023",
    points: ["Created event-focused print & digital assets", "Supported setup and spatial design"] },
  { title: "Freelance Graphic Designer", company: "Independent", period: "Feb 2021 – Jan 2022",
    points: ["Delivered tailored branding and marketing creatives for clients"] },
];

export const education = [
  { title: "B.E. Civil Engineering", school: "Mar Ephraem College of Engineering", period: "2016 – 2020" },
  { title: "Print & Publishing", school: "Arena Animation, Chennai", period: "2022 – 2023" },
];
