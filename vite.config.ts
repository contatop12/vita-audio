import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { cloudflare } from "@cloudflare/vite-plugin"

export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss(), cloudflare()],
  build: {
    // O conteúdo de cada rota já sai em um chunk próprio (ver src/App.tsx).
    // Aqui só agrupamos as dependências para não estilhaçar em dezenas de
    // arquivos de 0,4 kB — cada um custaria uma requisição.
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return
          if (/[\/]node_modules[\/](react|react-dom|scheduler)[\/]/.test(id)) {
            return "react"
          }
          return "vendor"
        },
      },
    },
  },
})
