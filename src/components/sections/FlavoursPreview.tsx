"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const flavours = [
  {
    name: "Citrus Sunrise",
    tagline: "Lemon, Lime, Orange",
    color: "#b5e550",
    image: "/can-citrus.jpg",
    emoji: "🍋",
  },
  {
    name: "Tropical Mango",
    tagline: "Mango, Passionfruit",
    color: "#fb923c",
    image: "/can-mango.jpg",
    emoji: "🥭",
  },
  {
    name: "Berry Fusion",
    tagline: "Mixed Berries",
    color: "#c084fc",
    image: "/can-berry.jpg",
    emoji: "🫐",
  },
  {
    name: "Apple Kiwi",
    tagline: "Crisp Apple, Kiwi",
    color: "#4ade80",
    image: "/can-kiwi.jpg",
    emoji: "🍏",
  },
];

export default function FlavoursPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="font-display text-5xl md:text-6xl font-bold text-white"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Refreshing{" "}
            <span className="text-[#b5e550]">Flavours</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {flavours.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative mb-4 w-full"
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity"
                  style={{ background: f.color }}
                />
                <Image
                  src={f.image}
                  alt={`EC1 ONE ${f.name}`}
                  width={200}
                  height={260}
                  className="mx-auto object-contain"
                  style={{
                    filter: `drop-shadow(0 10px 30px ${f.color}40)`,
                  }}
                />
              </motion.div>
              <h3
                className="font-display text-xl font-bold mb-1"
                style={{ fontFamily: "Cormorant Garamond, serif", color: f.color }}
              >
                {f.name}
              </h3>
              <p className="text-[#8fa3bb] text-xs font-mono">{f.tagline}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/flavours"
            className="inline-flex items-center gap-2 text-[#b5e550] text-sm font-medium hover:gap-3 transition-all"
          >
            Explore all flavours <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
