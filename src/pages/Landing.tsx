import { MotionConfig, motion } from "framer-motion";
import { Capabilities } from "@/components/site/Capabilities";
import { Demonstrations } from "@/components/site/Demonstrations";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { Founder } from "@/components/site/Founder";
import { Hero } from "@/components/site/Hero";
import { Industries } from "@/components/site/Industries";
import { Nav } from "@/components/site/Nav";
import { Ownership } from "@/components/site/Ownership";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { Problem } from "@/components/site/Problem";
import { Process } from "@/components/site/Process";
import { WhyUs } from "@/components/site/WhyUs";

export default function Landing() {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative isolate min-h-screen overflow-x-clip bg-background"
      >
        <ScrollProgress />
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="aurora aurora-a" />
          <div className="aurora aurora-b" />
        </div>
        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-foreground px-4 py-2 text-background focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">
          <Hero />
          <Problem />
          <Capabilities />
          <Demonstrations />
          <Ownership />
          <WhyUs />
          <Industries />
          <Process />
          <Faq />
          <Founder />
          <FinalCta />
        </main>
        <Footer />
      </motion.div>
    </MotionConfig>
  );
}
