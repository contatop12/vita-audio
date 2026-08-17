import {
  AppWindow,
  BatteryCharging,
  Bluetooth,
  Brain,
  Ear,
  EyeOff,
  MapPin,
  Radio,
  SlidersHorizontal,
  Sparkles,
  Volume2,
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
    title: "Orientação para escolha do aparelho",
    description:
      "Comparação entre linhas, formatos e recursos antes de qualquer decisão de compra.",
  },
  {
    Icon: Ear,
    title: "Acompanhamento na adaptação",
    description: "Os ajustes após a entrega do aparelho fazem parte do processo.",
  },
]

const BENEFICIOS = [
  {
    Icon: Brain,
    title: "Adaptação automática aos ambientes",
    description:
      "A tecnologia Vista reconhece características do ambiente sonoro e ajusta o funcionamento automaticamente — menos necessidade de trocar programas manualmente ao sair de casa ou entrar em um restaurante.",
  },
  {
    Icon: Bluetooth,
    title: "Bluetooth",
    description:
      "Modelos compatíveis podem conectar-se diretamente a dispositivos Bluetooth para chamadas e áudio, ouvidos diretamente nos aparelhos.",
  },
  {
    Icon: BatteryCharging,
    title: "Aparelhos recarregáveis",
    description:
      "Existem opções com bateria de íons de lítio, o que evita a troca frequente de pilhas pequenas.",
  },
  {
    Icon: EyeOff,
    title: "Modelos discretos",
    description:
      "A Argosy possui soluções intra-aurais personalizadas e formatos compactos.",
  },
  {
    Icon: AppWindow,
    title: "Aplicativo Hearing Remote",
    description:
      "Permite controlar volume, programas e outras funções em modelos compatíveis, sem precisar manipular o aparelho o tempo todo.",
  },
  {
    Icon: Volume2,
    title: "Diferentes formatos",
    description:
      "RIC, BTE e opções intra-aurais atendem necessidades auditivas e preferências distintas.",
  },
]

const VISTA_V_MODELOS = [
  {
    Icon: BatteryCharging,
    title: "Vista V-R",
    description:
      "Segundo a Argosy, modelo RIC recarregável e compacto com conectividade direta. Formato discreto, recarga simples e conexão com dispositivos compatíveis.",
  },
  {
    Icon: Radio,
    title: "Vista V-312",
    description:
      "Segundo a fabricante, RIC compacto com bateria tradicional e conectividade direta. Pode fazer sentido para quem prefere pilha convencional sem abrir mão de conectividade.",
  },
  {
    Icon: Ear,
    title: "Vista V-PR",
    description:
      "Segundo a fabricante, BTE recarregável com conectividade direta — ou seja, modelo utilizado atrás da orelha, com bateria recarregável.",
  },
  {
    Icon: Volume2,
    title: "Vista V-UP",
    description:
      "Apresentado pela Argosy como BTE Ultra Power com bateria 675 e conectividade direta. Pode ser considerado em necessidades auditivas que demandem maior potência, sempre conforme avaliação e indicação profissional.",
  },
]

const VISTA_B_MODELOS = [
  {
    Icon: Bluetooth,
    title: "Vista B-312 Dir",
    description:
      "Descrito pela Argosy como modelo com conectividade direta, permitindo conexão com dispositivos compatíveis.",
  },
  {
    Icon: EyeOff,
    title: "Vista B-10 NW O",
    description:
      "Descrito como o menor modelo ITE da linha apresentada pela fabricante. ITE significa que o aparelho é confeccionado para ser utilizado dentro da orelha — opção interessante para quem valoriza discrição, conforme indicação.",
  },
]

const LINHAS = [
  {
    name: "Argosy Vista V",
    tagline: "A plataforma mais recente entre as duas linhas comercializadas pela Vita Audio",
    description:
      "Lançada no Brasil em 2024. Segundo a Argosy, o Vista V se ajusta automaticamente ao ambiente sonoro, buscando destacar os sons que a pessoa deseja ouvir e reduzir o impacto dos ruídos de fundo.",
    highlights: [
      "Quatro modelos apresentados com conectividade direta",
      "Opções recarregáveis (V-R e V-PR) e com pilha (V-312)",
      "Formatos RIC e BTE, incluindo versão Ultra Power",
      "Evolução destacada pela fabricante em ambientes com ruído forte e no carro",
    ],
  },
  {
    name: "Argosy Vista B",
    tagline: "Plataforma moderna com reconhecimento de ambientes e diferentes formatos",
    description:
      "Lançada em 2023, trouxe o SoundSuite OS, tecnologia de inteligência artificial voltada ao reconhecimento e à adaptação aos ambientes sonoros.",
    highlights: [
      "Conexão com até dois dispositivos Bluetooth simultaneamente, segundo a fabricante",
      "Recursos adicionais no aplicativo Hearing Remote",
      "Controle por toque em modelos compatíveis",
      "Opção intra-auricular Vista B-10 NW O",
    ],
  },
]

const COMPARATIVO_COLUNAS = ["Vista V", "Vista B"]

const COMPARATIVO_LINHAS = [
  { label: "Geração", values: ["2024", "2023"] },
  { label: "Ajuste automático ao ambiente", values: ["Sim", "Sim"] },
  {
    label: "Inteligência de reconhecimento ambiental",
    values: ["Sim", "SoundSuite OS"],
  },
  { label: "Bluetooth", values: ["Em modelos compatíveis", "Em modelos compatíveis"] },
  {
    label: "Dois dispositivos simultâneos",
    values: ["Conforme modelo/compatibilidade", "Recurso destacado na plataforma Vista B"],
  },
  {
    label: "Recarregável",
    values: ["Sim, em modelos específicos", "Conforme modelo disponível"],
  },
  { label: "Pilha convencional", values: ["Sim", "Sim"] },
  { label: "Opções RIC", values: ["Sim", "Conforme portfólio"] },
  { label: "Opções BTE", values: ["Sim", "Conforme portfólio"] },
  {
    label: "Opção intra-auricular",
    values: ["Consulte a disponibilidade na Vita Audio", "Vista B-10 NW O"],
  },
  {
    label: "Aplicativo",
    values: [
      "Hearing Remote em modelos compatíveis",
      "Hearing Remote em modelos compatíveis",
    ],
  },
]

const DIFERENCIAIS = [
  {
    title: "Fonoaudiólogas especializadas",
    description: "Orientação para encontrar o aparelho adequado ao seu caso.",
  },
  {
    title: "Comparação entre tecnologias",
    description:
      "Ajuda para compreender Vista V, Vista B, formatos e recursos antes de decidir.",
  },
  {
    title: "Adaptação individualizada",
    description: "A escolha não termina na compra: o aparelho é programado para você.",
  },
  {
    title: "Acompanhamento",
    description: "Ajustes e orientação durante todo o processo de adaptação.",
  },
  {
    title: "Atendimento presencial em Indaiatuba",
    description: "Facilidade para acompanhamento local, sem depender de compra a distância.",
  },
  {
    title: "Pacientes reais e avaliações públicas",
    description:
      "Fotos e depoimentos reais de quem já passou pelo processo na Vita Audio.",
  },
]

const FAQ_ITEMS = [
  {
    question: "Quanto custa um aparelho auditivo Argosy?",
    answer:
      "Depende da linha, do modelo, do formato e do nível de tecnologia escolhido. Aparelhos Vista V e Vista B podem apresentar valores diferentes — consulte nossa equipe para saber os valores dos modelos disponíveis.",
  },
  {
    question: "Qual é o preço do Argosy Vista V?",
    answer:
      "O valor varia conforme o modelo escolhido dentro da linha (V-R, V-312, V-PR ou V-UP) e a configuração indicada para o seu caso. Fale com nossa equipe para consultar os valores.",
  },
  {
    question: "Qual é o preço do Vista B?",
    answer:
      "Também varia conforme o modelo e a configuração. Nossa equipe informa os valores disponíveis na Vita Audio conforme a indicação para o seu caso.",
  },
  {
    question: "Argosy é uma boa marca?",
    answer:
      "A Argosy faz parte do grupo suíço Sonova e informa possuir mais de 300 parceiros de negócios no Brasil, com diferentes gerações de tecnologia, opções recarregáveis, conectividade e vários formatos. Ainda assim, uma boa marca não significa que qualquer modelo será adequado para qualquer pessoa.",
  },
  {
    question: "Qual a diferença entre Vista V e Vista B?",
    answer:
      "O Vista V é a plataforma mais recente entre as duas, lançada no Brasil em 2024, com quatro modelos apresentados com conectividade direta. O Vista B, de 2023, trouxe o SoundSuite OS e a conexão com até dois dispositivos Bluetooth simultaneamente, além da opção intra-auricular Vista B-10 NW O.",
  },
  {
    question: "Vista V é melhor que Vista B?",
    answer:
      "O Vista V é uma geração mais recente, mas isso não significa automaticamente que seja a escolha ideal para todas as pessoas. Formato, rotina, facilidade de uso, conectividade e investimento também pesam na decisão.",
  },
  {
    question: "Quais modelos existem no Vista V?",
    answer:
      "Conforme a disponibilidade: Vista V-R, Vista V-312, Vista V-PR e Vista V-UP. Consulte nossa equipe para confirmar quais estão disponíveis na Vita Audio.",
  },
  {
    question: "O Vista V é recarregável?",
    answer:
      "Existem modelos recarregáveis na linha, como o V-R e o V-PR. O V-312 utiliza pilha convencional.",
  },
  {
    question: "Vista B possui Bluetooth?",
    answer:
      "A plataforma possui modelos com conectividade, incluindo o Vista B-312 Dir, e a Argosy destaca a conexão com até dois dispositivos em modelos compatíveis.",
  },
  {
    question: "Argosy conecta com iPhone?",
    answer:
      "Existem modelos Bluetooth compatíveis, dependendo do produto e do smartphone utilizado. Não existe compatibilidade universal — vale confirmar antes da escolha.",
  },
  {
    question: "Argosy conecta com Android?",
    answer:
      "Da mesma forma: existem modelos compatíveis, e a conexão depende do aparelho auditivo e do smartphone utilizado.",
  },
  {
    question: "Existe aparelho Argosy discreto?",
    answer:
      "Sim, existem soluções compactas e intra-aurais personalizadas, dependendo da linha e da indicação para cada caso.",
  },
  {
    question: "Existe aparelho Argosy dentro do ouvido?",
    answer:
      "Sim. A fabricante possui modelos intra-aurais, incluindo o Vista B-10 NW O, descrito como o menor modelo ITE da linha.",
  },
  {
    question: "O que é Argosy R312?",
    answer:
      "O número 312 normalmente está associado ao tipo de bateria utilizada pelo modelo — é o caso do Vista V-312, por exemplo. Recomendamos confirmar com nossa equipe qual é o aparelho específico que você procura.",
  },
  {
    question: "Onde comprar aparelho auditivo Argosy em Indaiatuba?",
    answer:
      "Na Vita Audio, na R. Tuiuti, 460 — Cidade Nova I, Indaiatuba/SP. Fale com nossa equipe para conhecer os modelos disponíveis e agendar um atendimento.",
  },
]

const INTENCAO_OPTIONS = [
  {
    label: "Quero saber preços dos aparelhos Argosy",
    message:
      "Olá! Gostaria de saber os modelos e preços dos aparelhos auditivos Argosy disponíveis na Vita Audio e agendar um atendimento.",
  },
  {
    label: "Quero conhecer o Vista V",
    message:
      "Olá! Estou pesquisando o aparelho auditivo Argosy Vista V e gostaria de conhecer os modelos disponíveis e agendar um atendimento.",
  },
  {
    label: "Quero conhecer o Vista B",
    message: "Olá! Gostaria de saber mais sobre o Argosy Vista B e agendar um atendimento.",
  },
  {
    label: "Quero um aparelho recarregável",
    message:
      "Olá! Gostaria de conhecer os modelos Argosy recarregáveis disponíveis na Vita Audio e agendar um atendimento.",
  },
  {
    label: "Quero um aparelho discreto",
    message:
      "Olá! Gostaria de conhecer os modelos Argosy mais discretos disponíveis na Vita Audio e agendar um atendimento.",
  },
  {
    label: "Quero conectar ao celular",
    message:
      "Olá! Gostaria de conhecer os modelos Argosy com Bluetooth que conectam ao celular e agendar um atendimento.",
  },
  {
    label: "Não sei qual escolher",
    message:
      "Olá! Estou em dúvida entre o Argosy Vista V e o Vista B e gostaria de orientação para escolher.",
  },
]

type ArgosyContentProps = {
  ctaMode: "form" | "whatsapp"
}

function ArgosyContent({ ctaMode }: ArgosyContentProps) {
  usePageMeta(PAGE_SEO.argosy)
  const wa = ctaMode === "whatsapp"

  const ATENDIMENTO_STEPS = [
    {
      title: wa ? "Chame nossa equipe pelo WhatsApp" : "Fale com nossa equipe",
      description: wa
        ? "Conte o que você está procurando e quais dificuldades tem percebido."
        : "Preencha o formulário ou chame no WhatsApp e conte o que você está procurando.",
    },
    {
      title: "Agende seu atendimento",
      description: "Escolha um horário para conversar com nossas fonoaudiólogas.",
    },
    {
      title: "Conheça as opções",
      description:
        "Entenda as diferenças entre Vista V, Vista B, formatos e tecnologias disponíveis.",
    },
    {
      title: "Encontre a solução adequada",
      description:
        "Havendo indicação e interesse, escolha o aparelho e conte com acompanhamento durante a adaptação.",
    },
  ]

  return (
    <>
      <HeroPage
        title="Aparelhos Auditivos Argosy em Indaiatuba"
        subtitle="Conheça as linhas Vista V e Vista B e descubra, com orientação de fonoaudiólogas especializadas, qual tecnologia pode fazer mais sentido para sua audição, rotina e orçamento."
        primaryLabel={wa ? "Agendar Atendimento pelo WhatsApp" : "Agendar Atendimento"}
        secondaryLabel={wa ? undefined : "Consultar Modelos e Valores"}
        ctaMode={ctaMode}
      />
      <FeatureCardGrid
        title="Atendimento especializado em Indaiatuba"
        subtitle="Consulte modelos e valores disponíveis na Vita Audio."
        items={CONFIANCA}
      />
      <BlocoConteudo
        title="Argosy: tecnologia auditiva para diferentes necessidades"
        paragraphs={[
          "A Argosy faz parte do grupo suíço Sonova e informa possuir mais de 300 parceiros de negócios no Brasil.",
          "Mais importante do que o histórico da fabricante, porém, é entender qual aparelho é adequado para o seu caso — e é isso que a equipe da Vita Audio ajuda a definir.",
        ]}
      />
      <FeatureCardGrid
        title="Principais benefícios dos aparelhos Argosy"
        subtitle="Recursos traduzidos para o que muda de fato na rotina."
        items={BENEFICIOS}
      />
      <CardsLinhas
        title="Conheça as linhas Argosy disponíveis na Vita Audio"
        subtitle="Duas plataformas, gerações diferentes e formatos distintos."
        linhas={LINHAS}
        closingTitle="Não sabe qual escolher?"
        ctaLabel={wa ? "Falar com uma Fonoaudióloga pelo WhatsApp" : "Falar com uma Fonoaudióloga"}
        ctaMode={ctaMode}
      />
      <BlocoConteudo
        title="Argosy Vista V: a geração mais recente entre as linhas disponíveis"
        paragraphs={[
          "A própria Argosy informa que o Vista V se ajusta automaticamente ao ambiente sonoro, buscando destacar os sons que a pessoa deseja ouvir e reduzir o impacto dos ruídos de fundo.",
          "Na prática, o aparelho trabalha para acompanhar diferentes situações da rotina, como conversas em casa, restaurantes, reuniões, trânsito ou ambientes com mais ruído.",
        ]}
      />
      <FeatureCardGrid
        title="Modelos da linha Vista V"
        subtitle="Modelos divulgados pela fabricante. Consulte a disponibilidade na Vita Audio."
        items={VISTA_V_MODELOS}
        closingText="O Vista V foi introduzido em 2024 e a fabricante destaca evolução especialmente em situações de ruído forte e no carro."
      />
      <BlocoConteudo
        title="Argosy Vista B: tecnologia inteligente e facilidade para o dia a dia"
        paragraphs={[
          "O Vista B foi introduzido em 2023 e trouxe o SoundSuite OS, tecnologia de inteligência artificial voltada ao reconhecimento e à adaptação aos ambientes sonoros. O aparelho identifica características do ambiente e ajusta seu funcionamento automaticamente.",
          "A Argosy informa que a plataforma Vista B trouxe a possibilidade de conexão com até dois dispositivos Bluetooth simultaneamente, além de recursos adicionais no aplicativo Hearing Remote e controle por toque em modelos compatíveis. Na prática, você tem mais praticidade para alternar entre dispositivos compatíveis sem precisar refazer a conexão o tempo todo.",
        ]}
        background="gray"
      />
      <FeatureCardGrid
        title="Modelos da linha Vista B"
        subtitle="Modelos apresentados atualmente pelo site oficial da fabricante."
        items={VISTA_B_MODELOS}
      />
      <TabelaComparativa
        title="Vista V ou Vista B: qual escolher?"
        subtitle="Comparação baseada nas informações divulgadas pela fabricante."
        columns={COMPARATIVO_COLUNAS}
        rows={COMPARATIVO_LINHAS}
      />
      <BlocoConteudo
        title="Então o Vista V é sempre melhor?"
        paragraphs={[
          "Não necessariamente. Embora seja a plataforma mais recente entre as duas, a escolha deve considerar vários fatores:",
        ]}
        bullets={[
          "Necessidade auditiva",
          "Formato do aparelho",
          "Rotina e facilidade de uso",
          "Conectividade desejada",
          "Preferência entre recarga e pilha",
          "Recursos realmente necessários e investimento",
        ]}
        ctaLabel={wa ? "Quero Descobrir Qual é Melhor para Mim" : "Quero Descobrir Qual é Melhor para Mim"}
        ctaMode={ctaMode}
        background="gray"
      />
      <PrimaryPromoBlock
        title="Quanto custa um aparelho auditivo Argosy?"
        description="O preço pode variar conforme a linha, o modelo, o nível de tecnologia, o formato e os recursos disponíveis — por isso aparelhos Vista V e Vista B podem apresentar valores diferentes. Quer saber os valores dos aparelhos Argosy disponíveis na Vita Audio? Fale com nossa equipe e consulte modelos e preços."
        buttonLabel={wa ? "Consultar Preços Argosy no WhatsApp" : "Consultar Preços Argosy"}
        ctaMode={ctaMode}
      />
      <SeletorIntencao
        title="O que você procura?"
        subtitle="Escolha uma opção e continue a conversa já com o assunto certo."
        options={INTENCAO_OPTIONS}
        ctaMode={ctaMode}
      />
      <BlocoConteudo
        title="Existem aparelhos auditivos Argosy recarregáveis?"
        paragraphs={[
          "Sim. A Argosy oferece opções recarregáveis com baterias de íons de lítio, e o Vista V possui modelos recarregáveis como o V-R e o V-PR.",
          "Na prática: mais praticidade, menos troca de pilhas e uma rotina simples de carregamento. A duração da bateria varia conforme o modelo, a configuração e a forma de uso.",
        ]}
        ctaLabel={wa ? "Conhecer Modelos Recarregáveis" : "Conhecer Modelos Recarregáveis"}
        ctaMode={ctaMode}
      />
      <BlocoConteudo
        title="Aparelho auditivo Argosy conecta ao celular?"
        paragraphs={[
          "Sim, em modelos compatíveis. A fabricante informa que produtos Vista podem conectar-se a dispositivos Bluetooth para áudio, chamadas e outras funcionalidades.",
          "Em modelos compatíveis, você pode ouvir chamadas, músicas, vídeos e outras mídias diretamente nos aparelhos, além de controlar funções pelo aplicativo. A compatibilidade depende do aparelho e do smartphone utilizados.",
        ]}
        ctaLabel={wa ? "Conhecer Modelos com Bluetooth" : "Conhecer Modelos com Bluetooth"}
        ctaMode={ctaMode}
        background="gray"
      />
      <BlocoConteudo
        title="Controle seu aparelho pelo celular com o Hearing Remote"
        paragraphs={[
          "O aplicativo Hearing Remote permite, em dispositivos compatíveis:",
        ]}
        bullets={[
          "Alterar o volume",
          "Mudar de programa",
          "Ativar e desativar o som",
          "Ajustar o equilíbrio entre mídia e ambiente",
          "Acessar recursos de atendimento à distância",
        ]}
        closingText="Na prática, mais controle sem precisar manipular diretamente o aparelho o tempo todo."
      />
      <BlocoConteudo
        title="Existem aparelhos Argosy pequenos e discretos?"
        paragraphs={[
          "A Argosy trabalha com soluções intra-aurais personalizadas e destaca a produção digital para melhorar conforto, retenção e estética.",
          "O tamanho, porém, não deve ser o único critério. A escolha também considera necessidade auditiva, conforto, facilidade para colocar e retirar, tipo de bateria, tecnologia e conectividade.",
        ]}
        background="gray"
      />
      <Section10cCarrosselHistorias />
      <BlocoConteudo
        title="Argosy é uma boa marca de aparelho auditivo?"
        paragraphs={[
          "A Argosy integra o grupo Sonova, possui diferentes gerações de tecnologia, opções recarregáveis, conectividade, diferentes formatos e mais de 300 parceiros no Brasil, segundo a fabricante.",
          "Mas uma boa marca não significa que qualquer modelo será adequado para qualquer pessoa. A escolha precisa considerar a audição e a rotina de quem vai usar o aparelho.",
        ]}
        ctaLabel={wa ? "Quero Orientação para Escolher" : "Quero Orientação para Escolher"}
        ctaMode={ctaMode}
      />
      <DiferenciaisList
        title="Seu aparelho Argosy com acompanhamento especializado em Indaiatuba"
        items={DIFERENCIAIS}
      />
      <Section10bGoogleReviews />
      <Section09Conheca />
      <ComoFunciona
        title="Como escolher seu aparelho Argosy na Vita Audio"
        subtitle="Quatro passos, do primeiro contato ao acompanhamento da adaptação."
        steps={ATENDIMENTO_STEPS}
      />
      <FaqAccordion
        title="Dúvidas frequentes sobre aparelhos auditivos Argosy"
        items={FAQ_ITEMS}
      />
      <PaginasRelacionadas
        currentRoute="argosy"
        ctaMode={ctaMode}
        title="Veja também"
        background="white"
      />
      <OutrosServicos />
      <FinalCta
        title="Quer descobrir qual aparelho Argosy é mais adequado para você?"
        subtitle="Conheça as linhas Vista V e Vista B, compare modelos, tecnologias e valores e receba orientação de fonoaudiólogas especializadas na Vita Audio. Atendimento em Indaiatuba/SP."
        primaryLabel={wa ? "Agendar Atendimento pelo WhatsApp" : "Agendar Atendimento"}
        secondaryLabel={wa ? undefined : "Consultar Modelos e Valores"}
        ctaMode={ctaMode}
      />
    </>
  )
}

export function ArgosyPage() {
  return <ArgosyContent ctaMode="form" />
}

export function ArgosyPageWA() {
  return <ArgosyContent ctaMode="whatsapp" />
}
