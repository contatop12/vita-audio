import { container } from "../../vita-tw"
import { CtaButton } from "./CtaButton"

type PrimaryPromoBlockProps = {
  title: string
  description: string
  buttonLabel: string
  linkHref?: string
  linkLabel?: string
}

export function PrimaryPromoBlock({
  title,
  description,
  buttonLabel,
  linkHref,
  linkLabel,
}: PrimaryPromoBlockProps) {
  return (
    <section className="bg-vita-blue py-[70px] text-white">
      <div className={`${container} mx-auto max-w-3xl text-center`}>
        <h2 className="text-[26px] font-semibold md:text-[30px]">{title}</h2>
        <p className="mt-4 text-sm leading-relaxed text-white/90 md:text-base">{description}</p>
        {linkHref && linkLabel ? (
          <p className="mt-4 text-sm">
            <a href={linkHref} className="font-semibold underline underline-offset-4">
              {linkLabel}
            </a>
          </p>
        ) : null}
        <div className="mt-7">
          <CtaButton variant="formInverse">{buttonLabel}</CtaButton>
        </div>
      </div>
    </section>
  )
}
