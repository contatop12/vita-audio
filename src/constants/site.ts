/** Links e contactos centralizados */
export const SITE_ORIGIN = "https://audicao.vitaaudio.com.br"
export const WHATSAPP_URL = "https://wa.me/5519991460270"
export const WHATSAPP_CHAT_URL = "https://wa.me/5519991460270"
export const WHATSAPP_GOOGLE_MESSAGE =
  "Olá, vim pelo google e gostaria de mais informações"
export const WHATSAPP_LANDING_URL = `${WHATSAPP_CHAT_URL}?text=${encodeURIComponent(WHATSAPP_GOOGLE_MESSAGE)}`
export const LEAD_WEBHOOK_URL =
  "https://n8n.sitespdoze.com.br/webhook/vita-audio-lp"
export const WHATSAPP_FOOTER_URL = WHATSAPP_CHAT_URL
export const PHONE_HREF = "tel:+5519991460270"
export const PHONE_DISPLAY = "(19) 99146-0270"
export const CALL_PHONE_DISPLAY = "(19) 99146-0270"
export const CALL_PHONE_HREF = "tel:+5519991460270"
export const WHATSAPP_DISPLAY = "(19) 99146-0270"
export const CONTACT_EMAIL = "contato@vitaaudio.com.br"
export const ADDRESS_LINE =
  "R. Tuiuti, 460 - Cidade Nova I, Indaiatuba - SP, 13339-010"

/** Linhas do endereço para exibição no rodapé (evita quebras feias no meio). */
export const ADDRESS_LINES = [
  "R. Tuiuti, 460 - Cidade Nova I",
  "Indaiatuba - SP, 13339-010",
] as const

/** Iframe do Google Maps (embed por endereço). Se o mapa não carregar, substitua pelo código “Incorporar mapa” da ficha do Google Meu Negócio. */
export const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(
  "R. Tuiuti, 460 - Cidade Nova I, Indaiatuba - SP, 13339-010",
)}&output=embed&z=16&hl=pt`
export const BUSINESS_HOURS = [
  { day: "segunda-feira", hours: "08:30–18:00" },
  { day: "terça-feira", hours: "08:30–18:00" },
  { day: "quarta-feira", hours: "08:30–18:00" },
  { day: "quinta-feira", hours: "08:30–18:00" },
  { day: "sexta-feira", hours: "08:30–18:00" },
  { day: "sábado", hours: "08:00–12:00" },
  { day: "domingo", hours: "Fechado" },
] as const

export const INSTAGRAM_URL = "https://www.instagram.com/vitaaudiobrasil/"
export const FACEBOOK_URL =
  "https://www.facebook.com/profile.php?id=61558805426979"

/** Crédito no rodapé — agência / desenvolvimento. */
export const P12_DIGITAL_SITE_URL = "https://sites.p12digital.com.br/"

/** Página de busca / ficha Google — use para “Ver todas as avaliações”. */
export const GOOGLE_BUSINESS_REVIEWS_URL =
  "https://www.google.com/maps?cid=2260851949204657781"

/** Resumo exibido no bloco — ajuste conforme o Google Meu Negócio. */
export const GOOGLE_REVIEWS_RATING = "5.0"
export const GOOGLE_REVIEWS_COUNT_LABEL = "72 avaliações"
