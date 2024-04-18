import pages from '@hono/vite-cloudflare-pages'
import adapter from '@hono/vite-dev-server/cloudflare'
import honox from 'honox/vite'
import client from 'honox/vite/client'
import { defineConfig } from 'vite'

const baseConfig = {
  resolve: {
    alias: {
      '@': '/app'
    }
  }
}

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      ...baseConfig,
      plugins: [client()]
    }
  } else {
    return {
      ...baseConfig,
      plugins: [
        honox({
          devServer: {
            adapter
          }
        }),
        pages()
      ]
    }
  }
})
