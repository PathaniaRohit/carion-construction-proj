import CropMarks from "@/components/ui/CropMarks";
import Eyebrow from "@/components/ui/Eyebrow";
import Line from "@/components/ui/Line";
import Reveal from "@/components/ui/Reveal";
import RevealImage from "@/components/ui/RevealImage";

const milestones = [
  { label: "(2012)", value: "Carion incorporated" },
  {
    label: "100+ years",
    value: "Combined formwork and engineering experience",
  },
  { label: "20+ years", value: "Bill, Steve and Sean working together" },
];

export default function HistorySection() {
  return (
    <section
      id="history"
      aria-labelledby="history-title"
      className="bg-ink text-paper"
    >
      <div className="mx-auto grid max-w-[1440px] gap-16 px-5 pt-[100px] pb-[110px] lg:grid-cols-[1fr_395px] lg:gap-10 lg:px-[30px]">
        <div>
          <Eyebrow>Our history</Eyebrow>
          <Reveal
            as="h2"
            id="history-title"
            className="mt-16 max-w-[671px] text-heading text-paper/90 lg:mt-[150px]"
          >
            Built on years of working together.
          </Reveal>
          <Reveal
            delay={0.1}
            className="mt-5 max-w-[480px] space-y-[26px] text-body"
          >
            <p className="text-paper/80">
              Carion Construction was incorporated in 2012 by Bill Iles, Peter
              Vanagan, Sean Lariviere and Steve Cameron. Together, the four
              founding partners brought more than 100 years of concrete formwork
              and professional engineering experience to the company.
            </p>
            <p className="bg-linear-[105deg] from-paper/80 from-35% to-paper/20 bg-clip-text text-transparent">
              Bill, Steve and Sean had already worked together for more than 20
              years, while several employees have worked with members of
              Carion’s leadership team for decades. Those long-standing
              relationships have created a team that knows how to work together
              and keep complex projects moving.
            </p>
          </Reveal>
        </div>

        <div className="lg:mt-[126px] lg:mr-[5px]">
          <dl className="space-y-[30px] pl-[15px]">
            {milestones.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.1}>
                <dt className="text-label font-semibold uppercase italic">
                  {item.label}
                </dt>
                <dd className="mt-1 text-body text-paper/80 uppercase">
                  {item.value}
                </dd>
              </Reveal>
            ))}
          </dl>

          <figure className="relative mt-5">
            <CropMarks className="text-paper/80" />
            <Line to="up" className="-left-[5px] bottom-[calc(100%+15px)] h-[190px] from-paper/40 max-lg:hidden" />
            <Line to="left" className="-top-[5px] right-[calc(100%+15px)] w-[190px] from-paper/40 max-lg:hidden" delay={0.1} />
            <Line to="left" className="-bottom-[6px] right-[calc(100%+15px)] w-[190px] from-paper/40 max-lg:hidden" delay={0.2} />
            <Line to="down" className="top-[calc(100%+15px)] -left-[5px] h-[85px] from-paper/40 max-lg:hidden" delay={0.3} />
            <RevealImage
              src="/images/history.jpg"
              alt="Tower cranes rising beside a concrete core"
              sizes="390px"
              className="aspect-[390/270]"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
