import { btnCta, btnIco, container } from "../vita-tw"
import { openWhatsAppLeadPopup } from "../utils/whatsappLeadPopup"
import { WhatsAppIcon } from "./WhatsAppIcon"

const heroBackgroundImage = `linear-gradient(
  to right,
  rgba(255, 255, 255, 0.97) 0%,
  rgba(255, 255, 255, 0.94) 22%,
  rgba(248, 250, 252, 0.88) 40%,
  rgba(239, 244, 249, 0.65) 58%,
  rgba(239, 244, 249, 0.32) 76%,
  rgba(239, 244, 249, 0.1) 92%,
  rgba(239, 244, 249, 0.03) 100%
), url("/images/F.png")`

export function Section02Hero() {
  return (
    <section
      className="relative flex min-h-[720px] items-center bg-[#eff4f9] bg-cover bg-center bg-no-repeat py-12 pb-16"
      style={{ backgroundImage: heroBackgroundImage }}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/90 via-white/72 to-white/45 md:hidden"
        aria-hidden
      />
      <div className={`relative z-10 ${container} grid w-full grid-cols-1 items-center`}>
        <div className="max-w-[560px] max-md:rounded-2xl max-md:bg-white/55 max-md:p-5 max-md:backdrop-blur-[2px]">
          <h1 className="mb-4 text-[28px] font-semibold leading-snug text-[#003060] max-[600px]:text-[22px] md:text-[32px] md:text-[#004080] [text-shadow:0_1px_0_rgba(255,255,255,0.9),0_0_24px_rgba(255,255,255,0.75)] max-md:[text-shadow:0_1px_2px_rgba(255,255,255,0.95)]">
            Recupere Sua Audição,
            <br />
            Reconquiste Sua Vida!
            <br />
            Aparelhos auditivos com
            <br />
            até 45% de desconto
          </h1>
          <p className="mb-7 text-[15px] font-medium leading-relaxed text-neutral-900 max-md:text-neutral-950 [text-shadow:0_1px_0_rgba(255,255,255,0.85)] max-md:[text-shadow:0_1px_1px_rgba(255,255,255,0.9)] md:text-neutral-800">
            Resolva seus problemas de audição e zumbido no ouvido de uma vez por todas!
          </p>
          <button type="button" onClick={openWhatsAppLeadPopup} className={btnCta}>
            <WhatsAppIcon className={btnIco} size={18} />
            <span>AGENDE UM TESTE GRÁTIS</span>
          </button>
        </div>
      </div>
    </section>
  )
}
