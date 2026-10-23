import { useState } from "react"
import { faqs } from "../../data/content"
import { company, companyContact } from "../../data/company"
import { Container, SectionHeading } from "../ui/SectionHeading"

export function Faqs() {
  const [open, setOpen] = useState(1)

  return (
    <section
      id="faqs"
      className="bg-secondary bg-[url('/images/light-bg-section-shape.png')] bg-cover bg-center py-[100px]"
    >
      <Container>
        <div className="mb-16 lg:mb-20">
          <SectionHeading align="center" eyebrow="întrebări frecvente" title="Răspunsuri la întrebările tale" />
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-[30px]">
          <div className="grid items-center gap-[30px] sm:grid-cols-[1.06fr_0.94fr] lg:mr-5">
            <img
              src="/images/faqs-image-1.jpg"
              alt="Spațiu curat"
              className="aspect-[1/1.51] w-full rounded-xl object-cover"
            />
            <div>
              <a
                href={companyContact.phoneHref}
                className="group relative mb-[30px] flex items-center overflow-hidden rounded-xl bg-accent p-[25px] text-white"
              >
                <span className="absolute inset-x-0 bottom-0 h-0 bg-primary transition-all duration-500 group-hover:h-full" />
                <img src="/images/icon-need-help.svg" alt="" className="relative z-10 mr-[15px] h-10 w-10" />
                <span className="relative z-10">
                  <span className="mb-1 block text-white/80">Telefon</span>
                  <strong className="text-lg capitalize">{company.phone.display}</strong>
                </span>
              </a>
              <img
                src="/images/faqs-image-2.jpg"
                alt="Curățenie profesională"
                className="aspect-[1/1.2] w-full rounded-xl object-cover"
              />
            </div>
          </div>

          <div className="space-y-[30px]">
            {faqs.map((faq, index) => {
              const active = open === index
              return (
                <article key={faq.question} className="overflow-hidden rounded-xl border border-line bg-white">
                  <button
                    type="button"
                    className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-xl leading-snug font-semibold transition-colors ${active ? "border-b border-white/10 bg-accent text-white" : "bg-transparent text-primary"}`}
                    aria-expanded={active}
                    onClick={() => setOpen(active ? -1 : index)}
                  >
                    {faq.question}
                    <i className={`fa-solid ${active ? "fa-chevron-up text-white" : "fa-chevron-down text-primary"} text-[22px]`} />
                  </button>
                  {active ? <p className="m-0 bg-accent px-5 py-[18px] pr-12 text-white">{faq.answer}</p> : null}
                </article>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
