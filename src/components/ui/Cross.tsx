export default function Cross({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 10 10" fill="currentColor" aria-hidden className={`size-2.5 shrink-0 ${className}`}>
      <path d="M4.5 0h1v10h-1zM0 4.5h10v1H0z" />
    </svg>
  );
}
