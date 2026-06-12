import React, { useEffect, useState } from 'react'
import CertificationGrid from './components/CertificationGrid'
import { useCertifications } from './hooks/useCertifications'
import { Filters } from './utils/filter'

type Theme = 'light' | 'dark'

export default function App2() {
  const [theme, setTheme] = useState<Theme>('light')
  const [search, setSearch] = useState('')
  const [vendorFilter, setVendorFilter] = useState<string | null>(null)
  const [tagFilter] = useState<string | null>(null)
  const [fieldFilter] = useState<string | null>(null)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const vendor = params.get('vendor')

    if (vendor) setVendorFilter(vendor)
  }, [])

  const filters: Filters = {
    search,
    vendor: vendorFilter,
    tag: tagFilter,
    field: fieldFilter
  }

  const { filtered, featured } = useCertifications(filters)

  return (
    <div className="app-container">
      <header className="header">
        <div className="profile">
          <div className="avatar" />
          <div>
            <h1>Qaisar Tanvir</h1>
            <p>AVP – AI/ML Architecture & MLOps Strategy</p>
          </div>
        </div>

        <div className="header-actions">
          <input
            type="text"
            placeholder="Search certifications..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
      </header>

      <section className="vendor-bar">
        <button onClick={() => setVendorFilter(null)} className={!vendorFilter ? 'active' : ''}>All</button>
        {['Anthropic','Dataiku','IBM','Google','AWS'].map(v => (
          <button
            key={v}
            className={vendorFilter === v ? 'active' : ''}
            onClick={() => setVendorFilter(v)}
          >
            {v}
          </button>
        ))}
      </section>

      <main className="content">
        {featured.length > 0 && (
          <div className="placeholder">
            <h2>Featured Certifications</h2>
          </div>
        )}

        <CertificationGrid items={filtered} />
      </main>
    </div>
  )
}