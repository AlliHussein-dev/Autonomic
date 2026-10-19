import type { LucideIcon } from "lucide-react";
import { Bot, ListChecks, MessageSquare, Phone, ScanText, Workflow, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

type FlowNode = {
  icon: LucideIcon;
  label: string;
  detail: string;
};

const flowNodes: FlowNode[] = [
  { icon: Phone, label: "Customer", detail: "Calls, messages, or chats" },
  { icon: Bot, label: "AI agent", detail: "Answers and holds the conversation" },
  { icon: ScanText, label: "Understands request", detail: "Extracts reason, details, and intent" },
  { icon: ListChecks, label: "Qualifies", detail: "Applies your qualification rules" },
  { icon: Zap, label: "Takes action", detail: "Books, notifies, or escalates" },
  { icon: Workflow, label: "Business workflow", detail: "Lead created · team notified · follow-up" },
];

const channels = [
  { icon: Phone, label: "Voice" },
  { icon: MessageSquare, label: "Chat" },
  { icon: Workflow, label: "Follow-up" },
];

const eventLog = [
  { time: "09:41", event: "Conversation handled", tag: "Voice agent" },
  { time: "09:41", event: "Lead created — 6 details captured", tag: "Lead record" },
  { time: "09:41", event: "Notification sent to the team", tag: "Workflow" },
];

/** Hero visual: a real-looking automation graph rather than abstract AI art. */
export function WorkflowVisual() {
  return (
    <Reveal delay={0.15} className="w-full">
      <div className="relative w-full rounded-3xl p-5 glass sm:p-6">
        {/* Panel header */}
        <div className="flex items-center justify-between gap-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Autonomic · automation graph
          </p>
          <span className="inline-flex items-center gap-2 rounded-full border border-live/25 bg-live/10 px-2.5 py-1 text-[11px] font-medium text-live">
            <span className="relative flex size-1.5">
              <span className="soft-pulse absolute inline-flex size-full rounded-full bg-live" />
              <span className="relative inline-flex size-1.5 rounded-full bg-live" />
            </span>
            Active
          </span>
        </div>

        {/* Inbound channels */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {channels.map((channel) => (
            <span
              key={channel.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-foreground/70"
            >
              <channel.icon className="size-3.5 text-white/70" />
              {channel.label}
            </span>
          ))}
          <span className="text-xs text-muted-foreground">one system, any entry point</span>
        </div>

        {/* Flow sequence */}
        <ol className="mt-5">
          {flowNodes.map((node, index) => (
            <li key={node.label}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + index * 0.09, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.045] px-3.5 py-3 sm:px-4"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06]">
                  <node.icon className="size-4 text-white/75" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold tracking-tight text-foreground">
                    {node.label}
                  </span>
                  <span className="block text-xs leading-snug text-muted-foreground">
                    {node.detail}
                  </span>
                </span>
                <span className="ml-auto hidden font-display text-[11px] text-muted-foreground/70 sm:block">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </motion.div>
              {index < flowNodes.length - 1 && (
                <div className="mx-auto h-5 w-px bg-gradient-to-b from-white/30 to-white/10 flow-rail" />
              )}
            </li>
          ))}
        </ol>

        {/* Event log */}          <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.045] p-3.5">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            After the conversation
          </p>
          <ul className="mt-2 space-y-1.5">
            {eventLog.map((row) => (
              <li key={row.event} className="flex items-center gap-2 text-xs text-foreground/80">
                <span className="font-display tabular-nums text-muted-foreground">{row.time}</span>
                <span className="truncate">{row.event}</span>
                <span className="ml-auto shrink-0 rounded-full bg-white/[0.09] px-2 py-0.5 text-[10px] font-medium text-white/65">
                  {row.tag}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}
