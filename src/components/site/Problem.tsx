import { Car, Clock, HardHat, Moon, MousePointerClick, PhoneIncoming, Users, PhoneMissed, MessageSquare } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { Container, Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

type Moment = { icon: LucideIcon; text: string };

const moments: Moment[] = [
  { icon: PhoneIncoming, text: "A customer calls while the owner is driving." },
  { icon: HardHat, text: "A technician is inside another customer's property." },
  { icon: Users, text: "A receptionist is already helping the person in front of them." },
  { icon: Moon, text: "A potential customer sends a message after hours." },
  {
    icon: MousePointerClick,
    text: "A website visitor has a question and leaves before anyone responds.",
  },
  { icon: Clock, text: "A lead arrives in the evening and sits untouched until morning." },
  { icon: Car, text: "The whole team is on the road between jobs." },
];

export function Problem() {
  return (
    <Section id="problem" className="pt-24 sm:pt-32">
      <Container>
        <SectionHeading
          eyebrow="The immediate problem"
          title={
            <>
              Your customers don&apos;t wait
              <br className="hidden sm:block" /> for your schedule.
            </>
          }
          lead={
            <>
              <p>
                Most missed opportunities aren&apos;t a demand problem. A caller with a broken furnace
                or a leaking pipe often won&apos;t leave a message. They call the next company on the
                list. The opportunity is only yours while someone responds.
              </p>
            </>
          }
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          {/* Moments */}
          <RevealGroup className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.035]">
            {moments.map((moment) => (
              <RevealItem key={moment.text} className="flex items-start gap-4 px-5 py-4 sm:px-6">
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06]">
                  <moment.icon className="size-4 text-white/70" />
                </span>
                <span className="text-[15px] leading-relaxed text-foreground/85">
                  {moment.text}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>

          {/* Supporting imagery */}
          <Reveal delay={0.1}>
            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
              <p className="text-xs font-medium tracking-[0.2em] text-live/80 uppercase">While your team is busy</p>
              <ul className="mt-4 space-y-3">
                {[
                  { icon: PhoneMissed, title: "Missed call", meta: "After hours, no voicemail" },
                  { icon: MessageSquare, title: "Website message", meta: "Waiting for a reply" },
                  { icon: Clock, title: "New enquiry", meta: "Not followed up yet" },
                ].map((item) => (
                  <li key={item.title} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3.5">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]">
                      <item.icon className="size-[18px] text-live" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-base font-medium text-foreground">{item.title}</span>
                      <span className="block text-sm text-muted-foreground">{item.meta}</span>
                    </span>
                    <span className="soft-pulse ml-auto size-2 shrink-0 rounded-full bg-live" />
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Closing statements */}
        <Reveal delay={0.15}>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Urgent callers don&apos;t wait for a callback. A message sent tonight can be answered
              by someone else tomorrow. And every detail copied by hand is time your team could
              spend on the work itself.
            </p>
            <div className="rounded-2xl p-6 glass-strong">
              <p className="text-xs font-medium tracking-[0.2em] text-white/50 uppercase">
                Where Autonomic comes in
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-foreground/85">
                Autonomic builds around these moments, so your business responds, captures the
                details, and moves each conversation to the next step: a booking request, a
                notification, an escalation, or a follow-up.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
