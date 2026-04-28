export const WHATSAPP_LEAD_FORM_ID = "vita-audio-whatsapp-lead-form"
/** Nome do projeto no payload (campo `form_id`). */
export const WHATSAPP_LEAD_FORM_NAME = "Vita Audio"
export const WHATSAPP_LEAD_POPUP_EVENT = "vita-audio:open-whatsapp-lead-popup"

/** Id fixo (32 dígitos numéricos) enviado em `codi_id` — altere se o back-end fornecer outro valor. */
export const WHATSAPP_LEAD_CODI_ID = "12026384759183047591628304759183"

export function openWhatsAppLeadPopup() {
  window.dispatchEvent(new Event(WHATSAPP_LEAD_POPUP_EVENT))
}
