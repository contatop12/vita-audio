import { Bell, Brain, Ear, Moon, Volume2, Waves, Wind } from "lucide-react"
import { Section10bGoogleReviews, Section10cCarrosselHistorias } from "../components"
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

const MANIFESTACOES = [
  {
    Icon: Bell,
    title: "Apito constante",
    description:
      "Um som agudo e contínuo, presente mesmo em ambientes silenciosos, que não para independente do que você faça.",
  },
  {
    Icon: Wind,
    title: "Chiado ou sibilo",
    description:
      "Som parecido com vapor ou pressão saindo, que aparece em momentos de silêncio ou ao deitar para dormir.",
  },
  {
    Icon: Waves,
    title: "Zumbido grave ou ronco",
    description:
      "Som mais baixo e contínuo, como um motor ligado ao fundo, que acompanha o dia inteiro.",
  },
  {
    Icon: Volume2,
    title: "Barulho pulsante",
    description:
      "Zumbido que parece seguir o ritmo do coração, mais perceptível à noite ou em repouso.",
  },
  {
    Icon: Ear,
    title: "Chiado intermitente",
    description:
      "Som que aparece e desaparece sem motivo aparente, às vezes mais forte, às vezes mais fraco.",
  },
  {
    Icon: Brain,
    title: "Zumbido com perda auditiva",
    description:
      "Além do barulho, você percebe que está ouvindo menos, pedindo para repetir ou aumentando o volume da TV.",
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
      "Nosso fonoaudiólogo realiza a audiometria tonal, vocal e imitanciometria para entender com precisão o que está acontecendo com a sua audição.",
  },
  {
    title: "Diagnóstico do zumbido",
    description:
      "Com base nos resultados, identificamos se há perda auditiva associada ao zumbido e qual o perfil auditivo do paciente.",
  },
  {
    title: "Orientação e plano de tratamento",
    description:
      "O fonoaudiólogo explica os resultados de forma clara e apresenta as opções de tratamento adequadas para o seu caso.",
  },
  {
    title: "Adaptação do aparelho auditivo (quando indicado)",
    description:
      "Quando a perda auditiva é confirmada, realizamos a adaptação do aparelho auditivo na própria clínica. O aparelho moderno não serve apenas para ouvir melhor: ele também reduz significativamente o zumbido ao reintroduzir os sons que o cérebro havia deixado de receber.",
  },
]

const APARELHO_BENEFICIOS = [
  {
    Icon: Volume2,
    title: "Redução do zumbido",
    description:
      "Ao reintroduzir sons que o cérebro havia deixado de receber, o aparelho diminui a percepção do zumbido de forma natural.",
  },
  {
    Icon: Moon,
    title: "Melhora do sono",
    description:
      "Com o zumbido menos intenso, dormir fica mais fácil. Muitos pacientes relatam melhora significativa já nas primeiras semanas de uso.",
  },
  {
    Icon: Brain,
    title: "Menos esforço mental",
    description:
      "Ouvir melhor reduz o esforço cognitivo do dia a dia, diminuindo o cansaço e a irritabilidade associados ao zumbido crônico.",
  },
]

const DIFERENCIAIS = [
  {
    title: "Diagnóstico e tratamento no mesmo lugar",
    description:
      "Você não precisa ir a um lugar para fazer o exame e outro para o tratamento. Na Vita Audio, tudo acontece em uma só clínica.",
  },
  {
    title: "Fonoaudiólogos especializados em audiologia",
    description:
      "Profissionais com formação e experiência específica em saúde auditiva e tratamento de zumbido.",
  },
  {
    title: "Aparelhos auditivos modernos e discretos",
    description:
      "Trabalhamos com tecnologia atual, incluindo aparelhos com recursos específicos para redução de zumbido.",
  },
  {
    title: "Resultado explicado na hora",
    description:
      "Você sai da consulta entendendo o que foi encontrado e quais são os próximos passos, sem dúvidas no ar.",
  },
  {
    title: "Atendimento humanizado",
    description:
      "Sabemos que o zumbido afeta muito mais do que a audição. Nosso atendimento leva isso em conta desde o primeiro contato.",
  },
  {
    title: "Localização central em Indaiatuba",
    description:
      "Fácil acesso para moradores de Indaiatuba, Salto, Itupeva, Itu, Campinas, Sorocaba e região.",
  },
]

const FAQ_ITEMS = [
  {
    question: "O zumbido no ouvido tem cura?",
    answer:
      "Depende da causa. Quando o zumbido está associado à perda auditiva, o tratamento com aparelho auditivo reduz significativamente a percepção do zumbido na maioria dos pacientes. O objetivo do tratamento é tornar o zumbido menos presente e menos incômodo no dia a dia.",
  },
  {
    question: "Preciso de encaminhamento médico para ser atendido?",
    answer:
      "Não. Você pode agendar diretamente na Vita Audio, sem precisar de pedido médico ou encaminhamento.",
  },
  {
    question: "Como é feito o diagnóstico do zumbido?",
    answer:
      "Realizamos uma avaliação auditiva completa com audiometria tonal, vocal e imitanciometria. Com base nos resultados, identificamos se há perda auditiva associada ao zumbido e qual o perfil auditivo do paciente.",
  },
  {
    question: "Todo mundo com zumbido precisa de aparelho auditivo?",
    answer:
      "Não necessariamente. O aparelho auditivo é indicado quando há perda auditiva confirmada associada ao zumbido. A avaliação é o que define o tratamento adequado para cada caso.",
  },
  {
    question: "O aparelho auditivo realmente ajuda no zumbido?",
    answer:
      "Sim. Os aparelhos modernos têm recursos específicos para redução de zumbido. Ao amplificar os sons do ambiente, eles reduzem o contraste que torna o zumbido tão perceptível, especialmente em ambientes silenciosos.",
  },
  {
    question: "Quanto tempo leva para o tratamento fazer efeito?",
    answer:
      "Varia de paciente para paciente. Muitos relatam melhora já nas primeiras semanas de uso do aparelho. O acompanhamento com o fonoaudiólogo é importante para ajustar o tratamento conforme a evolução.",
  },
  {
    question: "O atendimento é presencial?",
    answer:
      "Sim. A avaliação auditiva e a adaptação do aparelho são realizadas presencialmente na clínica em Indaiatuba.",
  },
]

export function ZumbidoPage() {
  usePageMeta(PAGE_SEO.zumbido)

  return (
    <>
      <HeroPage
        title="Tratamento para Zumbido no Ouvido em Indaiatuba"
        subtitle="Aquele apito, chiado ou barulho constante no ouvido tem solução. Na Vita Audio, identificamos a causa do seu zumbido e oferecemos o tratamento adequado, tudo em um só lugar."
        primaryLabel="Quero Tratar Meu Zumbido"
        secondaryLabel="Falar no WhatsApp"
      />
      <Section10cCarrosselHistorias />
      <section className="bg-vita-gray-bg py-[70px]">
        <div className={`${container} mx-auto max-w-3xl text-center`}>
          <p className="text-base leading-relaxed text-vita-text-mid md:text-lg">
            Você já tentou ignorar. Já esperou passar por conta própria. Já pesquisou na internet
            sem encontrar uma resposta de verdade.
          </p>
          <p className="mt-4 text-base leading-relaxed text-vita-text-mid md:text-lg">
            O zumbido no ouvido afeta o sono, a concentração e a qualidade de vida de quem convive
            com ele todos os dias.
          </p>
          <p className="mt-4 text-base font-semibold text-vita-blue md:text-lg">
            Você não precisa continuar assim.
          </p>
        </div>
      </section>
      <FeatureCardGrid
        title="O zumbido no ouvido pode se manifestar de formas diferentes"
        subtitle="Se você reconhece algum desses sons, sua audição precisa de avaliação"
        items={MANIFESTACOES}
      />
      <section className="bg-white py-[70px]">
        <div className={container}>
          <div className="flex flex-col items-center gap-10 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <img
                src="/images/vita-audio-teste-audicao.webp"
                alt="Avaliação auditiva Vita Audio"
                className="w-full rounded-2xl object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-[26px] font-semibold text-vita-blue md:text-[30px]">
                Zumbido e perda auditiva: uma conexão muito comum
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-vita-text-mid md:text-base">
                <p>
                  Em grande parte dos casos, o zumbido no ouvido está diretamente ligado à perda
                  auditiva. Quando o sistema auditivo deixa de receber determinados sons do ambiente,
                  o cérebro começa a &quot;preencher&quot; esse silêncio com sons que não existem. É
                  assim que o zumbido surge.
                </p>
                <p>
                  Por isso, o primeiro passo para tratar o zumbido é entender o que está acontecendo
                  com a sua audição. Sem esse diagnóstico, qualquer tentativa de tratamento é apenas
                  um chute.
                </p>
              </div>
              <div className="mt-8 rounded-2xl border-l-4 border-vita-blue bg-vita-gray-bg p-5 text-sm leading-relaxed text-vita-text-mid md:text-base">
                Na Vita Audio, realizamos a avaliação auditiva completa para identificar se há perda
                auditiva associada ao seu zumbido. Com esse diagnóstico em mãos, o tratamento certo
                fica muito mais claro.
              </div>
            </div>
          </div>
        </div>
      </section>
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
                src="/images/hero-hand-device.jpg"
                alt="Aparelho auditivo moderno"
                className="w-full max-w-md rounded-2xl object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-[26px] font-semibold text-vita-blue md:text-[30px]">
                O aparelho auditivo pode reduzir o zumbido
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-vita-text-mid md:text-base">
                <p>
                  Muita gente associa o aparelho auditivo apenas à perda auditiva severa ou à terceira
                  idade. Mas a realidade é bem diferente.
                </p>
                <p>
                  Os aparelhos auditivos modernos são discretos, confortáveis e têm recursos
                  específicos para o tratamento do zumbido. Ao amplificar os sons do ambiente que o
                  paciente havia deixado de ouvir, o aparelho reduz o contraste entre o silêncio e o
                  zumbido, tornando-o menos perceptível e menos incômodo no dia a dia.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {APARELHO_BENEFICIOS.map(({ Icon, title, description }) => (
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
      <DiferenciaisList title="Por que tratar seu zumbido na Vita Audio?" items={DIFERENCIAIS} />
      <PrimaryPromoBlock
        title="Quanto mais tempo sem tratamento, mais difícil fica."
        description="O zumbido crônico tende a se intensificar com o tempo quando não tratado. Quanto antes você fizer a avaliação, maiores as chances de um resultado positivo com o tratamento. Agende agora e dê o primeiro passo para recuperar sua qualidade de vida."
        buttonLabel="Agendar Minha Avaliação"
      />
      <FaqAccordion title="Dúvidas frequentes sobre zumbido no ouvido" items={FAQ_ITEMS} />
      <Section10bGoogleReviews />
      <OutrosServicos currentRoute="zumbido" />
      <FinalCta
        title="Chega de conviver com o zumbido"
        subtitle="Agende sua avaliação na Vita Audio e descubra qual é o melhor tratamento para o seu caso."
        primaryLabel="Agendar Minha Avaliação"
        secondaryLabel="Falar no WhatsApp"
      />
    </>
  )
}
