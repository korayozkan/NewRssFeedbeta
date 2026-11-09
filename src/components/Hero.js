import { BetaForm } from './BetaForm.js';

export function Hero() {
  return /* html */ `
    <section class="hero-section pt-28 pb-16 px-6 relative overflow-hidden">
      <!-- Background blobs -->
      <div class="absolute top-10 left-0 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none"></div>
      <div class="absolute bottom-0 right-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none"></div>

      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="flex flex-col gap-6">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full bg-purple-100 border border-purple-200">
            <div class="w-2 h-2 rounded-full bg-purple-500"></div>
            <span class="text-xs font-semibold text-purple-700">Kapalı Beta</span>
          </div>

          <!-- Headline -->
          <div>
            <h1 class="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Sosyal medyanı
            </h1>
            <h1 class="text-5xl lg:text-6xl font-extrabold leading-tight">
              <span class="text-purple-600">tek bir yerde</span>
              <span class="text-gray-900"> keşfet.</span>
            </h1>
          </div>

          <!-- Subtext -->
          <p class="text-gray-500 text-base leading-relaxed max-w-md">
            NewRssFeed ile takip ettiğin platformları tek bir akışta birleştir.<br/>
            Daha düzenli, daha özgür bir içerik deneyimi yaşa.
          </p>

          <!-- Platform Icons -->
          <div class="flex items-center gap-3">
            <!-- YouTube -->
            <div class="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center cursor-pointer transition-transform" title="YouTube">
              <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.8 5 12 5 12 5s-4.8 0-7 .1c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.2.8C6.8 19 12 19 12 19s4.8 0 7-.1c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM9.7 14.5V9l5.4 2.8-5.4 2.7z"/></svg>
            </div>
            <!-- Reddit -->
            <div class="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center cursor-pointer transition-transform" title="Reddit">
              <svg class="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
            </div>
            <!-- X (Twitter) -->
            <div class="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center cursor-pointer transition-transform" title="X (Twitter)">
              <svg class="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 5.923L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
            </div>
            <!-- GitHub -->
            <div class="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center cursor-pointer transition-transform" title="GitHub">
              <i data-lucide="github" class="w-5 h-5 text-gray-800"></i>
            </div>
            <!-- Medium -->
            <div class="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center cursor-pointer transition-transform" title="Medium">
              <svg class="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
            </div>
            <!-- More -->
            <div class="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center cursor-pointer transition-transform" title="Daha fazla">
              <i data-lucide="plus" class="w-4 h-4 text-gray-600"></i>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap items-center gap-4 mt-2">
            <button
              onclick="document.getElementById('beta-form').scrollIntoView({behavior:'smooth'}); setTimeout(() => document.getElementById('beta-email')?.focus(), 400);"
              class="flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-purple-600 text-white font-bold text-sm tracking-wide shadow-lg transition-all duration-200 cursor-pointer"
            >
              <i data-lucide="sparkles" class="w-4 h-4 text-purple-200"></i>
              Kapalı Betaya Katıl
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
            <div class="flex items-center gap-2 text-gray-500 text-sm">
              <i data-lucide="users" class="w-4 h-4 text-purple-500"></i>
              <span>Sınırlı beta erişimi</span>
            </div>
          </div>
        </div>

        <!-- Right: Owl Mascot + Beta Form -->
        <div class="flex flex-col items-center gap-6 relative">
          <!-- Owl mascot placeholder -->
          <div class="absolute -top-12 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:-top-6 lg:right-0 z-10 pointer-events-none">
            <div class="owl-mascot w-36 h-36 relative">
              <!-- Body -->
              <div class="absolute inset-0 bg-gradient-to-b from-purple-500 to-purple-700 rounded-full"></div>
              <!-- Belly -->
              <div class="absolute bottom-5 left-1/2 -translate-x-1/2 w-16 h-12 bg-purple-300 rounded-full opacity-60"></div>
              <!-- Eyes -->
              <div class="absolute top-8 left-6 w-7 h-7 bg-white rounded-full flex items-center justify-center">
                <div class="w-3.5 h-3.5 bg-gray-800 rounded-full"></div>
              </div>
              <div class="absolute top-8 right-6 w-7 h-7 bg-white rounded-full flex items-center justify-center">
                <div class="w-3.5 h-3.5 bg-gray-800 rounded-full"></div>
              </div>
              <!-- Beak -->
              <div class="absolute top-16 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-6 border-l-transparent border-r-transparent border-t-orange-400"></div>
              <!-- Wings -->
              <div class="absolute top-14 -left-3 w-8 h-10 bg-orange-400 rounded-full transform -rotate-12"></div>
              <div class="absolute top-14 -right-3 w-8 h-10 bg-orange-400 rounded-full transform rotate-12"></div>
              <!-- Ears -->
              <div class="absolute -top-2 left-5 w-5 h-6 bg-purple-600 rounded-full transform -rotate-12"></div>
              <div class="absolute -top-2 right-5 w-5 h-6 bg-purple-600 rounded-full transform rotate-12"></div>
            </div>
          </div>

          <!-- Beta Form -->
          ${BetaForm()}
        </div>
      </div>
    </section>
  `;
}
