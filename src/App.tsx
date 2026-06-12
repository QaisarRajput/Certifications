import React, { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

export default function App() {
  const [theme, setTheme] = useState<Theme>('light')
  const [search, setSearch] = useState('')
  const [vendorFilter, setVendorFilter] = useState<string | null>(null)

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  // Read URL params for deep linking
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const vendor = params.get('vendor')
    const tag = params.get('tag')

    if (vendor) setVendorFilter(vendor)

    // future: tag filtering hook
  }, [])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className="app-container">
      {/* Header */}
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

          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
      </header>

      {/* Vendor Filter Bar */}
      <section className="vendor-bar">
        <button
          className={!vendorFilter ? 'active' : ''}
          onClick={() => setVendorFilter(null)}
        >
          All Vendors
        </button>

        {['Anthropic', 'Dataiku', 'IBM', 'Google', 'AWS'].map(vendor => (
          <button
            key={vendor}
            className={vendorFilter === vendor ? 'active' : ''}
            onClick={() => setVendorFilter(vendor)}
          >
            {vendor}
          </button>
        ))}
      </section>

      {/* Main Content */}
      <main className="content">
        <div className="placeholder">
          <h2>Certification Gallery</h2>
          <p>Search: {search || 'None'}</p>
          <p>Vendor Filter: {vendorFilter || 'None'}</p>
        </div>
      </main>
    </div>
  )
}