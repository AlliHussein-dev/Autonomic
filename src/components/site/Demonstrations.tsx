import { motion } from "framer-motion";
import { useState } from "react";
import { FlowChain } from "./FlowChain";
import { Reveal } from "./Reveal";
import { SamplePanel, type SampleRow } from "./SamplePanel";
import { Container, Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { VideoFrame } from "./VideoFrame";
import { demos } from "@/lib/site-config";

type Demo = {
  industry: string;
  title: string;
  headline: string;
  problem: string[];
  scenario: string;
  capabilities: string[];
  workflow: string[];
  after: string;
  video: {
    title: string;
    poster: string;
    src: string;
    placeholder: string;
    caption: string;
  };
  sample: {
    label: string;
    title: string;
    rows: SampleRow[];
    note?: string;
    action?: string;
  };
};

const demonstrations: Demo[] = [
  {
    industry: "HVAC",
    title: "HVAC AI Receptionist",
    headline: "When the team is busy, the phone keeps working.",
    problem: [
      "Technicians are on jobs, the owner is driving, and the front desk is busy. A caller with a broken air conditioner rarely waits for a callback.",
      "Here, an AI agent answers and works through the questions a dispatcher would ask, then hands over a complete request.",
    ],
    scenario:
      "A homeowner calls because the air conditioner has stopped cooling. The agent opens with a recording notice and first asks whether the caller smells gas. It then collects the name, the problem, the type, brand, and age of the system, where it is located, whether the caller owns or rents, access notes such as pets and gate codes, how they heard about the company, the service address, phone, and email, and reads the email back to confirm. The dispatcher confirms the appointment window.",
    capabilities: [
      "Opens with a recording notice",
      "Asks about a gas smell before anything else",
      "Collects name and contact details",
      "Records the problem in the caller's words",
      "Captures system type, brand, and age",
      "Notes where the equipment is located",
      "Asks whether the caller owns or rents, and about access notes",
      "Collects the service address",
      "Reads the email back to confirm it",
      "Logs the request for the dispatcher",
      "Confirms next steps without diagnosing the problem",
    ],
    workflow: [
      "Customer calls",
      "AI answers",
      "Questions asked",
      "Details captured live",
      "Request logged",
      "Dispatcher confirms",
    ],
    after:
      "The dispatcher receives a complete request instead of a voicemail, and contacts the customer to confirm the appointment window.",
    video: {
      title: "HVAC AI receptionist — demonstration video",
      poster: demos.hvac.poster,
      src: demos.hvac.videoSrc,
      placeholder: demos.hvac.videoPlaceholder,
      caption: demos.hvac.caption,
    },
    sample: {
      label: "Alert sent to your team",
      title: "NEW HVAC SERVICE REQUEST",
      rows: [
        { label: "Caller", value: "Marcus Bell" },
        { label: "Request", value: "AC runs but isn't blowing cool air, since last night" },
        { label: "System", value: "AC, Trane, about 8 to 9 years old" },
        { label: "Equipment", value: "Outside, in the backyard" },
        { label: "Caller is", value: "Homeowner" },
        { label: "Access notes", value: "Gate code, friendly dog" },
        { label: "Address", value: "Captured" },
        { label: "Contact", value: "Phone and email captured" },
        { label: "Status", value: "Awaiting dispatcher", tone: "info" },
      ],
      action: "View Request",
    },
  },
  {
    industry: "Dental",
    title: "Dental AI Receptionist",
    headline: "Turn inquiries into organized conversations.",
    problem: [
      "A dental practice may have a receptionist helping existing patients while new patients are calling, asking questions, or requesting appointments. Every one of those callers is deciding how easy this practice is to deal with.",
      "The AI system handles the initial conversation according to the practice's approved information and workflow, so the front desk can stay focused on the people in front of them.",
    ],
    scenario:
      "The agent greets callers on behalf of the practice and works from a prompt and approved information the practice controls. This recording is a walkthrough of how that agent is set up. A new patient call, such as a cleaning request, follows the flow below.",
    capabilities: [
      "Identifying new or existing patients",
      "Understanding the reason for the call",
      "Answering approved practice FAQs",
      "Collecting contact information",
      "Collecting appointment preferences",
      "Capturing the type of request",
      "Routing the request appropriately",
      "Initiating an appointment workflow",
      "Escalating questions that require staff",
      "Providing only approved information",
      "Avoiding unsupported medical advice",
    ],
    workflow: [
      "Patient contacts practice",
      "AI answers",
      "Identifies request",
      "Collects information",
      "Handles approved questions",
      "Appointment/request workflow",
      "Staff or scheduling",
    ],
    after: "The request reaches the right place as a structured record — new-patient status, reason, preferences, and timing already organized — instead of a sticky note, an interrupted voicemail, or a message lost in a busy afternoon.",
    video: {
      title: "Dental AI receptionist — demonstration video",
      poster: demos.dental.poster,
      src: demos.dental.videoSrc,
      placeholder: demos.dental.videoPlaceholder,
      caption: demos.dental.caption,
    },
    sample: {
      label: "Inquiry logged for your team",
      title: "NEW PATIENT INQUIRY",
      rows: [
        { label: "Type", value: "New patient" },
        { label: "Reason", value: "Cleaning / consultation" },
        { label: "Preferred day", value: "Monday" },
        { label: "Preferred time", value: "10:00 AM" },
        { label: "Status", value: "Appointment requested", tone: "info" },
      ],
    },
  },
  {
    industry: "Plumbing",
    title: "Plumbing AI Receptionist",
    headline: "Don't let urgent calls disappear.",
    problem: [
      "Plumbing emergencies do not wait for office hours. A flooding sink at night is the call that goes to whoever answers first.",
      "Here, an AI agent answers, logs the job, books the visit, and alerts the team straight away.",
    ],
    scenario:
      "A caller reports a sink that is leaking and flooding. The agent takes the details and books an appointment. The business then sees the result in three places: a new row in its lead sheet with the transcript, a booking in its calendar, and an instant message with the key details.",
    capabilities: [
      "Answers the call",
      "Logs the lead with name, address, and problem",
      "Records urgency and the preferred window",
      "Books the appointment in a calendar",
      "Saves the call transcript with the lead",
      "Sends an instant message to the team",
      "Keeps a running lead log in a spreadsheet",
    ],
    workflow: [
      "Customer calls",
      "AI answers",
      "Lead logged",
      "Appointment booked",
      "Team notified",
    ],
    after:
      "The team sees the job the moment the call ends, and the visit is already on the calendar.",
    video: {
      title: "Plumbing AI receptionist — demonstration video",
      poster: demos.plumbing.poster,
      src: demos.plumbing.videoSrc,
      placeholder: demos.plumbing.videoPlaceholder,
      caption: demos.plumbing.caption,
    },
    sample: {
      label: "Alert sent to your team",
      title: "NEW PLUMBING LEAD",
      rows: [
        { label: "Caller", value: "Dylan" },
        { label: "Issue", value: "Sink leaking and flooding", tone: "urgent" },
        { label: "Address", value: "Captured" },
        { label: "Appointment", value: "Booked", tone: "info" },
        { label: "Team alert", value: "Instant message sent" },
      ],
    },
  },
];

function DemoBlock({ demo }: { demo: Demo }) {
  return (
    <Reveal>
      <article className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] sm:mt-10">
        <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-2 lg:gap-14 lg:p-10">
          {/* Story: industry, problem, scenario, capabilities, after */}
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-foreground px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-background">
                {demo.industry}
              </span>
            </div>

            <p className="mt-6 text-[11px] font-medium tracking-[0.18em] text-white/50 uppercase">
              {demo.title}
            </p>
            <h3 className="mt-2 font-display text-2xl leading-tight font-semibold tracking-tight text-foreground sm:text-3xl">
              {demo.headline}
            </h3>

            <div className="mt-6 space-y-4">
              {demo.problem.slice(0, 1).map((paragraph) => (
                <p key={paragraph} className="text-[15px] leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
            <details className="group mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between text-sm font-medium text-foreground/90">
                What the agent handles
                <span className="text-lg leading-none text-live transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="pt-2">

            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/80">
                Detailed scenario
              </h4>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                {demo.scenario}
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/80">
                Capabilities demonstrated
              </h4>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {demo.capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="flex items-start gap-2.5 text-sm leading-snug text-foreground/85"
                  >
                    <span className="mt-[0.4rem] size-1.5 shrink-0 rounded-full bg-white/35" />
                    {capability}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 border-t border-border/70 pt-5">
              <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/80">
                What happens after the conversation
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{demo.after}</p>
            </div>
              </div>
            </details>
          </div>

          {/* Proof: video, workflow, sample output */}
          <div className="min-w-0">
            <VideoFrame {...demo.video} />

            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/80">
                Workflow
              </h4>
              <FlowChain steps={demo.workflow} className="mt-3" />
            </div>

            <div className="mt-6">
              <SamplePanel {...demo.sample} />
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Demonstrations() {
  const [active, setActive] = useState(0);
  return (
    <Section id="work" className="pt-24 sm:pt-32">
      <Container>
        <SectionHeading
          eyebrow="Featured demonstrations"
          title="See the automation in action."
          lead="Instead of asking you to imagine what an AI system could do, these demonstrations show the type of systems Autonomic can build for real business workflows."
        />


        <div role="tablist" aria-label="Demonstrations" className="mt-10 flex flex-wrap gap-2">
          {demonstrations.map((d, i) => (
            <button
              key={d.title}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`relative min-h-11 rounded-full border px-5 text-sm font-medium transition-colors ${
                active === i ? "border-transparent text-background" : "border-white/15 text-foreground/80 hover:bg-white/[0.06]"
              }`}
            >
              {active === i && (
                <motion.span layoutId="demo-tab" className="absolute inset-0 rounded-full bg-foreground" transition={{ type: "spring", stiffness: 420, damping: 34 }} />
              )}
              <span className="relative z-10">{d.industry}</span>
            </button>
          ))}
        </div>
        <DemoBlock key={demonstrations[active].title} demo={demonstrations[active]} />
      </Container>
    </Section>
  );
}
