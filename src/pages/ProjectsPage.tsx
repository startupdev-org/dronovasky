import { PageBanner } from "../components/layout/PageBanner"
import { Projects } from "../components/sections/Projects"
import { company } from "../data/company"
import { pageProjects } from "../data/content"
import { usePageTitle } from "../hooks/usePageTitle"

export function ProjectsPage() {
  usePageTitle(`Portofoliu - ${company.name}`)

  return (
    <main>
      <PageBanner title="Portofoliul nostru" crumbs={[{ label: "acasă", href: "/" }, { label: "portofoliu" }]} />
      <Projects items={pageProjects} showIntro={false} />
    </main>
  )
}
