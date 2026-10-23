import { posts } from "../../data/content"
import { Container, SectionHeading } from "../ui/SectionHeading"

export function Blog() {
  return (
    <section id="blog" className="pt-[100px] pb-[70px]">
      <Container>
        <div className="mb-16 lg:mb-20">
          <SectionHeading align="center" eyebrow="latest blog" title="Latest blog pool tips and insights" />
        </div>
        <div className="grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title}>
              <a href="#blog" className="mb-5 block overflow-hidden rounded-xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="aspect-[1/0.744] w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </a>
              <div className="mx-[15px]">
                <h2 className="mb-[15px] text-xl leading-snug">
                  <a href="#blog" className="text-primary">
                    {post.title}
                  </a>
                </h2>
                <p className="m-0 mb-5">{post.excerpt}</p>
                <a
                  href="#blog"
                  className="group relative inline-flex items-center pr-7 text-base font-bold text-accent capitalize transition-colors hover:text-primary"
                >
                  read more
                  <i className="fa-solid fa-arrow-right absolute top-1/2 right-0 -translate-y-1/2 -rotate-45 transition-transform group-hover:rotate-0" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
