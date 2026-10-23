import { useEffect, useState } from "react"
import { skills } from "../../data/content"
import { CheckList, Container, SectionHeading } from "../ui/SectionHeading"

export function Expertise() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section className="pt-[100px]">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img
            src="/images/expertise-image.png"
            alt="Pool technician beside a clean pool"
            className="aspect-[1/1.2543] w-full object-cover object-top lg:mr-[30px]"
          />
          <div className="lg:order-none">
            <SectionHeading
              eyebrow="Our expertise"
              title="Our expertise quality pool care you can trust"
              description="With years of experience and a team of skilled professionals, we provide top-tier pool cleaning and maintenance services. We focus on delivering, reliable care, ensuring your pool stays in perfect condition, season after season."
            />
            <div className="space-y-[30px]">
              {skills.map((skill) => (
                <div key={skill.title}>
                  <div className="mb-2.5 flex justify-between font-medium text-primary capitalize">
                    <span>{skill.title}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <div className="h-3.5 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-accent transition-[width] duration-1000"
                      style={{ width: ready ? `${skill.value}%` : "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <CheckList
              columns
              className="mt-10 border-t border-line pt-10"
              items={["Professional Cleaning Services", "Efficient Renovations & Upgrades"]}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
