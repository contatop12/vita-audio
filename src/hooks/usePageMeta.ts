import { useEffect } from "react"
import type { PageSeo } from "../constants/seo"

export function usePageMeta({ title, description }: PageSeo) {
  useEffect(() => {
    document.title = title

    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement("meta")
      meta.setAttribute("name", "description")
      document.head.appendChild(meta)
    }
    meta.setAttribute("content", description)
  }, [title, description])
}
