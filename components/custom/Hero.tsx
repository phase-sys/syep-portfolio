"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("creative-work");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center relative bg-background px-6">
      <motion.div
        className="flex flex-col items-center justify-center text-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.span
          className="font-sans text-xs md:text-sm text-primary font-bold tracking-[0.3em] uppercase mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Portfolio
        </motion.span>

        <motion.h1
          className="font-serif text-7xl sm:text-8xl md:text-9xl tracking-tighter text-foreground leading-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        >
          Syepselin
        </motion.h1>

        <motion.div
          className="w-12 h-1 bg-primary mt-8 mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
        />

        <motion.p
          className="font-sans text-sm md:text-base text-muted-foreground tracking-widest uppercase max-w-md leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          Art Direction <span className="text-primary/40 mx-2">•</span> Visual
          Design <span className="text-primary/40 mx-2">•</span> Curation
        </motion.p>
      </motion.div>

      <motion.div
        onClick={scrollToNextSection}
        className="absolute bottom-12 cursor-pointer flex flex-col items-center gap-2 group"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <motion.span
          className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground group-hover:text-primary transition-colors"
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          Scroll
        </motion.span>
        <motion.svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          className="text-muted-foreground group-hover:text-primary transition-colors"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <path
            d="M9 3v12M5 11l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}
