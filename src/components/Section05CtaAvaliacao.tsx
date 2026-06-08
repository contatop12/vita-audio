import { WHATSAPP_LANDING_URL } from "../constants/site"
import { btnForm, container } from "../vita-tw"
import { openWhatsAppLeadPopup } from "../utils/whatsappLeadPopup"

type Props = { ctaMode?: "form" | "whatsapp" }

export function Section05CtaAvaliacao({ ctaMode = "form" }: Props) {
  return (
    <section className="bg-vita-blue py-[60px] text-center">
      <div className={container}>
        <h2 className="mb-2 text-[28px] font-semibold text-white md:text-[32px]">
          Ouvir melhor começa com uma avaliação
        </h2>
        <p className="mx-auto mb-7 max-w-[680px] text-sm leading-relaxed text-white/90">
          {ctaMode === "whatsapp"
            ? "Fale agora pelo WhatsApp e nossa equipe te atende imediatamente."
            : "Preencha o formulário e nossa equipe entra em contato imediatamente pelo WhatsApp."}
        </p>
        {ctaMode === "whatsapp" ? (
          <a href={WHATSAPP_LANDING_URL} target="_blank" rel="noreferrer" className={btnForm}>
            Agendar Minha Avaliação
          </a>
        ) : (
          <button type="button" onClick={openWhatsAppLeadPopup} className={btnForm}>
            Agendar Minha Avaliação
          </button>
        )}
      </div>
    </section>
  )
}
