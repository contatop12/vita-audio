/** URL pública (pasta `public/`) respeitando `base` do Vite. Codifica cada segmento (nomes com espaços). */
export function publicUrl(path: string): string {
  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`
  const cleaned = path.replace(/^\/+/, "")
  const encoded = cleaned
    .split("/")
    .filter(Boolean)
    .map((s) => encodeURIComponent(s))
    .join("/")
  return `${base}${encoded}`
}
