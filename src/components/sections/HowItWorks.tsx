import { steps } from "../../data/content"
import { Container, SectionHeading, SectionLink } from "../ui/SectionHeading"

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-[1880px] rounded-xl bg-primary bg-[url('/images/dark-section-bg-shape.png')] bg-cover bg-center py-[100px]">
      <Container>
        <div className="mb-16 lg:mb-20">
          <SectionHeading
            align="center"
            tone="light"
            eyebrow="cum lucrăm"
            title="Cum lucrăm: un proces simplu și eficient"
          />
        </div>

        <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article key={step.no} className="group overflow-hidden rounded-xl bg-white">
              <div className="relative">
                <div className="overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="aspect-[1/0.66] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-[30px] z-10 flex h-10 w-10 translate-y-1/2 items-center justify-center rounded-md bg-accent text-white transition-colors group-hover:bg-primary">
                  <span className="text-2xl leading-none font-semibold">{step.no}</span>
                </div>
              </div>
              <div className="relative px-[30px] pt-[50px] pb-[30px]">
                <div className="absolute inset-x-0 bottom-0 h-0 bg-accent transition-all duration-500 group-hover:h-full" />
                <h3 className="relative z-10 mb-2.5 text-xl text-primary transition-colors group-hover:text-white">
                  {step.title}
                </h3>
                <p className="relative z-10 m-0 transition-colors group-hover:text-white">{step.text}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-[30px] mb-0 text-center text-white">
          Suntem gata să te ajutăm.{" "}
          <SectionLink href="/contact" tone="light">
            Solicită o ofertă
          </SectionLink>
        </p>
      </Container>
    </section>
  )
}
