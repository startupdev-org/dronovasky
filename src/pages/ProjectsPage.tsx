import { PageBanner } from "../components/layout/PageBanner"
import { Projects } from "../components/sections/Projects"
import { pageProjects } from "../data/content"
import { usePageTitle } from "../hooks/usePageTitle"

export function ProjectsPage() {
  usePageTitle("Our Projects - Waveup")

  return (
    <main>
      <PageBanner title="Our projects" crumbs={[{ label: "home", href: "/" }, { label: "projects" }]} />
      <Projects items={pageProjects} showIntro={false} />
    </main>
  )
}
