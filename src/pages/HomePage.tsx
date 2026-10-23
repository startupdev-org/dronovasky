import { useOutletContext } from "react-router-dom"
import type { SiteOutletContext } from "../components/layout/SiteLayout"
import { About } from "../components/sections/About"
import { Benefits } from "../components/sections/Benefits"
import { Blog } from "../components/sections/Blog"
import { Expertise } from "../components/sections/Expertise"
import { Faqs } from "../components/sections/Faqs"
import { Hero } from "../components/sections/Hero"
import { HowItWorks } from "../components/sections/HowItWorks"
import { Pricing } from "../components/sections/Pricing"
import { Projects } from "../components/sections/Projects"
import { Services } from "../components/sections/Services"
import { Testimonials } from "../components/sections/Testimonials"
import { WhyChoose } from "../components/sections/WhyChoose"
import { usePageTitle } from "../hooks/usePageTitle"

export function HomePage() {
  const { openVideo } = useOutletContext<SiteOutletContext>()
  usePageTitle("Waveup - Pool Cleaning Services")

  return (
    <main>
      <Hero onPlay={openVideo} />
      <About />
      <Services />
      <WhyChoose />
      <Benefits onPlay={openVideo} />
      <Projects />
      <HowItWorks />
      <Expertise />
      <Pricing />
      <Testimonials />
      <Faqs />
      <Blog />
    </main>
  )
}
