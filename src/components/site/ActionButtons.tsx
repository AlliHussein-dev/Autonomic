import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bookingHref, hasBookingLink } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type BookDemoButtonProps = {
  className?: string;
  label?: string;
  size?: "default" | "sm" | "lg";
};

/** Primary conversion — opens the booking link in a new tab once it is supplied. */
export function BookDemoButton({
  className,
  label = "Want to know more?",
  size = "lg",
}: BookDemoButtonProps) {
  const external = hasBookingLink();
  return (
    <Button asChild size={size} className={cn("btn-shine relative min-h-12 overflow-hidden rounded-full px-7 text-[15px] font-medium sm:min-w-[13.5rem] [&_svg]:transition-transform hover:[&_svg]:-translate-y-0.5 hover:[&_svg]:translate-x-0.5", className)}>
      <a
        href={bookingHref}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <ArrowUpRight />
        {label}
      </a>
    </Button>
  );
}

/** Secondary surface button used for in-page jumps. */
export function GlassAnchorButton({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full hover:-translate-y-0.5 border border-white/15 bg-white/[0.06] px-7 text-[15px] sm:min-w-[13.5rem] font-medium text-foreground transition-colors hover:bg-white/[0.11]",
        className,
      )}
    >
      {children}
    </a>
  );
}
