import {
  BatteryCharging,
  Bluetooth,
  Ear,
  EyeOff,
  HandHeart,
  Home,
  MessagesSquare,
  Ruler,
  Sparkles,
  Users,
  Wallet,
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
import { ROUTES, WHATSAPP_ROUTES } from "../constants/paths"
import { PAGE_SEO } from "../constants/seo"
import { usePageMeta } from "../hooks/usePageMeta"
import { container } from "../vita-tw"

const FATORES = [
  {
    Icon: Ear,
    title: "1. Necessidade auditiva",
    description:
      "O aparelho precisa ser compatível com as características auditivas de cada pessoa.",
  },
  {
    Icon: MessagesSquare,
    title: "2. Compreensão da fala",
    description:
      "Avaliar principalmente as situações em que existe dificuldade para acompanhar conversas.",
  },
  {
    Icon: Home,
    title: "3. Ambientes frequentados",
    description:
      "Casa, reuniões, restaurantes, igreja, eventos, trabalho e locais movimentados podem exigir diferentes níveis de tecnologia.",
  },
  {
    Icon: HandHeart,
    title: "4. Conforto",
    description:
      "O aparelho será utilizado por muitas horas e precisa ser adequado à rotina do usuário.",
  },
  {
    Icon: EyeOff,
    title: "5. Discrição",
    description: "Algumas pessoas preferem aparelhos menores ou menos aparentes.",
  },
  {
    Icon: Sparkles,
    title: "6. Tecnologia",
    description:
      "Recursos como recarga, Bluetooth, aplicativos e processamento de som podem ser importantes dependendo da rotina.",
  },
  {
    Icon: Wallet,
    title: "7. Investimento",
    description:
      "Existem diferentes faixas de tecnologia, e a escolha deve buscar equilíbrio entre necessidades e orçamento.",
  },
]

const TIPOS = [
  {
    Icon: Ruler,
    title: "Retroauricular",
    description:
      "Modelo utilizado atrás da orelha, disponível em diferentes tamanhos e tecnologias.",
  },
  {
    Icon: Sparkles,
    title: "Receptor no canal",
    description: "Pode combinar conforto, tecnologia e discrição.",
  },
  {
    Icon: Ear,
    title: "Intra-auricular",
    description:
      "Aparelho personalizado para ser utilizado dentro da orelha, conforme indicação.",
  },
  {
    Icon: EyeOff,
    title: "Intracanal",
    description:
      "Opção posicionada no canal auditivo que pode proporcionar maior discrição em determinados casos.",
  },
]

const RECURSOS = [
  {
    Icon: MessagesSquare,
    title: "Foco na fala e redução de ruído",
    description:
      "Ajudam principalmente em ambientes com várias pessoas conversando ao mesmo tempo.",
  },
  {
    Icon: Home,
    title: "Adaptação automática a ambientes",
    description:
      "O aparelho ajusta o funcionamento conforme as características do local, em modelos compatíveis.",
  },
  {
    Icon: Bluetooth,
    title: "Conectividade Bluetooth",
    description:
      "Conexão com dispositivos compatíveis para chamadas, músicas e outros áudios.",
  },
  {
    Icon: BatteryCharging,
    title: "Bateria recarregável",
    description: "Evita a troca frequente de pilhas pequenas na rotina.",
  },
  {
    Icon: Users,
    title: "Programas auditivos",
    description:
      "Configurações diferentes para situações diferentes, conforme o modelo escolhido.",
  },
  {
    Icon: HandHeart,
    title: "Personalização",
    description:
      "Ajuste fino da programação a partir da avaliação auditiva de cada paciente.",
  },
]

const DIFERENCIAIS = [
  {
    title: "Fonoaudiólogas especializadas em aparelhos auditivos",
    description:
      "A comparação entre modelos é feita por quem entende de audição e acompanha a adaptação.",
  },
  {
    title: "Atendimento individualizado",
    description:
      "A conversa começa pela sua rotina e pelas suas dificuldades — não pelo catálogo.",
  },
  {
    title: "Orientação para comparar modelos",
    description:
      "Você entende o que muda entre formatos, tecnologias e recursos antes de decidir.",
  },
  {
    title: "Diferentes tecnologias disponíveis",
    description:
      "Trabalhamos com marcas reconhecidas, o que permite comparar alternativas reais.",
  },
  {
    title: "Acompanhamento na adaptação",
    description:
      "A escolha não termina na compra: os ajustes seguintes fazem parte do processo.",
  },
  {
    title: "Clínica em Indaiatuba",
    description:
      "Atendimento presencial em Indaiatuba/SP, com fácil acesso para quem mora na região.",
  },
]

const COMPARATIVO_COLUNAS = ["Existem modelos com essa opção?"]

const COMPARATIVO_LINHAS = [
  { label: "Discrição", values: ["Sim"] },
  { label: "Recarregável", values: ["Sim"] },
  { label: "Bluetooth", values: ["Em modelos compatíveis"] },
  { label: "Diferentes tamanhos", values: ["Sim"] },
  { label: "Uso dentro do ouvido", values: ["Dependendo da indicação"] },
  { label: "Ajustes personalizados", values: ["Sim"] },
]

const FAQ_ITEMS = [
  {
    question: "Qual é o melhor aparelho auditivo?",
    answer:
      "Não existe um único melhor aparelho auditivo. A indicação depende do grau e das características da perda auditiva, da rotina, do conforto, da facilidade de manuseio e das preferências de cada pessoa.",
  },
  {
    question: "Qual é a melhor marca de aparelho auditivo?",
    answer:
      "Existem diferentes fabricantes e níveis de tecnologia, e cada um tem pontos fortes em situações distintas. A escolha não deve considerar somente a marca: modelo, configuração e acompanhamento pesam tanto quanto.",
  },
  {
    question: "Como saber qual aparelho auditivo comprar?",
    answer:
      "Parta da avaliação auditiva e das situações em que você tem mais dificuldade. A partir daí, considere conforto, formato, recursos realmente necessários e investimento — com orientação de uma fonoaudióloga especializada.",
  },
  {
    question: "Qual aparelho auditivo é melhor: interno ou externo?",
    answer:
      "Cada formato tem características e indicações diferentes. Os modelos internos costumam ser mais discretos; os externos podem acomodar mais recursos e costumam ser mais simples de manusear. A escolha depende da avaliação.",
  },
  {
    question: "Qual é o melhor aparelho auditivo para idoso?",
    answer:
      "Depende das necessidades auditivas, da facilidade de manuseio, da rotina e do conforto. Idade, sozinha, não determina o modelo ideal. Tratamos esse tema em detalhe na página sobre aparelho auditivo para idosos.",
  },
  {
    question: "Aparelho auditivo recarregável é melhor?",
    answer:
      "Pode oferecer mais praticidade para algumas pessoas, mas não é automaticamente melhor para todos. Reunimos as diferenças na página sobre aparelho auditivo recarregável e Bluetooth.",
  },
  {
    question: "Qual é o aparelho auditivo mais discreto?",
    answer:
      "Existem diferentes modelos compactos, incluindo intracanais e retroauriculares bastante pequenos. Detalhamos os formatos na página de aparelhos auditivos discretos.",
  },
  {
    question: "Quanto custa um bom aparelho auditivo?",
    answer:
      "O valor varia conforme a tecnologia, o modelo e os recursos. Explicamos os fatores que influenciam o preço na página de preços de aparelho auditivo.",
  },
  {
    question: "Um aparelho mais caro é sempre melhor?",
    answer:
      "Não necessariamente. Uma tecnologia superior só faz sentido se os recursos trouxerem benefício real para aquela pessoa e para a rotina dela.",
  },
  {
    question: "Onde encontrar bons aparelhos auditivos em Indaiatuba?",
    answer:
      "Na Vita Audio, na R. Tuiuti, 460 — Cidade Nova I, Indaiatuba/SP. Nossa equipe compara modelos e tecnologias junto com você e acompanha todo o processo de adaptação.",
  },
]

type MelhorAparelhoContentProps = {
  ctaMode: "form" | "whatsapp"
}

function MelhorAparelhoContent({ ctaMode }: MelhorAparelhoContentProps) {
  usePageMeta(PAGE_SEO.melhorAparelho)
  const wa = ctaMode === "whatsapp"
  const paths = wa ? WHATSAPP_ROUTES : ROUTES

  const PRIORIDADES = [
    {
      title: "Quero máxima discrição",
      description:
        "Existem modelos compactos e intracanais desenvolvidos para ficarem pouco perceptíveis.",
      href: paths.discreto,
      linkLabel: "Conheça os aparelhos auditivos discretos",
    },
    {
      title: "Quero mais praticidade",
      description:
        "Modelos recarregáveis evitam a troca frequente de pilhas e simplificam a rotina.",
      href: paths.recarregavel,
      linkLabel: "Conheça os aparelhos auditivos recarregáveis",
    },
    {
      title: "Quero conectividade",
      description:
        "Em modelos compatíveis, é possível conectar o aparelho ao celular para chamadas e áudio.",
      href: paths.recarregavel,
      linkLabel: "Veja os modelos com Bluetooth",
    },
    {
      title: "Quero um bom custo-benefício",
      description:
        "O equilíbrio está entre a tecnologia realmente necessária e o investimento disponível.",
      href: paths.preco,
      linkLabel: "Veja informações sobre preços de aparelhos auditivos",
    },
  ]

  const ESCOLHA_STEPS = [
    {
      title: "Entendemos suas necessidades",
      description: wa
        ? "Chame no WhatsApp e conte suas principais dificuldades e sua rotina."
        : "Preencha o formulário ou chame no WhatsApp e conte suas principais dificuldades e sua rotina.",
    },
    {
      title: "Avaliamos quais características fazem sentido",
      description:
        "Tecnologia, conforto, formato, conectividade e outras necessidades entram na conta.",
    },
    {
      title: "Conheça as possibilidades",
      description:
        "A equipe apresenta opções compatíveis com suas necessidades e preferências.",
    },
    {
      title: "Conte com acompanhamento",
      description: "A adaptação ao aparelho também faz parte do processo.",
    },
  ]

  return (
    <>
      <HeroPage
        title="Qual é o Melhor Aparelho Auditivo? Entenda Como Escolher"
        subtitle="Não existe um único aparelho auditivo que seja o melhor para todas as pessoas. A escolha ideal depende da sua audição, rotina, conforto, tecnologia desejada e preferências. Na Vita Audio, nossas fonoaudiólogas especializadas ajudam você a comparar as opções e encontrar a solução mais adequada para o seu dia a dia."
        primaryLabel={wa ? "Descobrir Qual Aparelho é Ideal para Mim" : "Descobrir Qual Aparelho é Ideal para Mim"}
        ctaMode={ctaMode}
      />
      <BlocoConteudo
        title="O melhor aparelho auditivo depende de quem vai utilizá-lo"
        paragraphs={[
          "Uma tecnologia excelente para uma pessoa pode não ser a mais adequada para outra. A escolha depende de vários fatores:",
        ]}
        bullets={[
          "Grau e características da perda auditiva",
          "Ambientes frequentados no dia a dia",
          "Dificuldade para entender conversas",
          "Rotina profissional e social",
          "Facilidade de manuseio",
          "Preferência por aparelho discreto",
          "Necessidade de conectividade",
          "Bateria ou recarga",
          "Orçamento disponível",
        ]}
        closingText="Por isso, escolher um aparelho auditivo apenas pelo preço, pelo tamanho ou pelo número de recursos pode não ser o melhor caminho."
        ctaLabel={wa ? "Quero Ajuda para Escolher pelo WhatsApp" : "Quero Ajuda para Escolher"}
        ctaMode={ctaMode}
      />
      <FeatureCardGrid
        title="7 fatores que ajudam a escolher o aparelho auditivo ideal"
        subtitle="Use esta lista como um roteiro na hora de comparar modelos."
        items={FATORES}
      />
      <FeatureCardGrid
        title="Conheça diferentes tipos de aparelhos auditivos"
        subtitle="O formato ideal depende das necessidades auditivas, da anatomia, da facilidade de manuseio e das preferências de cada pessoa."
        items={TIPOS}
      />
      <section className="bg-white py-[70px]">
        <div className={container}>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[26px] font-semibold leading-snug text-vita-blue md:text-[30px]">
              Qual característica é mais importante para você?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-vita-text-mid md:text-base">
              Escolha o ponto de partida que mais combina com o que você procura.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {PRIORIDADES.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-vita-blue/10 bg-vita-gray-bg p-5"
              >
                <h3 className="text-base font-semibold text-vita-blue">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-vita-text-mid">
                  {item.description}
                </p>
                <a
                  href={item.href}
                  className="mt-3 inline-block text-sm font-semibold text-vita-blue underline underline-offset-4"
                >
                  {item.linkLabel}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FeatureCardGrid
        title="Nem sempre mais recursos significam uma escolha melhor"
        subtitle="Aparelhos auditivos modernos possuem diferentes níveis de tecnologia. O mais importante é identificar quais recursos realmente fazem diferença na sua rotina."
        items={RECURSOS}
        closingText="Um aparelho com muitos recursos que você não vai usar não é, necessariamente, a melhor escolha."
      />
      <BlocoConteudo
        title="Existe um melhor aparelho auditivo para idosos?"
        paragraphs={[
          "A idade, isoladamente, não determina o modelo ideal. Para algumas pessoas, porém, alguns fatores podem ser especialmente importantes:",
        ]}
        bullets={[
          "Facilidade para colocar e retirar",
          "Botões e controles simples",
          "Aparelho recarregável",
          "Conforto no uso prolongado",
          "Clareza da fala",
          "Acompanhamento durante a adaptação",
        ]}
        closingText="A melhor solução deve considerar não apenas a audição, mas também a facilidade de uso e a rotina da pessoa."
        ctaLabel={wa ? "Falar com uma Fonoaudióloga pelo WhatsApp" : "Falar com uma Fonoaudióloga"}
        ctaMode={ctaMode}
        background="gray"
      />
      <BlocoConteudo
        title="Sua rotina também influencia a escolha"
        paragraphs={[
          "Quem frequenta restaurantes, reuniões, eventos, igrejas, festas, viagens, encontros familiares e outros ambientes com muitas conversas pode valorizar tecnologias específicas para ambientes complexos.",
          "Por outro lado, uma pessoa com rotina mais tranquila pode ter necessidades diferentes — e pagar por recursos que não vai usar não faz sentido.",
        ]}
        closingText="O aparelho deve acompanhar a sua vida — e não o contrário."
      />
      <Section10cCarrosselHistorias />
      <BlocoConteudo
        title="O aparelho auditivo mais caro é sempre o melhor?"
        paragraphs={[
          "Não necessariamente. Os valores podem variar conforme tecnologia, recursos, modelo, fabricante, conectividade e características do aparelho.",
          "Mas uma tecnologia superior só faz sentido se seus recursos trouxerem benefício real para aquela pessoa. O objetivo é encontrar a melhor relação entre necessidade, tecnologia e investimento.",
        ]}
        ctaLabel={wa ? "Consultar Modelos e Valores no WhatsApp" : "Consultar Modelos e Valores"}
        ctaMode={ctaMode}
        background="gray"
      />
      <TabelaComparativa
        title="Compare algumas características"
        subtitle="Uma visão rápida do que existe hoje no mercado de aparelhos auditivos."
        columns={COMPARATIVO_COLUNAS}
        rows={COMPARATIVO_LINHAS}
        note="A disponibilidade de cada característica depende do modelo escolhido e da indicação para o seu caso."
      />
      <DiferenciaisList
        title="Escolher bem é tão importante quanto escolher um bom aparelho"
        items={DIFERENCIAIS}
      />
      <PrimaryPromoBlock
        title="Na Vita Audio, a escolha não começa pela marca nem pelo aparelho mais caro"
        description="Começa entendendo você: sua audição, os ambientes que frequenta, sua facilidade de manuseio e o que realmente faz diferença no seu dia a dia. Só depois falamos de modelos e tecnologias."
        buttonLabel={wa ? "Quero Orientação Especializada pelo WhatsApp" : "Quero Orientação Especializada"}
        ctaMode={ctaMode}
      />
      <Section09Conheca />
      <ComoFunciona
        title="Como encontrar o aparelho certo para você"
        subtitle="Quatro passos, com acompanhamento do começo ao fim."
        steps={ESCOLHA_STEPS}
      />
      <FaqAccordion
        title="Dúvidas frequentes sobre qual aparelho auditivo escolher"
        items={FAQ_ITEMS}
      />
      <Section10bGoogleReviews />
      <PaginasRelacionadas
        currentRoute="melhorAparelho"
        ctaMode={ctaMode}
        title="Veja também"
      />
      <OutrosServicos />
      <FinalCta
        title="O melhor aparelho auditivo é aquele que funciona para a sua vida"
        subtitle="Compare diferentes modelos, tecnologias e recursos com orientação de fonoaudiólogas especializadas e encontre uma solução adequada à sua audição, rotina e preferências. Atendimento em Indaiatuba/SP."
        primaryLabel={wa ? "Descobrir Qual Aparelho é Ideal para Mim" : "Descobrir Qual Aparelho é Ideal para Mim"}
        ctaMode={ctaMode}
      />
    </>
  )
}

export function MelhorAparelhoPage() {
  return <MelhorAparelhoContent ctaMode="form" />
}

export function MelhorAparelhoPageWA() {
  return <MelhorAparelhoContent ctaMode="whatsapp" />
}
