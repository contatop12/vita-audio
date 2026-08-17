import {
  AppWindow,
  Bluetooth,
  Brain,
  Filter,
  MessagesSquare,
  SlidersHorizontal,
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
import { TabelaComparativa } from "../components/shared/TabelaComparativa"
import { PAGE_SEO } from "../constants/seo"
import { usePageMeta } from "../hooks/usePageMeta"

const TECNOLOGIAS = [
  {
    Icon: Filter,
    title: "Redução de ruídos",
    description:
      "Recursos desenvolvidos para proporcionar maior conforto em ambientes com diferentes sons.",
  },
  {
    Icon: MessagesSquare,
    title: "Foco na fala",
    description:
      "Tecnologias que podem ajudar a melhorar a percepção da fala em diferentes situações.",
  },
  {
    Icon: SlidersHorizontal,
    title: "Ajustes personalizados",
    description:
      "O aparelho pode ser configurado de acordo com as necessidades auditivas de cada pessoa.",
  },
  {
    Icon: Bluetooth,
    title: "Bluetooth",
    description:
      "Em modelos compatíveis, possibilidade de integração com dispositivos eletrônicos.",
  },
  {
    Icon: AppWindow,
    title: "Aplicativos",
    description:
      "Algumas tecnologias permitem controle ou ajustes por aplicativos compatíveis.",
  },
  {
    Icon: Brain,
    title: "Inteligência no processamento do som",
    description:
      "Modelos modernos podem adaptar seu funcionamento conforme as características do ambiente.",
  },
]

const DIFERENCIAIS = [
  {
    title: "Fonoaudiólogas especializadas em aparelhos auditivos",
    description:
      "Quem orienta a escolha da tecnologia é quem acompanha a sua audição e a sua adaptação.",
  },
  {
    title: "Atendimento individualizado",
    description:
      "Entendemos primeiro a sua rotina e a sua necessidade auditiva — depois falamos de recursos.",
  },
  {
    title: "Orientação na escolha da tecnologia",
    description:
      "Nem todo recurso faz diferença para todo mundo. Ajudamos a separar o que é útil do que é supérfluo no seu caso.",
  },
  {
    title: "Diferentes modelos disponíveis",
    description:
      "Trabalhamos com marcas reconhecidas, o que permite comparar opções recarregáveis, com pilha e com conectividade.",
  },
  {
    title: "Acompanhamento durante a adaptação",
    description:
      "Os ajustes após a entrega do aparelho fazem parte do processo e são acompanhados pela equipe.",
  },
  {
    title: "Clínica em Indaiatuba",
    description:
      "Atendimento presencial em Indaiatuba/SP, com fácil acesso para quem mora na região.",
  },
]

const COMPARATIVO_COLUNAS = ["Aparelho recarregável", "Aparelho com pilha"]

const COMPARATIVO_LINHAS = [
  {
    label: "Rotina de energia",
    values: [
      "Colocar no carregador quando necessário",
      "Trocar a pilha periodicamente, conforme o uso",
    ],
  },
  {
    label: "Manuseio de peças pequenas",
    values: ["Menor necessidade de manusear pilhas", "Exige troca manual de pilhas pequenas"],
  },
  {
    label: "Praticidade no dia a dia",
    values: ["Rotina de carregamento simples e previsível", "Depende de ter pilhas de reserva disponíveis"],
  },
  {
    label: "Disponibilidade de formatos",
    values: [
      "Disponível em diferentes formatos, conforme o modelo",
      "Disponível em diferentes formatos, conforme o modelo",
    ],
  },
  {
    label: "Para quem costuma fazer sentido",
    values: [
      "Quem valoriza praticidade e tecnologias mais recentes",
      "Determinadas necessidades, modelos e rotinas específicas",
    ],
  },
]

const FAQ_ITEMS = [
  {
    question: "Como funciona um aparelho auditivo recarregável?",
    answer:
      "O aparelho é usado normalmente durante o dia e, quando necessário, colocado no carregador compatível. Depois do carregamento, volta a ser utilizado. Não há troca de pilhas na rotina diária.",
  },
  {
    question: "Quanto tempo dura a bateria de um aparelho auditivo recarregável?",
    answer:
      "A autonomia varia conforme o modelo, a tecnologia, a configuração do aparelho, o uso de streaming e outros fatores. Por isso evitamos informar um número universal — nossa equipe confirma a autonomia dos modelos disponíveis.",
  },
  {
    question: "Quanto tempo demora para carregar?",
    answer:
      "O tempo de carregamento depende do modelo e do carregador utilizado. Consulte nossa equipe para saber as características dos modelos disponíveis na Vita Audio.",
  },
  {
    question: "O aparelho auditivo recarregável precisa trocar bateria?",
    answer:
      "Na rotina diária, não: a bateria é recarregável e integrada ao aparelho na maioria dos modelos. Como qualquer bateria, ela tem vida útil, e a manutenção depende da tecnologia utilizada em cada aparelho.",
  },
  {
    question: "Aparelho auditivo recarregável é melhor?",
    answer:
      "Não necessariamente. A melhor opção depende da sua audição, da sua rotina e da sua facilidade de manuseio. Para muitas pessoas a recarga é mais prática; para outras, um modelo com pilha continua sendo adequado.",
  },
  {
    question: "Existe aparelho auditivo recarregável com Bluetooth?",
    answer:
      "Sim, existem modelos que combinam bateria recarregável e conectividade Bluetooth. A disponibilidade depende da linha e do formato escolhido.",
  },
  {
    question: "Como funciona o Bluetooth no aparelho auditivo?",
    answer:
      "Em modelos compatíveis, o aparelho se conecta a dispositivos como smartphones, permitindo receber áudio diretamente nos aparelhos. Os recursos disponíveis variam conforme o aparelho e o dispositivo utilizado.",
  },
  {
    question: "Aparelho auditivo Bluetooth conecta no celular?",
    answer:
      "Determinados modelos podem se conectar a smartphones compatíveis. A conexão e os recursos disponíveis dependem do modelo do aparelho e do aparelho celular utilizado.",
  },
  {
    question: "Funciona com iPhone e Android?",
    answer:
      "A compatibilidade depende do modelo do aparelho auditivo, do fabricante, do smartphone e do sistema utilizado. Não existe compatibilidade universal — o ideal é confirmar antes da escolha.",
  },
  {
    question: "Existe aparelho auditivo recarregável pequeno e discreto?",
    answer:
      "Existem opções compactas e modernas que combinam discrição e recarga, dependendo da indicação. Reunimos os formatos mais discretos na página de aparelhos auditivos discretos.",
  },
  {
    question: "Quanto custa um aparelho auditivo recarregável?",
    answer:
      "O valor varia conforme a tecnologia, o modelo, o fabricante, os recursos e as necessidades auditivas. Explicamos os fatores que influenciam o preço na página de preços de aparelho auditivo.",
  },
  {
    question: "Onde comprar aparelho auditivo recarregável em Indaiatuba?",
    answer:
      "Na Vita Audio, na R. Tuiuti, 460 — Cidade Nova I, Indaiatuba/SP. Fale com nossa equipe para conhecer os modelos recarregáveis disponíveis e agendar um atendimento.",
  },
]

const COMO_CARREGA_STEPS = [
  {
    title: "Utilize normalmente durante o dia",
    description:
      "O aparelho funciona normalmente durante sua rotina, de acordo com a autonomia disponível no modelo escolhido.",
  },
  {
    title: "Coloque no carregador",
    description: "Quando necessário, coloque os aparelhos no carregador compatível.",
  },
  {
    title: "Use novamente",
    description:
      "Depois do carregamento, os aparelhos estão prontos para serem utilizados novamente.",
  },
]

type RecarregavelContentProps = {
  ctaMode: "form" | "whatsapp"
}

function RecarregavelContent({ ctaMode }: RecarregavelContentProps) {
  usePageMeta(PAGE_SEO.recarregavel)
  const wa = ctaMode === "whatsapp"

  const ESCOLHA_STEPS = [
    {
      title: "Converse com nossa equipe",
      description: wa
        ? "Chame no WhatsApp e conte suas dificuldades, sua rotina e o que procura em um aparelho auditivo."
        : "Preencha o formulário ou chame no WhatsApp e conte suas dificuldades, sua rotina e o que procura em um aparelho auditivo.",
    },
    {
      title: "Conheça as opções",
      description:
        "Nossas fonoaudiólogas orientam sobre modelos, tecnologias e funcionalidades disponíveis.",
    },
    {
      title: "Escolha com segurança",
      description:
        "Encontre uma solução considerando audição, conforto, praticidade, tecnologia e preferências.",
    },
  ]

  return (
    <>
      <HeroPage
        title="Aparelhos Auditivos Recarregáveis: Mais Tecnologia e Praticidade no Dia a Dia"
        subtitle="Conheça modelos modernos que podem oferecer bateria recarregável, conectividade Bluetooth e recursos desenvolvidos para facilitar sua rotina. Na Vita Audio, nossas fonoaudiólogas especializadas ajudam você a encontrar a tecnologia mais adequada para suas necessidades."
        primaryLabel={wa ? "Conhecer os Modelos Recarregáveis no WhatsApp" : "Conhecer os Modelos Recarregáveis"}
        ctaMode={ctaMode}
      />
      <BlocoConteudo
        title="Mais praticidade para usar seu aparelho todos os dias"
        paragraphs={[
          "Os aparelhos auditivos recarregáveis foram desenvolvidos para tornar a rotina mais simples. Em vez de trocar pequenas pilhas regularmente, determinados modelos podem ser colocados no carregador para recuperar a bateria.",
        ]}
        bullets={[
          "Maior praticidade no dia a dia",
          "Menos manuseio de pilhas pequenas",
          "Rotina de carregamento simples",
          "Tecnologia moderna em diferentes formatos",
        ]}
        ctaLabel={wa ? "Conhecer as Opções Recarregáveis no WhatsApp" : "Conhecer as Opções Recarregáveis"}
        ctaMode={ctaMode}
      />
      <ComoFunciona
        title="Como funciona um aparelho auditivo recarregável?"
        subtitle="O tempo de bateria e de carregamento pode variar conforme o modelo, a tecnologia, a configuração e a forma de utilização."
        steps={COMO_CARREGA_STEPS}
      />
      <BlocoConteudo
        title="Aparelho auditivo com Bluetooth: conectividade que facilita sua rotina"
        paragraphs={[
          "Determinados modelos podem oferecer conexão com dispositivos compatíveis. Dependendo do aparelho e do smartphone utilizado, os recursos podem incluir:",
        ]}
        bullets={[
          "Conexão com o celular",
          "Transmissão de chamadas",
          "Áudio de vídeos e músicas",
          "Aplicativos para ajustes",
          "Controle de funções pelo smartphone",
        ]}
        closingText="Nem todos os aparelhos oferecem todas essas funcionalidades. A compatibilidade depende do modelo do aparelho e do dispositivo utilizado."
        ctaLabel={wa ? "Ver Modelos com Bluetooth no WhatsApp" : "Ver Modelos com Conectividade Bluetooth"}
        ctaMode={ctaMode}
        background="gray"
      />
      <TabelaComparativa
        title="Aparelho recarregável ou aparelho com pilha: qual escolher?"
        subtitle="Ambos podem ser boas soluções. A escolha depende principalmente das preferências e necessidades do usuário."
        columns={COMPARATIVO_COLUNAS}
        rows={COMPARATIVO_LINHAS}
        note="Não existe uma opção universalmente melhor. A escolha deve considerar sua audição, sua rotina, a facilidade de manuseio e suas preferências."
        ctaLabel={wa ? "Descobrir Qual Opção Combina Comigo" : "Descobrir Qual Opção Combina Comigo"}
        ctaMode={ctaMode}
      />
      <FeatureCardGrid
        title="Um aparelho auditivo moderno pode fazer muito mais"
        subtitle="A bateria é só uma parte. O que muda o dia a dia costuma estar no processamento do som."
        items={TECNOLOGIAS}
      />
      <BlocoConteudo
        title="Praticidade para diferentes rotinas"
        paragraphs={["Um aparelho recarregável pode ser interessante para quem:"]}
        bullets={[
          "Deseja evitar a troca frequente de pilhas pequenas",
          "Busca facilidade de uso no dia a dia",
          "Gosta de tecnologia e usa smartphone com frequência",
          "Deseja maior integração com dispositivos compatíveis",
          "Procura um aparelho auditivo moderno",
          "Valoriza uma rotina simples de manutenção",
        ]}
        closingText="A indicação depende das necessidades auditivas e das características de cada pessoa."
        ctaLabel={wa ? "Falar com uma Especialista pelo WhatsApp" : "Falar com uma Especialista"}
        ctaMode={ctaMode}
      />
      <Section10cCarrosselHistorias />
      <BlocoConteudo
        title="Tecnologia e discrição podem andar juntas"
        paragraphs={[
          "Hoje existem opções modernas que combinam discrição e praticidade: tamanho reduzido, design discreto, bateria recarregável, conectividade e tecnologias avançadas.",
          "Nem todos esses recursos estão disponíveis simultaneamente em todos os modelos. A melhor configuração dependerá da sua audição, anatomia, rotina e preferências.",
        ]}
        background="gray"
      />
      <DiferenciaisList
        title="Tecnologia faz diferença. A escolha certa faz ainda mais."
        items={DIFERENCIAIS}
      />
      <PrimaryPromoBlock
        title="Nosso objetivo não é indicar o aparelho com mais recursos"
        description="É encontrar uma solução adequada para a sua audição, as suas necessidades e a sua rotina. Comprar um aparelho moderno não significa, automaticamente, escolher o aparelho certo — por isso a orientação profissional faz diferença."
        buttonLabel={wa ? "Conversar com uma Fonoaudióloga pelo WhatsApp" : "Conversar com uma Fonoaudióloga Especializada"}
        ctaMode={ctaMode}
      />
      <Section09Conheca />
      <ComoFunciona
        title="Encontre a tecnologia certa para você"
        subtitle="Um caminho simples, sem compromisso, para entender o que faz sentido no seu caso."
        steps={ESCOLHA_STEPS}
      />
      <FaqAccordion
        title="Dúvidas frequentes sobre aparelho auditivo recarregável e Bluetooth"
        items={FAQ_ITEMS}
      />
      <Section10bGoogleReviews />
      <PaginasRelacionadas
        currentRoute="recarregavel"
        ctaMode={ctaMode}
        only={["aparelhoAuditivo", "preco", "discreto", "melhorAparelho", "idosos", "argosy"]}
        title="Veja também"
      />
      <OutrosServicos />
      <FinalCta
        title="Quer mais praticidade e tecnologia no seu aparelho auditivo?"
        subtitle="Conheça modelos recarregáveis, opções com conectividade e diferentes tecnologias disponíveis. A equipe da Vita Audio ajuda você a encontrar uma solução adequada para sua audição e rotina. Atendimento em Indaiatuba/SP."
        primaryLabel={wa ? "Conhecer os Modelos Recarregáveis no WhatsApp" : "Conhecer os Modelos Recarregáveis"}
        ctaMode={ctaMode}
      />
    </>
  )
}

export function RecarregavelPage() {
  return <RecarregavelContent ctaMode="form" />
}

export function RecarregavelPageWA() {
  return <RecarregavelContent ctaMode="whatsapp" />
}
