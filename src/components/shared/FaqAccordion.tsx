import { useLayoutEffect, useRef, useState } from "react"
import { ChevronRight } from "lucide-react"
import { container } from "../../vita-tw"

export type FaqItem = {
  question: string
  answer: string
}

type FaqAccordionProps = {
  title: string
  items: FaqItem[]
}

export function FaqAccordion({ title, items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ansRefs = useRef<(HTMLDivElement | null)[]>([])

  useLayoutEffect(() => {
    ansRefs.current.forEach((el, i) => {
      if (!el) return
      if (openIndex === i) {
        el.style.maxHeight = `${el.scrollHeight}px`
      } else {
        el.style.maxHeight = ""
      }
    })
  }, [openIndex, items])

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i))
  }

  return (
    <section className="bg-vita-gray-bg py-[70px] text-center">
      <div className={container}>
        <h2 className="mb-10 text-[22px] font-semibold leading-snug tracking-wide text-vita-blue md:text-[26px]">
          {title}
        </h2>
        <div className="mx-auto max-w-[680px] text-left">
          {items.map((item, i) => {
            const open = openIndex === i
            return (
              <div key={item.question} className="mb-2.5">
                <button
                  type="button"
                  className={`flex w-full cursor-pointer items-center justify-between gap-3.5 rounded-xl border-0 px-5 py-4 text-left text-sm font-semibold text-white shadow-[0_2px_8px_rgba(0,60,120,0.12)] transition-[background,transform,box-shadow] duration-[220ms] ease-out hover:-translate-y-px hover:bg-vita-blue-dark hover:shadow-[0_6px_18px_rgba(0,60,120,0.18)] ${
                    open
                      ? "bg-vita-blue-dark shadow-[0_4px_14px_rgba(0,50,100,0.2)]"
                      : "bg-vita-blue"
                  }`}
                  onClick={() => toggle(i)}
                >
                  <span className="flex-1 leading-snug">{item.question}</span>
                  <ChevronRight
                    className={`size-[22px] shrink-0 opacity-90 transition-transform duration-300 [transition-timing-function:cubic-bezier(0.34,1.45,0.64,1)] ${open ? "rotate-90" : ""}`}
                    strokeWidth={2.25}
                    aria-hidden
                  />
                </button>
                <div
                  className="max-h-0 overflow-hidden bg-white transition-[max-height] duration-300 ease-out"
                  ref={(el) => {
                    ansRefs.current[i] = el
                  }}
                >
                  <p className="px-[18px] py-4 text-sm leading-relaxed text-vita-text-mid">
                    {item.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
