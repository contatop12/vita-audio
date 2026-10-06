import { Suspense, lazy, useEffect, type ComponentType, type LazyExoticComponent } from "react"
import {
  Section01TopBar,
  Section12Footer,
  Section13WhatsAppFloat,
} from "./components"
import {
  LEGAL_ROUTES,
  ROUTES,
  isObrigadoPath,
  normalizePathname,
  resolveRoutePath,
  retiredWhatsappTarget,
} from "./constants/paths"
import { ObrigadoPage } from "./pages/ObrigadoPage"
import { CookieBanner } from "./components/CookieBanner"
import { WHATSAPP_LANDING_URL } from "./constants/site"

/**
 * O conteúdo de cada rota vira um chunk próprio: quem cai numa landing page
 * baixa apenas o texto dela, e não o das outras rotas.
 *
 * O `import()` é disparado no escopo do módulo (ver `routeLoader` abaixo), então
 * o chunk da rota desce em paralelo com o bootstrap do React em vez de esperar
 * o primeiro render — que é o custo habitual de `React.lazy`.
 */
type PageLoader = () => Promise<{ default: ComponentType }>

const named = <K extends string>(
  load: () => Promise<Record<K, ComponentType>>,
  key: K,
): PageLoader => () => load().then((m) => ({ default: m[key] }))

type RouteEntry = {
  load: PageLoader
  /** A audiometria é a única rota sem a barra de topo. */
  topBar?: boolean
}

const ROUTE_PAGES: Record<string, RouteEntry> = {
  [ROUTES.aparelhoAuditivo]: {
    load: named(() => import("./pages/AparelhoAuditivoPageWA"), "AparelhoAuditivoPageWA"),
  },
  [ROUTES.audiometria]: {
    load: named(() => import("./pages/AudiometriaPageWA"), "AudiometriaPageWA"),
    topBar: false,
  },
  [ROUTES.zumbido]: {
    load: named(() => import("./pages/ZumbidoPageWA"), "ZumbidoPageWA"),
  },
  [ROUTES.perdaAuditiva]: {
    load: named(() => import("./pages/PerdaAuditivaPageWA"), "PerdaAuditivaPageWA"),
  },
  [ROUTES.manutencao]: {
    load: named(() => import("./pages/ManutencaoPageWA"), "ManutencaoPageWA"),
  },
  [ROUTES.assistenciaTecnica]: {
    load: named(() => import("./pages/AssistenciaTecnicaPageWA"), "AssistenciaTecnicaPageWA"),
  },
  [ROUTES.preco]: {
    load: named(() => import("./pages/PrecoPage"), "PrecoPageWA"),
  },
  [ROUTES.discreto]: {
    load: named(() => import("./pages/DiscretoPage"), "DiscretoPageWA"),
  },
  [ROUTES.recarregavel]: {
    load: named(() => import("./pages/RecarregavelPage"), "RecarregavelPageWA"),
  },
  [ROUTES.melhorAparelho]: {
    load: named(() => import("./pages/MelhorAparelhoPage"), "MelhorAparelhoPageWA"),
  },
  [ROUTES.idosos]: {
    load: named(() => import("./pages/IdososPage"), "IdososPageWA"),
  },
  [ROUTES.starkey]: {
    load: named(() => import("./pages/StarkeyPage"), "StarkeyPageWA"),
  },
  [ROUTES.argosy]: {
    load: named(() => import("./pages/ArgosyPage"), "ArgosyPageWA"),
  },
  [ROUTES.rexton]: {
    load: named(() => import("./pages/RextonPage"), "RextonPageWA"),
  },
  [ROUTES.beltone]: {
    load: named(() => import("./pages/BeltonePage"), "BeltonePageWA"),
  },
  [ROUTES.coselgi]: {
    load: named(() => import("./pages/CoselgiPage"), "CoselgiPageWA"),
  },
  [ROUTES.interton]: {
    load: named(() => import("./pages/IntertonPage"), "IntertonPageWA"),
  },
  [ROUTES.centroAuditivo]: {
    load: named(() => import("./pages/CentroAuditivoPage"), "CentroAuditivoPageWA"),
  },
  [LEGAL_ROUTES.privacidade]: {
    load: named(() => import("./pages/PoliticaPrivacidadePage"), "PoliticaPrivacidadePage"),
  },
  [LEGAL_ROUTES.termos]: {
    load: named(() => import("./pages/TermosDeUsoPage"), "TermosDeUsoPage"),
  },
}

const pathname = normalizePathname(window.location.pathname)
const route = ROUTE_PAGES[pathname] ?? ROUTE_PAGES[ROUTES.aparelhoAuditivo]

/**
 * Dispara o download do chunk agora, ainda durante a avaliação do módulo.
 * `lazy` reaproveita a mesma promise no primeiro render.
 */
const routeLoader = route.load()
const RoutePage: LazyExoticComponent<ComponentType> = lazy(() => routeLoader)

/** Reserva altura da primeira dobra para o chunk não causar layout shift. */
function RouteFallback() {
  return <div className="min-h-[620px] bg-[#eff4f9]" aria-hidden />
}

function RedirectTo({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to)
  }, [to])
  return null
}

export default function App() {
  const retiredWhatsapp = retiredWhatsappTarget(pathname)
  if (retiredWhatsapp) {
    return <RedirectTo to={retiredWhatsapp} />
  }

  if (isObrigadoPath(pathname)) {
    const backHref = resolveRoutePath(pathname) ?? ROUTES.aparelhoAuditivo
    return (
      <>
        <ObrigadoPage backHref={backHref} />
        <CookieBanner />
      </>
    )
  }

  return (
    <>
      {route.topBar === false ? null : <Section01TopBar ctaMode="whatsapp" />}
      <Suspense fallback={<RouteFallback />}>
        <RoutePage />
      </Suspense>
      <Section12Footer whatsappHref={WHATSAPP_LANDING_URL} />
      <Section13WhatsAppFloat ctaMode="whatsapp" />
      <CookieBanner />
    </>
  )
}
