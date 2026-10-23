import type { ReactNode } from "react"
import { Link } from "react-router-dom"

type ButtonProps = {
  href?: string
  children: ReactNode
  tone?: "accent" | "highlight" | "inverse"
  arrow?: boolean
  className?: string
  type?: "button" | "submit"
  onClick?: () => void
}

export function Button({
  href = "/contact",
  children,
  tone = "accent",
  arrow = true,
  className = "",
  type,
  onClick,
}: ButtonProps) {
  const surface =
    tone === "inverse"
      ? "bg-white text-accent group-hover:text-white"
      : "bg-accent text-white"
  const labelHover = tone === "highlight" ? "group-hover:text-primary" : ""
  const fill = tone === "highlight" ? "bg-white" : "bg-primary"
  const arrowColor =
    tone === "highlight"
      ? "text-white group-hover:text-primary"
      : tone === "inverse"
        ? "text-accent group-hover:text-white"
        : "text-white"

  const classes = `group relative inline-flex items-center justify-center overflow-hidden rounded-md px-5 py-[17px] text-base leading-none font-bold capitalize transition-colors duration-500 ${arrow ? "pr-11" : "w-full"} ${surface} ${labelHover} ${className}`
  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {arrow ? (
        <i
          className={`fa-solid fa-arrow-right absolute top-1/2 right-5 z-10 -translate-y-1/2 -rotate-45 text-base transition-transform duration-300 group-hover:rotate-0 ${arrowColor}`}
        />
      ) : null}
      <span
        className={`absolute inset-y-0 -left-[15%] z-0 w-0 skew-x-[30deg] transition-all duration-500 group-hover:left-0 group-hover:w-full group-hover:skew-x-0 ${fill}`}
      />
    </>
  )

  if (type) {
    return (
      <button type={type} onClick={onClick} className={classes}>
        {content}
      </button>
    )
  }

  if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <Link to={href} className={classes}>
      {content}
    </Link>
  )
}
