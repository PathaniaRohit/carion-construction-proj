"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { AwardBadge } from "@/components/ui/Brand";
import Button from "@/components/ui/Button";
import Cross from "@/components/ui/Cross";
import { ease } from "@/components/ui/Reveal";
import type { Project } from "@/data/projects";

type Props = {
  project: Project | null;
  onClose: () => void;
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.25 + i * 0.07, ease } }),
};

export default function QuickView({ project, onClose }: Props) {
  const lenis = useLenis();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    lenis?.stop();
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      lenis?.start();
      window.removeEventListener("keydown", onKey);
    };
  }, [project, lenis, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div key="quick-view" className="fixed inset-0 z-50" initial="hidden" animate="show" exit="hidden">
          <motion.button
            type="button"
            aria-label="Close quick view"
            tabIndex={-1}
            onClick={onClose}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 cursor-default bg-black/30 backdrop-blur-[10px]"
          />

          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="quick-view-title"
            variants={{ hidden: { x: "100%" }, show: { x: "0%" } }}
            transition={{ duration: 0.9, ease }}
            className="absolute inset-y-0 right-0 w-full bg-smoke/50 text-paper backdrop-blur-[64px] md:w-[710px] md:max-w-[calc(100%-70px)]"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close quick view"
              className="group absolute top-[5px] right-[5px] z-10 flex size-[60px] items-center justify-center bg-ink text-paper md:right-auto md:-left-[65px]"
            >
              <Cross className="rotate-45 transition-transform duration-500 ease-out-expo group-hover:rotate-[135deg]" />
            </button>

            <div data-lenis-prevent className="h-full overflow-y-auto p-5 pt-6">
              <motion.header custom={0} variants={item} className="flex flex-wrap items-start justify-between gap-5 pr-16 md:pr-0">
                <div>
                  <h2 id="quick-view-title" className="text-title">
                    {project.name}
                  </h2>
                  <p className="mt-[5px] text-label font-semibold text-paper/80 uppercase">{project.meta}</p>
                </div>
                <Button href={`/projects/${project.slug}`} className="mt-1.5">
                  View {project.shortName ?? project.name}
                </Button>
              </motion.header>

              <motion.p custom={1} variants={item} className="mt-[45px] text-body text-paper/90">
                {project.description}
              </motion.p>

              <motion.figure custom={2} variants={item} className="relative mt-[26px] aspect-[670/300] overflow-hidden">
                <Image src={project.detail} alt={`${project.name} at street level`} fill sizes="(min-width: 768px) 670px, 100vw" className="object-cover" />
                {project.award && (
                  <figcaption className="absolute right-2.5 bottom-[11px]">
                    <AwardBadge className="w-20" />
                    <span className="sr-only">{project.award}</span>
                  </figcaption>
                )}
              </motion.figure>

              <motion.dl custom={3} variants={item} className="mt-[72px] space-y-3">
                {project.specs.map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-6 border-b border-paper/20 pb-2.5 last:border-0 last:pb-0">
                    <dt className="text-label font-semibold whitespace-nowrap text-paper/80 uppercase">{label}</dt>
                    <dd className="text-right text-body text-paper/80">{value}</dd>
                  </div>
                ))}
              </motion.dl>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
