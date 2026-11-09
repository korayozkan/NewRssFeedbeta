import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  base: process.env.NODE_ENV === 'production' ? '/NewRssFeedbeta/' : '/',
  build: {
    copyPublicDir: !isSsrBuild,
  },
}))
