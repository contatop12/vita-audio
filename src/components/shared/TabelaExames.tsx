import { container } from "../../vita-tw"

type ExamColumn = {
  name: string
  avalia: string
  indicado: string
  duracao: string
  doloroso: string
  preparo: string
}

const EXAMS: ExamColumn[] = [
  {
    name: "Audiometria Tonal",
    avalia: "Sensibilidade auditiva por frequência",
    indicado: "Dificuldade de ouvir, zumbido",
    duracao: "~20 minutos",
    doloroso: "Não",
    preparo: "Não",
  },
  {
    name: "Audiometria Vocal",
    avalia: "Compreensão da fala",
    indicado: "Dificuldade de entender conversas",
    duracao: "~15 minutos",
    doloroso: "Não",
    preparo: "Não",
  },
  {
    name: "Imitanciometria",
    avalia: "Funcionamento do ouvido médio",
    indicado: "Ouvido tampado, otites, pressão",
    duracao: "~10 minutos",
    doloroso: "Não",
    preparo: "Não",
  },
]

const ROWS: { label: string; key: keyof Omit<ExamColumn, "name"> }[] = [
  { label: "O que avalia", key: "avalia" },
  { label: "Indicado para", key: "indicado" },
  { label: "Duração", key: "duracao" },
  { label: "É doloroso?", key: "doloroso" },
  { label: "Precisa de preparo?", key: "preparo" },
]

export function TabelaExames() {
  return (
    <section className="bg-white py-[70px]">
      <div className={container}>
        <h2 className="mb-8 text-center text-[26px] font-semibold text-vita-blue md:text-[30px]">
          Qual exame é indicado para mim?
        </h2>
        <div className="hidden overflow-x-auto rounded-2xl border border-vita-blue/10 md:block">
          <table className="min-w-full border-collapse text-left text-sm">
            <thead className="bg-vita-gray-bg">
              <tr>
                <th className="px-4 py-3 font-semibold text-vita-blue"> </th>
                {EXAMS.map((exam) => (
                  <th key={exam.name} className="px-4 py-3 font-semibold text-vita-blue">
                    {exam.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.label} className="border-t border-vita-blue/10">
                  <th className="px-4 py-3 font-semibold text-vita-blue">{row.label}</th>
                  {EXAMS.map((exam) => (
                    <td key={`${exam.name}-${row.label}`} className="px-4 py-3 text-vita-text-mid">
                      {exam[row.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="space-y-4 md:hidden">
          {EXAMS.map((exam) => (
            <article
              key={exam.name}
              className="rounded-2xl border border-vita-blue/10 bg-vita-gray-bg p-5"
            >
              <h3 className="text-base font-semibold text-vita-blue">{exam.name}</h3>
              <dl className="mt-3 space-y-2 text-sm">
                {ROWS.map((row) => (
                  <div key={row.label}>
                    <dt className="font-semibold text-vita-blue">{row.label}</dt>
                    <dd className="text-vita-text-mid">{exam[row.key]}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-vita-text-mid md:text-base">
          Na maioria dos casos, realizamos os três exames na mesma consulta para uma avaliação
          auditiva completa.
        </p>
      </div>
    </section>
  )
}
