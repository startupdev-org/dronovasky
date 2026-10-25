import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { sitePages } from "../../data/content"
import { company, companyLogo } from "../../data/company"
import { Button } from "../ui/Button"

export function Header() {
  const [stuck, setStuck] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  const close = () => setOpen(false)

  return (
    <header
      className={`z-[100] border-b border-white/10 ${stuck ? "fixed inset-x-0 top-0 bg-primary" : "absolute inset-x-0 top-5 mx-auto max-w-[1880px]"}`}
    >
      <div className="mx-auto flex max-w-[1300px] items-center gap-4 px-[15px] py-[18px] lg:py-[25px]">
        <Link to="/" className="shrink-0" onClick={close}>
          <img src={companyLogo} alt={company.name} className="h-[67px] w-auto" />
        </Link>

        <nav className="hidden flex-1 justify-center lg:flex">
          <ul className="m-0 flex list-none items-center p-0">
            {sitePages.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="inline-flex items-center px-3 py-[15px] text-base font-medium text-white capitalize transition-colors hover:text-accent xl:px-5"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto hidden lg:block">
          <Button href="/contact" tone="highlight">
            Contactează-ne
          </Button>
        </div>

        <button
          type="button"
          className="ml-auto flex h-[38px] w-[38px] flex-col items-center justify-center gap-1 rounded-md bg-accent lg:hidden"
          aria-label={open ? "Închide meniul" : "Deschide meniul"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className={`block h-[3px] w-[22px] rounded bg-white transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-[3px] w-[22px] rounded bg-white transition ${open ? "opacity-0" : ""}`} />
          <span className={`block h-[3px] w-[22px] rounded bg-white transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open ? (
        <div className="absolute inset-x-0 top-full bg-accent lg:hidden">
          <ul className="m-0 list-none px-0 py-2">
            {sitePages.map((item) => (
              <li key={item.href}>
                <Link to={item.href} onClick={close} className="block px-5 py-2 text-base font-medium text-white capitalize">
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="px-5 py-3">
              <Button href="/contact" tone="highlight" className="w-auto">
                Contactează-ne
              </Button>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  )
}
