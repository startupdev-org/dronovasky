import { useState } from "react"

type AccordionItem = {
  question: string
  answer: string
}

export function Accordion({ items, initial = 1 }: { items: AccordionItem[]; initial?: number }) {
  const [open, setOpen] = useState(initial)

  return (
    <div className="space-y-[30px]">
      {items.map((item, index) => {
        const active = open === index
        return (
          <article key={item.question} className="overflow-hidden rounded-xl border border-line bg-white">
            <button
              type="button"
              className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-xl leading-snug font-semibold transition-colors ${active ? "border-b border-white/10 bg-accent text-white" : "bg-transparent text-primary"}`}
              aria-expanded={active}
              onClick={() => setOpen(active ? -1 : index)}
            >
              {item.question}
              <i className={`fa-solid ${active ? "fa-chevron-up text-white" : "fa-chevron-down text-primary"} text-[22px]`} />
            </button>
            {active ? <p className="m-0 bg-accent px-5 py-[18px] pr-12 text-white">{item.answer}</p> : null}
          </article>
        )
      })}
    </div>
  )
}
