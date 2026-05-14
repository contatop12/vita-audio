import type { LucideIcon } from "lucide-react"
import {
  Headphones,
  HeartPulse,
  Music,
  ShieldPlus,
  Users,
  Volume2,
  Wifi,
  Ban,
} from "lucide-react"
import { container } from "../vita-tw"

const itens: { Icon: LucideIcon; text: string }[] = [
  { Icon: Headphones, text: "Volte a ouvir com clareza no dia a dia" },
  { Icon: Users, text: "Melhore a convivência com família e amigos" },
  { Icon: Ban, text: "Reduza o zumbido no ouvido" },
  { Icon: HeartPulse, text: "Previna o isolamento social e o cansaço mental" },
  { Icon: Wifi, text: "Conectividade com celular, TV e outros dispositivos" },
  { Icon: Volume2, text: "Diminuição da progressão da perda auditiva" },
  { Icon: Music, text: "Mais prazer em curtir filmes, séries e músicas" },
  { Icon: ShieldPlus, text: "Mais segurança no dia a dia" },
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
          {itens.map(({ Icon, text }) => (
            <li
              key={text}
              className="flex flex-col items-center gap-3 text-[15px] font-medium leading-snug text-vita-blue md:text-[16px]"
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
