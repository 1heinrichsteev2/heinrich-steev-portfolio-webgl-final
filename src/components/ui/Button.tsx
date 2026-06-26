"use client";
import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";
export default function Button({ children, href, variant = "primary", className, onClick }:
  { children: ReactNode; href?: string; variant?: "primary" | "ghost"; className?: string; onClick?: () => void }) {
  const base = "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-all duration-300 themed";
  const styles = variant === "primary"
    ? "bg-accent text-accent-on hover:shadow-glow hover:-translate-y-0.5"
    : "border border-line-strong bg-surface-1/60 text-content backdrop-blur hover:border-line-accent hover:-translate-y-0.5";
  const cls = clsx(base, styles, className);
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button onClick={onClick} className={cls}>{children}</button>;
}
