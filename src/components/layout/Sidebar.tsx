import { Link } from "react-router-dom"
import { company, companyContact } from "../../data/company"

type SidebarLink = {
  label: string
  href: string
}

export function CategoryList({
  title,
  items,
  activeHref,
}: {
  title?: string
  items: SidebarLink[]
  activeHref?: string
}) {
  return (
    <div className="mb-[60px] overflow-hidden rounded-xl">
      {title ? (
        <h3 className="bg-primary px-[30px] py-[25px] text-xl font-semibold text-white capitalize">{title}</h3>
      ) : null}
      <ul className={`m-0 list-none space-y-5 bg-secondary p-[30px] ${title ? "" : "rounded-xl"}`}>
        {items.map((item) => {
          const active = activeHref === item.href
          return (
            <li key={item.href}>
              <Link
                to={item.href}
                className={`group relative z-0 block overflow-hidden rounded-xl bg-white py-4 pr-12 pl-5 capitalize transition-colors ${active ? "text-white" : "text-muted hover:text-white"}`}
              >
                <span
                  className={`absolute inset-x-0 bottom-0 -z-10 bg-primary transition-all duration-300 ${active ? "h-full" : "h-0 group-hover:h-full"}`}
                />
                {item.label}
                <span
                  className={`absolute top-1/2 right-5 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full text-[11px] ${active ? "bg-white text-primary" : "bg-secondary text-muted group-hover:text-primary"}`}
                >
                  <i className="fa-solid fa-arrow-right" />
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export function HelpCard() {
  return (
    <aside className="relative overflow-hidden rounded-xl bg-[url('/images/sidebar-cta-bg.jpg')] bg-cover bg-center p-[30px]">
      <div className="absolute inset-0 bg-primary/60" />
      <div className="relative z-10">
        <img src="/images/logo.svg" alt="" className="mb-[30px] w-[190px]" />
        <h3 className="mb-10 text-xl leading-snug font-semibold text-white">
          Ai nevoie de ajutor? Suntem aici pentru a-ți oferi soluția potrivită.
        </h3>
        <div className="rounded-[20px] bg-white/10 p-[30px] backdrop-blur-md">
          <div className="mb-5 border-b border-white/10 pb-5">
            <h3 className="mb-2.5 text-xl font-semibold text-white">Ai nevoie de ajutor?</h3>
            <a href={companyContact.phoneHref} className="text-white transition-colors hover:text-accent">
              {company.phone.display}
            </a>
          </div>
          <div>
            <h3 className="mb-2.5 text-xl font-semibold text-white">Scrie-ne</h3>
            <a href={companyContact.emailHref} className="text-white transition-colors hover:text-accent">
              {company.email}
            </a>
          </div>
        </div>
      </div>
    </aside>
  )
}
