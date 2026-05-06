"use client";

import { useEffect, useRef } from "react";

export default function HeartPattern() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 24;
      const ny = (e.clientY / window.innerHeight - 0.5) * 18;
      tx = nx;
      ty = ny;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          el.style.setProperty("--hp-x", `${tx}px`);
          el.style.setProperty("--hp-y", `${ty}px`);
          raf = 0;
        });
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 heart-pattern-anim"
      style={{ mixBlendMode: "screen" }}
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="hearts"
            x="0"
            y="0"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <g fill="#E8A0A8">
              <path
                transform="translate(10 18) scale(0.55)"
                d="M12 21s-7-4.5-9.5-9C0.5 7.5 3.5 3 7.5 3c2 0 3.5 1 4.5 2.5C13 4 14.5 3 16.5 3 20.5 3 23.5 7.5 21.5 12c-2.5 4.5-9.5 9-9.5 9z"
              />
            </g>
            <g fill="#D4A24C" opacity="0.7">
              <path
                transform="translate(72 50) rotate(18) scale(0.4)"
                d="M12 21s-7-4.5-9.5-9C0.5 7.5 3.5 3 7.5 3c2 0 3.5 1 4.5 2.5C13 4 14.5 3 16.5 3 20.5 3 23.5 7.5 21.5 12c-2.5 4.5-9.5 9-9.5 9z"
              />
            </g>
            <g fill="#C73E5A" opacity="0.85">
              <path
                transform="translate(38 80) rotate(-12) scale(0.35)"
                d="M12 21s-7-4.5-9.5-9C0.5 7.5 3.5 3 7.5 3c2 0 3.5 1 4.5 2.5C13 4 14.5 3 16.5 3 20.5 3 23.5 7.5 21.5 12c-2.5 4.5-9.5 9-9.5 9z"
              />
            </g>
            <g fill="#FBF3E4" opacity="0.5">
              <path
                transform="translate(95 95) rotate(28) scale(0.28)"
                d="M12 21s-7-4.5-9.5-9C0.5 7.5 3.5 3 7.5 3c2 0 3.5 1 4.5 2.5C13 4 14.5 3 16.5 3 20.5 3 23.5 7.5 21.5 12c-2.5 4.5-9.5 9-9.5 9z"
              />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hearts)" />
      </svg>
    </div>
  );
}
