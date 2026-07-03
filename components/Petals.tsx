"use client";

import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  drift: number;
  spin: number;
  hue: string;
}

export default function Petals({ count = 16 }: { count?: number }) {
  const [petals, setPetals] = useState<Petal[]>([]);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setPetals([]);
      return;
    }

    // Scale the petal count to the device so slow phones aren't asked to
    // composite as many layers as a desktop.
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    const cores = navigator.hardwareConcurrency ?? 8;
    const mem = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8;
    const lowEnd = cores <= 4 || mem <= 4;

    let effective = count;
    if (isCoarse) effective = Math.min(effective, 10);
    if (lowEnd) effective = Math.min(effective, 7);

    setPetals(
      Array.from({ length: effective }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 12 + Math.random() * 14,
        size: 10 + Math.random() * 18,
        drift: -40 + Math.random() * 80,
        spin: 180 + Math.random() * 360,
        hue: ["#C73E5A", "#E8A0A8", "#D4A24C", "#8B1E3F"][i % 4],
      }))
    );
  }, [count]);

  // Pause the CSS animations when the tab is hidden — no work while away.
  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  if (petals.length === 0) return null;

  return (
    <div
      className={`fixed inset-0 pointer-events-none overflow-hidden z-0 ${paused ? "petals-paused" : ""}`}
      aria-hidden="true"
    >
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal"
          style={
            {
              left: `${p.left}%`,
              "--dur": `${p.duration}s`,
              "--delay": `${p.delay}s`,
              "--drift": `${p.drift}px`,
              "--spin": `${p.spin}deg`,
            } as React.CSSProperties
          }
        >
          <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill={p.hue}>
            <path d="M12 2 C 14 8, 20 10, 12 22 C 4 10, 10 8, 12 2 Z" />
          </svg>
        </div>
      ))}
    </div>
  );
}
