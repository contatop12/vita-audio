import { Clock, MapPin, Navigation, Phone } from "lucide-react"
import {
  ADDRESS_LINE,
  ADDRESS_LINES,
  BUSINESS_HOURS,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "../../constants/site"
import { btnOutline, container } from "../../vita-tw"

/**
 * O rodapé já embute o mapa do Google em iframe. Aqui usamos um link de rota
 * em vez de um segundo embed: dois iframes do Maps na mesma página custariam
 * caro no carregamento sem acrescentar informação.
 */
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  ADDRESS_LINE,
)}`

type OndeEstamosProps = {
  title?: string
  subtitle?: string
  /** Cidades atendidas além de Indaiatuba. */
  regiao?: string[]
  background?: "white" | "gray"
}

export function OndeEstamos({
  title = "Onde fica o centro auditivo",
  subtitle,
  regiao,
  background = "gray",
}: OndeEstamosProps) {
  const bg = background === "gray" ? "bg-vita-gray-bg" : "bg-white"
  const cardBg = background === "gray" ? "bg-white" : "bg-vita-gray-bg"

  return (
    <section className={`${bg} py-[70px]`}>
      <div className={container}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[26px] font-semibold leading-snug text-vita-blue md:text-[30px]">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-3 text-sm leading-relaxed text-vita-text-mid md:text-base">
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          <article className={`rounded-2xl border border-vita-blue/10 ${cardBg} p-6`}>
            <MapPin className="mb-3 size-6 text-vita-blue" aria-hidden />
            <h3 className="text-base font-semibold text-vita-blue">Endereço</h3>
            <address className="mt-2 text-sm not-italic leading-relaxed text-vita-text-mid">
              {ADDRESS_LINES.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-vita-blue underline underline-offset-4"
            >
              <Navigation className="size-4" aria-hidden />
              Traçar rota até a clínica
            </a>
          </article>

          <article className={`rounded-2xl border border-vita-blue/10 ${cardBg} p-6`}>
            <Clock className="mb-3 size-6 text-vita-blue" aria-hidden />
            <h3 className="text-base font-semibold text-vita-blue">Horário de atendimento</h3>
            <dl className="mt-2 space-y-1 text-sm leading-relaxed text-vita-text-mid">
              {BUSINESS_HOURS.map((item) => (
                <div key={item.day} className="flex justify-between gap-3">
                  <dt className="capitalize">{item.day}</dt>
                  <dd className="shrink-0 font-medium">{item.hours}</dd>
                </div>
              ))}
            </dl>
          </article>

          <article className={`rounded-2xl border border-vita-blue/10 ${cardBg} p-6`}>
            <Phone className="mb-3 size-6 text-vita-blue" aria-hidden />
            <h3 className="text-base font-semibold text-vita-blue">Atendimento</h3>
            <p className="mt-2 text-sm leading-relaxed text-vita-text-mid">
              Agende pelo WhatsApp ou ligue para{" "}
              <a href={PHONE_HREF} className="font-semibold text-vita-blue underline underline-offset-4">
                {PHONE_DISPLAY}
              </a>
              .
            </p>
            {regiao?.length ? (
              <>
                <h4 className="mt-5 text-sm font-semibold text-vita-blue">
                  Também atendemos pacientes de
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-vita-text-mid">
                  {regiao.join(" · ")}
                </p>
              </>
            ) : null}
          </article>
        </div>

        <div className="mt-8 text-center">
          <a href={DIRECTIONS_URL} target="_blank" rel="noreferrer" className={btnOutline}>
            Ver no Google Maps
          </a>
        </div>
      </div>
    </section>
  )
}
