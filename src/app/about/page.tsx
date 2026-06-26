import Section, { Eyebrow } from "@/components/ui/Section";
import GlassIcons from "@/components/reactbits/_source/GlassIcons";
import { education } from "@/lib/experience-data";
import { siteConfig } from "@/lib/site-config";
import { IoAirplaneOutline, IoMusicalNotesOutline, IoCameraOutline, IoFilmOutline } from "react-icons/io5";
export const metadata = { title: "About" };
const interestIcons: Record<string, any> = { Travelling: IoAirplaneOutline, Music: IoMusicalNotesOutline, Photography: IoCameraOutline, Cinema: IoFilmOutline };
export default function AboutPage() {
  return (
    <div className="pt-24">
      <Section>
        <Eyebrow>About</Eyebrow>
        <h1 className="max-w-3xl text-4xl font-black text-content sm:text-6xl">The <span className="gradient-text">journey</span> so far.</h1>
        <p className="mt-6 max-w-2xl text-lg text-content-secondary">{siteConfig.summary}</p>
        <p className="mt-4 max-w-2xl text-content-secondary">My path started in civil engineering — a discipline of structure, load, and precision. That structural thinking still anchors how I design: get the foundation right, then take the visual risk. After formal training in Print & Publishing at Arena Animation, I moved fully into design, and have spent five years across branding, events, e-learning, and motion.</p>
      </Section>
      <Section className="pt-0">
        <h2 className="mb-6 text-2xl font-bold text-content">Education</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {education.map((e) => (
            <div
  key={e.title}
  className="
    rounded-lg
    border
    border-line
    bg-surface-2
    p-6
    themed
    transition-all
    duration-300
    ease-out
    hover:-translate-y-1
    hover:scale-[1.02]
    hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)]
  "
>
              <p className="text-sm text-content-muted">{e.period}</p>
              <h3 className="mt-1 text-lg font-semibold text-content">{e.title}</h3>
              <p className="text-sm text-accent">{e.school}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section className="pt-0">
        <h2 className="mb-6 text-2xl font-bold text-content">Beyond the screen</h2>
        <GlassIcons items={siteConfig.interests.map((i) => ({
            icon: (() => { const Icon = interestIcons[i] ?? IoFilmOutline; return <Icon />; })(),
            color: "custom", label: i, customClass: "glass-interest",
          }))} />
      </Section>
    </div>
  );
}
