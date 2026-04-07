import { WHATSAPP_URL } from "../constants/site"
import { btnCta, btnIco, container } from "../vita-tw"
import { WhatsAppIcon } from "./WhatsAppIcon"

export function Section05CtaAvaliacao() {
  return (
    <section className="bg-vita-blue py-[60px] text-center">
      <div className={container}>
        <h2 className="mb-2 text-[28px] font-semibold text-white md:text-[32px]">
          Ouça o que a vida tem de melhor!
        </h2>
        <p className="mb-5 text-[15px] font-semibold tracking-wide text-vita-orange md:text-[19px]">
          FAÇA UMA AVALIAÇÃO AUDITIVA GRATUITA
        </p>
        <p className="mx-auto mb-7 max-w-[680px] text-sm leading-relaxed text-white/90">
          A avaliação auditiva permitirá que nossos fonoaudiólogos identifiquem a
          existência e o grau de perda auditiva do paciente, além de fornecer informações
          detalhadas sobre o tipo de perda e sua configuração, para assim recomendar o
          melhor aparelho.
        </p>
        <a href={WHATSAPP_URL} className={btnCta} target="_blank" rel="noreferrer">
          <WhatsAppIcon className={btnIco} size={18} />
          <span>AGENDE SUA AVALIAÇÃO</span>
        </a>
      </div>
    </section>
  )
}
