import React from 'react'
import { Certification } from '../utils/filter'

type Props = {
  item: Certification
}

export default function CertificationCard({ item }: Props) {
  return (
    <div className="cert-card">
      <div className="cert-header">
        <div className="vendor-badge">
          {item.vendor}
        </div>
        {item.featured && <span className="featured">★ Featured</span>}
      </div>

      <div className="cert-body">
        <h3 className="cert-title">{item.title}</h3>
        <p className="cert-field">{item.field}</p>

        <div className="tag-row">
          {item.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="cert-meta">
          <span>Issued: {item.issueDate}</span>
          {item.credentialId && <span>ID: {item.credentialId}</span>}
        </div>
      </div>

      <div className="cert-actions">
        <a
          href={item.verificationUrl}
          target="_blank"
          rel="noreferrer"
          className="verify-btn"
        >
          Verify Credential
        </a>
      </div>
    </div>
  )
}