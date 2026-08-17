import {
  BatteryCharging,
  Bluetooth,
  Ear,
  EyeOff,
  Filter,
  MessagesSquare,
  Ruler,
  SlidersHorizontal,
  Sparkles,
  Volume2,
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

const FORMATOS = [
  {
    Icon: EyeOff,
    title: "Aparelhos intracanais",
    description:
      "Modelos posicionados no canal auditivo que podem oferecer bastante discrição, dependendo da indicação e da anatomia do ouvido.",
  },
  {
    Icon: Ear,
    title: "Aparelhos intra-auriculares",
    description:
      "Desenvolvidos para serem posicionados dentro do ouvido, com diferentes tamanhos e tecnologias.",
  },
  {
    Icon: Ruler,
    title: "Aparelhos retroauriculares discretos",
    description:
      "Modelos modernos posicionados atrás da orelha que podem ser extremamente pequenos e discretos.",
  },
  {
    Icon: Sparkles,
    title: "Modelos com receptor no canal",
    description:
      "Combinação de tecnologia, conforto e discrição, dependendo da indicação para cada caso.",
  },
]

const RECURSOS = [
  {
    Icon: Filter,
    title: "Redução de ruído",
    description:
      "Tecnologias desenvolvidas para proporcionar maior conforto em diferentes ambientes.",
  },
  {
    Icon: MessagesSquare,
    title: "Melhor compreensão da fala",
    description:
      "Recursos que auxiliam principalmente em situações com outras pessoas conversando ao mesmo tempo.",
  },
  {
    Icon: Bluetooth,
    title: "Bluetooth",
    description:
      "Em modelos compatíveis, possibilidade de conexão com smartphones e outros dispositivos.",
  },
  {
    Icon: BatteryCharging,
    title: "Recarregáveis",
    description:
      "Modelos que oferecem praticidade sem depender da troca frequente de pilhas.",
  },
  {
    Icon: SlidersHorizontal,
    title: "Ajustes personalizados",
    description:
      "Configuração realizada considerando as necessidades auditivas individuais de cada paciente.",
  },
  {
    Icon: Volume2,
    title: "Programas para diferentes ambientes",
    description:
      "Dependendo do modelo, o aparelho pode se comportar de formas diferentes em casa, na rua ou em locais movimentados.",
  },
]

const DIFERENCIAIS = [
  {
    title: "Fonoaudiólogas especializadas em aparelhos auditivos",
    description:
      "A indicação de um modelo discreto passa por avaliação auditiva e análise da anatomia do ouvido — não é uma escolha apenas estética.",
  },
  {
    title: "Orientação individualizada",
    description:
      "Você entende o que muda entre um formato e outro antes de decidir, com tempo para tirar dúvidas.",
  },
  {
    title: "Diferentes modelos e tecnologias",
    description:
      "Trabalhamos com marcas reconhecidas, o que permite comparar tamanhos, recursos e formas de uso.",
  },
  {
    title: "Acompanhamento durante a adaptação",
    description:
      "Modelos pequenos exigem atenção ao encaixe e ao conforto. Os ajustes fazem parte do processo.",
  },
  {
    title: "Atendimento humanizado",
    description:
      "Sem pressão comercial: o objetivo é encontrar o equilíbrio entre qualidade auditiva, conforto, tecnologia e discrição.",
  },
  {
    title: "Clínica em Indaiatuba",
    description:
      "Fácil acesso para moradores de Indaiatuba, Salto, Itupeva, Itu, Campinas, Sorocaba e região.",
  },
]

const FAQ_ITEMS = [
  {
    question: "Existe aparelho auditivo que não aparece?",
    answer:
      "Existem modelos extremamente discretos, incluindo opções posicionadas dentro do canal auditivo. Ainda assim, o quanto o aparelho fica visível depende do modelo escolhido, da anatomia do ouvido e das características de cada pessoa — por isso evitamos prometer que um aparelho será invisível.",
  },
  {
    question: "Qual é o aparelho auditivo mais discreto?",
    answer:
      "Os modelos intracanais costumam oferecer grande discrição por ficarem posicionados dentro do canal auditivo. Mas a indicação depende do grau da perda auditiva, da anatomia do ouvido e da facilidade de manuseio de cada pessoa.",
  },
  {
    question: "Existe aparelho auditivo dentro do ouvido?",
    answer:
      "Sim. Existem modelos intra-auriculares e intracanais, feitos para ficar dentro da orelha ou do canal auditivo. É necessária avaliação para determinar se esse formato é adequado ao seu caso.",
  },
  {
    question: "Aparelho auditivo pequeno funciona bem?",
    answer:
      "O tamanho, sozinho, não determina a qualidade nem a adequação do aparelho. Modelos diferentes têm tecnologias e indicações diferentes. Um aparelho menor pode ser ideal para uma pessoa e insuficiente para outra.",
  },
  {
    question: "Aparelho auditivo atrás da orelha aparece muito?",
    answer:
      "Não necessariamente. Hoje existem modelos retroauriculares bastante compactos, que podem ficar pouco perceptíveis dependendo do cabelo, do formato da orelha e do modelo escolhido.",
  },
  {
    question: "Existe aparelho auditivo discreto e recarregável?",
    answer:
      "Sim, existem modelos que combinam formato compacto e bateria recarregável. A disponibilidade varia conforme a linha e o formato — consulte nossa equipe para saber quais opções estão disponíveis.",
  },
  {
    question: "Existe aparelho auditivo discreto com Bluetooth?",
    answer:
      "Existem modelos compactos com conectividade Bluetooth. Os recursos disponíveis dependem do aparelho e do dispositivo utilizado, por isso vale confirmar a compatibilidade antes da escolha.",
  },
  {
    question: "Quanto custa um aparelho auditivo discreto?",
    answer:
      "O preço depende do modelo, do nível de tecnologia, dos recursos e das necessidades auditivas de cada pessoa. Reunimos essa explicação na página de preços de aparelho auditivo, e nossa equipe informa os valores conforme a indicação para o seu caso.",
  },
  {
    question: "Como saber qual modelo é melhor para mim?",
    answer:
      "A escolha considera necessidade auditiva, anatomia do ouvido, conforto, facilidade de manuseio, rotina e preferências. Uma fonoaudióloga especializada orienta essa comparação e explica o que muda entre os formatos.",
  },
  {
    question: "Onde encontrar aparelhos auditivos discretos em Indaiatuba?",
    answer:
      "Na Vita Audio, na R. Tuiuti, 460 — Cidade Nova I, Indaiatuba/SP. Atendemos pacientes de Indaiatuba e de toda a região com fonoaudiólogas especializadas em aparelhos auditivos.",
  },
]

const COMPARATIVO_COLUNAS = ["Intracanal", "Intra-auricular", "Retroauricular discreto"]

const COMPARATIVO_LINHAS = [
  {
    label: "Discrição",
    values: ["Muito alta, dependendo da indicação", "Alta", "Alta, dependendo do modelo e do cabelo"],
  },
  {
    label: "Facilidade de manuseio",
    values: [
      "Exige mais destreza por ser menor",
      "Intermediária",
      "Costuma ser mais simples de colocar e retirar",
    ],
  },
  {
    label: "Recursos disponíveis",
    values: [
      "Variam conforme o espaço interno do modelo",
      "Variam conforme o modelo",
      "Costuma acomodar mais recursos",
    ],
  },
  {
    label: "Indicação",
    values: [
      "Depende da anatomia e do grau da perda",
      "Depende da anatomia e do grau da perda",
      "Ampla, conforme avaliação",
    ],
  },
]

type DiscretoContentProps = {
  ctaMode: "form" | "whatsapp"
}

function DiscretoContent({ ctaMode }: DiscretoContentProps) {
  usePageMeta(PAGE_SEO.discreto)
  const wa = ctaMode === "whatsapp"

  const COMO_FUNCIONA_STEPS = [
    {
      title: "Converse com nossa equipe",
      description: wa
        ? "Chame no WhatsApp e conte suas necessidades, dificuldades e preferências."
        : "Preencha o formulário ou chame no WhatsApp e conte suas necessidades, dificuldades e preferências.",
    },
    {
      title: "Conheça as possibilidades",
      description:
        "Nossas fonoaudiólogas especializadas apresentam os modelos e tecnologias que podem fazer sentido para o seu caso.",
    },
    {
      title: "Escolha com segurança",
      description:
        "Considere audição, conforto, discrição, tecnologia e rotina para encontrar a solução mais adequada.",
    },
  ]

  return (
    <>
      <HeroPage
        title="Aparelhos Auditivos Discretos: Tecnologia para Ouvir Melhor com Naturalidade"
        subtitle="Hoje existem aparelhos auditivos pequenos, modernos e discretos, desenvolvidos para oferecer conforto e qualidade sonora no dia a dia. Na Vita Audio, nossas fonoaudiólogas especializadas ajudam você a encontrar o modelo mais adequado para sua audição, sua rotina e suas preferências."
        primaryLabel={wa ? "Conhecer os Modelos Discretos no WhatsApp" : "Conhecer os Modelos Discretos"}
        ctaMode={ctaMode}
      />
      <BlocoConteudo
        title="Aparelho auditivo não precisa ser grande ou chamar atenção"
        paragraphs={[
          "Muitas pessoas adiam o uso do aparelho auditivo por imaginarem equipamentos grandes e muito aparentes. Hoje existem soluções muito mais compactas e discretas, incluindo modelos posicionados atrás ou dentro do ouvido.",
          "A escolha depende não apenas da estética, mas também das necessidades auditivas, da anatomia do ouvido, da facilidade de manuseio e da rotina de cada pessoa.",
        ]}
        ctaLabel={wa ? "Quero Conhecer Minhas Opções pelo WhatsApp" : "Quero Conhecer Minhas Opções"}
        ctaMode={ctaMode}
      />
      <Section10cCarrosselHistorias />
      <FeatureCardGrid
        title="Conheça alguns tipos de aparelhos auditivos"
        subtitle="Formatos diferentes atendem necessidades diferentes. Nenhum deles é melhor que o outro de forma universal."
        items={FORMATOS}
      />
      <TabelaComparativa
        title="Comparando os formatos mais discretos"
        subtitle="Uma visão geral para entender o que muda de um formato para o outro."
        columns={COMPARATIVO_COLUNAS}
        rows={COMPARATIVO_LINHAS}
        note="Nenhum formato é universalmente melhor. A indicação depende da avaliação auditiva e das características de cada pessoa."
        ctaLabel={wa ? "Descobrir Qual Modelo é Indicado para Mim" : "Descobrir Qual Modelo é Indicado para Mim"}
        ctaMode={ctaMode}
      />
      <BlocoConteudo
        title="Qual é o menor aparelho auditivo?"
        paragraphs={[
          "Existem aparelhos auditivos extremamente compactos e modelos que ficam posicionados parcial ou quase totalmente dentro do canal auditivo. Porém, o menor aparelho nem sempre será a melhor escolha para todas as pessoas.",
        ]}
        bullets={[
          "Grau e características da perda auditiva",
          "Anatomia do ouvido",
          "Facilidade para colocar e retirar o aparelho",
          "Necessidade de bateria ou recarga",
          "Recursos desejados e conectividade",
          "Rotina, conforto e preferência estética",
        ]}
        closingText="Por isso, a escolha deve equilibrar discrição, conforto e desempenho auditivo."
        ctaMode={ctaMode}
        background="gray"
      />
      <FeatureCardGrid
        title="É possível ter discrição sem abrir mão de tecnologia"
        subtitle="Aparelhos modernos e compactos podem oferecer recursos que fazem diferença na rotina."
        items={RECURSOS}
      />
      <BlocoConteudo
        title="Aparelho dentro do ouvido ou atrás da orelha: qual escolher?"
        paragraphs={[
          "Não existe uma resposta única. Os aparelhos dentro do ouvido podem proporcionar grande discrição para determinados pacientes.",
          "Ao mesmo tempo, alguns modelos modernos posicionados atrás da orelha também são extremamente pequenos e podem ficar praticamente imperceptíveis, dependendo do cabelo, do formato da orelha e do modelo escolhido.",
        ]}
        bullets={[
          "Necessidade auditiva",
          "Conforto no uso prolongado",
          "Tamanho e facilidade de manuseio",
          "Autonomia da bateria",
          "Recursos tecnológicos desejados",
          "Estética e rotina",
        ]}
        ctaLabel={wa ? "Comparar as Opções com uma Especialista" : "Comparar as Opções com uma Especialista"}
        ctaMode={ctaMode}
      />
      <DiferenciaisList
        title="A escolha do aparelho certo começa com uma orientação especializada"
        items={DIFERENCIAIS}
      />
      <PrimaryPromoBlock
        title="Tecnologia para fazer parte da sua vida — não para chamar atenção"
        description="Nosso objetivo é encontrar o equilíbrio entre qualidade auditiva, conforto, tecnologia e discrição para cada pessoa. Converse com nossa equipe e veja quais modelos discretos podem ser indicados para o seu caso."
        buttonLabel={wa ? "Falar com uma Fonoaudióloga pelo WhatsApp" : "Falar com uma Fonoaudióloga Especializada"}
        ctaMode={ctaMode}
      />
      <Section09Conheca />
      <ComoFunciona
        title="Encontre um aparelho que combine com sua audição e com você"
        subtitle="Três passos simples, sem compromisso e sem pressão comercial."
        steps={COMO_FUNCIONA_STEPS}
      />
      <FaqAccordion
        title="Dúvidas frequentes sobre aparelho auditivo discreto"
        items={FAQ_ITEMS}
      />
      <Section10bGoogleReviews />
      <PaginasRelacionadas
        currentRoute="discreto"
        ctaMode={ctaMode}
        only={["aparelhoAuditivo", "preco", "recarregavel", "melhorAparelho", "idosos", "starkey"]}
        title="Veja também"
      />
      <OutrosServicos />
      <FinalCta
        title="Quer ouvir melhor sem abrir mão da discrição?"
        subtitle="Conheça diferentes modelos e tecnologias de aparelhos auditivos e descubra qual opção pode se adaptar melhor à sua audição, rotina e preferências. Atendimento em Indaiatuba/SP."
        primaryLabel={wa ? "Conhecer os Modelos Discretos no WhatsApp" : "Conhecer os Modelos Discretos"}
        ctaMode={ctaMode}
      />
    </>
  )
}

export function DiscretoPage() {
  return <DiscretoContent ctaMode="form" />
}

export function DiscretoPageWA() {
  return <DiscretoContent ctaMode="whatsapp" />
}
