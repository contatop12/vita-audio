import {
  Bell,
  EarOff,
  Radio,
  Tv,
  Users,
  Volume2,
} from "lucide-react"
import { Section10bGoogleReviews } from "../components"
import { ComoFunciona } from "../components/shared/ComoFunciona"
import { DiferenciaisList } from "../components/shared/DiferenciaisList"
import { FaqAccordion } from "../components/shared/FaqAccordion"
import { FeatureCardGrid } from "../components/shared/FeatureCardGrid"
import { FinalCta } from "../components/shared/FinalCta"
import { HeroPage } from "../components/shared/HeroPage"
import { OutrosServicos } from "../components/shared/OutrosServicos"
import { PrimaryPromoBlock } from "../components/shared/PrimaryPromoBlock"
import { TabelaExames } from "../components/shared/TabelaExames"
import { ROUTES } from "../constants/paths"
import { PAGE_SEO } from "../constants/seo"
import { usePageMeta } from "../hooks/usePageMeta"
import { container } from "../vita-tw"

const SINTOMAS = [
  {
    Icon: Bell,
    title: "Zumbido no ouvido",
    description:
      "Apito, chiado, barulho ou zunido constante mesmo sem nenhum som externo. Pode ser sinal de perda auditiva.",
  },
  {
    Icon: Users,
    title: "Dificuldade em entender conversas",
    description:
      "Você ouve as pessoas falando, mas não consegue entender claramente o que dizem, especialmente em ambientes com ruído.",
  },
  {
    Icon: Tv,
    title: "Volume da TV sempre alto",
    description:
      "Familiares reclamam que você coloca o volume muito alto na TV, rádio ou celular.",
  },
  {
    Icon: Radio,
    title: "Dificuldade em ambientes cheios",
    description:
      "Restaurantes, shoppings ou reuniões se tornam um desafio para acompanhar as conversas.",
  },
  {
    Icon: EarOff,
    title: "Sensação de ouvido tampado",
    description:
      "Sensação de pressão ou entupimento no ouvido, mesmo sem estar resfriado.",
  },
  {
    Icon: Volume2,
    title: "Você pede para repetir com frequência",
    description:
      "Constantemente pede para as pessoas repetirem o que disseram ou aumenta o volume para entender melhor.",
  },
]

const COMO_FUNCIONA_STEPS = [
  {
    title: "Agendamento",
    description: "Agende pelo WhatsApp ou pelo formulário do site. Sem burocracia.",
  },
  {
    title: "Chegada e acolhimento",
    description:
      "Ao chegar na clínica, você passa por uma breve conversa com nosso fonoaudiólogo, que entende seus sintomas e histórico antes de iniciar os exames.",
  },
  {
    title: "Realização dos exames",
    description:
      "Audiometria Tonal, Audiometria Vocal e Imitanciometria são realizados em cabine acústica, com equipamentos calibrados. O processo é rápido e indolor.",
  },
  {
    title: "Análise e explicação dos resultados",
    description:
      "O fonoaudiólogo explica os resultados de forma clara, mostrando o audiograma e o que ele significa para a sua audição.",
  },
  {
    title: "Orientação e próximos passos",
    description:
      "Com base nos resultados, você recebe orientação sobre o que fazer, seja acompanhamento, tratamento ou encaminhamento se necessário.",
  },
]

const DIFERENCIAIS = [
  {
    title: "Fonoaudiólogos especializados em audiologia",
    description:
      "Exames realizados por profissionais com formação e experiência específica em saúde auditiva.",
  },
  {
    title: "Cabine acústica e equipamentos calibrados",
    description: "Ambiente e equipamentos adequados para resultados precisos e confiáveis.",
  },
  {
    title: "Atendimento humanizado",
    description:
      "Você não é um número. Nosso time explica cada etapa e os resultados de forma clara e acolhedora.",
  },
  {
    title: "Resultado explicado na hora",
    description:
      "Você sai da consulta entendendo o que o seu audiograma significa, sem precisar esperar ou interpretar sozinho.",
  },
  {
    title: "Localização central em Indaiatuba",
    description:
      "Fácil acesso para moradores de Indaiatuba, Salto, Itupeva, Itu e região.",
  },
]

const FAQ_ITEMS = [
  {
    question: "A audiometria dói?",
    answer:
      "Não. O exame é completamente indolor. Você usa fones de ouvido e responde a estímulos sonoros, sem nenhum desconforto físico.",
  },
  {
    question: "Preciso de encaminhamento médico para fazer audiometria?",
    answer:
      "Não. Você pode agendar diretamente na Vita Audio, sem precisar de pedido médico.",
  },
  {
    question: "Quanto tempo dura o exame?",
    answer:
      "A audiometria completa (tonal + vocal + imitanciometria) dura em média 40 a 50 minutos, incluindo a explicação dos resultados.",
  },
  {
    question: "Precisa de alguma preparação antes do exame?",
    answer:
      "Não é necessária nenhuma preparação especial. Recomendamos apenas evitar exposição a ruídos intensos nas 24 horas anteriores ao exame.",
  },
  {
    question: "A audiometria detecta zumbido?",
    answer:
      "A audiometria não mede o zumbido diretamente, mas identifica se há perda auditiva associada, o que é fundamental para entender a origem do zumbido e definir o tratamento.",
  },
  {
    question: "Com que frequência devo fazer audiometria?",
    answer:
      "Para quem já apresenta sintomas auditivos, a periodicidade é definida pelo fonoaudiólogo após a primeira avaliação. Para acompanhamento de perda auditiva já diagnosticada, geralmente é anual.",
  },
  {
    question: "A Vita Audio realiza audiometria ocupacional?",
    answer:
      "Não. Nosso foco é exclusivamente em saúde auditiva clínica. Atendemos pessoas com sintomas auditivos como dificuldade de ouvir e zumbido. Para audiometria ocupacional, procure uma clínica de medicina do trabalho.",
  },
]

export function AudiometriaPage() {
  usePageMeta(PAGE_SEO.audiometria)

  return (
    <>
      <HeroPage
        title="Audiometria em Indaiatuba"
        subtitle="Está com dificuldade para ouvir ou zumbido no ouvido? A audiometria é o exame que identifica o que está acontecendo com a sua audição, realizada por fonoaudiólogos especializados aqui na Vita Audio."
        primaryLabel="Agendar Meu Exame"
        secondaryLabel="Falar no WhatsApp"
      />
      <FeatureCardGrid
        title="Esses sintomas indicam que sua audição precisa de atenção"
        subtitle="Se você sente qualquer um desses sinais, a audiometria pode identificar a causa"
        closingText="Esses sintomas não devem ser ignorados. Quanto antes identificados, maiores as chances de tratamento eficaz. A audiometria é o primeiro passo para entender o que está acontecendo com a sua audição."
        items={SINTOMAS}
      />
      <section className="bg-white py-[70px]">
        <div className={container}>
          <h2 className="text-center text-[26px] font-semibold text-vita-blue md:text-[30px]">
            O que é a Audiometria?
          </h2>
          <div className="mx-auto mt-6 max-w-3xl space-y-4 text-sm leading-relaxed text-vita-text-mid md:text-base">
            <p>
              A audiometria é o principal exame para avaliar a capacidade auditiva. Ela mede com
              precisão o quanto você consegue ouvir em diferentes frequências e volumes,
              identificando se há perda auditiva, qual o seu grau e qual o tipo.
            </p>
            <p>Na Vita Audio, realizamos dois tipos de audiometria:</p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-vita-blue/10 bg-vita-gray-bg p-5">
              <h3 className="text-lg font-semibold text-vita-blue">Audiometria Tonal</h3>
              <p className="mt-3 text-sm leading-relaxed text-vita-text-mid">
                Avalia a sensibilidade auditiva em diferentes frequências (tons puros). Identifica o
                limiar auditivo, ou seja, o som mais fraco que você consegue ouvir em cada
                frequência. É a base do diagnóstico auditivo.
              </p>
            </article>
            <article className="rounded-2xl border border-vita-blue/10 bg-vita-gray-bg p-5">
              <h3 className="text-lg font-semibold text-vita-blue">Audiometria Vocal (Logoaudiometria)</h3>
              <p className="mt-3 text-sm leading-relaxed text-vita-text-mid">
                Avalia a capacidade de entender a fala. Complementa a audiometria tonal mostrando
                não só se você ouve, mas se você consegue compreender o que é dito.
              </p>
            </article>
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-vita-text-mid md:text-base">
            Os dois exames juntos formam uma avaliação auditiva completa, permitindo ao
            fonoaudiólogo entender com precisão o perfil auditivo de cada paciente.
          </p>
        </div>
      </section>
      <section className="bg-vita-gray-bg py-[70px]">
        <div className={container}>
          <h2 className="text-[26px] font-semibold text-vita-blue md:text-[30px]">
            Imitanciometria — o exame que avalia o ouvido médio
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-relaxed text-vita-text-mid md:text-base">
            <p>
              Além da audiometria, realizamos também a Imitanciometria (ou Impedanciometria), um
              exame complementar que avalia o funcionamento do ouvido médio, do tímpano e dos
              ossículos.
            </p>
            <p>É indicada especialmente para quem sente:</p>
          </div>
          <ul className="mt-4 max-w-3xl space-y-2 text-sm text-vita-text-mid">
            {[
              "Sensação de ouvido tampado ou cheio",
              "Zumbido persistente",
              "Dificuldade de ouvir após resfriados ou infecções",
              "Histórico de otites frequentes",
              "Dor ou pressão no ouvido",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-vita-orange">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-vita-text-mid md:text-base">
            A imitanciometria é rápida, indolor e não exige nenhuma preparação especial.
            Frequentemente é realizada na mesma consulta que a audiometria.
          </p>
        </div>
      </section>
      <ComoFunciona
        title="Como é o atendimento na Vita Audio"
        subtitle="Simples, acolhedor e realizado por fonoaudiólogos especializados"
        steps={COMO_FUNCIONA_STEPS}
      />
      <TabelaExames />
      <DiferenciaisList title="Por que fazer sua audiometria na Vita Audio?" items={DIFERENCIAIS} />
      <PrimaryPromoBlock
        title="Tem zumbido no ouvido? A audiometria é o primeiro passo."
        description="O zumbido (aquele apito, chiado ou barulho constante no ouvido) está associado à perda auditiva em aproximadamente 90% dos casos. A audiometria permite identificar se há perda auditiva relacionada ao seu zumbido e, a partir daí, traçar o melhor caminho de tratamento."
        buttonLabel="Agendar Avaliação para Zumbido"
        linkHref={ROUTES.zumbido}
        linkLabel="Saiba mais sobre tratamento para zumbido"
      />
      <FaqAccordion title="Dúvidas frequentes sobre audiometria" items={FAQ_ITEMS} />
      <Section10bGoogleReviews />
      <OutrosServicos currentRoute="audiometria" />
      <FinalCta
        title="Cuide da sua audição agora"
        subtitle="Agende sua audiometria na Vita Audio. Atendimento humanizado, resultado explicado na hora."
        primaryLabel="Agendar Meu Exame"
        secondaryLabel="Falar no WhatsApp"
      />
    </>
  )
}
