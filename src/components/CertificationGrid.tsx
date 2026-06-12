import React from 'react'
import { Certification } from '../utils/filter'
import CertificationCard from './CertificationCard'

type Props = {
  items: Certification[]
}

export default function CertificationGrid({ items }: Props) {
  if (!items.length) {
    return (
      <div className="empty-state">
        <h3>No certifications found</h3>
        <p>Try adjusting your filters or search query</p>
      </div>
    )
  }

  return (
    <div className="grid">
      {items.map((item) => (
        <CertificationCard key={item.id} item={item} />
      ))}
    </div>
  )
}