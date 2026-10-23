import { PageBanner } from "../components/layout/PageBanner"
import { Faqs } from "../components/sections/Faqs"
import { HowItWorks } from "../components/sections/HowItWorks"
import { Services } from "../components/sections/Services"
import { Testimonials } from "../components/sections/Testimonials"
import { WhyChoose } from "../components/sections/WhyChoose"
import { company } from "../data/company"
import { serviceCatalog } from "../data/content"
import { usePageTitle } from "../hooks/usePageTitle"

export function ServicesPage() {
  usePageTitle(`Servicii - ${company.name}`)

  return (
    <main>
      <PageBanner title="Serviciile noastre" crumbs={[{ label: "acasă", href: "/" }, { label: "servicii" }]} />
      <Services items={serviceCatalog} variant="page" />
      <HowItWorks />
      <WhyChoose />
      <Faqs />
      <Testimonials />
    </main>
  )
}
