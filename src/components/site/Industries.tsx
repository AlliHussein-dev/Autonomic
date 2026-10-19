import { Reveal } from "./Reveal";
import { Container, Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

const industries = ["HVAC", "Dental", "Plumbing", "Electrical", "Roofing", "Home services", "Professional services", "Property services"];

export function Industries() {
  return (
    <Section id="industries" className="pt-24 sm:pt-32">
      <Container>
        <SectionHeading
          eyebrow="Different businesses"
          title="Different businesses. Different workflows."
          lead="The right automation depends on how customers contact the business, what information matters, and what should happen next."
        />
        <Reveal delay={0.05}>
          <ul className="mt-10 flex flex-wrap gap-2.5">
            {industries.map((name) => (
              <li key={name} className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-[15px] text-foreground/85 transition duration-300 hover:-translate-y-0.5 hover:border-live/50 hover:text-foreground">
                {name}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
