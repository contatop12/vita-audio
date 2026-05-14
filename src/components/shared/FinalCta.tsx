import { container } from "../../vita-tw"
import { CtaButton } from "./CtaButton"

type FinalCtaProps = {
  title: string
  subtitle: string
  primaryLabel: string
  secondaryLabel?: string
}

export function FinalCta({ title, subtitle, primaryLabel, secondaryLabel }: FinalCtaProps) {
  return (
    <section className="bg-vita-blue py-[60px] text-center">
      <div className={container}>
        <h2 className="mb-2 text-[28px] font-semibold text-white md:text-[32px]">{title}</h2>
        <p className="mx-auto mb-7 max-w-[680px] text-sm leading-relaxed text-white/90">
          {subtitle}
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CtaButton variant="formInverse">{primaryLabel}</CtaButton>
          {secondaryLabel ? (
            <CtaButton variant="whatsapp">{secondaryLabel}</CtaButton>
          ) : null}
        </div>
      </div>
    </section>
  )
}
