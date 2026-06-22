"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const benefits = [
  {
    icon: "🧠",
    title: "Focus",
    color: "#b5e550",
    description:
      "Natural caffeine from green tea, L-Theanine and Choline work synergistically to support mental clarity and sustained concentration — without the jitters.",
  },
  {
    icon: "💧",
    title: "Hydration",
    color: "#38bdf8",
    description:
      "Essential electrolytes including Potassium, Magnesium, Sodium and Calcium help keep you hydrated and performing at your best throughout the day.",
  },
  {
    icon: "🛡",
    title: "Wellness",
    color: "#a78bfa",
    description:
      "Vitamins C and D3, Zinc and Selenium provide robust immune system support and contribute to daily wellbeing.",
  },
  {
    icon: "⚡",
    title: "Energy",
    color: "#fbbf24",
    description:
      "The complete B-Complex vitamin suite (B1 through B12) supports your body's natural energy production processes and fights fatigue.",
  },
  {
    icon: "🌿",
    title: "Recovery",
    color: "#34d399",
    description:
      "Ashwagandha KSM-66®, Magnesium and Ginger Extract work together to support recovery from physical exertion and help manage stress.",
  },
];

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-[#b5e550] font-mono text-xs tracking-widest uppercase mb-4">
            Why EC1
          </p>
          <h2
            className="font-display text-5xl md:text-6xl font-bold text-white"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Complete Daily{" "}
            <span className="text-[#b5e550]">Support</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="gradient-border group relative bg-white/3 hover:bg-white/6 rounded-2xl p-7 transition-all duration-300 cursor-default"
              style={{
                background: `linear-gradient(135deg, ${b.color}08, transparent)`,
              }}
            >
              <div
                className="text-3xl mb-5 w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: `${b.color}15` }}
              >
                {b.icon}
              </div>
              <h3
                className="font-display text-xl font-semibold text-white mb-3"
                style={{ fontFamily: "Cormorant Garamond, serif", color: b.color }}
              >
                {b.title}
              </h3>
              <p className="text-[#8fa3bb] text-sm leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
