import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  tone?: "dark" | "light" | "outline" | "outlineInk";
  className?: string;
};

const tones = {
  dark: "bg-ink text-paper hover:shadow-[0_14px_30px_-12px_rgb(0_15_20/0.6)]",
  light: "bg-paper text-ink hover:shadow-[0_14px_30px_-12px_rgb(0_0_0/0.45)]",
  outline: "border border-paper/80 text-paper/80 hover:bg-paper hover:text-ink",
  outlineInk: "border border-ink text-ink hover:bg-ink hover:text-paper",
};

export default function Button({ href, children, tone = "dark", className = "" }: Props) {
  const Tag = href.startsWith("/") ? Link : "a";

  return (
    <Tag
      href={href}
      className={`group inline-flex h-10 items-center gap-2.5 px-5 text-body whitespace-nowrap uppercase transition-[background-color,color,box-shadow,translate] duration-500 ease-out-expo hover:-translate-y-0.5 ${tones[tone]} ${className}`}
    >
      <span className="size-2 rounded-full bg-current transition-transform duration-500 ease-out-expo group-hover:scale-[1.6]" />
      <span className="relative block overflow-hidden">
        <span className="block transition-transform duration-500 ease-out-expo group-hover:-translate-y-full">
          {children}
        </span>
        <span aria-hidden className="absolute inset-0 translate-y-full transition-transform duration-500 ease-out-expo group-hover:translate-y-0">
          {children}
        </span>
      </span>
    </Tag>
  );
}
