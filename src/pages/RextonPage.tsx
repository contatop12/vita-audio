import {
  BatteryCharging,
  Bluetooth,
  Ear,
  Filter,
  MapPin,
  SlidersHorizontal,
  Sparkles,
  Volume2,
  Waves,
} from "lucide-react"
import { Section09Conheca, Section10bGoogleReviews, Section10cCarrosselHistorias } from "../components"
import { BlocoConteudo } from "../components/shared/BlocoConteudo"
import { CardsLinhas } from "../components/shared/CardsLinhas"
import { ComoFunciona } from "../components/shared/ComoFunciona"
import { DiferenciaisList } from "../components/shared/DiferenciaisList"
import { FaqAccordion } from "../components/shared/FaqAccordion"
import { FeatureCardGrid } from "../components/shared/FeatureCardGrid"
import { FinalCta } from "../components/shared/FinalCta"
import { HeroPage } from "../components/shared/HeroPage"
import { OutrosServicos } from "../components/shared/OutrosServicos"
import { PaginasRelacionadas } from "../components/shared/PaginasRelacionadas"
import { PrimaryPromoBlock } from "../components/shared/PrimaryPromoBlock"
import { SeletorIntencao } from "../components/shared/SeletorIntencao"
import { TabelaComparativa } from "../components/shared/TabelaComparativa"
import { PAGE_SEO } from "../constants/seo"
import { usePageMeta } from "../hooks/usePageMeta"

const POR_QUE_REXTON = [
  {
    Icon: Waves,
    title: "Tecnologia para diferentes ambientes",
    description:
      "Soluções desenvolvidas para auxiliar a experiência auditiva em diferentes situações do cotidiano, de casa a locais movimentados.",
  },
  {
    Icon: BatteryCharging,
    title: "Opções recarregáveis",
    description:
      "Modelos que eliminam a necessidade de trocas frequentes de pilhas pequenas na rotina diária.",
  },
  {
    Icon: Ear,
    title: "Diferentes formatos",
    description:
      "Opções para diferentes necessidades auditivas, preferências e níveis de potência.",
  },
  {
    Icon: Bluetooth,
    title: "Conectividade",
    description:
      "Tecnologias modernas com recursos de conectividade em modelos compatíveis.",
  },
  {
    Icon: SlidersHorizontal,
    title: "Personalização",
    description:
      "Configuração realizada pela fonoaudióloga conforme as necessidades individuais de cada paciente.",
  },
  {
    Icon: MapPin,
    title: "Atendimento em Indaiatuba",
    description:
      "Escolha, adaptação e acompanhamento presenciais na clínica, sem depender de compra a distância.",
  },
]

const LINHAS = [
  {
    name: "Rexton BiCore R-Li / R-Li T",
    tagline: "Recarregável",
    description:
      "Uma opção para quem busca praticidade, desempenho em diferentes ambientes sonoros e bateria de longa duração.",
    highlights: [
      "Aparelhos recarregáveis, sem troca de pilhas na rotina",
      "Sincronização binaural rápida entre os dois aparelhos",
      "Tecnologia voltada à redução de ruído de fundo",
      "Até 39 horas de autonomia, dependendo das condições de utilização",
      "Versão R-Li T com bobina telefônica (telecoil)",
    ],
  },
  {
    name: "Rexton MotionCore (M-Core)",
    tagline: "Versatilidade",
    description:
      "Uma linha desenvolvida para atender diferentes necessidades auditivas, com ampla variedade de formatos e configurações.",
    highlights: [
      "Adaptação a diferentes cenários sonoros",
      "Variedade de configurações e formatos",
      "Opções retroauriculares e intra-auriculares",
      "Modelos P e HP para necessidades de maior potência",
      "Opções para perdas severas a profundas, quando houver indicação",
    ],
  },
  {
    name: "Rexton Reach",
    tagline: "Nova geração",
    description:
      "Mais foco em conversas mesmo em ambientes complexos. Desenvolvida para situações em que várias pessoas estão falando e existem diferentes fontes de som ao redor.",
    highlights: [
      "Multi-Voice Focus: tecnologia desenvolvida para trabalhar diferentes vozes ao redor do usuário",
      "Bluetooth LE Audio em modelos compatíveis, com conectividade moderna e estável",
      "Foco em uma experiência sonora confortável e natural",
      "Geração mais recente entre as linhas apresentadas",
    ],
  },
]

const RECARREGAVEL_BENEFICIOS = [
  {
    Icon: BatteryCharging,
    title: "Menos manuseio de pilhas",
    description:
      "Sem a necessidade de trocar pilhas pequenas com frequência — o que costuma pesar bastante no dia a dia.",
  },
  {
    Icon: Sparkles,
    title: "Carregamento simples",
    description:
      "Basta colocar os aparelhos no carregador compatível quando necessário e voltar a usá-los depois.",
  },
  {
    Icon: Volume2,
    title: "Praticidade no cotidiano",
    description:
      "Uma rotina de energia previsível, sem depender de ter pilhas de reserva disponíveis.",
  },
  {
    Icon: Filter,
    title: "Diferentes tecnologias disponíveis",
    description:
      "As opções recarregáveis aparecem em mais de uma linha, com níveis de tecnologia distintos.",
  },
]

const COMPARATIVO_COLUNAS = ["Pode ser interessante para quem busca"]

const COMPARATIVO_LINHAS = [
  { label: "BiCore R-Li", values: ["Recarga, autonomia e desempenho no dia a dia"] },
  {
    label: "BiCore R-Li T",
    values: ["Benefícios do R-Li somados à bobina telefônica (telecoil)"],
  },
  { label: "MotionCore", values: ["Variedade de formatos e configurações"] },
  {
    label: "MotionCore P/HP",
    values: ["Necessidades de maior potência, conforme indicação"],
  },
  {
    label: "Rexton Reach",
    values: ["Tecnologia mais recente e ambientes sonoros complexos"],
  },
]

const DIFERENCIAIS = [
  {
    title: "Fonoaudiólogas especializadas em aparelhos auditivos",
    description:
      "Quem orienta a escolha do modelo é quem entende de audição e acompanha a adaptação.",
  },
  {
    title: "Orientação individualizada",
    description:
      "A conversa começa pelas suas dificuldades e pela sua rotina — não pelo catálogo.",
  },
  {
    title: "Diferentes tecnologias",
    description:
      "Possibilidade de comparar linhas e níveis de tecnologia antes de decidir.",
  },
  {
    title: "Escolha de acordo com a necessidade",
    description:
      "A indicação parte da avaliação auditiva, e não do aparelho mais caro do portfólio.",
  },
  {
    title: "Adaptação, ajustes e acompanhamento",
    description:
      "A entrega do aparelho é o começo: os ajustes seguintes fazem parte do processo.",
  },
  {
    title: "Atendimento humanizado em Indaiatuba",
    description:
      "Clínica na R. Tuiuti, 460 — Cidade Nova I, com fácil acesso para quem mora na região.",
  },
]

const FAQ_ITEMS = [
  {
    question: "Aparelho auditivo Rexton é bom?",
    answer:
      "A Rexton possui diferentes linhas e tecnologias desenvolvidas para atender a diversos perfis de usuários. Porém, a experiência com um aparelho auditivo não depende apenas da marca: a escolha do modelo, o nível de tecnologia, a configuração, a adaptação e o acompanhamento profissional também são fundamentais.",
  },
  {
    question: "Quanto custa um aparelho auditivo Rexton?",
    answer:
      "O preço varia conforme a linha, o modelo, o nível de tecnologia, os recursos e as necessidades de cada pessoa. Por isso não trabalhamos com uma tabela única — consulte nossa equipe para saber os valores dos modelos disponíveis na Vita Audio.",
  },
  {
    question: "Quais são os aparelhos auditivos Rexton?",
    answer:
      "Na Vita Audio trabalhamos com as linhas BiCore (incluindo os modelos recarregáveis R-Li e R-Li T), MotionCore (M-Core) e Reach, a geração mais recente entre elas.",
  },
  {
    question: "Qual é o melhor aparelho auditivo Rexton?",
    answer:
      "Depende das suas necessidades auditivas, dos ambientes que você frequenta, do formato desejado, da facilidade de manuseio e dos recursos que fazem diferença na sua rotina. Não existe um modelo que seja o melhor para todas as pessoas.",
  },
  {
    question: "Existe aparelho auditivo Rexton recarregável?",
    answer:
      "Sim. Os modelos BiCore R-Li e R-Li T são recarregáveis, e há opções recarregáveis em outras linhas. Consulte nossa equipe para confirmar quais estão disponíveis.",
  },
  {
    question: "Quanto dura a bateria do Rexton BiCore?",
    answer:
      "Os modelos correspondentes oferecem até 39 horas de autonomia. A duração real pode variar conforme a utilização, a configuração do aparelho e o uso de recursos como streaming.",
  },
  {
    question: "Qual a diferença entre Rexton BiCore e Rexton Reach?",
    answer:
      "O BiCore R-Li se destaca pela recarga, pela sincronização binaural rápida, pela redução de ruído de fundo e por até 39 horas de autonomia. O Reach é a geração mais recente e foi desenvolvido com foco em ambientes com várias pessoas falando, trazendo o Multi-Voice Focus e o Bluetooth LE Audio em modelos compatíveis.",
  },
  {
    question: "O que é Rexton MotionCore?",
    answer:
      "É a linha mais versátil entre as apresentadas: reúne uma variedade ampla de formatos e configurações, incluindo opções retroauriculares e intra-auriculares e modelos P e HP para necessidades de maior potência.",
  },
  {
    question: "O que é Rexton Reach?",
    answer:
      "É a nova geração da Rexton, desenvolvida com foco em situações de conversa mais complexas, com várias vozes e diferentes fontes de som ao redor do usuário.",
  },
  {
    question: "O que é Multi-Voice Focus?",
    answer:
      "É uma tecnologia da linha Reach desenvolvida para trabalhar diferentes vozes ao redor do usuário, auxiliando em situações de conversa mais complexas. Os resultados variam conforme a perda auditiva, a configuração e o processo de adaptação de cada pessoa.",
  },
  {
    question: "O Rexton Reach possui Bluetooth?",
    answer:
      "Modelos compatíveis da linha Reach contam com Bluetooth LE Audio. A conectividade e os recursos disponíveis dependem do modelo do aparelho e do dispositivo utilizado.",
  },
  {
    question: "Existem aparelhos Rexton para perdas auditivas severas?",
    answer:
      "A linha MotionCore possui modelos P e HP voltados a necessidades de maior potência, com opções para perdas severas a profundas quando houver indicação. A adequação é definida a partir da avaliação auditiva.",
  },
  {
    question: "Onde comprar aparelho auditivo Rexton em Indaiatuba?",
    answer:
      "Na Vita Audio, na R. Tuiuti, 460 — Cidade Nova I, Indaiatuba/SP. Fale com nossa equipe para conhecer os modelos disponíveis, consultar valores e agendar um atendimento.",
  },
]

const INTENCAO_OPTIONS = [
  {
    label: "Quero saber os preços dos aparelhos Rexton",
    message:
      "Olá! Gostaria de consultar os preços dos aparelhos auditivos Rexton disponíveis na Vita Audio.",
  },
  {
    label: "Quero conhecer o Rexton BiCore",
    message:
      "Olá! Gostaria de saber mais sobre o Rexton BiCore e consultar modelos e valores.",
  },
  {
    label: "Quero conhecer o Rexton Reach",
    message:
      "Olá! Tenho interesse no Rexton Reach. Gostaria de conhecer os modelos disponíveis e valores.",
  },
  {
    label: "Quero conhecer o Rexton MotionCore",
    message: "Olá! Gostaria de conhecer os aparelhos Rexton MotionCore disponíveis.",
  },
  {
    label: "Quero um aparelho Rexton recarregável",
    message:
      "Olá! Gostaria de conhecer os modelos Rexton recarregáveis disponíveis na Vita Audio.",
  },
  {
    label: "Não sei qual escolher",
    message:
      "Olá! Vi os aparelhos auditivos Rexton no site da Vita Audio e gostaria de conhecer os modelos e valores.",
  },
]

type RextonContentProps = {
  ctaMode: "form" | "whatsapp"
}

function RextonContent({ ctaMode }: RextonContentProps) {
  usePageMeta(PAGE_SEO.rexton)
  const wa = ctaMode === "whatsapp"

  const ESCOLHA_STEPS = [
    {
      title: "Converse com nossa equipe",
      description: wa
        ? "Chame no WhatsApp e conte suas principais dificuldades, sua rotina e o que procura em um aparelho."
        : "Preencha o formulário ou chame no WhatsApp e conte suas principais dificuldades, sua rotina e o que procura em um aparelho.",
    },
    {
      title: "Conheça as possibilidades",
      description:
        "Entenda as diferenças entre as linhas BiCore, MotionCore e Reach e as tecnologias disponíveis.",
    },
    {
      title: "Encontre uma opção adequada",
      description:
        "Considere audição, conforto, recursos, tecnologia e investimento antes de decidir.",
    },
    {
      title: "Conte com acompanhamento",
      description: "A adaptação e os ajustes fazem parte do processo, do começo ao fim.",
    },
  ]

  return (
    <>
      <HeroPage
        title="Aparelhos Auditivos Rexton: Tecnologia para Diferentes Necessidades Auditivas"
        subtitle="Conheça as linhas Rexton BiCore, MotionCore e Reach e encontre, com orientação de fonoaudiólogas especializadas, o aparelho mais adequado para sua audição, rotina e preferências. Consulte modelos disponíveis e valores em Indaiatuba/SP."
        primaryLabel={wa ? "Conhecer Modelos Rexton pelo WhatsApp" : "Conhecer Modelos Rexton"}
        secondaryLabel={wa ? undefined : "Consultar Modelos e Valores"}
        ctaMode={ctaMode}
      />
      <FeatureCardGrid
        title="Por que escolher um aparelho auditivo Rexton?"
        subtitle="Uma marca com linhas distintas — o que importa é qual delas faz sentido para o seu caso."
        items={POR_QUE_REXTON}
      />
      <CardsLinhas
        title="Conheça as principais linhas de aparelhos auditivos Rexton"
        subtitle="Três famílias com propostas diferentes. A escolha depende da sua audição e da sua rotina."
        linhas={LINHAS}
        closingTitle="Não sabe qual escolher?"
        ctaLabel="Quero Conhecer os Modelos Rexton"
        ctaMode={ctaMode}
        background="white"
      />
      <TabelaComparativa
        title="Qual aparelho auditivo Rexton escolher?"
        subtitle="Um resumo da proposta de cada linha — não é uma prescrição."
        columns={COMPARATIVO_COLUNAS}
        rows={COMPARATIVO_LINHAS}
        note="Você não precisa decidir sozinho. Nossas fonoaudiólogas podem ajudar a identificar quais características fazem sentido para suas necessidades."
        ctaLabel="Quero Ajuda para Escolher"
        ctaMode={ctaMode}
        background="gray"
      />
      <BlocoConteudo
        title="Rexton Reach IX CIC-Li: tecnologia em um formato discreto"
        paragraphs={[
          "CIC significa completely-in-canal: o aparelho fica posicionado dentro do canal auditivo, o que o torna bastante discreto no uso diário. O sufixo Li indica a versão com bateria recarregável de íons de lítio.",
          "É um formato que combina a tecnologia da linha Reach com um dos menores tamanhos do portfólio. A indicação depende da anatomia do ouvido, do grau da perda auditiva e da facilidade de manuseio — modelos muito pequenos exigem mais destreza para colocar e retirar.",
        ]}
        closingText="Consulte nossa equipe para confirmar a disponibilidade e as características oficiais desse modelo na Vita Audio."
        ctaLabel="Consultar Rexton Reach IX CIC-Li"
        ctaMode={ctaMode}
      />
      <Section10cCarrosselHistorias />
      <FeatureCardGrid
        title="Aparelho auditivo Rexton recarregável: mais praticidade para sua rotina"
        subtitle="Os modelos BiCore R-Li e R-Li T são recarregáveis, e há opções recarregáveis em outras linhas do portfólio."
        items={RECARREGAVEL_BENEFICIOS}
        closingText="A autonomia real varia conforme a utilização, a configuração e os recursos ativados em cada aparelho."
      />
      <BlocoConteudo
        title="Aparelho auditivo Rexton é bom?"
        paragraphs={[
          "A Rexton possui diferentes linhas e tecnologias desenvolvidas para atender a diversos perfis de usuários. Porém, a experiência com um aparelho auditivo não depende apenas da marca. A escolha do modelo, o nível de tecnologia, a configuração, a adaptação e o acompanhamento profissional também são fundamentais.",
          "Na prática, os fatores abaixo pesam tanto quanto o nome do fabricante:",
        ]}
        bullets={[
          "Necessidade auditiva",
          "Ambientes frequentados",
          "Conforto no uso prolongado",
          "Nível de tecnologia",
          "Facilidade de uso",
          "Conectividade desejada",
          "Acompanhamento após a adaptação",
        ]}
        closingText="Mais importante do que descobrir se a Rexton é boa de forma genérica é entender qual aparelho Rexton é adequado para você."
        ctaLabel="Quero Orientação para Escolher"
        ctaMode={ctaMode}
        background="gray"
      />
      <PrimaryPromoBlock
        title="Quanto custa um aparelho auditivo Rexton?"
        description="O preço de um aparelho auditivo Rexton varia conforme a linha, o modelo, o nível de tecnologia, os recursos e as necessidades de cada pessoa — um BiCore R-Li e um Reach, por exemplo, ocupam faixas diferentes. Fale com nossa equipe e consulte modelos e valores disponíveis na Vita Audio."
        buttonLabel="Consultar Preços dos Aparelhos Rexton"
        ctaMode={ctaMode}
      />
      <BlocoConteudo
        title="Preço importa. Mas o aparelho precisa fazer sentido para sua rotina."
        paragraphs={[
          "Dois aparelhos da mesma marca podem atender necessidades bem diferentes. Um modelo com muitos recursos que você não vai usar não é um bom custo-benefício; um modelo mais barato que não atende sua perda auditiva, também não.",
          "O custo-benefício real precisa considerar os ambientes que você frequenta, a tecnologia realmente necessária, os recursos, o conforto, a conectividade, a facilidade de uso e o acompanhamento depois da adaptação.",
        ]}
      />
      <SeletorIntencao
        title="O que você procura?"
        subtitle="Escolha uma opção e continue a conversa já com o assunto certo."
        options={INTENCAO_OPTIONS}
        ctaMode={ctaMode}
      />
      <DiferenciaisList
        title="Mais do que escolher um Rexton, é importante escolher o Rexton certo para você"
        items={DIFERENCIAIS}
      />
      <Section10bGoogleReviews />
      <Section09Conheca />
      <ComoFunciona
        title="Como escolher seu aparelho Rexton na Vita Audio"
        subtitle="Quatro passos, do primeiro contato ao acompanhamento da adaptação."
        steps={ESCOLHA_STEPS}
      />
      <FaqAccordion
        title="Dúvidas frequentes sobre aparelhos auditivos Rexton"
        items={FAQ_ITEMS}
      />
      <PaginasRelacionadas
        currentRoute="rexton"
        ctaMode={ctaMode}
        title="Veja também"
        background="white"
      />
      <OutrosServicos />
      <FinalCta
        title="Quer saber qual aparelho Rexton combina com suas necessidades?"
        subtitle="Conheça diferentes linhas, modelos e tecnologias Rexton e conte com a orientação das fonoaudiólogas especializadas da Vita Audio para encontrar uma opção adequada à sua audição, rotina e investimento. Atendimento em Indaiatuba/SP."
        primaryLabel="Consultar Modelos e Valores Rexton"
        ctaMode={ctaMode}
      />
    </>
  )
}

export function RextonPage() {
  return <RextonContent ctaMode="form" />
}

export function RextonPageWA() {
  return <RextonContent ctaMode="whatsapp" />
}
