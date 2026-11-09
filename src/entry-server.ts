import { render as _render, setLang } from './app'

export function render(_url: string) {
  // SSR always renders in default language (TR); client hydrates with saved lang
  setLang('tr')
  return _render()
}
