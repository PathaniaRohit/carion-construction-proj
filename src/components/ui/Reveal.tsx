"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type Tag = "div" | "p" | "h2" | "h3" | "li" | "span" | "ul" | "figure";

type Props = HTMLMotionProps<"div"> & {
  as?: Tag;
  delay?: number;
  y?: number;
};

export const ease = [0.16, 1, 0.3, 1] as const;

export default function Reveal({ as = "div", delay = 0, y = 28, ...props }: Props) {
  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 1, delay, ease }}
      {...props}
    />
  );
}
