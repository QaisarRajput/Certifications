import React from 'react'
import vendors from '../data/vendors.json'

type Props = {
  onSelect: (vendor: string | null) => void
  active: string | null
}

export default function VendorWall({ onSelect, active }: Props) {
  return (
    <div className="vendor-wall fade-in">
      {vendors.map((v) => (
        <div
          key={v.name}
          className={`vendor-card card-hover ${active === v.name ? 'active' : ''}`}
          onClick={() => onSelect(v.name)}
        >
          <img src={v.logo} alt={v.name} />
          <div className="vendor-name">{v.name}</div>
        </div>
      ))}
    </div>
  )
}