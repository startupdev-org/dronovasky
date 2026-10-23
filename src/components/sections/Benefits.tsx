import { benefitPoints, benefits } from "../../data/content"
import { CheckList, Container, SectionHeading } from "../ui/SectionHeading"
import { PlayButton } from "../ui/VideoModal"

type BenefitsProps = {
  onPlay: () => void
}

export function Benefits({ onPlay }: BenefitsProps) {
  return (
    <section className="relative mx-auto mb-16 max-w-[1880px] lg:mb-[120px]">
      <div className="rounded-xl bg-primary bg-[url('/images/dark-section-bg-shape.png')] bg-cover bg-center pt-[100px] pb-24 lg:pb-36">
        <Container>
          <div className="mb-16 lg:mb-20">
            <SectionHeading
              align="center"
              tone="light"
              eyebrow="beneficiile noastre"
              title="Curățenie profesională, cu beneficii reale pentru tine"
            />
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className={`relative ${index < benefits.length - 1 ? "lg:after:absolute lg:after:top-0 lg:after:-right-5 lg:after:h-full lg:after:w-px lg:after:bg-white/10" : ""}`}
              >
                <img src={benefit.icon} alt="" className="mb-[30px] h-[60px] w-[60px]" />
                <h3 className="mb-[15px] text-xl text-white">{benefit.title}</h3>
                <p className="m-0 text-white">{benefit.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </div>

      <Container className="relative z-10 -mt-16 lg:-mt-24">
        <div className="grid items-center gap-10 rounded-xl border border-line bg-white p-6 shadow-[0_0_30px_#031D3408] md:p-10 lg:grid-cols-2 lg:gap-10 lg:p-[60px]">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src="/images/benefit-image.jpg"
              alt="Curățenie în desfășurare"
              className="aspect-[1/0.894] w-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/20" />
            <PlayButton onClick={onPlay} size="lg" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>

          <div>
            <p className="mb-10">
              Curățenie fără griji, cu rezultate vizibile. Echipa noastră oferă soluții eficiente pentru un spațiu impecabil.
            </p>
            <CheckList items={benefitPoints} className="mb-10" />
            <div className="grid gap-8 rounded-xl bg-accent p-8 sm:grid-cols-2 sm:gap-x-[60px] sm:p-10">
              <div>
                <img src="/images/icon-benefit-body-item-1.svg" alt="" className="mb-5 h-10 w-10" />
                <h3 className="text-xl leading-snug text-white">Rezultate impecabile prin atenție la detalii</h3>
              </div>
              <div className="relative sm:before:absolute sm:before:top-0 sm:before:-left-[30px] sm:before:h-full sm:before:w-px sm:before:bg-white/10">
                <img src="/images/icon-benefit-body-item-2.svg" alt="" className="mb-5 h-10 w-10" />
                <h3 className="text-xl leading-snug text-white">Programare simplă și răspuns rapid</h3>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
