"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useLenis } from "lenis/react";
import { Logo } from "@/components/ui/Brand";
import Button from "@/components/ui/Button";
import { ease } from "@/components/ui/Reveal";
import { nav } from "@/data/site";

export default function Header() {
  const { scrollY } = useScroll();
  const lenis = useLenis();
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setHidden(y > (scrollY.getPrevious() ?? 0) && y > 200);
    setSolid(y > 120);
  });

  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
  }, [open, lenis]);

  return (
    <motion.header
      animate={{ y: hidden && !open ? "-100%" : "0%" }}
      transition={{ duration: 0.6, ease }}
      className={`fixed inset-x-0 top-0 z-40 text-paper/80 transition-colors duration-500 ${
        solid && !open ? "bg-ink/75 backdrop-blur-md" : ""
      }`}
    >
      <nav
        aria-label="Primary"
        className={`relative mx-auto flex max-w-[1440px] items-center justify-between px-5 transition-[height,padding] duration-500 lg:px-[30px] ${
          solid ? "h-[70px]" : "h-[90px] pt-2.5"
        }`}
      >
        <a href="#top" aria-label="Carion Construction — home" className="transition-opacity hover:opacity-70">
          <Logo className="h-[30px] w-[106px]" />
        </a>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 gap-10 text-body uppercase lg:flex">
          {nav.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="relative block py-1 transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-500 after:ease-out-expo hover:text-paper hover:after:origin-left hover:after:scale-x-100"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <Button href="#contact" tone="outline" className="max-lg:hidden">
          Start a Project
        </Button>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-10 items-center gap-2 border border-paper/80 px-4 text-body uppercase lg:hidden"
        >
          <span className={`size-2 rounded-full bg-current transition-transform ${open ? "scale-150" : ""}`} />
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease }}
            className="fixed inset-0 -z-10 flex flex-col justify-end bg-ink px-5 pb-10 lg:hidden"
          >
            <ul className="space-y-2">
              {nav.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 + i * 0.06, ease }}
                >
                  <a href={item.href} onClick={() => setOpen(false)} className="text-display text-paper italic">
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <Button href="#contact" tone="light" className="mt-10 self-start">
              Start a Project
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
