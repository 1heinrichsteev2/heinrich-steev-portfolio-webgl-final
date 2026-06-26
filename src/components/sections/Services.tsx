"use client";
import { memo } from "react";
import Section, { Eyebrow } from "@/components/ui/Section";
import SpotlightCard from "@/components/reactbits/_source/SpotlightCard";
import { useReveal } from "@/hooks/useReveal";
import { services } from "@/lib/skills-services";
import * as Io from "react-icons/io5";

function Services() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <Section id="services">
      <Eyebrow>Services</Eyebrow>

      <h2 className="mb-10 text-3xl font-bold text-content sm:text-4xl">
        What I do
      </h2>

      <div
        ref={ref}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((s) => {
          const Icon =
            (Io as any)[s.icon] ?? Io.IoSparklesOutline;

          return (
            <div
              key={s.title}
              className="
                transition-all
                duration-300
                ease-out
                hover:-translate-y-1
                hover:scale-[1.015]
              "
            >
              <SpotlightCard
                className="group bg-surface-2"
                spotlightColor="rgba(255, 204, 0, 0.18)"
              >
                <Icon
                  className="
                    mb-4
                    text-2xl
                    transition-all
                    duration-300
                    group-hover:scale-110
                  "
                  style={{ color: "var(--accent)" }}
                />

                <h3
                  className="
                    text-lg
                    font-semibold
                    text-content
                    transition-all
                    duration-300
                  "
                >
                  {s.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    text-content-secondary
                    transition-all
                    duration-300
                  "
                >
                  {s.desc}
                </p>
              </SpotlightCard>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export default memo(Services);