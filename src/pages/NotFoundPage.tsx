import { PageBanner } from "../components/layout/PageBanner"
import { Button } from "../components/ui/Button"
import { Container } from "../components/ui/SectionHeading"
import { company } from "../data/company"
import { usePageTitle } from "../hooks/usePageTitle"

export function NotFoundPage() {
  usePageTitle(`Pagina nu a fost găsită - ${company.name}`)

  return (
    <main>
      <PageBanner title="Pagina nu a fost găsită" crumbs={[{ label: "acasă", href: "/" }, { label: "eroare 404" }]} />
      <section className="py-[100px]">
        <Container className="text-center">
          <img src="/images/404-error-img.png" alt="" className="mx-auto mb-[30px] w-full max-w-[60%]" />
          <h2 className="mb-5 text-[32px] font-semibold text-primary sm:text-[46px]">Pagina nu a fost găsită</h2>
          <p className="mb-5">Pagina pe care o cauți nu există.</p>
          <Button href="/">înapoi acasă</Button>
        </Container>
      </section>
    </main>
  )
}
