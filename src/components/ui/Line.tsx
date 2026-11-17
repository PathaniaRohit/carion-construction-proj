"use client";

import { motion } from "framer-motion";
import { ease } from "./Reveal";

type Props = {
  to: "left" | "right" | "up" | "down";
  className?: string;
  delay?: number;
};

const styles = {
  right: "h-px origin-left bg-linear-to-r",
  left: "h-px origin-right bg-linear-to-l",
  down: "w-px origin-top bg-linear-to-b",
  up: "w-px origin-bottom bg-linear-to-t",
};

// Fades out away from its origin
export default function Line({ to, className = "from-ink/10", delay = 0 }: Props) {
  const axis = to === "left" || to === "right" ? "scaleX" : "scaleY";

  return (
    <motion.span
      aria-hidden
      initial={{ [axis]: 0 }}
      whileInView={{ [axis]: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.6, delay, ease }}
      className={`absolute block to-transparent ${styles[to]} ${className}`}
    />
  );
}
