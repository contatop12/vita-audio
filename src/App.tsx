import { useMemo } from "react"
import {
  Section01TopBar,
  Section12Footer,
  Section13WhatsAppFloat,
} from "./components"
import { PAGE_SEO } from "./constants/seo"
import {
  ROUTES,
  isObrigadoPath,
  normalizePathname,
  resolveRoutePath,
} from "./constants/paths"
import { usePageMeta } from "./hooks/usePageMeta"
import { AparelhoAuditivoPage } from "./pages/AparelhoAuditivoPage"
import { AudiometriaPage } from "./pages/AudiometriaPage"
import { ObrigadoPage } from "./pages/ObrigadoPage"
import { PerdaAuditivaPage } from "./pages/PerdaAuditivaPage"
import { ZumbidoPage } from "./pages/ZumbidoPage"

function UnknownRoutePage() {
  usePageMeta(PAGE_SEO.aparelhoAuditivo)
  return <AparelhoAuditivoPage />
}

export default function App() {
  const pathname = useMemo(() => normalizePathname(window.location.pathname), [])

  if (isObrigadoPath(pathname)) {
    const backHref = resolveRoutePath(pathname) ?? ROUTES.aparelhoAuditivo
    return <ObrigadoPage backHref={backHref} />
  }

  switch (pathname) {
    case ROUTES.aparelhoAuditivo:
      return (
        <>
          <Section01TopBar />
          <AparelhoAuditivoPage />
          <Section12Footer />
          <Section13WhatsAppFloat />
        </>
      )
    case ROUTES.audiometria:
      return (
        <>
          <Section01TopBar />
          <AudiometriaPage />
          <Section12Footer />
          <Section13WhatsAppFloat />
        </>
      )
    case ROUTES.zumbido:
      return (
        <>
          <Section01TopBar />
          <ZumbidoPage />
          <Section12Footer />
          <Section13WhatsAppFloat />
        </>
      )
    case ROUTES.perdaAuditiva:
      return (
        <>
          <Section01TopBar />
          <PerdaAuditivaPage />
          <Section12Footer />
          <Section13WhatsAppFloat />
        </>
      )
    default:
      return (
        <>
          <Section01TopBar />
          <UnknownRoutePage />
          <Section12Footer />
          <Section13WhatsAppFloat />
        </>
      )
  }
}
