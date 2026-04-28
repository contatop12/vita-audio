import { FormEvent, useEffect, useMemo, useState } from "react"
import { OBRIGADO_PATH } from "../constants/paths"
import { LEAD_WEBHOOK_URL, LEAD_WEBHOOK_URL_2 } from "../constants/site"
import {
  WHATSAPP_LEAD_CODI_ID,
  WHATSAPP_LEAD_FORM_ID,
  WHATSAPP_LEAD_FORM_NAME,
  WHATSAPP_LEAD_POPUP_EVENT,
  openWhatsAppLeadPopup,
} from "../utils/whatsappLeadPopup"
import { WhatsAppIcon } from "./WhatsAppIcon"

const BR_DDI = "55"
const UTM_FIELDS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const

function getUtmParams(): Record<(typeof UTM_FIELDS)[number], string> {
  const search = new URLSearchParams(window.location.search)
  return {
    utm_source: search.get("utm_source") ?? "",
    utm_medium: search.get("utm_medium") ?? "",
    utm_campaign: search.get("utm_campaign") ?? "",
    utm_term: search.get("utm_term") ?? "",
    utm_content: search.get("utm_content") ?? "",
  }
}

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11)

  if (digits.length <= 2) return digits
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

export function Section13WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)
  const [nome, setNome] = useState("")
  const [whats, setWhats] = useState("")
  const [consent, setConsent] = useState(true)
  const utmParams = useMemo(() => getUtmParams(), [])

  useEffect(() => {
    const handleOpen = () => setIsOpen(true)
    window.addEventListener(WHATSAPP_LEAD_POPUP_EVENT, handleOpen)
    return () => window.removeEventListener(WHATSAPP_LEAD_POPUP_EVENT, handleOpen)
  }, [])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!consent) return

    const digits = whats.replace(/\D/g, "")
    const telefoneComDdi = digits ? `${BR_DDI}${digits}` : whats
    const payload = {
      form_id: WHATSAPP_LEAD_FORM_NAME,
      codi_id: WHATSAPP_LEAD_CODI_ID,
      nome: nome.trim(),
      telefone: telefoneComDdi,
      consentimento: consent,
      ...utmParams,
      origem: WHATSAPP_LEAD_FORM_ID,
      pagina: window.location.href,
      enviadoEm: new Date().toISOString(),
    }

    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    } as const

    void Promise.allSettled([
      fetch(LEAD_WEBHOOK_URL, request),
      fetch(LEAD_WEBHOOK_URL_2, request),
    ])

    setIsOpen(false)
    window.location.href = OBRIGADO_PATH
  }

  return (
    <>
      <button
        type="button"
        onClick={openWhatsAppLeadPopup}
        className="animate-vita-wa-pulse fixed bottom-7 right-7 z-999 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
        title="Fale pelo WhatsApp"
        aria-label="Abrir formulário de contato no WhatsApp"
      >
        <WhatsAppIcon size={28} />
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-1001 flex items-center justify-center bg-[#001f3d]/45 p-4 backdrop-blur-[1px]">
          <div className="w-full max-w-md rounded-2xl border border-[#d9e4f2] bg-white p-6 shadow-[0_18px_60px_rgba(0,40,80,0.2)]">
            <h3 className="text-[22px] font-semibold text-vita-blue">
              Fale com a Vita Audio
            </h3>
            <p className="mt-1 mb-6 text-sm leading-relaxed text-vita-text-mid">
              Preencha os dados e nossa equipe entrará em contato.
            </p>
            <form
              id={WHATSAPP_LEAD_FORM_ID}
              data-form-id={WHATSAPP_LEAD_FORM_ID}
              className="space-y-4"
              onSubmit={handleSubmit}
            >
              {UTM_FIELDS.map((field) => (
                <input
                  key={field}
                  type="hidden"
                  name={field}
                  value={utmParams[field]}
                  readOnly
                />
              ))}
              <label className="block space-y-1.5">
                <span className="text-xs font-semibold tracking-wide text-vita-blue/80">
                  Nome
                </span>
                <input
                  type="text"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Seu nome completo"
                  className="w-full rounded-xl border border-[#d3dfec] bg-[#fbfdff] px-3.5 py-2.5 text-sm text-vita-text outline-none transition placeholder:text-neutral-400 focus:border-vita-blue focus:bg-white"
                />
              </label>

              <label className="block space-y-1.5">
                <span className="text-xs font-semibold tracking-wide text-vita-blue/80">
                  DDI + DDD + WhatsApp
                </span>
                <div className="flex items-center rounded-xl border border-[#d3dfec] bg-[#fbfdff] transition focus-within:border-vita-blue focus-within:bg-white">
                  <span className="border-r border-[#d3dfec] px-3 text-sm font-medium text-vita-blue/90">
                    +{BR_DDI}
                  </span>
                  <input
                    type="tel"
                    required
                    value={whats}
                    onChange={(e) => setWhats(formatPhone(e.target.value))}
                    placeholder="(19) 99880-6076"
                    inputMode="numeric"
                    autoComplete="tel"
                    maxLength={15}
                    className="w-full bg-transparent px-3.5 py-2.5 text-sm text-vita-text outline-none placeholder:text-neutral-400"
                  />
                </div>
              </label>

              <label className="flex items-start gap-2.5 rounded-lg bg-[#f4f8fc] p-3 text-xs leading-relaxed text-vita-text-mid">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 size-4 accent-vita-blue"
                  required
                />
                <span>
                  Autorizo o uso dos meus dados para contato, conforme os termos de
                  privacidade.
                </span>
              </label>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-1/2 rounded-xl border border-[#cfdbea] px-3 py-2.5 text-sm font-medium text-vita-text-mid transition hover:bg-[#f6f9fc]"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="w-1/2 rounded-xl bg-vita-blue px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-vita-blue-dark disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={!consent}
                >
                  Enviar contato
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  )
}
