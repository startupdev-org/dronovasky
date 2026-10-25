import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import { footerServices, sitePages } from "../../data/content"
import { company, companyContact, companyLogo } from "../../data/company"
import { Container } from "../ui/SectionHeading"

const START_YEAR = 2026;

export function Footer() {

  const currentYear = new Date().getFullYear();
  const years =
    START_YEAR === currentYear ? `${currentYear}` : `${START_YEAR}-${currentYear}`;

  return (
    <footer id="contact" className="mx-auto mb-5 max-w-[1880px] overflow-hidden rounded-xl">
      <div className="relative bg-[url('/images/footer-bg.jpg')] bg-cover bg-top px-0 pt-20">
        <div className="absolute inset-0 bg-primary/80" />
        <Container className="relative z-10">
          <div className="mb-[60px] flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-[60px] md:flex-row md:items-center">
            <h2 className="max-w-[560px] text-[30px] leading-[1.2] font-semibold text-white sm:text-[40px] lg:w-1/2 lg:text-[46px]">
              Contactează-ne pentru servicii de curățenie profesională
            </h2>
            <Link to="/contact" className="md:ml-auto" aria-label="Contactează-ne">
              <img
                src="/images/contact-now-circle.svg"
                alt=""
                className="w-[120px] animate-[spin-slow_25s_linear_infinite]"
              />
            </Link>
          </div>

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
            <div className="lg:mr-[70px]">
              <img src={companyLogo} alt={company.name} className="mb-5 w-[180px]" />
              <p className="mb-[30px] text-white">
                Curățăm tot. De la sol până la cer. Servicii profesionale pentru locuințe, oficii, spații comerciale și clădiri.
              </p>
              <ul className="m-0 flex list-none gap-3 p-0">
                {company.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-white text-lg text-white transition-colors hover:border-accent hover:text-accent"
                    >
                      <i className={social.icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[0.7fr_1.1fr_1.1fr] lg:gap-[60px]">
              <FooterColumn title="linkuri rapide">
                <ul className="m-0 list-disc space-y-2.5 pl-5 marker:text-accent">
                  {sitePages.map((link) => (
                    <li key={link.label} className="text-white capitalize">
                      <Link to={link.href} className="transition-colors hover:text-accent">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>

              <FooterColumn title="servicii" divided>
                <ul className="m-0 list-disc space-y-2.5 pl-5 marker:text-accent">
                  {footerServices.map((service) => (
                    <li key={service.href} className="text-white capitalize">
                      <Link to={service.href} className="transition-colors hover:text-accent">
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>

              <FooterColumn title="contacte">
                <div className="space-y-6 text-white">
                  <ContactRow icon="fa-solid fa-phone">
                    <a href={companyContact.phoneHref} className="hover:text-accent">
                      {company.phone.display}
                    </a>
                  </ContactRow>
                  <ContactRow icon="fa-solid fa-envelope">
                    <a href={companyContact.emailHref} className="hover:text-accent">
                      {company.email}
                    </a>
                  </ContactRow>
                  <ContactRow icon="fa-solid fa-location-dot">
                    {company.address}
                  </ContactRow>
                </div>
              </FooterColumn>
            </div>
          </div>

          <div className="mt-[60px] flex flex-col gap-4 border-t border-white/10 py-[50px] text-white sm:flex-row sm:items-center sm:justify-between">
            <p className="m-0">{years} © Toate drepturile rezervate.</p>
            <ul className="m-0 flex list-disc flex-wrap gap-x-8 gap-y-2 pl-5 marker:text-white">
              <li>
                <a href="#contact" className="capitalize hover:text-accent">
                  Politica de confidențialitate
                </a>
              </li>
              <li>
                <a href="#contact" className="capitalize hover:text-accent">
                  Termeni și condiții
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  children,
  divided = false,
}: {
  title: string
  children: ReactNode
  divided?: boolean
}) {
  return (
    <div className={`relative ${divided ? "lg:before:absolute lg:before:top-0 lg:before:-right-[30px] lg:before:h-full lg:before:w-px lg:before:bg-white/10" : ""}`}>
      <h3 className="mb-5 text-[22px] font-semibold text-white capitalize">{title}</h3>
      {children}
    </div>
  )
}

function ContactRow({ icon, children }: { icon: string; children: ReactNode }) {
  return (
    <div className="flex items-start gap-2.5">
      <i className={`${icon} mt-1 text-base text-white`} />
      <p className="m-0">{children}</p>
    </div>
  )
}
