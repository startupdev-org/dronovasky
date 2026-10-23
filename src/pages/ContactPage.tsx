import { useState } from "react"
import { PageBanner } from "../components/layout/PageBanner"
import { Button } from "../components/ui/Button"
import { Container, SectionHeading } from "../components/ui/SectionHeading"
import { contactCards } from "../data/content"
import { company } from "../data/company"
import { usePageTitle } from "../hooks/usePageTitle"

export function ContactPage() {
  const [sent, setSent] = useState(false)
  usePageTitle(`Contacte - ${company.name}`)

  return (
    <main>
      <PageBanner title="Contacte" crumbs={[{ label: "acasă", href: "/" }, { label: "contacte" }]} />
      <section className="pt-[100px] pb-[50px]">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div className="h-full rounded-xl bg-primary bg-[url('/images/contact-content-bg.svg')] bg-[length:100%_auto] bg-bottom bg-no-repeat p-8 lg:p-10">
              <SectionHeading
                tone="light"
                eyebrow="contactează-ne"
                title="Solicită o ofertă pentru curățenie profesională"
                description="Trimite-ne poze sau video cu obiectul, iar noi revenim rapid cu o ofertă. La necesitate, ne deplasăm pentru evaluare."
              />
              <form
                className="mt-8"
                onSubmit={(event) => {
                  event.preventDefault()
                  setSent(true)
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required name="fname" placeholder="Prenume" className="rounded-xl bg-white px-5 py-[17px] text-muted outline-none placeholder:text-muted" />
                  <input required name="lname" placeholder="Nume" className="rounded-xl bg-white px-5 py-[17px] text-muted outline-none placeholder:text-muted" />
                  <input required type="email" name="email" placeholder="Adresa de e-mail" className="rounded-xl bg-white px-5 py-[17px] text-muted outline-none placeholder:text-muted" />
                  <input required name="phone" placeholder="Număr de telefon" className="rounded-xl bg-white px-5 py-[17px] text-muted outline-none placeholder:text-muted" />
                  <textarea required name="message" rows={4} placeholder="Mesaj" className="rounded-xl bg-white px-5 py-[17px] text-muted outline-none placeholder:text-muted sm:col-span-2" />
                </div>
                <div className="mt-8">
                  <Button type="submit" tone="highlight" className="w-full">
                    Trimite mesajul
                  </Button>
                </div>
                {sent ? <p className="mt-5 mb-0 text-white">Mulțumim! Mesajul tău a fost primit.</p> : null}
              </form>
            </div>

            <div>
              <img
                src="/images/contact-us-image.jpg"
                alt="Specialist în curățenie"
                className="mb-10 aspect-[1/0.79] w-full rounded-xl object-cover"
              />
              <div className="space-y-[30px] rounded-xl bg-secondary p-8 lg:p-10">
                {contactCards.map((card) => (
                  <article key={card.title} className="group relative flex items-center overflow-hidden rounded-xl bg-white p-5">
                    <span className="absolute inset-x-0 bottom-0 h-0 bg-primary transition-all duration-300 group-hover:h-full" />
                    <img src={card.icon} alt="" className="relative z-10 mr-5 h-[34px] w-[34px] transition group-hover:brightness-0 group-hover:invert" />
                    <div className="relative z-10">
                      <h3 className="mb-1 text-xl font-semibold text-primary capitalize transition-colors group-hover:text-white">
                        {card.title}
                      </h3>
                      {card.href ? (
                        <a href={card.href} className="text-muted transition-colors group-hover:text-white">
                          {card.text}
                        </a>
                      ) : (
                        <p className="m-0 text-muted transition-colors group-hover:text-white">{card.text}</p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-[50px] pb-[100px]">
        <Container>
          <div className="mb-12">
            <SectionHeading align="center" eyebrow="locația noastră" title="Cum ajungi la noi" />
          </div>
          <iframe
            title={`${company.name} location map`}
            src={company.mapEmbedUrl}
            className="h-[480px] w-full rounded-xl border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Container>
      </section>
    </main>
  )
}
