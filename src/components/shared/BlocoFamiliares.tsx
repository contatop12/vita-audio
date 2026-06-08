import { container } from "../../vita-tw"
import { CtaButton } from "./CtaButton"

type BlocoFamiliaresProps = {
  buttonLabel?: string
  includeFilho?: boolean
  familiarDetail?: string
  closingLine?: string
  ctaMode?: "form" | "whatsapp"
}

export function BlocoFamiliares({
  buttonLabel = "Agendar para um Familiar",
  includeFilho = true,
  familiarDetail = "está com dificuldade de ouvir",
  closingLine = "Preencha o formulário. Nós cuidamos do resto.",
  ctaMode = "form",
}: BlocoFamiliaresProps) {
  const familiarList = includeFilho
    ? "um pai, mãe, avô, cônjuge ou filho"
    : "um pai, mãe, avô ou cônjuge"

  return (
    <section className="bg-vita-gray-bg py-[70px]">
      <div className={container}>
        <div className="mx-auto max-w-3xl rounded-2xl border-l-4 border-vita-blue bg-white p-7 shadow-[0_2px_16px_rgba(0,109,196,0.08)] sm:p-10">
          <h2 className="text-2xl font-semibold text-vita-blue md:text-[28px]">
            Você está pesquisando por um familiar?
          </h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-vita-text-mid md:text-base">
            <p>
              Muitas vezes, quem percebe a perda auditiva primeiro não é o próprio paciente,
              mas quem convive com ele.
            </p>
            <p>
              Se você está aqui porque {familiarList} {familiarDetail}, saiba que a Vita Audio
              atende com toda a atenção e respeito que seu familiar merece — independentemente da
              idade.
            </p>
            <p>{closingLine}</p>
          </div>
          <div className="mt-7">
            <CtaButton variant={ctaMode === "whatsapp" ? "whatsapp" : "formBrand"}>{buttonLabel}</CtaButton>
          </div>
        </div>
      </div>
    </section>
  )
}
