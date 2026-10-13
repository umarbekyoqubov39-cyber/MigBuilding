import { normalizeUzPhone, type LeadInput } from './leadSchema'

export class LeadSubmitError extends Error {}

/** ProHome CRM: every lead from this site lands in the MigBuild project with the "new lead" status. */
const LEAD_ENDPOINT = 'https://backend.prohome.uz/api/v1/leeds/create-lead'
const PROJECT_ID = 86
const STATUS_ID = 451

const TIMEOUT_MS = 10_000

/** The form has one name field: the first word goes to firstName, the rest (if any) to lastName. */
function splitName(fullName: string): { firstName: string; lastName?: string } {
  const [firstName, ...rest] = fullName.trim().split(/\s+/)
  return rest.length > 0 ? { firstName, lastName: rest.join(' ') } : { firstName }
}

export async function submitLead(input: LeadInput): Promise<void> {
  const payload = {
    projectId: PROJECT_ID,
    statusId: STATUS_ID,
    ...splitName(input.name),
    phone: normalizeUzPhone(input.phone),
  }

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
  try {
    const res = await fetch(LEAD_ENDPOINT, {
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
