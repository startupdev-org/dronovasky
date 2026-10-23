import { promiseItems } from "../../data/content"
import { Container, SectionHeading } from "../ui/SectionHeading"

export function Promise() {
  return (
    <section className="bg-secondary bg-[url('/images/light-bg-section-shape.png')] bg-cover bg-center py-[100px]">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative lg:mr-4">
            <div className="relative pr-0 sm:pr-[120px] lg:pr-[190px]">
              <img
                src="/images/promise-img-1.jpg"
                alt="Lucrare de curățenie finalizată"
                className="aspect-[1/1.042] w-full rounded-xl object-cover"
              />
              <div className="group absolute bottom-0 left-[30px] z-20 w-[196px] translate-y-1/2 overflow-hidden rounded-xl bg-white px-6 py-[30px] text-center">
                <span className="absolute inset-x-0 bottom-0 h-0 rounded-t-[500px] bg-primary transition-all duration-300 group-hover:h-full group-hover:rounded-none" />
                <h2 className="relative z-10 mb-1 text-[46px] text-primary transition-colors group-hover:text-white">
                  16 K
                </h2>
                <p className="relative z-10 m-0 transition-colors group-hover:text-white">servicii disponibile</p>
              </div>
            </div>
            <img
              src="/images/promise-img-2.jpg"
              alt="Detaliu curățenie profesională"
              className="relative z-10 -mt-24 ml-auto aspect-[1/1.12] w-full max-w-[350px] rounded-xl object-cover sm:-mt-52"
            />
          </div>

          <div>
            <SectionHeading
              eyebrow="promisiunea noastră"
              title="Calitate fără compromisuri, la fiecare lucrare"
              description="Curățăm atent fiecare detaliu, cu echipamente profesionale și soluții potrivite, pentru rezultate care se văd."
            />
            <div className="mt-10 grid gap-[30px] sm:grid-cols-2">
              {promiseItems.map((item) => (
                <article key={item.title} className="group relative overflow-hidden rounded-xl bg-white p-[30px]">
                  <span className="absolute inset-x-0 bottom-0 h-0 rounded-t-[500px] bg-primary transition-all duration-300 group-hover:h-full group-hover:rounded-none" />
                  <img
                    src={item.icon}
                    alt=""
                    className="relative z-10 mb-10 h-[60px] w-[60px] transition group-hover:brightness-0 group-hover:invert"
                  />
                  <h3 className="relative z-10 mb-2.5 text-xl font-semibold text-primary capitalize transition-colors group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="relative z-10 m-0 transition-colors group-hover:text-white">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
