import { defineConfig } from 'astro/config'
import node from '@astrojs/node'
import tailwind from '@astrojs/tailwind'
import robotsTxt from 'astro-robots-txt'
const isProd = import.meta.env.PROD

// https://astro.build/config
export default defineConfig({
  output: isProd ? 'hybrid' : 'static',
  server: isProd
    ? {
        port: 5002,
        host: true
      }
    : undefined,
  build: {
    trailingSlash: 'ignore'
  },
  adapter: isProd
    ? node({
        mode: 'standalone'
      })
    : undefined,
  integrations: [tailwind(), robotsTxt()],
  site: 'https://tyup.org'
})
