"use client";

import { motion } from "motion/react";

const reasons = [
  {
    n: "٠١",
    title: "ضحكتُكِ",
    text: "حين تضحكين، يتوقّفُ العالمُ قليلاً ليُنصت. فيها شيءٌ من الموسيقى التي لا تُكتب.",
  },
  {
    n: "٠٢",
    title: "عيناكِ",
    text: "فيهما خريطةٌ كاملةٌ لمدنٍ لم أزرها بعد، وأودّ أن أضيعَ في كلٍّ منها.",
  },
  {
    n: "٠٣",
    title: "صوتُكِ",
    text: "أوّلُ شيءٍ أبحثُ عنه في الصباح، وآخرُ ما أتمنّى سماعَه قبل أن أنام.",
  },
  {
    n: "٠٤",
    title: "قلبُكِ",
    text: "كبيرٌ بما يكفي ليحملَ العالم، لكنّكِ اخترتِ أن تتركي فيه مكانًا صغيرًا لي.",
  },
  {
    n: "٠٥",
    title: "حضوركِ",
    text: "حتّى حين تكونين بعيدة، أشعرُ بكِ في كلِّ نسمةٍ تمرُّ من النافذة.",
  },
  {
    n: "٠٦",
    title: "أنتِ",
    text: "ببساطة. لا أحتاجُ سببًا سوى أنّكِ أنتِ، ولأنّكِ كذلك، فالأسبابُ بلا نهاية.",
  },
];

export default function Reasons() {
  return (
    <section className="relative py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center mb-20"
      >
        <p className="font-hand italic text-rose-soft text-lg mb-3">فصلٌ أوّل</p>
        <h2 className="font-display text-4xl md:text-6xl mb-6">
          <span className="shimmer-text">لماذا أحبّكِ</span>
        </h2>
        <div className="ornament" />
      </motion.div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r, i) => (
          <motion.article
            key={r.n}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group relative p-8 rounded-sm border border-gold/20 bg-ink/40 backdrop-blur-sm overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rose-deep/0 via-transparent to-rose-warm/0 group-hover:from-rose-deep/20 group-hover:to-rose-warm/10 transition-all duration-500" />
            <div className="absolute top-4 left-4 text-gold/30 group-hover:text-gold/60 transition-colors text-xs tracking-widest font-display">
              {r.n}
            </div>
            <div className="relative z-10 mt-6">
              <h3 className="font-display text-3xl mb-4 text-cream group-hover:text-gold transition-colors duration-500">
                {r.title}
              </h3>
              <p className="text-cream/70 leading-loose text-[15px] font-light">{r.text}</p>
            </div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-l border-t border-gold/20 group-hover:border-gold/60 transition-all duration-500" />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
