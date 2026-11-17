import Image from "next/image";
import Clock from "@/components/ui/Clock";
import Cross from "@/components/ui/Cross";
import Reveal from "@/components/ui/Reveal";
import { contact, footerNav } from "@/data/site";

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-paper">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-5 pt-20 pb-[30px] lg:grid-cols-[630px_minmax(0,1fr)] lg:gap-x-[176px] lg:gap-y-0 lg:px-[30px] lg:pt-[100px]">
        <section aria-labelledby="footer-contact">
          <h2 id="footer-contact" className="text-label font-semibold text-paper/90 uppercase">
            Discuss a Project
          </h2>
          <a
            href={`mailto:${contact.email}`}
            className="group relative mt-3.5 block w-fit text-display text-paper/90 italic"
          >
            {contact.email}
            <span className="absolute inset-x-0 -bottom-1 h-px origin-right scale-x-0 bg-current transition-transform duration-700 ease-out-expo group-hover:origin-left group-hover:scale-x-100" />
          </a>

          <div className="mt-[25px] flex max-w-[505px] items-center text-paper/80 lg:-ml-[5px]">
            <Cross />
            <span className="mx-[5px] h-px flex-1 bg-paper/50" />
            <Cross />
          </div>

          <h3 className="mt-[35px] text-label font-semibold text-paper/90 uppercase">Contacts</h3>
          <address className="mt-2.5 space-y-[5px] text-body text-paper/70 not-italic">
            <p>{contact.address}</p>
            <p>
              T:{" "}
              <a href={`tel:${contact.phone.replaceAll(".", "")}`} className="transition-colors hover:text-paper">
                {contact.phone}
              </a>
            </p>
            <p>F: {contact.fax}</p>
          </address>
        </section>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-[200px_200px_1fr] lg:gap-0">
          {footerNav.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.08}>
              <h3 className="text-lead">{group.title}</h3>
              <ul className="mt-2.5 space-y-[5px] text-body text-paper/80">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-block transition-[color,translate] duration-300 hover:translate-x-1 hover:text-paper"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </nav>

        <div className="relative mt-8 self-end lg:mt-[220px]">
          <Clock className="absolute -top-[37px] left-[190px] bg-smoke/30 text-paper/80" />
          <Cross className="absolute -top-2.5 left-[180px] text-paper/80" />
          <Image
            src="/images/footer.jpg"
            alt="Curved concrete stair core"
            width={180}
            height={180}
            sizes="180px"
            className="size-[180px] object-cover"
          />
        </div>

        <Reveal y={60} className="self-end lg:w-[601px] lg:[justify-self:unsafe_end]">
          <Image src="/images/f-logo-big.svg" alt="Carion Construction Ltd." width={601} height={204} className="w-[601px] max-w-full" />
        </Reveal>

        <p className="text-body text-paper/50 lg:col-span-2 lg:mt-[30px]">
          Designed &amp; Developed by{" "}
          <a
            href="https://www.nirvanacanada.com/"
            target="_blank"
            rel="noopener"
            className="text-paper/80 underline-offset-4 transition-colors hover:text-paper hover:underline"
          >
            NirvanaCanada
          </a>
        </p>
      </div>
    </footer>
  );
}
