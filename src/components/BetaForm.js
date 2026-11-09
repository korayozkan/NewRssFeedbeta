export function BetaForm() {
  return /* html */ `
    <div id="beta-form" class="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 w-full max-w-sm">
      <h3 class="text-xl font-bold text-gray-900 mb-1">Beta Başvurusu Yap</h3>
      <p class="text-sm text-gray-500 mb-5">Erken erişim başvurusu. Kayıtlar <strong>kiruhiofficial@proton.me</strong> adresine iletilir.</p>

      <form id="betaFormEl" class="flex flex-col gap-4" novalidate>
        <!-- Email -->
        <div>
          <div class="relative">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <i data-lucide="mail" class="w-4 h-4"></i>
            </span>
            <input
              id="beta-email"
              type="email"
              placeholder="E-posta adresin"
              required
              class="w-full pl-9 pr-9 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            />
            <span class="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 text-xs font-bold">*</span>
          </div>
          <p id="email-error" class="text-red-500 text-xs mt-1 hidden">Geçerli bir e-posta girin.</p>
        </div>

        <!-- Username -->
        <div class="relative">
          <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <i data-lucide="user" class="w-4 h-4"></i>
          </span>
          <input
            id="beta-username"
            type="text"
            placeholder="Kullanıcı adın (isteğe bağlı)"
            class="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
          />
        </div>

        <!-- Platforms -->
        <div>
          <p class="text-xs font-semibold text-gray-700 mb-2">En çok kullandığın platformlar <span class="font-normal text-gray-400">(isteğe bağlı)</span></p>
          <div class="flex flex-wrap gap-2" id="platform-chips">
            <button type="button" data-platform="youtube" class="platform-chip flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-xs font-medium text-gray-600 transition-all">
              <svg class="w-3.5 h-3.5 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.8 5 12 5 12 5s-4.8 0-7 .1c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.2.8C6.8 19 12 19 12 19s4.8 0 7-.1c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM9.7 14.5V9l5.4 2.8-5.4 2.7z"/></svg>
              YouTube
            </button>
            <button type="button" data-platform="reddit" class="platform-chip flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-xs font-medium text-gray-600 transition-all">
              <svg class="w-3.5 h-3.5 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
              Reddit
            </button>
            <button type="button" data-platform="github" class="platform-chip flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-xs font-medium text-gray-600 transition-all">
              <i data-lucide="github" class="w-3.5 h-3.5"></i>
              GitHub
            </button>
            <button type="button" data-platform="other" class="platform-chip flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-xs font-medium text-gray-600 transition-all">
              Diğer
              <i data-lucide="chevron-down" class="w-3 h-3"></i>
            </button>
          </div>
        </div>

        <!-- Expectations -->
        <div>
          <p class="text-xs font-semibold text-gray-700 mb-2">NewRssFeed'den beklentileriniz?</p>
          <textarea
            id="beta-expectations"
            placeholder="Fikirlerini bizimle paylaş..."
            rows="3"
            class="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none"
          ></textarea>
        </div>

        <!-- Submit -->
        <button
          type="submit"
          id="submit-btn"
          class="w-full py-3 rounded-xl bg-purple-600 text-white font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2"
        >
          Başvuruyu e-posta ile Gönder
        </button>

        <!-- Privacy -->
        <p class="text-center text-xs text-gray-400 flex items-center justify-center gap-1">
          <i data-lucide="lock" class="w-3 h-3"></i>
          Bilgilerin güvende.
          <a href="#" class="text-purple-500">Gizlilik Politikamızda</a> detaylar.
        </p>
      </form>

      <!-- Success Message (hidden by default) -->
      <div id="form-success" class="hidden flex-col items-center justify-center py-8 gap-3 text-center">
        <div class="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
          <i data-lucide="check-circle" class="w-7 h-7 text-green-500"></i>
        </div>
        <h4 class="font-bold text-gray-900 text-lg">Başvurun alındı!</h4>
        <p class="text-sm text-gray-500">Beta başvuru bilgileriniz kiruhiofficial@proton.me adresine iletilmek üzere açıldı. En kısa sürede davetinizi göndereceğiz.</p>
      </div>
    </div>
  `;
}

export function initBetaForm() {
  const form = document.getElementById('betaFormEl');
  if (!form) return;

  // Platform chip toggle
  document.querySelectorAll('.platform-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      chip.classList.toggle('active-chip');
      chip.classList.toggle('border-purple-500');
      chip.classList.toggle('text-purple-600');
      chip.classList.toggle('bg-purple-50');
    });
  });

  // Form submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('beta-email');
    const emailError = document.getElementById('email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput.value.trim())) {
      emailError.classList.remove('hidden');
      emailInput.classList.add('border-red-400');
      return;
    }

    emailError.classList.add('hidden');
    emailInput.classList.remove('border-red-400');

    const email = emailInput.value.trim();
    const username = document.getElementById('beta-username')?.value.trim() || 'Belirtilmedi';
    const expect = document.getElementById('beta-expectations')?.value.trim() || 'Belirtilmedi';
    const activePlatforms = Array.from(document.querySelectorAll('.platform-chip.active-chip'))
      .map(c => c.dataset.platform || c.innerText.trim());
    const platformsStr = activePlatforms.length > 0 ? activePlatforms.join(', ') : 'Belirtilmedi';

    const subject = encodeURIComponent(`NewRssFeed 2026 Beta Başvurusu (${email})`);
    const body = encodeURIComponent(
      `Merhaba,\n\nNewRssFeed Kapalı Beta katılım talebi:\n\n` +
      `• E-posta Adresi: ${email}\n` +
      `• Kullanıcı Adı: ${username}\n` +
      `• Tercih Edilen Platformlar: ${platformsStr}\n` +
      `• Beklentiler / Fikirler: ${expect}\n\n` +
      `Tarih: 2026\n`
    );

    const mailtoUrl = `mailto:kiruhiofficial@proton.me?subject=${subject}&body=${body}`;

    const btn = document.getElementById('submit-btn');
    btn.disabled = true;
    btn.innerHTML = `<svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg> Gönderiliyor...`;

    window.location.href = mailtoUrl;

    setTimeout(() => {
      form.classList.add('hidden');
      const success = document.getElementById('form-success');
      success.classList.remove('hidden');
      success.classList.add('flex');
    }, 1000);
  });
}
