import type { LucideIcon } from "lucide-react";
import { MessageSquare, Phone, Workflow } from "lucide-react";
import { FlowChain } from "./FlowChain";
import { Reveal } from "./Reveal";
import { Container, Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

type Service = {
  icon: LucideIcon;
  kicker: string;
  title: string;
  summary: string;
  items: string[];
  chain?: string[];
};

const services: Service[] = [
  {
    icon: Phone,
    kicker: "Phone",
    title: "Voice agents",
    summary:
      "Every call answered, every detail captured. The agent finds out why someone is calling and sends the details to your team, working only from information you approve.",
    items: [
      "Answers incoming calls",
      "Understands the reason for the call",
      "Collects name, contact details, and location",
      "Answers approved questions",
      "Flags situations that need a person",
      "Notifies your team",
      "Follow-up and reminder calls to your own customers",
    ],
  },
  {
    icon: MessageSquare,
    kicker: "Website",
    title: "Chat agents",
    summary:
      "Turn website visitors into organized enquiries instead of lost clicks. The agent answers common questions and collects what your team needs.",
    items: [
      "Answers common questions",
      "Qualifies website visitors",
      "Collects contact details and requirements",
      "Starts an appointment request",
      "Hands the conversation to a person",
    ],
  },
  {
    icon: Workflow,
    kicker: "Behind the scenes",
    title: "Workflows and follow-up",
    summary:
      "A lead is only worth something if the next step happens. Each workflow is built around how your business runs, and nothing is assumed to be included.",
    items: [
      "Lead details captured and organized",
      "Your team notified",
      "Follow-up after a missed call or an enquiry",
      "Escalation rules for urgent situations",
    ],
    chain: ["Capture", "Qualify", "Organize", "Notify", "Follow up"],
  },
];

export function Capabilities() {
  return (
    <Section id="services" className="pt-24 sm:pt-32">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="What Autonomic specialises in."
          lead="Every system starts from how your business actually works: how customers reach you, what information matters, and what should happen next."
        />

        <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
          {services.map((s, index) => (
            <Reveal key={s.title} delay={0.04 * index} className={index > 0 ? "border-t border-white/10" : ""}>
              <article className="grid gap-6 px-5 py-8 sm:px-7 md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:gap-10 md:py-10 lg:px-10">
                <div className="flex items-start gap-4 md:block">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]">
                    <s.icon className="size-5 text-white/75" />
                  </span>
                  <div className="md:mt-4">
                    <p className="text-[11px] font-medium tracking-[0.18em] text-white/50 uppercase">{s.kicker}</p>
                    <h3 className="mt-1 font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                      {s.title}
                    </h3>
                  </div>
                </div>
                <div className="min-w-0">
                  <p className="text-base leading-relaxed text-muted-foreground">{s.summary}</p>
                  {s.chain && (
                    <div className="mt-5">
                      <FlowChain steps={s.chain} />
                    </div>
                  )}
                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-base leading-snug text-foreground/85">
                        <span className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-white/35" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 font-display text-lg text-foreground/80">Other workflows built to order.</p>
        </Reveal>
      </Container>
    </Section>
  );
}
