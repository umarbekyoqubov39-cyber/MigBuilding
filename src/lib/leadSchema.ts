import { z } from 'zod'

const PHONE_CHARS = /^[\d\s()+-]+$/

/** Accepts Uzbek numbers with or without the 998 country code, in any common spacing. */
export function normalizeUzPhone(value: string): string | null {
  if (!PHONE_CHARS.test(value)) return null
  const digits = value.replace(/\D/g, '')
  if (/^998\d{9}$/.test(digits)) return `+${digits}`
  if (/^\d{9}$/.test(digits)) return `+998${digits}`
  return null
}

export const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Ismingizni kiriting')
    .max(60, 'Ism 60 belgidan oshmasligi kerak'),
  phone: z
    .string()
    .trim()
    .refine((v) => normalizeUzPhone(v) !== null, "Raqamni to'liq kiriting, masalan: +998 90 123 45 67"),
  service: z.string().max(80),
  message: z.string().trim().max(500, 'Izoh 500 belgidan oshmasligi kerak'),
  /** Honeypot: hidden from people, bots tend to fill it in. */
  website: z.string().max(0),
})

export type LeadInput = z.infer<typeof leadSchema>
