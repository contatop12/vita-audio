import { writeFileSync } from "node:fs"
import { resolve } from "node:path"
import type { Plugin } from "vite"

const SITE_ORIGIN = "https://audicao.vitaaudio.com.br"

const SITEMAP_PATHS = [
  "/aparelho-auditivo",
  "/audiometria",
  "/zumbido-no-ouvido",
  "/perda-auditiva",
] as const

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;")
}

function buildSitemapXml(lastmod: string): string {
  const urls = SITEMAP_PATHS.map((path) => {
    const loc = escapeXml(`${SITE_ORIGIN}${path}`)
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`
  }).join("\n")

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

function buildRobotsTxt(): string {
  return `User-agent: *\nAllow: /\n\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`
}

export function seoStaticFilesPlugin(): Plugin {
  return {
    name: "vita-audio-seo-static-files",
    apply: "build",
    closeBundle() {
      const lastmod = new Date().toISOString().slice(0, 10)
      const outputDir = resolve(process.cwd(), "dist")

      writeFileSync(resolve(outputDir, "sitemap.xml"), buildSitemapXml(lastmod), "utf8")
      writeFileSync(resolve(outputDir, "robots.txt"), buildRobotsTxt(), "utf8")
    },
  }
}

export function writePublicSeoFiles(): void {
  const lastmod = new Date().toISOString().slice(0, 10)
  const publicDir = resolve(process.cwd(), "public")

  writeFileSync(resolve(publicDir, "sitemap.xml"), buildSitemapXml(lastmod), "utf8")
  writeFileSync(resolve(publicDir, "robots.txt"), buildRobotsTxt(), "utf8")
}
