/**
 * Central site configuration.
 *
 * Replace the placeholder values below as soon as the real assets are supplied:
 * - bookingUrl: real Cal.com / Calendly link (must start with https://)
 * - founderPhoto: drop the real photo into /public (e.g. "/alli.jpg") and set the path
 * - demos.*.videoSrc: the final demonstration recordings (mp4/webm URLs or public paths)
 *
 * Nothing here is invented — placeholders stay visible on the page until replaced.
 */

export const siteConfig = {
  name: "Autonomic",
  positioning: "AI automation for businesses.",
  /** Replace with the real Cal.com / Calendly URL. */
  bookingUrl: "https://cal.com/alli-official-koc12j/call-with-autonomic",
  /** Path to the real founder photo in /public. Empty renders a labelled placeholder. */
  founderPhoto: "/alli.jpg",
  /** Optional — only rendered when supplied. Never shown as visible text. */
  contactEmail: "officialalli6286@gmail.com",
  /** Optional — only rendered when supplied. Never shown as visible text. */
  whatsappNumber: "",
} as const;


/** Featured demonstration media — replace `videoSrc` with the final recordings. */
export const demos = {
  hvac: {
    poster: "/videos/hvac-poster.jpg",
    videoSrc: "/videos/hvac.mp4",
    videoPlaceholder: "[HVAC DEMO VIDEO — REPLACE WITH FINAL VIDEO]",
    caption: "Recorded demonstration of the agent handling a call from a made-up caller.",
  },
  dental: {
    poster: "/videos/dental-poster.jpg",
    videoSrc: "/videos/dental.mp4",
    videoPlaceholder: "[DENTAL DEMO VIDEO — REPLACE WITH FINAL VIDEO]",
    caption: "Recorded walkthrough of how the agent is set up.",
  },
  plumbing: {
    poster: "/videos/plumbing-poster.jpg",
    videoSrc: "/videos/plumbing.mp4",
    videoPlaceholder: "[PLUMBING DEMO VIDEO — REPLACE WITH FINAL VIDEO]",
    caption: "Recorded demonstration of the call, the lead log, the booking, and the instant alert.",
  },
} as const;

export function hasBookingLink(): boolean {
  return /^https?:\/\//i.test(siteConfig.bookingUrl);
}

/** Where every "Want to know more?" button points. Falls back to the closing CTA until a real link exists. */
export const bookingHref: string = hasBookingLink()
  ? siteConfig.bookingUrl
  : siteConfig.contactEmail
    ? `mailto:${siteConfig.contactEmail}?subject=Call%20request`
    : "#book";

/** Pricing facts used by the comparison and FAQ. Update here only.
 *  Usage is an ESTIMATE in CAD per month, built from Retell's published USD per-minute prices:
 *  voice infra 0.055 + voice 0.015 + LLM 0.064 + telephony 0.015 + guardrails/denoising 0.01 = about 0.159 USD per minute,
 *  times 1.43 CAD per USD, for 150 to 300 minutes a month, plus a 2 USD number. Re-check before launch. */
export const pricing = {
  currency: "CAD",
  startingSetup: 1500,
  usageEstimate: 50,
  usageRange: "$30 to $70",
  usdToCad: 1.43,
  monthlyExamples: [250, 500, 800, 1000],
} as const;
