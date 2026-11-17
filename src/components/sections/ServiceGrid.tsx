import Button from "@/components/ui/Button";
import Cross from "@/components/ui/Cross";
import Eyebrow from "@/components/ui/Eyebrow";
import Line from "@/components/ui/Line";
import ParallaxImage from "@/components/ui/ParallaxImage";
import Reveal from "@/components/ui/Reveal";

const services = [
  {
    title: "High-Rise Formwork",
    text: "Formwork for mid-rise and high-rise concrete structures across residential, mixed-use and commercial projects.",
  },
  {
    title: "Complex Structures",
    text: "Changing floor plates, cantilevers, sloped and curved walls, and other conditions that require more than a standard approach.",
  },
  {
    title: "Planning & Coordination",
    text: "Early input on crane selection, site logistics, sequencing and constructability before work begins on site.",
  },
];

export default function ServiceGrid() {
  return (
    <section id="expertise" aria-labelledby="expertise-title" className="relative overflow-hidden bg-ink text-paper">
      <ParallaxImage src="/images/expertise.jpg" />
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent from-75% to-ink" />

      <div className="relative mx-auto grid max-w-[1440px] gap-y-8 px-5 pt-[100px] pb-[120px] lg:grid-cols-[200px_1fr_auto] lg:px-[30px] lg:pb-[190px]">
        <Eyebrow>Our expertise</Eyebrow>
        <div>
          <Reveal as="h2" id="expertise-title" className="text-heading text-paper/90">
            Built for complexity.
          </Reveal>
          <Reveal as="p" delay={0.1} className="mt-5 max-w-[400px] text-body text-paper/80">
            Carion brings practical planning and on-site formwork experience to residential, mixed-use and
            commercial projects across the Lower Mainland.
          </Reveal>
        </div>
        <Reveal delay={0.2} className="lg:pt-2.5">
          <Button href="#projects" tone="light">
            Explore Our Work
          </Button>
        </Reveal>

        <ul className="grid gap-y-6 md:grid-cols-3 md:gap-x-[5px] lg:col-span-3 lg:mt-[59px] lg:-ml-[5px] lg:w-[1195px]">
          {services.map((service, i) => (
            <Reveal
              as="li"
              key={service.title}
              delay={i * 0.12}
              className="group relative min-h-[195px] px-[15px] pt-[15px] pb-6 transition-colors duration-700 hover:bg-paper/[0.06]"
            >
              <Cross className="absolute top-0 left-0 text-paper/80 transition-transform duration-700 ease-out-expo group-hover:rotate-90" />
              <Line to="right" className="top-[5px] left-[15px] w-[calc(100%-15px)] from-paper/40" delay={0.2 + i * 0.1} />
              <Line to="down" className="top-[15px] left-[5px] h-[180px] from-paper/40" delay={0.2 + i * 0.1} />

              <p className="text-lead italic transition-transform duration-700 ease-out-expo group-hover:translate-x-1.5">
                (0{i + 1})
              </p>
              <h3 className="mt-[50px] text-label font-semibold uppercase italic">{service.title}</h3>
              <p className="mt-1 max-w-[320px] text-body text-paper/80">{service.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
