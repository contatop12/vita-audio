export const WHATSAPP_LEAD_FORM_ID = "vita-audio-whatsapp-lead-form"
export const WHATSAPP_LEAD_POPUP_EVENT = "vita-audio:open-whatsapp-lead-popup"

export function openWhatsAppLeadPopup() {
  window.dispatchEvent(new Event(WHATSAPP_LEAD_POPUP_EVENT))
}
