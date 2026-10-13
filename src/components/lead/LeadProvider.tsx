import { lazy, Suspense, useCallback, useEffect, useState, type ReactNode } from 'react'

import { LeadContext } from './lead-context'

// The form (react-hook-form + zod) is split into its own chunk and only loaded when needed.
const loadLeadModal = () => import('./LeadModal')
const LeadModal = lazy(loadLeadModal)

export function LeadProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [requested, setRequested] = useState(false)

  const openLead = useCallback(() => {
    setRequested(true)
    setOpen(true)
  }, [])

  // Prefetch the form chunk once the browser is idle, so opening feels instant.
  useEffect(() => {
    const prefetch = () => void loadLeadModal()
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(prefetch, { timeout: 4000 })
      return () => window.cancelIdleCallback(id)
    }
    const id = setTimeout(prefetch, 2500)
    return () => clearTimeout(id)
  }, [])

  return (
    <LeadContext value={openLead}>
      {children}
      {requested && (
        <Suspense fallback={null}>
          <LeadModal open={open} onClose={() => setOpen(false)} />
        </Suspense>
      )}
    </LeadContext>
  )
}
