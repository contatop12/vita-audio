import { PAGE_SEO } from "../constants/seo"
import {
  Section02Hero,
  Section03Diferenciais,
  Section04Especialista,
  Section05CtaAvaliacao,
  Section06Sintomas,
  Section06bQualidadeVida,
  Section07NaoPercas,
  Section08Produtos,
  Section09Conheca,
  Section10bGoogleReviews,
  Section10cCarrosselHistorias,
  Section11Faq,
} from "../components"
import { BlocoFamiliares } from "../components/shared/BlocoFamiliares"
import { ComoFunciona } from "../components/shared/ComoFunciona"
import { OutrosServicos } from "../components/shared/OutrosServicos"
import { usePageMeta } from "../hooks/usePageMeta"

const COMO_FUNCIONA_STEPS = [
  {
    title: "Agendamento",
    description:
      "Fale com nossa equipe pelo WhatsApp. Confirmado o horário, você já está pronto para a avaliação.",
  },
  {
    title: "Avaliação auditiva completa",
    description:
      "Nosso fonoaudiólogo realiza a audiometria tonal, vocal e imitanciometria para mapear com precisão o grau e o tipo da sua perda auditiva.",
  },
  {
    title: "Resultado explicado na hora",
    description:
      "O fonoaudiólogo apresenta o audiograma e explica de forma clara o que ele significa para a sua audição, sem termos técnicos desnecessários.",
  },
  {
    title: "Indicação do aparelho ideal",
    description:
      "Com base no diagnóstico, apresentamos as opções de aparelho mais adequadas para o seu perfil auditivo e rotina de vida.",
  },
  {
    title: "Adaptação e acompanhamento",
    description:
      "O aparelho é ajustado na própria clínica. Você sai orientado sobre o uso e conta com acompanhamento do fonoaudiólogo durante todo o período de adaptação.",
  },
]

export function AparelhoAuditivoPageWA() {
  usePageMeta(PAGE_SEO.aparelhoAuditivo)

  return (
    <>
      <Section02Hero ctaMode="whatsapp" />
      <Section10cCarrosselHistorias />
      <Section03Diferenciais ctaMode="whatsapp" />
      <Section04Especialista />
      <Section06Sintomas ctaMode="whatsapp" />
      <ComoFunciona
        title="Do diagnóstico ao aparelho, tudo na Vita Audio"
        subtitle="Você não precisa ir a vários lugares. Aqui, cuidamos de tudo."
        steps={COMO_FUNCIONA_STEPS}
      />
      <Section06bQualidadeVida />
      <Section07NaoPercas ctaMode="whatsapp" />
      <Section08Produtos />
      <BlocoFamiliares ctaMode="whatsapp" />
      <Section10bGoogleReviews />
      <Section09Conheca />
      <Section11Faq />
      <OutrosServicos currentRoute="aparelhoAuditivo" />
      <Section05CtaAvaliacao ctaMode="whatsapp" />
    </>
  )
}
