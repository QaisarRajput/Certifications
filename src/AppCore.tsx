import React, { useEffect, useState } from 'react'
import VendorWall from './components/VendorWall'
import FeaturedStrip from './components/FeaturedStrip'
import CertificationGrid from './components/CertificationGrid'
import { useCertifications } from './hooks/useCertifications'
import { Filters } from './utils/filter'

export default function AppCore() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [search, setSearch] = useState('')
  const [vendor, setVendor] = useState<string | null>(null)
  const [tag] = useState<string | null>(null)
  const [field] = useState<string | null>(null)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const v = params.get('vendor')
    if (v) setVendor(v)
  }, [])

  const filters: Filters = {
    search,
    vendor,
    tag,
    field
  }

  const { filtered, featured } = useCertifications(filters)

  return (
    <div className="app-container">

      {/* HERO */}
      <header className="header">
        <div className="profile">
          <div className="avatar float" />
          <div>
            <h1>Qaisar Tanvir</h1>
            <p>AVP – AI/ML Architecture & MLOps Strategy</p>
          </div>
        </div>

        <div className="header-actions">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search certifications..."
          />

          <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
      </header>

      {/* VENDORS */}
      <section>
        <VendorWall onSelect={setVendor} active={vendor} />
      </section>

      {/* FEATURED */}
      <section>
        <FeaturedStrip items={featured} />
      </section>

      {/* GRID */}
      <main className="content fade-in">
        <CertificationGrid items={filtered} />
      </main>

    </div>
  )
}