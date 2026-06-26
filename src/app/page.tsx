import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import Featured from "@/components/sections/Featured";
import PortfolioGallery from "@/components/sections/PortfolioGallery";
import ContactCTA from "@/components/sections/ContactCTA";
export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Services />
      <Skills />
      <ExperienceTimeline />
      <Featured />
      <PortfolioGallery />
      <ContactCTA />
    </>
  );
}
