import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// Project is served from a GitHub Pages subpath: /<repo>/.
// Override at build time with BASE_PATH if the repo/host changes.
const base = process.env.BASE_PATH ?? '/Civvy/'

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon-32.png', 'apple-touch-icon.png', 'icon.svg'],
      manifest: {
        name: 'Civvy',
        short_name: 'Civvy',
        description:
          "Democracy shouldn't require a law degree. Civic infrastructure that connects information to understanding to action.",
        theme_color: '#12213D',
        background_color: '#0F1923',
        display: 'standalone',
        orientation: 'portrait',
        // start_url / scope are resolved relative to `base` by the plugin.
        start_url: '.',
        scope: '.',
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
        navigateFallback: null,
      },
    }),
  ],
  server: {
    port: 5173,
    host: true,
  },
})
