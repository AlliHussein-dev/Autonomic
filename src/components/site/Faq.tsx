import { pricing } from "@/lib/site-config";
import { Reveal } from "./Reveal";
import { Container, Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  { q: "What does it cost?", a: `Setup starts at $${pricing.startingSetup.toLocaleString("en-CA")} ${pricing.currency} and depends on the size and complexity of your business, so we quote it after a short call. It is a one-time setup, with no monthly fee to us.` },
  { q: "What will platform usage cost?", a: `The platform bills you directly, by the minute. For after-hours coverage it is often around ${pricing.usageRange} a month, but it grows with call volume. We estimate it for yours before you decide.` },
  { q: "What happens after launch?", a: "A short period of fixes is included. After that, help is optional and paid, so you only pay when you need it." },
  { q: "Do I keep my phone number?", a: "Yes. Your number stays yours. Calls are forwarded to the agent when you choose, such as after hours or when your line is busy." },
  { q: "Aren't there cheaper tools?", a: "Yes. Self-serve tools exist, and you set them up and maintain them yourself. We build and test a system around your business, and you own it." },
  { q: "Does it replace my staff?", a: "No. It handles first contact and repetitive questions. Urgent or unusual situations go to a person, based on rules you set." },
  { q: "What if it gets something wrong?", a: "It only shares information you approve, and passes the question on when it is unsure. We test realistic and unclear scenarios before launch." },
  { q: "Will it work for my kind of business?", a: "The demonstrations cover HVAC, dental, and plumbing. The approach fits any business where customers call or message with similar needs. Book a call and we will look at yours." },
];

export function Faq() {
  return (
    <Section id="faq" className="pt-24 sm:pt-32">
      <Container>
        <SectionHeading eyebrow="Questions" title="The questions owners ask first." />
        <Reveal delay={0.05}>
          <div className="mt-10 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
            {faqs.map((f) => (
              <details key={f.q} className="group px-5 py-1 sm:px-6">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-foreground">
                  {f.q}
                  <span className="text-xl leading-none text-live transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="pb-5 text-base leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
