"use client";
import { useEffect, useState } from "react";
import { getCapability, type Capability } from "@/lib/device-capability";
export function useCapability(): Capability | null {
  const [cap, setCap] = useState<Capability | null>(null);
  useEffect(() => { setCap(getCapability()); }, []);
  return cap;
}
