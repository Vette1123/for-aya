"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useEffect } from "react";

export default function Cursor() {
  const reduce = useReducedMotion();
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const x = useSpring(mouseX, { damping: 20, stiffness: 200 });
  const y = useSpring(mouseY, { damping: 20, stiffness: 200 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (reduce) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const handle = (e: MouseEvent) => {
      mouseX.set(e.clientX - 12);
      mouseY.set(e.clientY - 12);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [mouseX, mouseY, reduce]);

  if (reduce) return null;

  return (
    <motion.div
      style={{ x, y }}
      className="fixed top-0 left-0 pointer-events-none z-[200] mix-blend-screen hidden md:block"
      aria-hidden
    >
      <div className="w-6 h-6 rounded-full bg-rose-warm/60 blur-sm" />
    </motion.div>
  );
}
