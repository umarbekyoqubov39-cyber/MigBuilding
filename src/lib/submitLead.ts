import { normalizeUzPhone, type LeadInput } from './leadSchema'

export class LeadSubmitError extends Error {}

const TIMEOUT_MS = 10_000

/**
 * Sends a lead to the endpoint configured in VITE_LEAD_ENDPOINT (see .env.example).
 * The endpoint must be your own backend or form service. Never put bot tokens or
 * API keys in VITE_* variables: everything in them is shipped to the browser.
 */
export async function submitLead(input: LeadInput): Promise<void> {
  const payload = {
    name: input.name,
    phone: normalizeUzPhone(input.phone),
    page: window.location.href,
    submittedAt: new Date().toISOString(),
  }

  const endpoint = import.meta.env.VITE_LEAD_ENDPOINT
  if (!endpoint) {
    if (import.meta.env.DEV) {
      console.info('[lead] VITE_LEAD_ENDPOINT is not set; simulating success in development.', payload)
      await new Promise((resolve) => setTimeout(resolve, 600))
      return
    }
    throw new LeadSubmitError('Lead endpoint is not configured')
  }

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    })
    if (!res.ok) throw new LeadSubmitError(`Lead endpoint responded with ${res.status}`)
  } catch (err) {
    throw err instanceof LeadSubmitError ? err : new LeadSubmitError('Network error while sending lead')
  } finally {
    clearTimeout(timer)
  }
}
