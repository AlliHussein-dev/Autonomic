import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
  /** Set false when the caller already wraps the heading in its own Reveal. */
  reveal?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
  reveal = true,
}: SectionHeadingProps) {
  const body = (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <motion.span
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={cn("mb-4 block h-px w-14 origin-left bg-live", align === "center" && "mx-auto")}
      />
      <p className="text-xs font-medium tracking-[0.22em] text-live/80 uppercase">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl leading-[1.06] font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
        {title}
      </h2>
      {lead ? (
        <div className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">{lead}</div>
      ) : null}
    </div>
  );

  if (!reveal) return body;
  return <Reveal>{body}</Reveal>;
}
