import { planFeatures, plans, pricingNotes } from "../../data/content"
import { Button } from "../ui/Button"
import { Container, SectionHeading } from "../ui/SectionHeading"

export function Pricing({ variant = "home" }: { variant?: "home" | "page" }) {
  const page = variant === "page"

  return (
    <section
      id={page ? undefined : "pricing"}
      className={`bg-secondary bg-[url('/images/light-bg-section-shape.png')] bg-cover bg-center py-[100px] ${page ? "" : "mt-[100px]"}`}
    >
      <Container>
        <div className="mb-16 lg:mb-20">
          <SectionHeading
            align="center"
            eyebrow="prețuri"
            title="Oferte adaptate fiecărei lucrări"
          />
        </div>

        <div className="grid gap-[30px] lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-xl border p-10 ${plan.featured ? "border-transparent bg-accent text-white" : "border-line bg-white"}`}
            >
              <img
                src={plan.icon}
                alt=""
                className={`mb-5 h-[60px] w-[60px] ${plan.featured ? "brightness-0 invert" : ""}`}
              />
              <h3 className={`mb-[30px] text-xl capitalize ${plan.featured ? "text-white" : "text-primary"}`}>
                {plan.name}
              </h3>
              <ul className="m-0 list-none space-y-[15px] p-0">
                {planFeatures.map((feature) => (
                  <li key={feature} className="relative pl-[30px] leading-normal">
                    <i className={`fa-solid fa-circle-check absolute top-0.5 left-0 text-[18px] ${plan.featured ? "text-white" : "text-accent"}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className={`mt-[30px] border-t pt-[30px] ${plan.featured ? "border-white/10" : "border-line"}`}>
                <h2 className={`text-[46px] ${plan.featured ? "text-white" : "text-primary"}`}>
                  {plan.price}
                  <sub className={`ml-1 text-base font-normal capitalize ${plan.featured ? "text-white" : "text-muted"}`}>
                    {" "}
                    / lucrare
                  </sub>
                </h2>
              </div>
              <div className="mt-[30px]">
                <Button href="/contact" arrow={false} tone={plan.featured ? "inverse" : "accent"}>
                  Solicită o ofertă
                </Button>
              </div>
            </article>
          ))}
        </div>

        <ul className="mt-[30px] flex list-none flex-wrap items-center justify-center gap-x-10 gap-y-5 p-0">
          {pricingNotes.map((note) => (
            <li key={note.label} className="inline-flex items-center text-primary">
              <img src={note.icon} alt="" className="mr-[15px] h-5 w-5" />
              {note.label}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
