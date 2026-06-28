"use client";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";
export default function ContactCTA() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-lg border border-line bg-surface-2 p-10 text-center aurora-mesh themed sm:p-16">
        <h2 className="text-3xl font-black text-content sm:text-5xl">Let's <span className="aurora-text">build together</span>.</h2>
        <p className="mx-auto mt-4 max-w-md text-content-secondary">Civil, digital, visual, and motion — your complete creative partner under one roof.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/contact">Start a project</Button>
          <Button
  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}`}
  variant="ghost"
>
  {siteConfig.email}
</Button>
        </div>
      </div>
    </Section>
  );
}
