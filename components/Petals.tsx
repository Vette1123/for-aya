"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  rotate: number;
  drift: number;
  hue: string;
}

export default function Petals({ count = 18 }: { count?: number }) {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    setPetals(
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 10 + Math.random() * 14,
        size: 10 + Math.random() * 18,
        rotate: Math.random() * 360,
        drift: -40 + Math.random() * 80,
        hue: ["#C73E5A", "#E8A0A8", "#D4A24C", "#8B1E3F"][i % 4],
      }))
    );
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="petal"
          style={{ left: `${p.left}%`, top: -30 }}
          initial={{ y: -50, x: 0, rotate: p.rotate, opacity: 0 }}
          animate={{
            y: ["-5vh", "110vh"],
            x: [0, p.drift, -p.drift / 2, p.drift / 3],
            rotate: [p.rotate, p.rotate + 360],
            opacity: [0, 0.85, 0.85, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill={p.hue}>
            <path d="M12 2 C 14 8, 20 10, 12 22 C 4 10, 10 8, 12 2 Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
