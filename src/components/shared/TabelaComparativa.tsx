import { container } from "../../vita-tw"
import { CtaButton } from "./CtaButton"

export type ComparativoRow = {
  label: string
  /** Um valor por coluna, na mesma ordem de `columns`. */
  values: string[]
}

type TabelaComparativaProps = {
  title: string
  subtitle?: string
  columns: string[]
  rows: ComparativoRow[]
  note?: string
  ctaLabel?: string
  ctaMode?: "form" | "whatsapp"
  background?: "white" | "gray"
}

export function TabelaComparativa({
  title,
  subtitle,
  columns,
  rows,
  note,
  ctaLabel,
  ctaMode = "form",
  background = "white",
}: TabelaComparativaProps) {
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

        <div className="mt-10 hidden overflow-x-auto rounded-2xl border border-vita-blue/10 md:block">
          <table className="min-w-full border-collapse text-left text-sm">
            <thead className={cardBg}>
              <tr>
                <th className="px-4 py-3 font-semibold text-vita-blue">Característica</th>
                {columns.map((column) => (
                  <th key={column} className="px-4 py-3 font-semibold text-vita-blue">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-t border-vita-blue/10">
                  <th className="px-4 py-3 font-semibold text-vita-blue">{row.label}</th>
                  {row.values.map((value, index) => (
                    <td
                      key={`${row.label}-${columns[index] ?? index}`}
                      className="px-4 py-3 text-vita-text-mid"
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 space-y-4 md:hidden">
          {columns.map((column, columnIndex) => (
            <article
              key={column}
              className={`rounded-2xl border border-vita-blue/10 ${cardBg} p-5`}
            >
              <h3 className="text-base font-semibold text-vita-blue">{column}</h3>
              <dl className="mt-3 space-y-2 text-sm">
                {rows.map((row) => (
                  <div key={`${column}-${row.label}`}>
                    <dt className="font-semibold text-vita-blue">{row.label}</dt>
                    <dd className="text-vita-text-mid">{row.values[columnIndex]}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        {note ? (
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-vita-text-mid md:text-base">
            {note}
          </p>
        ) : null}
        {ctaLabel ? (
          <div className="mt-8 text-center">
            <CtaButton variant={ctaMode === "whatsapp" ? "whatsapp" : "formBrand"}>
              {ctaLabel}
            </CtaButton>
          </div>
        ) : null}
      </div>
    </section>
  )
}
