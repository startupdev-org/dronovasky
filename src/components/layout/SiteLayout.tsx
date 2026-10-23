import { useEffect, useState } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { VideoModal } from "../ui/VideoModal"
import { Footer } from "./Footer"
import { Header } from "./Header"

export type SiteOutletContext = {
  openVideo: () => void
}

export function SiteLayout() {
  const [videoOpen, setVideoOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 900)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (hash) {
      const timer = window.setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" })
      }, 60)
      return () => window.clearTimeout(timer)
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  }, [pathname, hash])

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-primary">
          <div className="relative h-[100px] w-[100px]">
            <div className="absolute inset-0 animate-[loader-spin_1.5s_linear_infinite] rounded-full border border-transparent border-t-white border-b-white" />
            <img
              src="/images/loader.svg"
              alt=""
              className="absolute top-1/2 left-1/2 w-[66px] -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      ) : null}
      <Header />
      <Outlet context={{ openVideo: () => setVideoOpen(true) } satisfies SiteOutletContext} />
      <Footer />
      {videoOpen ? <VideoModal onClose={() => setVideoOpen(false)} /> : null}
    </>
  )
}
