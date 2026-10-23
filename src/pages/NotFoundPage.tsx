import { PageBanner } from "../components/layout/PageBanner"
import { Button } from "../components/ui/Button"
import { Container } from "../components/ui/SectionHeading"
import { usePageTitle } from "../hooks/usePageTitle"

export function NotFoundPage() {
  usePageTitle("Page not found - Waveup")

  return (
    <main>
      <PageBanner title="Page not found" crumbs={[{ label: "home", href: "/" }, { label: "404 error page" }]} />
      <section className="py-[100px]">
        <Container className="text-center">
          <img src="/images/404-error-img.png" alt="" className="mx-auto mb-[30px] w-full max-w-[60%]" />
          <h2 className="mb-5 text-[32px] font-semibold text-primary sm:text-[46px]">Oops! page not found</h2>
          <p className="mb-5">The page you are looking for does not exist.</p>
          <Button href="/">back to home</Button>
        </Container>
      </section>
    </main>
  )
}
