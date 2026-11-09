import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

async function prerender() {
  const templatePath = path.resolve(root, 'dist/client/index.html')
  const template = await fs.readFile(templatePath, 'utf-8')

  // Import SSR entry with Windows file:// URL support
  const serverEntryUrl = pathToFileURL(path.resolve(root, 'dist/server/entry-server.js')).href
  const { render } = await import(serverEntryUrl)
  const rendered = await render('/')

  let html = template
  if (rendered.head) {
    html = html.replace('<!--app-head-->', rendered.head)
  } else {
    html = html.replace('<!--app-head-->', '')
  }

  if (rendered.html) {
    html = html.replace('<div id="app"><!--app-html--></div>', `<div id="app">${rendered.html}</div>`)
  }

  await fs.writeFile(templatePath, html, 'utf-8')
  console.log('✓ [SSG] Static HTML successfully pre-rendered for AI crawlers & SEO!')
}

prerender().catch((err) => {
  console.error('[SSG] Pre-render failed:', err)
  process.exit(1)
})
