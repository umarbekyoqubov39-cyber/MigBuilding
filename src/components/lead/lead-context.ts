import { createContext, useContext } from 'react'

export const LeadContext = createContext<() => void>(() => {})

/** Returns a function that opens the lead form modal. */
export function useOpenLead() {
  return useContext(LeadContext)
}
