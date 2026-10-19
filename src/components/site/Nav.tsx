import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BookDemoButton } from "./ActionButtons";
import { ThemeCycle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Why us", href: "#why" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
];

export function Mark({ className }: { className?: string }) {
  return (
    <img
      src="/logo-mark.png"
      alt=""
      aria-hidden="true"
      width={40}
      height={40}
      decoding="async"
      className={cn("brand-mark size-9 shrink-0 object-contain drop-shadow-[0_0_14px_rgba(31,168,255,0.45)]", className)}
    />
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <Mark />
      <span className="font-display text-lg font-semibold tracking-[0.14em] text-foreground">
        AUTONOMIC
      </span>
    </span>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 sm:px-5">
      <div
        className={cn(
          "mx-auto mt-3 flex w-full max-w-6xl items-center justify-between gap-4 rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-5",
          scrolled ? "glass-strong" : "glass-soft",
        )}
      >
        <a href="#top" className="cursor-pointer shrink-0" aria-label="Autonomic — home">
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative cursor-pointer px-3.5 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute inset-x-3.5 bottom-1 h-px origin-left scale-x-0 bg-white/70 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
              <ThemeCycle />
              <BookDemoButton
            label="Know more"
            size="sm"
            className="hidden h-9 rounded-full px-4 text-sm sm:inline-flex"
          />
            </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.07] text-foreground transition-colors hover:bg-white/[0.13] lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-2 w-full max-w-6xl rounded-2xl p-3 glass-strong lg:hidden"
          >
            <nav className="flex flex-col" aria-label="Mobile">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="cursor-pointer rounded-xl px-4 py-3 text-[15px] font-medium text-foreground/75 transition-colors hover:bg-white/[0.07] hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <BookDemoButton
              label="Want to know more?"
              className="mt-2 w-full rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
