import { defineConfig } from 'astro/config'
import node from '@astrojs/node'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  server: { port: 5002, host: '0.0.0.0' },
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [tailwind()],
  site: 'https://tyup.org'
})
