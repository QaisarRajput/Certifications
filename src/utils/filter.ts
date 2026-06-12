export type Certification = {
  id: string
  title: string
  vendor: string
  field: string
  industry: string[]
  tags: string[]
  issueDate: string
  expiryDate: string | null
  credentialId: string
  verificationUrl: string
  image: string
  featured?: boolean
}

export type Filters = {
  search: string
  vendor: string | null
  tag: string | null
  field: string | null
}

const normalize = (value: string) => value.toLowerCase().trim()

export function filterCertifications(
  data: Certification[],
  filters: Filters
): Certification[] {
  const search = normalize(filters.search || '')

  return data.filter((item) => {
    // Vendor filter
    if (filters.vendor && item.vendor !== filters.vendor) return false

    // Field filter
    if (filters.field && item.field !== filters.field) return false

    // Tag filter
    if (filters.tag && !item.tags.includes(filters.tag)) return false

    // Search filter
    if (search) {
      const haystack = normalize(
        `${item.title} ${item.vendor} ${item.field} ${item.tags.join(' ')}`
      )

      if (!haystack.includes(search)) return false
    }

    return true
  })
}

export function getVendors(data: Certification[]): string[] {
  return Array.from(new Set(data.map((c) => c.vendor)))
}

export function getTags(data: Certification[]): string[] {
  return Array.from(new Set(data.flatMap((c) => c.tags)))
}

export function getFields(data: Certification[]): string[] {
  return Array.from(new Set(data.map((c) => c.field)))
}