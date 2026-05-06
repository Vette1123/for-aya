"use client";

import { motion } from "motion/react";

interface Moment {
  date: string;
  day: string;
  month: string;
  year: string;
  title: string;
  text: string;
  isFuture?: boolean;
}

const moments: Moment[] = [
  {
    date: "23/04/2026",
    day: "٢٣",
    month: "أبريل",
    year: "٢٠٢٦",
    title: "اليومُ الذي بدأ كلُّ شيء",
    text: "في هذا اليوم تغيّرَ شكلُ التقويم عندي. صار الزمنُ يُقاسُ بكِ، لا بالساعات.",
  },
  {
    date: "02/05/2026",
    day: "٠٢",
    month: "مايو",
    year: "٢٠٢٦",
    title: "حين تأكّدتُ تمامًا",
    text: "لم يعد سؤالًا، ولا احتمالًا. صرتِ يقينًا أحملُه في صدري كلّما تذكّرتُ ضحكتَكِ.",
  },
  {
    date: "10/05/2026",
    day: "١٠",
    month: "مايو",
    year: "٢٠٢٦",
    title: "ذاكرةٌ لا تشيخ",
    text: "بعضُ الأيّامِ تمرّ، وبعضُها يبقى. هذا اليومُ منَ الذي يبقى، يسكنُ معي حيث ذهبت.",
  },
  {
    date: "?",
    day: "؟",
    month: "قريبًا",
    year: "بإذن الله",
    title: "ما زالَ في القلبِ كلام",
    text: "هناك يومٌ آخرُ ينتظرنا، لم يُكتب بعد. سنكتبُه معًا، أنتِ وأنا، حين يحينُ الوقت.",
    isFuture: true,
  },
];

export default function Timeline() {
  return (
    <section className="relative py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center mb-20"
      >
        <p className="font-hand italic text-rose-soft text-lg mb-3">فصلٌ ثالث</p>
        <h2 className="font-display text-4xl md:text-6xl mb-6">
          <span className="shimmer-text">تواريخُ القلب</span>
        </h2>
        <div className="ornament mb-6" />
        <p className="text-cream/70 leading-loose font-light">
          أيّامٌ صغيرةٌ على التقويم، كبيرةٌ في صدري.
        </p>
      </motion.div>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute right-1/2 translate-x-1/2 md:right-auto md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />

        <div className="space-y-16 md:space-y-24">
          {moments.map((m, i) => {
            const onRight = i % 2 === 0;
            return (
              <motion.div
                key={m.date}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  onRight ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Card side */}
                <div className={`w-full md:w-[calc(50%-2rem)] ${onRight ? "md:text-left" : "md:text-right"}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className={`relative p-7 rounded-sm border bg-ink/40 backdrop-blur-sm overflow-hidden ${
                      m.isFuture ? "border-gold/40" : "border-gold/20"
                    }`}
                    style={{
                      boxShadow: m.isFuture
                        ? "0 0 50px -10px rgba(212, 162, 76, 0.3)"
                        : "0 20px 50px -20px rgba(199, 62, 90, 0.2)",
                    }}
                  >
                    {m.isFuture && (
                      <div className="absolute top-3 left-3 text-[10px] tracking-[0.3em] text-gold/70 font-display">
                        قادم
                      </div>
                    )}
                    <h3 className="font-display text-2xl md:text-3xl mb-3 text-cream">
                      {m.title}
                    </h3>
                    <p className="text-cream/70 leading-loose text-[15px] font-light">
                      {m.text}
                    </p>
                    <div className="mt-4 pt-4 border-t border-gold/10 text-xs tracking-[0.2em] text-gold/60 font-display">
                      {m.date}
                    </div>
                  </motion.div>
                </div>

                {/* Center node with date */}
                <div className="relative flex-shrink-0 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                    className={`relative w-28 h-28 rounded-full flex flex-col items-center justify-center text-center backdrop-blur-md ${
                      m.isFuture
                        ? "bg-gradient-to-br from-gold/30 to-rose-warm/30 border-2 border-gold"
                        : "bg-gradient-to-br from-rose-deep to-rose-warm border border-gold/50"
                    }`}
                    style={{
                      boxShadow: m.isFuture
                        ? "0 0 40px rgba(212, 162, 76, 0.6), inset 0 0 20px rgba(255,255,255,0.1)"
                        : "0 0 30px rgba(199, 62, 90, 0.5), inset 0 0 15px rgba(0,0,0,0.2)",
                    }}
                  >
                    {m.isFuture ? (
                      <motion.span
                        animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="font-display text-5xl text-gold"
                      >
                        ؟
                      </motion.span>
                    ) : (
                      <>
                        <span className="font-display text-3xl text-cream leading-none">
                          {m.day}
                        </span>
                        <span className="text-[10px] tracking-[0.2em] text-cream/80 mt-1">
                          {m.month}
                        </span>
                        <span className="text-[9px] text-gold/80 mt-0.5">
                          {m.year}
                        </span>
                      </>
                    )}
                  </motion.div>

                  {/* Pulse ring on future */}
                  {m.isFuture && (
                    <motion.div
                      animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                      className="absolute inset-0 rounded-full border-2 border-gold pointer-events-none"
                    />
                  )}
                </div>

                {/* Spacer for alignment on desktop */}
                <div className="hidden md:block w-[calc(50%-2rem)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
