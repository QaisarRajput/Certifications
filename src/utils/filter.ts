export function filterCertifications(data, filters) {
  if (!Array.isArray(data)) return []

  const search = (filters?.search || '').toLowerCase().trim()
  const vendor = filters?.vendor || null
  const tag = filters?.tag || null
  const field = filters?.field || null

  return data.filter((c) => {
    if (!c) return false

    // Vendor filter
    if (vendor && c.vendor !== vendor) return false

    // Field filter
    if (field && c.field !== field) return false

    // Tag filter
    if (tag && (!Array.isArray(c.tags) || !c.tags.includes(tag))) {
      return false
    }

    // Search filter (title + tags + vendor)
    if (search) {
      const inTitle = c.title?.toLowerCase?.().includes(search)
      const inVendor = c.vendor?.toLowerCase?.().includes(search)
      const inTags =
        Array.isArray(c.tags) &&
        c.tags.some((t) => t.toLowerCase().includes(search))

      if (!inTitle && !inVendor && !inTags) return false
    }

    return true
  })
}
