import { useState } from "react"
import { WHATSAPP_CHAT_URL } from "../../constants/site"
import { btnCta, btnForm, btnIco, container } from "../../vita-tw"
import { openWhatsAppLeadPopup } from "../../utils/whatsappLeadPopup"
import { WhatsAppIcon } from "../WhatsAppIcon"

export type IntencaoOption = {
  label: string
  /** Mensagem enviada ao WhatsApp quando esta opção é a selecionada. */
  message: string
}

type SeletorIntencaoProps = {
  title: string
  subtitle?: string
  options: IntencaoOption[]
  buttonLabel?: string
  ctaMode?: "form" | "whatsapp"
  background?: "white" | "gray"
}

export function SeletorIntencao({
  title,
  subtitle,
  options,
  buttonLabel = "Continuar pelo WhatsApp",
  ctaMode = "form",
  background = "gray",
}: SeletorIntencaoProps) {
  const [selected, setSelected] = useState(0)
  const bg = background === "gray" ? "bg-vita-gray-bg" : "bg-white"
  const message = options[selected]?.message ?? options[0]?.message ?? ""
  const href = `${WHATSAPP_CHAT_URL}?text=${encodeURIComponent(message)}`

  return (
    <section className={`${bg} py-[70px]`}>
      <div className={container}>
        <div className="mx-auto max-w-2xl rounded-2xl border border-vita-blue/10 bg-white p-7 shadow-[0_2px_16px_rgba(0,109,196,0.08)] sm:p-10">
          <h2 className="text-[24px] font-semibold leading-snug text-vita-blue md:text-[28px]">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-3 text-sm leading-relaxed text-vita-text-mid md:text-base">
              {subtitle}
            </p>
          ) : null}
          <fieldset className="mt-6 space-y-2.5">
            <legend className="sr-only">{title}</legend>
            {options.map((option, index) => (
              <label
                key={option.label}
                className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 text-sm leading-relaxed transition ${
                  selected === index
                    ? "border-vita-blue bg-vita-blue/5 text-vita-blue"
                    : "border-vita-blue/15 bg-vita-gray-bg text-vita-text-mid hover:border-vita-blue/35"
                }`}
              >
                <input
                  type="radio"
                  name="vita-intencao"
                  className="mt-0.5 size-4 accent-[#006dc4]"
                  checked={selected === index}
                  onChange={() => setSelected(index)}
                />
                <span className="font-medium">{option.label}</span>
              </label>
            ))}
          </fieldset>
          <div className="mt-7">
            {ctaMode === "whatsapp" ? (
              <a href={href} target="_blank" rel="noreferrer" className={`${btnCta} w-full sm:w-auto`}>
                <WhatsAppIcon className={btnIco} size={18} />
                <span>{buttonLabel}</span>
              </a>
            ) : (
              <button
                type="button"
                onClick={openWhatsAppLeadPopup}
                className={`${btnForm} w-full sm:w-auto`}
              >
                <span>{buttonLabel}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
