import { container } from "../vita-tw"

const perfis = [
  {
    title: "Para quem quer discrição total",
    tag: "Microcanal / Intracanal",
    description:
      "Modelos que se encaixam dentro do canal auditivo, praticamente invisíveis no uso diário. Ideais para quem prioriza estética e conforto.",
  },
  {
    title: "Para perdas moderadas a severas",
    tag: "Retroauricular",
    description:
      "Modelos retroauriculares modernos, leves e com alta capacidade de amplificação. O tipo mais utilizado no mundo.",
  },
  {
    title: "Para quem quer conectividade",
    tag: "Receptor no canal",
    description:
      "Aparelhos com Bluetooth que se conectam ao celular, TV e outros dispositivos. Controle de volume e ajustes pelo aplicativo.",
  },
  {
    title: "Para quem tem zumbido",
    tag: "Tecnologia anti-zumbido",
    description:
      "Modelos com tecnologia específica para redução de zumbido, tratando os dois problemas ao mesmo tempo com mais conforto no dia a dia.",
  },
]

export function Section08Produtos() {
  return (
    <section id="produtos" className="bg-vita-gray-bg py-[70px]">
      <div className={container}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[28px] font-semibold text-vita-blue md:text-[32px]">
            Aparelhos para cada perfil e necessidade
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-vita-text-mid md:text-base">
            Trabalhamos com as principais marcas do mercado. O modelo ideal é definido
            após a avaliação auditiva.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {perfis.map((perfil) => (
            <article
              key={perfil.title}
              className="rounded-2xl border border-vita-blue/10 bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-vita-orange">
                {perfil.tag}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-vita-blue">{perfil.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-vita-text-mid">
                {perfil.description}
              </p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-vita-text-mid md:text-base">
          O modelo ideal para você é definido após a avaliação auditiva. Nosso fonoaudiólogo
          apresenta as opções disponíveis de acordo com o seu perfil e rotina.
        </p>
      </div>
    </section>
  )
}
