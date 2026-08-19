import {
  BatteryCharging,
  Bluetooth,
  Ear,
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
    name: "Interton Move",
    tagline: "Linha disponível na Vita Audio",
    description:
      "Uma das famílias Interton trabalhadas pela clínica, com modelos que variam em formato, recursos e nível de tecnologia.",
    highlights: [
      "Diferentes formatos e níveis de tecnologia dentro da mesma família",
      "A configuração é definida a partir da sua avaliação auditiva",
      "Consulte os modelos disponíveis e as características oficiais",
    ],
  },
  {
    name: "Interton Presto",
    tagline: "Linha disponível na Vita Audio",
    description:
      "Outra família Interton trabalhada pela clínica, com opções que variam em formato, recursos e nível de tecnologia.",
    highlights: [
      "Alternativa dentro do portfólio Interton",
      "Opções de bateria conforme o modelo escolhido",
      "Consulte os modelos disponíveis e as características oficiais",
    ],
  },
]

const COMPARATIVO_COLUNAS = ["Pode ser interessante para quem busca"]

const COMPARATIVO_LINHAS = [
  {
    label: "Interton Move",
    values: ["Uma opção dentro do portfólio, conforme formato e tecnologia indicados"],
  },
  {
    label: "Interton Presto",
    values: ["Alternativa dentro do portfólio, conforme formato e recursos desejados"],
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
    title: "Comparação entre linhas e tecnologias",
    description:
      "Você entende o que muda entre as famílias Interton antes de decidir qualquer coisa.",
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
    question: "Aparelho auditivo Interton é bom?",
    answer:
      "A Interton possui linhas e níveis de tecnologia desenvolvidos para atender perfis diferentes de usuários. Porém, a experiência com um aparelho auditivo não depende apenas da marca: a escolha do modelo, o nível de tecnologia, a configuração, a adaptação e o acompanhamento profissional também são fundamentais.",
  },
  {
    question: "Quanto custa um aparelho auditivo Interton?",
    answer:
      "O preço varia conforme a linha, o modelo, o nível de tecnologia, os recursos e as necessidades de cada pessoa. Consulte nossa equipe para saber os valores dos modelos disponíveis na Vita Audio.",
  },
  {
    question: "Quais são os aparelhos auditivos Interton?",
    answer:
      "Na Vita Audio trabalhamos com as linhas Interton Move e Interton Presto. Dentro de cada família existem modelos com formatos, recursos e níveis de tecnologia diferentes.",
  },
  {
    question: "Qual é o melhor aparelho auditivo Interton?",
    answer:
      "Depende das suas necessidades auditivas, dos ambientes que você frequenta, do formato desejado, da facilidade de manuseio e dos recursos que fazem diferença na sua rotina. Não existe um modelo que seja o melhor para todas as pessoas.",
  },
  {
    question: "Qual a diferença entre Interton Move e Interton Presto?",
    answer:
      "São famílias diferentes dentro do portfólio Interton, com variações de formato, recursos e nível de tecnologia. A comparação detalhada entre os modelos disponíveis é feita durante o atendimento, a partir da sua avaliação auditiva.",
  },
  {
    question: "Existe aparelho auditivo Interton recarregável?",
    answer:
      "Existem modelos recarregáveis no portfólio de aparelhos auditivos atual. Consulte nossa equipe para confirmar quais opções recarregáveis Interton estão disponíveis na Vita Audio.",
  },
  {
    question: "Aparelho auditivo Interton tem Bluetooth?",
    answer:
      "Modelos compatíveis oferecem recursos de conectividade. A conexão e os recursos disponíveis dependem do modelo do aparelho e do dispositivo utilizado — vale confirmar antes da escolha.",
  },
  {
    question: "O que significa Interton GN?",
    answer:
      "É como muitas pessoas se referem à marca nas buscas. Se você procura por “Interton GN”, está procurando pelos aparelhos auditivos Interton — que trabalhamos aqui na Vita Audio.",
  },
  {
    question: "Como saber qual Interton é indicado para mim?",
    answer:
      "A indicação parte da avaliação auditiva e da conversa sobre a sua rotina. A partir daí, a fonoaudióloga apresenta as linhas e os formatos compatíveis com o seu caso.",
  },
  {
    question: "Onde comprar aparelho auditivo Interton em Indaiatuba?",
    answer:
      "Na Vita Audio, na R. Tuiuti, 460 — Cidade Nova I, Indaiatuba/SP. Fale com nossa equipe para conhecer os modelos disponíveis, consultar valores e agendar um atendimento.",
  },
]

const INTENCAO_OPTIONS = [
  {
    label: "Quero saber os preços dos aparelhos Interton",
    message:
      "Olá! Gostaria de consultar os preços dos aparelhos auditivos Interton disponíveis na Vita Audio.",
  },
  {
    label: "Quero conhecer a linha Move",
    message:
      "Olá! Gostaria de saber mais sobre o Interton Move e consultar modelos e valores.",
  },
  {
    label: "Quero conhecer a linha Presto",
    message:
      "Olá! Gostaria de saber mais sobre o Interton Presto e consultar modelos e valores.",
  },
  {
    label: "Quero um aparelho recarregável",
    message:
      "Olá! Gostaria de conhecer os modelos Interton recarregáveis disponíveis na Vita Audio.",
  },
  {
    label: "Não sei qual escolher",
    message:
      "Olá! Vi os aparelhos auditivos Interton no site da Vita Audio e gostaria de conhecer os modelos e valores.",
  },
]

type IntertonContentProps = {
  ctaMode: "form" | "whatsapp"
}

function IntertonContent({ ctaMode }: IntertonContentProps) {
  usePageMeta(PAGE_SEO.interton)
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
        "Entenda o que muda entre as linhas Move e Presto e entre as marcas trabalhadas pela clínica.",
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
        title="Aparelhos Auditivos Interton em Indaiatuba"
        subtitle="Conheça as linhas Interton Move e Presto e encontre, com orientação de fonoaudiólogas especializadas, o aparelho mais adequado para sua audição, rotina e preferências. Consulte modelos disponíveis e valores na Vita Audio."
        primaryLabel={wa ? "Conhecer Modelos Interton pelo WhatsApp" : "Conhecer Modelos Interton"}
        secondaryLabel={wa ? undefined : "Consultar Modelos e Valores"}
        ctaMode={ctaMode}
      />
      <FeatureCardGrid
        title="Por que escolher um aparelho auditivo Interton?"
        subtitle="Mais importante do que a marca é encontrar o modelo e a configuração adequados ao seu caso."
        items={POR_QUE}
      />
      <CardsLinhas
        title="Conheça as linhas Interton disponíveis na Vita Audio"
        subtitle="Duas famílias com propostas diferentes. A escolha depende da sua audição e da sua rotina."
        linhas={LINHAS}
        closingTitle="Não sabe qual escolher?"
        ctaLabel="Quero Conhecer os Modelos Interton"
        ctaMode={ctaMode}
        background="white"
      />
      <TabelaComparativa
        title="Qual aparelho auditivo Interton escolher?"
        subtitle="Um resumo da proposta de cada linha — não é uma prescrição."
        columns={COMPARATIVO_COLUNAS}
        rows={COMPARATIVO_LINHAS}
        note="Você não precisa decidir sozinho. Nossas fonoaudiólogas podem ajudar a identificar quais características fazem sentido para suas necessidades."
        ctaLabel="Quero Ajuda para Escolher"
        ctaMode={ctaMode}
        background="gray"
      />
      <Section10cCarrosselHistorias />
      <FeatureCardGrid
        title="Aparelho auditivo Interton recarregável"
        subtitle="A recarga elimina a troca frequente de pilhas pequenas. Consulte nossa equipe para saber quais modelos Interton recarregáveis estão disponíveis."
        items={RECARREGAVEL_BENEFICIOS}
        closingText="A autonomia real varia conforme a utilização, a configuração e os recursos ativados em cada aparelho."
      />
      <BlocoConteudo
        title="Aparelho auditivo Interton é bom?"
        paragraphs={[
          "A Interton possui linhas e níveis de tecnologia desenvolvidos para atender perfis diferentes de usuários. Porém, a experiência com um aparelho auditivo não depende apenas da marca. A escolha do modelo, o nível de tecnologia, a configuração, a adaptação e o acompanhamento profissional também são fundamentais.",
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
        closingText="Mais importante do que descobrir se a Interton é boa de forma genérica é entender qual aparelho Interton é adequado para você."
        ctaLabel="Quero Orientação para Escolher"
        ctaMode={ctaMode}
        background="gray"
      />
      <PrimaryPromoBlock
        title="Quanto custa um aparelho auditivo Interton?"
        description="O preço de um aparelho auditivo Interton varia conforme a linha, o modelo, o nível de tecnologia, os recursos e as necessidades de cada pessoa — Move e Presto podem ocupar faixas diferentes. Fale com nossa equipe e consulte modelos e valores disponíveis na Vita Audio."
        buttonLabel="Consultar Preços dos Aparelhos Interton"
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
        title="Mais do que escolher um Interton, é importante escolher o Interton certo para você"
        items={DIFERENCIAIS}
      />
      <Section10bGoogleReviews />
      <Section09Conheca />
      <ComoFunciona
        title="Como escolher seu aparelho Interton na Vita Audio"
        subtitle="Quatro passos, do primeiro contato ao acompanhamento da adaptação."
        steps={ESCOLHA_STEPS}
      />
      <FaqAccordion
        title="Dúvidas frequentes sobre aparelhos auditivos Interton"
        items={FAQ_ITEMS}
      />
      <PaginasRelacionadas
        currentRoute="interton"
        ctaMode={ctaMode}
        title="Veja também"
        background="white"
      />
      <OutrosServicos />
      <FinalCta
        title="Quer saber qual aparelho Interton combina com suas necessidades?"
        subtitle="Conheça diferentes linhas, modelos e tecnologias Interton e conte com a orientação das fonoaudiólogas especializadas da Vita Audio para encontrar uma opção adequada à sua audição, rotina e investimento. Atendimento em Indaiatuba/SP."
        primaryLabel="Consultar Modelos e Valores Interton"
        ctaMode={ctaMode}
      />
    </>
  )
}

export function IntertonPage() {
  return <IntertonContent ctaMode="form" />
}

export function IntertonPageWA() {
  return <IntertonContent ctaMode="whatsapp" />
}
