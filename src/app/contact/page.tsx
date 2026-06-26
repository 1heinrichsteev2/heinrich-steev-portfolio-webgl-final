"use client";
import { useState } from "react";
import Section, { Eyebrow } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";
import {
  IoMailOutline,
  IoCallOutline,
  IoLogoBehance,
  IoDocumentTextOutline,
} from "react-icons/io5";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const submit = () => {
    const subject = encodeURIComponent(
      `Project enquiry from ${form.name || "website"}`
    );

    const bodyText = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${bodyText}`;
    setSent(true);
  };

  return (
    <div className="pt-24">
      <Section>
        <Eyebrow>Contact</Eyebrow>

        <h1 className="text-4xl font-black text-content sm:text-6xl">
          Let's <span className="gradient-text">talk</span>.
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr]">
          {/* Left Side */}
          <div className="space-y-4">
            {[
              {
                icon: IoMailOutline,
                label: siteConfig.email,
                href: `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}`,
              },
              {
                icon: IoCallOutline,
                label: siteConfig.phones.join(" / "),
                href: `tel:${siteConfig.phones[0].replace(/\s/g, "")}`,
              },
              {
                icon: IoLogoBehance,
                label: "behance.net/heinrichsteev",
                href: siteConfig.behance,
              },
              {
                icon: IoDocumentTextOutline,
                label: "Download résumé",
                href: siteConfig.resume,
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-lg border border-line bg-surface-2 p-4 themed transition-colors hover:border-line-accent"
              >
                <c.icon
                  className="text-xl"
                  style={{ color: "var(--accent)" }}
                />
                <span className="text-content-secondary">
                  {c.label}
                </span>
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="space-y-4">
            <input
              placeholder="Your name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="w-full rounded-md border border-line bg-surface-2 px-4 py-3 text-content outline-none focus:border-line-accent themed"
            />

            <input
              placeholder="Your email"
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full rounded-md border border-line bg-surface-2 px-4 py-3 text-content outline-none focus:border-line-accent themed"
            />

            <textarea
              placeholder="Tell me about your project"
              rows={5}
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="w-full rounded-md border border-line bg-surface-2 px-4 py-3 text-content outline-none focus:border-line-accent themed"
            />

            {/* Button */}
            <div className="pt-4">
              <div style={{ marginLeft: "-100px" }}>
                <Button onClick={submit}>
                  {sent ? "Opening mail..." : "Send message"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}