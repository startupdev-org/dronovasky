import { useState } from "react"
import { PageBanner } from "../components/layout/PageBanner"
import { Button } from "../components/ui/Button"
import { Container, SectionHeading } from "../components/ui/SectionHeading"
import { contactCards } from "../data/content"
import { usePageTitle } from "../hooks/usePageTitle"

export function ContactPage() {
  const [sent, setSent] = useState(false)
  usePageTitle("Contact Us - Waveup")

  return (
    <main>
      <PageBanner title="Contact us" crumbs={[{ label: "home", href: "/" }, { label: "contact us" }]} />
      <section className="pt-[100px] pb-[50px]">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div className="h-full rounded-xl bg-primary bg-[url('/images/contact-content-bg.svg')] bg-[length:100%_auto] bg-bottom bg-no-repeat p-8 lg:p-10">
              <SectionHeading
                tone="light"
                eyebrow="contact us"
                title="Get in touch for expert pool care"
                description="Have questions or need professional pool cleaning and maintenance? Our team is here to help! Contact us today for reliable service, expert advice, and hassle-free pool care solutions."
              />
              <form
                className="mt-8"
                onSubmit={(event) => {
                  event.preventDefault()
                  setSent(true)
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required name="fname" placeholder="First Name" className="rounded-xl bg-white px-5 py-[17px] text-muted outline-none placeholder:text-muted" />
                  <input required name="lname" placeholder="Last Name" className="rounded-xl bg-white px-5 py-[17px] text-muted outline-none placeholder:text-muted" />
                  <input required type="email" name="email" placeholder="Email Address" className="rounded-xl bg-white px-5 py-[17px] text-muted outline-none placeholder:text-muted" />
                  <input required name="phone" placeholder="Phone No." className="rounded-xl bg-white px-5 py-[17px] text-muted outline-none placeholder:text-muted" />
                  <textarea required name="message" rows={4} placeholder="Message" className="rounded-xl bg-white px-5 py-[17px] text-muted outline-none placeholder:text-muted sm:col-span-2" />
                </div>
                <div className="mt-8">
                  <Button type="submit" tone="highlight" className="w-full">
                    submit message
                  </Button>
                </div>
                {sent ? <p className="mt-5 mb-0 text-white">Thank you. Your message has been received.</p> : null}
              </form>
            </div>

            <div>
              <img
                src="/images/contact-us-image.jpg"
                alt="Pool care specialist"
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
            <SectionHeading align="center" eyebrow="our location" title="How to reach our location" />
          </div>
          <iframe
            title="Waveup location map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96737.10562045308!2d-74.08535042841811!3d40.739265258395164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1703158537552!5m2!1sen!2sin"
            className="h-[480px] w-full rounded-xl border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Container>
      </section>
    </main>
  )
}
