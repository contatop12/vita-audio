import { Battery, Droplets, Ear, Radio, Settings2, Sparkles, VolumeX, Waves, Wind, Wrench } from "lucide-react"
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

const SINAIS = [
  {
    Icon: VolumeX,
    title: "Som mais fraco ou abafado",
    description:
      "O volume que antes era suficiente já não resolve. Na maioria das vezes é cera ou sujeira bloqueando a saída do som.",
  },
  {
    Icon: Waves,
    title: "Apito constante (microfonia)",
    description:
      "O aparelho apita sozinho ou ao aproximar a mão. Molde folgado, tubo ressecado ou encaixe incorreto são as causas mais comuns.",
  },
  {
    Icon: Radio,
    title: "Chiado, estalo ou som cortando",
    description:
      "Ruído de fundo estranho ou som que falha indicam microfone e receptor sujos ou umidade acumulada dentro do aparelho.",
  },
  {
    Icon: Battery,
    title: "Bateria durando menos",
    description:
      "A bateria acaba antes do esperado ou o aparelho desliga sozinho no meio do dia, mesmo com carga.",
  },
  {
    Icon: Droplets,
    title: "Umidade e suor no aparelho",
    description:
      "Calor, transpiração e chuva deixam umidade interna — a principal causa de falha em aparelho auditivo.",
  },
  {
    Icon: Ear,
    title: "Incômodo no ouvido",
    description:
      "Molde apertado, coçando ou saindo do lugar significa que o domo ou o molde precisa de ajuste ou troca.",
  },
]

const COMO_FUNCIONA_STEPS = [
  {
    title: "Agendamento",
    description: "Fale com nossa equipe pelo WhatsApp. Rápido e sem burocracia.",
  },
  {
    title: "Avaliação técnica do aparelho",
    description:
      "O aparelho é inspecionado por completo: microfone, receptor, filtro de cera, tubo, molde, bateria e carcaça.",
  },
  {
    title: "Limpeza e higienização profunda",
    description:
      "Remoção de cera, sujeira e resíduos com ferramentas específicas, incluindo a desumidificação quando necessário.",
  },
  {
    title: "Troca das peças de desgaste",
    description:
      "Filtro de cera, domo, tubo e demais peças que se desgastam com o uso são substituídos no próprio atendimento.",
  },
  {
    title: "Verificação e reajuste do som",
    description:
      "O fonoaudiólogo testa o desempenho do aparelho e reajusta a programação de acordo com o audiograma do paciente.",
  },
  {
    title: "Orientação de cuidados",
    description:
      "Você sai sabendo como limpar, guardar e conservar o aparelho para espaçar as próximas manutenções.",
  },
]

const INCLUSO_CARDS = [
  {
    Icon: Sparkles,
    title: "Limpeza técnica completa",
    description:
      "Microfone, receptor, saída de som e carcaça limpos com ferramentas próprias, sem risco para os componentes.",
  },
  {
    Icon: Wrench,
    title: "Troca de peças de desgaste",
    description:
      "Filtro de cera, domo, tubo e conectores são itens de consumo — trocá-los devolve o desempenho original.",
  },
  {
    Icon: Wind,
    title: "Desumidificação",
    description:
      "Retirada da umidade acumulada pelo uso diário, responsável por boa parte das falhas intermitentes.",
  },
  {
    Icon: Settings2,
    title: "Reajuste da programação",
    description:
      "Verificação do ganho e ajuste fino conforme o audiograma, para o som voltar a ficar confortável.",
  },
]

const ROTINA = [
  {
    label: "Todo dia",
    color: "border-t-yellow-400",
    description:
      "Limpeza simples em casa: pano seco, escovinha própria e guardar o aparelho aberto, em local seco e longe do calor.",
  },
  {
    label: "Toda semana",
    color: "border-t-orange-500",
    description:
      "Conferência do domo e do tubo, além do uso do desumidificador para quem transpira muito ou usa o aparelho o dia inteiro.",
  },
  {
    label: "A cada 3 a 6 meses",
    color: "border-t-sky-500",
    description:
      "Revisão técnica na clínica: limpeza profunda, troca de filtro e conferência do desempenho do aparelho.",
  },
  {
    label: "Ao primeiro sinal",
    color: "border-t-red-500",
    description:
      "Som fraco, apito ou falha: não espere a próxima revisão. Quanto antes o atendimento, menor o risco de dano permanente.",
  },
]

const DIFERENCIAIS = [
  {
    title: "Atendemos todas as marcas",
    description:
      "Não importa onde você comprou: fazemos a manutenção dos aparelhos auditivos das principais marcas do mercado.",
  },
  {
    title: "Revisão feita na própria clínica",
    description:
      "Limpeza, troca de peças de desgaste e ajuste são resolvidos, na maioria dos casos, no mesmo atendimento.",
  },
  {
    title: "Fonoaudiólogos especializados em audiologia",
    description:
      "Quem cuida do seu aparelho é quem entende de audição — e não apenas do equipamento.",
  },
  {
    title: "Peças e acessórios disponíveis",
    description:
      "Filtros, domos, tubos, pilhas e produtos de limpeza à pronta entrega para os modelos mais usados.",
  },
  {
    title: "Ajuste fino junto com a revisão",
    description:
      "Além da limpeza, conferimos se a programação continua adequada ao seu audiograma atual.",
  },
  {
    title: "Localização central em Indaiatuba",
    description:
      "Fácil acesso para moradores de Indaiatuba, Salto, Itupeva, Itu, Campinas, Sorocaba e região.",
  },
]

const FAQ_ITEMS = [
  {
    question: "Vocês fazem manutenção de aparelho comprado em outro lugar?",
    answer:
      "Sim. Atendemos aparelhos auditivos das principais marcas do mercado, independentemente de onde foram adquiridos.",
  },
  {
    question: "Quanto tempo demora a manutenção?",
    answer:
      "A limpeza técnica, a troca de filtros e domos e o reajuste costumam ser feitos no próprio atendimento. Casos que exigem reparo interno seguem para a assistência técnica, com prazo informado antes.",
  },
  {
    question: "Com que frequência devo fazer a revisão?",
    answer:
      "O ideal é uma revisão técnica a cada 3 a 6 meses, somada à limpeza diária em casa. Quem produz mais cera ou transpira muito costuma precisar de intervalos menores.",
  },
  {
    question: "Preciso agendar ou posso ir direto?",
    answer:
      "Recomendamos agendar. Assim você é atendido sem espera e garantimos que as peças do seu modelo estejam disponíveis no dia.",
  },
  {
    question: "Meu aparelho parou de funcionar. É problema grave?",
    answer:
      "Na maior parte das vezes, não. Cera no filtro, tubo obstruído, umidade ou bateria no fim são as causas mais comuns e se resolvem na revisão. Só a avaliação técnica confirma o motivo.",
  },
  {
    question: "A manutenção tem custo?",
    answer:
      "Depende do serviço e das peças necessárias. O valor é sempre informado antes de qualquer procedimento — nada é executado sem a sua aprovação.",
  },
  {
    question: "Posso limpar o aparelho em casa?",
    answer:
      "Sim, e deve: pano seco, escovinha própria e guarda em local seco. O que não se deve usar é água, álcool, cotonete ou objetos pontiagudos, que danificam os componentes internos.",
  },
]

export function ManutencaoPageWA() {
  usePageMeta(PAGE_SEO.manutencao)

  return (
    <>
      <HeroPage
        title="Manutenção de Aparelho Auditivo em Indaiatuba"
        subtitle="Som abafado, apito ou aparelho que parou de funcionar? Na Vita Audio fazemos limpeza técnica, troca de peças e reajuste do seu aparelho auditivo — de qualquer marca — com fonoaudiólogos especializados."
        primaryLabel="Agendar Minha Manutenção pelo WhatsApp"
        ctaMode="whatsapp"
      />
      <Section10cCarrosselHistorias />
      <section className="bg-vita-gray-bg py-[70px]">
        <div className={container}>
          <div className="flex flex-col items-center gap-10 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <img
                src="/images/vita-audio-teste-audicao.webp"
                alt="Manutenção de aparelho auditivo na Vita Audio"
                className="w-full rounded-2xl object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-base leading-relaxed text-vita-text-mid md:text-lg">
                O aparelho auditivo trabalha o dia inteiro dentro do ouvido, exposto a cera, suor e
                umidade. Com o tempo, o som fica mais fraco, aparece um chiado ou o aparelho
                simplesmente para.
              </p>
              <p className="mt-4 text-base leading-relaxed text-vita-text-mid md:text-lg">
                Na maioria das vezes, isso não significa que o aparelho quebrou. Significa que ele
                precisa de manutenção: limpeza profunda, troca dos itens de desgaste e um novo
                ajuste.
              </p>
              <p className="mt-4 text-base font-semibold text-vita-blue md:text-lg">
                Antes de pensar em trocar de aparelho, faça uma revisão.
              </p>
            </div>
          </div>
        </div>
      </section>
      <FeatureCardGrid
        title="Sinais de que seu aparelho precisa de manutenção"
        subtitle="A perda de desempenho costuma ser gradual — e simples de resolver quando identificada cedo."
        items={SINAIS}
      />
      <ComoFunciona
        title="Como funciona a manutenção na Vita Audio"
        subtitle="Na maioria dos casos, a revisão é feita na hora, com o paciente na clínica."
        steps={COMO_FUNCIONA_STEPS}
      />
      <section className="bg-vita-gray-bg py-[70px]">
        <div className={container}>
          <div className="flex flex-col items-center gap-10 lg:flex-row">
            <div className="flex w-full items-center justify-center lg:w-1/2">
              <img
                src="/images/f2.png"
                alt="Aparelho auditivo em manutenção"
                className="w-full max-w-md rounded-2xl object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-[26px] font-semibold text-vita-blue md:text-[30px]">
                Manutenção não é só limpar o aparelho
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-vita-text-mid md:text-base">
                <p>
                  Muita gente passa um pano no aparelho em casa e acredita que está fazendo
                  manutenção. A limpeza doméstica é importante no dia a dia, mas não alcança o filtro
                  de cera, o interior do tubo nem os componentes eletroacústicos.
                </p>
                <p>
                  A manutenção técnica é feita com ferramentas próprias e termina com um teste de
                  desempenho — para garantir que o aparelho voltou a entregar o som que o paciente
                  precisa.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {INCLUSO_CARDS.map(({ Icon, title, description }) => (
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
            Com que frequência fazer a manutenção?
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {ROTINA.map((item) => (
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
            A manutenção preventiva custa menos do que o reparo e evita que o aparelho pare
            justamente quando você mais precisa dele.
          </p>
        </div>
      </section>
      <DiferenciaisList
        title="Por que fazer a manutenção na Vita Audio?"
        items={DIFERENCIAIS}
      />
      <PrimaryPromoBlock
        title="Aparelho parado é audição perdida."
        description="Cada dia sem usar o aparelho auditivo é um dia de esforço a mais para ouvir e de convivência prejudicada. Além disso, sujeira e umidade que ficam no aparelho evoluem para danos permanentes. A manutenção costuma ser simples, rápida e muito mais barata do que substituir o equipamento."
        buttonLabel="Agendar Minha Manutenção pelo WhatsApp"
        ctaMode="whatsapp"
      />
      <FaqAccordion
        title="Dúvidas frequentes sobre manutenção de aparelho auditivo"
        items={FAQ_ITEMS}
      />
      <Section10bGoogleReviews />
      <OutrosServicos currentRoute="manutencao" />
      <FinalCta
        title="Seu aparelho pode voltar a soar como no primeiro dia"
        subtitle="Agende a manutenção na Vita Audio e recupere o desempenho do seu aparelho auditivo."
        primaryLabel="Agendar Minha Manutenção pelo WhatsApp"
        ctaMode="whatsapp"
      />
    </>
  )
}
