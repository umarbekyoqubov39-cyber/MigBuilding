import { z } from 'zod'

const PHONE_CHARS = /^[\d\s()+-]+$/

/** Operator codes the CRM accepts (it rejects any other number with a 400). */
const OPERATOR_CODE = /^(20|33|50|55|70|77|87|88|90|91|93|94|95|97|98|99)/

/** Accepts Uzbek numbers with or without the 998 country code, in any common spacing. */
export function normalizeUzPhone(value: string): string | null {
  if (!PHONE_CHARS.test(value)) return null
  const digits = value.replace(/\D/g, '')
  const local = /^998\d{9}$/.test(digits) ? digits.slice(3) : /^\d{9}$/.test(digits) ? digits : null
  return local && OPERATOR_CODE.test(local) ? `+998${local}` : null
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
    .refine((v) => normalizeUzPhone(v) !== null, "To'g'ri raqam kiriting, masalan: +998 90 123 45 67"),
  /** Honeypot: hidden from people, bots tend to fill it in. */
  website: z.string().max(0),
})

export type LeadInput = z.infer<typeof leadSchema>
