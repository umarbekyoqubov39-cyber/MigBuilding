import { CalendarX, ShieldX, TrendingUp } from 'lucide-react'

import { unsplash } from '../lib/images'
import type { FeatureCard, ProblemItem, ReelItem, RichText, VideoItem } from '../types/content'
import { company } from './company'

/*
 * All page copy lives here so it can be edited without touching components.
 *
 * IMAGES: every photo below is an Unsplash stock placeholder, not MigBuild's own work.
 * Replace them with real project photos before launch, e.g.
 *   import heroPhoto from '../assets/hero.jpg'
 *   image: { src: heroPhoto, alt: '...' }
 */

export const hero = {
  badge: `${company.region} bo'ylab qurilish`,
  /** Rendered as three lines: gold / white / gold. */
  title: ['Loyihadan kalit', 'topshirishgacha', 'bitta jamoa'] as const,
  subtitle: "Turar-joy, tijorat va sanoat binolarini loyihalash va qurish — bir joyda, bir shartnoma asosida.",
  image: unsplash('1541888946425-d81bb19240f5', 'Qurilish maydonida poydevor ishlarini kuzatayotgan muhandislar', {
    ratio: 16 / 9,
    widths: [640, 1080, 1600, 2400],
  }),
}

export const featureVideo = {
  title: "Videoni ko'ring",
  caption: "Buyurtma berishdan oldin bu videoni ko'ring!",
  video: {
    // PLACEHOLDER: link to the company presentation video (.mp4)
    src: '',
    poster: unsplash('1599707254554-027aeb4deacd', 'Qurilayotgan bino ustidagi minorali kranlar', { ratio: 16 / 9 }),
    title: 'MigBuild taqdimot videosi',
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

export const gallery = {
  title: [{ accent: 'Loyihalar' }, " ko'rinishi"] satisfies RichText,
  showAll: 'Barcha rasmlar',
  showLess: "Kamroq ko'rsatish",
  /** How many photos are visible before "Barcha rasmlar" is pressed. */
  initialCount: 6,
  images: [
    unsplash('1600596542815-ffad4c1539a9', "Basseynli ikki qavatli zamonaviy oq uy"),
    unsplash('1600585154340-be6161a56a0c', "Kechki yoritilgan zamonaviy xususiy uy"),
    unsplash('1613490493576-7fde63acd811', 'Basseyn oldidagi uch qavatli zamonaviy villa'),
    unsplash('1545324418-cc1a3fa10c00', "Balkonli ko'p qavatli turar-joy binosi"),
    unsplash('1600566753190-17f0baa2a6c3', "Yog'och va shisha fasadli zamonaviy uy"),
    unsplash('1512917774080-9991f1c4c750', 'Hovlisida basseyni bor bir qavatli villa'),
    unsplash('1590579491624-f98f36d4c763', 'Zamonaviy ofis binosi va avtoturargoh'),
    unsplash('1600607687939-ce8a6c25118c', "Keng oynali yorug' mehmonxona interyeri"),
    unsplash('1460317442991-0ec209397118', "Balkonli ko'p qavatli turar-joy fasadi"),
    unsplash('1605276374104-dee2a0ed3cd6', "Ikki garajli tosh fasadli xususiy uy"),
    unsplash('1582268611958-ebfd161ef9cf', 'Basseyn va terrasali zamonaviy uy'),
    unsplash('1574362848149-11496d93a7c7', "Daraxtlar orasidagi g'ishtli turar-joy binosi"),
  ],
}

export const promo = {
  // PLACEHOLDER offer: replace with a real promotion or remove the section in App.tsx.
  highlight: '3D',
  title: [{ accent: 'Bepul 3D loyiha' }, ' va dastlabki smeta oling'] satisfies RichText,
  description: "Ariza qoldirgan mijozlar uchun bo'lajak binoning 3D ko'rinishi va dastlabki smetasi bepul tayyorlanadi.",
  image: unsplash('1523217582562-09d0def993a6', "Oq rangli zamonaviy ikki qavatli uy", { ratio: 16 / 10 }),
}

export const urgency = {
  title: ['Bunday imkoniyatlar ', { accent: 'har kuni chiqmaydi' }] satisfies RichText,
  description: 'Mavsum uchun qabul qilinadigan buyurtmalar soni cheklangan. Navbatingizni oldindan band qiling.',
  cta: 'Buyurtmalar cheklangan',
}

const reelPoster = (id: string, alt: string) => unsplash(id, alt, { ratio: 2 / 3, widths: [360, 540, 810] })

export const reels = {
  title: [{ accent: 'Reels' }, ' va Videolar'] satisfies RichText,
  badge: 'Reels',
  // PLACEHOLDER: add direct .mp4 links to vertical (9:16) videos in `src`.
  items: [
    {
      eyebrow: "Ob'ektdan reportaj",
      title: "Qurilish jarayoni: poydevordan tom yopishgacha",
      src: '',
      poster: reelPoster('1531834685032-c34bf0d84c77', 'Armatura karkasida ishlayotgan quruvchilar'),
    },
    {
      eyebrow: 'Jamoa',
      title: 'Qurilish maydonidagi bir ish kunidan lavhalar',
      src: '',
      poster: reelPoster('1504307651254-35680f356dfd', 'Qurilish maydonida ishlayotgan quruvchilar, yuqoridan ko\'rinish'),
    },
    {
      eyebrow: 'Texnika',
      title: 'Kranlar va texnika qanday ishlaydi',
      src: '',
      poster: reelPoster('1429497419816-9ca5cfb4571a', 'Qurilayotgan bino ustidagi minorali kranlar'),
    },
    {
      eyebrow: 'Karkas',
      title: "Ko'p qavatli bino karkasi qanday quriladi",
      src: '',
      poster: reelPoster('1508450859948-4e04fabaa4ea', "Qurilayotgan ko'p qavatli binoning yog'och karkasi"),
    },
  ] satisfies ReelItem[],
}

export const lead = {
  floatingCta: 'Ariza qoldirish',
  title: 'Ariza qoldiring',
  subtitle: "Ma'lumotlaringizni qoldiring — mutaxassisimiz siz bilan bog'lanadi.",
  services: [
    'Xususiy uy qurilishi',
    "Ko'p qavatli turar-joy",
    'Tijorat binosi',
    'Sanoat yoki ombor binosi',
    "Ta'mirlash",
    'Boshqa',
  ],
  submit: 'Yuborish',
  submitting: 'Yuborilmoqda…',
  success: "Rahmat! Arizangiz qabul qilindi. Tez orada siz bilan bog'lanamiz.",
  error: "Arizani yuborib bo'lmadi. Iltimos, biz bilan telefon orqali bog'laning:",
  privacy: "Ma'lumotlaringiz faqat siz bilan bog'lanish uchun ishlatiladi.",
}

export const comingSoon = 'Video tez orada'
