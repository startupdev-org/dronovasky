import { useState } from "react"
import { PageBanner } from "../components/layout/PageBanner"
import { Lightbox } from "../components/ui/Lightbox"
import { Container } from "../components/ui/SectionHeading"
import { galleryImages } from "../data/content"
import { usePageTitle } from "../hooks/usePageTitle"

export function ImageGalleryPage() {
  const [active, setActive] = useState<number | null>(null)
  usePageTitle("Our Gallery - Waveup")

  return (
    <main>
      <PageBanner title="Our gallery" crumbs={[{ label: "home", href: "/" }, { label: "Our gallery" }]} />
      <section className="pt-[100px] pb-[70px]">
        <Container>
          <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setActive(index)}
                className="group overflow-hidden rounded-xl"
                aria-label={`View gallery image ${index + 1}`}
              >
                <img
                  src={image}
                  alt=""
                  className="aspect-[1/0.83] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </Container>
      </section>
      {active !== null ? (
        <Lightbox images={galleryImages} index={active} onClose={() => setActive(null)} onChange={setActive} />
      ) : null}
    </main>
  )
}
