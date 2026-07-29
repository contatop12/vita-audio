import { BadgeCheck, Battery, Droplets, PackageCheck, Radio, Search, Timer, VolumeX, Waves, Wrench } from "lucide-react"
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

const PROBLEMAS = [
  {
    Icon: VolumeX,
    title: "Aparelho sem som",
    description:
      "Ligado, mas sem áudio nenhum. Costuma ser filtro de cera obstruído, tubo bloqueado ou falha no receptor.",
  },
  {
    Icon: Waves,
    title: "Apito constante",
    description:
      "Microfonia que não para, mesmo com o aparelho bem encaixado. Indica molde folgado, tubo rompido ou defeito interno.",
  },
  {
    Icon: Radio,
    title: "Som falhando ou cortando",
    description:
      "O aparelho funciona por alguns minutos e some, ou o som vem e volta. Falha intermitente pede diagnóstico técnico.",
  },
  {
    Icon: Battery,
    title: "Não liga ou não carrega",
    description:
      "Aparelho que não responde, carregador que não reconhece o dispositivo ou bateria recarregável que não segura carga.",
  },
  {
    Icon: Droplets,
    title: "Contato com água ou umidade",
    description:
      "Banho, chuva ou transpiração intensa. Quanto mais rápido o atendimento, maior a chance de recuperar o aparelho.",
  },
  {
    Icon: Wrench,
    title: "Peças quebradas ou soltas",
    description:
      "Tubo, gancho, molde, domo ou tampa da bateria danificados — itens que na maioria dos casos são trocados na hora.",
  },
]

const COMO_FUNCIONA_STEPS = [
  {
    title: "Agendamento",
    description: "Fale com nossa equipe pelo WhatsApp. Rápido e sem burocracia.",
  },
  {
    title: "Diagnóstico técnico",
    description:
      "O aparelho é testado e inspecionado para identificar a causa da falha: obstrução, umidade, desgaste de peça ou defeito interno.",
  },
  {
    title: "Orçamento aprovado por você",
    description:
      "Antes de qualquer reparo, apresentamos o serviço necessário, o prazo e o valor. Nada é executado sem a sua autorização.",
  },
  {
    title: "Reparo na clínica ou no fabricante",
    description:
      "Troca de peças e ajustes são resolvidos aqui mesmo. Defeitos internos seguem para o laboratório do fabricante, com acompanhamento nosso.",
  },
  {
    title: "Teste de desempenho",
    description:
      "Antes da devolução, o aparelho é testado e reprogramado conforme o audiograma do paciente.",
  },
  {
    title: "Entrega com orientação",
    description:
      "Você recebe o aparelho funcionando e orientações práticas para evitar que o problema se repita.",
  },
]

const GARANTIA_CARDS = [
  {
    Icon: Search,
    title: "Diagnóstico antes de tudo",
    description:
      "Ninguém sabe o custo do reparo sem avaliar o aparelho. O diagnóstico é o primeiro passo, sempre.",
  },
  {
    Icon: BadgeCheck,
    title: "Orçamento aprovado antes",
    description:
      "Você recebe o valor e o prazo antes do reparo. Se não aprovar, o aparelho é devolvido sem intervenção.",
  },
  {
    Icon: PackageCheck,
    title: "Peças e acessórios originais",
    description:
      "Trabalhamos com peças compatíveis com o seu modelo — filtros, domos, tubos, moldes e conectores.",
  },
  {
    Icon: Timer,
    title: "Prazo informado no ato",
    description:
      "Reparo na clínica costuma sair no mesmo dia. Envio ao fabricante tem prazo informado no momento da entrega.",
  },
]

const SITUACOES = [
  {
    label: "Dentro da garantia",
    color: "border-t-green-500",
    description:
      "Aparelhos no período de garantia seguem as regras do fabricante. Cuidamos do envio e acompanhamos o processo por você.",
  },
  {
    label: "Fora da garantia",
    color: "border-t-yellow-400",
    description:
      "O reparo é orçado peça a peça e serviço a serviço. Você decide com o valor e o prazo na mão.",
  },
  {
    label: "Reparo na clínica",
    color: "border-t-sky-500",
    description:
      "Troca de tubo, domo, filtro e molde, além da limpeza técnica: resolvidos no atendimento, sem envio.",
  },
  {
    label: "Reparo no fabricante",
    color: "border-t-orange-500",
    description:
      "Falhas internas de microfone, receptor ou placa exigem laboratório. Acompanhamos do envio até a devolução.",
  },
]

const DIFERENCIAIS = [
  {
    title: "Atendemos todas as marcas",
    description:
      "Recebemos aparelhos auditivos das principais marcas do mercado, comprados aqui ou em qualquer outro lugar.",
  },
  {
    title: "Diagnóstico antes do orçamento",
    description:
      "Primeiro identificamos a causa real da falha. Só depois falamos em peça, serviço e valor.",
  },
  {
    title: "Sem surpresa no valor",
    description:
      "Nenhum reparo é iniciado sem a sua aprovação. O que foi orçado é o que será cobrado.",
  },
  {
    title: "Acompanhamento do envio ao fabricante",
    description:
      "Quando o aparelho precisa ir para o laboratório, cuidamos da logística e mantemos você informado.",
  },
  {
    title: "Fonoaudiólogos especializados em audiologia",
    description:
      "O aparelho volta ajustado ao seu audiograma, não apenas consertado — quem devolve é quem entende de audição.",
  },
  {
    title: "Localização central em Indaiatuba",
    description:
      "Fácil acesso para moradores de Indaiatuba, Salto, Itupeva, Itu, Campinas, Sorocaba e região.",
  },
]

const FAQ_ITEMS = [
  {
    question: "Vocês consertam aparelho comprado em outro lugar?",
    answer:
      "Sim. A assistência técnica da Vita Audio atende aparelhos auditivos das principais marcas, independentemente de onde foram adquiridos.",
  },
  {
    question: "Quanto custa o conserto?",
    answer:
      "Depende do que o diagnóstico identificar. Trocas de peças de desgaste têm custo baixo; reparos internos são orçados pelo fabricante. Em qualquer caso, o valor é informado e aprovado por você antes.",
  },
  {
    question: "Quanto tempo demora o reparo?",
    answer:
      "Limpeza técnica e troca de peças normalmente saem no mesmo atendimento. Quando o aparelho precisa ir ao laboratório do fabricante, o prazo estimado é informado no momento da entrega.",
  },
  {
    question: "Meu aparelho molhou. O que devo fazer?",
    answer:
      "Desligue, retire a bateria se for removível, seque a parte externa com um pano macio e traga o aparelho o quanto antes. Não use secador, forno ou micro-ondas: o calor danifica os componentes de vez.",
  },
  {
    question: "O aparelho está na garantia. Vocês atendem?",
    answer:
      "Sim. Fazemos a avaliação, orientamos sobre a cobertura do fabricante e cuidamos do envio quando o caso é de garantia.",
  },
  {
    question: "Preciso levar o aparelho ou vocês avaliam por foto?",
    answer:
      "A avaliação precisa ser presencial. Muitas falhas só aparecem no teste de desempenho e na inspeção interna do aparelho.",
  },
  {
    question: "Fico sem aparelho durante o reparo?",
    answer:
      "Na maioria dos casos, não — o serviço é feito na hora. Quando o envio ao fabricante é necessário, nossa equipe orienta sobre as alternativas para o período.",
  },
]

export function AssistenciaTecnicaPageWA() {
  usePageMeta(PAGE_SEO.assistenciaTecnica)

  return (
    <>
      <HeroPage
        title="Assistência Técnica para Aparelho Auditivo"
        subtitle="Aparelho sem som, falhando ou danificado? A Vita Audio faz o diagnóstico técnico, informa o orçamento antes e cuida do reparo do seu aparelho auditivo — de qualquer marca — em Indaiatuba."
        primaryLabel="Falar com a Assistência Técnica pelo WhatsApp"
        ctaMode="whatsapp"
      />
      <Section10cCarrosselHistorias />
      <section className="bg-vita-gray-bg py-[70px]">
        <div className={container}>
          <div className="flex flex-col items-center gap-10 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <img
                src="/images/vita-audio-teste-audicao.webp"
                alt="Assistência técnica de aparelho auditivo na Vita Audio"
                className="w-full rounded-2xl object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-base leading-relaxed text-vita-text-mid md:text-lg">
                Quando o aparelho auditivo falha, a rotina muda no mesmo dia: as conversas ficam pela
                metade, o telefone vira um problema e a insegurança volta.
              </p>
              <p className="mt-4 text-base leading-relaxed text-vita-text-mid md:text-lg">
                A boa notícia é que grande parte das falhas tem conserto — e muitas se resolvem na
                própria clínica, no mesmo atendimento.
              </p>
              <p className="mt-4 text-base font-semibold text-vita-blue md:text-lg">
                Tudo começa pelo diagnóstico técnico. Sem ele, ninguém sabe se é uma peça simples ou
                um reparo de fábrica.
              </p>
            </div>
          </div>
        </div>
      </section>
      <FeatureCardGrid
        title="Problemas que a nossa assistência técnica resolve"
        subtitle="Do filtro obstruído ao envio para o laboratório do fabricante — cada caso tem um caminho."
        items={PROBLEMAS}
        closingText="Se o problema do seu aparelho não está nesta lista, fale com a gente mesmo assim: o diagnóstico técnico identifica a causa."
      />
      <ComoFunciona
        title="Como funciona o atendimento da assistência técnica"
        subtitle="Transparência do começo ao fim: você sabe o que será feito, quanto custa e em quanto tempo."
        steps={COMO_FUNCIONA_STEPS}
      />
      <section className="bg-vita-gray-bg py-[70px]">
        <div className={container}>
          <div className="flex flex-col items-center gap-10 lg:flex-row">
            <div className="flex w-full items-center justify-center lg:w-1/2">
              <img
                src="/images/f2.png"
                alt="Aparelho auditivo em reparo técnico"
                className="w-full max-w-md rounded-2xl object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-[26px] font-semibold text-vita-blue md:text-[30px]">
                Nem toda falha é defeito
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-vita-text-mid md:text-base">
                <p>
                  Boa parte dos aparelhos que chegam sem som não está quebrada: é cera no filtro,
                  tubo obstruído, umidade acumulada ou bateria no fim. Esses casos costumam sair
                  resolvidos no mesmo dia.
                </p>
                <p>
                  Quando o problema é interno — receptor, microfone ou placa — o aparelho segue para
                  o laboratório do fabricante, e nós acompanhamos o processo do envio até a
                  devolução.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {GARANTIA_CARDS.map(({ Icon, title, description }) => (
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
            Garantia, prazo e o que esperar
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {SITUACOES.map((item) => (
              <article
                key={item.label}
                className={`rounded-2xl border border-vita-blue/10 border-t-4 bg-vita-gray-bg p-5 ${item.color}`}
              >
                <h3 className="text-base font-semibold text-vita-blue">{item.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-vita-text-mid">{item.description}</p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-vita-text-mid md:text-base">
            Em qualquer situação, o valor e o prazo são apresentados antes do reparo. Você decide com
            todas as informações na mão.
          </p>
        </div>
      </section>
      <DiferenciaisList
        title="Por que trazer seu aparelho para a Vita Audio?"
        items={DIFERENCIAIS}
      />
      <PrimaryPromoBlock
        title="Não deixe o aparelho na gaveta."
        description="Aparelho guardado com defeito tende a piorar: a umidade e os resíduos continuam agindo sobre os componentes internos, e o que era um reparo simples vira uma troca cara. Traga para o diagnóstico técnico e descubra o que realmente está acontecendo."
        buttonLabel="Falar com a Assistência Técnica pelo WhatsApp"
        ctaMode="whatsapp"
      />
      <FaqAccordion
        title="Dúvidas frequentes sobre assistência técnica para aparelho auditivo"
        items={FAQ_ITEMS}
      />
      <Section10bGoogleReviews />
      <OutrosServicos currentRoute="assistenciaTecnica" />
      <FinalCta
        title="Seu aparelho tem conserto — vamos verificar"
        subtitle="Traga o aparelho para o diagnóstico técnico na Vita Audio. Você recebe o orçamento e o prazo antes de qualquer reparo."
        primaryLabel="Falar com a Assistência Técnica pelo WhatsApp"
        ctaMode="whatsapp"
      />
    </>
  )
}
