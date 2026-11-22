"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

type Props = {
  children: string;
  id?: string;
  className?: string;
};

// Words fill from faint to full ink as the block scrolls through the viewport.
export default function ScrollRevealText({ children, id, className }: Props) {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = children.split(" ");

  return (
    <h2 ref={ref} id={id} className={className}>
      <span className="sr-only">{children}</span>
      <span aria-hidden>
        {words.map((word, i) => (
          <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
            {word}
          </Word>
        ))}
      </span>
    </h2>
  );
}

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.25, 1]);
  return <motion.span style={{ opacity }}>{children} </motion.span>;
}
