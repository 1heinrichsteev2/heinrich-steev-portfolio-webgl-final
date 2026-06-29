import { ReactNode } from "react";
import clsx from "clsx";
export default function Section({ children, className, id }:
  { children: ReactNode; className?: string; id?: string }) {
  return <section id={id} className={clsx("mx-auto w-full max-w-6xl px-5 py-14 sm:py-16", className)}>{children}</section>;
}
export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="mb-4 inline-block rounded-full border border-line bg-surface-1/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-content-muted backdrop-blur">{children}</span>;
}
