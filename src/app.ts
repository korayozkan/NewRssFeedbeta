// NewRssFeed — Main App Entry (Social Discovery & Shared Feeds with Friends)
// Brand Palette: Majorelle Blue (#6d4aff), Medium Slate Blue (#8b72ff), Lavender (#eee9ff), White Smoke (#f5f4f7), Shadow Grey (#17151c)

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
    'nav.how': 'Nasıl Çalışır?',
    'nav.about': 'Hakkımızda',
    'nav.pricing': 'Fiyatlandırma',
    'nav.faq': 'SSS',
    'nav.signin': 'İletişim',
    'nav.cta': 'Gelişmeleri Takip Et',
    'nav.themeToggle': 'Tema değiştir',
    'nav.langToggle': 'Dili değiştir',

    'hero.badge': 'Geliştirme aşamasında',
    'hero.headline1': 'Sosyal medyanı',
    'hero.headline2a': 'tek bir yerde',
    'hero.headline2b': ' keşfet.',
    'hero.subtext': 'NewRssFeed, YouTube, Reddit, GitHub, X ve Medium içeriklerini tek akışta toplamayı ve arkadaşlarla birlikte keşfetmeyi hedefleyen bir proje. Şu anda geliştirme aşamasında.',
    'hero.cta': 'Gelişmeleri Takip Et',
    'hero.secondaryCta': 'Nasıl Çalışır?',
    'hero.limited': 'Beta tarihi henüz açıklanmadı',

    'proof.stat1': 'YouTube · Reddit · GitHub · X · Medium',
    'proof.stat1Desc': 'Projede adı geçen içerik kaynakları',
    'proof.stat2': 'Açık kaynak',
    'proof.stat2Desc': 'Projeyi GitHub’da incele',
    'proof.stat3': 'Geliştirme aşamasında',
    'proof.stat3Desc': 'Ortak akış fikri üzerinde çalışılıyor',
    'proof.openSource': 'GitHub Açık Kaynak Projesi',

    'features.heading': 'Neden NewRssFeed?',
    'features.subtext': 'Planlanan ürün fikri ve geliştirme hedefleri.',
    'features.f1Title': 'Tek Akış Vizyonu',
    'features.f1Desc': 'Proje, farklı sosyal kaynakları tek bir akışta toplamayı amaçlıyor.',
    'features.f2Title': 'Arkadaşlarla Ortak Akış',
    'features.f2Desc': 'Projenin hedefi, arkadaşlarınla ortak akışlar kurup içerikleri birlikte keşfedebilmek.',
    'features.f3Title': 'Daha Sakin Bir Akış',
    'features.f3Desc': 'Dağınık içerikleri tek yerde takip etme fikri üzerine geliştiriliyor.',
    'features.f4Title': 'Kişiselleştirilmiş Akış',
    'features.f4Desc': 'Kaynak seçimi ve akışı kişiselleştirme, planlanan deneyimin parçaları.',
    'features.f5Title': 'Arama ve Filtreleme Hedefi',
    'features.f5Desc': 'Arama ve filtreleme, geliştirme hedefleri arasında.',
    'features.f6Title': 'Gizlilik Odaklı',
    'features.f6Desc': 'Gizlilik ve reklam takibi yapmama proje hedefleri arasında.',

    'how.heading': 'Planlanan Deneyim',
    'how.subtext': 'Aşağıdaki adımlar ürün vizyonunu anlatıyor; henüz çalışan bir beta akışı değildir.',
    'how.s1Title': '1. Kaynaklarını Seç',
    'how.s1Desc': 'Beta erişimi henüz açılmadı. Duyurular için GitHub projesini takip edin.',
    'how.s2Title': '2. Akışını Düzenle',
    'how.s2Desc': 'Planlanan deneyim, farklı kaynakları tek akışta ve arkadaşlarla birlikte takip etmek.',
    'how.s3Title': '3. Arkadaşlarınla Keşfet',
    'how.s3Desc': 'Bu özellikler geliştirme hedefidir; henüz kullanılabilir olduklarını söylemiyoruz.',

    'showcase.heading': 'Arayüz Konsepti',
    'showcase.subtext': 'Bu bölüm ürünün nasıl görünebileceğini gösteren bir tasarım örneğidir; canlı uygulama değildir.',

    'pricing.heading': 'Fiyatlandırma',
    'pricing.subtext': 'Şu anda ürün ve fiyatlandırma üzerinde çalışıyoruz. Beta erişimi ve ücretler kesinleştiğinde burada paylaşacağız.',

    'faq.heading': 'Sıkça Sorulan Sorular',
    'faq.subtext': 'Aklında kalanları giderelim',
    'faq.q1': 'NewRssFeed nedir?',
    'faq.a1': 'Farklı sosyal kaynakları tek akışta toplamayı ve arkadaşlarla içerik keşfetmeyi hedefleyen, geliştirme aşamasındaki açık kaynak bir proje.',
    'faq.q2': 'Hangi platformları destekliyorsunuz?',
    'faq.a2': 'Proje tanıtımında YouTube, Reddit, GitHub, X ve Medium kaynakları hedefleniyor. Her kaynağın beta sürümündeki kullanılabilirliği henüz doğrulanmadı.',
    'faq.q3': 'Arkadaşlarımızla nasıl ortak akış kurabiliriz?',
    'faq.a3': 'Arkadaşlarla ortak akış, projenin planlanan özelliklerinden biri. Kullanılabilir olduğunda beta duyurusunda ayrıntıları paylaşacağız.',
    'faq.q4': 'Beta ne zaman açılacak?',
    'faq.a4': 'Henüz kesin bir tarih açıklanmadı. Gelişmeler için GitHub deposunu takip edebilir veya e-posta ile bize ulaşabilirsiniz.',
    'faq.q5': 'Kullanım ücretli olacak mı?',
    'faq.a5': 'Henüz kesin fiyatlandırma belirlenmedi. Netleştiğinde duyuracağız.',
    'faq.q6': 'Verilerim nasıl korunuyor?',
    'faq.a6': 'Bu tanıtım sitesi e-posta uygulamanızda bir taslak açar; başvuru otomatik olarak sunucuya kaydedilmez. Ürün verilerinin işlenmesiyle ilgili ayrıntıları beta öncesinde yayımlayacağız.',

    'finalCta.heading': 'NewRssFeed gelişmelerini takip et.',
    'finalCta.subtext': 'Gelişmeleri takip etmek veya projeye ilgi bildirmek için e-posta taslağı oluşturun.',
    'finalCta.btn': 'E-posta ile İlgi Bildir',

    'form.title': 'İlgi Bildir',
    'form.subtitle': 'İlginizi e-posta ile bildirin. Gönder düğmesine sizin basmanız gerekir; başvuru siteye otomatik kaydedilmez.',
    'form.emailPlaceholder': 'E-posta adresin',
    'form.emailError': 'Geçerli bir e-posta adresi girin.',
    'form.usernamePlaceholder': 'Kullanıcı adın (isteğe bağlı)',
    'form.platformsLabel': 'En çok kullandığın platformlar',
    'form.optional': '(isteğe bağlı)',
    'form.other': 'Diğer',
    'form.expectLabel': "NewRssFeed'den beklentin?",
    'form.expectPlaceholder': 'Fikirlerini bizimle paylaş...',
    'form.submit': 'E-posta taslağı oluştur',
    'form.sending': 'E-posta Hazırlanıyor...',
    'form.privacySafe': 'Siteye başvuru kaydedilmez.',
    'form.privacyLink': 'Doğrudan e-posta gönder',
    'form.successTitle': 'E-posta Taslağı Hazırlama Denendi',
    'form.successText': 'E-posta uygulamanız açıldıysa, ilginizin bize ulaşması için Gönder düğmesine basın. Açılmadıysa kiruhiofficial@proton.me adresine yazabilirsiniz.',

    'footer.copyright': '© 2026 NewRssFeed. Tüm hakları saklıdır.',
    'footer.privacy': 'Gizlilik',
    'footer.terms': 'Kullanım Şartları',
    'footer.contact': 'İletişim',
    'seo.title': 'NewRssFeed: Sosyal Medya Akışı | Geliştirme Aşamasında',
    'seo.desc': 'YouTube, Reddit, GitHub, X ve Medium içeriklerini tek akışta toplamayı ve arkadaşlarla keşfetmeyi hedefleyen açık kaynak proje.',
  },
  en: {
    'nav.features': 'Features',
    'nav.how': 'How it works',
    'nav.about': 'About',
    'nav.pricing': 'Pricing',
    'nav.faq': 'FAQ',
    'nav.signin': 'Contact',
    'nav.cta': 'Follow Updates',
    'nav.themeToggle': 'Toggle theme',
    'nav.langToggle': 'Change language',

    'hero.badge': 'In development',
    'hero.headline1': 'Your social media',
    'hero.headline2a': 'all in one place',
    'hero.headline2b': '',
    'hero.subtext': 'NewRssFeed is a project aiming to bring YouTube, Reddit, GitHub, X, and Medium content into one feed and help friends discover together. It is currently in development.',
    'hero.cta': 'Follow Updates',
    'hero.secondaryCta': 'How it works',
    'hero.limited': 'Beta date not announced',

    'proof.stat1': 'YouTube · Reddit · GitHub · X · Medium',
    'proof.stat1Desc': 'Content sources named in the project',
    'proof.stat2': 'Open source',
    'proof.stat2Desc': 'Explore the project on GitHub',
    'proof.stat3': 'In development',
    'proof.stat3Desc': 'Shared feeds are a planned direction',
    'proof.openSource': 'GitHub Open Source Project',

    'features.heading': 'Why NewRssFeed?',
    'features.subtext': 'The product concept and its development goals.',
    'features.f1Title': 'One Feed Vision',
    'features.f1Desc': 'The project aims to bring different social sources into one feed.',
    'features.f2Title': 'Shared Feeds with Friends',
    'features.f2Desc': 'The project aims to let friends create shared feeds and discover content together.',
    'features.f3Title': 'A Calmer Feed',
    'features.f3Desc': 'The project is being developed around following content in one place.',
    'features.f4Title': 'Personalized Stream',
    'features.f4Desc': 'Choosing sources and personalizing a feed are part of the planned experience.',
    'features.f5Title': 'Search & Filtering Goals',
    'features.f5Desc': 'Search and filtering are among the development goals.',
    'features.f6Title': 'Privacy Goals',
    'features.f6Desc': 'Privacy and avoiding ad tracking are project goals.',

    'how.heading': 'Planned Experience',
    'how.subtext': 'These steps describe the product vision, not a working beta flow.',
    'how.s1Title': '1. Choose Sources',
    'how.s1Desc': 'Beta access is not open yet. Follow the project on GitHub for updates.',
    'how.s2Title': '2. Shape Your Feed',
    'how.s2Desc': 'The planned experience brings different sources into one feed for you and your friends.',
    'how.s3Title': '3. Discover with Friends',
    'how.s3Desc': 'These are development goals; we are not claiming they are available yet.',

    'showcase.heading': 'Interface Concept',
    'showcase.subtext': 'This section is a design example of what the product could look like, not a live application.',

    'pricing.heading': 'Pricing',
    'pricing.subtext': 'The product and pricing are still being worked out. We will share beta access and fees here when they are confirmed.',

    'faq.heading': 'Frequently Asked Questions',
    'faq.subtext': "Let's clear things up",
    'faq.q1': 'What is NewRssFeed?',
    'faq.a1': 'An open-source project in development that aims to bring social sources into one feed and help friends discover content together.',
    'faq.q2': 'Which platforms do you support?',
    'faq.a2': 'The project description names YouTube, Reddit, GitHub, X, and Medium as target sources. Availability in a beta release has not yet been confirmed.',
    'faq.q3': 'How can we create shared feeds with friends?',
    'faq.a3': 'Shared feeds with friends are part of the project direction. We will share details in the beta announcement when available.',
    'faq.q4': 'When will the beta open?',
    'faq.a4': 'No date has been confirmed. Follow the GitHub repository or contact us by email for updates.',
    'faq.q5': 'Will it be paid?',
    'faq.a5': 'Pricing has not been decided yet. We will announce it once confirmed.',
    'faq.q6': 'Is my data safe?',
    'faq.a6': 'This landing page opens an email draft; it does not automatically save applications to a server. We will publish details about product data handling before beta.',

    'finalCta.heading': 'Follow NewRssFeed updates.',
    'finalCta.subtext': 'Create an email draft to express interest or follow the project updates.',
    'finalCta.btn': 'Express Interest by Email',

    'form.title': 'Express Interest',
    'form.subtitle': 'Tell us you are interested by email. You must press Send; the application is not automatically saved on this site.',
    'form.emailPlaceholder': 'Your email address',
    'form.emailError': 'Please enter a valid email address.',
    'form.usernamePlaceholder': 'Your username (optional)',
    'form.platformsLabel': 'Platforms you use most',
    'form.optional': '(optional)',
    'form.other': 'Other',
    'form.expectLabel': 'What do you expect from NewRssFeed?',
    'form.expectPlaceholder': 'Share your thoughts with us...',
    'form.submit': 'Create email draft',
    'form.sending': 'Preparing Email...',
    'form.privacySafe': 'No application is saved on this site.',
    'form.privacyLink': 'Email us directly',
    'form.successTitle': 'Email Draft Requested',
    'form.successText': 'If your email app opened, press Send to reach us. If it did not, email kiruhiofficial@proton.me directly.',

    'footer.copyright': '© 2026 NewRssFeed. All rights reserved.',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.contact': 'Contact',
    'seo.title': 'NewRssFeed: Social Feed | In Development',
    'seo.desc': 'An open-source project aiming to bring YouTube, Reddit, GitHub, X, and Medium into one feed for discovery with friends.',
  }
}

function t(key: string): string {
  return translations[currentLang][key] ?? key
}

// ─── Simple Icons ─────────────────────────────────────────────────────────────
const SI = {
  youtube: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  reddit: 'M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485l-2.286 2.286C.775 23.225 1.097 24 1.738 24H12c6.627 0 12-5.373 12-12S18.627 0 12 0Zm4.388 3.199c1.104 0 1.999.895 1.999 1.999 0 1.105-.895 2-1.999 2-.946 0-1.739-.657-1.947-1.539v.002c-1.147.162-2.032 1.15-2.032 2.341v.007c1.776.067 3.4.567 4.686 1.363.473-.363 1.064-.58 1.707-.58 1.547 0 2.802 1.254 2.802 2.802 0 1.117-.655 2.081-1.601 2.531-.088 3.256-3.637 5.876-7.997 5.876-4.361 0-7.905-2.617-7.998-5.87-.954-.447-1.614-1.415-1.614-2.538 0-1.548 1.255-2.802 2.803-2.802.645 0 1.239.218 1.712.585 1.275-.79 2.881-1.291 4.64-1.365v-.01c0-1.663 1.263-3.034 2.88-3.207.188-.911.993-1.595 1.959-1.595Zm-8.085 8.376c-.784 0-1.459.78-1.506 1.797-.047 1.016.64 1.429 1.426 1.429.786 0 1.371-.369 1.418-1.385.047-1.017-.553-1.841-1.338-1.841Zm7.406 0c-.786 0-1.385.824-1.338 1.841.047 1.017.634 1.385 1.418 1.385.785 0 1.473-.413 1.426-1.429-.046-1.017-.721-1.797-1.506-1.797Zm-3.703 4.013c-.974 0-1.907.048-2.77.135-.147.015-.241.168-.183.305.483 1.154 1.622 1.964 2.953 1.964 1.33 0 2.47-.81 2.953-1.964.057-.137-.037-.29-.184-.305-.863-.087-1.795-.135-2.769-.135Z',
  x: 'M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z',
  github: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  medium: 'M4.21 0A4.201 4.201 0 0 0 0 4.21v15.58A4.201 4.201 0 0 0 4.21 24h15.58A4.201 4.201 0 0 0 24 19.79v-1.093c-.137.013-.278.02-.422.02-2.577 0-4.027-2.146-4.09-4.832a7.592 7.592 0 0 1 .022-.708c.093-1.186.475-2.241 1.105-3.022a3.885 3.885 0 0 1 1.395-1.1c.468-.237 1.127-.367 1.664-.367h.023c.101 0 .202.004.303.01V4.211A4.201 4.201 0 0 0 19.79 0Zm.198 5.583h4.165l3.588 8.435 3.59-8.435h3.864v.146l-.019.004c-.705.16-1.063.397-1.063 1.254h-.003l.003 10.274c.06.676.424.885 1.063 1.03l.02.004v.145h-4.923v-.145l.019-.005c.639-.144.994-.353 1.054-1.03V7.267l-4.745 11.15h-.261L6.15 7.569v9.445c0 .857.358 1.094 1.063 1.253l.02.004v.147H4.405v-.147l.019-.004c.705-.16 1.065-.397 1.065-1.253V6.987c0-.857-.358-1.094-1.064-1.254l-.018-.004zm19.25 3.668c-1.086.023-1.733 1.323-1.813 3.124H24V9.298a1.378 1.378 0 0 0-.342-.047Zm-1.862 3.632c-.1 1.756.86 3.239 2.204 3.634v-3.634z',
}

function si(path: string, cls: string): string {
  return `<svg class="${cls}" fill="currentColor" viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="${path}"/></svg>`
}

// ─── 01. Navbar ───────────────────────────────────────────────────────────────
function Navbar(): string {
  const langLabel = currentLang === 'tr' ? 'EN' : 'TR'
  return /* html */ `
    <nav id="main-nav" class="fixed top-0 left-0 right-0 z-50
        bg-[#f5f4f7]/90 dark:bg-[#17151c]/90
        backdrop-blur-md
        border-b border-gray-200/60 dark:border-gray-800
        transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        <!-- Logo -->
        <a href="/" class="flex items-center gap-2 flex-shrink-0">
          <div class="w-9 h-9 rounded-xl overflow-hidden flex-shrink-0 ring-2 ring-[#6d4aff]/40">
            <img src="${basePath('logo.jpg')}" alt="NewRssFeed Logo - Sosyal Medya Akış Platformu" width="36" height="36" loading="eager"
              class="w-full h-full object-cover mix-blend-multiply dark:mix-blend-screen" />
          </div>
          <span class="font-bold text-[#17151c] dark:text-white text-lg tracking-tight">NewRssFeed</span>
        </a>

        <!-- Nav Links (desktop) -->
        <div class="hidden md:flex items-center gap-8">
          <a href="#features" class="text-gray-600 dark:text-gray-300 text-sm font-medium transition-colors hover:text-[#6d4aff]">${t('nav.features')}</a>
          <a href="#how-it-works" class="text-gray-600 dark:text-gray-300 text-sm font-medium transition-colors hover:text-[#6d4aff]">${t('nav.how')}</a>
          <a href="#pricing"  class="text-gray-600 dark:text-gray-300 text-sm font-medium transition-colors hover:text-[#6d4aff]">${t('nav.pricing')}</a>
          <a href="#faq"      class="text-gray-600 dark:text-gray-300 text-sm font-medium transition-colors hover:text-[#6d4aff]">${t('nav.faq')}</a>
        </div>

        <!-- Right: lang toggle + dark toggle + Sign in + CTA -->
        <div class="flex items-center gap-3">
          <!-- Language toggle -->
          <button id="lang-toggle" aria-label="${t('nav.langToggle')}"
            class="flex items-center gap-1 px-2.5 h-9 rounded-full
                   bg-white dark:bg-gray-800
                   text-gray-700 dark:text-gray-200
                   border border-gray-200 dark:border-gray-700
                   transition-all duration-200 flex-shrink-0 cursor-pointer">
            <i data-lucide="languages" class="w-4 h-4"></i>
            <span class="text-xs font-bold">${langLabel}</span>
          </button>

          <!-- Dark / Light toggle -->
          <button id="theme-toggle" aria-label="${t('nav.themeToggle')}"
            class="w-9 h-9 rounded-full flex items-center justify-center
                   bg-white dark:bg-gray-800
                   text-gray-700 dark:text-gray-200
                   border border-gray-200 dark:border-gray-700
                   transition-all duration-200 flex-shrink-0 cursor-pointer">
            <i id="theme-icon-sun"  data-lucide="sun"  class="w-4 h-4 hidden"></i>
            <i id="theme-icon-moon" data-lucide="moon" class="w-4 h-4"></i>
          </button>

          <!-- Sign in link -->
          <button id="signin-btn" class="hidden sm:inline-block text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-[#6d4aff] transition cursor-pointer">
            ${t('nav.signin')}
          </button>

          <!-- Free Start CTA -->
          <button id="nav-cta"
            class="flex items-center gap-2 px-5 py-2.5 rounded-full
                   bg-[#6d4aff] hover:bg-[#8b72ff] text-white font-semibold text-sm
                   shadow-md transition-all duration-200 cursor-pointer">
            <span>${t('nav.cta')}</span>
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    </nav>
  `
}

// ─── 02. Hero Section ─────────────────────────────────────────────────────────
function HeroSection(): string {
  return /* html */ `
    <section class="pt-28 pb-20 px-6 relative overflow-hidden
                    bg-[#f5f4f7] dark:bg-[#17151c] transition-colors duration-300">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <!-- Left: Copy -->
        <div class="flex flex-col gap-7">

          <!-- Badge -->
          <div class="inline-flex items-center gap-2 w-fit px-3.5 py-1.5 rounded-full
                      bg-[#eee9ff] dark:bg-[#6d4aff]/20
                      border border-[#8b72ff]/30">
            <div class="w-2 h-2 rounded-full bg-[#6d4aff] animate-pulse"></div>
            <span class="text-xs font-semibold text-[#6d4aff] dark:text-[#8b72ff]">${t('hero.badge')}</span>
          </div>

          <!-- Headline -->
          <div class="flex flex-col gap-1">
            <h1 class="text-5xl lg:text-6xl font-extrabold text-[#17151c] dark:text-white leading-[1.08] tracking-tight">
              ${t('hero.headline1')}
            </h1>
            <h1 class="text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight">
              <span class="text-[#6d4aff] dark:text-[#8b72ff]">${t('hero.headline2a')}</span><span class="text-[#17151c] dark:text-white">${t('hero.headline2b')}</span>
            </h1>
          </div>

          <!-- Subtext -->
          <p class="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-lg">
            ${t('hero.subtext')}
          </p>

          <!-- Platform Pills -->
          <div class="flex items-center flex-wrap gap-3">
            <div class="platform-pill w-11 h-11 rounded-xl bg-red-50 dark:bg-red-900/30 border border-red-100 dark:border-red-800 flex items-center justify-center cursor-pointer transition-all" title="YouTube">
              ${si(SI.youtube, 'w-5 h-5 text-red-500')}
            </div>
            <div class="platform-pill w-11 h-11 rounded-xl bg-orange-50 dark:bg-orange-900/30 border border-orange-100 dark:border-orange-800 flex items-center justify-center cursor-pointer transition-all" title="Reddit">
              ${si(SI.reddit, 'w-5 h-5 text-orange-500')}
            </div>
            <div class="platform-pill w-11 h-11 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center cursor-pointer transition-all" title="X (Twitter)">
              ${si(SI.x, 'w-4 h-4 text-gray-800 dark:text-gray-200')}
            </div>
            <div class="platform-pill w-11 h-11 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center cursor-pointer transition-all" title="GitHub">
              ${si(SI.github, 'w-5 h-5 text-gray-800 dark:text-gray-200')}
            </div>
            <div class="platform-pill w-11 h-11 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center cursor-pointer transition-all" title="Medium">
              ${si(SI.medium, 'w-4 h-4 text-gray-800 dark:text-gray-200')}
            </div>
          </div>

          <!-- CTA Row -->
          <div class="flex flex-wrap items-center gap-4">
            <button id="hero-cta"
              class="flex items-center gap-2.5 px-7 py-3.5 rounded-xl
                     bg-[#6d4aff] hover:bg-[#8b72ff] text-white font-bold text-sm tracking-wide
                     shadow-lg transition-all duration-200 cursor-pointer">
              <i data-lucide="sparkles" class="w-4 h-4 text-[#eee9ff]"></i>
              <span>${t('hero.cta')}</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
            <a href="#how-it-works"
              class="flex items-center gap-2 px-6 py-3.5 rounded-xl
                     bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
                     text-gray-700 dark:text-gray-200 font-semibold text-sm
                     hover:border-[#6d4aff] transition-all duration-200">
              <span>${t('hero.secondaryCta')}</span>
            </a>
          </div>
        </div>

        <!-- Right: Mascot + Form -->
        <div class="relative flex justify-center lg:justify-end pt-16 lg:pt-0">
          <!-- Mascot -->
          <div class="absolute -top-4 left-1/2 lg:left-auto lg:right-60 z-10 pointer-events-none"
               style="transform: translateX(-50%);">
            <img
              src="${basePath('mascot.jpg')}"
              alt="NewRssFeed Maskot Karakteri"
              width="120" height="120"
              loading="eager"
              class="w-28 h-28 lg:w-32 lg:h-32
                     object-cover object-center
                     rounded-full
                     ring-4 ring-white dark:ring-[#17151c]
                     [mix-blend-mode:multiply] dark:[mix-blend-mode:screen]"
            />
          </div>

          ${BetaForm()}
        </div>
      </div>
    </section>
  `
}

// ─── 03. Social Proof (Güven) ─────────────────────────────────────────────────
function SocialProofSection(): string {
  return /* html */ `
    <section class="py-12 px-6 bg-white dark:bg-[#17151c] border-y border-gray-100 dark:border-gray-800 transition-colors">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        <div class="flex items-center justify-center md:justify-start gap-4">
          <div class="w-12 h-12 rounded-2xl bg-[#eee9ff] dark:bg-[#6d4aff]/20 flex items-center justify-center text-[#6d4aff]">
            <i data-lucide="layers" class="w-6 h-6"></i>
          </div>
          <div>
            <div class="font-extrabold text-lg text-[#17151c] dark:text-white">${t('proof.stat1')}</div>
            <div class="text-sm text-gray-600 dark:text-gray-300">${t('proof.stat1Desc')}</div>
          </div>
        </div>
        <a href="https://github.com/korayozkan/NewRssFeedbeta" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-4 text-left hover:opacity-80 transition-opacity">
          <div class="w-12 h-12 rounded-2xl bg-[#eee9ff] dark:bg-[#6d4aff]/20 flex items-center justify-center text-[#6d4aff]">
            <i data-lucide="code-2" class="w-6 h-6"></i>
          </div>
          <div>
            <div class="font-extrabold text-xl text-[#17151c] dark:text-white">${t('proof.stat2')}</div>
            <div class="text-sm text-gray-600 dark:text-gray-300">${t('proof.stat2Desc')}</div>
          </div>
        </a>
        <div class="flex items-center justify-center md:justify-end gap-4">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-[#eee9ff] dark:bg-[#6d4aff]/20 flex items-center justify-center text-[#6d4aff]"><i data-lucide="hammer" class="w-6 h-6"></i></div>
            <div class="text-left"><div class="font-extrabold text-lg text-[#17151c] dark:text-white">${t('proof.stat3')}</div><div class="text-sm text-gray-600 dark:text-gray-300">${t('proof.stat3Desc')}</div></div>
          </div>
        </div>
      </div>
    </section>
  `
}

// ─── 04. Problem ve Çözüm (Sadece Video) ──────────────────────────────────────
function ProblemSolutionSection(): string {
  return /* html */ `
    <section class="py-20 px-6 bg-[#f5f4f7] dark:bg-[#17151c] transition-colors" id="about">
      <div class="max-w-5xl mx-auto">
        <div class="text-center max-w-2xl mx-auto mb-14">
          <span class="text-xs font-bold uppercase tracking-wider text-[#6d4aff] bg-[#eee9ff] dark:bg-[#6d4aff]/20 px-3 py-1.5 rounded-full">
            ${currentLang === 'tr' ? 'Arayüz Konsepti' : 'Interface Concept'}
          </span>
          <h2 class="text-3xl lg:text-4xl font-extrabold text-[#17151c] dark:text-white mt-4 mb-3">
            ${currentLang === 'tr' ? "NewRssFeed'in Tasarım Fikrini Görün" : 'Explore the NewRssFeed Concept'}
          </h2>
          <p class="text-gray-600 dark:text-gray-300 text-lg">
            ${currentLang === 'tr' ? 'Görsel örnek, çalışan bir uygulama videosu değildir.' : 'This visual is a concept preview, not a video of a working application.'}
          </p>
        </div>

        <!-- Video Player Wrapper -->
        <div class="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-gray-900 group flex items-center justify-center">
          <div class="absolute inset-0 bg-gradient-to-tr from-[#17151c]/80 via-transparent to-[#6d4aff]/30 pointer-events-none"></div>
          <img src="${basePath('hero.png')}" alt="NewRssFeed Video Poster" class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition duration-700" />

          <div class="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between text-white text-sm font-medium">
            <span class="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full">${currentLang === 'tr' ? 'Tasarım örneği' : 'Design concept'}</span>
          </div>
        </div>
      </div>
    </section>
  `
}

// ─── 05. Özellikler (Features) ────────────────────────────────────────────────
function FeaturesSection(): string {
  const features = [
    { icon: 'globe', title: t('features.f1Title'), desc: t('features.f1Desc') },
    { icon: 'users', title: t('features.f2Title'), desc: t('features.f2Desc') },
    { icon: 'shield-ban', title: t('features.f3Title'), desc: t('features.f3Desc') },
    { icon: 'sliders', title: t('features.f4Title'), desc: t('features.f4Desc') },
    { icon: 'search', title: t('features.f5Title'), desc: t('features.f5Desc') },
    { icon: 'lock', title: t('features.f6Title'), desc: t('features.f6Desc') },
  ]

  const gridHtml = features.map(f => `
    <div class="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:border-[#6d4aff] transition group">
      <div class="w-12 h-12 rounded-xl bg-[#eee9ff] dark:bg-[#6d4aff]/20 flex items-center justify-center text-[#6d4aff] mb-4 group-hover:scale-110 transition-transform">
        <i data-lucide="${f.icon}" class="w-6 h-6"></i>
      </div>
      <h3 class="font-bold text-[#17151c] dark:text-white text-lg mb-2">${f.title}</h3>
      <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">${f.desc}</p>
    </div>
  `).join('')

  return /* html */ `
    <section class="py-20 px-6 bg-white dark:bg-[#17151c] transition-colors" id="features" aria-labelledby="features-heading">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 id="features-heading" class="text-3xl lg:text-4xl font-extrabold text-[#17151c] dark:text-white mb-4">
            ${t('features.heading')}
          </h2>
          <p class="text-gray-600 dark:text-gray-300 text-lg">${t('features.subtext')}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${gridHtml}
        </div>
      </div>
    </section>
  `
}

// ─── 06. Nasıl Çalışır? (How it works) ────────────────────────────────────────
function HowItWorksSection(): string {
  return /* html */ `
    <section class="py-20 px-6 bg-[#f5f4f7] dark:bg-gray-900 transition-colors" id="how-it-works">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="text-3xl lg:text-4xl font-extrabold text-[#17151c] dark:text-white mb-4">
            ${t('how.heading')}
          </h2>
          <p class="text-gray-600 dark:text-gray-300 text-lg">${t('how.subtext')}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-8 rounded-3xl bg-white dark:bg-[#17151c] border border-gray-200 dark:border-gray-800 text-center relative shadow-sm">
            <div class="w-12 h-12 rounded-2xl bg-[#6d4aff] text-white font-extrabold text-lg flex items-center justify-center mx-auto mb-6 shadow-md">
              1
            </div>
            <h3 class="font-bold text-[#17151c] dark:text-white text-xl mb-3">${t('how.s1Title')}</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">${t('how.s1Desc')}</p>
          </div>

          <div class="p-8 rounded-3xl bg-white dark:bg-[#17151c] border border-gray-200 dark:border-gray-800 text-center relative shadow-sm">
            <div class="w-12 h-12 rounded-2xl bg-[#6d4aff] text-white font-extrabold text-lg flex items-center justify-center mx-auto mb-6 shadow-md">
              2
            </div>
            <h3 class="font-bold text-[#17151c] dark:text-white text-xl mb-3">${t('how.s2Title')}</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">${t('how.s2Desc')}</p>
          </div>

          <div class="p-8 rounded-3xl bg-white dark:bg-[#17151c] border border-gray-200 dark:border-gray-800 text-center relative shadow-sm">
            <div class="w-12 h-12 rounded-2xl bg-[#6d4aff] text-white font-extrabold text-lg flex items-center justify-center mx-auto mb-6 shadow-md">
              3
            </div>
            <h3 class="font-bold text-[#17151c] dark:text-white text-xl mb-3">${t('how.s3Title')}</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">${t('how.s3Desc')}</p>
          </div>
        </div>
      </div>
    </section>
  `
}

// ─── 07. Ürün Tanıtımı (Product Showcase) ──────────────────────────────────────
function ProductShowcaseSection(): string {
  return /* html */ `
    <section class="py-20 px-6 bg-white dark:bg-[#17151c] transition-colors overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="text-3xl lg:text-4xl font-extrabold text-[#17151c] dark:text-white mb-4">
            ${t('showcase.heading')}
          </h2>
          <p class="text-gray-600 dark:text-gray-300 text-lg">${t('showcase.subtext')}</p>
        </div>

        <div class="flex justify-center">
          <div class="relative rounded-[2.8rem] overflow-hidden
                      shadow-2xl shadow-[#6d4aff]/20
                      border-[5px] border-gray-800 dark:border-gray-700
                      bg-gray-900
                      w-[260px] sm:w-[300px]">
            <img
              src="${basePath('app-preview.png')}"
              alt="NewRssFeed Uygulama Ekranı - Mobil Arayüz Önizlemesi"
              width="300" height="650"
              loading="lazy" decoding="async"
              class="w-full h-auto block" />
          </div>
        </div>
      </div>
    </section>
  `
}

// ─── 08. Fiyatlandırma (Pricing Status) ───────────────────────────────────────
function PricingSection(): string {
  return /* html */ `
    <section class="py-20 px-6 bg-[#f5f4f7] dark:bg-gray-900 transition-colors" id="pricing">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="text-3xl lg:text-4xl font-extrabold text-[#17151c] dark:text-white mb-4">
            ${t('pricing.heading')}
          </h2>
          <p class="text-gray-600 dark:text-gray-300 text-lg">${t('pricing.subtext')}</p>
        </div>

        <div class="max-w-2xl mx-auto p-8 md:p-10 rounded-3xl bg-white dark:bg-[#17151c] border border-gray-200 dark:border-gray-800 shadow-sm text-center">
          <div class="w-14 h-14 mx-auto mb-5 rounded-2xl bg-[#eee9ff] dark:bg-[#6d4aff]/20 flex items-center justify-center text-[#6d4aff]"><i data-lucide="clipboard-list" class="w-7 h-7"></i></div>
          <h3 class="text-2xl font-bold text-[#17151c] dark:text-white mb-3">${currentLang === 'tr' ? 'Beta ve fiyatlandırma henüz netleşmedi' : 'Beta access and pricing are not confirmed yet'}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6">${currentLang === 'tr' ? 'Kesinleşmemiş ücret veya özellik sözü vermiyoruz. Yeni bilgiler açıklandığında bu sayfayı güncelleyeceğiz.' : 'We are not promising unconfirmed prices or features. This page will be updated when details are announced.'}</p>
          <a href="https://github.com/korayozkan/NewRssFeedbeta" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#6d4aff] hover:bg-[#8b72ff] text-white font-semibold text-sm transition">
            <i data-lucide="github" class="w-4 h-4"></i>${currentLang === 'tr' ? 'Gelişmeleri GitHub’da Takip Et' : 'Follow updates on GitHub'}
          </a>
        </div>
      </div>
    </section>
  `
}

// ─── Beta Form Component ──────────────────────────────────────────────────────
function BetaForm(): string {
  return /* html */ `
    <div id="beta-form"
      class="bg-white dark:bg-gray-900
             rounded-2xl shadow-xl
             border border-gray-200 dark:border-gray-800
             p-6 w-full max-w-sm relative z-20">

      <h2 class="text-xl font-bold text-[#17151c] dark:text-white mb-1">${t('form.title')}</h2>
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
                     text-[#17151c] dark:text-white
                     placeholder-gray-500 dark:placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-[#6d4aff] focus:border-transparent transition" />
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
                   text-[#17151c] dark:text-white
                   placeholder-gray-500 dark:placeholder-gray-400
                   focus:outline-none focus:ring-2 focus:ring-[#6d4aff] focus:border-transparent transition" />
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
                   text-[#17151c] dark:text-white
                   placeholder-gray-500 dark:placeholder-gray-400
                   focus:outline-none focus:ring-2 focus:ring-[#6d4aff] focus:border-transparent transition"></textarea>
        </div>

        <!-- Submit -->
        <button type="submit" id="submit-btn"
          class="w-full py-3 rounded-xl bg-[#6d4aff] hover:bg-[#8b72ff]
                 text-white font-semibold text-sm
                 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer">
          ${t('form.submit')}
        </button>

        <p class="text-center text-xs text-gray-600 dark:text-gray-300 flex items-center justify-center gap-1">
          <i data-lucide="lock" class="w-3 h-3 flex-shrink-0"></i>
          ${t('form.privacySafe')}
          <a href="mailto:kiruhiofficial@proton.me" class="text-[#6d4aff] font-medium">${t('form.privacyLink')}</a>
        </p>
      </form>

      <!-- Success state -->
      <div id="form-success" class="hidden flex-col items-center justify-center py-10 gap-4 text-center">
        <div class="w-16 h-16 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center">
          <i data-lucide="check-circle" class="w-8 h-8 text-green-500"></i>
        </div>
        <h4 class="font-bold text-[#17151c] dark:text-white text-lg">${t('form.successTitle')}</h4>
        <p class="text-sm text-gray-600 dark:text-gray-300 max-w-xs">${t('form.successText')}</p>
      </div>
    </div>
  `
}

// ─── 09. Sıkça Sorulan Sorular (FAQ) ──────────────────────────────────────────
function FaqSection(): string {
  const faqs = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
    { q: t('faq.q5'), a: t('faq.a5') },
    { q: t('faq.q6'), a: t('faq.a6') },
  ]

  const faqHtml = faqs.map(f => /* html */ `
    <details class="group border-b border-gray-200 dark:border-gray-800 pb-5 mb-5">
      <summary class="flex items-center justify-between cursor-pointer
                      font-semibold text-[#17151c] dark:text-white text-sm list-none py-1 select-none">
        ${f.q}
        <i data-lucide="chevron-down"
           class="w-4 h-4 text-gray-500 dark:text-gray-400 flex-shrink-0
                  group-open:rotate-180 transition-transform duration-200"></i>
      </summary>
      <p class="text-gray-600 dark:text-gray-300 text-sm mt-3 leading-relaxed">${f.a}</p>
    </details>
  `).join('')

  return /* html */ `
    <section class="py-20 px-6 bg-white dark:bg-[#17151c] transition-colors" id="faq" aria-labelledby="faq-heading">
      <div class="max-w-2xl mx-auto">
        <h2 id="faq-heading" class="text-3xl lg:text-4xl font-extrabold text-[#17151c] dark:text-white mb-2 text-center">
          ${t('faq.heading')}
        </h2>
        <p class="text-gray-600 dark:text-gray-300 text-center mb-12">${t('faq.subtext')}</p>
        ${faqHtml}
        <div class="text-center mt-10">
          <p class="text-sm text-gray-600 dark:text-gray-300 mb-1">${t('faq.moreQ')}</p>
          <a href="mailto:kiruhiofficial@proton.me"
             class="text-[#6d4aff] dark:text-[#8b72ff] font-semibold text-sm hover:underline">
            ${t('faq.contact')}
          </a>
        </div>
      </div>
    </section>
  `
}

// ─── 10. Final CTA (Son çağrı) ────────────────────────────────────────────────
function FinalCtaSection(): string {
  return /* html */ `
    <section class="py-24 px-6 bg-[#6d4aff] text-white text-center relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,114,255,0.4),transparent_50%)] pointer-events-none"></div>
      <div class="max-w-4xl mx-auto relative z-10 flex flex-col items-center gap-6">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          ${t('finalCta.heading')}
        </h2>
        <p class="text-[#eee9ff] text-lg max-w-xl">
          ${t('finalCta.subtext')}
        </p>
        <button onclick="document.getElementById('beta-form').scrollIntoView({behavior:'smooth'}); setTimeout(() => document.getElementById('beta-email')?.focus(), 400);"
          class="px-8 py-4 rounded-2xl bg-white text-[#6d4aff] font-extrabold text-base shadow-xl hover:bg-[#eee9ff] transition cursor-pointer">
          ${t('finalCta.btn')}
        </button>
      </div>
    </section>
  `
}

// ─── 11. Footer (Alt bilgi) ───────────────────────────────────────────────────
function Footer(): string {
  return /* html */ `
    <footer class="border-t border-gray-200 dark:border-gray-800
                   bg-white dark:bg-[#17151c]
                   px-6 py-12 transition-colors duration-300">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-xl overflow-hidden flex-shrink-0 ring-1 ring-[#6d4aff]/40">
            <img src="${basePath('logo.jpg')}" alt="NewRssFeed Logo" width="32" height="32" loading="lazy"
              class="w-full h-full object-cover [mix-blend-mode:multiply] dark:[mix-blend-mode:screen]" />
          </div>
          <span class="font-bold text-[#17151c] dark:text-white text-base">NewRssFeed</span>
        </div>
        <p class="text-xs text-gray-500 dark:text-gray-400 text-center">${t('footer.copyright')}</p>
        <div class="flex items-center gap-6">
          <a href="#" class="text-xs text-gray-600 dark:text-gray-300 hover:text-[#6d4aff] transition-colors">${t('footer.privacy')}</a>
          <a href="#" class="text-xs text-gray-600 dark:text-gray-300 hover:text-[#6d4aff] transition-colors">${t('footer.terms')}</a>
          <a href="https://github.com/korayozkan/NewRssFeedbeta" target="_blank" rel="noopener noreferrer" class="text-xs text-gray-600 dark:text-gray-300 hover:text-[#6d4aff] transition-colors">GitHub</a>
          <a href="mailto:kiruhiofficial@proton.me" class="text-xs text-gray-600 dark:text-gray-300 hover:text-[#6d4aff] transition-colors">${t('footer.contact')}</a>
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
    alternateName: 'New RSS Feed',
    url: 'https://korayozkan.github.io/NewRssFeedbeta/',
    logo: 'https://korayozkan.github.io/NewRssFeedbeta/logo.jpg',
    email: 'kiruhiofficial@proton.me',
    description: 'Sosyal medya içeriklerini tek bir akışta toplamayı hedefleyen, geliştirme aşamasındaki açık kaynak proje.',
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
    alternateName: 'New RSS Feed',
    url: 'https://korayozkan.github.io/NewRssFeedbeta/',
    inLanguage: 'tr-TR',
    description: 'Farklı sosyal kaynakları tek akışta toplamayı hedefleyen geliştirme aşamasındaki proje.'
  }

  return /* html */ `
    <script type="application/ld+json">${JSON.stringify(org)}</script>
    <script type="application/ld+json">${JSON.stringify(site)}</script>
  `
}

// ─── App Shell ────────────────────────────────────────────────────────────────
export function render() {
  const html = /* html */ `
    ${Navbar()}
    <main>
      ${HeroSection()}
      ${SocialProofSection()}
      ${ProblemSolutionSection()}
      ${FeaturesSection()}
      ${HowItWorksSection()}
      ${ProductShowcaseSection()}
      ${PricingSection()}
      ${FaqSection()}
      ${FinalCtaSection()}
    </main>
    ${Footer()}
  `
  return { head: SeoHead(), html }
}

// ─── Client-side Interactivity ────────────────────────────────────────────────
let navScrollHandler: (() => void) | null = null

export function initApp() {
  if (typeof (window as any).lucide !== 'undefined') {
    (window as any).lucide.createIcons()
  }

  // ── Update SEO metadata ──
  document.title = t('seo.title')
  const metaDesc = document.querySelector('meta[name="description"]')
  if (metaDesc) metaDesc.setAttribute('content', t('seo.desc'))
  const ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) ogTitle.setAttribute('content', t('seo.title'))
  const ogDesc = document.querySelector('meta[property="og:description"]')
  if (ogDesc) ogDesc.setAttribute('content', t('seo.desc'))

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

  // ── Scroll CTAs to beta form ──
  ;['nav-cta', 'hero-cta'].forEach(id => {
    document.getElementById(id)?.addEventListener('click', () => {
      const formEl = document.getElementById('beta-form')
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
        setTimeout(() => {
          const emailInput = document.getElementById('beta-email') as HTMLInputElement | null
          if (emailInput) {
            emailInput.focus()
            emailInput.classList.add('ring-4', 'ring-[#6d4aff]/30', 'border-[#6d4aff]')
            setTimeout(() => {
              emailInput.classList.remove('ring-4', 'ring-[#6d4aff]/30')
            }, 1200)
          }
        }, 400)
      }
    })
  })

  // ── Sign-in handler (alert) ──
  document.getElementById('signin-btn')?.addEventListener('click', () => {
    window.location.href = 'mailto:kiruhiofficial@proton.me'
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

      const subject = encodeURIComponent(`${currentLang === 'tr' ? 'NewRssFeed ilgi bildirimi' : 'NewRssFeed expression of interest'} (${email})`)
      const body = encodeURIComponent(
        `${currentLang === 'tr' ? 'Merhaba' : 'Hello'},\n\n${currentLang === 'tr' ? 'NewRssFeed projesine ilgimi bildirmek istiyorum' : 'I would like to express interest in the NewRssFeed project'}.\n\n` +
        `${currentLang === 'tr' ? 'E-posta adresi' : 'Email'}: ${email}\n` +
        `${currentLang === 'tr' ? 'Kullanıcı adı' : 'Username'}: ${username}\n` +
        `${currentLang === 'tr' ? 'İlgilendiğim platformlar' : 'Platforms of interest'}: ${platformsStr}\n` +
        `${currentLang === 'tr' ? 'Beklenti ve fikirler' : 'Expectations and ideas'}: ${expect}\n\n` +
        `${currentLang === 'tr' ? 'Tarih' : 'Date'}: ${new Date().toLocaleDateString(currentLang === 'tr' ? 'tr-TR' : 'en-US')}\n`
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
