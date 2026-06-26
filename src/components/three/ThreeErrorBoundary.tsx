"use client";
import React from "react";
/** Contains any Three.js/WebGL failure so it never unmounts the whole app. */
export default class ThreeErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) { super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(err: unknown) { console.error("3D scene error (contained):", err); }
  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? (
        <div className="grid h-[420px] place-items-center text-content-muted sm:h-[520px]">
          <span className="text-sm">3D unavailable</span>
        </div>
      );
    }
    return this.props.children;
  }
}
