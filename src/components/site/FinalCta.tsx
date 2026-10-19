import { ArrowUp, MessageCircle, Mail } from "lucide-react";
import { BookDemoButton, GlassAnchorButton } from "./ActionButtons";
import { Container, Section } from "./Section";
import { Reveal } from "./Reveal";
import { hasBookingLink, siteConfig } from "@/lib/site-config";

export function FinalCta() {
  const showContact = Boolean(siteConfig.contactEmail);
  const showWhatsapp = Boolean(siteConfig.whatsappNumber);

  return (
    <Section id="book" className="pt-24 sm:pt-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] p-7 sm:p-12 lg:p-16 glass-strong">
            {/* Subtle surface wash — no glow, no colour */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-white/[0.025]"
            />

            <div className="relative max-w-3xl text-center sm:text-left">
              <p className="text-xs font-medium tracking-[0.22em] text-white/50 uppercase">
                Start the conversation
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[1.06] font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Let&apos;s automate the work that shouldn&apos;t be manual.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:mx-0">
                Bring the business process, customer conversation, or repetitive workflow that is
                costing your team time. We&apos;ll look at what can actually be automated.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <BookDemoButton className="w-full justify-center sm:w-auto" />
                <GlassAnchorButton href="#work" className="w-full sm:w-auto">
                  See it in action
                  <ArrowUp className="size-4 text-white/50" />
                </GlassAnchorButton>
              </div>

              <p className="mt-5 text-sm font-medium text-foreground/80">
                Built once. Owned by you. No monthly fee to us.
              </p>

              {!hasBookingLink() && (
                <p className="mt-6 inline-block rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-xs font-medium text-foreground/75">
                  [BOOKING LINK — REPLACE WITH REAL CAL.COM/CALENDLY URL]
                </p>
              )}

              {(showContact || showWhatsapp) && (
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {showContact && (
                    <a
                      href={`mailto:${siteConfig.contactEmail}`}
                      className="inline-flex h-10 justify-center items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-5 text-sm font-medium text-foreground transition-colors hover:bg-white/[0.13]"
                    >
                      <Mail className="size-4 text-white/60" />
                      Contact me
                    </a>
                  )}
                  {showWhatsapp && (
                    <a
                      href={`https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-5 text-sm font-medium text-foreground transition-colors hover:bg-white/[0.13]"
                    >
                      <MessageCircle className="size-4 text-live" />
                      WhatsApp
                    </a>
                  )}
                </div>
              )}

              <ul className="mt-8 grid gap-3 text-[15px] text-foreground/85 sm:grid-cols-3">
                {[
                  "You describe how customers reach you today.",
                  "We show you how it would work for a business like yours.",
                  "You decide whether it is worth building, with no pressure.",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-live" />
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-muted-foreground">A short call with a real person, over Zoom.</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
