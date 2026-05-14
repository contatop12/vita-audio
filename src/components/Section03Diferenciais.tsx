import { btnForm, container } from "../vita-tw"
import { publicUrl } from "../utils/publicUrl"
import { openWhatsAppLeadPopup } from "../utils/whatsappLeadPopup"

const itens = [
  "Fonoaudiólogos especializados em audiologia",
  "Atendimento personalizado e humanizado para cada paciente",
  "Marcas reconhecidas mundialmente",
  "Aparelhos discretos e modernos para todos os graus de perda auditiva",
  "Soluções para todas as idades — da infância à melhor idade",
  "Até 5 anos de garantia",
  "Avaliação auditiva gratuita para escolha do aparelho adequado",
  "Condições de pagamento facilitadas — a partir de R$89,90/mês",
  "Clínicas modernas e acolhedoras em Indaiatuba",
]

export function Section03Diferenciais() {
  return (
    <section id="diferenciais" className="bg-vita-blue py-[60px]">
      <div
        className={`${container} grid grid-cols-1 items-center gap-12 md:grid-cols-[1fr_500px]`}
      >
        <div>
          <h2 className="mb-6 text-[26px] font-semibold text-white md:text-[30px]">
            Nossos diferenciais
          </h2>
          <ul className="mb-8 list-none p-0">
            {itens.map((texto) => (
              <li
                key={texto}
                className="mb-3.5 flex gap-2.5 text-sm leading-normal text-white"
              >
                <span className="shrink-0 text-base font-bold text-vita-orange">✔</span>
                <span>{texto}</span>
              </li>
            ))}
          </ul>
          <button type="button" onClick={openWhatsAppLeadPopup} className={btnForm}>
            Agendar Minha Avaliação
          </button>
        </div>
        <div className="order-first flex justify-center md:order-none">
          <img
            src={publicUrl("images/f1.png")}
            alt="Casal feliz com aparelhos auditivos"
            className="w-[500px]"
          />
        </div>
      </div>
    </section>
  )
}
