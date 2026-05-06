"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface FloatingHeart {
  id: number;
  x: number;
  y: number;
  hue: string;
  size: number;
}

const sweetWords = [
  "أحبّكِ",
  "يا قلبي",
  "حياتي",
  "آيتي",
  "روحي",
  "نوري",
  "حبيبتي",
  "قمري",
  "عمري",
];

export default function HeartGame() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);
  const [count, setCount] = useState(0);
  const [word, setWord] = useState("");

  const burst = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const newHearts: FloatingHeart[] = Array.from({ length: 8 }).map((_, i) => ({
      id: Date.now() + i,
      x: Math.random() * rect.width - rect.width / 2,
      y: -Math.random() * 100 - 50,
      hue: ["#C73E5A", "#E8A0A8", "#D4A24C", "#8B1E3F", "#FBF3E4"][i % 5],
      size: 16 + Math.random() * 20,
    }));
    setHearts((h) => [...h, ...newHearts]);
    setCount((c) => c + 1);
    setWord(sweetWords[Math.floor(Math.random() * sweetWords.length)]);

    setTimeout(() => {
      setHearts((h) => h.filter((heart) => !newHearts.find((nh) => nh.id === heart.id)));
    }, 2000);
  };

  return (
    <section className="relative py-32 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto mb-12"
      >
        <p className="font-hand italic text-rose-soft text-lg mb-3">فصلٌ رابع</p>
        <h2 className="font-display text-4xl md:text-6xl mb-6">
          <span className="shimmer-text">المسة قلبي</span>
        </h2>
        <div className="ornament mb-8" />
        <p className="text-cream/70 leading-loose font-light">
          اضغطي على القلب… كلَّ نبضةٍ منكِ، تُحرِّكُ نبضةً منّي.
        </p>
      </motion.div>

      <div className="relative inline-block">
        <motion.button
          onClick={burst}
          onTouchStart={burst}
          whileTap={{ scale: 0.85 }}
          whileHover={{ scale: 1.05 }}
          className="relative cursor-pointer focus:outline-none"
          aria-label="قلب"
        >
          <div className="heartbeat">
            <svg
              width="180"
              height="180"
              viewBox="0 0 24 24"
              fill="none"
              className="drop-shadow-[0_0_40px_rgba(199,62,90,0.6)]"
            >
              <defs>
                <radialGradient id="heartGrad" cx="30%" cy="30%">
                  <stop offset="0%" stopColor="#FBF3E4" />
                  <stop offset="40%" stopColor="#E8A0A8" />
                  <stop offset="100%" stopColor="#8B1E3F" />
                </radialGradient>
              </defs>
              <path
                d="M12 21s-7-4.5-9.5-9C0.5 7.5 3.5 3 7.5 3c2 0 3.5 1 4.5 2.5C13 4 14.5 3 16.5 3 20.5 3 23.5 7.5 21.5 12c-2.5 4.5-9.5 9-9.5 9z"
                fill="url(#heartGrad)"
                stroke="#D4A24C"
                strokeWidth="0.5"
              />
            </svg>
          </div>

          <AnimatePresence>
            {hearts.map((h) => (
              <motion.div
                key={h.id}
                initial={{ opacity: 1, x: 0, y: 0, scale: 0 }}
                animate={{
                  opacity: [1, 1, 0],
                  x: h.x,
                  y: h.y,
                  scale: [0, 1.2, 1],
                  rotate: Math.random() * 60 - 30,
                }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 pointer-events-none"
              >
                <svg width={h.size} height={h.size} viewBox="0 0 24 24" fill={h.hue}>
                  <path d="M12 21s-7-4.5-9.5-9C0.5 7.5 3.5 3 7.5 3c2 0 3.5 1 4.5 2.5C13 4 14.5 3 16.5 3 20.5 3 23.5 7.5 21.5 12c-2.5 4.5-9.5 9-9.5 9z" />
                </svg>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.button>

        <AnimatePresence mode="wait">
          {word && (
            <motion.div
              key={count}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: -20, scale: 1 }}
              exit={{ opacity: 0, y: -60 }}
              transition={{ duration: 0.6 }}
              className="absolute left-1/2 -translate-x-1/2 -bottom-12 font-hand text-2xl text-gold whitespace-nowrap"
            >
              {word}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.p
        animate={{ opacity: count > 0 ? 1 : 0.5 }}
        className="mt-20 text-cream/60 text-sm tracking-wider"
      >
        {count === 0 ? "ابدئي اللعبة…" : `${count.toLocaleString("ar-EG")} نبضة لكِ`}
      </motion.p>
    </section>
  );
}
