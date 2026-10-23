import { useState } from "react"
import { Link } from "react-router-dom"
import { projectFilters, projects, type Project, type ProjectCategory } from "../../data/content"
import { Container, SectionHeading } from "../ui/SectionHeading"

type ProjectsProps = {
  items?: Project[]
  showIntro?: boolean
}

export function Projects({ items = projects, showIntro = true }: ProjectsProps) {
  const [filter, setFilter] = useState<ProjectCategory>("all")
  const visible = items.filter((project) => filter === "all" || project.category === filter)

  return (
    <section id="projects" className={showIntro ? "pt-[40px] pb-[70px] lg:pt-[80px]" : "pt-[100px] pb-[70px]"}>
      <Container>
        {showIntro ? (
          <div className="mb-16 lg:mb-20">
            <SectionHeading
              align="center"
              eyebrow="Our projects"
              title="Our projects crystal clear pools in action"
            />
          </div>
        ) : null}

        <ul className="mb-[60px] flex list-none flex-wrap items-center justify-center gap-x-10 gap-y-4 p-0">
          {projectFilters.map((item, index) => (
            <li key={item.id} className="relative">
              <button
                type="button"
                onClick={() => setFilter(item.id)}
                className={`text-base font-medium capitalize transition-colors ${filter === item.id ? "text-accent" : "text-muted hover:text-accent"}`}
              >
                {item.label}
              </button>
              {index < projectFilters.length - 1 ? (
                <span className="absolute top-1/2 -right-[22px] h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-line" />
              ) : null}
            </li>
          ))}
        </ul>

        <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <Link key={project.title} to="/projects" className="group relative block overflow-hidden rounded-xl">
              <img
                src={project.image}
                alt={project.title}
                className="aspect-[1/1.02] w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/50" />
              <div className="absolute bottom-[30px] left-[30px] z-10 pr-6">
                <p className="mb-1 text-white capitalize">{project.label}</p>
                <h3 className="text-xl text-white capitalize">{project.title}</h3>
              </div>
              <span className="absolute top-[50px] right-[30px] z-10 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-accent text-2xl text-white opacity-0 transition-all duration-500 group-hover:top-[30px] group-hover:opacity-100">
                <i className="fa-solid fa-arrow-right" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
