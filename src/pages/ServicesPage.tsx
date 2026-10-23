import { PageBanner } from "../components/layout/PageBanner"
import { Faqs } from "../components/sections/Faqs"
import { HowItWorks } from "../components/sections/HowItWorks"
import { Services } from "../components/sections/Services"
import { Testimonials } from "../components/sections/Testimonials"
import { WhyChoose } from "../components/sections/WhyChoose"
import { serviceCatalog } from "../data/content"
import { usePageTitle } from "../hooks/usePageTitle"

export function ServicesPage() {
  usePageTitle("Our Services - Waveup")

  return (
    <main>
      <PageBanner title="Our services" crumbs={[{ label: "home", href: "/" }, { label: "services" }]} />
      <Services items={serviceCatalog} variant="page" />
      <HowItWorks />
      <WhyChoose />
      <Faqs />
      <Testimonials />
    </main>
  )
}
