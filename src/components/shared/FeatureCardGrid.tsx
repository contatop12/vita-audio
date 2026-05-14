import type { LucideIcon } from "lucide-react"
import { container } from "../../vita-tw"

export type FeatureCard = {
  Icon: LucideIcon
  title: string
  description: string
}

type FeatureCardGridProps = {
  title: string
  subtitle?: string
  closingText?: string
  items: FeatureCard[]
}

export function FeatureCardGrid({ title, subtitle, closingText, items }: FeatureCardGridProps) {
  return (
    <section className="bg-vita-gray-bg py-[70px]">
      <div className={container}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[26px] font-semibold leading-snug text-vita-blue md:text-[30px]">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-3 text-sm leading-relaxed text-vita-text-mid md:text-base">
              {subtitle}
            </p>
          ) : null}
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ Icon, title: cardTitle, description }) => (
            <article
              key={cardTitle}
              className="rounded-2xl border border-vita-blue/10 bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
            >
              <Icon className="mb-3 size-6 text-vita-blue" aria-hidden />
              <h3 className="text-base font-semibold text-vita-blue">{cardTitle}</h3>
              <p className="mt-2 text-sm leading-relaxed text-vita-text-mid">{description}</p>
            </article>
          ))}
        </div>
        {closingText ? (
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-vita-text-mid md:text-base">
            {closingText}
          </p>
        ) : null}
      </div>
    </section>
  )
}
