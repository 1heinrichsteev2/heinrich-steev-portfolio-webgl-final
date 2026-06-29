"use client";
import { memo } from "react";
import Section, { Eyebrow } from "@/components/ui/Section";
import { useReveal } from "@/hooks/useReveal";
import { experience } from "@/lib/experience-data";

function ExperienceTimeline({ full = false }: { full?: boolean }) {
  const ref = useReveal<HTMLDivElement>();
  const roles = full ? experience : experience.slice(0, 4);

  return (
    <Section id="experience">
      <Eyebrow>Experience</Eyebrow>

      <h2 className="mb-10 text-3xl font-bold text-content sm:text-4xl">
        Where I've worked
      </h2>

      <div
  ref={ref}
  className="relative"
>
        {roles.map((r, i) => (
          <div
            key={i}
            className="
              relative
              mb-10
              last:mb-0
              rounded-2xl
              border border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              p-6
              transition-all
              duration-500
              hover:bg-white/[0.08]
              hover:border-white/20
              hover:scale-[1.02]
            "
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 45px color-mix(in srgb, var(--accent) 10%, transparent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "";
            }}
          >
            

            <p className="text-sm text-content-muted">{r.period}</p>

            <h3 className="mt-1 text-lg font-semibold text-content">
              {r.title}
            </h3>

            <p className="text-sm text-accent">{r.company}</p>

            <ul className="mt-2 space-y-1 text-sm text-content-secondary">
              {r.points.map((p, j) => (
                <li key={j}>— {p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default memo(ExperienceTimeline);