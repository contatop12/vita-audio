import { btnCta, btnIco, container } from "../vita-tw"
import { publicUrl } from "../utils/publicUrl"
import { openWhatsAppLeadPopup } from "../utils/whatsappLeadPopup"
import { WhatsAppIcon } from "./WhatsAppIcon"

const produtos: { src: string; alt: string; title: string; desc: string }[] = [
  {
    src: publicUrl("images/img-22.png"),
    alt: "Audição e monitoramento de atividades",
    title: "Audição e monitoramento de atividades",
    desc: "O primeiro aparelho auditivo do mundo com sensores e inteligência artificial.",
  },
  {
    src: publicUrl("images/img-88.png"),
    alt: "Compatível com Smartphone",
    title: "Compatível com Smartphone",
    desc: "Conecte-se diretamente ao seu iPhone®, iPad®, iPod touch®, Apple Watch® ou telefone Android™.",
  },
  {
    src: publicUrl("images/img-11.png"),
    alt: "Receptor no Canal",
    title: "Receptor no Canal",
    desc: "Pequeno, discreto e rápido de ajustar. Perfeito para a primeira experiência dos usuários de aparelho auditivo.",
  },
  {
    src: publicUrl("images/product-bte.png"),
    alt: "Retroauricular",
    title: "Retroauricular",
    desc: "O modelo de aparelho auditivo mais utilizado do mundo. Disponível em padronizado, mini ou power.",
  },
  {
    src: publicUrl("images/img-99.png"),
    alt: "Zumbido",
    title: "Zumbido",
    desc: "Sistema projetado para oferecer alívio de zumbido nas orelhas.",
  },
  {
    src: publicUrl("images/img-88.png"),
    alt: "Audição-Unilateral",
    title: "Audição-Unilateral",
    desc: "Escute os sons em sua orelha menos favorecida pela sua orelha saudável.",
  },
  {
    src: publicUrl("images/img-66.png"),
    alt: "Soluções Invisíveis",
    title: "Soluções Invisíveis",
    desc: "Encaixa na segunda curva do canal auditivo onde ninguém consegue enxergá-los.",
  },
  {
    src: publicUrl("images/img-33.png"),
    alt: "Microcanal",
    title: "Microcanal",
    desc: "Apenas o minúsculo cabo removível do aparelho auditivo aparece fora do canal auditivo.",
  },
  {
    src: publicUrl("images/img-44.png"),
    alt: "Intracanal",
    title: "Intracanal",
    desc: "Aparelho auditivo personalizado que se ajusta ao canal auditivo. Pequena parte aparece por fora da orelha.",
  },
  {
    src: publicUrl("images/img-77.png"),
    alt: "Intra-Auricular",
    title: "Intra-Auricular",
    desc: "Aparelho auditivo personalizado que se ajusta na parte de fora da orelha.",
  },
]

export function Section08Produtos() {
  return (
    <section id="produtos" className="bg-vita-gray-bg py-[70px] text-center">
      <div className={container}>
        <h2 className="mb-9 text-[28px] font-semibold text-vita-blue md:text-[32px]">
          Nossos produtos
        </h2>
        <div className="grid grid-cols-1 gap-4 text-left md:grid-cols-2">
          {produtos.map((p) => (
            <div
              key={p.title}
              className="flex items-start gap-4 rounded-[10px] bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
            >
              <img
                src={p.src}
                alt={p.alt}
                className="h-20 w-20 shrink-0 rounded-md object-contain"
              />
              <div>
                <h3 className="mb-1.5 text-sm font-semibold text-vita-blue md:text-[18px]">
                  {p.title}
                </h3>
                <p className="text-[13px] leading-normal text-vita-text-mid">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button type="button" onClick={openWhatsAppLeadPopup} className={btnCta}>
            <WhatsAppIcon className={btnIco} size={18} />
            <span>AGENDAR UM TESTE GRATUITO</span>
          </button>
        </div>
      </div>
    </section>
  )
}
