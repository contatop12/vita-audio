import { FaqAccordion } from "./shared/FaqAccordion"

const FAQ_ITEMS = [
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
    question: "Preciso de encaminhamento médico para ser atendido?",
    answer:
      "Não. Você pode agendar diretamente na Vita Audio, sem precisar de pedido médico ou encaminhamento. Nossa equipe realiza a avaliação completa e já indica o tratamento adequado para o seu caso.",
  },
  {
    question: "Como é o período de adaptação ao aparelho auditivo?",
    answer:
      "O período de adaptação varia de pessoa para pessoa, mas geralmente leva algumas semanas. O acompanhamento com o fonoaudiólogo é fundamental nessa fase para ajustar o aparelho conforme a evolução de cada paciente.",
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
  return (
    <FaqAccordion
      title="Dúvidas frequentes sobre perda auditiva, aparelhos auditivos e zumbido"
      items={FAQ_ITEMS}
    />
  )
}
