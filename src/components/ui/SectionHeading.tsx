import type { ReactNode } from "react"
import { Link } from "react-router-dom"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: "left" | "center"
  tone?: "dark" | "light"
  as?: "h1" | "h2"
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  as = "h2",
  className = "",
}: SectionHeadingProps) {
  const Title = as
  const light = tone === "light"

  return (
    <div className={`${align === "center" ? "mx-auto max-w-[700px] text-center" : ""} ${className}`}>
      <p
        className={`mb-2.5 inline-flex items-center gap-2.5 text-sm font-semibold tracking-[0.2em] uppercase ${light ? "text-white" : "text-primary"}`}
      >
        <img
          src="/images/icon-sub-heading.svg"
          alt=""
          className={`h-5 w-5 ${light ? "brightness-0 invert" : ""}`}
        />
        {eyebrow}
      </p>
      <Title
        className={`font-semibold ${as === "h1" ? "text-[34px] leading-[1.15] sm:text-[46px] lg:text-[60px]" : "text-[30px] leading-[1.2] sm:text-[38px] lg:text-[46px]"} ${light ? "text-white" : "text-primary"}`}
      >
        {title}
      </Title>
      {description ? (
        <p className={`mt-5 mb-0 ${light ? "text-white" : "text-muted"}`}>{description}</p>
      ) : null}
    </div>
  )
}

type CheckListProps = {
  items: string[]
  columns?: boolean
  className?: string
  tone?: "dark" | "light"
}

export function CheckList({ items, columns = false, className = "", tone = "dark" }: CheckListProps) {
  return (
    <ul className={`m-0 list-none p-0 ${columns ? "flex flex-wrap gap-x-[30px] gap-y-5" : "space-y-[15px]"} ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className={`relative pl-[30px] leading-normal ${columns ? "w-full sm:w-[calc(50%-15px)]" : ""} ${tone === "light" ? "text-white" : "text-muted"}`}
        >
          <i className="fa-solid fa-circle-check absolute top-0.5 left-0 text-[18px] text-accent" />
          {item}
        </li>
      ))}
    </ul>
  )
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1300px] px-[15px] ${className}`}>{children}</div>
}

export function SectionLink({
  href,
  children,
  tone = "dark",
}: {
  href: string
  children: ReactNode
  tone?: "dark" | "light"
}) {
  const classes = `font-semibold capitalize underline transition-colors ${tone === "light" ? "text-accent hover:text-white" : "text-primary hover:text-accent"}`

  if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <Link to={href} className={classes}>
      {children}
    </Link>
  )
}
