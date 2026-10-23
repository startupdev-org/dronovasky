import { useLocation } from "react-router-dom"
import { PageBanner } from "../components/layout/PageBanner"
import { CategoryList, HelpCard } from "../components/layout/Sidebar"
import { Accordion } from "../components/ui/Accordion"
import { Container } from "../components/ui/SectionHeading"
import { company } from "../data/company"
import { faqGroups } from "../data/content"
import { usePageTitle } from "../hooks/usePageTitle"

export function FaqPage() {
  const { hash } = useLocation()
  usePageTitle(`Întrebări frecvente - ${company.name}`)

  return (
    <main>
      <PageBanner
        title="Întrebări frecvente"
        crumbs={[{ label: "acasă", href: "/" }, { label: "întrebări frecvente" }]}
      />
      <section className="py-[100px]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-10">
            <aside className="lg:sticky lg:top-28 lg:self-start lg:mr-5">
              <CategoryList
                activeHref={hash || "#general"}
                items={faqGroups.map((group) => ({ label: group.title, href: `#${group.id}` }))}
              />
              <HelpCard />
            </aside>
            <div className="space-y-[60px]">
              {faqGroups.map((group, index) => (
                <section key={group.id} id={group.id}>
                  <h2 className="mb-8 text-[32px] leading-tight font-semibold text-primary sm:text-[46px]">{group.title}</h2>
                  <Accordion items={group.items} initial={index === 0 ? 1 : -1} />
                </section>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
