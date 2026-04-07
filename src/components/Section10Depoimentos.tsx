import { container } from "../vita-tw"

const depoimentos: { quote: string; name: string; img: string; alt: string }[] = [
  {
    quote:
      '"Estou extremamente satisfeita com o serviço da Vita Audio. Eles me ajudaram a encontrar o aparelho auditivo perfeito para minhas necessidades. Recomendo muito!"',
    name: "Maria Silva",
    img: "/images/dep-1.jpg",
    alt: "Maria Silva",
  },
  {
    quote:
      '"Excelente atendimento! Os profissionais da Vita Audio são muito atenciosos e competentes. Agora posso ouvir claramente graças aos aparelhos que adquiri aqui."',
    name: "Pedro Gonçalves",
    img: "/images/dep-2.jpg",
    alt: "Pedro Gonçalves",
  },
  {
    quote:
      '"A Vita Audio mudou minha vida! Eu estava sofrendo com zumbidos constantes, mas após o tratamento personalizado que recebi aqui, finalmente encontrei alívio. Muito obrigada!"',
    name: "Ana Oliveira",
    img: "/images/dep-3.jpg",
    alt: "Ana Oliveira",
  },
  {
    quote:
      '"Ótima variedade de aparelhos auditivos e acessórios. Encontrei tudo o que precisava na Vita Audio, e o serviço foi impecável. Recomendo!"',
    name: "João Santos",
    img: "/images/dep-4.jpg",
    alt: "João Santos",
  },
  {
    quote:
      '"Profissionais super competentes e atenciosos! Recebi um atendimento personalizado do início ao fim, e agora posso ouvir com clareza novamente. Muito obrigada, Vita Audio!"',
    name: "Carla Fernandes",
    img: "/images/dep-5.jpg",
    alt: "Carla Fernandes",
  },
  {
    quote:
      '"Estou muito feliz com meu novo aparelho auditivo da Vita Audio. A qualidade do som é incrível e o processo de adaptação foi muito tranquilo. Recomendo a todos!"',
    name: "Ricardo Carvalho",
    img: "/images/dep-6.jpg",
    alt: "Ricardo Carvalho",
  },
  {
    quote:
      '"Excelente clínica auditiva! Fui recebida com muita simpatia e profissionalismo. Os fonoaudiólogos da Vita Audio são verdadeiros especialistas no que fazem."',
    name: "Patrícia Almeida",
    img: "/images/dep-7.jpg",
    alt: "Patrícia Almeida",
  },
  {
    quote:
      '"Encontrei na Vita Audio a solução perfeita para meus problemas auditivos. Eles me guiaram na escolha do aparelho ideal e me proporcionaram um atendimento excepcional."',
    name: "Marcos Oliveira",
    img: "/images/dep-8.jpg",
    alt: "Marcos Oliveira",
  },
]

export function Section10Depoimentos() {
  return (
    <section className="bg-vita-blue py-[70px] text-center">
      <div className={container}>
        <h2 className="mb-2 text-[26px] font-semibold leading-snug text-white md:text-[30px]">
          Conheça as histórias que a Vita
          <br />
          Audio ajudou a mudar
        </h2>
        <p className="mb-9 text-sm text-white/80">
          Audição é a nossa paixão e nós queremos ajudar você também!
        </p>
        <div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
          {depoimentos.map((d) => (
            <div
              key={d.name}
              className="flex flex-col justify-between rounded-lg border-l-[3px] border-vita-orange bg-white p-5"
            >
              <p className="mb-4 flex-1 text-[13px] italic leading-relaxed text-vita-text-mid">
                {d.quote}
              </p>
              <div className="flex items-center gap-2.5">
                <img
                  src={d.img}
                  alt={d.alt}
                  className="size-[42px] rounded-full border-2 border-vita-blue object-cover"
                />
                <span className="text-[13px] font-bold text-vita-blue">{d.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
