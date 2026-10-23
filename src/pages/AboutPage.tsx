import { useOutletContext } from "react-router-dom"
import { PageBanner } from "../components/layout/PageBanner"
import type { SiteOutletContext } from "../components/layout/SiteLayout"
import { About } from "../components/sections/About"
import { Approach } from "../components/sections/Approach"
import { Benefits } from "../components/sections/Benefits"
import { Faqs } from "../components/sections/Faqs"
import { Promise } from "../components/sections/Promise"
import { Team } from "../components/sections/Team"
import { Testimonials } from "../components/sections/Testimonials"
import { WhatWeDo } from "../components/sections/WhatWeDo"
import { WhyChoose } from "../components/sections/WhyChoose"
import { company } from "../data/company"
import { usePageTitle } from "../hooks/usePageTitle"

export function AboutPage() {
  const { openVideo } = useOutletContext<SiteOutletContext>()
  usePageTitle(`Despre noi - ${company.name}`)

  return (
    <main>
      <PageBanner title="Despre noi" crumbs={[{ label: "acasă", href: "/" }, { label: "despre noi" }]} />
      <About ctaHref="/contact" ctaLabel="contactează-ne" />
      <Approach />
      <WhatWeDo />
      <Benefits onPlay={openVideo} />
      <Team />
      <Promise />
      <WhyChoose />
      <Faqs />
      <Testimonials />
    </main>
  )
}
