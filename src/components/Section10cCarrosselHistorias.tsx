import { useEffect, useMemo, useState } from "react"
import { container } from "../vita-tw"
import { publicUrl } from "../utils/publicUrl"

const CARROSSEL_FILES = Array.from({ length: 20 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0")
  return `images/CARROSSEL/img feed carrol ${n}.png`
})

export function Section10cCarrosselHistorias() {
  const slides = useMemo(
    () =>
      CARROSSEL_FILES.map((path, index) => ({
        src: publicUrl(path),
        alt: `Momento e depoimento em imagem ${index + 1} — Vita Audio`,
      })),
    [],
  )

  const [active, setActive] = useState(0)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mq.matches) return

    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length)
    }, 4500)

    return () => window.clearInterval(id)
  }, [slides.length])

  return (
    <section
      className="bg-white py-12 md:py-14"
      aria-roledescription="carousel"
      aria-label="Galeria de histórias e momentos na Vita Audio"
    >
      <div className={container}>
        <div className="relative mx-auto max-w-[900px] overflow-hidden rounded-2xl border border-vita-blue/10 bg-vita-gray-bg shadow-[0_8px_32px_rgba(0,109,196,0.1)]">
          <div className="relative aspect-4/5 w-full sm:aspect-4/3 md:aspect-16/10 md:max-h-[min(72vh,560px)]">
            {slides.map((slide, index) => (
              <img
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                width={1200}
                height={900}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                className={`absolute inset-0 size-full object-contain object-center p-3 transition-opacity duration-700 ease-out md:p-5 ${
                  index === active ? "z-1 opacity-100" : "z-0 opacity-0"
                }`}
                aria-hidden={index !== active}
              />
            ))}
          </div>
          <div
            className="flex flex-wrap items-center justify-center gap-1.5 border-t border-vita-blue/10 px-3 py-3 md:gap-2 md:py-4"
            role="tablist"
            aria-label="Selecionar imagem do carrossel"
          >
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={index === active}
                aria-label={`Imagem ${index + 1} de ${slides.length}`}
                className={`size-2 rounded-full transition-all md:size-2.5 ${
                  index === active
                    ? "scale-110 bg-vita-blue"
                    : "bg-vita-blue/25 hover:bg-vita-blue/45"
                }`}
                onClick={() => setActive(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
