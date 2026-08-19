import {
  BatteryCharging,
  Bluetooth,
  Ear,
  MapPin,
  SlidersHorizontal,
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
import { PAGE_SEO } from "../constants/seo"
import { usePageMeta } from "../hooks/usePageMeta"

const POR_QUE = [
  {
    Icon: Waves,
    title: "Tecnologia para diferentes ambientes",
    description:
      "Soluções desenvolvidas para auxiliar a experiência auditiva em situações diferentes do cotidiano, de casa a locais movimentados.",
  },
  {
    Icon: Ear,
    title: "Diferentes formatos",
    description:
      "Opções para diferentes necessidades auditivas e preferências estéticas, conforme o modelo escolhido.",
  },
  {
    Icon: BatteryCharging,
    title: "Opções de bateria",
    description:
      "Modelos com pilha convencional e modelos recarregáveis, conforme a disponibilidade. Consulte nossa equipe.",
  },
  {
    Icon: Bluetooth,
    title: "Conectividade",
    description:
      "Recursos de conectividade com dispositivos compatíveis em modelos que oferecem essa função.",
  },
  {
    Icon: SlidersHorizontal,
    title: "Personalização",
    description:
      "A programação é feita pela fonoaudióloga a partir da sua avaliação auditiva, e não com uma configuração padrão.",
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
    name: "Coselgi Mojo",
    tagline: "Linha disponível na Vita Audio",
    description:
      "A família Coselgi trabalhada pela clínica, com modelos que variam em formato, recursos e nível de tecnologia dentro da própria linha.",
    highlights: [
      "Diferentes formatos e níveis de tecnologia dentro da mesma família",
      "A configuração é definida a partir da sua avaliação auditiva",
      "Opções de bateria conforme o modelo escolhido",
      "Consulte os modelos disponíveis e as características oficiais",
    ],
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
    title: "Comparação entre marcas e tecnologias",
    description:
      "Trabalhamos com mais de um fabricante, o que permite comparar alternativas reais antes de decidir.",
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
    question: "Aparelho auditivo Coselgi é bom?",
    answer:
      "A Coselgi possui linhas e níveis de tecnologia desenvolvidos para atender perfis diferentes de usuários. Porém, a experiência com um aparelho auditivo não depende apenas da marca: a escolha do modelo, o nível de tecnologia, a configuração, a adaptação e o acompanhamento profissional também são fundamentais.",
  },
  {
    question: "Quanto custa um aparelho auditivo Coselgi?",
    answer:
      "O preço varia conforme o modelo, o nível de tecnologia, os recursos e as necessidades de cada pessoa. Consulte nossa equipe para saber os valores dos modelos disponíveis na Vita Audio.",
  },
  {
    question: "Quais são os aparelhos auditivos Coselgi?",
    answer:
      "Na Vita Audio trabalhamos com a linha Coselgi Mojo. Dentro dela existem modelos com formatos, recursos e níveis de tecnologia diferentes.",
  },
  {
    question: "O que é o Coselgi Mojo?",
    answer:
      "É a família de aparelhos auditivos Coselgi disponível na clínica. A escolha do modelo dentro da linha depende da sua avaliação auditiva, do formato desejado e dos recursos que fazem diferença na sua rotina.",
  },
  {
    question: "Qual é o melhor aparelho auditivo Coselgi?",
    answer:
      "Depende das suas necessidades auditivas, dos ambientes que você frequenta, do formato desejado, da facilidade de manuseio e dos recursos considerados importantes. Não existe um modelo que seja o melhor para todas as pessoas.",
  },
  {
    question: "Existe aparelho auditivo Coselgi recarregável?",
    answer:
      "Existem modelos recarregáveis no portfólio de aparelhos auditivos atual. Consulte nossa equipe para confirmar quais opções recarregáveis estão disponíveis na Vita Audio.",
  },
  {
    question: "Aparelho auditivo Coselgi tem Bluetooth?",
    answer:
      "Modelos compatíveis oferecem recursos de conectividade. A conexão e os recursos disponíveis dependem do modelo do aparelho e do dispositivo utilizado — vale confirmar antes da escolha.",
  },
  {
    question: "Como saber qual Coselgi é indicado para mim?",
    answer:
      "A indicação parte da avaliação auditiva e da conversa sobre a sua rotina. A partir daí, a fonoaudióloga apresenta os modelos e formatos compatíveis com o seu caso.",
  },
  {
    question: "Onde comprar aparelho auditivo Coselgi em Indaiatuba?",
    answer:
      "Na Vita Audio, na R. Tuiuti, 460 — Cidade Nova I, Indaiatuba/SP. Fale com nossa equipe para conhecer os modelos disponíveis, consultar valores e agendar um atendimento.",
  },
]

const INTENCAO_OPTIONS = [
  {
    label: "Quero saber os preços dos aparelhos Coselgi",
    message:
      "Olá! Gostaria de consultar os preços dos aparelhos auditivos Coselgi disponíveis na Vita Audio.",
  },
  {
    label: "Quero conhecer a linha Mojo",
    message:
      "Olá! Gostaria de saber mais sobre o Coselgi Mojo e consultar modelos e valores.",
  },
  {
    label: "Quero um aparelho recarregável",
    message:
      "Olá! Gostaria de conhecer os modelos Coselgi recarregáveis disponíveis na Vita Audio.",
  },
  {
    label: "Quero um aparelho discreto",
    message:
      "Olá! Gostaria de conhecer os modelos Coselgi mais discretos disponíveis na Vita Audio.",
  },
  {
    label: "Não sei qual escolher",
    message:
      "Olá! Vi os aparelhos auditivos Coselgi no site da Vita Audio e gostaria de conhecer os modelos e valores.",
  },
]

type CoselgiContentProps = {
  ctaMode: "form" | "whatsapp"
}

function CoselgiContent({ ctaMode }: CoselgiContentProps) {
  usePageMeta(PAGE_SEO.coselgi)
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
        "Entenda o que muda entre os modelos da linha Mojo e entre as marcas trabalhadas pela clínica.",
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
        title="Aparelhos Auditivos Coselgi em Indaiatuba"
        subtitle="Conheça a linha Coselgi Mojo e encontre, com orientação de fonoaudiólogas especializadas, o aparelho mais adequado para sua audição, rotina e preferências. Consulte modelos disponíveis e valores na Vita Audio."
        primaryLabel={wa ? "Conhecer Modelos Coselgi pelo WhatsApp" : "Conhecer Modelos Coselgi"}
        secondaryLabel={wa ? undefined : "Consultar Modelos e Valores"}
        ctaMode={ctaMode}
      />
      <FeatureCardGrid
        title="Por que escolher um aparelho auditivo Coselgi?"
        subtitle="Mais importante do que a marca é encontrar o modelo e a configuração adequados ao seu caso."
        items={POR_QUE}
      />
      <CardsLinhas
        title="Conheça a linha Coselgi disponível na Vita Audio"
        subtitle="Dentro de uma mesma família existem modelos com formatos e níveis de tecnologia diferentes."
        linhas={LINHAS}
        closingTitle="Não sabe qual modelo escolher?"
        ctaLabel="Quero Conhecer os Modelos Coselgi"
        ctaMode={ctaMode}
        background="white"
      />
      <Section10cCarrosselHistorias />
      <BlocoConteudo
        title="Aparelho auditivo Coselgi é bom?"
        paragraphs={[
          "A Coselgi possui linhas e níveis de tecnologia desenvolvidos para atender perfis diferentes de usuários. Porém, a experiência com um aparelho auditivo não depende apenas da marca. A escolha do modelo, o nível de tecnologia, a configuração, a adaptação e o acompanhamento profissional também são fundamentais.",
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
        closingText="Mais importante do que descobrir se a Coselgi é boa de forma genérica é entender qual aparelho é adequado para você."
        ctaLabel="Quero Orientação para Escolher"
        ctaMode={ctaMode}
        background="gray"
      />
      <PrimaryPromoBlock
        title="Quanto custa um aparelho auditivo Coselgi?"
        description="O preço varia conforme o modelo, o nível de tecnologia, o formato, os recursos e as necessidades de cada pessoa. Fale com nossa equipe e consulte os modelos e valores disponíveis na Vita Audio."
        buttonLabel="Consultar Preços dos Aparelhos Coselgi"
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
        title="Mais do que escolher a marca, é importante escolher o aparelho certo para você"
        items={DIFERENCIAIS}
      />
      <Section10bGoogleReviews />
      <Section09Conheca />
      <ComoFunciona
        title="Como escolher seu aparelho Coselgi na Vita Audio"
        subtitle="Quatro passos, do primeiro contato ao acompanhamento da adaptação."
        steps={ESCOLHA_STEPS}
      />
      <FaqAccordion
        title="Dúvidas frequentes sobre aparelhos auditivos Coselgi"
        items={FAQ_ITEMS}
      />
      <PaginasRelacionadas
        currentRoute="coselgi"
        ctaMode={ctaMode}
        title="Veja também"
        background="white"
      />
      <OutrosServicos />
      <FinalCta
        title="Quer saber qual aparelho Coselgi combina com suas necessidades?"
        subtitle="Conheça os modelos disponíveis e conte com a orientação das fonoaudiólogas especializadas da Vita Audio para encontrar uma opção adequada à sua audição, rotina e investimento. Atendimento em Indaiatuba/SP."
        primaryLabel="Consultar Modelos e Valores Coselgi"
        ctaMode={ctaMode}
      />
    </>
  )
}

export function CoselgiPage() {
  return <CoselgiContent ctaMode="form" />
}

export function CoselgiPageWA() {
  return <CoselgiContent ctaMode="whatsapp" />
}
