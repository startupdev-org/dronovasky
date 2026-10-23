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
import { usePageTitle } from "../hooks/usePageTitle"
import { NotFoundPage } from "./NotFoundPage"

export function ServiceDetailsPage() {
  const { slug } = useParams()
  const service = serviceCatalog.find((item) => item.slug === slug)
  const { openVideo } = useOutletContext<SiteOutletContext>()
  const slides = serviceCatalog.slice(0, 3).map((item) => item.image)
  const [slide, setSlide] = useState(0)
  usePageTitle(service ? `${service.title} - Waveup` : "Page not found - Waveup")

  if (!service) return <NotFoundPage />

  return (
    <main>
      <PageBanner
        title={service.title}
        crumbs={[{ label: "home", href: "/" }, { label: "services", href: "/services" }, { label: service.title }]}
      />
      <section className="py-[100px]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-10">
            <aside className="lg:sticky lg:top-28 lg:self-start lg:mr-5">
              <CategoryList
                title="Services We Provide"
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
                  aria-label="Previous image"
                  onClick={() => setSlide((current) => (current - 1 + slides.length) % slides.length)}
                  className="absolute top-1/2 left-6 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white text-white transition-colors hover:bg-white hover:text-primary"
                >
                  <i className="fa-solid fa-chevron-left" />
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={() => setSlide((current) => (current + 1) % slides.length)}
                  className="absolute top-1/2 right-6 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white text-white transition-colors hover:bg-white hover:text-primary"
                >
                  <i className="fa-solid fa-chevron-right" />
                </button>
              </div>

              <div className="space-y-5 text-muted">
                <p>
                  {service.title} are essential for maintaining a hygienic, organized, and efficient workspace or living
                  environment. Our comprehensive cleaning solutions go beyond surface-level tidying to ensure every nook
                  and corner is thoroughly sanitized and refreshed. We utilize industry-leading cleaning techniques,
                  high-quality disinfectants, and advanced equipment to eliminate dust, grime, and harmful bacteria,
                  creating a healthier space for employees, customers, or residents. Our deep cleaning process covers
                  floors, carpets, windows, furniture, and high-touch surfaces.
                </p>
                <p>
                  Our deep cleaning process covers floors, carpets, windows, furniture, and high-touch surfaces, ensuring
                  a spotless and germ-free environment. Whether for offices, homes, or commercial spaces, our expert
                  cleaning team is committed to delivering exceptional results that enhance comfort, safety, and overall
                  well-being.
                </p>
              </div>

              <div className="mt-[60px]">
                <h2 className="mb-5 text-[32px] leading-tight font-semibold text-primary sm:text-[46px]">
                  Comprehensive care solutions
                </h2>
                <CheckList items={serviceCarePoints} columns className="my-10" />
                <p>
                  Our deep cleaning services go beyond surface-level tidiness, ensuring a thorough and hygienic
                  environment. With expert techniques and high-quality products, we deliver exceptional results tailored
                  to your specific needs.
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
                  Professional Step-by-Step Pool Care
                </h2>
                <p className="mb-10">
                  Our deep cleaning service removes dirt, debris, and algae buildup, ensuring your pool stays spotless
                  and safe. Using advanced techniques and eco-friendly solutions.
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
                  24/7 Customer Support Ready Whenever You Need Us. <SectionLink href="/contact">get free quote</SectionLink>
                </p>
              </div>

              <div className="mt-[60px]">
                <h2 className="mb-5 text-[32px] leading-tight font-semibold text-primary sm:text-[46px]">
                  Comprehensive pool care solutions
                </h2>
                <p>
                  Our deep cleaning service removes dirt, debris, and algae buildup, ensuring your pool stays spotless
                  and safe. Using advanced techniques and eco-friendly solutions, we restore water clarity and maintain
                  a hygienic swimming environment. Enjoy a fresh, crystal-clear pool with our expert care!
                </p>
                <div className="relative my-10 overflow-hidden rounded-xl">
                  <img src="/images/service-video-image.jpg" alt="Pool care video" className="aspect-[1/0.45] w-full object-cover sm:aspect-[1/0.338]" />
                  <span className="absolute inset-0 bg-primary/60" />
                  <PlayButton onClick={openVideo} size="lg" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <CheckList
                  items={[
                    "Custom Maintenance Plans Tailored to Your Pool's.",
                    "Using Eco-Friendly and Safe Cleaning Products for",
                  ]}
                />
              </div>

              <div className="mt-[60px]">
                <h2 className="mb-10 text-[32px] leading-tight font-semibold text-primary sm:text-[46px]">
                  Answer to your most common question
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
