import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  base: './',
  build: {
    copyPublicDir: !isSsrBuild,
  },
}))
