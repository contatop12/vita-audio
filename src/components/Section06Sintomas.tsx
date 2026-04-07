import { AlertTriangle } from "lucide-react"
import { btnCta, btnIco, container } from "../vita-tw"
import { openWhatsAppLeadPopup } from "../utils/whatsappLeadPopup"
import { WhatsAppIcon } from "./WhatsAppIcon"

const cards: { src: string; alt: string; title: string; body: string }[] = [
  {
    src: "/images/f4.png",
    alt: "Dificuldade em Entender Conversas",
    title: "Dificuldade em Entender Conversas",
    body: "Se você consegue ouvir, mas sente dificuldade em entender as conversas no trabalho ou no seu ambiente familiar, é um sinal que você precisa dar atenção à sua saúde auditiva.",
  },
  {
    src: "/images/f5.png",
    alt: "Assiste TV com o Volume Muito Alto",
    title: "Assiste TV com o Volume Muito Alto",
    body: "Assim como a fala, se os seus familiares vivem reclamando que você assiste TV ou ouve rádio com o volume muito alto, é hora de ligar o alerta. Esses comportamentos podem ser sinais de problemas auditivos.",
  },
  {
    src: "/images/f6.png",
    alt: "Sofre com Zumbidos no Ouvido",
    title: "Sofre com Zumbidos no Ouvido",
    body: "A perda auditiva é uma das principais causas de zumbido no ouvido. Em aproximadamente 90% dos casos com este sintoma, o diagnóstico apresenta algum nível de perda auditiva.",
  },
  {
    src: "/images/f7.png",
    alt: "Intolerância a Ruídos Intensos",
    title: "Intolerância a Ruídos Intensos",
    body: "Sentir desconforto e intolerância com barulhos comuns do nosso dia a dia não é normal! Se você sofre com este sintoma e sente que isso te incomoda, procure ajuda profissional.",
  },
  {
    src: "/images/f8.png",
    alt: "Dificuldade em Ouvir em Ambientes Cheios",
    title: "Dificuldade em Ouvir em Ambientes Cheios",
    body: "Você sente dificuldade para ouvir em ambientes muito cheios, como restaurantes ou shoppings? Este também é um sintoma que você deve ficar atento! Procure um profissional.",
  },
  {
    src: "/images/f9.png",
    alt: "Tem Costume de Falar Muito Alto",
    title: "Tem Costume de Falar Muito Alto",
    body: "Se as pessoas com quem você convive sempre ficam reclamando que você fala alto demais, esse pode ser um sinal de perda auditiva. Procure um centro auditivo especializado.",
  },
]

export function Section06Sintomas() {
  return (
    <section id="sintomas" className="bg-vita-gray-bg py-[70px] text-center">
      <div className={container}>
        <p className="mb-3 inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(255,182,67,0.45)] bg-[rgba(255,182,67,0.18)] px-4 py-2 text-[13px] font-semibold uppercase tracking-wide text-[#c45c00]">
          <AlertTriangle
            className="size-[17px] shrink-0 text-[#e07000]"
            size={17}
            strokeWidth={2.4}
            aria-hidden
          />
          Fique atento a esses sinais
        </p>
        <h2 className="mb-10 text-[26px] font-semibold leading-snug text-vita-blue md:text-[30px]">
          Sintomas que indicam a necessidade de
          <br />
          cuidar da sua saúde auditiva
        </h2>
        <div className="mb-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="overflow-hidden rounded-lg bg-vita-blue">
              <img
                src={c.src}
                alt={c.alt}
                className="h-[180px] w-full object-cover"
              />
              <div className="p-[18px]">
                <h3 className="mb-2 text-base font-semibold text-white md:text-[20px]">
                  {c.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-white/90">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between gap-6 rounded-lg bg-white p-7 text-left shadow-[0_2px_12px_rgba(0,0,0,0.06)] max-[600px]:flex-col max-[600px]:text-center md:flex-row">
          <p className="max-w-[520px] text-sm text-vita-text">
            <strong>
              Se você sofre com algum desses sintomas acima, clique no botão abaixo e
              agende sua consulta agora mesmo
            </strong>
          </p>
          <button
            type="button"
            onClick={openWhatsAppLeadPopup}
            className={`${btnCta} shrink-0`}
          >
            <WhatsAppIcon className={btnIco} size={18} />
            <span>AGENDAR CONSULTA PELO WHATSAPP</span>
          </button>
        </div>
      </div>
    </section>
  )
}
