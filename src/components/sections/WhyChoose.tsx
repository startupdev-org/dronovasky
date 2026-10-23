import { Link } from "react-router-dom"
import { whyChoose, whyStats } from "../../data/content"
import { CheckList, Container, SectionHeading } from "../ui/SectionHeading"

export function WhyChoose() {
  return (
    <section className="py-[100px]">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="lg:mr-[15px]">
            <SectionHeading
              eyebrow="de ce noi"
              title="Curățenie de încredere pentru spații impecabile!"
              description="Lucrăm atent, cu echipamente profesionale și soluții potrivite pentru fiecare suprafață, pentru rezultate de care să te bucuri."
            />
            <CheckList items={whyChoose} columns />
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-10">
              {whyStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`relative ${index < whyStats.length - 1 ? "after:absolute after:top-0 after:-right-[12px] after:hidden after:h-full after:w-px after:bg-line sm:after:block" : ""}`}
                >
                  <h2 className="mb-1 text-[32px] text-primary sm:text-[46px]">{stat.value}</h2>
                  <p className="m-0 text-sm capitalize sm:text-base">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative grid gap-[30px] sm:grid-cols-[0.47fr_0.53fr]">
            <div className="grid content-start gap-[30px]">
              <img
                src="/images/why-choose-image-1.jpg"
                alt="Curățenie pentru locuințe"
                className="aspect-square w-full rounded-xl object-cover"
              />
              <img
                src="/images/why-choose-image-2.jpg"
                alt="Curățenie profesională"
                className="aspect-[1/1.14] w-full rounded-xl object-cover"
              />
            </div>
            <div className="flex items-end bg-[url('/images/icon-sub-heading.svg')] bg-[length:120px_auto] bg-[position:center_40px] bg-no-repeat">
              <img
                src="/images/why-choose-image-3.jpg"
                alt="Detaliu lucrare de curățenie"
                className="aspect-[1/1.31] w-full rounded-xl object-cover"
              />
            </div>
            <Link
              to="/contact"
              className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-[70%]"
              aria-label="Contactează-ne"
            >
              <img
                src="/images/contact-now-circle.svg"
                alt=""
                className="w-[140px] animate-[spin-slow_25s_linear_infinite] sm:w-[180px]"
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
