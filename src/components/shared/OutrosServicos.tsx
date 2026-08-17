import {
  ROUTES,
  SERVICE_ROUTE_KEYS,
  type ServiceRouteKey,
} from "../../constants/paths"
import { container } from "../../vita-tw"

const SERVICE_LINKS: Record<
  ServiceRouteKey,
  { label: string; description: string }
> = {
  aparelhoAuditivo: {
    label: "Aparelho auditivo",
    description: "Diagnóstico completo e adaptação de aparelho auditivo na mesma clínica.",
  },
  audiometria: {
    label: "Audiometria",
    description: "Avaliação auditiva completa para entender sua audição com precisão.",
  },
  zumbido: {
    label: "Zumbido no ouvido",
    description: "Diagnóstico e tratamento para quem convive com apito, chiado ou zumbido.",
  },
  perdaAuditiva: {
    label: "Perda auditiva",
    description: "Diagnóstico e tratamento para dificuldade de ouvir no dia a dia.",
  },
  manutencao: {
    label: "Manutenção de aparelho auditivo",
    description: "Limpeza técnica, troca de peças de desgaste e reajuste do seu aparelho.",
  },
  assistenciaTecnica: {
    label: "Assistência técnica",
    description: "Diagnóstico e reparo de aparelho auditivo de todas as marcas.",
  },
}

type OutrosServicosProps = {
  /** Rota atual — omitida da lista. Rotas fora dos 6 serviços exibem a lista completa. */
  currentRoute?: ServiceRouteKey
}

export function OutrosServicos({ currentRoute }: OutrosServicosProps) {
  const links = SERVICE_ROUTE_KEYS.filter((key) => key !== currentRoute)

  return (
    <section className="bg-white py-[70px]">
      <div className={container}>
        <h2 className="mb-8 text-center text-[26px] font-semibold text-vita-blue md:text-[30px]">
          Outros serviços da Vita Audio
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {links.map((key) => (
            <a
              key={key}
              href={ROUTES[key]}
              className="rounded-2xl border border-vita-blue/10 bg-vita-gray-bg p-5 transition hover:border-vita-blue/25 hover:shadow-[0_8px_24px_rgba(0,109,196,0.08)]"
            >
              <h3 className="text-base font-semibold text-vita-blue">
                {SERVICE_LINKS[key].label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-vita-text-mid">
                {SERVICE_LINKS[key].description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
