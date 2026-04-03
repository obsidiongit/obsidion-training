"use client";

import { motion } from "framer-motion";

const LINE_1 = "Welcome to";
const LINE_2 = "Obsidion";

const charVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.03,
      duration: 0.4,
      ease: [0.34, 1.56, 0.64, 1],
    },
  }),
};

function AnimatedText({
  text,
  className,
  startIndex = 0,
}: {
  text: string;
  className?: string;
  startIndex?: number;
}) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={`${startIndex + i}-${char}`}
          custom={startIndex + i}
          variants={charVariants}
          initial="hidden"
          animate="visible"
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : undefined }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export default function HeroSection() {
  return (
    <div className="relative text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        className="mb-6"
      >
        <img
          src="/logos/logo.png"
          alt="Obsidion"
          className="mx-auto h-32 sm:h-40 w-auto object-contain"
        />
      </motion.div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-[1.1]">
        <AnimatedText text={LINE_1} className="block text-foreground-muted" />
        <AnimatedText
          text={LINE_2}
          className="block mt-1"
          startIndex={LINE_1.length}
        />
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.5 }}
      >
        <p className="mt-5 text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed">
          Your training hub. Pick your role below to get started.
        </p>
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.3, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        className="mt-8 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent"
      />
    </div>
  );
}
