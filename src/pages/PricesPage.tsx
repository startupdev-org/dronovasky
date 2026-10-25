import { PageBanner } from "../components/layout/PageBanner"
import { Pricing } from "../components/sections/Pricing"
import { company } from "../data/company"
import { usePageTitle } from "../hooks/usePageTitle"

export function PricesPage() {
  usePageTitle(`Prețuri - ${company.name}`)

  return (
    <main>
      <PageBanner title="Prețuri" crumbs={[{ label: "acasă", href: "/" }, { label: "prețuri" }]} />
      <Pricing variant="page" />
    </main>
  )
}
