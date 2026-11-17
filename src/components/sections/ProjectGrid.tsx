"use client";

import { useCallback, useState } from "react";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import type { Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import QuickView from "./QuickView";

// Desktop positions, % of a 1390×2570 canvas
const layout = [
  { place: "lg:left-[0.72%] lg:top-0 lg:w-[42.45%]", aspect: "aspect-[590/790]" },
  { place: "lg:left-[58.27%] lg:top-[5.06%] lg:w-[41.01%]", aspect: "aspect-[570/430]" },
  { place: "md:col-span-2 lg:left-[29.5%] lg:top-[37.35%] lg:w-[56.83%]", aspect: "aspect-[790/530]" },
  { place: "lg:left-[58.27%] lg:top-[64.59%] lg:w-[41.01%]", aspect: "aspect-[570/700]" },
  { place: "lg:left-[0.72%] lg:top-[74.32%] lg:w-[42.45%]", aspect: "aspect-square" },
];

type Props = {
  projects: Project[];
};

export default function ProjectGrid({ projects }: Props) {
  const [active, setActive] = useState<Project | null>(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative mx-auto max-w-[1440px] px-5 pt-[100px] pb-[100px] lg:px-[25px]"
    >
      <div
        aria-hidden
        className="absolute top-[210px] right-[14.58%] left-[15.97%] bottom-[140px] hidden justify-between mask-[linear-gradient(transparent,#000_8%,#000_92%,transparent)] lg:flex"
      >
        {Array.from({ length: 6 }, (_, i) => (
          <span key={i} className="w-px bg-ink/10" />
        ))}
      </div>

      <header className="relative grid gap-6 lg:grid-cols-[900px_380px] lg:gap-x-0 lg:px-[5px]">
        <div>
          <Eyebrow>Featured projects</Eyebrow>
          <Reveal as="h2" id="projects-title" className="mt-[22px] text-heading text-ink/80">
            Work we’re proud of.
          </Reveal>
        </div>
        <Reveal delay={0.1} as="p" className="text-body text-ink/80 lg:mt-10">
          These five projects show the range of Carion’s experience, from high-rise residential towers to complex
          mixed-use and commercial structures.
        </Reveal>
        <Reveal
          as="p"
          delay={0.2}
          aria-hidden
          className="text-right text-display text-ink/80 italic lg:absolute lg:top-[205px] lg:right-[5px]"
        >
          (01—05)
        </Reveal>
      </header>

      <div className="relative mt-16 grid gap-16 md:grid-cols-2 lg:mt-[160px] lg:block lg:aspect-[1390/2570]">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            className={`lg:absolute ${layout[i % layout.length].place}`}
            aspect={layout[i % layout.length].aspect}
            sizes="(min-width: 1024px) 57vw, (min-width: 768px) 50vw, 100vw"
            onOpen={() => setActive(project)}
          />
        ))}
      </div>

      <Reveal className="mt-20 flex justify-center lg:mt-[100px]">
        <Button href="#projects">View all projects</Button>
      </Reveal>

      <QuickView project={active} onClose={close} />
    </section>
  );
}
