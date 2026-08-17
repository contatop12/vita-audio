import { container } from "../../vita-tw"
import { CtaButton } from "./CtaButton"

type BlocoConteudoProps = {
  title: string
  paragraphs?: string[]
  bullets?: string[]
  closingText?: string
  ctaLabel?: string
  ctaMode?: "form" | "whatsapp"
  /** Alterna o fundo para intercalar seções ao longo da página. */
  background?: "white" | "gray"
  /** Centraliza o conteúdo em coluna estreita (padrão) ou usa a largura total. */
  align?: "center" | "left"
}

export function BlocoConteudo({
  title,
  paragraphs = [],
  bullets,
  closingText,
  ctaLabel,
  ctaMode = "form",
  background = "white",
  align = "center",
}: BlocoConteudoProps) {
  const bg = background === "gray" ? "bg-vita-gray-bg" : "bg-white"
  const wrapper =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left"

  return (
    <section className={`${bg} py-[70px]`}>
      <div className={container}>
        <div className={wrapper}>
          <h2 className="text-[26px] font-semibold leading-snug text-vita-blue md:text-[30px]">
            {title}
          </h2>
          {paragraphs.map((text) => (
            <p
              key={text}
              className="mt-4 text-sm leading-relaxed text-vita-text-mid md:text-base"
            >
              {text}
            </p>
          ))}
        </div>
        {bullets?.length ? (
          <ul
            className={`mt-8 grid grid-cols-1 gap-3 text-left sm:grid-cols-2 ${
              align === "center" ? "mx-auto max-w-3xl" : "max-w-3xl"
            }`}
          >
            {bullets.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 rounded-xl border border-vita-blue/10 bg-vita-gray-bg p-4 text-sm leading-relaxed text-vita-text-mid"
              >
                <span className="text-vita-orange" aria-hidden>
                  ✔
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {closingText ? (
          <p
            className={`mt-8 text-sm font-semibold leading-relaxed text-vita-blue md:text-base ${
              align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
            }`}
          >
            {closingText}
          </p>
        ) : null}
        {ctaLabel ? (
          <div className={`mt-8 ${align === "center" ? "text-center" : ""}`}>
            <CtaButton variant={ctaMode === "whatsapp" ? "whatsapp" : "formBrand"}>
              {ctaLabel}
            </CtaButton>
          </div>
        ) : null}
      </div>
    </section>
  )
}
