"use client";

import { useEffect, useState } from "react";

const format = new Intl.DateTimeFormat("en-CA", {
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
  timeZone: "America/Vancouver",
});

export default function Clock({ className = "" }: { className?: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(format.format(new Date()));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);

  return (
    <p
      className={`flex h-[27px] w-[90px] items-center justify-center font-mono text-body leading-none uppercase backdrop-blur-[5px] ${className}`}
    >
      <time className={time ? "" : "opacity-0"}>
        {time ?? "00:00"} PT
      </time>
    </p>
  );
}
