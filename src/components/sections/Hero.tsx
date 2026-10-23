import { clientAvatars } from "../../data/content"
import { Container, SectionHeading, SectionLink } from "../ui/SectionHeading"
import { PlayButton } from "../ui/VideoModal"

type HeroProps = {
  onPlay: () => void
}

export function Hero({ onPlay }: HeroProps) {
  return (
    <section id="top" className="relative mx-auto mt-5 min-h-[calc(100vh-40px)] max-w-[1880px] overflow-hidden rounded-xl">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-bg.jpg"
      >
        <source src="https://demo.awaikenthemes.com/assets/videos/waveup-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(4,34,69,0.5),rgba(4,34,69,0.5)),linear-gradient(180deg,rgba(4,34,69,0)_76%,rgba(4,34,69,0.8)_94%),linear-gradient(0deg,rgba(4,34,69,0)_82%,rgba(4,34,69,0.8)_100%)]" />

      <Container className="relative z-10 flex min-h-[calc(100vh-40px)] flex-col justify-end pt-[180px] pb-10">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              as="h1"
              tone="light"
              eyebrow="Welcome to waveup."
              title="Clear Pools with Expert Cleaning Today!"
              className="mb-0"
            />
            <div className="mt-8 flex items-center gap-5">
              <div className="flex">
                {clientAvatars.map((src, index) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className={`h-[50px] w-[50px] rounded-full object-cover ring-2 ring-primary ${index === 0 ? "" : "-ml-3"}`}
                  />
                ))}
              </div>
              <div className="text-white">
                <h3 className="mb-1 text-xl font-semibold text-white">820+</h3>
                <p className="m-0 text-sm tracking-wide uppercase">satisfied customer</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative ml-auto max-w-[413px]">
              <img
                src="/images/hero-image.jpg"
                alt="Technician cleaning a pool"
                className="aspect-[1/0.6635] w-full rounded-xl object-cover"
              />
              <PlayButton onClick={onPlay} className="absolute bottom-[30px] left-[30px]" />
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-10 lg:mt-20 lg:flex-row lg:items-center lg:justify-between">
          <p className="m-0 text-white lg:w-[40%]">
            Let's make something great work together. <SectionLink href="#contact" tone="light">Contact Us</SectionLink>
          </p>
          <ul className="m-0 flex list-none flex-wrap justify-start gap-x-[30px] gap-y-3 p-0 lg:w-[60%] lg:justify-end">
            {["Professional Pool Cleaning", "Filter Cleaning & Maintenance"].map((item) => (
              <li key={item} className="relative pl-[30px] text-white">
                <i className="fa-solid fa-circle-check absolute top-0.5 left-0 text-[18px] text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
