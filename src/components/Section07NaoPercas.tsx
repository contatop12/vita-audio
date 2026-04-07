import { WHATSAPP_URL } from "../constants/site"
import { btnCta, btnIco, container } from "../vita-tw"
import { WhatsAppIcon } from "./WhatsAppIcon"

export function Section07NaoPercas() {
  return (
    <section className="bg-white py-[70px]">
      <div
        className={`${container} grid grid-cols-1 items-center gap-[60px] md:grid-cols-2`}
      >
        <div>
          <h2 className="mb-[18px] text-[22px] font-semibold leading-snug text-vita-blue md:text-[26px]">
            Não perca mais nenhum momento: A vida é muito alta para o silêncio
          </h2>
          <p className="mb-3.5 text-sm leading-relaxed text-vita-text-mid">
            Oferecemos uma linha completa de Aparelhos Auditivos para todos os tipos de
            perda auditiva, sendo desde níveis mais simples aos mais severos. Todos são
            tecnológicos e de última geração.
          </p>
          <p className="mb-3.5 text-sm leading-relaxed text-vita-text-mid">
            Está procurando um encaixe discreto e confortável? Baterias duráveis? Temos
            diversas opções, além de sensor de movimento, transmissão direta de áudio,
            conectividade direta com iPhones, TVs, outros dispositivos com Bluetooth e
            outras configurações que adequem suas necessidades individuais.
          </p>
          <p className="mb-3.5 text-sm leading-relaxed text-vita-text-mid">
            <strong>
              Quer conhecer a solução que te traz uma vida melhor? Fale conosco!
            </strong>
          </p>
          <a
            href={WHATSAPP_URL}
            className={`${btnCta} mt-2.5 inline-flex`}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon className={btnIco} size={18} />
            <span>QUERO MAIS INFORMAÇÕES</span>
          </a>
        </div>
        <div className="order-first md:order-none">
          <img
            src="/images/f3.png"
            alt="Família feliz reunida"
            className="max-h-[380px] w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  )
}
