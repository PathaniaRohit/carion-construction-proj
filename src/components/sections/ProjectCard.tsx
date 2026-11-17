"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import CropMarks from "@/components/ui/CropMarks";
import Reveal from "@/components/ui/Reveal";
import RevealImage from "@/components/ui/RevealImage";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
  className?: string;
  aspect: string;
  sizes: string;
  onOpen: () => void;
};

export default function ProjectCard({ project, className = "", aspect, sizes, onOpen }: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const cursorX = useSpring(x, { stiffness: 300, damping: 30, mass: 0.6 });
  const cursorY = useSpring(y, { stiffness: 300, damping: 30, mass: 0.6 });

  const track = (e: React.PointerEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - 75);
    y.set(e.clientY - rect.top - 75);
  };

  return (
    <article className={className}>
      <button
        type="button"
        onClick={onOpen}
        onPointerEnter={(e) => {
          track(e);
          cursorX.jump(x.get());
          cursorY.jump(y.get());
        }}
        onPointerMove={track}
        aria-label={`Quick view: ${project.name}`}
        className={`group relative block w-full text-left md:cursor-none ${aspect}`}
      >
        <CropMarks />
        <RevealImage src={project.image} alt="" sizes={sizes} className="absolute! inset-0" imageClassName="transition-transform duration-[1.2s] ease-out-expo group-hover:scale-105">
          <span className="grain absolute! inset-0 bg-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </RevealImage>

        <motion.span
          aria-hidden
          style={{ x: cursorX, y: cursorY }}
          className="pointer-events-none absolute top-0 left-0 z-10 hidden size-[150px] scale-0 items-center justify-center rounded-full bg-paper text-label font-semibold text-ink uppercase opacity-0 transition-[scale,opacity] duration-500 ease-out-expo group-hover:scale-100 group-hover:opacity-100 md:flex"
        >
          (Quick view)
        </motion.span>
      </button>

      <Reveal className="mt-[19px]" y={14}>
        <p className="flex justify-between gap-4 pr-[54px] text-label font-semibold uppercase">
          <span className="text-stone">{project.category}</span>
          <span className="italic">{project.city}</span>
        </p>
        <h3 className="mt-[5px] flex justify-between gap-4 text-lead">
          {project.name}
          <span className="italic">({project.year})</span>
        </h3>
      </Reveal>
    </article>
  );
}
