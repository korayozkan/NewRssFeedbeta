export function Footer() {
  return /* html */ `
    <footer class="border-t border-gray-100 bg-white px-6 py-8">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-2">
          <div class="w-7 h-7 bg-gradient-to-br from-purple-500 to-orange-400 rounded-lg flex items-center justify-center">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="9" cy="10" r="2"/><circle cx="15" cy="10" r="2"/>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
          </div>
          <span class="font-bold text-gray-800 text-sm">NewRssFeed</span>
        </div>
        <p class="text-xs text-gray-400">© 2026 NewRssFeed. Tüm hakları saklıdır.</p>
        <div class="flex items-center gap-4">
          <a href="#" class="text-xs text-gray-400 transition-colors">Gizlilik</a>
          <a href="#" class="text-xs text-gray-400 transition-colors">Kullanım Şartları</a>
          <a href="mailto:kiruhiofficial@proton.me" class="text-xs text-gray-400 transition-colors">İletişim (kiruhiofficial@proton.me)</a>
        </div>
      </div>
    </footer>
  `;
}
