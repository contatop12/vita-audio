import { useMemo } from "react"
import {
  Section01TopBar,
  Section12Footer,
  Section13WhatsAppFloat,
} from "./components"
import { PAGE_SEO } from "./constants/seo"
import {
  ROUTES,
  WHATSAPP_ROUTES,
  isObrigadoPath,
  normalizePathname,
  resolveRoutePath,
} from "./constants/paths"
import { usePageMeta } from "./hooks/usePageMeta"
import { AparelhoAuditivoPage } from "./pages/AparelhoAuditivoPage"
import { AparelhoAuditivoPageWA } from "./pages/AparelhoAuditivoPageWA"
import { AudiometriaPage } from "./pages/AudiometriaPage"
import { AudiometriaPageWA } from "./pages/AudiometriaPageWA"
import { ObrigadoPage } from "./pages/ObrigadoPage"
import { PerdaAuditivaPage } from "./pages/PerdaAuditivaPage"
import { PerdaAuditivaPageWA } from "./pages/PerdaAuditivaPageWA"
import { ZumbidoPage } from "./pages/ZumbidoPage"
import { ZumbidoPageWA } from "./pages/ZumbidoPageWA"
import { CookieBanner } from "./components/CookieBanner"
import { WHATSAPP_LANDING_URL } from "./constants/site"

function UnknownRoutePage() {
  usePageMeta(PAGE_SEO.aparelhoAuditivo)
  return <AparelhoAuditivoPage />
}

export default function App() {
  const pathname = useMemo(() => normalizePathname(window.location.pathname), [])

  if (isObrigadoPath(pathname)) {
    const backHref = resolveRoutePath(pathname) ?? ROUTES.aparelhoAuditivo
    return (
      <>
        <ObrigadoPage backHref={backHref} />
        <CookieBanner />
      </>
    )
  }

  switch (pathname) {
    case ROUTES.aparelhoAuditivo:
      return (
        <>
          <Section01TopBar />
          <AparelhoAuditivoPage />
          <Section12Footer />
          <Section13WhatsAppFloat />
          <CookieBanner />
        </>
      )
    case ROUTES.audiometria:
      return (
        <>
          <AudiometriaPage />
          <Section12Footer />
          <Section13WhatsAppFloat />
          <CookieBanner />
        </>
      )
    case ROUTES.zumbido:
      return (
        <>
          <Section01TopBar />
          <ZumbidoPage />
          <Section12Footer />
          <Section13WhatsAppFloat />
          <CookieBanner />
        </>
      )
    case ROUTES.perdaAuditiva:
      return (
        <>
          <Section01TopBar />
          <PerdaAuditivaPage />
          <Section12Footer />
          <Section13WhatsAppFloat />
          <CookieBanner />
        </>
      )
    case WHATSAPP_ROUTES.aparelhoAuditivo:
      return (
        <>
          <Section01TopBar ctaMode="whatsapp" />
          <AparelhoAuditivoPageWA />
          <Section12Footer whatsappHref={WHATSAPP_LANDING_URL} />
          <Section13WhatsAppFloat ctaMode="whatsapp" />
          <CookieBanner />
        </>
      )
    case WHATSAPP_ROUTES.audiometria:
      return (
        <>
          <AudiometriaPageWA />
          <Section12Footer whatsappHref={WHATSAPP_LANDING_URL} />
          <Section13WhatsAppFloat ctaMode="whatsapp" />
          <CookieBanner />
        </>
      )
    case WHATSAPP_ROUTES.zumbido:
      return (
        <>
          <Section01TopBar ctaMode="whatsapp" />
          <ZumbidoPageWA />
          <Section12Footer whatsappHref={WHATSAPP_LANDING_URL} />
          <Section13WhatsAppFloat ctaMode="whatsapp" />
          <CookieBanner />
        </>
      )
    case WHATSAPP_ROUTES.perdaAuditiva:
      return (
        <>
          <Section01TopBar ctaMode="whatsapp" />
          <PerdaAuditivaPageWA />
          <Section12Footer whatsappHref={WHATSAPP_LANDING_URL} />
          <Section13WhatsAppFloat ctaMode="whatsapp" />
          <CookieBanner />
        </>
      )
    default:
      return (
        <>
          <Section01TopBar />
          <UnknownRoutePage />
          <Section12Footer />
          <Section13WhatsAppFloat />
          <CookieBanner />
        </>
      )
  }
}
