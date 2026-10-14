import { CalendarX, ShieldX, TrendingUp } from 'lucide-react'

import { unsplash } from '../lib/images'
import type { FeatureCard, Img, ProblemItem, ReelItem, RichText, VideoItem } from '../types/content'
import { company } from './company'

/*
 * All page copy lives here so it can be edited without touching components.
 *
 * IMAGES: the gallery and 3D promo use the company's photos from public/images/Homes.
 * The strengths cards still use Unsplash stock placeholders, not MigBuild's own work;
 * replace them with real photos before launch, e.g. image: { src: '/images/x.jpg', alt: '...' }
 */

export const hero = {
  badge: `${company.region} bo'ylab qurilish`,
  /** Rendered as three lines: gold / white / gold. */
  title: ['Loyihadan kalit', 'topshirishgacha', 'bitta jamoa'] as const,
  subtitle: "Turar-joy, tijorat va sanoat binolarini loyihalash va qurish — bir joyda, bir shartnoma asosida.",
  /**
   * Background photo, served up to 4K (3840px) for large screens; phones get a smaller size.
   * If you change it, update the matching <link rel="preload"> in index.html too.
   */
  image: unsplash('1429497419816-9ca5cfb4571a', "Qurilayotgan ko'p qavatli bino ustidagi sariq minorali kranlar", {
    ratio: 3 / 2,
    widths: [640, 1080, 1600, 2400, 3840],
  }),
}

export const featureVideo = {
  title: "Videoni ko'ring",
  caption: "Buyurtma berishdan oldin bu videoni ko'ring!",
  video: {
    // Loads only when this section is about to scroll into view.
    src: '/videos/Hero-vidio.MP4',
    /** Frame taken from the video at 0:03. */
    poster: {
      src: '/images/hero-poster.jpg',
      alt: "MigBuild turar-joy majmuasining ko'p qavatli binolari",
      width: 1920,
      height: 1072,
    },
    title: "MigBuild turar-joy majmuasi: taqdimot videosi",
  } satisfies VideoItem,
}

export const problems = {
  title: ['Hozir qurilishda eng katta ', { accent: 'muammo' }, ' nima?'] satisfies RichText,
  items: [
    { icon: CalendarX, text: "Muddatlar cho'zilib ketadi" },
    { icon: TrendingUp, text: 'Smeta kutilmaganda oshadi' },
    { icon: ShieldX, text: 'Sifat nazorat qilinmaydi' },
  ] satisfies ProblemItem[],
  conclusion: `${company.name} aynan shu muammolarni hal qiladi`,
}

export const strengths = {
  title: [{ accent: 'Bizning' }, ' Eng ', { accent: 'Katta Kuchimiz' }, ' Nimada?'] satisfies RichText,
  cta: 'Bepul maslahat olish',
  cards: [
    {
      title: 'Loyihalash va smeta',
      description: "Arxitektura loyihasi, hisob-kitob va ruxsatnomalar ish boshlanishidan oldin tayyorlanadi.",
      image: unsplash('1503387762-592deb58ef4e', 'Muhandis stol ustida bino chizmasini chizmoqda'),
    },
    {
      title: 'Malakali jamoa',
      description: "Har bir ob'ektni muhandis va prorablar jamoasi boshidan oxirigacha nazorat qiladi.",
      image: unsplash('1626885930974-4b69aa21bbf9', 'Qurilish maydonida himoya kaskasidagi ikki muhandis'),
    },
    {
      title: 'Zamonaviy texnika',
      description: 'Yer ishlari, yuk tashish va montaj uchun zamonaviy qurilish texnikasi bilan ishlaymiz.',
      image: unsplash('1503708928676-1cb796a0891e', 'Qurilish maydonida ishlayotgan ekskavator'),
    },
    {
      title: 'Monolit va karkas ishlari',
      description: "Armatura, beton va karkas ishlari qurilish me'yorlariga muvofiq bosqichma-bosqich bajariladi.",
      image: unsplash('1531834685032-c34bf0d84c77', "Armatura karkasini o'rnatayotgan quruvchilar"),
    },
    {
      title: 'Muhandislik tarmoqlari',
      description: 'Elektr, suv, kanalizatsiya va isitish tizimlari loyiha asosida o\'rnatiladi.',
      image: unsplash('1621905251189-08b45d6a269e', "Elektr shitini o'rnatayotgan usta"),
    },
    {
      title: "Barcha turdagi ob'ektlar uchun",
      description: "Xususiy uylar, ko'p qavatli turar-joylar, ofis, savdo va sanoat binolari qurilishi.",
      image: unsplash('1565008447742-97f6f38c985c', "Kranlar yonida qurilayotgan ko'p qavatli binolar"),
    },
  ] satisfies FeatureCard[],
}

export const statement = {
  title: "Bu yerda siz shunchaki bino olmaysiz…",
  subtitle: 'Siz kelajagingizga ishonchli sarmoya kiritasiz',
}

/**
 * Company photos from public/images/Homes. Each has a small (~800px) and a large version in
 * Homes/web, made from the originals so pages stay light; regenerate them when a photo changes.
 */
function home(
  name: string,
  alt: string,
  sm: [number, number],
  lg: [number, number],
  fit: Img['fit'] = 'cover',
): Img {
  const path = (size: string) => `/images/Homes/web/${name}-${size}.jpg`
  return {
    src: path('sm'),
    srcSet: `${path('sm')} ${sm[0]}w, ${path('lg')} ${lg[0]}w`,
    alt,
    width: lg[0],
    height: lg[1],
    fit,
  }
}

export const gallery = {
  title: [{ accent: 'Loyihalar' }, " ko'rinishi"] satisfies RichText,
  showAll: 'Barcha rasmlar',
  showLess: "Kamroq ko'rsatish",
  /** How many photos are visible before "Barcha rasmlar" is pressed. */
  initialCount: 6,
  images: [
    home('home-1', "MigBuild qurgan ko'p qavatli turar-joy binosining balkonli old fasadi", [800, 600], [1600, 1200]),
    home('home-2', 'MigBuild turar-joy binosining yon fasadi', [600, 800], [1200, 1600]),
    home('home-3', 'Qurilishi yakunlanayotgan MigBuild turar-joy binosi', [600, 800], [1200, 1600]),
    home('home-5', "MigBuild turar-joy majmuasining 3D loyihasi, yuqoridan ko'rinish", [800, 447], [1280, 715]),
    // Floor plans: shown whole so the room labels and areas are not cropped.
    home('home-6', "MigBuild: 2 xonali kvartira rejasi, 48,8 m²", [734, 800], [1175, 1280], 'contain'),
    home('home-7', "MigBuild: 1 xonali kvartira rejasi, 34,8 m²", [674, 800], [1079, 1280], 'contain'),
    home('home-8', "MigBuild: 3 xonali kvartira rejasi, 75,6 m²", [800, 662], [1280, 1059], 'contain'),
  ],
}

export const promo = {
  // PLACEHOLDER offer: replace with a real promotion or remove the section in App.tsx.
  highlight: '3D',
  title: [{ accent: 'Bepul 3D loyiha' }, ' va dastlabki smeta oling'] satisfies RichText,
  description: "Ariza qoldirgan mijozlar uchun bo'lajak binoning 3D ko'rinishi va dastlabki smetasi bepul tayyorlanadi.",
  image: home('home-5', "MigBuild turar-joy majmuasining 3D loyihasi, yuqoridan ko'rinish", [800, 447], [1280, 715]),
}

export const urgency = {
  title: ['Bunday imkoniyatlar ', { accent: 'har kuni chiqmaydi' }] satisfies RichText,
  description: 'Mavsum uchun qabul qilinadigan buyurtmalar soni cheklangan. Navbatingizni oldindan band qiling.',
  cta: 'Buyurtmalar cheklangan',
}

// Add more videos here; with two or more, swiping and the up/down buttons appear automatically.
const reelItems: ReelItem[] = [
  {
    src: '/videos/reels-1.mp4',
    title: "MigBuild: Farg'onadagi Qirg'uli City savdo ofisi va bino maketi",
    orientation: 'portrait',
  },
]

export const reels = {
  /** Hidden for now. Set to true to show the section again; its code and videos are kept. */
  enabled: false,
  title: [{ accent: 'Reels' }, ' va Videolar'] satisfies RichText,
  badge: 'Reels',
  items: reelItems,
}

export const lead = {
  floatingCta: 'Ariza qoldirish',
  title: 'Ariza qoldiring',
  subtitle: "Ma'lumotlaringizni qoldiring — mutaxassisimiz siz bilan bog'lanadi.",
  submit: 'Yuborish',
  submitting: 'Yuborilmoqda…',
  success: "Rahmat! Arizangiz qabul qilindi. Tez orada siz bilan bog'lanamiz.",
  error: "Arizani yuborib bo'lmadi. Iltimos, biz bilan telefon orqali bog'laning:",
  privacy: "Ma'lumotlaringiz faqat siz bilan bog'lanish uchun ishlatiladi.",
}

export const comingSoon = 'Video tez orada'
