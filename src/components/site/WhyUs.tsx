import { motion } from "framer-motion";
import { useState } from "react";
import { CountMoney } from "./CountUp";
import { BookDemoButton } from "./ActionButtons";
import { Reveal } from "./Reveal";
import { Container, Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { pricing } from "@/lib/site-config";

const reasons = [
  { title: "Specialised, not generic", text: "We focus on AI voice, chat, and follow-up automation, so you are not someone's first attempt." },
  { title: "Built around your workflow", text: "We start with how your customers reach you and what should happen next, then build only what fits." },
  { title: "You own it", text: "The accounts, the number, and the data are yours. If we are not around, your system keeps running." },
  { title: "People stay in control", text: "Urgent or unusual situations go to a person, based on rules you set." },
];

const money = (n: number) => `$${Math.round(n).toLocaleString("en-CA")}`;

export function WhyUs() {
  const [monthly, setMonthly] = useState<number>(800);
  const setup = pricing.startingSetup;
  const usage = pricing.usageEstimate;
  const years = [1, 2, 3];
  const breakEven = setup / (monthly - usage);
  const saved = monthly * 36 - (setup + usage * 36);

  return (
    <Section id="why" className="pt-24 sm:pt-32">
      <Container>
        <SectionHeading
          eyebrow="Why work with us"
          title="Pay once. Stop paying monthly."
          lead={`Most managed AI receptionist plans charge a monthly fee that never ends, with per-minute usage billed on top. Autonomic is a one-time setup from ${money(setup)} ${pricing.currency}, and you own what we build.`}
        />

        <Reveal delay={0.05}>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {reasons.map((r) => (
              <div key={r.title} className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-live/40 hover:bg-white/[0.05]">
                <h3 className="font-display text-xl font-semibold text-foreground">{r.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{r.text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-8">
            <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              What a monthly plan really costs over time.
            </h3>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Pick a monthly price to compare. Whatever the size of your business, Autonomic setup starts at {money(setup)} {pricing.currency}.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              The figures below are illustrative estimates, not fixed quotes. Implementation starts at {money(setup)} {pricing.currency}, with the final cost depending on your
              business needs and the complexity of your setup. Ongoing platform usage is estimated at $30–$70 CAD per month, depending on usage.
            </p>

            <div role="group" aria-label="Monthly plan price to compare" className="mt-6 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
              {pricing.monthlyExamples.map((m) => (
                <button
                  key={m}
                  onClick={() => setMonthly(m)}
                  aria-pressed={monthly === m}
                  className={`relative min-h-11 rounded-full border px-5 text-sm font-medium transition-colors ${
                    monthly === m ? "border-transparent text-background" : "border-white/15 text-foreground/80 hover:bg-white/[0.06]"
                  }`}
                >
                  {monthly === m && (
                    <motion.span layoutId="price-chip" className="absolute inset-0 rounded-full bg-foreground" transition={{ type: "spring", stiffness: 420, damping: 34 }} />
                  )}
                  <span className="relative z-10">{money(m)} / month</span>
                </button>
              ))}
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 text-sm sm:text-base">
              <div className="grid grid-cols-3 gap-px bg-white/10 font-medium">
                <div className="min-w-0 bg-[var(--surface-1)] p-3 text-muted-foreground sm:p-4">Total after</div>
                <div className="min-w-0 bg-[var(--surface-1)] p-3 text-foreground/85 sm:p-4">{money(monthly)} plan</div>
                <div className="min-w-0 bg-[var(--surface-1)] p-3 text-live sm:p-4">Autonomic</div>
              </div>
              {years.map((y) => (
                <div key={y} className="grid grid-cols-3 gap-px border-t border-white/10 bg-white/10">
                  <div className="min-w-0 bg-[var(--surface-2)] p-3 text-muted-foreground sm:p-4">{y} {y === 1 ? "year" : "years"}</div>
                  <div className="min-w-0 bg-[var(--surface-2)] p-3 font-medium tabular-nums text-foreground sm:p-4"><CountMoney value={monthly * 12 * y} /></div>
                  <div className="min-w-0 bg-[var(--surface-2)] p-3 font-medium tabular-nums text-foreground sm:p-4"><CountMoney value={setup + usage * 12 * y} /></div>
                </div>
              ))}
            </div>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Plan totals don&apos;t include their per-minute usage, so their real cost is higher. Autonomic totals include about {money(usage)} a month of estimated platform usage.
            </p>

            <p className="mt-5 text-base leading-relaxed text-foreground/90 sm:text-lg">
              Against a {money(monthly)} plan, Autonomic is estimated to cost less after about{" "}
              <span className="font-semibold text-live">{breakEven <= 1 ? "1 month" : `${Math.ceil(breakEven)} months`}</span>, and about{" "}
              <CountMoney value={saved} className="font-semibold text-foreground" /> less over three years.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 p-5">
                <h4 className="text-sm font-semibold text-foreground">A managed monthly plan usually means</h4>
                <ul className="mt-3 space-y-2 text-[15px] text-muted-foreground">
                  <li>Hosting, updates, and support handled for you</li>
                  <li>Usage billed per minute, on top of the monthly fee</li>
                  <li>Service only for as long as you subscribe</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 p-5">
                <h4 className="text-sm font-semibold text-foreground">Our one-time setup means</h4>
                <ul className="mt-3 space-y-2 text-[15px] text-muted-foreground">
                  <li>A system built around your workflow, and tested before launch</li>
                  <li>A fix period after launch, then optional paid support</li>
                  <li>Accounts, number, and data in your name</li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <BookDemoButton className="w-full justify-center sm:w-auto sm:min-w-56" />
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
