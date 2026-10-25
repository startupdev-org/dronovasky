import { useState } from "react"
import { testimonialStats, testimonials } from "../../data/content"
import { Container, SectionHeading } from "../ui/SectionHeading"

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const current = testimonials[index]

  return (
    <section id="testimonials" className="py-[100px]">
      <Container>
        <div className="mb-16 lg:mb-20">
          <SectionHeading
            align="center"
            eyebrow="recenzii"
            title="Vezi ce spun clienții noștri"
          />
        </div>

        <div className="grid items-start gap-[30px] lg:grid-cols-12">
          <div className="rounded-xl border border-line bg-white p-8 shadow-[0_0_30px_#04224508] lg:col-span-8 lg:p-10">
            <div className="mb-5 flex gap-0.5 text-lg text-accent">
              {Array.from({ length: 5 }).map((_, star) => (
                <i key={star} className="fa-solid fa-star" />
              ))}
            </div>
            <p className="mb-[30px] border-b border-line pb-[30px] text-lg font-semibold text-muted">{current.quote}</p>
            <div className="flex items-center justify-between gap-5">
              <div className="flex items-center gap-2.5">
                <img src={current.image} alt="" className="h-10 w-10 rounded-full object-cover" />
                <h3 className="text-xl text-primary capitalize">{current.name}</h3>
              </div>
              <img src="/images/testimonial-quote.svg" alt="" className="h-[30px] w-[30px]" />
            </div>
            <div className="mt-10 flex justify-center gap-3">
              {testimonials.map((item, dot) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Arată recenzia de la ${item.name}`}
                  onClick={() => setIndex(dot)}
                  className={`relative h-1.5 w-1.5 rounded-full transition-colors ${dot === index ? "bg-accent before:absolute before:top-1/2 before:left-1/2 before:h-3.5 before:w-3.5 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:border before:border-accent" : "bg-line"}`}
                />
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl bg-[url('/images/testimonial-counter-bg.jpg')] bg-cover bg-center p-[30px] lg:col-span-4">
            <div className="absolute inset-0 bg-primary/60" />
            <div className="relative z-10">
              {testimonialStats.map((stat, statIndex) => (
                <div
                  key={stat.value}
                  className={statIndex < testimonialStats.length - 1 ? "mb-[30px] border-b border-white/10 pb-[30px]" : ""}
                >
                  <h2 className="mb-2 text-[46px] leading-none text-white">{stat.value}</h2>
                  <p className="m-0 text-white capitalize">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
