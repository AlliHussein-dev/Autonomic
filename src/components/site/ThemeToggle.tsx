import { CircleDot, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type ThemeName = "dark" | "oled" | "light";

const THEMES: { id: ThemeName; label: string; color: string; Icon: typeof Moon }[] = [
  { id: "dark", label: "Dark", color: "#060B16", Icon: Moon },
  { id: "oled", label: "OLED", color: "#000000", Icon: CircleDot },
  { id: "light", label: "Light", color: "#FFFFFF", Icon: Sun },
];
const KEY = "autonomic-theme";

function read(): ThemeName {
  try {
    const v = localStorage.getItem(KEY);
    if (v === "dark" || v === "oled" || v === "light") return v;
  } catch {
    /* storage unavailable */
  }
  return "dark";
}

function apply(t: ThemeName) {
  document.documentElement.setAttribute("data-theme", t);
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEMES.find((x) => x.id === t)!.color);
  try {
    localStorage.setItem(KEY, t);
  } catch {
    /* storage unavailable */
  }
  window.dispatchEvent(new Event("autonomic-theme"));
}

function useTheme() {
  const [theme, setTheme] = useState<ThemeName>("dark");
  useEffect(() => {
    setTheme(read());
    const sync = () => setTheme(read());
    window.addEventListener("autonomic-theme", sync);
    return () => window.removeEventListener("autonomic-theme", sync);
  }, []);
  return [theme, (t: ThemeName) => { apply(t); setTheme(t); }] as const;
}

/** Three-way switch: Dark, OLED, Light. */
export function ThemeSwitch({ className }: { className?: string }) {
  const [theme, set] = useTheme();
  return (
    <div role="radiogroup" aria-label="Theme" className={cn("inline-flex rounded-full border border-white/15 bg-white/[0.04] p-1", className)}>
      {THEMES.map(({ id, label, Icon }) => (
        <button
          key={id}
          type="button"
          role="radio"
          aria-checked={theme === id}
          onClick={() => set(id)}
          className={cn(
            "flex min-h-10 items-center gap-1.5 rounded-full px-3.5 text-sm transition-colors",
            theme === id ? "bg-foreground text-background" : "text-foreground/70 hover:text-foreground",
          )}
        >
          <Icon className="size-4" />
          {label}
        </button>
      ))}
    </div>
  );
}

/** Compact icon button that cycles Dark, OLED, Light. */
export function ThemeCycle({ className }: { className?: string }) {
  const [theme, set] = useTheme();
  const i = THEMES.findIndex((t) => t.id === theme);
  const next = THEMES[(i + 1) % THEMES.length];
  const Current = THEMES[i].Icon;
  return (
    <button
      type="button"
      onClick={() => set(next.id)}
      aria-label={`Theme: ${THEMES[i].label}. Switch to ${next.label}`}
      className={cn("flex size-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-foreground/80 transition-colors hover:bg-white/[0.08] hover:text-foreground", className)}
    >
      <Current className="size-[18px]" />
    </button>
  );
}
