import {
  Activity,
  Bluetooth,
  Cpu,
  Ear,
  EyeOff,
  Ruler,
  Sparkles,
  Users,
  BatteryCharging,
} from "lucide-react"
import { Section09Conheca, Section10bGoogleReviews, Section10cCarrosselHistorias } from "../components"
import { BlocoConteudo } from "../components/shared/BlocoConteudo"
import { ComoFunciona } from "../components/shared/ComoFunciona"
import { DiferenciaisList } from "../components/shared/DiferenciaisList"
import { FaqAccordion } from "../components/shared/FaqAccordion"
import { FeatureCardGrid } from "../components/shared/FeatureCardGrid"
import { FinalCta } from "../components/shared/FinalCta"
import { HeroPage } from "../components/shared/HeroPage"
import { OutrosServicos } from "../components/shared/OutrosServicos"
import { PaginasRelacionadas } from "../components/shared/PaginasRelacionadas"
import { PrimaryPromoBlock } from "../components/shared/PrimaryPromoBlock"
import { PAGE_SEO } from "../constants/seo"
import { usePageMeta } from "../hooks/usePageMeta"

const FATORES = [
  {
    Icon: Cpu,
    title: "Tecnologia do aparelho",
    description:
      "Modelos possuem diferentes níveis de processamento de som, redução de ruídos e recursos para melhorar a compreensão da fala.",
  },
  {
    Icon: Ruler,
    title: "Modelo e tamanho",
    description:
      "Existem aparelhos externos, discretos e opções que ficam parcial ou totalmente dentro do ouvido.",
  },
  {
    Icon: Bluetooth,
    title: "Recursos e conectividade",
    description:
      "Alguns aparelhos oferecem recursos como recarga de bateria, Bluetooth e conexão com smartphones.",
  },
  {
    Icon: Ear,
    title: "Necessidade auditiva",
    description:
      "A indicação considera o tipo e o grau da perda auditiva, além da rotina e das situações em que a pessoa tem maior dificuldade para ouvir.",
  },
  {
    Icon: Users,
    title: "Estilo de vida",
    description:
      "Quem participa com frequência de reuniões, restaurantes, eventos ou ambientes com muito ruído pode ter necessidades diferentes de quem vive uma rotina mais tranquila.",
  },
]

const TIPOS = [
  {
    Icon: EyeOff,
    title: "Aparelhos discretos",
    description: "Modelos desenvolvidos para quem valoriza discrição e conforto.",
  },
  {
    Icon: Ear,
    title: "Aparelhos intra-auriculares",
    description: "Opções posicionadas dentro do ouvido, dependendo da indicação.",
  },
  {
    Icon: Activity,
    title: "Aparelhos retroauriculares",
    description: "Tecnologia, conforto e diferentes possibilidades de adaptação.",
  },
  {
    Icon: BatteryCharging,
    title: "Aparelhos recarregáveis",
    description:
      "Mais praticidade no dia a dia, sem a necessidade de troca frequente de pilhas.",
  },
  {
    Icon: Bluetooth,
    title: "Aparelhos com Bluetooth",
    description:
      "Possibilidade de integração com dispositivos compatíveis, dependendo do modelo.",
  },
  {
    Icon: Sparkles,
    title: "Diferentes níveis de tecnologia",
    description:
      "Dentro de um mesmo formato existem versões com mais ou menos recursos, o que também influencia o valor.",
  },
]

const DIFERENCIAIS = [
  {
    title: "Fonoaudiólogas especializadas em aparelhos auditivos",
    description:
      "Quem orienta a escolha é quem entende de audição e acompanha o processo de adaptação do início ao fim.",
  },
  {
    title: "Orientação na escolha do aparelho",
    description:
      "Antes de falar em valor, entendemos sua necessidade auditiva, sua rotina e o que faz diferença no seu dia a dia.",
  },
  {
    title: "Adaptação individualizada",
    description:
      "O aparelho é programado a partir da sua avaliação auditiva, e não com uma configuração padrão.",
  },
  {
    title: "Acompanhamento após a adaptação",
    description:
      "A entrega do aparelho é o começo. Os ajustes seguintes fazem parte do processo e são acompanhados pela equipe.",
  },
  {
    title: "Diferentes tecnologias e modelos disponíveis",
    description:
      "Trabalhamos com marcas reconhecidas e diferentes níveis de tecnologia, o que permite comparar alternativas.",
  },
  {
    title: "Atendimento humanizado em Indaiatuba",
    description:
      "Clínica em Indaiatuba/SP, com fácil acesso para quem mora na cidade e na região.",
  },
]

const FAQ_ITEMS = [
  {
    question: "Quanto custa um aparelho auditivo?",
    answer:
      "Não existe um preço único. O valor varia conforme o modelo, o nível de tecnologia, os recursos disponíveis e a necessidade auditiva de cada paciente. Por isso, o caminho mais rápido é conversar com nossa equipe e consultar as opções adequadas ao seu caso.",
  },
  {
    question: "Por que existem aparelhos auditivos com preços tão diferentes?",
    answer:
      "Porque os aparelhos não são todos iguais. Mudam o processamento do som, a redução de ruído, os recursos para compreensão da fala, o tamanho, a conectividade e a forma de alimentação (pilha ou recarga). Cada uma dessas características influencia o valor final.",
  },
  {
    question: "Qual aparelho auditivo tem o melhor custo-benefício?",
    answer:
      "Depende das suas necessidades auditivas, da sua rotina e dos recursos que realmente fazem diferença para você. Um aparelho com muitos recursos que você não vai usar não é um bom custo-benefício; um aparelho barato que não atende sua perda auditiva, também não.",
  },
  {
    question: "Existe aparelho auditivo recarregável?",
    answer:
      "Sim, existem modelos recarregáveis entre as opções que trabalhamos. A disponibilidade varia conforme a linha e o formato escolhido — consulte nossa equipe para saber quais modelos recarregáveis estão disponíveis.",
  },
  {
    question: "Existem aparelhos auditivos pequenos e discretos?",
    answer:
      "Sim. Existem modelos compactos, incluindo opções posicionadas dentro do canal auditivo e retroauriculares bastante pequenos. O quanto o aparelho fica visível depende do modelo, da anatomia do ouvido e da indicação para cada caso.",
  },
  {
    question: "Como saber qual aparelho auditivo é indicado para mim?",
    answer:
      "A indicação parte da avaliação auditiva e da conversa sobre sua rotina. A partir daí, a fonoaudióloga apresenta os modelos e tecnologias compatíveis com o seu caso e explica as diferenças entre eles.",
  },
  {
    question: "A Vita Audio fica onde?",
    answer:
      "Na R. Tuiuti, 460 — Cidade Nova I, Indaiatuba/SP. Atendemos moradores de Indaiatuba e da região, incluindo Salto, Itupeva, Itu, Campinas e Sorocaba.",
  },
  {
    question: "Posso falar pelo WhatsApp para conhecer modelos e valores?",
    answer:
      "Sim. É o caminho mais rápido: nossa equipe explica as opções disponíveis, tira suas dúvidas sobre modelos e tecnologias e informa os valores conforme a indicação para o seu caso.",
  },
]

type PrecoContentProps = {
  ctaMode: "form" | "whatsapp"
}

function PrecoContent({ ctaMode }: PrecoContentProps) {
  usePageMeta(PAGE_SEO.preco)
  const wa = ctaMode === "whatsapp"

  const COMO_FUNCIONA_STEPS = [
    {
      title: "Fale com nossa equipe",
      description: wa
        ? "Entre em contato pelo WhatsApp e conte um pouco sobre sua necessidade."
        : "Preencha o formulário ou chame no WhatsApp e conte um pouco sobre sua necessidade.",
    },
    {
      title: "Receba orientação especializada",
      description:
        "Nossa equipe explica as possibilidades e orienta sobre os próximos passos, sem pressão comercial.",
    },
    {
      title: "Encontre a solução adequada",
      description:
        "Conheça modelos e tecnologias compatíveis com suas necessidades, sua rotina e suas preferências.",
    },
  ]

  return (
    <>
      <HeroPage
        title="Quanto Custa um Aparelho Auditivo? Conheça Modelos e Valores"
        subtitle="O valor de um aparelho auditivo varia conforme a tecnologia, o modelo, os recursos e as necessidades auditivas de cada pessoa. Na Vita Audio, em Indaiatuba, nossas fonoaudiólogas especializadas ajudam você a encontrar a opção mais adequada para sua rotina e seu orçamento."
        primaryLabel={wa ? "Consultar Modelos e Valores no WhatsApp" : "Consultar Modelos e Valores"}
        ctaMode={ctaMode}
      />
      <Section10cCarrosselHistorias />
      <FeatureCardGrid
        title="Por que o preço de um aparelho auditivo pode variar?"
        subtitle="Aparelhos auditivos não são todos iguais. O valor depende principalmente das necessidades de cada pessoa e da tecnologia escolhida."
        items={FATORES}
        closingText="Por isso, mais importante do que simplesmente escolher o aparelho mais barato é encontrar a tecnologia adequada para que você realmente perceba diferença no dia a dia."
      />
      <PrimaryPromoBlock
        title="Quer saber quais aparelhos e valores estão disponíveis?"
        description="Converse com a equipe da Vita Audio e conheça as opções de aparelhos auditivos de acordo com suas necessidades e preferências. Não trabalhamos com tabela fixa justamente porque a indicação muda de pessoa para pessoa."
        buttonLabel={wa ? "Consultar Modelos e Valores no WhatsApp" : "Quero Conhecer as Opções para Mim"}
        ctaMode={ctaMode}
      />
      <FeatureCardGrid
        title="Existem aparelhos auditivos para diferentes necessidades e estilos"
        subtitle="Formato, tecnologia e recursos mudam bastante entre os modelos — e é isso que explica boa parte da diferença de valores."
        items={TIPOS}
      />
      <BlocoConteudo
        title="O melhor aparelho auditivo não é necessariamente o mais caro — nem simplesmente o mais barato"
        paragraphs={[
          "A escolha precisa equilibrar necessidade auditiva, rotina, conforto, tecnologia, facilidade de uso, preferências pessoais e investimento disponível.",
          "Na Vita Audio, o objetivo é ajudar você a encontrar uma solução que faça sentido para sua audição, sua rotina e seu orçamento. Nossas fonoaudiólogas especializadas orientam cada etapa da escolha e da adaptação do aparelho.",
        ]}
        ctaLabel={wa ? "Falar com uma Fonoaudióloga pelo WhatsApp" : "Falar com uma Fonoaudióloga Especializada"}
        ctaMode={ctaMode}
        background="gray"
      />
      <DiferenciaisList
        title="Mais do que escolher um aparelho, tenha acompanhamento especializado"
        items={DIFERENCIAIS}
      />
      <Section09Conheca />
      <ComoFunciona
        title="Como funciona na prática"
        subtitle="Três passos simples para entender as opções disponíveis para o seu caso."
        steps={COMO_FUNCIONA_STEPS}
      />
      <FaqAccordion
        title="Dúvidas frequentes sobre preço de aparelho auditivo"
        items={FAQ_ITEMS}
      />
      <Section10bGoogleReviews />
      <PaginasRelacionadas
        currentRoute="preco"
        ctaMode={ctaMode}
        only={["discreto", "recarregavel", "melhorAparelho", "idosos", "starkey", "argosy"]}
        title="Veja também"
      />
      <OutrosServicos />
      <FinalCta
        title="Quer saber qual aparelho auditivo faz sentido para você e quanto ele custa?"
        subtitle="Converse com a equipe da Vita Audio, tire suas dúvidas sobre modelos, tecnologias e valores e receba orientação especializada. Atendimento em Indaiatuba/SP."
        primaryLabel={wa ? "Consultar Modelos e Valores no WhatsApp" : "Consultar Modelos e Valores"}
        ctaMode={ctaMode}
      />
    </>
  )
}

export function PrecoPage() {
  return <PrecoContent ctaMode="form" />
}

export function PrecoPageWA() {
  return <PrecoContent ctaMode="whatsapp" />
}
