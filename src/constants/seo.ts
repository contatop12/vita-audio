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
  manutencao: {
    title: "Manutenção de Aparelho Auditivo em Indaiatuba | Vita Audio",
    description:
      "Manutenção de aparelho auditivo em Indaiatuba: limpeza técnica, troca de filtros e tubos, reajuste e revisão completa. Atendemos todas as marcas. Agende!",
  },
  assistenciaTecnica: {
    title: "Assistência Técnica para Aparelho Auditivo em Indaiatuba | Vita Audio",
    description:
      "Assistência técnica para aparelho auditivo em Indaiatuba. Diagnóstico, reparo e troca de peças de todas as marcas, com orçamento aprovado antes. Agende!",
  },
  preco: {
    title: "Aparelho Auditivo: Preços e Valores | Vita Audio Indaiatuba",
    description:
      "Quer saber quanto custa um aparelho auditivo? Conheça os fatores que influenciam o preço, modelos disponíveis e encontre a opção ideal com a Vita Audio em Indaiatuba.",
  },
  discreto: {
    title: "Aparelho Auditivo Discreto e Pequeno | Vita Audio Indaiatuba",
    description:
      "Conheça opções de aparelhos auditivos pequenos e discretos. Encontre o modelo ideal para sua audição, rotina e preferências com a Vita Audio em Indaiatuba.",
  },
  recarregavel: {
    title: "Aparelho Auditivo Recarregável e Bluetooth | Vita Audio Indaiatuba",
    description:
      "Conheça aparelhos auditivos recarregáveis, modernos e com Bluetooth. Mais praticidade e tecnologia para o dia a dia com a Vita Audio em Indaiatuba.",
  },
  melhorAparelho: {
    title: "Qual o Melhor Aparelho Auditivo? Veja Modelos | Vita Audio",
    description:
      "Descubra como escolher o melhor aparelho auditivo para suas necessidades. Compare modelos, tecnologias e recursos com orientação especializada da Vita Audio em Indaiatuba.",
  },
  idosos: {
    title: "Aparelho Auditivo para Idosos | Vita Audio Indaiatuba",
    description:
      "Procura aparelho auditivo para idosos? Conheça modelos, tecnologias e opções fáceis de usar com acompanhamento de fonoaudiólogas especializadas em Indaiatuba.",
  },
  starkey: {
    title: "Aparelhos Auditivos Starkey: Modelos e Preços | Vita Audio",
    description:
      "Conheça aparelhos auditivos Starkey Genesis AI e Evolv AI, tecnologias, modelos e preços. Atendimento especializado na Vita Audio em Indaiatuba.",
  },
  argosy: {
    title: "Aparelhos Auditivos Argosy: Preços e Modelos | Vita Audio",
    description:
      "Conheça aparelhos auditivos Argosy Vista V e Vista B, modelos, tecnologias e preços. Atendimento especializado na Vita Audio em Indaiatuba.",
  },
}

export function getSeoForPath(pathname: string): PageSeo {
  const routeKey = getRouteKeyFromPath(pathname)
  return routeKey ? PAGE_SEO[routeKey] : PAGE_SEO.aparelhoAuditivo
}
