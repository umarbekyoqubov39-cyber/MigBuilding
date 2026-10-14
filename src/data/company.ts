import type { SocialLink } from '../types/content'

/** Company details shown in the footer and lead form. */
export const company = {
  name: 'MigBuild',
  /** Circular logo with transparent corners, generated from public/images/Logo.jpg */
  logo: { src: '/images/logo-256.webp', alt: 'MigBuild logotipi' },
  description: "Turar-joy, tijorat va sanoat ob'ektlarini loyihalash va qurish.",
  region: "Farg'ona vodiysi",
  phone: {
    display: '+998 99 060 44 41',
    href: 'tel:+998990604441',
  },
  location: {
    label: "Farg'ona, O'zbekiston",
    /** Coordinates of the office pin (from the Google Maps link below). */
    lat: 40.434694,
    lng: 71.771753,
    /** Opens the place in Google Maps / the maps app. */
    mapUrl: 'https://maps.app.goo.gl/Viox3gceiZmaPzZJ7',
  },
  /** Links with an empty href are hidden. */
  socials: [
    { label: 'Telegram', handle: '@MIGBUILD2', href: 'https://t.me/MIGBUILD2' },
    { label: 'Instagram', handle: '@Mig_buid_fargona', href: 'https://www.instagram.com/Mig_buid_fargona/' },
  ] satisfies SocialLink[],
}

/** Google Maps embed (no API key needed) centred on the office pin. */
export const mapEmbedUrl = `https://maps.google.com/maps?q=${company.location.lat},${company.location.lng}&z=16&hl=uz&output=embed`
