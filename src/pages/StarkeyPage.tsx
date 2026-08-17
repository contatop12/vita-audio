import {
  AppWindow,
  BatteryCharging,
  Bluetooth,
  Brain,
  EyeOff,
  Filter,
  Footprints,
  Headphones,
  MapPin,
  MessagesSquare,
  ShieldAlert,
  SlidersHorizontal,
  Sparkles,
  Zap,
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

const CONFIANCA = [
  {
    Icon: Sparkles,
    title: "Fonoaudiólogas especializadas",
    description:
      "Atendimento conduzido por profissionais especializadas em aparelhos auditivos.",
  },
  {
    Icon: MapPin,
    title: "Atendimento em Indaiatuba",
    description: "Clínica na R. Tuiuti, 460 — Cidade Nova I, com atendimento presencial.",
  },
  {
    Icon: SlidersHorizontal,
    title: "Acompanhamento na adaptação",
    description: "O processo não termina na entrega do aparelho: os ajustes fazem parte.",
  },
  {
    Icon: Brain,
    title: "Tecnologia escolhida por necessidade",
    description:
      "A indicação parte da sua audição e da sua rotina — não do modelo mais caro do catálogo.",
  },
]

const GENESIS_BENEFICIOS = [
  {
    Icon: Brain,
    title: "Processamento inteligente do som",
    description:
      "Mais de 80 milhões de ajustes automáticos por hora, segundo a Starkey. Na prática, o aparelho acompanha as mudanças do ambiente sem exigir que você fique mexendo nele.",
  },
  {
    Icon: MessagesSquare,
    title: "Clareza da fala",
    description:
      "Tecnologias desenvolvidas para auxiliar na percepção da fala e reduzir o esforço necessário para ouvir ao longo do dia.",
  },
  {
    Icon: EyeOff,
    title: "Design discreto",
    description:
      "Existem diferentes formatos, incluindo opções compactas e modelos posicionados dentro do ouvido.",
  },
  {
    Icon: BatteryCharging,
    title: "Recarregável",
    description:
      "Existem versões recarregáveis na linha Genesis AI, o que dispensa a troca frequente de pilhas pequenas.",
  },
  {
    Icon: Bluetooth,
    title: "Bluetooth",
    description:
      "Genesis AI possui opções com conectividade Bluetooth para dispositivos compatíveis.",
  },
  {
    Icon: AppWindow,
    title: "My Starkey",
    description:
      "Modelos compatíveis podem ser utilizados com o aplicativo My Starkey para ajustes e outras funcionalidades.",
  },
]

const GENESIS_RECURSOS = [
  {
    Icon: Zap,
    title: "Edge Mode+",
    description:
      "Utiliza inteligência artificial para otimizar a qualidade sonora quando acionado — útil em situações auditivas mais difíceis.",
  },
  {
    Icon: Footprints,
    title: "Monitoramento de atividade",
    description:
      "O aplicativo pode acompanhar informações relacionadas a passos e atividade física.",
  },
  {
    Icon: ShieldAlert,
    title: "Detecção de queda",
    description:
      "A Starkey oferece recurso capaz de detectar quedas e enviar alertas a contatos selecionados, em configurações e modelos compatíveis.",
  },
  {
    Icon: MapPin,
    title: "Encontrar aparelhos",
    description: "Recursos do aplicativo podem auxiliar na localização dos aparelhos.",
  },
  {
    Icon: Headphones,
    title: "Streaming",
    description:
      "Em dispositivos compatíveis, chamadas, músicas e outros áudios podem ser transmitidos diretamente aos aparelhos.",
  },
]

const EVOLV_RECURSOS = [
  {
    Icon: Brain,
    title: "Ajustes automáticos",
    description: "Até 55 milhões de ajustes personalizados por hora, segundo a fabricante.",
  },
  {
    Icon: Filter,
    title: "Redução de ruído",
    description:
      "A Starkey informa redução adicional de energia do ruído em relação à geração anterior da própria tecnologia.",
  },
  {
    Icon: BatteryCharging,
    title: "Modelos recarregáveis",
    description: "A linha possui opções recarregáveis em diferentes formatos.",
  },
  {
    Icon: Bluetooth,
    title: "Conectividade",
    description: "Existem modelos Evolv AI com conectividade e transmissão de áudio.",
  },
  {
    Icon: Zap,
    title: "Edge Mode",
    description: "Inteligência artificial sob demanda para situações auditivas desafiadoras.",
  },
  {
    Icon: Footprints,
    title: "Recursos de saúde",
    description:
      "Dependendo da configuração, existem recursos relacionados a atividade, engajamento e detecção de queda.",
  },
]

const LINHAS = [
  {
    name: "Starkey Genesis AI",
    tagline: "Tecnologia mais avançada entre as duas linhas comercializadas na Vita Audio",
    description:
      "Plataforma desenvolvida com uma arquitetura de processamento inspirada na forma como o cérebro processa sons, segundo a própria Starkey.",
    highlights: [
      "Mais de 80 milhões de ajustes automáticos por hora, segundo a fabricante",
      "Versões recarregáveis disponíveis",
      "Conectividade Bluetooth em modelos compatíveis",
      "Aplicativo My Starkey em modelos compatíveis",
    ],
  },
  {
    name: "Starkey Evolv AI",
    tagline: "Tecnologia avançada com ampla variedade de formatos e recursos",
    description:
      "Linha tecnologicamente avançada, com uma das maiores variedades de formatos do portfólio Starkey.",
    highlights: [
      "Até 55 milhões de ajustes personalizados por hora, segundo a fabricante",
      "Opções recarregáveis em diferentes formatos",
      "Modelos com conectividade e transmissão de áudio",
      "Edge Mode para situações auditivas desafiadoras",
    ],
  },
]

const COMPARATIVO_COLUNAS = ["Genesis AI", "Evolv AI"]

const COMPARATIVO_LINHAS = [
  {
    label: "Inteligência artificial",
    values: ["Mais recente entre as duas linhas", "Sim"],
  },
  { label: "Ajustes automáticos", values: ["+80 milhões/hora", "Até 55 milhões/hora"] },
  { label: "Opções recarregáveis", values: ["Sim", "Sim"] },
  { label: "Bluetooth", values: ["Em modelos compatíveis", "Em modelos compatíveis"] },
  { label: "Aplicativo", values: ["My Starkey", "Thrive"] },
  { label: "Opções discretas", values: ["Sim", "Sim"] },
  {
    label: "Recursos de saúde",
    values: ["Em configurações compatíveis", "Em configurações compatíveis"],
  },
  {
    label: "Detecção de queda",
    values: ["Em configurações compatíveis", "Em configurações compatíveis"],
  },
]

const DIFERENCIAIS = [
  {
    title: "Fonoaudiólogas especializadas em aparelhos auditivos",
    description: "Orientação profissional durante toda a escolha do aparelho.",
  },
  {
    title: "Escolha individualizada",
    description:
      "O modelo é escolhido considerando suas necessidades auditivas e a sua rotina.",
  },
  {
    title: "Acompanhamento na adaptação",
    description: "O processo não termina quando o aparelho é adquirido.",
  },
  {
    title: "Diferentes tecnologias",
    description:
      "Possibilidade de comparar as linhas Starkey comercializadas na clínica antes de decidir.",
  },
  {
    title: "Atendimento em Indaiatuba",
    description:
      "Facilidade para quem busca acompanhamento presencial na região de Indaiatuba/SP.",
  },
  {
    title: "Pacientes reais e avaliações públicas",
    description:
      "Fotos e depoimentos reais de quem já passou pelo processo de adaptação na Vita Audio.",
  },
]

const FAQ_ITEMS = [
  {
    question: "Quanto custa um aparelho auditivo Starkey?",
    answer:
      "O preço varia conforme a linha, o modelo, o nível de tecnologia, o formato e os recursos disponíveis. Por isso não trabalhamos com uma tabela única: consulte nossa equipe para saber os valores dos modelos indicados para o seu caso.",
  },
  {
    question: "Qual o preço do Starkey Genesis AI?",
    answer:
      "Depende do modelo e da configuração escolhida dentro da linha Genesis AI. Fale com nossa equipe para consultar os valores disponíveis na Vita Audio.",
  },
  {
    question: "Starkey é uma boa marca?",
    answer:
      "A Starkey possui diferentes gerações de aparelhos auditivos, com inteligência artificial, conectividade e vários formatos. Ainda assim, uma boa marca não significa que qualquer aparelho dela será o melhor para qualquer pessoa: modelo, configuração e acompanhamento também importam.",
  },
  {
    question: "Qual é o melhor aparelho auditivo Starkey?",
    answer:
      "Depende das suas necessidades auditivas, dos ambientes que você frequenta, do formato desejado e dos recursos que fazem diferença na sua rotina. A comparação é feita durante o atendimento.",
  },
  {
    question: "Qual a diferença entre Genesis AI e Evolv AI?",
    answer:
      "O Genesis AI é a geração mais recente entre as duas e realiza mais de 80 milhões de ajustes automáticos por hora, segundo a Starkey, com o aplicativo My Starkey. O Evolv AI realiza até 55 milhões de ajustes por hora, usa o aplicativo Thrive e oferece uma variedade ampla de formatos. Ambas têm opções recarregáveis e com conectividade.",
  },
  {
    question: "Genesis AI é melhor que Evolv AI?",
    answer:
      "O Genesis AI é uma geração tecnológica mais recente entre as duas, mas isso não significa automaticamente que seja a escolha ideal para todos. A decisão deve considerar necessidade auditiva, formato, recursos necessários, facilidade de uso e orçamento.",
  },
  {
    question: "O Starkey Genesis AI é recarregável?",
    answer: "Sim, existem versões recarregáveis dentro da linha Genesis AI.",
  },
  {
    question: "Evolv AI é recarregável?",
    answer:
      "Sim, a linha Evolv AI possui opções recarregáveis em diferentes formatos.",
  },
  {
    question: "Starkey possui Bluetooth?",
    answer:
      "Sim, existem modelos com conectividade Bluetooth tanto na linha Genesis AI quanto na Evolv AI, permitindo transmissão de áudio para dispositivos compatíveis.",
  },
  {
    question: "Starkey funciona com iPhone?",
    answer:
      "Existem modelos compatíveis com dispositivos Apple. A compatibilidade específica depende do modelo do aparelho auditivo e do smartphone utilizado — a própria Starkey disponibiliza listas de compatibilidade.",
  },
  {
    question: "Starkey funciona com Android?",
    answer:
      "Existem modelos compatíveis com dispositivos Android, também dependendo do aparelho auditivo e do smartphone utilizado.",
  },
  {
    question: "Existem aparelhos Starkey pequenos e discretos?",
    answer:
      "Sim. A Starkey trabalha com diferentes formatos, incluindo receptor no canal, intracanal, microcanal e microcanal invisível.",
  },
  {
    question: "Existe aparelho Starkey dentro do ouvido?",
    answer:
      "Sim. A fabricante possui formatos intra-auricular, intracanal, microcanal e outras opções, conforme o modelo e a indicação para cada caso.",
  },
  {
    question: "Onde comprar aparelho auditivo Starkey em Indaiatuba?",
    answer:
      "Na Vita Audio, na R. Tuiuti, 460 — Cidade Nova I, Indaiatuba/SP. Fale com nossa equipe para conhecer os modelos disponíveis e agendar um atendimento.",
  },
  {
    question: "Como saber qual Starkey é indicado para mim?",
    answer:
      "A indicação parte da avaliação auditiva e da conversa sobre a sua rotina. A partir daí, a fonoaudióloga apresenta as linhas e os formatos compatíveis com o seu caso.",
  },
]

const INTENCAO_OPTIONS = [
  {
    label: "Quero saber os preços",
    message:
      "Olá! Gostaria de consultar os modelos e preços dos aparelhos auditivos Starkey disponíveis na Vita Audio.",
  },
  {
    label: "Quero conhecer o Genesis AI",
    message:
      "Olá! Estou pesquisando o Starkey Genesis AI e gostaria de conhecer os modelos disponíveis e agendar um atendimento.",
  },
  {
    label: "Quero conhecer o Evolv AI",
    message:
      "Olá! Gostaria de saber mais sobre o Starkey Evolv AI e agendar um atendimento.",
  },
  {
    label: "Quero um aparelho discreto",
    message:
      "Olá! Gostaria de conhecer os modelos Starkey mais discretos disponíveis na Vita Audio e agendar um atendimento.",
  },
  {
    label: "Quero um aparelho recarregável",
    message:
      "Olá! Gostaria de conhecer os modelos Starkey recarregáveis disponíveis na Vita Audio e agendar um atendimento.",
  },
  {
    label: "Não sei qual escolher",
    message:
      "Olá! Encontrei a Vita Audio pesquisando aparelhos auditivos Starkey. Gostaria de conhecer os modelos disponíveis e agendar um atendimento.",
  },
]

type StarkeyContentProps = {
  ctaMode: "form" | "whatsapp"
}

function StarkeyContent({ ctaMode }: StarkeyContentProps) {
  usePageMeta(PAGE_SEO.starkey)
  const wa = ctaMode === "whatsapp"

  const ATENDIMENTO_STEPS = [
    {
      title: wa ? "Fale conosco pelo WhatsApp" : "Fale conosco",
      description: wa
        ? "Chame no WhatsApp e conte o que você procura e quais dificuldades tem percebido."
        : "Preencha o formulário ou chame no WhatsApp e conte o que você procura e quais dificuldades tem percebido.",
    },
    {
      title: "Agende seu atendimento",
      description: "Nossa equipe combina o melhor horário para receber você na clínica.",
    },
    {
      title: "Conheça as opções",
      description:
        "As fonoaudiólogas orientam sobre linhas, modelos e tecnologias adequadas às suas necessidades.",
    },
    {
      title: "Escolha e adapte seu aparelho",
      description:
        "Havendo indicação e decisão de adquirir o aparelho, conte com acompanhamento durante todo o processo de adaptação.",
    },
  ]

  return (
    <>
      <HeroPage
        title="Aparelhos Auditivos Starkey em Indaiatuba"
        subtitle="Conheça as linhas Starkey Genesis AI e Evolv AI e descubra, com orientação de fonoaudiólogas especializadas, qual tecnologia pode ser mais adequada para sua audição, rotina e necessidades."
        primaryLabel={wa ? "Agendar Atendimento pelo WhatsApp" : "Agendar Atendimento"}
        ctaMode={ctaMode}
      />
      <FeatureCardGrid
        title="Atendimento especializado em Indaiatuba"
        subtitle="Consulte modelos e valores disponíveis diretamente com a equipe da Vita Audio."
        items={CONFIANCA}
      />
      <BlocoConteudo
        title="Por que escolher um aparelho auditivo Starkey?"
        paragraphs={[
          "A Starkey oferece diferentes soluções auditivas, formatos e níveis de tecnologia. Segundo a fabricante, o portfólio atual apresenta seis estilos de aparelhos auditivos: retroauricular, receptor no canal, intra-auricular, intracanal, microcanal e microcanal invisível.",
          "Na prática, isso significa que existe mais de um caminho possível para o seu caso — e é justamente aí que a orientação profissional faz diferença.",
        ]}
        bullets={[
          "Clareza sonora e adaptação a diferentes ambientes",
          "Opções discretas em vários formatos",
          "Conectividade em modelos compatíveis",
          "Modelos recarregáveis",
          "Recursos de inteligência artificial",
          "Personalização a partir da sua avaliação auditiva",
        ]}
      />
      <CardsLinhas
        title="Conheça as linhas Starkey disponíveis na Vita Audio"
        subtitle="Duas plataformas diferentes, com pontos fortes distintos. A escolha depende do seu caso."
        linhas={LINHAS}
        closingTitle="Não sabe qual escolher?"
        ctaLabel={wa ? "Falar com uma Fonoaudióloga pelo WhatsApp" : "Falar com uma Fonoaudióloga"}
        ctaMode={ctaMode}
      />
      <BlocoConteudo
        title="Starkey Genesis AI: inteligência artificial aplicada à audição"
        paragraphs={[
          "Segundo a própria Starkey, o Genesis AI foi desenvolvido com uma arquitetura de processamento inspirada na forma como o cérebro processa sons e realiza mais de 80 milhões de ajustes automáticos por hora.",
          "Na prática, a tecnologia trabalha continuamente para se adaptar às características do ambiente, buscando proporcionar uma experiência sonora mais clara e confortável sem exigir ajustes constantes do usuário.",
        ]}
      />
      <FeatureCardGrid
        title="Principais benefícios do Genesis AI"
        subtitle="Recursos traduzidos para o que muda de fato no seu dia a dia."
        items={GENESIS_BENEFICIOS}
      />
      <FeatureCardGrid
        title="Muito além de simplesmente aumentar o volume"
        subtitle="Recursos disponíveis conforme o aparelho e a configuração escolhidos."
        items={GENESIS_RECURSOS}
        closingText="Os recursos de saúde não substituem dispositivos médicos de emergência e não previnem quedas."
      />
      <BlocoConteudo
        title="Starkey Evolv AI: tecnologia inteligente para diferentes momentos da rotina"
        paragraphs={[
          "O Evolv AI continua sendo uma linha tecnologicamente avançada e oferece uma variedade ampla de formatos.",
          "Segundo a Starkey, o Evolv AI realiza até 55 milhões de ajustes personalizados por hora e foi desenvolvido para adaptação automática a diferentes ambientes auditivos — ou seja, o aparelho acompanha a mudança de ambiente sem que você precise trocar programas manualmente o tempo todo.",
        ]}
        background="gray"
      />
      <FeatureCardGrid
        title="Principais recursos do Evolv AI"
        subtitle="Uma linha ampla, com opções para diferentes formatos e preferências."
        items={EVOLV_RECURSOS}
      />
      <BlocoConteudo
        title="Formatos disponíveis na linha Evolv AI"
        paragraphs={[
          "Segundo a própria Starkey, existem opções Evolv AI nos seguintes formatos:",
        ]}
        bullets={[
          "Retroauricular",
          "Receptor no canal",
          "Intra-auricular",
          "Intracanal",
          "Microcanal",
          "Invisível",
        ]}
        closingText="Isso não significa que todos estarão disponíveis na Vita Audio a todo momento. Consulte os modelos disponíveis."
        ctaLabel={wa ? "Consultar Disponibilidade pelo WhatsApp" : "Consultar Disponibilidade"}
        ctaMode={ctaMode}
        background="gray"
      />
      <TabelaComparativa
        title="Genesis AI ou Evolv AI: qual escolher?"
        subtitle="As diferenças de processamento e de aplicativos seguem as informações oficiais da fabricante."
        columns={COMPARATIVO_COLUNAS}
        rows={COMPARATIVO_LINHAS}
      />
      <BlocoConteudo
        title="Então o Genesis AI é sempre melhor?"
        paragraphs={[
          "Não necessariamente para todas as pessoas. Embora seja uma tecnologia mais recente entre essas duas linhas, a escolha deve considerar vários fatores:",
        ]}
        bullets={[
          "Necessidade auditiva",
          "Ambientes frequentados",
          "Formato desejado",
          "Recursos realmente necessários",
          "Facilidade de uso",
          "Orçamento e disponibilidade",
        ]}
        ctaLabel={wa ? "Quero Descobrir Qual é Melhor para Mim" : "Quero Descobrir Qual é Melhor para Mim"}
        ctaMode={ctaMode}
        background="gray"
      />
      <PrimaryPromoBlock
        title="Quanto custa um aparelho auditivo Starkey?"
        description="O preço de um aparelho auditivo Starkey varia de acordo com a linha, o modelo, o nível de tecnologia, o formato e os recursos disponíveis — há diferenças entre Genesis AI e Evolv AI, entre modelos recarregáveis e com pilha e entre os diferentes formatos. Quer saber quanto custa o aparelho Starkey adequado para você? Consulte os modelos e valores disponíveis diretamente com nossa equipe."
        buttonLabel={wa ? "Consultar Preços Starkey no WhatsApp" : "Consultar Preços Starkey"}
        ctaMode={ctaMode}
      />
      <SeletorIntencao
        title="O que você procura?"
        subtitle="Escolha uma opção e continue a conversa já com o assunto certo."
        options={INTENCAO_OPTIONS}
        ctaMode={ctaMode}
      />
      <BlocoConteudo
        title="Existem aparelhos auditivos Starkey recarregáveis?"
        paragraphs={[
          "Sim. Existem opções recarregáveis tanto na linha Genesis AI quanto na Evolv AI.",
          "Na prática, isso significa praticidade no dia a dia, menos manuseio de pilhas pequenas e uma rotina simples de carregamento. A autonomia varia conforme o modelo, a configuração e a forma de uso.",
        ]}
        ctaLabel={wa ? "Conhecer Modelos Recarregáveis" : "Conhecer Modelos Recarregáveis"}
        ctaMode={ctaMode}
      />
      <BlocoConteudo
        title="Aparelho Starkey conecta ao celular?"
        paragraphs={[
          "Modelos compatíveis permitem conectividade e transmissão de áudio. Genesis AI e Evolv AI possuem compatibilidade com dispositivos Apple e Android, mas a compatibilidade específica depende do aparelho auditivo e do smartphone utilizados — a própria Starkey disponibiliza listas de compatibilidade.",
          "Em modelos compatíveis, você pode receber chamadas, músicas, vídeos e outros áudios diretamente nos aparelhos, além de controlar algumas funções pelo aplicativo.",
        ]}
        ctaLabel={wa ? "Conhecer Modelos com Bluetooth" : "Conhecer Modelos com Bluetooth"}
        ctaMode={ctaMode}
        background="gray"
      />
      <BlocoConteudo
        title="Existem aparelhos Starkey pequenos e discretos?"
        paragraphs={[
          "Sim. A Starkey trabalha com diferentes formatos, incluindo opções receptor no canal, intracanal, microcanal e microcanal invisível.",
          "O menor aparelho não é necessariamente o melhor para todas as pessoas. A escolha depende também da anatomia do ouvido, da necessidade auditiva, da facilidade de manuseio, da tecnologia, do conforto e da preferência estética.",
        ]}
      />
      <Section10cCarrosselHistorias />
      <BlocoConteudo
        title="Starkey é uma boa marca de aparelho auditivo?"
        paragraphs={[
          "A Starkey possui diferentes gerações de aparelhos auditivos, com inteligência artificial, conectividade e uma variedade grande de formatos.",
          "Porém, uma boa marca não significa automaticamente que qualquer aparelho daquela marca será o melhor para qualquer pessoa. O modelo escolhido, a configuração e o acompanhamento também importam — e costumam pesar mais no resultado final do que o nome do fabricante.",
        ]}
        ctaLabel={wa ? "Quero Orientação para Escolher" : "Quero Orientação para Escolher"}
        ctaMode={ctaMode}
        background="gray"
      />
      <BlocoConteudo
        title="Aparelho auditivo não é apenas um eletrônico"
        paragraphs={[
          "Ao pesquisar aparelhos Starkey pela internet, é natural comparar modelos e preços. Mas a escolha do aparelho é apenas uma parte do processo.",
          "Um aparelho auditivo também envolve escolha adequada, configuração, adaptação, ajustes, orientação e acompanhamento. Por isso, mais importante do que simplesmente encontrar um Starkey online é encontrar a tecnologia adequada e contar com acompanhamento especializado.",
        ]}
        ctaLabel={wa ? "Agendar Atendimento na Vita Audio" : "Agendar Atendimento na Vita Audio"}
        ctaMode={ctaMode}
      />
      <DiferenciaisList
        title="Seu aparelho Starkey com acompanhamento especializado em Indaiatuba"
        items={DIFERENCIAIS}
      />
      <Section10bGoogleReviews />
      <Section09Conheca />
      <ComoFunciona
        title="Como encontrar seu aparelho Starkey na Vita Audio"
        subtitle="Quatro passos, do primeiro contato ao acompanhamento da adaptação."
        steps={ATENDIMENTO_STEPS}
      />
      <FaqAccordion
        title="Dúvidas frequentes sobre aparelhos auditivos Starkey"
        items={FAQ_ITEMS}
      />
      <PaginasRelacionadas
        currentRoute="starkey"
        ctaMode={ctaMode}
        title="Veja também"
        background="white"
      />
      <OutrosServicos />
      <FinalCta
        title="Quer descobrir qual aparelho Starkey combina melhor com suas necessidades?"
        subtitle="Conheça as linhas Genesis AI e Evolv AI e receba orientação de fonoaudiólogas especializadas para encontrar uma solução adequada à sua audição, rotina e preferências. Vita Audio — Indaiatuba/SP."
        primaryLabel={wa ? "Agendar Atendimento pelo WhatsApp" : "Agendar Atendimento"}
        secondaryLabel={wa ? undefined : "Consultar Modelos e Preços"}
        ctaMode={ctaMode}
      />
    </>
  )
}

export function StarkeyPage() {
  return <StarkeyContent ctaMode="form" />
}

export function StarkeyPageWA() {
  return <StarkeyContent ctaMode="whatsapp" />
}
