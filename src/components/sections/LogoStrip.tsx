import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";

const clients = [
  { name: "Westbank", src: "/logos/westbank.svg" },
  { name: "ICON West Construction", src: "/logos/icon-west.svg" },
  { name: "Ledcor Group", src: "/logos/ledcor.svg" },
  { name: "Graham", src: "/logos/graham.svg" },
  { name: "Intracorp", src: "/logos/intracorp.svg" },
  { name: "ITC Construction Group", src: "/logos/itc.svg" },
];

export default function LogoStrip({ title = "Developers & contractors we’ve worked with" }: { title?: string }) {
  return (
    <div className="mt-[160px] lg:mt-[230px]">
      <Eyebrow centered>{title}</Eyebrow>
      <ul className="mx-auto mt-[60px] group/logos grid max-w-[1186px] grid-cols-2 gap-x-[50px] sm:grid-cols-3 lg:mt-[102px] lg:grid-cols-6">
        {clients.map((client, i) => (
          <Reveal as="li" key={client.name} delay={i * 0.06} className="flex h-[130px] items-center justify-center">
            <Image
              src={client.src}
              alt={client.name}
              width={156}
              height={130}
              className="h-auto w-full max-w-[156px] transition-[opacity,scale] duration-500 ease-out-expo group-hover/logos:opacity-35 hover:scale-105 hover:opacity-100!"
            />
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
