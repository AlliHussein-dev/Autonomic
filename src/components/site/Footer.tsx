import { BookDemoButton } from "./ActionButtons";
import { ThemeSwitch } from "./ThemeToggle";
import { Container } from "./Section";
import { Wordmark } from "./Nav";
import { bookingHref, hasBookingLink } from "@/lib/site-config";

const footerLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Why us", href: "#why" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#book" },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/70 pt-14 pb-10 sm:mt-32">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] lg:gap-14">
          <div className="max-w-md">
            <Wordmark />
            <p className="mt-4 font-display text-lg font-medium tracking-tight text-foreground">
              AI automation for businesses.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Voice agents, chat agents, and follow-up workflows built around the way businesses
              actually operate.
            </p>
            <div className="mt-6">
              <BookDemoButton label="Know more" size="sm" className="w-full justify-center sm:w-auto" />
            <ThemeSwitch className="mt-4" />
            </div>
          </div>

          <div className="md:justify-self-end">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Navigate
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-10 gap-y-2.5 sm:flex sm:flex-col sm:gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-foreground/75 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={bookingHref}
                  {...(hasBookingLink()
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="text-sm font-medium text-foreground/75 transition-colors hover:text-foreground"
                >
                  Want to know more?
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Autonomic. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
