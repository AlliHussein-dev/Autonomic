import { cn } from "@/lib/utils";

export type SampleRow = {
  label: string;
  value: string;
  tone?: "high" | "urgent" | "info";
};

type SamplePanelProps = {
  /** e.g. "SAMPLE DEMONSTRATION ALERT" */
  label: string;
  /** e.g. "NEW HVAC LEAD" */
  title: string;
  rows: SampleRow[];
  /** Optional footnote shown under the panel. */
  note?: string;
  /** Optional mock action shown as part of the sample interface. */
  action?: string;
};

const toneClasses: Record<NonNullable<SampleRow["tone"]>, string> = {
  high: "rounded-full bg-amber-400/15 px-2.5 py-0.5 text-xs font-semibold text-amber-300",
  urgent: "rounded-full bg-rose-400/15 px-2.5 py-0.5 text-xs font-semibold text-rose-300",
  info: "rounded-full bg-white/[0.1] px-2.5 py-0.5 text-xs font-semibold text-white/75",
};

/** Polished notification / output interface. */
export function SamplePanel({ label, title, rows, note, action }: SamplePanelProps) {
  return (
    <div className="font-mono rounded-2xl p-5 glass-strong">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-[10px] font-semibold tracking-[0.2em] text-white/55 uppercase">
          {label}
        </p>
      </div>

      <h4 className="mt-3 font-display text-lg font-semibold tracking-tight text-foreground">
        {title}
      </h4>

      <dl className="mt-4 divide-y divide-white/10">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between gap-4 py-2.5">
            <dt className="text-sm text-muted-foreground">{row.label}</dt>
            <dd className="text-right">
              {row.tone ? (
                <span className={cn(toneClasses[row.tone])}>{row.value}</span>
              ) : (
                <span className="text-sm font-medium text-foreground/90">{row.value}</span>
              )}
            </dd>
          </div>
        ))}
      </dl>

      {action && (
        <span
          aria-hidden="true"
          className="mt-4 inline-flex h-9 items-center gap-2 rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground"
        >
          {action}
        </span>
      )}

      {note && <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{note}</p>}
    </div>
  );
}
