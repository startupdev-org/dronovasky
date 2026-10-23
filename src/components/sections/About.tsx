import { Button } from "../ui/Button"
import { CheckList, Container, SectionHeading } from "../ui/SectionHeading"

type AboutProps = {
  ctaHref?: string
  ctaLabel?: string
}

export function About({ ctaHref = "/about", ctaLabel = "more about" }: AboutProps) {
  return (
    <section id="about" className="py-[100px]">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-[30px]">
          <div className="grid gap-[30px] lg:mr-[15px]">
            <img
              src="/images/about-img-1.jpg"
              alt="Pool cleaner in a bright swimming pool"
              className="aspect-[1/0.496] w-full rounded-xl object-cover"
            />
            <div className="grid gap-[30px] sm:grid-cols-[195px_minmax(0,1fr)]">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="/images/about-img-2.jpg"
                  alt="Residential pool and lounge chairs"
                  className="aspect-[1/1.45] h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,34,69,0)_58%,rgba(4,34,69,0.75)_78%)]" />
                <div className="absolute bottom-5 left-5 text-white">
                  <h2 className="text-[40px] leading-none text-white">25+</h2>
                  <p className="m-0 capitalize">Years Experience</p>
                </div>
              </div>
              <img
                src="/images/about-img-3.jpg"
                alt="Pool technician testing water"
                className="aspect-[1/0.744] h-full w-full rounded-xl object-cover"
              />
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="About us"
              title="Dedicated to keeping your pool sparkling clean!"
              description="We are committed to providing exceptional pool cleaning and maintenance services to keep your pool crystal clear, safe, and ready for enjoyment."
            />

            <div className="group relative mb-10 flex max-w-[500px] items-center overflow-hidden rounded-xl border border-line p-[15px] shadow-[0_0_30px_#04224508] before:absolute before:inset-x-0 before:bottom-0 before:z-0 before:h-0 before:bg-primary before:transition-all before:duration-500 hover:before:h-full">
              <div className="relative z-10 mr-[15px] flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-xl bg-accent">
                <img src="/images/icon-about-body-item.svg" alt="" className="h-10 w-10" />
              </div>
              <h3 className="relative z-10 text-xl leading-snug font-semibold text-primary transition-colors group-hover:text-white">
                Custom Maintenance Plans Tailored to Your Pool's Needs
              </h3>
            </div>

            <CheckList
              items={[
                "Custom Maintenance Plans Tailored to Your Pool's Needs",
                "Using Eco-Friendly and Safe Cleaning Products for a Healthier Pool",
              ]}
            />

            <div className="mt-10 flex flex-wrap items-center gap-x-[30px] gap-y-5">
              <Button href={ctaHref}>{ctaLabel}</Button>
              <a href="tel:+08658520035" className="inline-flex items-center text-left">
                <span className="mr-2.5 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-accent text-white">
                  <i className="fa-solid fa-phone" />
                </span>
                <span>
                  <span className="block text-muted">Call Us 24/7</span>
                  <strong className="text-xl text-primary">+08 658 520 035</strong>
                </span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
