import { btnCta, btnIco, container } from "../vita-tw"
import { publicUrl } from "../utils/publicUrl"
import { openWhatsAppLeadPopup } from "../utils/whatsappLeadPopup"
import { WhatsAppIcon } from "./WhatsAppIcon"

const itens = [
  <>
    <strong>Condições imperdíveis</strong> – Aparelhos a partir de R$89,90 mensais
    (financiamento com o Banco do Brasil) ou parcelamentos direto conosco em até 15x.
  </>,
  <>
    <strong>Até 5 anos de garantia</strong> – A rede Vita Áudio oferece até 5 anos na
    compra do seu aparelho auditivo.
  </>,
  <>
    <strong>Teste Gratuito</strong> – Está com dúvida, faça um teste do aparelho
    auditivo e surpreenda-se com o resultado.
  </>,
  <>Aparelhos discretos e modernos para todos os tipos de perda auditiva</>,
  <>Conforto e qualidade em todas as adaptações.</>,
  <>Tecnológico para todas as idades.</>,
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
            {itens.map((texto, i) => (
              <li
                key={i}
                className="mb-3.5 flex gap-2.5 text-sm leading-normal text-white"
              >
                <span className="shrink-0 text-base font-bold text-vita-orange">✔</span>
                <span>{texto}</span>
              </li>
            ))}
          </ul>
          <button type="button" onClick={openWhatsAppLeadPopup} className={btnCta}>
            <WhatsAppIcon className={btnIco} size={18} />
            <span>FALE AGORA COM UM ESPECIALISTA</span>
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
