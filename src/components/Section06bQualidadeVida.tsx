import type { LucideIcon } from "lucide-react"
import {
  Ban,
  BriefcaseMedical,
  Folder,
  Headphones,
  HeartPulse,
  Mic,
  Music,
  ShieldPlus,
  Users,
  Wifi,
} from "lucide-react"
import { container } from "../vita-tw"

const itens: { Icon: LucideIcon; text: string }[] = [
  {
    Icon: Headphones,
    text: "Volte a ouvir (ou ouça pela primeira vez)",
  },
  {
    Icon: Users,
    text: "Melhore a sua vida e convivência social",
  },
  {
    Icon: Folder,
    text: "Melhore seu desempenho no trabalho",
  },
  {
    Icon: HeartPulse,
    text: "Previne doenças (depressão, demência, etc.)",
  },
  {
    Icon: Mic,
    text: "Melhora a comunicação oral",
  },
  {
    Icon: Wifi,
    text: "Conectividade com outros aparelhos digitais",
  },
  {
    Icon: Ban,
    text: "Redução de ruídos e zumbidos",
  },
  {
    Icon: BriefcaseMedical,
    text: "Diminuição da evolução da perda auditiva",
  },
  {
    Icon: ShieldPlus,
    text: "Diminui a chance de se envolver em acidentes",
  },
  {
    Icon: Music,
    text: "Mais prazer em curtir filmes, séries e músicas",
  },
]

export function Section06bQualidadeVida() {
  return (
    <section className="bg-vita-gray-bg py-[70px] text-center">
      <div className={container}>
        <h2 className="mb-3 text-[22px] font-semibold leading-snug text-vita-blue md:text-[26px]">
          Melhore sua qualidade de vida
        </h2>
        <p className="mb-12 text-[15px] font-semibold text-vita-blue md:text-[19px]">
          Veja os benefícios de voltar a ouvir
        </p>
        <ul className="mx-auto grid max-w-[1100px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {itens.map(({ Icon, text }, i) => (
            <li
              key={text}
              className={`flex flex-col items-center gap-3 text-[15px] font-medium leading-snug text-vita-blue md:text-[16px] ${i === 8 ? "lg:col-start-2" : ""} ${i === 9 ? "lg:col-start-3" : ""}`}
            >
              <span className="flex size-[52px] items-center justify-center rounded-full bg-neutral-200/90 text-neutral-600">
                <Icon className="size-7 shrink-0" strokeWidth={1.75} aria-hidden />
              </span>
              <span className="max-w-[240px]">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
