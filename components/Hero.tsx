"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.div style={{ y, opacity }} className="relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="ornament mb-8 text-sm tracking-[0.4em]"
        >
          ٢٠٢٦
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.3 }}
          className="font-hand italic text-rose-soft text-xl md:text-2xl mb-4"
        >
          إلى من سرقتْ قلبي
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-7xl md:text-9xl font-bold leading-none mb-2"
        >
          <span className="shimmer-text">آية</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-hand italic text-cream/70 text-lg md:text-xl mb-12"
        >
          ـ يا قمر الليالي ـ
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="space-y-2 text-cream/80"
        >
          <p className="text-base md:text-lg leading-relaxed font-light">
            في كلِّ مرّةٍ أكتبُ فيها اسمكِ
          </p>
          <p className="text-base md:text-lg leading-relaxed font-light">
            تتعلّمُ يداي معنى الجمالِ من جديد.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-[0.3em] text-gold/70">انزلي معي ↓</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-gold to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
