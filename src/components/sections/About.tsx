import { Button } from "../ui/Button"
import { CheckList, Container, SectionHeading } from "../ui/SectionHeading"
import { company, companyContact } from "../../data/company"

type AboutProps = {
  ctaHref?: string
  ctaLabel?: string
}

export function About({ ctaHref = "/about", ctaLabel = "Află mai multe" }: AboutProps) {
  return (
    <section id="about" className="py-[100px]">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-[30px]">
          <div className="grid gap-[30px] lg:mr-[15px]">
            <img
              src="/images/about-img-1.jpg"
              alt="Servicii de curățenie profesională"
              className="aspect-[1/0.496] w-full rounded-xl object-cover"
            />
            <div className="grid gap-[30px] sm:grid-cols-[195px_minmax(0,1fr)]">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="/images/about-img-2.jpg"
                  alt="Curățenie pentru locuințe"
                  className="aspect-[1/1.45] h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,34,69,0)_58%,rgba(4,34,69,0.75)_78%)]" />
                <div className="absolute bottom-5 left-5 text-white">
                  <h2 className="text-[40px] leading-none text-white">15+</h2>
                  <p className="m-0 capitalize">servicii disponibile</p>
                </div>
              </div>
              <img
                src="/images/about-img-3.jpg"
                alt="Echipă de curățenie profesională"
                className="aspect-[1/0.744] h-full w-full rounded-xl object-cover"
              />
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Despre noi"
              title="Noi aducem curățenie și confort în spațiile clienților noștri!"
              description="Rezultatele noastre înseamnă profesionalism, atenție la detalii și clienți mulțumiți."
            />

            <div className="group relative mb-10 flex max-w-[500px] items-center overflow-hidden rounded-xl border border-line p-[15px] shadow-[0_0_30px_#04224508] before:absolute before:inset-x-0 before:bottom-0 before:z-0 before:h-0 before:bg-primary before:transition-all before:duration-500 hover:before:h-full">
              <div className="relative z-10 mr-[15px] flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-xl bg-accent">
                <img src="/images/icon-about-body-item.svg" alt="" className="h-10 w-10" />
              </div>
              <h3 className="relative z-10 text-xl leading-snug font-semibold text-primary transition-colors group-hover:text-white">
                Curățenie atentă, adaptată fiecărei lucrări
              </h3>
            </div>

            <CheckList
              items={[
                "Curățenie pentru case, oficii, spații comerciale și clădiri",
                "Echipamente profesionale și soluții potrivite pentru fiecare suprafață",
              ]}
            />

            <div className="mt-10 flex flex-wrap items-center gap-x-[30px] gap-y-5">
              <Button href={ctaHref}>{ctaLabel}</Button>
              <a href={companyContact.phoneHref} className="inline-flex items-center text-left">
                <span className="mr-2.5 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-accent text-white">
                  <i className="fa-solid fa-phone" />
                </span>
                <span>
                  <span className="block text-muted">Contactează-ne</span>
                  <strong className="text-xl text-primary">{company.phone.display}</strong>
                </span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
