import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { BookDemoButton, GlassAnchorButton } from "./ActionButtons";
import { Container, Section } from "./Section";
import { WorkflowVisual } from "./WorkflowVisual";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function Hero() {
  const visualRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: visualRef, offset: ["start end", "end start"] });
  const visualY = useTransform(scrollYProgress, [0, 1], [24, -24]);
  return (
    <Section id="top" className="pt-32 sm:pt-40">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Copy */}
          <div className="min-w-0 text-center lg:text-left">
            <motion.p
              {...rise(0.05)}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-xs font-medium tracking-wide text-foreground/70"
            >
              <span className="size-1.5 rounded-full bg-live" />
              AI automation for businesses
            </motion.p>

            {/* The single H1 of the page */}
            <motion.h1
              {...rise(0.12)}
              className="mt-6 font-display text-[2.55rem] leading-[1.05] font-semibold tracking-tight text-foreground sm:text-6xl lg:text-[3.9rem]"
            >
              <span className="block">Tired of losing leads</span>{" "}
              <span className="block text-white/45">and wasting time?</span>
            </motion.h1>

            <motion.p
              {...rise(0.2)}
              className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0"
            >
              Autonomic builds AI voice agents, website chat agents, and follow-up workflows that
              answer, qualify, and pass the work to your team.
            </motion.p>

            <motion.p
              {...rise(0.28)}
              className="mt-6 inline-flex max-w-full items-center gap-2.5 rounded-full bg-live/10 px-4 py-2 font-display text-base leading-snug text-foreground sm:text-lg"
            >
              
              <a href="#owned" className="underline-offset-4 hover:underline mb-1 ">
                Built once. Owned by you. No monthly fee to us.
              </a>
            </motion.p>

            <motion.div {...rise(0.36)} className="mt-9 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center sm:justify-center lg:justify-start">
              <BookDemoButton className="w-full px-3 text-sm leading-tight whitespace-normal sm:w-auto sm:px-7 sm:text-[15px] [&_svg]:hidden sm:[&_svg]:block" />
              <GlassAnchorButton href="#services" className="w-full px-3 text-sm leading-tight sm:w-auto sm:px-7 sm:text-[15px]">
                See how it works
                <ArrowDown className="hidden size-4 text-white/50 sm:block" />
              </GlassAnchorButton>
            </motion.div>

            <motion.ul {...rise(0.4)} className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[15px] text-foreground/85 lg:justify-start">
              {["Answers when your team can't", "Flags urgent situations for a person", "Sends you the details to act on"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-live" />
                  {t}
                </li>
              ))}
            </motion.ul>

            <motion.p {...rise(0.44)} className="mt-6 text-sm text-muted-foreground">
              Remote delivery · every call over Zoom
            </motion.p>
          </div>

          {/* Visual */}
          <motion.div ref={visualRef} style={reduce ? undefined : { y: visualY }} className="relative isolate mx-auto w-full min-w-0 max-w-md sm:max-w-lg lg:max-w-none">
           
            <WorkflowVisual />
            <a
              href="#work"
              className="group mt-5 hidden items-center gap-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground lg:inline-flex"
            >
              See a full demonstration
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
