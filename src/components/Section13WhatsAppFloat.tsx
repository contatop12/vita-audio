import { WHATSAPP_URL } from "../constants/site"
import { WhatsAppIcon } from "./WhatsAppIcon"

export function Section13WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      className="animate-vita-wa-pulse fixed bottom-7 right-7 z-[999] flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
      target="_blank"
      title="Fale pelo WhatsApp"
      rel="noreferrer"
    >
      <WhatsAppIcon size={28} />
    </a>
  )
}
