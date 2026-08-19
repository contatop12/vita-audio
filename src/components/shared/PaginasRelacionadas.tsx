import { ROUTES, WHATSAPP_ROUTES, type RouteKey } from "../../constants/paths"
import { container } from "../../vita-tw"

/** Páginas do cluster comercial de aparelhos auditivos. */
export const CLUSTER_ROUTE_KEYS = [
  "aparelhoAuditivo",
  "preco",
  "discreto",
  "recarregavel",
  "melhorAparelho",
  "idosos",
  "starkey",
  "argosy",
  "rexton",
  "beltone",
  "coselgi",
  "interton",
] as const

export type ClusterRouteKey = (typeof CLUSTER_ROUTE_KEYS)[number]

const CLUSTER_LINKS: Record<ClusterRouteKey, { label: string; description: string }> = {
  aparelhoAuditivo: {
    label: "Aparelho auditivo em Indaiatuba",
    description: "Página principal: avaliação, escolha e adaptação de aparelho auditivo.",
  },
  preco: {
    label: "Preço de aparelho auditivo",
    description: "Entenda o que faz o valor variar e consulte modelos disponíveis.",
  },
  discreto: {
    label: "Aparelho auditivo discreto",
    description: "Modelos pequenos, intracanais e retroauriculares compactos.",
  },
  recarregavel: {
    label: "Aparelho auditivo recarregável e Bluetooth",
    description: "Praticidade da recarga e conectividade em modelos compatíveis.",
  },
  melhorAparelho: {
    label: "Qual o melhor aparelho auditivo",
    description: "Compare formatos, tecnologias e o que realmente importa na escolha.",
  },
  idosos: {
    label: "Aparelho auditivo para idosos",
    description: "Conforto, facilidade de uso e acompanhamento na adaptação.",
  },
  starkey: {
    label: "Aparelhos auditivos Starkey",
    description: "Linhas Genesis AI e Evolv AI com orientação especializada.",
  },
  argosy: {
    label: "Aparelhos auditivos Argosy",
    description: "Linhas Vista V e Vista B com orientação especializada.",
  },
  rexton: {
    label: "Aparelhos auditivos Rexton",
    description: "Linhas BiCore, MotionCore e Reach com orientação especializada.",
  },
  beltone: {
    label: "Aparelhos auditivos Beltone",
    description: "Linhas Serene, Boost Ultra e Achieve com orientação especializada.",
  },
  coselgi: {
    label: "Aparelhos auditivos Coselgi",
    description: "Linha Mojo com orientação de fonoaudiólogas especializadas.",
  },
  interton: {
    label: "Aparelhos auditivos Interton",
    description: "Linhas Move e Presto com orientação especializada.",
  },
}

type PaginasRelacionadasProps = {
  currentRoute: RouteKey
  /** Restringe a lista exibida; por padrão mostra todo o cluster. */
  only?: ClusterRouteKey[]
  title?: string
  ctaMode?: "form" | "whatsapp"
  background?: "white" | "gray"
}

export function PaginasRelacionadas({
  currentRoute,
  only,
  title = "Continue conhecendo os aparelhos auditivos",
  ctaMode = "form",
  background = "white",
}: PaginasRelacionadasProps) {
  const keys = (only ?? [...CLUSTER_ROUTE_KEYS]).filter((key) => key !== currentRoute)
  if (!keys.length) return null

  const bg = background === "gray" ? "bg-vita-gray-bg" : "bg-white"
  const cardBg = background === "gray" ? "bg-white" : "bg-vita-gray-bg"
  const paths = ctaMode === "whatsapp" ? WHATSAPP_ROUTES : ROUTES

  return (
    <section className={`${bg} py-[70px]`}>
      <div className={container}>
        <h2 className="mb-8 text-center text-[26px] font-semibold text-vita-blue md:text-[30px]">
          {title}
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {keys.map((key) => (
            <a
              key={key}
              href={paths[key]}
              className={`rounded-2xl border border-vita-blue/10 ${cardBg} p-5 transition hover:border-vita-blue/25 hover:shadow-[0_8px_24px_rgba(0,109,196,0.08)]`}
            >
              <h3 className="text-base font-semibold text-vita-blue">
                {CLUSTER_LINKS[key].label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-vita-text-mid">
                {CLUSTER_LINKS[key].description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
