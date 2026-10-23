import { Link } from "react-router-dom"
import { teamMembers, teamSocials } from "../../data/content"
import { Container, SectionHeading } from "../ui/SectionHeading"

export function Team() {
  return (
    <section id="team" className="pt-[100px] pb-[70px]">
      <Container>
        <div className="mb-16 lg:mb-20">
          <SectionHeading
            align="center"
            eyebrow="echipa noastră"
            title="Cunoaște specialiștii dedicați curățeniei profesionale"
          />
        </div>
        <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <article key={`${member.image}-${index}`} className="group">
              <div className="relative mb-5 overflow-hidden rounded-3xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="aspect-[1/1.194] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <ul className="absolute inset-x-[30px] bottom-0 m-0 flex list-none justify-center gap-2.5 p-0 opacity-0 transition-all duration-300 group-hover:bottom-[30px] group-hover:opacity-100">
                  {teamSocials.map((social) => (
                    <li key={social.label}>
                      <Link
                        to="/contact"
                        aria-label={social.label}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg text-accent transition-colors hover:bg-accent hover:text-white"
                      >
                        <i className={social.icon} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <h3 className="mb-1 text-xl font-semibold text-primary capitalize">{member.name}</h3>
                <p className="m-0 capitalize">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
