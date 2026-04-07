import { Phone } from "lucide-react"
import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_URL } from "../constants/site"
import { btnCta, btnCtaTopbar, btnIco, container } from "../vita-tw"
import { WhatsAppIcon } from "./WhatsAppIcon"

export function Section01TopBar() {
  return (
    <div className="sticky top-0 z-[1000] bg-vita-blue py-2.5">
      <div
        className={`${container} flex flex-wrap items-center justify-center gap-3 md:flex-nowrap md:justify-between`}
      >
        <a href="#" className="block shrink-0">
          <img
            src="/images/logo.png"
            alt="Vita Audio Aparelhos Auditivos"
            className="h-11 w-auto brightness-0 invert"
          />
        </a>
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-center text-xs text-white/85">
            Ligue para mais informações ou agendamentos
          </span>
          <a
            href={PHONE_HREF}
            className="flex items-center gap-1.5 text-[15px] font-semibold text-white"
          >
            <Phone className="shrink-0" size={18} strokeWidth={2.25} aria-hidden />
            {PHONE_DISPLAY}
          </a>
        </div>
        <a
          href={WHATSAPP_URL}
          className={`${btnCta} ${btnCtaTopbar} max-[600px]:hidden`}
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppIcon className={btnIco} size={16} />
          <span>AGENDE UMA AVALIAÇÃO GRATUITA</span>
        </a>
      </div>
    </div>
  )
}
