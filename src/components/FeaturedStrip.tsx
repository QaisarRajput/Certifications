import React from 'react'
import { Certification } from '../utils/filter'
import CertificationCard from './CertificationCard'

type Props = {
  items: Certification[]
}

export default function FeaturedStrip({ items }: Props) {
  if (!items.length) return null

  return (
    <div className="featured-strip fade-in">
      <h2>Featured Certifications</h2>
      <div className="featured-grid">
        {items.map((item) => (
          <div key={item.id} className="featured-item float">
            <CertificationCard item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}