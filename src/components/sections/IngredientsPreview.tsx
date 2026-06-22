"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ingredients = [
  { name: "Natural Caffeine (Green Tea)", amount: "80mg", category: "Focus" },
  { name: "L-Theanine", amount: "200mg", category: "Focus" },
  { name: "Choline", amount: "250mg", category: "Focus" },
  { name: "Lion's Mane Extract", amount: "500mg", category: "Focus" },
  { name: "Potassium", amount: "700mg", category: "Hydration" },
  { name: "Magnesium", amount: "150mg", category: "Hydration" },
  { name: "Sodium", amount: "250mg", category: "Hydration" },
  { name: "Calcium", amount: "250mg", category: "Hydration" },
  { name: "Vitamin C", amount: "100mg", category: "Wellness" },
  { name: "Vitamin D3", amount: "10µg", category: "Wellness" },
  { name: "B-Complex (B1–B12)", amount: "100% DV", category: "Energy" },
  { name: "Ashwagandha KSM-66®", amount: "300mg", category: "Recovery" },
];

const categoryColors: Record<string, string> = {
  Focus: "#b5e550",
  Hydration: "#38bdf8",
  Wellness: "#a78bfa",
  Energy: "#fbbf24",
  Recovery: "#34d399",
};

export default function IngredientsPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 bg-[#071428]/60 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#b5e550] font-mono text-xs tracking-widest uppercase mb-4">
              Transparency first
            </p>
            <h2
              className="font-display text-5xl md:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              What&apos;s{" "}
              <span className="text-[#b5e550]">Inside</span>
            </h2>
            <p className="text-[#8fa3bb] text-lg leading-relaxed mb-8">
              Every ingredient in EC1 ONE is there for a reason, at an effective dose.
              No proprietary blends, no hidden formulas — just science-backed nutrition
              you can trust.
            </p>
            <div className="grid grid-cols-2 gap-5 mb-10">
              {[
                { value: "30", unit: "kcal", label: "Per 500ml can" },
                { value: "0g", unit: "", label: "Added sugar" },
                { value: "15+", unit: "", label: "Active ingredients" },
                { value: "80mg", unit: "", label: "Natural caffeine" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/3 border border-white/8 rounded-xl p-5">
                  <div className="font-display text-3xl font-bold text-[#b5e550]" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                    {stat.value}
                    <span className="text-lg ml-1">{stat.unit}</span>
                  </div>
                  <div className="text-[#8fa3bb] text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
            <Link
              href="/ingredients"
              className="inline-flex items-center gap-2 text-[#b5e550] text-sm font-medium hover:gap-3 transition-all"
            >
              View full ingredient breakdown <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Right — ingredient list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-[#040d1a]/80 border border-white/8 rounded-2xl overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-white/8 flex items-center justify-between">
              <span className="font-mono text-xs tracking-widest text-[#8fa3bb] uppercase">
                Ingredients Panel
              </span>
              <span className="font-mono text-xs text-[#8fa3bb]">Per 500ml</span>
            </div>
            <div className="divide-y divide-white/5">
              {ingredients.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.04 }}
                  className="flex items-center justify-between px-6 py-3.5 hover:bg-white/3 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: categoryColors[item.category] }}
                    />
                    <span className="text-sm text-[#cdd8e8]">{item.name}</span>
                  </div>
                  <span className="font-mono text-sm text-[#b5e550] font-medium">
                    {item.amount}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
