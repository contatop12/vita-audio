import { container } from "../vita-tw"
import { publicUrl } from "../utils/publicUrl"

export function Section09Conheca() {
  return (
    <section id="sobre-nos" className="bg-vita-gray-bg py-[60px]">
      <div className={`${container} grid grid-cols-1 items-center gap-[60px] md:grid-cols-2`}>
        <div>
          <h2 className="mb-[18px] text-2xl font-semibold text-vita-blue md:text-[28px]">
            Conheça a Vita Audio
          </h2>
          <p className="mb-3.5 text-sm leading-relaxed text-vita-text-mid">
            A Vita Audio é uma clínica especializada em saúde auditiva, com foco em
            diagnóstico e reabilitação auditiva para pacientes de todas as idades.
          </p>
          <p className="mb-3.5 text-sm leading-relaxed text-vita-text-mid">
            Nossa equipe de fonoaudiólogos acompanha cada paciente do início ao fim: da
            avaliação auditiva à adaptação do aparelho, com orientação clara e
            acompanhamento contínuo.
          </p>
          <p className="mb-3.5 text-sm leading-relaxed text-vita-text-mid">
            Trabalhamos com as principais marcas de aparelhos auditivos do mercado e
            oferecemos soluções para todos os graus de perda auditiva, sempre com o
            cuidado e a atenção que cada caso merece.
          </p>
        </div>
        <div className="order-first md:order-0">
          <img
            src={publicUrl("images/F.png")}
            alt="Fachada da Vita Audio — aparelhos auditivos"
            className="block w-full rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
          />
        </div>
      </div>
    </section>
  )
}
