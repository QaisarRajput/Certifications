import { useMemo } from 'react'
import { certifications, Certification } from '../data/certifications.clean'
import { Filters, filterCertifications } from '../utils/filter'

export function useCertifications(filters: Filters) {
  const data: Certification[] = certifications

  const filtered = useMemo(() => {
    return filterCertifications(data, filters)
  }, [data, filters.search, filters.vendor, filters.tag, filters.field])

  const featured = useMemo(() => {
    return data.filter((c) => c.featured)
  }, [data])

  return {
    all: data,
    filtered,
    featured
  }
}
