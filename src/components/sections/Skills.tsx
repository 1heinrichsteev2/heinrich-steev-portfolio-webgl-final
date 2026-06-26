"use client";
import { memo } from "react";
import Section, { Eyebrow } from "@/components/ui/Section";
import GlassIcons from "@/components/reactbits/_source/GlassIcons";
import { useReveal } from "@/hooks/useReveal";
import { software } from "@/lib/skills-services";

function Skills() {
  const ref = useReveal<HTMLDivElement>();
  const items = software.map((s) => ({
    icon: <span className="font-black">{s.abbr}</span>,
    color: "custom",
    label: s.name,
    customClass: "glass-skill",
  }));
  return (
    <Section id="skills">
      <Eyebrow>Skills</Eyebrow>
      <h2 className="mb-10 text-3xl font-bold text-content sm:text-4xl">Tools of the trade</h2>
      <div ref={ref}>
        <GlassIcons items={items} />
      </div>
    </Section>
  );
}

export default memo(Skills);
