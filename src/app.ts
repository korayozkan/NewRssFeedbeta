// NewRssFeed — Main App Entry
// Dark / Light mode + i18n (TR/EN) + Simple Icons + full page

// ─── i18n ─────────────────────────────────────────────────────────────────────
type Lang = 'tr' | 'en'
let currentLang: Lang = 'tr'

export function setLang(lang: Lang) { currentLang = lang }
export function getLang(): Lang { return currentLang }

function basePath(path: string): string {
  const base = (import.meta as any).env?.BASE_URL || '/'
  return `${base}${path.startsWith('/') ? path.slice(1) : path}`
}

const translations: Record<Lang, Record<string, string>> = {
  tr: {
    'nav.features': 'Özellikler',
    'nav.why': 'Neden NewRssFeed?',
    'nav.faq': 'SSS',
    'nav.cta': "Beta'ya Katıl",
    'nav.themeToggle': 'Tema değiştir',
    'nav.langToggle': 'Dili değiştir',
    'hero.badge': '2026 Kapalı Beta',
    'hero.headline1': 'Sosyal medyanı',
    'hero.headline2a': 'tek bir yerde',
    'hero.headline2b': ' keşfet.',
    'hero.subtext': 'NewRssFeed ile takip ettiğin platformları tek bir akışta birleştir. Daha düzenli, daha özgür bir içerik deneyimi yaşa.',
    'hero.cta': 'Kapalı Betaya Katıl',
    'hero.limited': 'Sınırlı beta erişimi 2026',
    'hero.more': 'Daha fazla',
    'form.title': 'Beta Başvurusu Yap',
    'form.subtitle': 'Yeni özellikleri ilk sen deneyin! Kayıtlar kiruhiofficial@proton.me adresine iletilir.',
    'form.emailPlaceholder': 'E-posta adresin',
    'form.emailError': 'Geçerli bir e-posta adresi girin.',
    'form.usernamePlaceholder': 'Kullanıcı adın (isteğe bağlı)',
    'form.platformsLabel': 'En çok kullandığın platformlar',
    'form.optional': '(isteğe bağlı)',
    'form.other': 'Diğer',
    'form.expectLabel': "NewsRssFeed'den beklentin?",
    'form.expectPlaceholder': 'Fikirlerini bizimle paylaş...',
    'form.submit': 'Başvuruyu e-posta ile Gönder',
    'form.sending': 'E-posta Hazırlanıyor...',
    'form.privacySafe': 'Bilgilerin güvende.',
    'form.privacyLink': 'Gizlilik Politikamızda',
    'form.privacyDetails': 'detaylar.',
    'form.successTitle': 'Başvurun Alındı!',
    'form.successText': 'Beta başvuru bilgileriniz kiruhiofficial@proton.me adresine e-posta olarak iletilmek üzere açıldı. Davetinizi en kısa sürede göndereceğiz.',
    'features.f1Title': 'Tüm İçeriklerin Tek Yerde',
    'features.f1Desc': 'Farklı platformları tek bir akışta birleştir. Sekme sekme gezinmeye son ver.',
    'features.f2Title': 'Kendi Akışını Oluştur',
    'features.f2Desc': 'İstediğin kaynakları ekle, kaldır, sırala: tamamen senin kontrolünde.',
    'features.f3Title': 'Daha Düzenli Deneyim',
    'features.f3Desc': 'Gürültüyü filtrele, önemli içeriklere odaklan.',
    'features.f4Title': 'Kontrol Senin Elinde',
    'features.f4Desc': 'Algoritmaya değil kendi tercihlerine güven.',
    'features.heading': 'Sosyal Medya Akışınızı Kolayca Yönetin',
    'features.subtext': 'Tüm platformları tek bir ekranda birleştirerek zamandan tasarruf edin.',
    'why.heading': 'Kullanıcı Neden NewRssFeed Kullanmalı?',
    'why.subtext': 'Dağınık sosyal medya sekmelerinden, algoritmik tuzaklardan ve dikkat dağıtıcı reklamlardan sıkıldıysan doğru yerdesin.',
    'why.badge': 'Video Tanıtımı • 2 Dakikada Keşfet',
    'why.videoTitle': 'NewRssFeed 2 Dakikada Nasıl Hayatınızı Kolaylaştırır?',
    'why.videoSubtitle': 'Algoritmik gürültüye son verin. Takip ettiğiniz 5 büyük platform tek bir sessiz ve düzenli akışta birleşsin.',
    'why.ch1': '01. Algoritmik Kaosa Son',
    'why.ch1Desc': 'Sizi yönlendiren değil, sizin yönettiğiniz akış',
    'why.ch2': '02. 5 Platform Tek Ekranda',
    'why.ch2Desc': 'YouTube, Reddit, GitHub, X ve Medium',
    'why.ch3': '03. Pure Black & Gizlilik',
    'why.ch3Desc': 'OLED siyah tema ve sıfır veri takibi',
    'why.r1Title': 'Sonsuz Algoritma Tuzağına Son',
    'why.r1Desc': 'Zamanınızı çalan öneri algoritmalarından kurtulun; sadece seçtiğiniz içerikleri kronolojik sırayla görün.',
    'why.r2Title': '5 Platform, Sıfır Sekme Karmaşası',
    'why.r2Desc': 'YouTube, Reddit, GitHub, X ve Medium için ayrı ayrı uygulamalar açmak yerine tek akışta takip edin.',
    'why.r3Title': 'Göz Dostu Pure Black OLED Tema',
    'why.r3Desc': 'Gözünüzü yormayan, sıfır ışık sızması sağlayan tam siyah karanlık tema ile rahat bir okuma deneyimi.',
    'why.r4Title': 'Sıfır Reklam, %100 Veri Gizliliği',
    'why.r4Desc': 'Verileriniz satılmaz, profiliniz çıkarılmaz. Rahatsız edici sponsorlu reklamlar olmadan özgürce okuyun.',
    'faq.heading': 'Sıkça Sorulan Sorular',
    'faq.subtext': 'Aklında kalanları giderelim',
    'faq.q1': 'NewRssFeed nedir?',
    'faq.a1': 'NewRssFeed, sosyal medya içeriklerini tek bir akışta birleştiren bir platformdur. YouTube, Reddit, GitHub, X ve Medium gibi kaynakları tek yerden takip etmeni sağlar.',
    'faq.q2': 'Beta süreci nasıl işliyor?',
    'faq.a2': 'Kapalı beta dönemindeyiz. Formu doldurduğunuzda başvuru bilgileriniz kiruhiofficial@proton.me adresine iletilir ve erişim davetiniz e-posta ile gönderilir.',
    'faq.q3': 'Hangi platformları destekliyorsunuz?',
    'faq.a3': 'Şu anda YouTube, Reddit, GitHub, X (Twitter) ve Medium destekleniyor. Beta sürecinde daha fazla platform eklemeyi planlıyoruz.',
    'faq.q4': 'Ücretli mi olacak?',
    'faq.a4': 'Beta döneminde tamamen ücretsiz. Lansman sonrası temel özellikler ücretsiz kalacak, gelişmiş özellikler için opsiyonel bir plan düşünülüyor.',
    'faq.q5': 'Verilerim güvende mi?',
    'faq.a5': 'Evet. Verilerini satmıyoruz, reklam için takip etmiyoruz. Gizlilik önceliğimiz ve tüm bilgilerin senin kontrolünde.',
    'faq.moreQ': 'Başka soruların mı var?',
    'faq.contact': 'Bize ulaş (kiruhiofficial@proton.me) →',
    'footer.copyright': '© 2026 NewRssFeed. Tüm hakları saklıdır.',
    'footer.privacy': 'Gizlilik',
    'footer.terms': 'Kullanım Şartları',
    'footer.contact': 'İletişim (kiruhiofficial@proton.me)',
  },
  en: {
    'nav.features': 'Features',
    'nav.why': 'Why NewRssFeed?',
    'nav.faq': 'FAQ',
    'nav.cta': 'Join Beta',
    'nav.themeToggle': 'Toggle theme',
    'nav.langToggle': 'Change language',
    'hero.badge': '2026 Closed Beta',
    'hero.headline1': 'Your social media',
    'hero.headline2a': 'all in one place',
    'hero.headline2b': '',
    'hero.subtext': 'Combine the platforms you follow into a single feed with NewRssFeed. Experience a more organized, freer content journey.',
    'hero.cta': 'Join Closed Beta',
    'hero.limited': 'Limited beta access 2026',
    'hero.more': 'More',
    'form.title': 'Apply for Beta',
    'form.subtitle': 'Be the first to try new features! Submissions are sent to kiruhiofficial@proton.me.',
    'form.emailPlaceholder': 'Your email address',
    'form.emailError': 'Please enter a valid email address.',
    'form.usernamePlaceholder': 'Your username (optional)',
    'form.platformsLabel': 'Platforms you use most',
    'form.optional': '(optional)',
    'form.other': 'Other',
    'form.expectLabel': 'What do you expect from NewRssFeed?',
    'form.expectPlaceholder': 'Share your thoughts with us...',
    'form.submit': 'Submit via Email',
    'form.sending': 'Preparing Email...',
    'form.privacySafe': 'Your data is safe.',
    'form.privacyLink': 'in our Privacy Policy',
    'form.privacyDetails': 'details.',
    'form.successTitle': 'Application Received!',
    'form.successText': 'Your beta application details were prepared to be sent to kiruhiofficial@proton.me. We will send your invitation shortly.',
    'features.f1Title': 'All Your Content in One Place',
    'features.f1Desc': 'Combine different platforms into a single feed. No more tab hopping.',
    'features.f2Title': 'Build Your Own Feed',
    'features.f2Desc': 'Add, remove, and arrange sources as you like: fully in your control.',
    'features.f3Title': 'A More Organized Experience',
    'features.f3Desc': 'Filter the noise, focus on what matters.',
    'features.f4Title': "You're in Control",
    'features.f4Desc': 'Trust your own preferences, not an algorithm.',
    'why.heading': 'Why Should You Use NewRssFeed?',
    'why.subtext': 'Tired of cluttered social media tabs, algorithmic manipulation, and distracting ads? You are in the right place.',
    'why.badge': 'Video Showcase • 2 Min Overview',
    'why.videoTitle': 'How Does NewRssFeed Simplify Your Day in 2 Minutes?',
    'why.videoSubtitle': 'Stop fighting algorithmic noise. Unite all 5 major platforms into a quiet, organized chronological stream.',
    'why.ch1': '01. End Algorithmic Chaos',
    'why.ch1Desc': 'A feed controlled by you, not recommendation engines',
    'why.ch2': '02. 5 Platforms in 1 Screen',
    'why.ch2Desc': 'YouTube, Reddit, GitHub, X, and Medium',
    'why.ch3': '03. Pure Black & Privacy',
    'why.ch3Desc': 'OLED black theme and zero data tracking',
    'why.r1Title': 'Escape the Endless Doom-Scroll',
    'why.r1Desc': 'Break free from recommendation algorithms; only see creators you choose in pure chronological order.',
    'why.r2Title': '5 Platforms, Zero Tab Clutter',
    'why.r2Desc': 'No need to juggle 5 separate apps; read YouTube, Reddit, GitHub, X, and Medium in a unified stream.',
    'why.r3Title': 'Eye-Friendly Pure Black OLED',
    'why.r3Desc': 'A distraction-free, zero-light-bleed pure black interface designed for strain-free reading.',
    'why.r4Title': 'Zero Ads, 100% Privacy-First',
    'why.r4Desc': 'No data selling, no behavioral profiling, and no sponsored clutter. Just your content.',
    'faq.heading': 'Frequently Asked Questions',
    'faq.subtext': "Let's clear things up",
    'faq.q1': 'What is NewRssFeed?',
    'faq.a1': 'NewRssFeed is a platform that brings social media content together in a single feed. It lets you follow sources like YouTube, Reddit, GitHub, X, and Medium all in one place.',
    'faq.q2': 'How does the beta process work?',
    'faq.a2': "We're in closed beta. When you submit the form, your registration details are sent to kiruhiofficial@proton.me and an invitation is emailed to you.",
    'faq.q3': 'Which platforms do you support?',
    'faq.a3': 'Currently YouTube, Reddit, GitHub, X (Twitter), and Medium are supported. We plan to add more platforms during the beta process.',
    'faq.q4': 'Will it be paid?',
    'faq.a4': "During beta, it's completely free. After launch, core features will remain free, with an optional plan for advanced features.",
    'faq.q5': 'Is my data safe?',
    'faq.a5': "Yes. We don't sell your data or track you for ads. Privacy is our priority, and all your information is under your control.",
    'faq.moreQ': 'Have other questions?',
    'faq.contact': 'Contact us (kiruhiofficial@proton.me) →',
    'footer.copyright': '© 2026 NewRssFeed. All rights reserved.',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.contact': 'Contact (kiruhiofficial@proton.me)',
  }
}

function t(key: string): string {
  return translations[currentLang][key] ?? key
}

// ─── Simple Icons (simpleicons.org) ──────────────────────────────────────────
const SI = {
  youtube: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  reddit: 'M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485l-2.286 2.286C.775 23.225 1.097 24 1.738 24H12c6.627 0 12-5.373 12-12S18.627 0 12 0Zm4.388 3.199c1.104 0 1.999.895 1.999 1.999 0 1.105-.895 2-1.999 2-.946 0-1.739-.657-1.947-1.539v.002c-1.147.162-2.032 1.15-2.032 2.341v.007c1.776.067 3.4.567 4.686 1.363.473-.363 1.064-.58 1.707-.58 1.547 0 2.802 1.254 2.802 2.802 0 1.117-.655 2.081-1.601 2.531-.088 3.256-3.637 5.876-7.997 5.876-4.361 0-7.905-2.617-7.998-5.87-.954-.447-1.614-1.415-1.614-2.538 0-1.548 1.255-2.802 2.803-2.802.645 0 1.239.218 1.712.585 1.275-.79 2.881-1.291 4.64-1.365v-.01c0-1.663 1.263-3.034 2.88-3.207.188-.911.993-1.595 1.959-1.595Zm-8.085 8.376c-.784 0-1.459.78-1.506 1.797-.047 1.016.64 1.429 1.426 1.429.786 0 1.371-.369 1.418-1.385.047-1.017-.553-1.841-1.338-1.841Zm7.406 0c-.786 0-1.385.824-1.338 1.841.047 1.017.634 1.385 1.418 1.385.785 0 1.473-.413 1.426-1.429-.046-1.017-.721-1.797-1.506-1.797Zm-3.703 4.013c-.974 0-1.907.048-2.77.135-.147.015-.241.168-.183.305.483 1.154 1.622 1.964 2.953 1.964 1.33 0 2.47-.81 2.953-1.964.057-.137-.037-.29-.184-.305-.863-.087-1.795-.135-2.769-.135Z',
  x: 'M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z',
  github: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  medium: 'M4.21 0A4.201 4.201 0 0 0 0 4.21v15.58A4.201 4.201 0 0 0 4.21 24h15.58A4.201 4.201 0 0 0 24 19.79v-1.093c-.137.013-.278.02-.422.02-2.577 0-4.027-2.146-4.09-4.832a7.592 7.592 0 0 1 .022-.708c.093-1.186.475-2.241 1.105-3.022a3.885 3.885 0 0 1 1.395-1.1c.468-.237 1.127-.367 1.664-.367h.023c.101 0 .202.004.303.01V4.211A4.201 4.201 0 0 0 19.79 0Zm.198 5.583h4.165l3.588 8.435 3.59-8.435h3.864v.146l-.019.004c-.705.16-1.063.397-1.063 1.254h-.003l.003 10.274c.06.676.424.885 1.063 1.03l.02.004v.145h-4.923v-.145l.019-.005c.639-.144.994-.353 1.054-1.03V7.267l-4.745 11.15h-.261L6.15 7.569v9.445c0 .857.358 1.094 1.063 1.253l.02.004v.147H4.405v-.147l.019-.004c.705-.16 1.065-.397 1.065-1.253V6.987c0-.857-.358-1.094-1.064-1.254l-.018-.004zm19.25 3.668c-1.086.023-1.733 1.323-1.813 3.124H24V9.298a1.378 1.378 0 0 0-.342-.047Zm-1.862 3.632c-.1 1.756.86 3.239 2.204 3.634v-3.634z',
  discord: 'M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z',
  instagram: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
}

function si(path: string, cls: string): string {
  return `<svg class="${cls}" fill="currentColor" viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="${path}"/></svg>`
}

// ─── Navbar ──────────────────────────────────────────────────────────────────
function Navbar(): string {
  const langLabel = currentLang === 'tr' ? 'EN' : 'TR'
  return /* html */ `
    <nav id="main-nav" class="fixed top-0 left-0 right-0 z-50
        bg-white/90 dark:bg-black/90
        backdrop-blur-md
        border-b border-gray-100 dark:border-gray-800
        transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        <!-- Logo -->
        <a href="/" class="flex items-center gap-2 flex-shrink-0">
          <div class="w-9 h-9 rounded-xl overflow-hidden flex-shrink-0 ring-2 ring-orange-400/40">
            <img src="${basePath('logo.jpg')}" alt="NewRssFeed logo" width="36" height="36" loading="eager"
              class="w-full h-full object-cover mix-blend-multiply dark:mix-blend-screen" />
          </div>
          <span class="font-bold text-gray-900 dark:text-white text-lg tracking-tight">NewRssFeed</span>
        </a>

        <!-- Nav Links (desktop) -->
        <div class="hidden md:flex items-center gap-8">
          <a href="#features" class="text-gray-500 dark:text-gray-400 text-sm font-medium transition-colors">${t('nav.features')}</a>
          <a href="#why"      class="text-gray-500 dark:text-gray-400 text-sm font-medium transition-colors">${t('nav.why')}</a>
          <a href="#faq"      class="text-gray-500 dark:text-gray-400 text-sm font-medium transition-colors">${t('nav.faq')}</a>
        </div>

        <!-- Right: lang toggle + dark toggle + CTA -->
        <div class="flex items-center gap-3">
          <!-- Language toggle -->
          <button id="lang-toggle" aria-label="${t('nav.langToggle')}"
            class="flex items-center gap-1 px-2.5 h-9 rounded-full
                   bg-gray-100 dark:bg-gray-800
                   text-gray-600 dark:text-gray-300
                   transition-all duration-200 flex-shrink-0">
            <i data-lucide="languages" class="w-4 h-4"></i>
            <span class="text-xs font-bold">${langLabel}</span>
          </button>

          <!-- Dark / Light toggle -->
          <button id="theme-toggle" aria-label="${t('nav.themeToggle')}"
            class="w-9 h-9 rounded-full flex items-center justify-center
                   bg-gray-100 dark:bg-gray-800
                   text-gray-600 dark:text-gray-300
                   transition-all duration-200 flex-shrink-0">
            <i id="theme-icon-sun"  data-lucide="sun"  class="w-4 h-4 hidden"></i>
            <i id="theme-icon-moon" data-lucide="moon" class="w-4 h-4"></i>
          </button>

          <button id="nav-cta"
            class="flex items-center gap-2 px-5 py-2.5 rounded-full
                   bg-purple-600 text-white font-semibold text-sm
                   shadow-md transition-all duration-200 cursor-pointer">
            <span>${t('nav.cta')}</span>
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    </nav>
  `
}

// ─── Beta Form ────────────────────────────────────────────────────────────────
function BetaForm(): string {
  return /* html */ `
    <div id="beta-form"
      class="bg-white dark:bg-gray-900
             rounded-2xl shadow-xl
             border border-gray-100 dark:border-gray-800
             p-6 w-full max-w-sm relative z-20">

      <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-1">${t('form.title')}</h2>
      <p class="text-sm text-gray-600 dark:text-gray-300 mb-5">${t('form.subtitle')}</p>

      <form id="betaFormEl" class="flex flex-col gap-4" novalidate>

        <!-- Email -->
        <div>
          <div class="relative">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none">
              <i data-lucide="mail" class="w-4 h-4"></i>
            </span>
            <input id="beta-email" type="email" placeholder="${t('form.emailPlaceholder')}" required
              class="w-full pl-9 pr-9 py-2.5 rounded-lg text-sm
                     bg-white dark:bg-gray-800
                     border border-gray-200 dark:border-gray-700
                     text-gray-900 dark:text-white
                     placeholder-gray-500 dark:placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition" />
            <span class="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 text-xs font-bold pointer-events-none">*</span>
          </div>
          <p id="email-error" class="text-red-500 text-xs mt-1 hidden">${t('form.emailError')}</p>
        </div>

        <!-- Username -->
        <div class="relative">
          <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none">
            <i data-lucide="user" class="w-4 h-4"></i>
          </span>
          <input id="beta-username" type="text" placeholder="${t('form.usernamePlaceholder')}"
            class="w-full pl-9 pr-3 py-2.5 rounded-lg text-sm
                   bg-white dark:bg-gray-800
                   border border-gray-200 dark:border-gray-700
                   text-gray-900 dark:text-white
                   placeholder-gray-500 dark:placeholder-gray-400
                   focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition" />
        </div>

        <!-- Platform Chips -->
        <div>
          <p class="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
            ${t('form.platformsLabel')}
            <span class="font-normal text-gray-600 dark:text-gray-300">${t('form.optional')}</span>
          </p>
          <div class="flex flex-wrap gap-2" id="platform-chips">
            <button type="button" data-platform="youtube"
              class="platform-chip flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all
                     border border-gray-200 dark:border-gray-700
                     text-gray-700 dark:text-gray-300">
              ${si(SI.youtube, 'w-3.5 h-3.5 text-red-500 flex-shrink-0')}YouTube
            </button>
            <button type="button" data-platform="reddit"
              class="platform-chip flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all
                     border border-gray-200 dark:border-gray-700
                     text-gray-700 dark:text-gray-300">
              ${si(SI.reddit, 'w-3.5 h-3.5 text-orange-500 flex-shrink-0')}Reddit
            </button>
            <button type="button" data-platform="github"
              class="platform-chip flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all
                     border border-gray-200 dark:border-gray-700
                     text-gray-700 dark:text-gray-300">
              ${si(SI.github, 'w-3.5 h-3.5 text-gray-700 dark:text-gray-300 flex-shrink-0')}GitHub
            </button>
            <button type="button" data-platform="other"
              class="platform-chip flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all
                     border border-gray-200 dark:border-gray-700
                     text-gray-700 dark:text-gray-300">
              ${t('form.other')} <i data-lucide="chevron-down" class="w-3 h-3"></i>
            </button>
          </div>
        </div>

        <!-- Expectations -->
        <div>
          <p class="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">${t('form.expectLabel')}</p>
          <textarea id="beta-expectations" placeholder="${t('form.expectPlaceholder')}" rows="3"
            class="w-full px-3 py-2.5 rounded-lg text-sm resize-none
                   bg-white dark:bg-gray-800
                   border border-gray-200 dark:border-gray-700
                   text-gray-900 dark:text-white
                   placeholder-gray-500 dark:placeholder-gray-400
                   focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"></textarea>
        </div>

        <!-- Submit -->
        <button type="submit" id="submit-btn"
          class="w-full py-3 rounded-xl bg-purple-600
                 text-white font-semibold text-sm
                 transition-all duration-200 flex items-center justify-center gap-2">
          ${t('form.submit')}
        </button>

        <p class="text-center text-xs text-gray-600 dark:text-gray-300 flex items-center justify-center gap-1">
          <i data-lucide="lock" class="w-3 h-3 flex-shrink-0"></i>
          ${t('form.privacySafe')}
          <a href="#" class="text-purple-500 font-medium">${t('form.privacyLink')}</a> ${t('form.privacyDetails')}
        </p>
      </form>

      <!-- Success state -->
      <div id="form-success" class="hidden flex-col items-center justify-center py-10 gap-4 text-center">
        <div class="w-16 h-16 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center">
          <i data-lucide="check-circle" class="w-8 h-8 text-green-500"></i>
        </div>
        <h4 class="font-bold text-gray-900 dark:text-white text-lg">${t('form.successTitle')}</h4>
        <p class="text-sm text-gray-600 dark:text-gray-300 max-w-xs">${t('form.successText')}</p>
      </div>
    </div>
  `
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero(): string {
  return /* html */ `
    <section class="pt-28 pb-20 px-6 relative overflow-hidden
                    bg-white dark:bg-black transition-colors duration-300">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <!-- Left: Copy -->
        <div class="flex flex-col gap-7">

          <!-- Badge -->
          <div class="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full
                      bg-purple-50 dark:bg-purple-900/40
                      border border-purple-200 dark:border-purple-700">
            <div class="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
            <span class="text-xs font-semibold text-purple-700 dark:text-purple-300">${t('hero.badge')}</span>
          </div>

          <!-- Headline -->
          <div class="flex flex-col gap-1">
            <h1 class="text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-[1.08] tracking-tight">
              ${t('hero.headline1')}
            </h1>
            <h1 class="text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight">
              <span class="text-purple-600 dark:text-purple-400">${t('hero.headline2a')}</span><span class="text-gray-900 dark:text-white">${t('hero.headline2b')}</span>
            </h1>
          </div>

          <!-- Subtext -->
          <p class="text-gray-500 dark:text-gray-400 text-lg leading-relaxed max-w-lg">
            ${t('hero.subtext')}
          </p>

          <!-- Platform Pills (Simple Icons) -->
          <div class="flex items-center flex-wrap gap-3">
            <div class="platform-pill w-11 h-11 rounded-xl bg-red-50 dark:bg-red-900/30 border border-red-100 dark:border-red-800 flex items-center justify-center cursor-pointer transition-all" title="YouTube">
              ${si(SI.youtube, 'w-5 h-5 text-red-500')}
            </div>
            <div class="platform-pill w-11 h-11 rounded-xl bg-orange-50 dark:bg-orange-900/30 border border-orange-100 dark:border-orange-800 flex items-center justify-center cursor-pointer transition-all" title="Reddit">
              ${si(SI.reddit, 'w-5 h-5 text-orange-500')}
            </div>
            <div class="platform-pill w-11 h-11 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center cursor-pointer transition-all" title="X (Twitter)">
              ${si(SI.x, 'w-4 h-4 text-gray-800 dark:text-gray-200')}
            </div>
            <div class="platform-pill w-11 h-11 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center cursor-pointer transition-all" title="GitHub">
              ${si(SI.github, 'w-5 h-5 text-gray-800 dark:text-gray-200')}
            </div>
            <div class="platform-pill w-11 h-11 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center cursor-pointer transition-all" title="Medium">
              ${si(SI.medium, 'w-4 h-4 text-gray-800 dark:text-gray-200')}
            </div>
            <div class="platform-pill w-11 h-11 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center cursor-pointer transition-all" title="${t('hero.more')}">
              <i data-lucide="plus" class="w-4 h-4 text-gray-500 dark:text-gray-400"></i>
            </div>
          </div>

          <!-- CTA Row -->
          <div class="flex flex-wrap items-center gap-4">
            <button id="hero-cta"
              class="flex items-center gap-2.5 px-7 py-3.5 rounded-xl
                     bg-purple-600 text-white font-bold text-sm tracking-wide
                     shadow-lg transition-all duration-200 cursor-pointer">
              <i data-lucide="sparkles" class="w-4 h-4 text-purple-200"></i>
              <span>${t('hero.cta')}</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
            <div class="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
              <i data-lucide="users" class="w-4 h-4 text-purple-500"></i>
              <span>${t('hero.limited')}</span>
            </div>
          </div>
        </div>

        <!-- Right: Mascot + Form -->
        <div class="relative flex justify-center lg:justify-end pt-16 lg:pt-0">
          <!-- Mascot -->
          <div class="absolute -top-4 left-1/2 lg:left-auto lg:right-60 z-10 pointer-events-none"
               style="transform: translateX(-50%);">
            <img
              src="${basePath('mascot.jpg')}"
              alt="NewRssFeed maskot"
              width="120" height="120"
              loading="eager"
              class="w-28 h-28 lg:w-32 lg:h-32
                     object-cover object-center
                     rounded-full
                     ring-4 ring-white dark:ring-black
                     [mix-blend-mode:multiply] dark:[mix-blend-mode:screen]"
            />
          </div>

          ${BetaForm()}
        </div>
      </div>
    </section>
  `
}

// ─── Feature Item ─────────────────────────────────────────────────────────────
function FeatureItem(icon: string, iconColor: string, iconBg: string, darkBg: string, title: string, desc: string): string {
  return /* html */ `
    <div class="flex items-start gap-4">
      <div class="w-12 h-12 rounded-2xl ${iconBg} ${darkBg} flex items-center justify-center flex-shrink-0">
        <i data-lucide="${icon}" class="w-5 h-5 ${iconColor}"></i>
      </div>
      <div>
        <h3 class="font-bold text-gray-900 dark:text-white text-base mb-1">${title}</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">${desc}</p>
      </div>
    </div>
  `
}

// ─── App Preview / Features ───────────────────────────────────────────────────
function AppPreview(): string {
  return /* html */ `
    <section class="px-6 py-20
                    bg-gray-50 dark:bg-gray-900
                    transition-colors duration-300" id="features">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <!-- Phone screenshot -->
        <div class="relative flex justify-center lg:justify-start">
          <div class="relative">
            <!-- Phone shell -->
            <div class="relative rounded-[2.8rem] overflow-hidden
                        shadow-2xl
                        border-[5px] border-gray-800 dark:border-gray-700
                        bg-gray-900
                        w-[230px] sm:w-[260px]">
              <img
                src="${basePath('app-preview.png')}"
                alt="NewRssFeed uygulama ekranı"
                width="260" height="567"
                loading="lazy" decoding="async"
                class="w-full h-auto block" />
            </div>
          </div>
        </div>

        <!-- Feature list -->
        <div class="flex flex-col gap-8">
          ${FeatureItem('zap',          'text-yellow-500', 'bg-yellow-50',  'dark:bg-yellow-900/20', t('features.f1Title'), t('features.f1Desc'))}
          ${FeatureItem('shuffle',      'text-green-500',  'bg-green-50',   'dark:bg-green-900/20',  t('features.f2Title'), t('features.f2Desc'))}
          ${FeatureItem('shield-check', 'text-orange-500', 'bg-orange-50',  'dark:bg-orange-900/20', t('features.f3Title'), t('features.f3Desc'))}
          ${FeatureItem('rocket',       'text-purple-500', 'bg-purple-50',  'dark:bg-purple-900/20', t('features.f4Title'), t('features.f4Desc'))}
        </div>
      </div>
    </section>
  `
}

// ─── Why Section (Kullanıcı Neden NewRssFeed Kullanmalı? - Sade Video Alanı) ─────
function WhySection(): string {
  return /* html */ `
    <section class="px-6 py-20 bg-white dark:bg-black transition-colors duration-300" id="why" aria-labelledby="why-heading">
      <div class="max-w-4xl mx-auto text-center">
        <h2 id="why-heading" class="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          ${t('why.heading')}
        </h2>
        <p class="text-gray-500 dark:text-gray-400 text-base md:text-lg mb-8">
          ${t('why.subtext')}
        </p>

        <!-- Sadece Video -->
        <div class="w-full aspect-video rounded-2xl overflow-hidden bg-black border border-gray-200 dark:border-gray-800 shadow-lg">
          <video id="why-video" class="w-full h-full object-cover" poster="${basePath('hero.png')}" controls playsinline preload="metadata">
            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4">
            Tarayıcınız video etiketini desteklemiyor.
          </video>
        </div>
      </div>
    </section>
  `
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FaqSection(): string {
  const faqs = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
    { q: t('faq.q5'), a: t('faq.a5') },
  ]

  const faqHtml = faqs.map(f => /* html */ `
    <details class="group border-b border-gray-100 dark:border-gray-800 pb-5 mb-5">
      <summary class="flex items-center justify-between cursor-pointer
                      font-semibold text-gray-900 dark:text-white text-sm list-none py-1 select-none">
        ${f.q}
        <i data-lucide="chevron-down"
           class="w-4 h-4 text-gray-400 dark:text-gray-500 flex-shrink-0
                  group-open:rotate-180 transition-transform duration-200"></i>
      </summary>
      <p class="text-gray-500 dark:text-gray-400 text-sm mt-3 leading-relaxed">${f.a}</p>
    </details>
  `).join('')

  return /* html */ `
    <section class="px-6 py-20
                    bg-gray-50 dark:bg-gray-900
                    transition-colors duration-300" id="faq" aria-labelledby="faq-heading">
      <div class="max-w-2xl mx-auto">
        <h2 id="faq-heading" class="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-2 text-center">
          ${t('faq.heading')}
        </h2>
        <p class="text-gray-500 dark:text-gray-400 text-center mb-12">${t('faq.subtext')}</p>
        ${faqHtml}
        <div class="text-center mt-10">
          <p class="text-sm text-gray-400 dark:text-gray-500 mb-1">${t('faq.moreQ')}</p>
          <a href="mailto:kiruhiofficial@proton.me"
             class="text-purple-600 dark:text-purple-400 font-semibold text-sm">
            ${t('faq.contact')}
          </a>
        </div>
      </div>
    </section>
  `
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer(): string {
  return /* html */ `
    <footer class="border-t border-gray-100 dark:border-gray-800
                   bg-white dark:bg-black
                   px-6 py-8 transition-colors duration-300">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-3">
          <div class="w-7 h-7 rounded-lg overflow-hidden flex-shrink-0 ring-1 ring-orange-400/30">
            <img src="${basePath('logo.jpg')}" alt="NewRssFeed logo" width="28" height="28" loading="lazy"
              class="w-full h-full object-cover [mix-blend-mode:multiply] dark:[mix-blend-mode:screen]" />
          </div>
          <span class="font-bold text-gray-800 dark:text-white text-sm">NewRssFeed</span>
        </div>

        <!-- Social & Community Links -->
        <div class="flex items-center gap-2">
          <a href="https://discord.gg/wBw3NwqhsR" target="_blank" rel="noopener noreferrer"
             class="p-2 rounded-lg text-gray-500 hover:text-[#5865F2] hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
             title="Discord" aria-label="Discord Topluluğu">
            ${si(SI.discord, 'w-5 h-5')}
          </a>
          <a href="https://www.instagram.com/newrssfeed/" target="_blank" rel="noopener noreferrer"
             class="p-2 rounded-lg text-gray-500 hover:text-[#E4405F] hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
             title="Instagram @newrssfeed" aria-label="Instagram">
            ${si(SI.instagram, 'w-5 h-5')}
          </a>
          <a href="https://github.com/korayozkan/NewRssFeedbeta" target="_blank" rel="noopener noreferrer"
             class="p-2 rounded-lg text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
             title="GitHub" aria-label="GitHub Repository">
            ${si(SI.github, 'w-5 h-5')}
          </a>
        </div>

        <p class="text-xs text-gray-400 dark:text-gray-500 text-center">${t('footer.copyright')}</p>

        <div class="flex items-center gap-5">
          <a href="#" class="text-xs text-gray-400 dark:text-gray-500 transition-colors">${t('footer.privacy')}</a>
          <a href="#" class="text-xs text-gray-400 dark:text-gray-500 transition-colors">${t('footer.terms')}</a>
          <a href="mailto:kiruhiofficial@proton.me" class="text-xs text-gray-400 dark:text-gray-500 transition-colors">${t('footer.contact')}</a>
        </div>
      </div>
    </footer>
  `
}

// ─── SEO JSON-LD ──────────────────────────────────────────────────────────────
function SeoHead(): string {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NewRssFeed',
    url: 'https://korayozkan.github.io/NewRssFeedbeta/',
    logo: 'https://korayozkan.github.io/NewRssFeedbeta/hero.png',
    email: 'kiruhiofficial@proton.me',
    description: 'Sosyal medya içeriklerini tek bir akışta birleştiren platform.',
    sameAs: [
      'https://github.com/korayozkan/NewRssFeedbeta',
      'https://discord.gg/wBw3NwqhsR',
      'https://www.instagram.com/newrssfeed/'
    ]
  }

  const site = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'NewRssFeed',
    url: 'https://korayozkan.github.io/NewRssFeedbeta/',
    inLanguage: 'tr-TR',
    description: 'Sosyal medya içeriklerini tek bir akışta birleştir. YouTube, Reddit, GitHub, X ve Medium.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://korayozkan.github.io/NewRssFeedbeta/?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }

  const app = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'NewRssFeed',
    applicationCategory: 'SocialNetworkingApplication',
    operatingSystem: 'Web',
    url: 'https://korayozkan.github.io/NewRssFeedbeta/',
    description: 'Sosyal medya içeriklerini tek bir akışta birleştiren uygulama.',
    inLanguage: 'tr-TR',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'TRY',
      availability: 'https://schema.org/InStock'
    }
  }

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'NewRssFeed nedir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'NewRssFeed, sosyal medya içeriklerini tek bir akışta birleştiren bir platformdur. YouTube, Reddit, GitHub, X ve Medium gibi kaynakları tek yerden takip etmeni sağlar.'
        }
      },
      {
        '@type': 'Question',
        name: 'Beta süreci nasıl işliyor?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kapalı beta dönemindeyiz. Formu doldurduğunuzda başvuru bilgileriniz kiruhiofficial@proton.me adresine iletilir ve erişim davetiniz e-posta ile gönderilir.'
        }
      },
      {
        '@type': 'Question',
        name: 'Hangi platformları destekliyorsunuz?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Şu anda YouTube, Reddit, GitHub, X (Twitter) ve Medium destekleniyor.'
        }
      },
      {
        '@type': 'Question',
        name: 'Ücretli mi olacak?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Beta döneminde tamamen ücretsiz.'
        }
      },
      {
        '@type': 'Question',
        name: 'Verilerim güvende mi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Evet. Verilerini satmıyoruz, reklam için takip etmiyoruz.'
        }
      }
    ]
  }

  return /* html */ `
    <script type="application/ld+json">${JSON.stringify(org)}</script>
    <script type="application/ld+json">${JSON.stringify(site)}</script>
    <script type="application/ld+json">${JSON.stringify(app)}</script>
    <script type="application/ld+json">${JSON.stringify(faq)}</script>
  `
}

// ─── App Shell ────────────────────────────────────────────────────────────────
export function render() {
  const html = /* html */ `
    ${Navbar()}
    <main>
      ${Hero()}
      ${AppPreview()}
      ${WhySection()}
      ${FaqSection()}
    </main>
    ${Footer()}
  `
  return { head: SeoHead(), html }
}

// ─── Client-side Interactivity ────────────────────────────────────────────────
let navScrollHandler: (() => void) | null = null

export function initApp() {
  // ── Lucide icons ──
  if (typeof (window as any).lucide !== 'undefined') {
    (window as any).lucide.createIcons()
  }

  // ── Dark / Light mode ──
  const html = document.documentElement
  const sunIcon  = document.getElementById('theme-icon-sun')
  const moonIcon = document.getElementById('theme-icon-moon')

  function applyTheme(dark: boolean) {
    if (dark) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
    if (sunIcon)  sunIcon.classList.toggle('hidden', !dark)
    if (moonIcon) moonIcon.classList.toggle('hidden', dark)
    localStorage.setItem('nrf-theme', dark ? 'dark' : 'light')
  }

  // initial theme: saved pref → system pref → light
  const saved = localStorage.getItem('nrf-theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  applyTheme(saved === 'dark' || (!saved && prefersDark))

  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    applyTheme(!html.classList.contains('dark'))
    if (typeof (window as any).lucide !== 'undefined') {
      (window as any).lucide.createIcons()
    }
  })

  // ── Language toggle ──
  document.getElementById('lang-toggle')?.addEventListener('click', () => {
    const newLang: Lang = currentLang === 'tr' ? 'en' : 'tr'

    // Preserve form values across re-render
    const emailVal = (document.getElementById('beta-email') as HTMLInputElement | null)?.value ?? ''
    const usernameVal = (document.getElementById('beta-username') as HTMLInputElement | null)?.value ?? ''
    const expectVal = (document.getElementById('beta-expectations') as HTMLTextAreaElement | null)?.value ?? ''
    const activePlatforms = Array.from(document.querySelectorAll('.platform-chip.active-chip'))
      .map(c => (c as HTMLElement).dataset.platform || '')

    setLang(newLang)
    localStorage.setItem('nrf-lang', newLang)
    document.documentElement.lang = newLang

    const appEl = document.getElementById('app')
    if (appEl) {
      const { html: rendered } = render()
      appEl.innerHTML = rendered
    }

    // Restore form values
    const newEmail = document.getElementById('beta-email') as HTMLInputElement | null
    if (newEmail) newEmail.value = emailVal
    const newUsername = document.getElementById('beta-username') as HTMLInputElement | null
    if (newUsername) newUsername.value = usernameVal
    const newExpect = document.getElementById('beta-expectations') as HTMLTextAreaElement | null
    if (newExpect) newExpect.value = expectVal
    activePlatforms.forEach(p => {
      document.querySelector(`.platform-chip[data-platform="${p}"]`)?.classList.add('active-chip')
    })

    initApp()
  })

  // ── Scroll CTAs to beta form & focus email input ──
  ;['nav-cta', 'hero-cta'].forEach(id => {
    document.getElementById(id)?.addEventListener('click', () => {
      const formEl = document.getElementById('beta-form')
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
        setTimeout(() => {
          const emailInput = document.getElementById('beta-email') as HTMLInputElement | null
          if (emailInput) {
            emailInput.focus()
            emailInput.classList.add('ring-4', 'ring-purple-500/30', 'border-purple-500')
            setTimeout(() => {
              emailInput.classList.remove('ring-4', 'ring-purple-500/30')
            }, 1200)
          }
        }, 400)
      }
    })
  })

  // ── Platform chip toggle ──
  document.querySelectorAll('.platform-chip').forEach(chip => {
    chip.addEventListener('click', () => chip.classList.toggle('active-chip'))
  })

  // ── Beta form submission ──
  const form = document.getElementById('betaFormEl') as HTMLFormElement | null
  if (form) {
    form.addEventListener('submit', (e: Event) => {
      e.preventDefault()
      const emailInput = document.getElementById('beta-email') as HTMLInputElement
      const emailError = document.getElementById('email-error') as HTMLElement
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      if (!emailRegex.test(emailInput.value.trim())) {
        emailError.classList.remove('hidden')
        emailInput.classList.add('border-red-400', 'ring-2', 'ring-red-200')
        emailInput.focus()
        return
      }

      emailError.classList.add('hidden')
      emailInput.classList.remove('border-red-400', 'ring-2', 'ring-red-200')

      const email = emailInput.value.trim()
      const username = (document.getElementById('beta-username') as HTMLInputElement)?.value.trim() || 'Belirtilmedi'
      const expect = (document.getElementById('beta-expectations') as HTMLTextAreaElement)?.value.trim() || 'Belirtilmedi'
      const activePlatforms = Array.from(document.querySelectorAll('.platform-chip.active-chip'))
        .map(c => (c as HTMLElement).dataset.platform || (c as HTMLElement).innerText.trim())
      const platformsStr = activePlatforms.length > 0 ? activePlatforms.join(', ') : 'Belirtilmedi'

      const subject = encodeURIComponent(`NewRssFeed 2026 Beta Başvurusu (${email})`)
      const body = encodeURIComponent(
        `Merhaba,\n\nNewRssFeed Kapalı Beta katılım talebi:\n\n` +
        `• E-posta Adresi: ${email}\n` +
        `• Kullanıcı Adı: ${username}\n` +
        `• Tercih Edilen Platformlar: ${platformsStr}\n` +
        `• Beklentiler / Fikirler: ${expect}\n\n` +
        `Tarih: 2026\n`
      )

      const mailtoUrl = `mailto:kiruhiofficial@proton.me?subject=${subject}&body=${body}`

      const btn = document.getElementById('submit-btn') as HTMLButtonElement
      btn.disabled = true
      btn.innerHTML = `
        <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
        </svg>
        ${t('form.sending')}
      `

      // Send via mailto to kiruhiofficial@proton.me
      window.location.href = mailtoUrl

      setTimeout(() => {
        form.classList.add('hidden')
        const success = document.getElementById('form-success') as HTMLElement
        success.classList.remove('hidden')
        success.classList.add('flex')
        if (typeof (window as any).lucide !== 'undefined') {
          (window as any).lucide.createIcons()
        }
      }, 1000)
    })
  }

  // ── Sticky nav shadow ──
  const nav = document.querySelector('nav')
  if (nav) {
    if (navScrollHandler) {
      window.removeEventListener('scroll', navScrollHandler)
    }
    navScrollHandler = () => {
      nav.classList.toggle('shadow-md', window.scrollY > 10)
    }
    window.addEventListener('scroll', navScrollHandler, { passive: true })
  }
}
