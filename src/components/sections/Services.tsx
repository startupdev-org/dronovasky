import { Link } from "react-router-dom"
import { services, type ServiceItem } from "../../data/content"
import { Container, SectionHeading, SectionLink } from "../ui/SectionHeading"

type ServicesProps = {
  items?: ServiceItem[]
  variant?: "home" | "page"
}

export function Services({ items = services, variant = "home" }: ServicesProps) {
  const page = variant === "page"

  return (
    <section
      id={page ? undefined : "services"}
      className={
        page
          ? "bg-secondary bg-[url('/images/light-bg-section-shape.png')] bg-cover bg-center pt-[100px] pb-[70px]"
          : "mx-auto max-w-[1880px] rounded-xl bg-secondary bg-[url('/images/light-bg-section-shape.png')] bg-cover bg-center py-[100px]"
      }
    >
      <Container>
        {page ? null : (
          <div className="mb-20">
            <SectionHeading
              align="center"
              eyebrow="services"
              title="Professional pool cleaning and maintenance services"
            />
          </div>
        )}

        <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-4">
          {items.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="group relative block overflow-hidden rounded-xl"
            >
              <img
                src={service.image}
                alt={service.title}
                className="aspect-[1/1.34] w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,34,69,0)_62%,rgba(4,34,69,0.85)_90%)]" />
              <div className="absolute inset-x-[25px] bottom-[25px] z-10 flex items-center justify-between gap-2.5">
                <h3 className="max-w-[calc(100%-50px)] text-xl leading-snug font-semibold text-white">{service.title}</h3>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white text-white transition-colors group-hover:bg-white group-hover:text-primary">
                  <i className="fa-solid fa-arrow-right -rotate-45 transition-transform group-hover:rotate-0" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {page ? null : (
          <p className="mt-[30px] mb-0 text-center text-muted">
            <span className="mr-2.5 inline-block rounded-full bg-accent px-3 py-1 text-white">Free</span>
            Let's make something great work together. <SectionLink href="/contact">get free quote</SectionLink>
          </p>
        )}
      </Container>
    </section>
  )
}
