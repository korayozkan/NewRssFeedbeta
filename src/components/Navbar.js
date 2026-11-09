export function Navbar() {
  return /* html */ `
    <nav class="navbar fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center gap-2">
          <div class="w-9 h-9 bg-gradient-to-br from-purple-500 to-orange-400 rounded-xl flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="9" cy="10" r="2"/><circle cx="15" cy="10" r="2"/>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
          </div>
          <span class="font-bold text-gray-900 text-lg">NewRssFeed</span>
        </div>

        <!-- Nav Links -->
        <div class="hidden md:flex items-center gap-8">
          <a href="#features" class="text-gray-600 text-sm font-medium transition-colors">Özellikler</a>
          <a href="#why" class="text-gray-600 text-sm font-medium transition-colors">Neden NewRssFeed?</a>
          <a href="#faq" class="text-gray-600 text-sm font-medium transition-colors">SSS</a>
        </div>

        <!-- CTA -->
        <button
          onclick="document.getElementById('beta-form').scrollIntoView({behavior:'smooth'}); setTimeout(() => document.getElementById('beta-email')?.focus(), 400);"
          class="flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-600 text-white font-semibold text-sm shadow-md transition-all duration-200 cursor-pointer"
        >
          Beta'ya Katıl
          <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </button>
      </div>
    </nav>
  `;
}
