import { useOutletContext } from "react-router-dom"
import { PageBanner } from "../components/layout/PageBanner"
import type { SiteOutletContext } from "../components/layout/SiteLayout"
import { Container } from "../components/ui/SectionHeading"
import { company } from "../data/company"
import { videoThumbs } from "../data/content"
import { usePageTitle } from "../hooks/usePageTitle"

export function VideoGalleryPage() {
  const { openVideo } = useOutletContext<SiteOutletContext>()
  usePageTitle(`Videouri - ${company.name}`)

  return (
    <main>
      <PageBanner title="Videourile noastre" crumbs={[{ label: "acasă", href: "/" }, { label: "videouri" }]} />
      <section className="pt-[100px] pb-[70px]">
        <Container>
          <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
            {videoThumbs.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={openVideo}
                aria-label="Redă videoclipul"
                className="group relative overflow-hidden rounded-xl"
              >
                <img src={image} alt="" className="aspect-[1/0.83] w-full object-cover" />
                <span className="absolute inset-0 scale-0 rounded-xl bg-primary/40 transition-transform duration-300 group-hover:scale-100" />
                <span className="absolute top-1/2 left-1/2 flex h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <i className="fa-solid fa-play ml-1" />
                </span>
              </button>
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}
