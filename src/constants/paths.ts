/** Caminho do site sem barra final (ex.: /aparelho-auditivo). */
export const SITE_BASE_PATH = import.meta.env.BASE_URL.replace(/\/+$/, "")

export const ROUTES = {
  aparelhoAuditivo: "/aparelho-auditivo",
  audiometria: "/audiometria",
  zumbido: "/zumbido-no-ouvido",
  perdaAuditiva: "/perda-auditiva",
} as const

export type RouteKey = keyof typeof ROUTES

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
