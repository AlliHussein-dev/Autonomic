import { BookDemoButton } from "./ActionButtons";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { Container, Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

const points = [
  { title: "Your accounts", text: "The platform accounts are opened in your name, so you are never locked in." },
  { title: "Your number", text: "Your business number stays yours. Nothing is rented from us." },
  { title: "Your data", text: "Call records and lead details stay in your own accounts." },
];

export function Ownership() {
  return (
    <Section id="owned" className="pt-24 sm:pt-32">
      <Container>
        <SectionHeading
          eyebrow="How it is set up"
          title="Built once. Owned by you."
          lead="Many AI receptionist services rent you the system by the month. Autonomic builds it once, in your own accounts. No monthly fee to us. You pay the platform directly for usage, and support after launch is optional."
        />
        <RevealGroup className="mt-12 grid gap-4 md:grid-cols-3">
          {points.map((p) => (
            <RevealItem key={p.title} className="rounded-2xl border border-white/10 border-t-live/60 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.05]">
              <h3 className="font-display text-xl font-semibold text-foreground">{p.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{p.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
        <Reveal delay={0.1}>
          <p className="mt-6 text-sm text-muted-foreground">
            Platform usage is a real cost and is paid by you to the platform. Ongoing help after launch is paid and optional.
          </p>
        </Reveal>
        <div className="mt-8">
          <BookDemoButton className="w-full justify-center sm:w-auto" />
        </div>
      </Container>
    </Section>
  );
}
