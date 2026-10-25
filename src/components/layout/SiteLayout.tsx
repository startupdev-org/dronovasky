import { useEffect, useState } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { companyLogo } from "../../data/company"
import { VideoModal } from "../ui/VideoModal"
import { Footer } from "./Footer"
import { Header } from "./Header"

export type SiteOutletContext = {
  openVideo: () => void
}

export function SiteLayout() {
  const [videoOpen, setVideoOpen] = useState(false)
  const [loader, setLoader] = useState<"show" | "hide" | "gone">("show")
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const timer = window.setTimeout(() => setLoader("hide"), 900)
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
      {loader !== "gone" ? (
        <div
          className={`fixed inset-0 z-[1000] flex items-center justify-center bg-primary transition-opacity duration-500 ${loader === "hide" ? "pointer-events-none opacity-0" : "opacity-100"}`}
          onTransitionEnd={(event) => {
            if (event.target === event.currentTarget && loader === "hide") setLoader("gone")
          }}
        >
          <div className="relative flex h-[120px] w-[120px] items-center justify-center">
            <div className="absolute inset-0 animate-[loader-spin_1.5s_linear_infinite] rounded-full border border-transparent border-t-white border-b-white" />
            <img
              src={companyLogo}
              alt=""
              className="w-[78px]"
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
