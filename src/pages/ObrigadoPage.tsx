import { useEffect, useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { ROUTES } from "../constants/paths"
import { WHATSAPP_FOOTER_URL } from "../constants/site"
import { container } from "../vita-tw"

type ObrigadoPageProps = {
  backHref?: string
}

export function ObrigadoPage({ backHref = ROUTES.aparelhoAuditivo }: ObrigadoPageProps) {
  const [secondsLeft, setSecondsLeft] = useState(2)

  useEffect(() => {
    setSecondsLeft(2)

    const intervalId = window.setInterval(() => {
      setSecondsLeft((prev) => Math.max(prev - 1, 0))
    }, 1000)

    const timeoutId = window.setTimeout(() => {
      window.location.href = WHATSAPP_FOOTER_URL
    }, 2000)

    return () => {
      window.clearInterval(intervalId)
      window.clearTimeout(timeoutId)
    }
  }, [])

  return (
    <main className="flex min-h-screen items-center bg-vita-gray-bg py-10">
      <section className={container}>
        <div className="mx-auto max-w-xl rounded-2xl border border-vita-blue/12 bg-white p-7 text-center shadow-[0_10px_36px_rgba(0,109,196,0.12)] sm:p-10">
          <CheckCircle2 className="mx-auto mb-4 size-11 text-vita-blue" aria-hidden />
          <h1 className="text-3xl font-semibold text-vita-blue">Obrigado pelo seu contato!</h1>
          <p className="mt-3 text-sm leading-relaxed text-vita-text-mid sm:text-base">
            Recebemos suas informações com sucesso. Logo um atendente entrará em contato com
            você para continuar seu atendimento.
          </p>
          <p className="mt-3 text-sm font-medium text-vita-blue">
            Redirecionando para o WhatsApp em {secondsLeft}s...
          </p>
          <div className="mt-7 flex justify-center">
            <a
              href={backHref}
              className="inline-flex items-center justify-center rounded-xl border border-vita-blue/25 px-5 py-3 text-sm font-semibold text-vita-blue transition hover:bg-vita-blue/5"
            >
              Voltar para o site
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
