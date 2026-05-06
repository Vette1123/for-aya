"use client";

import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="relative py-24 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-md mx-auto"
      >
        <div className="ornament mb-8" />
        <p className="font-hand italic text-cream/70 text-lg leading-loose mb-8">
          صُنعَ هذا الموقعُ بِيَدَيَّ، ولأجلِ قلبِكِ.
          <br />
          ولو كان بإمكاني صُنعُ النجوم، لصنعتُها لكِ كذلك.
        </p>
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block text-3xl"
          style={{ filter: "drop-shadow(0 0 12px rgba(199,62,90,0.7))" }}
        >
          ❤
        </motion.div>
        <p className="mt-6 text-xs tracking-[0.3em] text-gold/50">
          ـ لكِ، يا آية ـ
        </p>
      </motion.div>
    </footer>
  );
}
