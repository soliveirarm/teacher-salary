import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Teacher's Salary",
        description:
          "App criado pra calcular o salário de professores de acordo com a hora aula",
        display: "fullscreen",
        background_color: "##f8fafc",
        theme_color: "#3B82F6",
        icons: [
          {
            src: "favicon.svg",
            sizes: "192x192",
            type: "image/svg",
          },
          {
            src: "favicon.svg",
            sizes: "512x512",
            type: "image/svg",
          },
        ],
      },
    }),
  ],
})
