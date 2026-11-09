import { render, initApp, setLang } from './app'

// Apply saved language before first render
const savedLang = localStorage.getItem('nrf-lang')
if (savedLang === 'en') {
  setLang('en')
}

// If the page was server-rendered (SSR), the HTML is already in #app.
// If not (dev mode with no SSR), render it now.
const appEl = document.getElementById('app')
if (appEl && appEl.innerHTML.trim() === '') {
  const { html } = render()
  appEl.innerHTML = html
}

// Boot interactivity after DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp)
} else {
  initApp()
}
