import { container } from "../../vita-tw"
import { CtaButton } from "./CtaButton"

export type LinhaProduto = {
  name: string
  tagline: string
  description: string
  highlights: string[]
}

type CardsLinhasProps = {
  title: string
  subtitle?: string
  linhas: LinhaProduto[]
  closingTitle?: string
  ctaLabel?: string
  ctaMode?: "form" | "whatsapp"
  background?: "white" | "gray"
}

export function CardsLinhas({
  title,
  subtitle,
  linhas,
  closingTitle,
  ctaLabel,
  ctaMode = "form",
  background = "gray",
}: CardsLinhasProps) {
  const bg = background === "gray" ? "bg-vita-gray-bg" : "bg-white"
  const cardBg = background === "gray" ? "bg-white" : "bg-vita-gray-bg"
  const gridCols =
    linhas.length >= 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2"

  return (
    <section className={`${bg} py-[70px]`}>
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
        <div className={`mt-10 grid grid-cols-1 gap-5 ${gridCols}`}>
          {linhas.map((linha) => (
            <article
              key={linha.name}
              className={`flex flex-col rounded-2xl border border-vita-blue/10 ${cardBg} p-6 shadow-[0_2px_10px_rgba(0,0,0,0.05)]`}
            >
              <h3 className="text-[22px] font-semibold text-vita-blue md:text-[24px]">
                {linha.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-vita-orange">{linha.tagline}</p>
              <p className="mt-4 text-sm leading-relaxed text-vita-text-mid">
                {linha.description}
              </p>
              <ul className="mt-5 space-y-2 text-sm leading-relaxed text-vita-text-mid">
                {linha.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-vita-orange" aria-hidden>
                      ✔
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        {closingTitle || ctaLabel ? (
          <div className="mt-10 text-center">
            {closingTitle ? (
              <p className="mb-5 text-base font-semibold text-vita-blue md:text-lg">
                {closingTitle}
              </p>
            ) : null}
            {ctaLabel ? (
              <CtaButton variant={ctaMode === "whatsapp" ? "whatsapp" : "formBrand"}>
                {ctaLabel}
              </CtaButton>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  )
}
