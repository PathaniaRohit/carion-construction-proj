import Button from "@/components/ui/Button";
import ParallaxImage from "@/components/ui/ParallaxImage";
import Reveal from "@/components/ui/Reveal";
import { contact } from "@/data/site";

type Props = {
  title?: string;
  cta?: { label: string; href: string };
};

export default function CallToAction({
  title = "Let’s build what comes next.",
  cta = { label: "Discuss a Project", href: `mailto:${contact.email}` },
}: Props) {
  return (
    <section aria-labelledby="cta-title" className="relative flex h-[500px] items-center justify-center overflow-hidden bg-ink px-5 text-paper">
      <ParallaxImage src="/images/concrete.jpg" strength={10} />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative flex max-w-[630px] flex-col items-center gap-[30px] text-center">
        <Reveal as="h2" id="cta-title" y={40} className="text-display text-paper/90 italic">
          {title}
        </Reveal>
        <Reveal delay={0.15}>
          <Button href={cta.href} tone="light">
            {cta.label}
          </Button>
        </Reveal>
      </div>

      <address className="absolute bottom-2.5 left-2.5 min-w-[240px] whitespace-nowrap bg-paper/10 px-[11px] py-2.5 font-mono text-body leading-[15px] text-paper/80 uppercase not-italic backdrop-blur-[5px]">
        {contact.region}
        <br />
        <a href={`tel:${contact.phone.replaceAll(".", "")}`} className="transition-colors hover:text-paper">
          {contact.phone}
        </a>
        <br />
        <a href={`mailto:${contact.email}`} className="transition-colors hover:text-paper">
          {contact.email}
        </a>
      </address>
    </section>
  );
}
