import { useLayoutEffect, useRef, useState } from "react"
import { ChevronRight } from "lucide-react"
import { container } from "../vita-tw"

const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "Quais são os tipos de perda auditiva?",
    answer:
      "Existem três tipos principais: condutiva (problemas no ouvido externo/médio), sensorioneural (danos às células ciliadas do ouvido interno ou ao nervo auditivo) e mista (combinação dos dois). Cada tipo requer abordagem terapêutica diferente.",
  },
  {
    question: "A perda auditiva tem cura?",
    answer:
      "Depende do tipo. A perda condutiva frequentemente pode ser tratada com medicamentos ou cirurgia. A perda sensorioneural, na maioria dos casos, não tem cura, mas pode ser bem gerenciada com aparelhos auditivos modernos.",
  },
  {
    question: "Quais são as principais causas da perda auditiva?",
    answer:
      "As principais causas incluem: envelhecimento natural, exposição prolongada a ruídos intensos, infecções de ouvido recorrentes, uso de medicamentos ototóxicos, predisposição genética e traumas acústicos.",
  },
  {
    question: "A perda auditiva é hereditária?",
    answer:
      "Sim, a predisposição genética pode ser um fator importante. Aproximadamente 50-60% dos casos de deficiência auditiva na infância têm causas genéticas. Fatores ambientais também são determinantes.",
  },
  {
    question: "Quais são os graus de perda auditiva?",
    answer:
      "A perda auditiva é classificada em: leve (26-40 dB), moderada (41-55 dB), moderadamente severa (56-70 dB), severa (71-90 dB) e profunda (acima de 90 dB). Cada grau exige uma solução auditiva específica.",
  },
  {
    question: "Zumbido é um sintoma de perda auditiva?",
    answer:
      "O zumbido frequentemente acompanha a perda auditiva. Em cerca de 90% dos casos de zumbido, há algum grau de perda auditiva associado. O tratamento com aparelhos auditivos pode ajudar a reduzir significativamente o zumbido.",
  },
  {
    question: "O zumbido tem cura?",
    answer:
      "Na maioria dos casos, o zumbido não tem cura definitiva, mas existem tratamentos eficazes que reduzem muito seu impacto na qualidade de vida. Os aparelhos auditivos modernos possuem recursos específicos para alívio do zumbido.",
  },
]

export function Section11Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ansRefs = useRef<(HTMLDivElement | null)[]>([])

  useLayoutEffect(() => {
    ansRefs.current.forEach((el, i) => {
      if (!el) return
      if (openIndex === i) {
        el.style.maxHeight = `${el.scrollHeight}px`
      } else {
        el.style.maxHeight = ""
      }
    })
  }, [openIndex])

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i))
  }

  return (
    <section className="bg-vita-gray-bg py-[70px] text-center">
      <div className={container}>
        <h2 className="mb-10 text-[22px] font-semibold leading-snug tracking-wide text-vita-blue md:text-[26px]">
          DÚVIDAS FREQUENTES SOBRE
          <br />
          PERDA AUDITIVA, APARELHOS
          <br />
          AUDITIVOS E ZUMBIDO
        </h2>
        <div className="mx-auto max-w-[680px] text-left">
          {FAQ_ITEMS.map((item, i) => {
            const open = openIndex === i
            return (
              <div key={i} className="mb-2.5">
                <button
                  type="button"
                  className={`flex w-full cursor-pointer items-center justify-between gap-3.5 rounded-xl border-0 px-5 py-4 text-left font-semibold text-sm text-white shadow-[0_2px_8px_rgba(0,60,120,0.12)] transition-[background,transform,box-shadow] duration-[220ms] ease-out hover:-translate-y-px hover:bg-vita-blue-dark hover:shadow-[0_6px_18px_rgba(0,60,120,0.18)] ${
                    open
                      ? "bg-vita-blue-dark shadow-[0_4px_14px_rgba(0,50,100,0.2)]"
                      : "bg-vita-blue"
                  }`}
                  onClick={() => toggle(i)}
                >
                  <span className="flex-1 leading-snug">{item.question}</span>
                  <ChevronRight
                    className={`size-[22px] shrink-0 opacity-90 transition-transform duration-300 [transition-timing-function:cubic-bezier(0.34,1.45,0.64,1)] ${open ? "rotate-90" : ""}`}
                    strokeWidth={2.25}
                    aria-hidden
                  />
                </button>
                <div
                  className="max-h-0 overflow-hidden bg-white transition-[max-height] duration-300 ease-out"
                  ref={(el) => {
                    ansRefs.current[i] = el
                  }}
                >
                  <p className="px-[18px] py-4 text-sm leading-relaxed text-vita-text-mid">
                    {item.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
