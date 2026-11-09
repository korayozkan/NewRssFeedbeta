export function AppPreview() {
  return /* html */ `
    <section class="app-preview-section px-6 pb-20" id="features">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <!-- Left: App UI Mock -->
        <div class="relative">
          <!-- Browser chrome mock -->
          <div class="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            <!-- Window bar -->
            <div class="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
              <div class="w-3 h-3 rounded-full bg-red-400"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div class="w-3 h-3 rounded-full bg-green-400"></div>
            </div>

            <!-- App content -->
            <div class="flex h-72">
              <!-- Sidebar -->
              <div class="w-32 border-r border-gray-100 p-3 flex flex-col gap-1">
                <!-- Logo mini -->
                <div class="flex items-center gap-1.5 mb-3 px-1">
                  <div class="w-6 h-6 bg-gradient-to-br from-purple-500 to-orange-400 rounded-lg"></div>
                </div>
                <button class="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-purple-50 text-purple-700 text-xs font-semibold">
                  <i data-lucide="home" class="w-3.5 h-3.5"></i>
                  Ana Akış
                </button>
                <button class="flex items-center gap-2 px-2 py-1.5 rounded-lg text-gray-500 text-xs">
                  <i data-lucide="compass" class="w-3.5 h-3.5"></i>
                  Keşfet
                </button>
              </div>

              <!-- Main Feed -->
              <div class="flex-1 flex flex-col">
                <!-- Filter tabs -->
                <div class="flex items-center gap-1 px-3 py-2 border-b border-gray-100 overflow-x-auto">
                  <button class="flex-shrink-0 px-3 py-1 rounded-full bg-gray-900 text-white text-xs font-semibold">Tümü</button>
                  <button class="flex-shrink-0 px-3 py-1 rounded-full text-gray-500 text-xs">YouTube</button>
                  <button class="flex-shrink-0 px-3 py-1 rounded-full text-gray-500 text-xs">Reddit</button>
                  <button class="flex-shrink-0 px-3 py-1 rounded-full text-gray-500 text-xs">GitHub</button>
                  <button class="flex-shrink-0 px-3 py-1 rounded-full text-gray-500 text-xs">Medium</button>
                  <!-- Search -->
                  <div class="ml-auto flex items-center gap-1.5 bg-gray-50 rounded-lg px-2 py-1 flex-shrink-0">
                    <i data-lucide="search" class="w-3 h-3 text-gray-400"></i>
                    <span class="text-xs text-gray-400">Ara...</span>
                    <span class="text-xs text-gray-300 border border-gray-200 rounded px-1">⌘K</span>
                  </div>
                </div>

                <!-- Feed item -->
                <div class="flex items-center gap-3 px-3 py-3 border-b border-gray-50 transition-colors">
                  <div class="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.8 5 12 5 12 5s-4.8 0-7 .1c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.2.8C6.8 19 12 19 12 19s4.8 0 7-.1c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM9.7 14.5V9l5.4 2.8-5.4 2.7z"/></svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-xs font-semibold text-gray-900 truncate">React 19: Yeni Özellikler ve Geliştirmeler</p>
                    <p class="text-xs text-gray-400 mt-0.5">YouTube • 2 saat önce</p>
                  </div>
                  <div class="w-14 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-purple-500 flex-shrink-0 flex items-center justify-center">
                    <i data-lucide="play" class="w-3 h-3 text-white fill-current"></i>
                  </div>
                </div>

                <!-- Feed item 2 -->
                <div class="flex items-center gap-3 px-3 py-3 transition-colors">
                  <div class="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249z"/></svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-xs font-semibold text-gray-900 truncate">r/programming: Bu hafta en iyi tartışmalar</p>
                    <p class="text-xs text-gray-400 mt-0.5">Reddit • 5 saat önce</p>
                  </div>
                  <span class="flex-shrink-0 text-xs text-orange-500 font-semibold">↑ 1.2k</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Floating badge -->
          <div class="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg border border-gray-100 px-3 py-2 flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span class="text-xs font-semibold text-gray-700">Canlı güncelleme</span>
          </div>
        </div>

        <!-- Right: Feature List -->
        <div class="flex flex-col gap-6">
          ${featureItem('zap', 'text-yellow-500', 'bg-yellow-50', 'Tüm İçeriklerin Tek Yerde', 'Farklı platformları tek bir akışta birleştir.')}
          ${featureItem('shuffle', 'text-green-500', 'bg-green-50', 'Kendi Akışını Oluştur', 'İstediğin kaynakları ekle, kişiselleştir.')}
          ${featureItem('shield-check', 'text-orange-500', 'bg-orange-50', 'Daha Düzenli Deneyim', 'Dağınıklığa son ver, önemli içeriklere odaklan.')}
          ${featureItem('rocket', 'text-purple-500', 'bg-purple-50', 'Kontrol Senin Elinde', 'Hangi içeriği görmek istediğine sen karar ver.')}
        </div>
      </div>
    </section>
  `;
}

function featureItem(icon, iconColor, iconBg, title, desc) {
  return /* html */ `
    <div class="flex items-start gap-4">
      <div class="w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center flex-shrink-0">
        <i data-lucide="${icon}" class="w-5 h-5 ${iconColor}"></i>
      </div>
      <div>
        <h3 class="font-bold text-gray-900 text-sm mb-1">${title}</h3>
        <p class="text-sm text-gray-500">${desc}</p>
      </div>
    </div>
  `;
}
