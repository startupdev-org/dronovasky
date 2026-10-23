import { Link } from "react-router-dom"
import { whatWeSteps } from "../../data/content"
import { Container, SectionHeading } from "../ui/SectionHeading"

export function WhatWeDo() {
  return (
    <section className="py-[100px]">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="lg:mr-4">
            <SectionHeading
              eyebrow="ce facem"
              title="Curățenie profesională pentru orice tip de spațiu"
              description="Ne ocupăm de curățenie pentru case, oficii, spații comerciale și clădiri, cu rezultate curate și îngrijite."
            />
            <div className="mt-10">
              {whatWeSteps.map((step, index) => (
                <article
                  key={step.no}
                  className={`group flex items-center ${index < whatWeSteps.length - 1 ? "mb-10 border-b border-line pb-10" : ""}`}
                >
                  <div className="relative mr-5 flex h-[70px] w-[70px] shrink-0 items-center justify-center overflow-hidden rounded-[10px] bg-accent">
                    <span className="absolute inset-0 origin-center scale-0 rounded-[10px] bg-primary transition-transform duration-300 group-hover:scale-100" />
                    <h2 className="relative z-10 text-[34px] text-white">{step.no}</h2>
                  </div>
                  <div>
                    <h3 className="mb-2.5 text-xl font-semibold text-primary">{step.title}</h3>
                    <p className="m-0">{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/what-we-img-1.jpg"
              alt="Spațiu curat"
              className="ml-auto aspect-[1/0.69] w-[calc(100%-40px)] rounded-xl object-cover sm:w-[calc(100%-95px)]"
            />
            <img
              src="/images/what-we-img-2.jpg"
              alt="Curățenie profesională"
              className="relative z-10 -mt-16 aspect-[1/0.755] w-full max-w-[524px] rounded-3xl border-[9px] border-white object-cover sm:-mt-40"
            />
            <Link
              to="/contact"
              aria-label="Contactează-ne"
              className="absolute right-2 bottom-8 z-20 inline-block rounded-full border-[9px] border-white"
            >
              <img
                src="/images/contact-us-circle.svg"
                alt=""
                className="w-[110px] animate-[spin-slow_25s_linear_infinite] rounded-full sm:w-[140px]"
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
