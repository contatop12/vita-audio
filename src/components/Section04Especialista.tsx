import { container } from "../vita-tw"
import { publicUrl } from "../utils/publicUrl"

const especialistaBackgroundImage = `url("${publicUrl("images/hero-hand-device.jpg")}")`

const bullets = [
  "Equipe completa e composta por fonoaudiólogos especializados em audiologia",
  "Atendimento personalizado e humanizado para cada paciente",
  "Marcas reconhecidas mundialmente",
  "Atendimento domiciliar",
  "Clínicas modernas e acolhedoras",
  "Avaliação prévia gratuita para a escolha do aparelho adequado",
  "Solução adequada para crianças e adolescentes também",
  "Aparelhos para diversos ambientes e situações do dia a dia",
]

export function Section04Especialista() {
  return (
    <section className="relative overflow-hidden bg-white py-[70px]">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat max-md:opacity-[0.22] md:opacity-100"
        style={{ backgroundImage: especialistaBackgroundImage }}
        aria-hidden
      />
      <div
        className={`relative z-10 ${container} grid grid-cols-1 items-center gap-[60px] md:grid-cols-2`}
      >
        <div className="order-first flex justify-center md:order-none md:block">
          <img
            src={publicUrl("images/f10.png")}
            alt="Aparelho auditivo na mão"
            className="w-full max-w-[420px] rounded-lg object-contain md:hidden"
          />
          <img
            src={publicUrl("images/f2.png")}
            alt="Aparelho auditivo na mão"
            className="hidden w-full max-w-[420px] rounded-lg object-cover md:block"
          />
        </div>
        <div>
          <h2 className="mb-6 text-2xl font-semibold leading-snug text-vita-blue md:text-[28px]">
            Vita Audio, especialista
            <br />
            em reabilitação auditiva
            <br />
            focada em você
          </h2>
          <ul className="list-none p-0">
            {bullets.map((text) => (
              <li
                key={text}
                className="mb-5 flex items-start gap-3 text-sm leading-[1.55] text-vita-text-mid last:mb-0"
              >
                <span className="shrink-0 font-bold leading-snug text-vita-orange">
                  ✔
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
