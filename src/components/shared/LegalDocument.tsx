import type { ReactNode } from "react"
import {
  ADDRESS_LINE,
  COMPANY_CNPJ,
  COMPANY_LEGAL_NAME,
  CONTACT_EMAIL,
  WHATSAPP_DISPLAY,
  WHATSAPP_LANDING_URL,
} from "../../constants/site"
import { container } from "../../vita-tw"

export type LegalSection = {
  /** Âncora usada pelo sumário (`#id`). */
  id: string
  title: string
  content: ReactNode
}

type LegalDocumentProps = {
  title: string
  /** Data da versão vigente, por extenso (ex.: “6 de outubro de 2026”). */
  updatedAt: string
  intro: ReactNode
  sections: LegalSection[]
  /** Link para o outro documento legal, no fim da página. */
  related: { label: string; href: string }
}

/** Tipografia do texto corrido — o conteúdo chega como JSX simples (p, ul, li, a, strong). */
const prose =
  "text-sm leading-relaxed text-vita-text-mid md:text-base text-pretty " +
  "[&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_li]:pl-1 " +
  "[&_li::marker]:text-vita-blue/60 [&_strong]:font-semibold [&_strong]:text-vita-text " +
  "[&_a]:font-medium [&_a]:text-vita-blue [&_a]:underline [&_a]:underline-offset-2 " +
  "[&_a:hover]:text-vita-blue-dark"

export function LegalDocument({ title, updatedAt, intro, sections, related }: LegalDocumentProps) {
  return (
    <main>
      <header className="bg-[#eff4f9] py-12 md:py-16">
        <div className={container}>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-vita-blue/70">
            Vita Audio
          </p>
          <h1 className="mt-2 text-[30px] font-semibold leading-tight text-vita-blue md:text-[40px]">
            {title}
          </h1>
          <p className="mt-3 text-sm text-vita-text-mid">Última atualização: {updatedAt}</p>
        </div>
      </header>

      <div className={`${container} py-12 md:py-16`}>
        <div className="lg:grid lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-14">
          <nav aria-label="Sumário" className="mb-10 lg:mb-0">
            <div className="rounded-xl border border-vita-blue/10 bg-vita-gray-bg p-5 lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
              <p className="mb-3 text-sm font-semibold text-vita-blue">Nesta página</p>
              <ol className="space-y-2 text-sm leading-snug text-vita-text-mid text-pretty">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="transition-colors hover:text-vita-blue"
                    >
                      {index + 1}. {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <article className="max-w-3xl">
            <div className={prose}>{intro}</div>

            {sections.map((section, index) => (
              <section key={section.id} id={section.id} className="mt-10 scroll-mt-28">
                <h2 className="text-lg font-semibold leading-snug text-vita-blue md:text-xl">
                  {index + 1}. {section.title}
                </h2>
                <div className={prose}>{section.content}</div>
              </section>
            ))}

            <p className="mt-12 rounded-xl border border-vita-blue/10 bg-vita-gray-bg p-5 text-sm text-vita-text-mid">
              Veja também:{" "}
              <a
                href={related.href}
                className="font-semibold text-vita-blue underline underline-offset-2 hover:text-vita-blue-dark"
              >
                {related.label}
              </a>
            </p>
          </article>
        </div>
      </div>
    </main>
  )
}

/** “Vita Audio”, acrescido de razão social e CNPJ quando informados em `site.ts`. */
export function LegalEntity() {
  return (
    <>
      <strong>Vita Audio</strong>
      {COMPANY_LEGAL_NAME ? ` (${COMPANY_LEGAL_NAME})` : null}
      {COMPANY_CNPJ ? `, inscrita no CNPJ sob o nº ${COMPANY_CNPJ}` : null}
    </>
  )
}

/** Canais de contato repetidos no fim dos dois documentos. */
export function LegalContact() {
  return (
    <ul>
      <li>
        E-mail: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </li>
      <li>
        WhatsApp:{" "}
        <a href={WHATSAPP_LANDING_URL} target="_blank" rel="noreferrer">
          {WHATSAPP_DISPLAY}
        </a>
      </li>
      <li>Endereço: {ADDRESS_LINE}</li>
    </ul>
  )
}
