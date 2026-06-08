import type { ReactNode } from "react"
import { WHATSAPP_LANDING_URL } from "../../constants/site"
import { btnCta, btnForm, btnFormInverse, btnIco } from "../../vita-tw"
import { openWhatsAppLeadPopup } from "../../utils/whatsappLeadPopup"
import { WhatsAppIcon } from "../WhatsAppIcon"

type CtaButtonProps = {
  variant: "form" | "whatsapp" | "formBrand" | "formInverse"
  children: ReactNode
  className?: string
}

export function CtaButton({ variant, children, className = "" }: CtaButtonProps) {
  if (variant === "whatsapp") {
    return (
      <a
        href={WHATSAPP_LANDING_URL}
        target="_blank"
        rel="noreferrer"
        className={`${btnCta} ${className}`}
      >
        <WhatsAppIcon className={btnIco} size={18} />
        <span>{children}</span>
      </a>
    )
  }

  const buttonClass =
    variant === "formBrand"
      ? btnForm
      : variant === "formInverse"
        ? btnFormInverse
        : btnForm

  return (
    <button type="button" onClick={openWhatsAppLeadPopup} className={`${buttonClass} ${className}`}>
      <span>{children}</span>
    </button>
  )
}
