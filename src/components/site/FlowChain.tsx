import { ArrowRight } from "lucide-react";

/**
 * Horizontal-on-desktop / wrapping workflow chain.
 * Arrows rotate to point down when the chain wraps on small screens.
 */
export function FlowChain({ steps, className = "" }: { steps: string[]; className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-2 gap-y-2 ${className}`}>
      {steps.map((step, index) => (
        <span key={step} className="flex items-center gap-2">
          <span className="rounded-full border border-white/15 bg-white/[0.055] px-3.5 py-1.5 text-xs font-medium text-foreground/85 sm:text-sm">
            {step}
          </span>
          {index < steps.length - 1 && (
            <ArrowRight className="size-4 shrink-0 rotate-90 text-white/40 md:rotate-0" />
          )}
        </span>
      ))}
    </div>
  );
}
