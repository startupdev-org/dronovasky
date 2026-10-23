import { Button } from "../ui/Button"
import { Container, SectionHeading } from "../ui/SectionHeading"

export function Approach() {
  return (
    <section className="bg-secondary bg-[url('/images/light-bg-section-shape.png')] bg-cover bg-center py-[100px]">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-3">
          <div className="lg:mr-4">
            <SectionHeading
              eyebrow="misiunea și viziunea noastră"
              title="Curățenie profesională, de la sol până la cer!"
              description="Dronova Sky Cleaning oferă servicii profesionale pentru locuințe, oficii, spații comerciale și clădiri."
            />
            <div className="mt-10">
              <Button href="/contact">Află mai multe</Button>
            </div>
          </div>
          <img
            src="/images/approach-image.jpg"
            alt="Echipă de curățenie la lucru"
            className="aspect-[1/0.854] w-full rounded-xl object-cover"
          />
          <div className="rounded-xl border border-line bg-white p-8 lg:p-10">
            <article className="mb-5 flex gap-4 border-b border-line pb-5">
              <img src="/images/icon-mission.svg" alt="" className="h-14 w-14 shrink-0" />
              <div>
                <h3 className="mb-2.5 text-xl font-semibold text-primary">Misiunea noastră</h3>
                <p className="m-0">
                  Oferim servicii de curățenie cu precizie, responsabilitate și atenție la detalii.
                </p>
              </div>
            </article>
            <article className="flex gap-4">
              <img src="/images/icon-vision.svg" alt="" className="h-14 w-14 shrink-0" />
              <div>
                <h3 className="mb-2.5 text-xl font-semibold text-primary">Viziunea noastră</h3>
                <p className="m-0">
                  Ne dorim să facem curățenia profesională accesibilă, eficientă și sigură pentru fiecare client.
                </p>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  )
}
