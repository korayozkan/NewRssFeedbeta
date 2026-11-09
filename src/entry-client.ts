import { render, initApp, setLang } from './app'

// Apply saved language before first render
const savedLang = localStorage.getItem('nrf-lang')
if (savedLang === 'en') {
  setLang('en')
}

// Render app on client side
const appEl = document.getElementById('app')
if (appEl) {
  const { html } = render()
  appEl.innerHTML = html
}

// Boot interactivity after DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp)
} else {
  initApp()
}
