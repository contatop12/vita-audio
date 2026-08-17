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
import { AssistenciaTecnicaPage } from "./pages/AssistenciaTecnicaPage"
import { AssistenciaTecnicaPageWA } from "./pages/AssistenciaTecnicaPageWA"
import { AudiometriaPage } from "./pages/AudiometriaPage"
import { AudiometriaPageWA } from "./pages/AudiometriaPageWA"
import { ManutencaoPage } from "./pages/ManutencaoPage"
import { ManutencaoPageWA } from "./pages/ManutencaoPageWA"
import { ObrigadoPage } from "./pages/ObrigadoPage"
import { PerdaAuditivaPage } from "./pages/PerdaAuditivaPage"
import { PerdaAuditivaPageWA } from "./pages/PerdaAuditivaPageWA"
import { ZumbidoPage } from "./pages/ZumbidoPage"
import { ZumbidoPageWA } from "./pages/ZumbidoPageWA"
import { PrecoPage, PrecoPageWA } from "./pages/PrecoPage"
import { DiscretoPage, DiscretoPageWA } from "./pages/DiscretoPage"
import { RecarregavelPage, RecarregavelPageWA } from "./pages/RecarregavelPage"
import { MelhorAparelhoPage, MelhorAparelhoPageWA } from "./pages/MelhorAparelhoPage"
import { IdososPage, IdososPageWA } from "./pages/IdososPage"
import { StarkeyPage, StarkeyPageWA } from "./pages/StarkeyPage"
import { ArgosyPage, ArgosyPageWA } from "./pages/ArgosyPage"
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
    case ROUTES.manutencao:
      return (
        <>
          <Section01TopBar />
          <ManutencaoPage />
          <Section12Footer />
          <Section13WhatsAppFloat />
          <CookieBanner />
        </>
      )
    case ROUTES.assistenciaTecnica:
      return (
        <>
          <Section01TopBar />
          <AssistenciaTecnicaPage />
          <Section12Footer />
          <Section13WhatsAppFloat />
          <CookieBanner />
        </>
      )
    case ROUTES.preco:
      return (
        <>
          <Section01TopBar />
          <PrecoPage />
          <Section12Footer />
          <Section13WhatsAppFloat />
          <CookieBanner />
        </>
      )
    case ROUTES.discreto:
      return (
        <>
          <Section01TopBar />
          <DiscretoPage />
          <Section12Footer />
          <Section13WhatsAppFloat />
          <CookieBanner />
        </>
      )
    case ROUTES.recarregavel:
      return (
        <>
          <Section01TopBar />
          <RecarregavelPage />
          <Section12Footer />
          <Section13WhatsAppFloat />
          <CookieBanner />
        </>
      )
    case ROUTES.melhorAparelho:
      return (
        <>
          <Section01TopBar />
          <MelhorAparelhoPage />
          <Section12Footer />
          <Section13WhatsAppFloat />
          <CookieBanner />
        </>
      )
    case ROUTES.idosos:
      return (
        <>
          <Section01TopBar />
          <IdososPage />
          <Section12Footer />
          <Section13WhatsAppFloat />
          <CookieBanner />
        </>
      )
    case ROUTES.starkey:
      return (
        <>
          <Section01TopBar />
          <StarkeyPage />
          <Section12Footer />
          <Section13WhatsAppFloat />
          <CookieBanner />
        </>
      )
    case ROUTES.argosy:
      return (
        <>
          <Section01TopBar />
          <ArgosyPage />
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
    case WHATSAPP_ROUTES.manutencao:
      return (
        <>
          <Section01TopBar ctaMode="whatsapp" />
          <ManutencaoPageWA />
          <Section12Footer whatsappHref={WHATSAPP_LANDING_URL} />
          <Section13WhatsAppFloat ctaMode="whatsapp" />
          <CookieBanner />
        </>
      )
    case WHATSAPP_ROUTES.assistenciaTecnica:
      return (
        <>
          <Section01TopBar ctaMode="whatsapp" />
          <AssistenciaTecnicaPageWA />
          <Section12Footer whatsappHref={WHATSAPP_LANDING_URL} />
          <Section13WhatsAppFloat ctaMode="whatsapp" />
          <CookieBanner />
        </>
      )
    case WHATSAPP_ROUTES.preco:
      return (
        <>
          <Section01TopBar ctaMode="whatsapp" />
          <PrecoPageWA />
          <Section12Footer whatsappHref={WHATSAPP_LANDING_URL} />
          <Section13WhatsAppFloat ctaMode="whatsapp" />
          <CookieBanner />
        </>
      )
    case WHATSAPP_ROUTES.discreto:
      return (
        <>
          <Section01TopBar ctaMode="whatsapp" />
          <DiscretoPageWA />
          <Section12Footer whatsappHref={WHATSAPP_LANDING_URL} />
          <Section13WhatsAppFloat ctaMode="whatsapp" />
          <CookieBanner />
        </>
      )
    case WHATSAPP_ROUTES.recarregavel:
      return (
        <>
          <Section01TopBar ctaMode="whatsapp" />
          <RecarregavelPageWA />
          <Section12Footer whatsappHref={WHATSAPP_LANDING_URL} />
          <Section13WhatsAppFloat ctaMode="whatsapp" />
          <CookieBanner />
        </>
      )
    case WHATSAPP_ROUTES.melhorAparelho:
      return (
        <>
          <Section01TopBar ctaMode="whatsapp" />
          <MelhorAparelhoPageWA />
          <Section12Footer whatsappHref={WHATSAPP_LANDING_URL} />
          <Section13WhatsAppFloat ctaMode="whatsapp" />
          <CookieBanner />
        </>
      )
    case WHATSAPP_ROUTES.idosos:
      return (
        <>
          <Section01TopBar ctaMode="whatsapp" />
          <IdososPageWA />
          <Section12Footer whatsappHref={WHATSAPP_LANDING_URL} />
          <Section13WhatsAppFloat ctaMode="whatsapp" />
          <CookieBanner />
        </>
      )
    case WHATSAPP_ROUTES.starkey:
      return (
        <>
          <Section01TopBar ctaMode="whatsapp" />
          <StarkeyPageWA />
          <Section12Footer whatsappHref={WHATSAPP_LANDING_URL} />
          <Section13WhatsAppFloat ctaMode="whatsapp" />
          <CookieBanner />
        </>
      )
    case WHATSAPP_ROUTES.argosy:
      return (
        <>
          <Section01TopBar ctaMode="whatsapp" />
          <ArgosyPageWA />
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
