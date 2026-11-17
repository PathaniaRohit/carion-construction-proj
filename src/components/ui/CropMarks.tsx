import Cross from "./Cross";

export default function CropMarks({ className = "text-mark" }: { className?: string }) {
  return (
    <>
      <Cross className={`absolute -top-2.5 -left-2.5 ${className}`} />
      <Cross className={`absolute -top-2.5 -right-2.5 ${className}`} />
      <Cross className={`absolute -bottom-2.5 -left-2.5 ${className}`} />
      <Cross className={`absolute -right-2.5 -bottom-2.5 ${className}`} />
    </>
  );
}
