import { Bluetooth, Eye, Phone, Radio, Shield, Tv, Users, Volume2 } from "lucide-react"
import { Section10bGoogleReviews, Section10cCarrosselHistorias } from "../components"
import { BlocoFamiliares } from "../components/shared/BlocoFamiliares"
import { ComoFunciona } from "../components/shared/ComoFunciona"
import { DiferenciaisList } from "../components/shared/DiferenciaisList"
import { FaqAccordion } from "../components/shared/FaqAccordion"
import { FeatureCardGrid } from "../components/shared/FeatureCardGrid"
import { FinalCta } from "../components/shared/FinalCta"
import { HeroPage } from "../components/shared/HeroPage"
import { OutrosServicos } from "../components/shared/OutrosServicos"
import { PrimaryPromoBlock } from "../components/shared/PrimaryPromoBlock"
import { PAGE_SEO } from "../constants/seo"
import { usePageMeta } from "../hooks/usePageMeta"
import { container } from "../vita-tw"

const SINAIS = [
  {
    Icon: Users,
    title: "Dificuldade em entender conversas",
    description:
      "Você ouve as pessoas falando, mas não consegue entender claramente o que dizem, especialmente em ambientes com ruído ao fundo.",
  },
  {
    Icon: Tv,
    title: "Volume da TV sempre alto",
    description: "Familiares reclamam que o volume está alto demais. Para você, parece normal.",
  },
  {
    Icon: Volume2,
    title: "Pede para repetir com frequência",
    description:
      "Constantemente pede para as pessoas repetirem o que disseram, especialmente ao telefone ou em grupos.",
  },
  {
    Icon: Radio,
    title: "Dificuldade em ambientes cheios",
    description:
      "Restaurantes, festas ou reuniões se tornam um desafio. Acompanhar as conversas exige muito esforço.",
  },
  {
    Icon: Phone,
    title: "Dificuldade ao telefone",
    description:
      "Entender o que dizem pelo celular ou telefone fixo ficou difícil, mesmo com o volume no máximo.",
  },
  {
    Icon: Shield,
    title: "Cansaço ao ouvir",
    description:
      "No final do dia, você se sente esgotado. Ouvir exige tanto esforço que cansa mais do que deveria.",
  },
]

const COMO_FUNCIONA_STEPS = [
  {
    title: "Agendamento",
    description: "Agende pelo WhatsApp ou pelo formulário do site. Rápido e sem burocracia.",
  },
  {
    title: "Avaliação auditiva completa",
    description:
      "Nosso fonoaudiólogo realiza a audiometria tonal, vocal e imitanciometria para mapear com precisão o grau e o tipo da perda auditiva.",
  },
  {
    title: "Resultado explicado na hora",
    description:
      "O fonoaudiólogo apresenta o audiograma e explica de forma clara o que ele significa para a audição do paciente, sem termos técnicos desnecessários.",
  },
  {
    title: "Orientação e plano de tratamento",
    description:
      "Com base no diagnóstico, são apresentadas as opções de tratamento mais adequadas para o perfil auditivo de cada paciente.",
  },
  {
    title: "Adaptação do aparelho auditivo",
    description:
      "Quando indicado, a adaptação do aparelho auditivo é realizada na própria clínica. O paciente sai com o aparelho ajustado e orientado sobre como usá-lo no dia a dia.",
  },
]

const APARELHO_CARDS = [
  {
    Icon: Eye,
    title: "Discretos e modernos",
    description:
      "Os modelos atuais são pequenos, leves e praticamente invisíveis. Nada a ver com os aparelhos de décadas atrás.",
  },
  {
    Icon: Volume2,
    title: "Ajustados para o seu perfil",
    description:
      "Cada aparelho é programado de acordo com o audiograma do paciente, garantindo amplificação precisa e confortável.",
  },
  {
    Icon: Shield,
    title: "Recursos para zumbido",
    description:
      "Muitos modelos têm tecnologia específica para reduzir a percepção do zumbido, tratando os dois problemas ao mesmo tempo.",
  },
  {
    Icon: Bluetooth,
    title: "Tecnologia conectada",
    description:
      "Modelos modernos se conectam ao celular, permitem ajustes pelo aplicativo e têm bateria de longa duração.",
  },
]

const GRAUS = [
  {
    label: "Leve",
    color: "border-t-yellow-400",
    description:
      "Dificuldade em ouvir sons baixos ou conversas em ambientes com ruído. Muitas vezes passa despercebida por anos.",
  },
  {
    label: "Moderada",
    color: "border-t-orange-500",
    description:
      "Dificuldade clara em conversas normais, mesmo em ambientes silenciosos. Necessidade frequente de pedir para repetir.",
  },
  {
    label: "Severa",
    color: "border-t-red-500",
    description:
      "Dificuldade em ouvir mesmo sons altos. Conversas só são possíveis com voz elevada ou muito próxima.",
  },
  {
    label: "Profunda",
    color: "border-t-purple-500",
    description:
      "Perda significativa da capacidade auditiva. Sons do ambiente deixam de ser percebidos na maioria das situações.",
  },
]

const DIFERENCIAIS = [
  {
    title: "Diagnóstico e tratamento no mesmo lugar",
    description:
      "Você não precisa ir a um lugar para o exame e outro para o tratamento. Na Vita Audio, tudo acontece em uma só clínica.",
  },
  {
    title: "Fonoaudiólogos especializados em audiologia",
    description:
      "Profissionais com formação e experiência específica em saúde auditiva e adaptação de aparelhos auditivos.",
  },
  {
    title: "Aparelhos auditivos modernos e discretos",
    description:
      "Trabalhamos com tecnologia atual, com modelos para diferentes graus de perda e perfis de pacientes.",
  },
  {
    title: "Atendimento humanizado para todas as idades",
    description:
      "Atendemos adultos e idosos com toda a atenção e paciência que cada caso exige.",
  },
  {
    title: "Resultado explicado na hora",
    description:
      "Você sai da consulta entendendo o diagnóstico e os próximos passos, sem dúvidas no ar.",
  },
  {
    title: "Localização central em Indaiatuba",
    description:
      "Fácil acesso para moradores de Indaiatuba, Salto, Itupeva, Itu, Campinas, Sorocaba e região.",
  },
]

const FAQ_ITEMS = [
  {
    question: "Como sei se tenho perda auditiva?",
    answer:
      "Os sinais mais comuns são dificuldade em entender conversas, necessidade de aumentar o volume da TV, pedir para repetir com frequência e cansaço ao ouvir. A única forma de confirmar e medir o grau é por meio da audiometria.",
  },
  {
    question: "Preciso de encaminhamento médico para ser atendido?",
    answer:
      "Não. Você pode agendar diretamente na Vita Audio, sem precisar de pedido médico ou encaminhamento.",
  },
  {
    question: "A perda auditiva tem cura?",
    answer:
      "A maioria dos casos de perda auditiva não tem cura, mas tem tratamento eficaz. O aparelho auditivo moderno restaura a capacidade de ouvir com qualidade e melhora significativamente a qualidade de vida do paciente.",
  },
  {
    question: "Todo mundo com perda auditiva precisa de aparelho?",
    answer:
      "Depende do grau e do impacto na vida do paciente. A avaliação auditiva é o que define se o aparelho é indicado e qual modelo é mais adequado para cada caso.",
  },
  {
    question: "O aparelho auditivo é muito aparente?",
    answer:
      "Os modelos modernos são discretos e leves. Muitos são praticamente invisíveis no uso diário. Na Vita Audio, apresentamos as opções disponíveis para que o paciente escolha o que melhor se adapta ao seu perfil.",
  },
  {
    question: "Quanto tempo leva para se adaptar ao aparelho?",
    answer:
      "O período de adaptação varia de pessoa para pessoa, mas geralmente leva algumas semanas. O acompanhamento com o fonoaudiólogo é fundamental nessa fase para ajustar o aparelho conforme a evolução do paciente.",
  },
  {
    question: "A Vita Audio atende idosos?",
    answer:
      "Sim. Atendemos adultos e idosos com toda a atenção e paciência que cada caso exige. Também orientamos familiares que acompanham o paciente na consulta.",
  },
]

export function PerdaAuditivaPage() {
  usePageMeta(PAGE_SEO.perdaAuditiva)

  return (
    <>
      <HeroPage
        title="Perda Auditiva em Indaiatuba: Diagnóstico e Tratamento"
        subtitle="Está com dificuldade para ouvir? Pedindo para repetir com frequência ou aumentando o volume da TV sem perceber? Na Vita Audio, identificamos o grau da sua perda auditiva e oferecemos o tratamento adequado, tudo em um só lugar."
        primaryLabel="Agendar Minha Avaliação"
        secondaryLabel="Falar no WhatsApp"
      />
      <Section10cCarrosselHistorias />
      <section className="bg-vita-gray-bg py-[70px]">
        <div className={container}>
          <div className="flex flex-col items-center gap-10 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <img
                src="/images/vita-audio-teste-audicao.webp"
                alt="Atendimento auditivo Vita Audio"
                className="w-full rounded-2xl object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-base leading-relaxed text-vita-text-mid md:text-lg">
                Você já pediu para alguém repetir o que disse e ficou com vergonha. Já perdeu partes
                de uma conversa e fingiu que entendeu. Já deixou de participar de reuniões, jantares ou
                ligações porque ouvir ficou cansativo.
              </p>
              <p className="mt-4 text-base leading-relaxed text-vita-text-mid md:text-lg">
                A perda auditiva afeta muito mais do que a audição. Ela afeta a confiança, os
                relacionamentos e a qualidade de vida de quem convive com ela.
              </p>
              <p className="mt-4 text-base font-semibold text-vita-blue md:text-lg">
                Existe tratamento. E ele começa com uma avaliação.
              </p>
            </div>
          </div>
        </div>
      </section>
      <FeatureCardGrid
        title="Sinais de que sua audição precisa de atenção"
        subtitle="A perda auditiva raramente aparece de uma vez. Ela vai chegando aos poucos."
        items={SINAIS}
      />
      <BlocoFamiliares
        includeFilho={false}
        familiarDetail="está com dificuldade de ouvir e ainda não buscou ajuda"
        closingLine="Agende a avaliação. Nós cuidamos do resto."
      />
      <ComoFunciona
        title="Do diagnóstico ao tratamento, tudo na Vita Audio"
        subtitle="Você não precisa ir a vários lugares. Aqui, cuidamos de tudo."
        steps={COMO_FUNCIONA_STEPS}
      />
      <section className="bg-vita-gray-bg py-[70px]">
        <div className={container}>
          <div className="flex flex-col items-center gap-10 lg:flex-row">
            <div className="flex w-full items-center justify-center lg:w-1/2">
              <img
                src="/images/f2.png"
                alt="Aparelho auditivo moderno"
                className="w-full max-w-md rounded-2xl object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-[26px] font-semibold text-vita-blue md:text-[30px]">
                O aparelho auditivo de hoje não é o de antigamente
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-vita-text-mid md:text-base">
                <p>
                  Uma das maiores barreiras para o tratamento da perda auditiva é a imagem que as
                  pessoas têm do aparelho auditivo: grande, aparente e desconfortável.
                </p>
                <p>
                  Os aparelhos modernos são discretos, leves e tecnologicamente avançados. Muitos
                  modelos são quase invisíveis e se adaptam ao perfil auditivo de cada paciente com
                  precisão.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {APARELHO_CARDS.map(({ Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-vita-blue/10 bg-white p-5"
              >
                <Icon className="mb-3 size-6 text-vita-blue" aria-hidden />
                <h3 className="text-base font-semibold text-vita-blue">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-vita-text-mid">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-[70px]">
        <div className={container}>
          <h2 className="text-center text-[26px] font-semibold text-vita-blue md:text-[30px]">
            Qualquer grau de perda auditiva tem tratamento
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {GRAUS.map((grau) => (
              <article
                key={grau.label}
                className={`rounded-2xl border border-vita-blue/10 border-t-4 bg-vita-gray-bg p-5 ${grau.color}`}
              >
                <h3 className="text-base font-semibold text-vita-blue">{grau.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-vita-text-mid">{grau.description}</p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-vita-text-mid md:text-base">
            Independente do grau, a avaliação auditiva é o ponto de partida para o tratamento
            correto. Quanto antes identificada, melhores os resultados.
          </p>
        </div>
      </section>
      <DiferenciaisList
        title="Por que tratar sua perda auditiva na Vita Audio?"
        items={DIFERENCIAIS}
      />
      <PrimaryPromoBlock
        title="A perda auditiva não melhora sozinha."
        description="Sem tratamento, a tendência é que a perda auditiva progrida com o tempo. Além disso, estudos mostram que a privação auditiva prolongada pode afetar a memória e o raciocínio, especialmente em idosos. Quanto antes a avaliação for feita, maiores as chances de um resultado positivo com o tratamento."
        buttonLabel="Agendar Minha Avaliação"
      />
      <FaqAccordion title="Dúvidas frequentes sobre perda auditiva" items={FAQ_ITEMS} />
      <Section10bGoogleReviews />
      <OutrosServicos currentRoute="perdaAuditiva" />
      <FinalCta
        title="Ouvir melhor começa com uma avaliação"
        subtitle="Agende na Vita Audio e descubra qual é o melhor tratamento para o seu caso."
        primaryLabel="Agendar Minha Avaliação"
        secondaryLabel="Falar no WhatsApp"
      />
    </>
  )
}
