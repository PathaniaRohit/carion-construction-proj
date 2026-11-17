"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Clock from "@/components/ui/Clock";
import Cross from "@/components/ui/Cross";
import { ease } from "@/components/ui/Reveal";
import { heroSlides as slides } from "@/data/HeroSectionData";

const DURATION = 6;

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.1, delay, ease },
});

const swap = {
  initial: { y: "100%" },
  animate: { y: "0%" },
  exit: { y: "-100%" },
  transition: { duration: 0.6, ease },
};

const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.4 },
};

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  useEffect(() => {
    const id = setTimeout(() => setIndex((i) => (i + 1) % slides.length), DURATION * 1000);
    return () => clearTimeout(id);
  }, [index]);

  const slide = slides[index];
  const caption = [slide.name, `– ${slide.size}`, `/${slide.city}`, `(${slide.year})`];

  return (
    <section
      id="top"
      ref={ref}
      aria-roledescription="carousel"
      aria-label="Featured projects"
      className="relative h-svh min-h-[640px] overflow-hidden bg-ink text-paper/80 lg:h-[800px]"
    >
      <motion.div style={{ y: imageY }} className="absolute inset-0 isolate">
        <AnimatePresence initial={false}>
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.12, zIndex: 1 }}
            animate={{ opacity: 1, scale: 1, zIndex: 1 }}
            exit={{ opacity: 0, zIndex: 0, transition: { duration: 0.6, delay: 0.8 } }}
            transition={{ duration: 1.6, ease }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              quality={85}
              className={`object-cover ${slide.position}`}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <div className="absolute inset-0 bg-black/40" />

      <motion.ul
        style={{ y: contentY }}
        className="absolute inset-x-5 top-1/2 flex -translate-y-1/2 flex-wrap justify-between gap-x-6 gap-y-2 text-body uppercase lg:inset-x-[30px] lg:flex-nowrap"
      >
        <motion.li {...rise(0.5)} className="italic">
          Featured
        </motion.li>
        <motion.li aria-hidden {...rise(0.55)} className="hidden items-center lg:flex">
          <Cross />
        </motion.li>
        {caption.map((text, i) => (
          <motion.li key={i} {...rise(0.58 + i * 0.08)} className={`overflow-hidden ${i ? "italic" : ""}`}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span key={text} {...swap} className="block">
                {text}
              </motion.span>
            </AnimatePresence>
          </motion.li>
        ))}
      </motion.ul>

      <div className="absolute right-[15px] bottom-[30px] left-[15px] sm:left-auto sm:w-[390px] lg:right-[25px]">
        <motion.h1 {...rise(0.9)} className="px-[5px] text-label font-semibold text-paper uppercase">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span key={slide.title} {...fade} className="block">
              {slide.title}
            </motion.span>
          </AnimatePresence>
        </motion.h1>
        <motion.p {...rise(1)} className="mt-[5px] px-[5px] text-lead text-paper/80">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span key={slide.text} {...fade} className="block">
              {slide.text}
            </motion.span>
          </AnimatePresence>
        </motion.p>

        <motion.div {...rise(1.1)} className="mt-[25px] flex items-center text-paper">
          <Cross className="opacity-50" />
          {slides.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show ${item.name}`}
              aria-current={i === index}
              className="group mx-[5px] flex h-4 flex-1 items-center"
            >
              <span className="relative h-px w-full bg-current/30 transition-colors group-hover:bg-current/60">
                <motion.span
                  initial={i === index ? { scaleX: 0 } : false}
                  animate={{ scaleX: i <= index ? 1 : 0 }}
                  transition={{ duration: i === index ? DURATION : 0.4, ease: "linear" }}
                  key={i === index ? `active-${index}` : "idle"}
                  className="absolute inset-0 origin-left bg-current"
                />
              </span>
            </button>
          ))}
          <Cross className="opacity-50" />
        </motion.div>

        <motion.a
          href="#about"
          {...rise(1.3)}
          className="mt-[22px] block pr-[5px] text-right text-[10px] leading-[13px] uppercase transition-colors hover:text-paper"
        >
          (Scroll down)
        </motion.a>
      </div>

      <Clock className="absolute bottom-2.5 left-2.5 bg-paper/10" />
    </section>
  );
}
