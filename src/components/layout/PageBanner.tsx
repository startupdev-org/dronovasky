import { Link } from "react-router-dom"
import { Container } from "../ui/SectionHeading"

type Crumb = {
  label: string
  href?: string
}

export function PageBanner({ title, crumbs }: { title: string; crumbs: Crumb[] }) {
  return (
    <div className="relative mt-5 overflow-hidden bg-[url('/images/page-header-bg.jpg')] bg-cover bg-center px-[15px] pt-[160px] pb-[80px] sm:pt-[220px] sm:pb-[120px]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(4,34,69,0.5),rgba(4,34,69,0.5)),linear-gradient(270deg,rgba(4,34,69,0)_46%,rgba(4,34,69,0.8)_100%),linear-gradient(0deg,rgba(4,34,69,0)_82%,rgba(4,34,69,0.8)_100%)]" />
      <Container className="relative z-10">
        <h1 className="mb-4 text-[40px] leading-none font-semibold text-white capitalize sm:text-[60px]">{title}</h1>
        <nav aria-label="Breadcrumb">
          <ol className="m-0 flex list-none flex-wrap items-center p-0 text-base font-medium text-white capitalize">
            {crumbs.map((crumb, index) => (
              <li key={`${crumb.label}-${index}`} className="flex items-center">
                {index > 0 ? <span className="px-2">/</span> : null}
                {crumb.href ? (
                  <Link to={crumb.href} className="transition-colors hover:text-accent">
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </Container>
    </div>
  )
}
