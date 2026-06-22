"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import WaitlistForm from "@/components/ui/WaitlistForm";

export default function WaitlistSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="waitlist" className="py-28 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#071428] to-[#040d1a]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#b5e550]/5 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#8fa3bb 1px, transparent 1px), linear-gradient(90deg, #8fa3bb 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#b5e550]/10 border border-[#b5e550]/20 text-[#b5e550] text-xs font-mono tracking-widest uppercase px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b5e550] animate-pulse" />
            Early Access
          </div>

          <h2
            className="font-display text-5xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Be the First to
            <br />
            Experience{" "}
            <span className="text-[#b5e550]">EC1 ONE</span>
          </h2>

          <p className="text-[#8fa3bb] text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            Join the waitlist for early access, exclusive launch offers, and first
            updates on when EC1 ONE lands.
          </p>

          <WaitlistForm />

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-8 mt-14">
            {[
              { icon: "🌱", label: "Clean Ingredients", sub: "No artificial colours, flavours or preservatives" },
              { icon: "🔬", label: "Science Backed", sub: "Carefully formulated with effective doses" },
              { icon: "♻️", label: "Sustainable", sub: "100% recyclable can and eco packaging" },
              { icon: "💚", label: "Made for You", sub: "For your mind, body and performance" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 max-w-[140px]">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-white text-xs font-semibold">{item.label}</span>
                <span className="text-[#8fa3bb] text-[11px] text-center leading-tight">{item.sub}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
