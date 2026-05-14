import { container } from "../../vita-tw"

export type ComoFuncionaStep = {
  title: string
  description: string
}

type ComoFuncionaProps = {
  title: string
  subtitle: string
  steps: ComoFuncionaStep[]
}

export function ComoFunciona({ title, subtitle, steps }: ComoFuncionaProps) {
  return (
    <section className="bg-white py-[70px]">
      <div className={container}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[26px] font-semibold leading-snug text-vita-blue md:text-[30px]">
            {title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-vita-text-mid md:text-base">
            {subtitle}
          </p>
        </div>
        <ol className="relative mx-auto mt-12 max-w-3xl space-y-6 md:space-y-8">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-vita-blue/10 bg-vita-gray-bg p-5 md:pl-16"
            >
              <span className="mb-3 inline-flex size-9 items-center justify-center rounded-full bg-vita-blue text-sm font-bold text-white md:absolute md:left-5 md:top-5 md:mb-0">
                {index + 1}
              </span>
              <h3 className="text-base font-semibold text-vita-blue md:text-lg">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-vita-text-mid">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
