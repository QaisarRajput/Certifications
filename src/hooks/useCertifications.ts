import { useMemo } from 'react'
import data from '../data/certifications.json'
import { Certification, Filters, filterCertifications } from '../utils/filter'

export function useCertifications(filters: Filters) {
  const certifications: Certification[] = data as Certification[]

  const filtered = useMemo(() => {
    return filterCertifications(certifications, filters)
  }, [certifications, filters.search, filters.vendor, filters.tag, filters.field])

  const featured = useMemo(() => {
    return certifications.filter((c) => c.featured)
  }, [certifications])

  return {
    all: certifications,
    filtered,
    featured
  }
}