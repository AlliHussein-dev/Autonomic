import { RevealGroup, RevealItem } from "./Reveal";
import { Container, Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

type Step = {
  number: string;
  title: string;
  summary: string;
  items: string[];
};

const steps: Step[] = [
  {
    number: "01",
    title: "Understand",
    summary: "Every project starts with the business, not with a product.",
    items: [
      "Where leads come from",
      "How customers currently contact the business",
      "What questions are repetitive",
      "Where leads are being lost",
      "What information staff need",
      "What systems are already in use",
      "Which steps should remain human",
      "Which steps are suitable for automation",
    ],
  },
  {
    number: "02",
    title: "Design",
    summary: "Map the workflow before anything is built.",
    items: [
      "Conversation structure",
      "Qualification logic",
      "Escalation rules",
      "Data collection",
      "Notifications",
      "Integrations",
      "Follow-up",
      "Human handoff",
    ],
  },
  {
    number: "03",
    title: "Build",
    summary: "Build and configure the appropriate AI system for that workflow.",
    items: [
      "Voice",
      "Chat",
      "APIs",
      "Workflow automation",
      "Business tools",
      "Custom logic",
    ],
  },
  {
    number: "04",
    title: "Test",
    summary: "Test realistic scenarios, not just the happy path.",
    items: [
      "Normal conversations",
      "Unclear questions",
      "Incomplete information",
      "Edge cases",
      "Escalation",
      "Human handoff",
      "Notifications",
      "Workflow actions",
    ],
  },
  {
    number: "05",
    title: "Launch",
    summary:
      "Connect the system to the appropriate business workflow and verify the live experience.",
    items: ["Live connection", "Verified end-to-end", "Configured monitoring and handoff"],
  },
];

export function Process() {
  return (
    <Section id="how-it-works" className="pt-24 sm:pt-32">
      <Container>
        <SectionHeading
          eyebrow="The automation process"
          title="From business problem to working system."
          lead="A clear, repeatable path from the first conversation to a system that is connected, tested, and running the way the business actually operates."
        />

        <RevealGroup className="mt-12">
          {steps.map((step, index) => (
            <RevealItem
              key={step.number}
              className={
                index === 0
                  ? "rounded-t-3xl"
                  : index === steps.length - 1
                    ? "rounded-b-3xl border-t border-border/70"
                    : "border-t border-border/70"
              }
            >
              <div className="grid gap-4 px-1 py-8 transition-colors hover:bg-white/[0.04] sm:px-5 md:grid-cols-[6rem_minmax(0,1fr)] md:gap-8 md:py-9">
                <div className="flex items-center gap-3 md:block">
                  <span className="font-display text-4xl font-semibold tracking-tight text-white/40 md:text-5xl">
                    {step.number}
                  </span>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-foreground md:mt-2 md:text-2xl">
                    {step.title}
                  </h3>
                </div>
                <div className="min-w-0">
                  <p className="text-[15px] leading-relaxed text-muted-foreground">
                    {step.summary}
                  </p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {step.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-snug text-foreground/85"
                      >
                        <span className="mt-[0.4rem] size-1.5 shrink-0 rounded-full bg-white/35" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
