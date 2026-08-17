import {
  BatteryCharging,
  HandHeart,
  Hand,
  MessagesSquare,
  SlidersHorizontal,
  Ear,
} from "lucide-react"
import { Section09Conheca, Section10bGoogleReviews, Section10cCarrosselHistorias } from "../components"
import { BlocoConteudo } from "../components/shared/BlocoConteudo"
import { BlocoFamiliares } from "../components/shared/BlocoFamiliares"
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

const FACILIDADE = [
  {
    Icon: Hand,
    title: "Facilidade para colocar",
    description: "O formato do aparelho pode influenciar bastante no manuseio diário.",
  },
  {
    Icon: HandHeart,
    title: "Facilidade para retirar",
    description:
      "Importante principalmente para quem possui alguma limitação de destreza manual.",
  },
  {
    Icon: SlidersHorizontal,
    title: "Controles simples",
    description:
      "Dependendo do modelo, os ajustes podem ser simplificados ou realizados de diferentes formas.",
  },
  {
    Icon: BatteryCharging,
    title: "Recarregamento",
    description:
      "Aparelhos recarregáveis podem ser interessantes para quem deseja evitar o manuseio frequente de pilhas pequenas.",
  },
  {
    Icon: Ear,
    title: "Conforto",
    description:
      "Como o aparelho é utilizado durante muitas horas, o conforto é essencial para uma boa adaptação.",
  },
  {
    Icon: MessagesSquare,
    title: "Clareza nas conversas",
    description:
      "Mais do que volume, o objetivo é acompanhar melhor as conversas do dia a dia.",
  },
]

const DIFERENCIAIS = [
  {
    title: "Fonoaudiólogas especializadas em aparelhos auditivos",
    description:
      "Atendimento conduzido por quem entende de audição e acompanha o processo do início ao fim.",
  },
  {
    title: "Atendimento individualizado",
    description:
      "Cada paciente é acompanhado respeitando suas necessidades, sua rotina e seu ritmo de adaptação.",
  },
  {
    title: "Orientação durante a escolha",
    description:
      "Explicamos as diferenças entre formatos e tecnologias com linguagem simples, sem termos técnicos desnecessários.",
  },
  {
    title: "Acompanhamento na adaptação",
    description:
      "Os ajustes após a entrega do aparelho fazem parte do processo — e é aí que a maior parte do resultado aparece.",
  },
  {
    title: "Suporte ao paciente e à família",
    description:
      "Familiares podem participar do processo quando o paciente desejar, o que costuma facilitar a adaptação.",
  },
  {
    title: "Clínica em Indaiatuba",
    description:
      "Atendimento presencial em Indaiatuba/SP, com fácil acesso para quem mora na cidade e na região.",
  },
]

const FAQ_ITEMS = [
  {
    question: "Qual é o melhor aparelho auditivo para idosos?",
    answer:
      "Depende das necessidades auditivas, da rotina, da facilidade de manuseio e das preferências de cada pessoa. Não existe um modelo que seja o melhor para todos apenas por ser destinado a uma pessoa mais velha.",
  },
  {
    question: "Como saber se meu pai ou minha mãe precisa de aparelho auditivo?",
    answer:
      "Dificuldades frequentes de comunicação — pedir para repetir, aumentar muito o volume da televisão, não acompanhar conversas em grupo — podem indicar a necessidade de buscar uma avaliação profissional. O diagnóstico só pode ser feito presencialmente, com exames.",
  },
  {
    question: "Minha mãe não quer usar aparelho auditivo. O que fazer?",
    answer:
      "A resistência é comum e costuma vir de expectativas antigas sobre o aparelho. Informação, conversa sem pressão e orientação profissional ajudam bastante. Nossa equipe pode conversar com você e com seu familiar sobre o que esperar do processo.",
  },
  {
    question: "Aparelho auditivo para idosos é difícil de usar?",
    answer:
      "Existem diferentes modelos, e a facilidade de manuseio deve ser considerada na escolha. Modelos recarregáveis e formatos mais simples de colocar podem facilitar bastante a rotina.",
  },
  {
    question: "Existe aparelho auditivo recarregável para idosos?",
    answer:
      "Sim, existem modelos recarregáveis, e eles podem ser interessantes para quem tem dificuldade com pilhas pequenas. Ainda assim, a indicação depende das necessidades e da rotina de cada paciente.",
  },
  {
    question: "Qual aparelho é mais fácil de colocar?",
    answer:
      "Isso depende do formato do aparelho e das características individuais. Modelos retroauriculares costumam ser mais simples de posicionar; modelos muito pequenos exigem mais destreza.",
  },
  {
    question: "Existe aparelho auditivo discreto para idosos?",
    answer:
      "Sim, existem modelos compactos e discretos. Mas o tamanho não deve ser o único critério: facilidade de manuseio e adequação à perda auditiva também pesam na escolha.",
  },
  {
    question: "Quanto custa um aparelho auditivo para idoso?",
    answer:
      "Não existe um preço específico por ser destinado a uma pessoa idosa. O valor varia conforme a tecnologia, o modelo, os recursos e as necessidades auditivas.",
  },
  {
    question: "O aparelho auditivo melhora a compreensão das conversas?",
    answer:
      "Os aparelhos auditivos são desenvolvidos para auxiliar a audição e podem contribuir para a compreensão em diferentes situações. Os resultados, porém, variam individualmente e dependem da adaptação e da tecnologia escolhida.",
  },
  {
    question: "Quanto tempo leva para se adaptar ao aparelho auditivo?",
    answer:
      "O período de adaptação varia de pessoa para pessoa. Depois de um tempo convivendo com a dificuldade auditiva, o cérebro precisa voltar a se acostumar com sons que deixaram de ser percebidos com clareza — por isso o acompanhamento é importante.",
  },
  {
    question: "A família pode acompanhar o atendimento?",
    answer:
      "Sim. Familiares podem participar do atendimento sempre que o paciente desejar. Na prática, essa participação costuma ajudar bastante na adaptação.",
  },
  {
    question: "Onde encontrar aparelho auditivo para idosos em Indaiatuba?",
    answer:
      "Na Vita Audio, na R. Tuiuti, 460 — Cidade Nova I, Indaiatuba/SP. Fale com nossa equipe para conhecer as opções e agendar um atendimento.",
  },
]

type IdososContentProps = {
  ctaMode: "form" | "whatsapp"
}

function IdososContent({ ctaMode }: IdososContentProps) {
  usePageMeta(PAGE_SEO.idosos)
  const wa = ctaMode === "whatsapp"

  const CAMINHO_STEPS = [
    {
      title: "Converse com nossa equipe",
      description: wa
        ? "Chame no WhatsApp e conte quais dificuldades você ou seu familiar tem percebido."
        : "Preencha o formulário ou chame no WhatsApp e conte quais dificuldades você ou seu familiar tem percebido.",
    },
    {
      title: "Receba orientação",
      description:
        "Nossa equipe explica os próximos passos e esclarece as principais dúvidas, sem pressão comercial.",
    },
    {
      title: "Conheça as opções",
      description:
        "As fonoaudiólogas ajudam a identificar tecnologias e modelos que façam sentido para o caso.",
    },
    {
      title: "Passe pelo processo de adaptação",
      description:
        "Conte com acompanhamento para que a experiência seja a mais adequada possível.",
    },
  ]

  return (
    <>
      <HeroPage
        title="Aparelho Auditivo para Idosos: Conforto, Tecnologia e Acompanhamento Especializado"
        subtitle="Cada pessoa possui necessidades auditivas e uma rotina diferente. Na Vita Audio, nossas fonoaudiólogas especializadas ajudam a encontrar um aparelho auditivo confortável, prático e adequado às necessidades de cada paciente, com acompanhamento durante todo o processo de adaptação."
        primaryLabel={wa ? "Falar com uma Especialista no WhatsApp" : "Falar com uma Especialista"}
        ctaMode={ctaMode}
      />
      <BlocoConteudo
        title="Ouvir melhor também significa participar melhor das conversas"
        paragraphs={[
          "A dificuldade auditiva pode aparecer de maneiras diferentes no dia a dia. Muitas vezes, a própria pessoa não percebe todas as situações em que está tendo dificuldade — enquanto familiares começam a notar mudanças na comunicação.",
        ]}
        bullets={[
          "Pedir para repetir várias vezes",
          "Aumentar muito o volume da televisão",
          "Ter dificuldade para conversar em restaurantes",
          "Não acompanhar conversas em família",
          "Entender errado algumas palavras",
          "Evitar encontros sociais",
          "Dificuldade ao telefone",
          "Sensação de que as pessoas estão falando baixo",
        ]}
        ctaLabel={wa ? "Quero Conversar sobre Essas Dificuldades" : "Quero Conversar sobre Essas Dificuldades"}
        ctaMode={ctaMode}
      />
      <BlocoFamiliares
        buttonLabel={wa ? "Quero Orientação para Meu Familiar" : "Quero Orientação para Meu Familiar"}
        includeFilho={false}
        familiarDetail="está com dificuldade para acompanhar as conversas"
        closingLine="Você não precisa decidir sozinho. Nossa equipe pode orientar você e sua família sobre os próximos passos e explicar de maneira simples quais possibilidades existem."
        ctaMode={ctaMode}
      />
      <Section10cCarrosselHistorias />
      <BlocoConteudo
        title="Qual é o melhor aparelho auditivo para idosos?"
        paragraphs={[
          "Não existe um único modelo que seja o melhor para todas as pessoas. A indicação considera fatores como:",
        ]}
        bullets={[
          "Necessidade auditiva",
          "Facilidade para colocar e retirar",
          "Conforto no uso prolongado",
          "Tamanho e formato do aparelho",
          "Rotina e coordenação motora",
          "Facilidade para recarregar ou trocar pilhas",
          "Tecnologia e compreensão da fala",
          "Preferências e investimento disponível",
        ]}
        closingText="O melhor aparelho é aquele que oferece uma combinação adequada entre benefício auditivo, conforto, facilidade de uso e rotina."
        ctaLabel={wa ? "Descobrir Qual Modelo Pode Ser Adequado" : "Descobrir Qual Modelo Pode Ser Adequado"}
        ctaMode={ctaMode}
        background="gray"
      />
      <FeatureCardGrid
        title="Um bom aparelho também precisa ser fácil de usar"
        subtitle="Esses detalhes devem ser considerados junto com a necessidade auditiva de cada pessoa."
        items={FACILIDADE}
      />
      <BlocoConteudo
        title="Aparelho auditivo recarregável pode facilitar a rotina"
        paragraphs={[
          "Alguns pacientes valorizam muito a praticidade de colocar os aparelhos no carregador, evitando a troca frequente de pilhas pequenas.",
          "Isso não significa que o aparelho recarregável seja automaticamente a melhor escolha para todas as pessoas. A indicação depende das necessidades e da rotina de cada paciente.",
        ]}
        ctaLabel={wa ? "Conhecer Opções Recarregáveis" : "Conhecer Opções Recarregáveis"}
        ctaMode={ctaMode}
      />
      <BlocoConteudo
        title="Existem aparelhos pequenos e discretos"
        paragraphs={[
          "Atualmente existem aparelhos auditivos bastante compactos e discretos. Algumas pessoas preferem modelos menores por questão estética; para outras, um aparelho um pouco mais fácil de manusear pode ser mais conveniente.",
          "O menor aparelho nem sempre será o mais adequado. A escolha deve equilibrar estética, facilidade de manuseio, conforto, recursos e necessidade auditiva.",
        ]}
        ctaLabel={wa ? "Conhecer os Diferentes Modelos" : "Conhecer os Diferentes Modelos"}
        ctaMode={ctaMode}
        background="gray"
      />
      <BlocoConteudo
        title="Mais do que aumentar o volume, o objetivo é melhorar a experiência de ouvir"
        paragraphs={[
          "Aparelhos modernos possuem tecnologias desenvolvidas para auxiliar em diferentes situações sonoras, com recursos relacionados ao processamento da fala, à redução de determinados ruídos, à adaptação a diferentes ambientes, a ajustes personalizados e a programas auditivos.",
          "Os resultados dependem das características auditivas de cada pessoa, da tecnologia escolhida e do processo de adaptação.",
        ]}
      />
      <BlocoConteudo
        title="Adaptar-se ao aparelho também faz parte do processo"
        paragraphs={[
          "Usar aparelho auditivo não é simplesmente comprar, colocar e pronto. Depois de um período convivendo com a dificuldade auditiva, o cérebro pode precisar novamente se acostumar com sons que deixaram de ser percebidos com clareza.",
        ]}
        bullets={[
          "Ajustes na programação do aparelho",
          "Orientações sobre o uso diário",
          "Acompanhamento profissional",
          "Aprendizado e familiarização com diferentes ambientes",
        ]}
        closingText="Por isso, o acompanhamento profissional é tão importante quanto escolher uma boa tecnologia."
        ctaLabel={wa ? "Entender Como Funciona a Adaptação" : "Entender Como Funciona a Adaptação"}
        ctaMode={ctaMode}
        background="gray"
      />
      <BlocoConteudo
        title="A família pode fazer parte desse processo"
        paragraphs={["Familiares podem contribuir de formas simples durante a adaptação:"]}
        bullets={[
          "Incentivando o uso do aparelho",
          "Tendo paciência durante a adaptação",
          "Acompanhando as consultas quando o paciente desejar",
          "Ajudando a identificar situações de dificuldade",
          "Valorizando as melhorias percebidas",
        ]}
        closingText="O objetivo é tornar o processo mais tranquilo para todos."
      />
      <DiferenciaisList title="Escolher o aparelho é só o começo" items={DIFERENCIAIS} />
      <Section09Conheca />
      <ComoFunciona
        title="O caminho para ouvir melhor pode ser mais simples do que parece"
        subtitle="Quatro passos, com acompanhamento em cada etapa."
        steps={CAMINHO_STEPS}
      />
      <BlocoConteudo
        title="Quanto custa um aparelho auditivo para idosos?"
        paragraphs={[
          "Não existe um preço específico simplesmente por ser destinado a uma pessoa idosa. O valor depende principalmente da tecnologia, do modelo, das funcionalidades, do fabricante, das necessidades auditivas e dos recursos desejados.",
          "O mais importante é encontrar uma tecnologia compatível com as necessidades reais da pessoa, evitando pagar por recursos desnecessários ou escolher apenas pelo menor preço.",
        ]}
        ctaLabel={wa ? "Consultar Modelos e Valores no WhatsApp" : "Consultar Modelos e Valores"}
        ctaMode={ctaMode}
        background="gray"
      />
      <FaqAccordion
        title="Dúvidas frequentes sobre aparelho auditivo para idosos"
        items={FAQ_ITEMS}
      />
      <Section10bGoogleReviews />
      <PrimaryPromoBlock
        title="Está procurando uma solução para alguém da sua família?"
        description="Conte para nossa equipe o que vocês têm percebido no dia a dia. Podemos orientar os próximos passos e ajudar a esclarecer suas dúvidas sobre aparelhos auditivos, modelos e adaptação."
        buttonLabel={wa ? "Quero Orientação para Meu Familiar" : "Quero Orientação para Meu Familiar"}
        ctaMode={ctaMode}
      />
      <PaginasRelacionadas
        currentRoute="idosos"
        ctaMode={ctaMode}
        only={["aparelhoAuditivo", "preco", "discreto", "recarregavel", "melhorAparelho"]}
        title="Veja também"
      />
      <OutrosServicos />
      <FinalCta
        title="Ouvir melhor pode ajudar a aproveitar melhor as conversas e momentos importantes"
        subtitle="Conheça diferentes opções de aparelhos auditivos e receba orientação de fonoaudiólogas especializadas para encontrar uma solução adequada às necessidades e à rotina de cada pessoa. Vita Audio — Indaiatuba/SP."
        primaryLabel={wa ? "Falar com uma Especialista no WhatsApp" : "Falar com uma Especialista"}
        ctaMode={ctaMode}
      />
    </>
  )
}

export function IdososPage() {
  return <IdososContent ctaMode="form" />
}

export function IdososPageWA() {
  return <IdososContent ctaMode="whatsapp" />
}
