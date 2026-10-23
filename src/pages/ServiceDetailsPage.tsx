import { useState } from "react"
import { useOutletContext, useParams } from "react-router-dom"
import { PageBanner } from "../components/layout/PageBanner"
import { CategoryList, HelpCard } from "../components/layout/Sidebar"
import type { SiteOutletContext } from "../components/layout/SiteLayout"
import { Accordion } from "../components/ui/Accordion"
import { CheckList, Container, SectionLink } from "../components/ui/SectionHeading"
import { PlayButton } from "../components/ui/VideoModal"
import {
  detailFaqs,
  serviceCarePoints,
  serviceCatalog,
  serviceDetailSteps,
  serviceSolutions,
  sidebarServices,
} from "../data/content"
import { company } from "../data/company"
import { usePageTitle } from "../hooks/usePageTitle"
import { NotFoundPage } from "./NotFoundPage"

export function ServiceDetailsPage() {
  const { slug } = useParams()
  const service = serviceCatalog.find((item) => item.slug === slug)
  const { openVideo } = useOutletContext<SiteOutletContext>()
  const slides = serviceCatalog.slice(0, 3).map((item) => item.image)
  const [slide, setSlide] = useState(0)
  usePageTitle(service ? `${service.title} - ${company.name}` : `Pagina nu a fost găsită - ${company.name}`)

  if (!service) return <NotFoundPage />

  return (
    <main>
      <PageBanner
        title={service.title}
        crumbs={[{ label: "acasă", href: "/" }, { label: "servicii", href: "/services" }, { label: service.title }]}
      />
      <section className="py-[100px]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-10">
            <aside className="lg:sticky lg:top-28 lg:self-start lg:mr-5">
              <CategoryList
                title="Serviciile noastre"
                activeHref={`/services/${service.slug}`}
                items={sidebarServices.map((item) => ({
                  label: item.title,
                  href: `/services/${item.slug}`,
                }))}
              />
              <HelpCard />
            </aside>

            <div>
              <div className="relative mb-10 overflow-hidden rounded-xl">
                <img src={slides[slide]} alt="" className="aspect-[1/0.574] w-full object-cover" />
                <button
                  type="button"
                  aria-label="Imaginea anterioară"
                  onClick={() => setSlide((current) => (current - 1 + slides.length) % slides.length)}
                  className="absolute top-1/2 left-6 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white text-white transition-colors hover:bg-white hover:text-primary"
                >
                  <i className="fa-solid fa-chevron-left" />
                </button>
                <button
                  type="button"
                  aria-label="Imaginea următoare"
                  onClick={() => setSlide((current) => (current + 1) % slides.length)}
                  className="absolute top-1/2 right-6 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white text-white transition-colors hover:bg-white hover:text-primary"
                >
                  <i className="fa-solid fa-chevron-right" />
                </button>
              </div>

              <div className="space-y-5 text-muted">
                <p>
                  {service.title} este realizată cu atenție la fiecare detaliu. Folosim echipamente profesionale și soluții potrivite pentru fiecare suprafață, pentru a elimina murdăria, praful și urmele persistente.
                </p>
                <p>
                  Ne ocupăm de case, oficii, spații comerciale și clădiri, astfel încât spațiul să rămână curat, îngrijit și pregătit de utilizare.
                </p>
              </div>

              <div className="mt-[60px]">
                <h2 className="mb-5 text-[32px] leading-tight font-semibold text-primary sm:text-[46px]">
                  Soluții complete de curățenie
                </h2>
                <CheckList items={serviceCarePoints} columns className="my-10" />
                <p>
                  Alegem metoda și produsele potrivite în funcție de lucrare, pentru rezultate eficiente și de durată.
                </p>
                <div className="mt-10 grid gap-8 rounded-xl bg-accent p-[30px] sm:grid-cols-3">
                  {serviceSolutions.map((item) => (
                    <article key={item.title}>
                      <img src={item.icon} alt="" className="mb-5 h-[60px] w-[60px]" />
                      <h3 className="text-xl leading-snug font-semibold text-white">{item.title}</h3>
                    </article>
                  ))}
                </div>
              </div>

              <div className="mt-[60px]">
                <h2 className="mb-5 text-[32px] leading-tight font-semibold text-primary sm:text-[46px]">
                  Cum realizăm lucrarea
                </h2>
                <p className="mb-10">
                  Un proces simplu, de la solicitarea ofertei până la rezultatul final.
                </p>
                <div className="grid gap-[30px] md:grid-cols-3">
                  {serviceDetailSteps.map((step) => (
                    <article key={step.no} className="overflow-hidden rounded-xl border border-line bg-white">
                      <div className="relative">
                        <img src={step.image} alt="" className="aspect-[1/0.66] w-full object-cover" />
                        <div className="absolute bottom-0 left-5 z-10 flex h-10 w-10 translate-y-1/2 items-center justify-center rounded-md bg-accent text-white">
                          <span className="text-2xl leading-none font-semibold">{step.no}</span>
                        </div>
                      </div>
                      <div className="px-5 pt-12 pb-5">
                        <h3 className="mb-2.5 text-xl font-semibold text-primary">{step.title}</h3>
                        <p className="m-0">{step.text}</p>
                      </div>
                    </article>
                  ))}
                </div>
                <p className="mt-8 mb-0 text-center text-muted">
                  Suntem gata să te ajutăm. <SectionLink href="/contact">Solicită o ofertă</SectionLink>
                </p>
              </div>

              <div className="mt-[60px]">
                <h2 className="mb-5 text-[32px] leading-tight font-semibold text-primary sm:text-[46px]">
                  Curățenie realizată profesionist
                </h2>
                <p>
                  Curățăm praful de construcție, murdăria depusă și urmele de pe geamuri, fațade și pardoseli, pentru un rezultat impecabil.
                </p>
                <div className="relative my-10 overflow-hidden rounded-xl">
                  <img src="/images/service-video-image.jpg" alt="Video despre serviciile noastre" className="aspect-[1/0.45] w-full object-cover sm:aspect-[1/0.338]" />
                  <span className="absolute inset-0 bg-primary/60" />
                  <PlayButton onClick={openVideo} size="lg" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <CheckList
                  items={[
                    "Echipamente profesionale și soluții potrivite pentru fiecare suprafață.",
                    "Evaluare la necesitate și ofertă calculată individual.",
                  ]}
                />
              </div>

              <div className="mt-[60px]">
                <h2 className="mb-10 text-[32px] leading-tight font-semibold text-primary sm:text-[46px]">
                  Răspunsuri la cele mai frecvente întrebări
                </h2>
                <Accordion items={detailFaqs} />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
