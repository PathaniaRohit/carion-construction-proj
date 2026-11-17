"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ease } from "./Reveal";

type Props = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  imageClassName?: string;
  children?: React.ReactNode;
};

export default function RevealImage({ src, alt, sizes, className = "", imageClassName = "", children }: Props) {
  return (
    <motion.span
      initial={{ clipPath: "inset(12% 8% 12% 8%)", opacity: 0.4 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.4, ease }}
      className={`relative block overflow-hidden ${className}`}
    >
      <motion.span
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease }}
        className="absolute inset-0 block"
      >
        <Image src={src} alt={alt} fill sizes={sizes} className={`object-cover ${imageClassName}`} />
      </motion.span>
      {children}
    </motion.span>
  );
}
