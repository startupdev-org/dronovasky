import { Button } from "../ui/Button"
import { Container, SectionHeading } from "../ui/SectionHeading"

export function Approach() {
  return (
    <section className="bg-secondary bg-[url('/images/light-bg-section-shape.png')] bg-cover bg-center py-[100px]">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-3">
          <div className="lg:mr-4">
            <SectionHeading
              eyebrow="our vision / mission"
              title="Crystal clear pools expert care!"
              description="Our expert team ensures spotless, healthy, and perfectly balanced pools with thorough cleaning, treatments, and reliable maintenance."
            />
            <div className="mt-10">
              <Button href="/contact">Explore More</Button>
            </div>
          </div>
          <img
            src="/images/approach-image.jpg"
            alt="Pool technician at work"
            className="aspect-[1/0.854] w-full rounded-xl object-cover"
          />
          <div className="rounded-xl border border-line bg-white p-8 lg:p-10">
            <article className="mb-5 flex gap-4 border-b border-line pb-5">
              <img src="/images/icon-mission.svg" alt="" className="h-14 w-14 shrink-0" />
              <div>
                <h3 className="mb-2.5 text-xl font-semibold text-primary">Our Mission</h3>
                <p className="m-0">
                  We are committed to providing exceptional pool cleaning services with precision, reliability.
                </p>
              </div>
            </article>
            <article className="flex gap-4">
              <img src="/images/icon-vision.svg" alt="" className="h-14 w-14 shrink-0" />
              <div>
                <h3 className="mb-2.5 text-xl font-semibold text-primary">Our Vision</h3>
                <p className="m-0">
                  We are committed to providing exceptional pool cleaning services with precision, reliability.
                </p>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  )
}
