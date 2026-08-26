import { useEffect, useMemo } from "react"
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
  retiredWhatsappTarget,
} from "./constants/paths"
import { usePageMeta } from "./hooks/usePageMeta"
import { AparelhoAuditivoPage } from "./pages/AparelhoAuditivoPage"
import { AparelhoAuditivoPageWA } from "./pages/AparelhoAuditivoPageWA"
import { AssistenciaTecnicaPageWA } from "./pages/AssistenciaTecnicaPageWA"
import { AudiometriaPageWA } from "./pages/AudiometriaPageWA"
import { ManutencaoPageWA } from "./pages/ManutencaoPageWA"
import { ObrigadoPage } from "./pages/ObrigadoPage"
import { PerdaAuditivaPageWA } from "./pages/PerdaAuditivaPageWA"
import { ZumbidoPageWA } from "./pages/ZumbidoPageWA"
import { PrecoPageWA } from "./pages/PrecoPage"
import { DiscretoPageWA } from "./pages/DiscretoPage"
import { RecarregavelPageWA } from "./pages/RecarregavelPage"
import { MelhorAparelhoPageWA } from "./pages/MelhorAparelhoPage"
import { IdososPageWA } from "./pages/IdososPage"
import { StarkeyPageWA } from "./pages/StarkeyPage"
import { ArgosyPageWA } from "./pages/ArgosyPage"
import { RextonPageWA } from "./pages/RextonPage"
import { BeltonePageWA } from "./pages/BeltonePage"
import { CoselgiPageWA } from "./pages/CoselgiPage"
import { IntertonPageWA } from "./pages/IntertonPage"
import { CookieBanner } from "./components/CookieBanner"
import { WHATSAPP_LANDING_URL } from "./constants/site"

function RedirectTo({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to)
  }, [to])
  return null
}

function UnknownRoutePage() {
  usePageMeta(PAGE_SEO.aparelhoAuditivo)
  return <AparelhoAuditivoPage />
}

export default function App() {
  const pathname = useMemo(() => normalizePathname(window.location.pathname), [])

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
          <AudiometriaPageWA />
          <Section12Footer whatsappHref={WHATSAPP_LANDING_URL} />
          <Section13WhatsAppFloat ctaMode="whatsapp" />
          <CookieBanner />
        </>
      )
    case ROUTES.zumbido:
      return (
        <>
          <Section01TopBar ctaMode="whatsapp" />
          <ZumbidoPageWA />
          <Section12Footer whatsappHref={WHATSAPP_LANDING_URL} />
          <Section13WhatsAppFloat ctaMode="whatsapp" />
          <CookieBanner />
        </>
      )
    case ROUTES.perdaAuditiva:
      return (
        <>
          <Section01TopBar ctaMode="whatsapp" />
          <PerdaAuditivaPageWA />
          <Section12Footer whatsappHref={WHATSAPP_LANDING_URL} />
          <Section13WhatsAppFloat ctaMode="whatsapp" />
          <CookieBanner />
        </>
      )
    case ROUTES.manutencao:
      return (
        <>
          <Section01TopBar ctaMode="whatsapp" />
          <ManutencaoPageWA />
          <Section12Footer whatsappHref={WHATSAPP_LANDING_URL} />
          <Section13WhatsAppFloat ctaMode="whatsapp" />
          <CookieBanner />
        </>
      )
    case ROUTES.assistenciaTecnica:
      return (
        <>
          <Section01TopBar ctaMode="whatsapp" />
          <AssistenciaTecnicaPageWA />
          <Section12Footer whatsappHref={WHATSAPP_LANDING_URL} />
          <Section13WhatsAppFloat ctaMode="whatsapp" />
          <CookieBanner />
        </>
      )
    case ROUTES.preco:
      return (
        <>
          <Section01TopBar ctaMode="whatsapp" />
          <PrecoPageWA />
          <Section12Footer whatsappHref={WHATSAPP_LANDING_URL} />
          <Section13WhatsAppFloat ctaMode="whatsapp" />
          <CookieBanner />
        </>
      )
    case ROUTES.discreto:
      return (
        <>
          <Section01TopBar ctaMode="whatsapp" />
          <DiscretoPageWA />
          <Section12Footer whatsappHref={WHATSAPP_LANDING_URL} />
          <Section13WhatsAppFloat ctaMode="whatsapp" />
          <CookieBanner />
        </>
      )
    case ROUTES.recarregavel:
      return (
        <>
          <Section01TopBar ctaMode="whatsapp" />
          <RecarregavelPageWA />
          <Section12Footer whatsappHref={WHATSAPP_LANDING_URL} />
          <Section13WhatsAppFloat ctaMode="whatsapp" />
          <CookieBanner />
        </>
      )
    case ROUTES.melhorAparelho:
      return (
        <>
          <Section01TopBar ctaMode="whatsapp" />
          <MelhorAparelhoPageWA />
          <Section12Footer whatsappHref={WHATSAPP_LANDING_URL} />
          <Section13WhatsAppFloat ctaMode="whatsapp" />
          <CookieBanner />
        </>
      )
    case ROUTES.idosos:
      return (
        <>
          <Section01TopBar ctaMode="whatsapp" />
          <IdososPageWA />
          <Section12Footer whatsappHref={WHATSAPP_LANDING_URL} />
          <Section13WhatsAppFloat ctaMode="whatsapp" />
          <CookieBanner />
        </>
      )
    case ROUTES.starkey:
      return (
        <>
          <Section01TopBar ctaMode="whatsapp" />
          <StarkeyPageWA />
          <Section12Footer whatsappHref={WHATSAPP_LANDING_URL} />
          <Section13WhatsAppFloat ctaMode="whatsapp" />
          <CookieBanner />
        </>
      )
    case ROUTES.argosy:
      return (
        <>
          <Section01TopBar ctaMode="whatsapp" />
          <ArgosyPageWA />
          <Section12Footer whatsappHref={WHATSAPP_LANDING_URL} />
          <Section13WhatsAppFloat ctaMode="whatsapp" />
          <CookieBanner />
        </>
      )
    case ROUTES.rexton:
      return (
        <>
          <Section01TopBar ctaMode="whatsapp" />
          <RextonPageWA />
          <Section12Footer whatsappHref={WHATSAPP_LANDING_URL} />
          <Section13WhatsAppFloat ctaMode="whatsapp" />
          <CookieBanner />
        </>
      )
    case ROUTES.beltone:
      return (
        <>
          <Section01TopBar ctaMode="whatsapp" />
          <BeltonePageWA />
          <Section12Footer whatsappHref={WHATSAPP_LANDING_URL} />
          <Section13WhatsAppFloat ctaMode="whatsapp" />
          <CookieBanner />
        </>
      )
    case ROUTES.coselgi:
      return (
        <>
          <Section01TopBar ctaMode="whatsapp" />
          <CoselgiPageWA />
          <Section12Footer whatsappHref={WHATSAPP_LANDING_URL} />
          <Section13WhatsAppFloat ctaMode="whatsapp" />
          <CookieBanner />
        </>
      )
    case ROUTES.interton:
      return (
        <>
          <Section01TopBar ctaMode="whatsapp" />
          <IntertonPageWA />
          <Section12Footer whatsappHref={WHATSAPP_LANDING_URL} />
          <Section13WhatsAppFloat ctaMode="whatsapp" />
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
