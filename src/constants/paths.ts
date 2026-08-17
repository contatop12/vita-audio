/** Caminho do site sem barra final (ex.: /aparelho-auditivo). */
export const SITE_BASE_PATH = import.meta.env.BASE_URL.replace(/\/+$/, "")

export const ROUTES = {
  aparelhoAuditivo: "/aparelho-auditivo",
  audiometria: "/audiometria",
  zumbido: "/zumbido-no-ouvido",
  perdaAuditiva: "/perda-auditiva",
  manutencao: "/manutencao-de-aparelho-auditivo",
  assistenciaTecnica: "/assistencia-tecnica-aparelho-auditivo",
  preco: "/aparelho-auditivo-preco",
  discreto: "/aparelho-auditivo-discreto",
  recarregavel: "/aparelho-auditivo-recarregavel",
  melhorAparelho: "/melhor-aparelho-auditivo",
  idosos: "/aparelho-auditivo-para-idosos",
  starkey: "/aparelho-auditivo-starkey",
  argosy: "/aparelho-auditivo-argosy",
} as const

export const WHATSAPP_ROUTES = {
  aparelhoAuditivo: "/aparelho-auditivo/whatsapp",
  audiometria: "/audiometria/whatsapp",
  zumbido: "/zumbido-no-ouvido/whatsapp",
  perdaAuditiva: "/perda-auditiva/whatsapp",
  manutencao: "/manutencao-de-aparelho-auditivo/whatsapp",
  assistenciaTecnica: "/assistencia-tecnica-aparelho-auditivo/whatsapp",
  preco: "/aparelho-auditivo-preco/whatsapp",
  discreto: "/aparelho-auditivo-discreto/whatsapp",
  recarregavel: "/aparelho-auditivo-recarregavel/whatsapp",
  melhorAparelho: "/melhor-aparelho-auditivo/whatsapp",
  idosos: "/aparelho-auditivo-para-idosos/whatsapp",
  starkey: "/aparelho-auditivo-starkey/whatsapp",
  argosy: "/aparelho-auditivo-argosy/whatsapp",
} as const

export type RouteKey = keyof typeof ROUTES

/**
 * Serviços exibidos no bloco “Outros serviços da Vita Audio”.
 * As rotas do cluster comercial de aparelhos ficam de fora — elas são
 * interligadas pelo bloco `PaginasRelacionadas`.
 */
export const SERVICE_ROUTE_KEYS = [
  "aparelhoAuditivo",
  "audiometria",
  "zumbido",
  "perdaAuditiva",
  "manutencao",
  "assistenciaTecnica",
] as const

export type ServiceRouteKey = (typeof SERVICE_ROUTE_KEYS)[number]

export const OBRIGADO_PATH = `${SITE_BASE_PATH}/obrigado`

export function normalizePathname(pathname: string): string {
  return pathname.replace(/\/+$/, "") || "/"
}

export function isObrigadoPath(pathname: string): boolean {
  return normalizePathname(pathname).endsWith("/obrigado")
}

export function obrigadoPathForRoute(routePath: string): string {
  return `${normalizePathname(routePath)}/obrigado`
}

export function getRouteKeyFromPath(pathname: string): RouteKey | null {
  const normalized = normalizePathname(pathname)
  const entry = Object.entries(ROUTES).find(([, path]) => path === normalized)
  return entry ? (entry[0] as RouteKey) : null
}

export function resolveRoutePath(pathname: string): string | null {
  const normalized = normalizePathname(pathname)
  if (isObrigadoPath(normalized)) {
    return normalizePathname(normalized.replace(/\/obrigado$/, ""))
  }
  return Object.values(ROUTES).includes(normalized as (typeof ROUTES)[RouteKey])
    ? normalized
    : null
}
