import { btnForm, container } from "../vita-tw"
import { openWhatsAppLeadPopup } from "../utils/whatsappLeadPopup"

export function Section05CtaAvaliacao() {
  return (
    <section className="bg-vita-blue py-[60px] text-center">
      <div className={container}>
        <h2 className="mb-2 text-[28px] font-semibold text-white md:text-[32px]">
          Ouvir melhor começa com uma avaliação
        </h2>
        <p className="mx-auto mb-7 max-w-[680px] text-sm leading-relaxed text-white/90">
          Preencha o formulário e nossa equipe entra em contato imediatamente pelo
          WhatsApp.
        </p>
        <button type="button" onClick={openWhatsAppLeadPopup} className={btnForm}>
          Agendar Minha Avaliação
        </button>
      </div>
    </section>
  )
}
