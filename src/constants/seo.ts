import { type RouteKey, getRouteKeyFromPath } from "./paths"

export type PageSeo = {
  title: string
  description: string
}

export const PAGE_SEO: Record<RouteKey, PageSeo> = {
  aparelhoAuditivo: {
    title: "Aparelho Auditivo em Indaiatuba | Vita Audio",
    description:
      "Diagnóstico completo e adaptação de aparelho auditivo em Indaiatuba. Fonoaudiólogos especializados, marcas reconhecidas e atendimento humanizado. Agende agora!",
  },
  audiometria: {
    title: "Audiometria em Indaiatuba | Vita Audio",
    description:
      "Realize sua audiometria em Indaiatuba com fonoaudiólogos especializados. Indicada para dificuldade de ouvir e zumbido. Agende agora na Vita Audio!",
  },
  zumbido: {
    title: "Tratamento para Zumbido no Ouvido em Indaiatuba | Vita Audio",
    description:
      "Sofre com zumbido, apito ou chiado no ouvido? A Vita Audio oferece diagnóstico e tratamento completo em Indaiatuba. Agende sua avaliação!",
  },
  perdaAuditiva: {
    title: "Perda Auditiva em Indaiatuba: Diagnóstico e Tratamento | Vita Audio",
    description:
      "Com dificuldade para ouvir? A Vita Audio oferece diagnóstico completo e adaptação de aparelho auditivo em Indaiatuba. Agende sua avaliação!",
  },
}

export function getSeoForPath(pathname: string): PageSeo {
  const routeKey = getRouteKeyFromPath(pathname)
  return routeKey ? PAGE_SEO[routeKey] : PAGE_SEO.aparelhoAuditivo
}
