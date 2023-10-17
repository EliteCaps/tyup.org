import { defineConfig } from 'astro/config'
import node from '@astrojs/node'
import tailwind from '@astrojs/tailwind'

const isProd = import.meta.env.PROD

// https://astro.build/config
export default defineConfig({
  output: isProd ? 'hybrid' : 'static',
  server: isProd ? { port: 5002, host: '0.0.0.0' } : undefined,
  build: {
    trailingSlash: 'ignore'
  },
  adapter: isProd
    ? node({
        mode: 'standalone'
      })
    : undefined,
  integrations: [tailwind()],
  site: 'https://tyup.org'
})
