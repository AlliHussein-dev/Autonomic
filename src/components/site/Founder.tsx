import { UserRound } from "lucide-react";
import { Reveal } from "./Reveal";
import { Container, Section } from "./Section";
import { siteConfig } from "@/lib/site-config";

const details = [
  { label: "Founded by", value: "Alli Hussein" },
  { label: "Focus", value: "AI voice, chat, and workflow automation" },
  { label: "Working mode", value: "Remote" },
];

export function Founder() {
  return (
    <Section id="about" className="pt-24 sm:pt-32">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          {/* Portrait */}
          <Reveal>
            {siteConfig.founderPhoto ? (
              <img
                src={siteConfig.founderPhoto}
                alt="Alli Hussein, founder of Autonomic"
                className="mx-auto aspect-[4/5] w-full max-w-[18rem] rounded-3xl border border-white/10 object-cover object-top sm:max-w-sm lg:max-w-none"
              />
            ) : (
              <div className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-4 rounded-3xl p-8 text-center glass">
                <span className="flex size-14 items-center justify-center rounded-full border border-white/20 bg-white/[0.07]">
                  <UserRound className="size-6 text-white/70" />
                </span>
                <p className="max-w-[16rem] font-display text-sm font-medium tracking-wide text-foreground/75">
                  [ALLI PHOTO — REPLACE WITH REAL PHOTO]
                </p>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Alli Hussein · Founder
                </p>
              </div>
            )}
          </Reveal>

          {/* Bio */}
          <div className="flex min-w-0 flex-col justify-center text-center lg:text-left">
            <Reveal delay={0.08}>
              <p className="text-xs font-medium tracking-[0.22em] text-white/50 uppercase">
                About
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[1.06] font-semibold tracking-tight text-foreground sm:text-5xl">
                Founded by Alli Hussein.
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 text-lg leading-relaxed text-foreground/85">
                Autonomic is an AI automation firm. We build voice agents, chat agents, and
                follow-up workflows that help businesses handle conversations, capture leads, and
                keep work moving.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Autonomic was founded by Alli Hussein, who leads every project. We work remotely and
                build each system around how the business actually operates.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
                {details.map((detail) => (
                  <div key={detail.label} className="bg-[var(--surface-1)] p-5">
                    <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                      {detail.label}
                    </dt>
                    <dd className="mt-1.5 text-sm font-semibold tracking-tight text-foreground">
                      {detail.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
