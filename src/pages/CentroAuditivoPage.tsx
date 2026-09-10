import {
  Award,
  Ear,
  HandHeart,
  Headphones,
  MapPin,
  SlidersHorizontal,
  Sparkles,
  Stethoscope,
  Wrench,
} from "lucide-react"
import { Section09Conheca, Section10bGoogleReviews, Section10cCarrosselHistorias } from "../components"
import { BlocoConteudo } from "../components/shared/BlocoConteudo"
import { ComoFunciona } from "../components/shared/ComoFunciona"
import { DiferenciaisList } from "../components/shared/DiferenciaisList"
import { FaqAccordion } from "../components/shared/FaqAccordion"
import { FeatureCardGrid } from "../components/shared/FeatureCardGrid"
import { FinalCta } from "../components/shared/FinalCta"
import { HeroPage } from "../components/shared/HeroPage"
import { OndeEstamos } from "../components/shared/OndeEstamos"
import { OutrosServicos } from "../components/shared/OutrosServicos"
import { PaginasRelacionadas } from "../components/shared/PaginasRelacionadas"
import { PrimaryPromoBlock } from "../components/shared/PrimaryPromoBlock"
import { PAGE_SEO } from "../constants/seo"
import { usePageMeta } from "../hooks/usePageMeta"

const REGIAO = ["Salto", "Itupeva", "Itu", "Campinas", "Sorocaba", "Elias Fausto", "Monte Mor"]

const SERVICOS = [
  {
    Icon: Ear,
    title: "Aparelhos auditivos",
    description:
      "Indicação, adaptação e programação de aparelhos auditivos de diferentes marcas, formatos e níveis de tecnologia.",
  },
  {
    Icon: Stethoscope,
    title: "Avaliação auditiva",
    description:
      "Audiometria e demais exames que definem o grau e o tipo da perda auditiva — a base de qualquer indicação.",
  },
  {
    Icon: SlidersHorizontal,
    title: "Adaptação individualizada",
    description:
      "O aparelho é programado a partir do seu audiograma e da sua rotina, e não com uma configuração padrão.",
  },
  {
    Icon: HandHeart,
    title: "Acompanhamento da adaptação",
    description:
      "Os ajustes após a entrega fazem parte do processo. É neles que boa parte do resultado aparece.",
  },
  {
    Icon: Sparkles,
    title: "Manutenção e limpeza técnica",
    description:
      "Limpeza profunda, troca de peças de desgaste e reajuste do som para o aparelho manter o desempenho.",
  },
  {
    Icon: Wrench,
    title: "Assistência técnica",
    description:
      "Diagnóstico e reparo de aparelhos auditivos das principais marcas, com orçamento aprovado antes.",
  },
]

const CONFIANCA = [
  {
    Icon: Award,
    title: "Fonoaudiólogas especializadas",
    description:
      "Todo o atendimento relacionado a aparelhos auditivos é conduzido por fonoaudiólogas especializadas em audiologia.",
  },
  {
    Icon: Headphones,
    title: "Diferentes marcas e tecnologias",
    description:
      "Trabalhamos com vários fabricantes, o que permite comparar alternativas reais em vez de empurrar um único modelo.",
  },
  {
    Icon: MapPin,
    title: "Atendimento presencial em Indaiatuba",
    description:
      "Clínica na Cidade Nova I, com acompanhamento local — sem depender de compra a distância.",
  },
]

const DIFERENCIAIS = [
  {
    title: "Diagnóstico e adaptação na mesma clínica",
    description:
      "Da avaliação auditiva à programação do aparelho, o processo inteiro acontece com a mesma equipe, que já conhece o seu caso.",
  },
  {
    title: "Indicação a partir da avaliação, não do catálogo",
    description:
      "A conversa começa pelas suas dificuldades e pela sua rotina. O modelo vem depois — e nem sempre é o mais caro.",
  },
  {
    title: "Comparação entre marcas e níveis de tecnologia",
    description:
      "Você entende o que muda de um aparelho para outro antes de decidir, com tempo para tirar dúvidas.",
  },
  {
    title: "Acompanhamento contínuo, não só a venda",
    description:
      "Ajustes, revisões e orientação de uso seguem depois da entrega do aparelho.",
  },
  {
    title: "Manutenção e assistência técnica no mesmo lugar",
    description:
      "Se o aparelho falhar, você resolve onde já é atendido — inclusive para aparelhos comprados em outro lugar.",
  },
  {
    title: "Atendimento humanizado, sem pressão comercial",
    description:
      "Ninguém decide sobre audição com pressa. Você sai entendendo as opções, mesmo que decida depois.",
  },
]

const FAQ_ITEMS = [
  {
    question: "O que é um centro auditivo?",
    answer:
      "É uma clínica especializada em saúde auditiva, onde a mesma equipe avalia a audição, indica o aparelho adequado, faz a adaptação e acompanha o paciente depois. Difere de uma loja de aparelhos porque a venda é consequência de uma avaliação — não o ponto de partida.",
  },
  {
    question: "Onde fica o centro auditivo da Vita Audio em Indaiatuba?",
    answer:
      "Na R. Tuiuti, 460 — Cidade Nova I, Indaiatuba/SP, CEP 13339-010. O atendimento é de segunda a sexta, das 8h30 às 18h, e aos sábados das 8h às 12h.",
  },
  {
    question: "Preciso agendar ou posso ir direto?",
    answer:
      "Recomendamos agendar. Assim você é atendido sem espera e garantimos que a fonoaudióloga tenha o tempo necessário para a avaliação e para explicar as opções com calma.",
  },
  {
    question: "A Vita Audio tem médico otorrinolaringologista?",
    answer:
      "Não. O atendimento relacionado à avaliação auditiva e aos aparelhos auditivos é feito por fonoaudiólogas especializadas. Quando o caso exige avaliação médica, orientamos o encaminhamento.",
  },
  {
    question: "Quais marcas de aparelho auditivo vocês trabalham?",
    answer:
      "Trabalhamos com Starkey, Argosy, Rexton, Beltone, Coselgi e Interton, em diferentes linhas e níveis de tecnologia. Cada marca tem páginas próprias no site com as linhas disponíveis.",
  },
  {
    question: "Vocês atendem quem é de outra cidade?",
    answer:
      "Sim. Além de Indaiatuba, atendemos pacientes de Salto, Itupeva, Itu, Campinas, Sorocaba, Elias Fausto, Monte Mor e região.",
  },
  {
    question: "Quanto custa um aparelho auditivo?",
    answer:
      "Há opções a partir de R$ 89 por mês, com parcelamento em até 21 vezes, e você pode testar o aparelho antes de comprar. O valor final depende do modelo e do nível de tecnologia indicado para o seu caso.",
  },
  {
    question: "Vocês fazem manutenção de aparelho comprado em outro lugar?",
    answer:
      "Sim. Atendemos aparelhos auditivos das principais marcas do mercado, independentemente de onde foram adquiridos.",
  },
  {
    question: "Como sei se preciso de um aparelho auditivo?",
    answer:
      "Pedir para repetir com frequência, aumentar muito o volume da televisão ou ter dificuldade para acompanhar conversas em ambientes movimentados são sinais comuns. Só a avaliação auditiva confirma — e nem todo caso termina em aparelho.",
  },
]

type CentroAuditivoContentProps = {
  ctaMode: "form" | "whatsapp"
}

function CentroAuditivoContent({ ctaMode }: CentroAuditivoContentProps) {
  usePageMeta(PAGE_SEO.centroAuditivo)
  const wa = ctaMode === "whatsapp"

  const ATENDIMENTO_STEPS = [
    {
      title: "Agende seu atendimento",
      description: wa
        ? "Chame no WhatsApp e conte o que você tem percebido na sua audição."
        : "Preencha o formulário ou chame no WhatsApp e conte o que você tem percebido na sua audição.",
    },
    {
      title: "Faça a avaliação auditiva",
      description:
        "Os exames mostram o grau e o tipo da perda auditiva. É a partir daí que qualquer indicação faz sentido.",
    },
    {
      title: "Conheça as opções adequadas",
      description:
        "A fonoaudióloga apresenta os modelos e tecnologias compatíveis com o seu caso, sua rotina e seu orçamento.",
    },
    {
      title: "Adapte com acompanhamento",
      description:
        "Depois da entrega vêm os ajustes, as revisões e a orientação de uso — parte essencial do resultado.",
    },
  ]

  return (
    <>
      <HeroPage
        title="Centro Auditivo em Indaiatuba"
        subtitle="A Vita Audio é uma clínica especializada em aparelhos auditivos em Indaiatuba/SP. Avaliação auditiva, indicação, adaptação e acompanhamento com fonoaudiólogas especializadas — tudo no mesmo lugar, com marcas e tecnologias diferentes para comparar."
        primaryLabel={wa ? "Agendar Atendimento pelo WhatsApp" : "Agendar Atendimento"}
        secondaryLabel={wa ? undefined : "Falar no WhatsApp"}
        ctaMode={ctaMode}
      />
      <FeatureCardGrid
        title="Um centro auditivo, não uma loja de aparelhos"
        subtitle="Como clínica de aparelhos auditivos, a diferença está em começar pela avaliação da sua audição — e seguir com você depois da compra."
        items={CONFIANCA}
      />
      <FeatureCardGrid
        title="Aparelhos auditivos em Indaiatuba: o que fazemos"
        subtitle="Todo o cuidado com a sua audição resolvido em um só endereço, com a mesma equipe acompanhando o processo."
        items={SERVICOS}
      />
      <BlocoConteudo
        title="Especialistas em aparelhos auditivos"
        paragraphs={[
          "Escolher um aparelho auditivo não é comprar um eletrônico. O mesmo modelo pode funcionar muito bem para uma pessoa e ser inadequado para outra, porque o que define o resultado é a combinação entre a perda auditiva, a programação do aparelho e a adaptação.",
          "Na Vita Audio, esse processo é conduzido por fonoaudiólogas especializadas em audiologia — as profissionais habilitadas para avaliar a audição, indicar e programar o aparelho e acompanhar a adaptação ao longo do tempo. É o que separa uma clínica de aparelhos auditivos de um ponto de venda.",
        ]}
        bullets={[
          "Avaliação auditiva antes de qualquer indicação",
          "Programação a partir do seu audiograma",
          "Orientação para comparar marcas e tecnologias",
          "Ajustes e revisões após a adaptação",
        ]}
        closingText="A clínica não conta com médico otorrinolaringologista: quando o caso exige avaliação médica, orientamos o encaminhamento."
        ctaLabel={wa ? "Falar com uma Fonoaudióloga" : "Falar com uma Fonoaudióloga"}
        ctaMode={ctaMode}
        background="gray"
      />
      <Section10cCarrosselHistorias />
      <PaginasRelacionadas
        currentRoute="centroAuditivo"
        ctaMode={ctaMode}
        only={["starkey", "argosy", "rexton", "beltone", "coselgi", "interton"]}
        title="Marcas de aparelhos auditivos que trabalhamos"
        background="white"
      />
      <OndeEstamos
        title="Onde fica a Vita Audio em Indaiatuba"
        subtitle="Clínica na Cidade Nova I, com atendimento presencial de segunda a sábado."
        regiao={REGIAO}
      />
      <DiferenciaisList
        title="Por que escolher a Vita Audio como sua clínica de aparelhos auditivos"
        items={DIFERENCIAIS}
      />
      <Section10bGoogleReviews />
      <Section09Conheca />
      <ComoFunciona
        title="Como funciona o atendimento"
        subtitle="Quatro etapas, da primeira conversa ao acompanhamento da adaptação."
        steps={ATENDIMENTO_STEPS}
      />
      <PrimaryPromoBlock
        title="Aparelho auditivo a partir de R$ 89 por mês"
        description="Parcelamento em até 21x e a possibilidade de testar o aparelho antes de comprar. Converse com nossa equipe, faça sua avaliação auditiva e conheça as opções adequadas para o seu caso."
        buttonLabel={wa ? "Agendar Atendimento pelo WhatsApp" : "Agendar Atendimento"}
        ctaMode={ctaMode}
      />
      <FaqAccordion
        title="Dúvidas frequentes sobre o centro auditivo"
        items={FAQ_ITEMS}
      />
      <PaginasRelacionadas
        currentRoute="centroAuditivo"
        ctaMode={ctaMode}
        only={["aparelhoAuditivo", "preco", "discreto", "recarregavel", "melhorAparelho", "idosos"]}
        title="Veja também"
        background="white"
      />
      <OutrosServicos />
      <FinalCta
        title="Cuide da sua audição em um centro auditivo especializado"
        subtitle="Agende sua avaliação na Vita Audio e conte com fonoaudiólogas especializadas para escolher, adaptar e acompanhar o seu aparelho auditivo. R. Tuiuti, 460 — Cidade Nova I, Indaiatuba/SP."
        primaryLabel={wa ? "Agendar Atendimento pelo WhatsApp" : "Agendar Atendimento"}
        ctaMode={ctaMode}
      />
    </>
  )
}

export function CentroAuditivoPage() {
  return <CentroAuditivoContent ctaMode="form" />
}

export function CentroAuditivoPageWA() {
  return <CentroAuditivoContent ctaMode="whatsapp" />
}
