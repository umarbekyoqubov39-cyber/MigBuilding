import { useId, useState, type ReactNode } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { CircleAlert, CircleCheck, LoaderCircle } from 'lucide-react'
import { useForm, type FieldError } from 'react-hook-form'

import { company } from '../../data/company'
import { lead } from '../../data/content'
import { leadSchema, type LeadInput } from '../../lib/leadSchema'
import { submitLead } from '../../lib/submitLead'
import { LocationMap } from '../ui/LocationMap'
import { Modal } from '../ui/Modal'

type Status = 'idle' | 'success' | 'error'

const DEFAULTS: LeadInput = { name: '', phone: '+998 ', website: '' }

const fieldClass =
  'w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-base text-white placeholder:text-white/35 transition focus:border-brand-400 focus:outline-none focus-visible:outline-none aria-invalid:border-red-500/70'

export default function LeadModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const titleId = useId()
  const [status, setStatus] = useState<Status>('idle')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadInput>({ resolver: zodResolver(leadSchema), defaultValues: DEFAULTS })

  // After a successful submission, the next opening starts with an empty form.
  const handleClose = () => {
    onClose()
    if (status === 'success') {
      reset(DEFAULTS)
      setStatus('idle')
    }
  }

  const onSubmit = handleSubmit(async (values) => {
    try {
      await submitLead(values)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  })

  return (
    <Modal open={open} onClose={handleClose} labelledBy={titleId} className="w-[min(32rem,calc(100%-2rem))] md:w-[min(60rem,calc(100%-3rem))]">
      {/* Phones: one scrolling column (form, then map). md+: form and map side by side. */}
      <div className="grid max-h-[calc(100svh-2rem)] overflow-y-auto rounded-3xl border border-white/10 bg-ink-850 md:h-[min(34rem,calc(100svh-3rem))] md:grid-cols-2 md:grid-rows-[minmax(0,1fr)] md:overflow-hidden">
        <div className="p-6 sm:p-8 md:flex md:flex-col md:justify-center md:overflow-y-auto">
          <div className="flex items-center gap-3 pr-10">
            <img src={company.logo.src} alt="" width={48} height={48} className="size-12 shrink-0 rounded-full" />
            <h2 id={titleId} className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              {lead.title}
            </h2>
          </div>

          {status === 'success' ? (
            <div role="status" className="mt-6 flex flex-col items-center gap-4 py-6 text-center">
              <CircleCheck className="size-14 text-brand-400" aria-hidden />
              <p className="text-lg font-semibold text-white/90">{lead.success}</p>
              <button
                type="button"
                onClick={handleClose}
                className="mt-2 min-h-12 rounded-full border border-white/15 px-6 font-semibold transition hover:bg-white/5"
              >
                Yopish
              </button>
            </div>
          ) : (
            <>
              <p className="mt-2 text-sm text-white/60 sm:text-base">{lead.subtitle}</p>

              <form onSubmit={onSubmit} noValidate className="mt-6 space-y-4">
                <Field label="Ismingiz" htmlFor="lead-name" error={errors.name}>
                  <input
                    id="lead-name"
                    type="text"
                    autoComplete="name"
                    placeholder="Ism Familiya"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'lead-name-error' : undefined}
                    className={fieldClass}
                    {...register('name')}
                  />
                </Field>

                <Field label="Telefon raqam" htmlFor="lead-phone" error={errors.phone}>
                  <input
                    id="lead-phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="+998 90 123 45 67"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'lead-phone-error' : undefined}
                    className={fieldClass}
                    {...register('phone')}
                  />
                </Field>

                {/* Honeypot: invisible to people and screen readers */}
                <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
                  <label htmlFor="lead-website">Website</label>
                  <input id="lead-website" type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
                </div>

                {status === 'error' && (
                  <p role="alert" className="flex gap-2 rounded-xl bg-red-500/10 p-3 text-sm text-red-200">
                    <CircleAlert className="mt-0.5 size-4 shrink-0" aria-hidden />
                    <span>
                      {lead.error}{' '}
                      <a href={company.phone.href} className="font-semibold whitespace-nowrap text-white underline">
                        {company.phone.display}
                      </a>
                    </span>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-brand flex min-h-13 w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-bold text-white transition hover:brightness-110 disabled:opacity-70"
                >
                  {isSubmitting && <LoaderCircle className="size-5 animate-spin" aria-hidden />}
                  {isSubmitting ? lead.submitting : lead.submit}
                </button>

                <p className="text-center text-xs text-white/45">{lead.privacy}</p>
              </form>
            </>
          )}
        </div>

        <LocationMap className="border-t border-white/10 md:border-t-0 md:border-l" />
      </div>
    </Modal>
  )
}

interface FieldProps {
  label: string
  htmlFor: string
  error?: FieldError
  children: ReactNode
}

function Field({ label, htmlFor, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-white/80">
        {label}
      </label>
      {children}
      {error?.message && (
        <p id={`${htmlFor}-error`} className="mt-1.5 text-sm text-red-400">
          {error.message}
        </p>
      )}
    </div>
  )
}
