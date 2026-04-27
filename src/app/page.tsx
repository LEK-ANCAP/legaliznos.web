
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";

import { FloatingContact } from "@/components/FloatingContact";

export default function Home() {
  return (
    <>

      <main className="flex-1">
        <Hero />
        <Services />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>

      <FloatingContact />
    </>
  );
}
