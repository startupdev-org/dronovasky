import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { navItems } from "../../data/content"
import { Button } from "../ui/Button"

export function Header() {
  const [stuck, setStuck] = useState(false)
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setExpanded(null)
  }, [location.pathname, location.hash])

  const close = () => setOpen(false)

  return (
    <header
      className={`z-[100] border-b border-white/10 ${stuck ? "fixed inset-x-0 top-0 bg-primary" : "absolute inset-x-0 top-5 mx-auto max-w-[1880px]"}`}
    >
      <div className="mx-auto flex max-w-[1300px] items-center gap-4 px-[15px] py-[18px] lg:py-[25px]">
        <Link to="/" className="shrink-0" onClick={close}>
          <img src="/images/logo.svg" alt="Waveup" className="h-[46px] w-auto" />
        </Link>

        <nav className="hidden flex-1 justify-center lg:flex">
          <ul className="m-0 flex list-none items-center p-0">
            {navItems.map((item) => (
              <li key={item.label} className="group relative">
                <Link
                  to={item.href}
                  className="inline-flex items-center px-3 py-[15px] text-base font-medium text-white capitalize transition-colors hover:text-accent xl:px-5"
                >
                  {item.label}
                  {item.children ? <i className="fa-solid fa-chevron-down ml-2 text-sm" /> : null}
                </Link>
                {item.children ? (
                  <ul className="invisible absolute top-full left-0 z-20 w-[235px] origin-top scale-y-90 list-none rounded-xl bg-accent py-1.5 opacity-0 transition-all duration-300 group-hover:visible group-hover:scale-y-100 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          to={child.href}
                          className="block px-5 py-2 text-base font-medium text-white transition-all hover:pl-6 hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto hidden lg:block">
          <Button href="/contact" tone="highlight">
            Get In Touch
          </Button>
        </div>

        <button
          type="button"
          className="ml-auto flex h-[38px] w-[38px] flex-col items-center justify-center gap-1 rounded-md bg-accent lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
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
            {navItems.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-5 py-2 text-left text-base font-medium text-white capitalize"
                    onClick={() => setExpanded((current) => (current === item.label ? null : item.label))}
                  >
                    {item.label}
                    <i className={`fa-solid fa-chevron-down text-xs transition ${expanded === item.label ? "rotate-180 text-primary" : ""}`} />
                  </button>
                ) : (
                  <Link to={item.href} onClick={close} className="block px-5 py-2 text-base font-medium text-white capitalize">
                    {item.label}
                  </Link>
                )}
                {item.children && expanded === item.label ? (
                  <ul className="m-0 list-none p-0">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link to={child.href} onClick={close} className="block py-1.5 pr-5 pl-8 text-white">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
            <li className="px-5 py-3">
              <Button href="/contact" tone="highlight" className="w-auto">
                Get In Touch
              </Button>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  )
}
