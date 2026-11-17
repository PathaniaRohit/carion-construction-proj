import Cross from "./Cross";

type Props = {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
};

export default function Eyebrow({ children, className = "", centered }: Props) {
  return (
    <p className={`flex h-fit items-center gap-3 text-body uppercase ${centered ? "justify-center" : ""} ${className}`}>
      <Cross className="rotate-45" />
      {children}
      {centered && <Cross className="rotate-45" />}
    </p>
  );
}
