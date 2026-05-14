import { container } from "../../vita-tw"

export type DiferencialItem = {
  title: string
  description: string
}

type DiferenciaisListProps = {
  title: string
  items: DiferencialItem[]
}

export function DiferenciaisList({ title, items }: DiferenciaisListProps) {
  return (
    <section className="bg-white py-[70px]">
      <div className={container}>
        <h2 className="mb-8 text-center text-[26px] font-semibold text-vita-blue md:text-[30px]">
          {title}
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-vita-blue/10 bg-vita-gray-bg p-5"
            >
              <h3 className="flex items-start gap-2 text-base font-semibold text-vita-blue">
                <span className="text-vita-orange">✔</span>
                <span>{item.title}</span>
              </h3>
              <p className="mt-2 pl-6 text-sm leading-relaxed text-vita-text-mid">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
