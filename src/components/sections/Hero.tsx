"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const badges = [
  { icon: "⊘", label: "Zero Added Sugar" },
  { icon: "☕", label: "Natural Caffeine" },
  { icon: "◈", label: "Low Calorie" },
  { icon: "♾", label: "Vegan Friendly" },
  { icon: "✦", label: "Gluten Free" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#040d1a]">
      {/* Dark navy gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#071428] via-[#040d1a] to-[#020810]" />
        {/* Subtle blue glow top center */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#0a3060]/20 blur-3xl" />
        {/* Lime glow behind can */}
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-[#b5e550]/8 blur-3xl" />
      </div>

      {/* Main hero content */}
      <div className="relative flex-1 max-w-7xl mx-auto w-full px-6 pt-28 pb-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Left — Text */}
        <div className="z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#b5e550]/10 border border-[#b5e550]/25 text-[#b5e550] text-xs font-mono tracking-widest uppercase px-4 py-2 rounded-full mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#b5e550] animate-pulse" />
            New
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display leading-none mb-3"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            <span className="block text-7xl md:text-8xl font-black text-white tracking-tight">ONE DRINK.</span>
            <span className="block text-7xl md:text-8xl font-black text-[#b5e550] tracking-tight" style={{ textShadow: "0 0 60px rgba(181,229,80,0.3)" }}>
              BETTER DAY.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white font-semibold text-lg mb-3"
          >
            Daily wellness and performance in perfect balance.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-[#8fa3bb] text-base leading-relaxed mb-8 max-w-md"
          >
            Hydration. Focus. Nutrition. Immunity. All in one clean, refreshing drink
            designed to help you start better and perform better — every day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <Link
              href="#waitlist"
              className="inline-flex items-center gap-2 bg-[#b5e550] text-[#040d1a] font-bold px-8 py-4 rounded-full hover:bg-[#a3d63a] transition-all duration-200 hover:shadow-xl hover:shadow-[#b5e550]/25 text-sm tracking-wide uppercase"
            >
              Join the Waitlist <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Right — Real can image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          {/* Glow behind can */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full bg-[#b5e550]/10 blur-3xl" />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <Image
              src="/can-main.jpg"
              alt="EC1 ONE Citrus Sunrise 500ml Can"
              width={400}
              height={500}
              className="object-contain drop-shadow-2xl"
              priority
              style={{ filter: "drop-shadow(0 30px 60px rgba(181,229,80,0.15))" }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom badge bar — matching mockup */}
      <div className="relative border-t border-white/8 bg-[#040d1a]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6">
            {badges.map((b) => (
              <div key={b.label} className="flex flex-col items-center gap-1.5">
                <span className="text-[#b5e550] text-lg">{b.icon}</span>
                <span className="text-[10px] font-mono tracking-widest text-[#8fa3bb] uppercase text-center">
                  {b.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
