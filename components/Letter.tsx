"use client";

import { motion } from "motion/react";

const lines = [
  "آيتي،",
  "لو كانت الكلماتُ تكفي، لكتبتُ لكِ بحرًا.",
  "لكنّي اكتشفتُ أنّ الحبَّ لا يُقالُ، بل يُعاش،",
  "في تفاصيلَ صغيرة: في فنجانِ قهوةٍ نتقاسمُه،",
  "في صمتٍ مريحٍ بيننا، في نظرةٍ تختصرُ ألفَ جملة.",
  "أنتِ بيتي حين يضيقُ العالم،",
  "وأنتِ سفرتي حين أحتاجُ أن أحلم.",
  "أعدُكِ أن أختاركِ كلَّ يوم،",
  "حتّى حين يكون الاختيارُ صعبًا،",
  "وحتّى حين يكون سهلاً جدًّا.",
  "ـ لكِ، دائمًا.",
];

export default function Letter() {
  return (
    <section className="relative py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <div className="text-center mb-12">
          <p className="font-hand italic text-rose-soft text-lg mb-3">فصلٌ ثانٍ</p>
          <h2 className="font-display text-4xl md:text-6xl mb-6">
            <span className="shimmer-text">رسالة</span>
          </h2>
          <div className="ornament" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative p-10 md:p-14 rounded-sm bg-cream/[0.04] border border-gold/30 backdrop-blur-sm"
          style={{
            boxShadow: "0 30px 80px -20px rgba(199, 62, 90, 0.25), inset 0 1px 0 rgba(212, 162, 76, 0.15)",
          }}
        >
          <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-gold/60" />
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-gold/60" />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-gold/60" />
          <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-gold/60" />

          <div className="font-hand text-xl md:text-2xl leading-[2.4] text-cream/90 space-y-1">
            {lines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 8, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className={i === 0 ? "text-gold text-2xl md:text-3xl mb-4" : i === lines.length - 1 ? "text-rose-soft mt-6 italic" : ""}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
