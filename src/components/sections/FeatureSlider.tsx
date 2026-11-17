"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Button from "@/components/ui/Button";
import CropMarks from "@/components/ui/CropMarks";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal, { ease } from "@/components/ui/Reveal";

const features = [
  {
    title: "Safety Culture",
    text: "Safety is our highest priority. Carion takes a proactive approach to protecting our people and continually improving jobsite safety",
    image: "/images/safety.jpg",
    alt: "Carion formwork carpenter in full safety gear on deck",
    wide: true,
  },
  {
    title: "Experience & Expertise",
    text: "We collaborate with developers and construction teams early in the planning phase to improve logistics, sequencing and overall project success.",
    image: "/images/experience.jpg",
    alt: "Formwork crew coordinating on an elevated deck",
    wide: false,
  },
  {
    title: "Capability & Commitment",
    text: "Our team is equipped to deliver exceptional results on complex structures, backed by a level of commitment that does not waver.",
    image: "/images/capability.jpg",
    alt: "Complex concrete structure under construction",
    wide: true,
  },
  {
    title: "Reputation",
    text: "Developers turn to Carion for large-scale projects because our team has earned a reputation for trust, reliability and accountability",
    image: "/images/reputation.jpg",
    alt: "Completed high-rise tower built with Carion formwork",
    wide: false,
  },
];

const slide = {
  initial: { y: "100%", opacity: 0 },
  animate: { y: "0%", opacity: 1 },
  exit: { y: "-100%", opacity: 0 },
  transition: { duration: 0.8, ease },
};

const rule = "absolute inset-x-0 h-px bg-linear-to-r from-transparent via-ink/10 to-transparent";

export default function FeatureSlider() {
  const ref = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    setIndex(Math.min(features.length - 1, Math.floor(p * features.length)));
  });

  const feature = features[index];
  const number = `(0${index + 1})`;

  return (
    <section
      id="why-carion"
      ref={ref}
      aria-labelledby="why-title"
      className="relative bg-paper lg:h-[calc(800px+240vh)]"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-20 lg:sticky lg:top-[min(0px,calc(100svh-800px))] lg:flex lg:h-[800px] lg:flex-col lg:py-0 lg:pt-[100px] lg:px-[30px]">
        <div className="grid gap-6 lg:grid-cols-[900px_380px] lg:gap-x-0">
          <div>
            <Eyebrow>Why Carion</Eyebrow>
            <Reveal as="h2" id="why-title" className="mt-[22px] text-heading text-ink/80">
              Commitment at every level.
            </Reveal>
          </div>
          <Reveal as="p" delay={0.1} className="text-body text-ink/80 lg:mt-10">
            From mid-rise towers with typical floors to the most complex architectural structures in the market, our
            clients can count on our commitment at every stage.
          </Reveal>
        </div>

        <div className="relative -mx-5 mt-[100px] hidden h-[270px] items-center justify-center lg:flex lg:-mx-[30px]">
          <span className={`${rule} top-[5px]`} />
          <span className={`${rule} bottom-[5px]`} />

          <p className="absolute left-[18.4%] h-[30px] w-40 -translate-x-1/2 overflow-hidden text-center text-title text-ink/80 italic">
            <AnimatePresence initial={false}>
              <motion.span key={number} {...slide} className="absolute inset-0">
                {number}
              </motion.span>
            </AnimatePresence>
          </p>

          <motion.figure
            animate={{ width: feature.wide ? 400 : 240 }}
            transition={{ duration: 0.9, ease }}
            className="relative h-full shrink-0"
          >
            <span className="absolute inset-2.5">
              <CropMarks className="text-ink" />
              <span className="absolute inset-0 overflow-hidden">
                <AnimatePresence initial={false}>
                  <motion.span
                    key={feature.image}
                    initial={{ clipPath: "inset(100% 0 0 0)" }}
                    animate={{ clipPath: "inset(0% 0 0 0)" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease }}
                    className="absolute inset-0"
                  >
                    <Image src={feature.image} alt={feature.alt} fill sizes="380px" className="object-cover" />
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
          </motion.figure>

          <h3 className="absolute left-[81.6%] h-[30px] w-[360px] -translate-x-1/2 overflow-hidden text-center text-title text-ink/80">
            <AnimatePresence initial={false}>
              <motion.span key={feature.title} {...slide} className="absolute inset-0">
                {feature.title}
              </motion.span>
            </AnimatePresence>
          </h3>
        </div>

        <Reveal className="mt-5 hidden justify-center lg:flex">
          <Button href="#about">Learn More About Carion</Button>
        </Reveal>

        <div className="relative mt-10 hidden h-[90px] max-w-[400px] lg:block">
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={feature.text}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease }}
              className="text-lead text-ink/80"
            >
              {feature.text}
            </motion.p>
          </AnimatePresence>
        </div>

        <ol className="mt-14 space-y-14 lg:hidden">
          {features.map((item, i) => (
            <Reveal as="li" key={item.title}>
              <p className="flex justify-between text-title text-ink/80">
                <span className="italic">(0{i + 1})</span>
                {item.title}
              </p>
              <span className="relative mt-5 block aspect-[4/3]">
                <CropMarks />
                <Image src={item.image} alt={item.alt} fill sizes="100vw" className="object-cover" />
              </span>
              <p className="mt-5 text-lead text-ink/80">{item.text}</p>
            </Reveal>
          ))}
        </ol>
        <div className="mt-14 flex justify-center lg:hidden">
          <Button href="#about">Learn More About Carion</Button>
        </div>
      </div>
    </section>
  );
}
