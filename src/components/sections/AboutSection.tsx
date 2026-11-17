import Button from "@/components/ui/Button";
import CropMarks from "@/components/ui/CropMarks";
import Eyebrow from "@/components/ui/Eyebrow";
import Line from "@/components/ui/Line";
import Reveal from "@/components/ui/Reveal";
import RevealImage from "@/components/ui/RevealImage";
import LogoStrip from "./LogoStrip";

const guides = [
  { to: "up", className: "-left-[5px] bottom-[calc(100%+15px)] h-[280px]" },
  { to: "up", className: "-right-[5px] bottom-[calc(100%+15px)] h-[180px]" },
  { to: "down", className: "-left-[5px] top-[calc(100%+15px)] h-[180px]" },
  { to: "down", className: "-right-[5px] top-[calc(100%+15px)] h-[180px]" },
  { to: "left", className: "right-[calc(100%+15px)] -top-[5px] w-[220px]" },
  { to: "right", className: "left-[calc(100%+15px)] -top-[5px] w-[220px]" },
  { to: "left", className: "right-[calc(100%+15px)] -bottom-[5px] w-[220px]" },
  { to: "right", className: "left-[calc(100%+15px)] -bottom-[5px] w-[220px]" },
] as const;

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-[1440px] px-5 pt-[100px] lg:px-[30px]">
      <div className="grid gap-8 lg:grid-cols-[200px_700px_380px] lg:gap-0">
        <Eyebrow>Who we are</Eyebrow>
        <Reveal as="h2" id="about-title" className="max-w-[600px] text-title text-ink/80">
          Carion Construction specializes in concrete formwork for high-rise and complex projects across the
          Lower Mainland.
        </Reveal>
        <Reveal delay={0.1} className="space-y-[26px] pt-[9px] text-body">
          <p className="max-w-[330px] text-ink/80">
            Carion Construction specializes in concrete formwork for high-rise and complex projects across the
            Lower Mainland.
          </p>
          <p className="bg-linear-[105deg] from-ink from-40% to-ink/40 bg-clip-text text-transparent">
            We work with developers and construction teams early, when crane planning, site logistics and
            sequencing can still be worked through properly. Many people across our leadership and field teams
            have worked together for decades. That familiarity makes communication clearer and helps the work run
            more smoothly on site.
          </p>
        </Reveal>
      </div>

      <figure className="relative mx-auto mt-24 max-w-[970px] lg:mt-[178px]">
        {guides.map((guide, i) => (
          <Line key={i} to={guide.to} className={`hidden from-ink/10 lg:block ${guide.className}`} delay={0.2} />
        ))}
        <CropMarks />

        <RevealImage
          src="/images/team.jpg"
          alt="The Carion field team on a completed concrete deck overlooking Vancouver"
          sizes="(min-width: 1024px) 970px, 100vw"
          className="grain aspect-[4/3] md:aspect-[970/430]"
        >
          <p className="absolute top-5 left-5 z-10 max-w-[650px] text-heading text-paper max-md:text-[28px] lg:top-[25px] lg:left-[25px]">
            # Behind every strong structure is a team you can trust.
          </p>
        </RevealImage>

        <p className="absolute top-1/2 right-[calc(100%+5px)] hidden w-[230px] -translate-y-1/2 text-center text-label font-semibold uppercase min-[1400px]:block">
          (Carion)
        </p>
        <p className="absolute top-1/2 left-[calc(100%+5px)] hidden w-[230px] -translate-y-1/2 text-center text-label font-semibold uppercase min-[1400px]:block">
          550 Joyce/(2021)
        </p>
      </figure>

      <Reveal className="mt-[25px] flex justify-center">
        <Button href="#history">More About Carion</Button>
      </Reveal>

      <LogoStrip />
    </section>
  );
}
