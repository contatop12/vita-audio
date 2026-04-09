import { ExternalLink, Star } from "lucide-react"
import {
  GOOGLE_BUSINESS_REVIEWS_URL,
  GOOGLE_REVIEWS_COUNT_LABEL,
  GOOGLE_REVIEWS_RATING,
} from "../constants/site"
import { btnCta, btnIco, container } from "../vita-tw"
import { publicUrl } from "../utils/publicUrl"
import { openWhatsAppLeadPopup } from "../utils/whatsappLeadPopup"
import { WhatsAppIcon } from "./WhatsAppIcon"

type GoogleReview = {
  quote: string
  name: string
  /** Caminho em /public/images/... (codificado na hora do render se tiver espaços). */
  photoFile?: string
  initial?: string
  avatarClass?: string
}

/** Comentários reais do Google Meu Negócio — atualize quando quiser destacar outras avaliações. */
const googleReviews: GoogleReview[] = [
  {
    name: "Renate Hoffmann",
    quote:
      "Adquirimos um aparelho auditivo da marca Rexton na Vita Audio para meu marido, com 2 anos de garantia e suporte vitalício da empresa, que devolveu a audição que ele tinha perdido há 4 anos e aprimorou demais sua qualidade de vida. O atendimento foi de excelência, desde a recepção (Natasha), até a Dra. Tayla, profissional extremamente competente, dedicada e atenciosa, que não mede esforços para a plena satisfação de seus clientes ! Parabéns e nosso muito obrigado à equipe, recomendamos a todos de olhos fechados, garantia de qualidade e satisfação !",
    initial: "R",
    avatarClass: "bg-vita-orange text-vita-text",
  },
  {
    name: "Andressa Santos de Jesus",
    quote:
      "Gostaria de registrar meu agradecimento à Tayla e à Raquel pelo excelente atendimento na clínica Vita Áudio. Fomos muito bem recebidos, com atenção, cuidado e profissionalismo em todos os momentos. A dedicação, a paciência e a forma clara como conduziram o atendimento fizeram toda a diferença. Parabéns pelo trabalho e muito obrigada pelo carinho e competência!",
    photoFile: "Andressa Santos de Jesus.png",
  },
  {
    name: "Drisana Vilalva",
    quote:
      "Atendimento excepcional, equipe sempre atenciosa e pronta pra atender em todos os momentos. Espaço confortável, o cappuccino é maravilhoso rsrs Obrigada equipe, melhor decisão da minha vida 💗 ...",
    photoFile: "Drisana Vilalva.png",
  },
]

function Stars({ className }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 text-vita-orange ${className ?? ""}`} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-current" strokeWidth={0} />
      ))}
    </div>
  )
}

function ReviewAvatar({ review }: { review: GoogleReview }) {
  if (review.photoFile) {
    const src = publicUrl(`images/${review.photoFile}`)
    return (
      <img
        src={src}
        alt=""
        className="size-9 shrink-0 rounded-full border border-vita-blue/15 object-cover"
      />
    )
  }
  return (
    <span
      className={`flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${review.avatarClass ?? "bg-vita-blue text-white"}`}
      aria-hidden
    >
      {review.initial}
    </span>
  )
}

export function Section10bGoogleReviews() {
  return (
    <section className="bg-vita-gray-bg py-[70px]">
      <div className={container}>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-vita-serif text-[26px] font-semibold tracking-tight text-vita-text md:text-[30px]">
            <span>Avaliações no </span>
            <span className="text-vita-blue">Google</span>
          </h2>
          <div className="mt-4 flex flex-col items-center gap-1">
            <div className="flex items-center gap-2">
              <Stars />
              <span className="text-lg font-bold text-vita-text">{GOOGLE_REVIEWS_RATING}</span>
            </div>
            <p className="text-sm text-vita-text-mid">{GOOGLE_REVIEWS_COUNT_LABEL}</p>
          </div>
          <a
            href={GOOGLE_BUSINESS_REVIEWS_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-vita-blue underline decoration-vita-blue/35 underline-offset-4 transition hover:text-vita-blue-dark hover:decoration-vita-blue-dark/50"
          >
            Ver todos os comentários do Google
            <ExternalLink className="size-4 shrink-0" aria-hidden />
          </a>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1100px] grid-cols-1 gap-4 md:grid-cols-3 md:items-stretch">
          {googleReviews.map((r) => (
            <article
              key={r.name}
              className="flex flex-col rounded-lg border-l-[3px] border-vita-orange bg-white p-5 shadow-[0_2px_16px_rgba(0,109,196,0.08)]"
            >
              <Stars className="mb-4" />
              <p className="flex-1 text-[13px] leading-relaxed text-vita-text-mid">
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="mt-5 flex items-center justify-between gap-3 border-t border-vita-blue/12 pt-4">
                <div className="flex min-w-0 items-center gap-2.5">
                  <ReviewAvatar review={r} />
                  <span className="min-w-0 text-[13px] font-semibold leading-snug text-vita-text">
                    {r.name}
                  </span>
                </div>
                <span className="shrink-0 text-xs text-vita-text-mid">Google</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button type="button" onClick={openWhatsAppLeadPopup} className={btnCta}>
            <WhatsAppIcon className={btnIco} size={18} />
            <span>AGENDE AGORA!</span>
          </button>
        </div>
      </div>
    </section>
  )
}
