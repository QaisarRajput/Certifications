# Certifications

Professional Certification Portfolio for Qaisar Tanvir

## Vision
A recruiter-friendly, GitHub Pages-hosted certification portfolio that centralizes all professional certifications into a single searchable and filterable system.

Instead of cluttered LinkedIn entries, each vendor or skill can deep-link into filtered views of this app.

---

## Live Navigation Concept

- /?vendor=Anthropic
- /?vendor=Dataiku
- /?vendor=IBM
- /?tag=Machine Learning
- /?field=Artificial Intelligence

---

## Core Features

- React (Vite) single-page application
- GitHub Pages deployment
- Fast search across all certifications
- Multi-dimensional filters:
  - Vendor
  - Field
  - Industry
  - Skill Tags
- Certification verification links
- Clickable certification detail modal/page
- Vendor logo wall (auto-loaded from `/public/vendors`)
- Responsive recruiter-focused UI
- Dark/light mode support

---

## Landing Page Layout

### 1. Profile Header
- Profile image
- Name: Qaisar Tanvir
- Title: AVP – AI/ML Architecture & MLOps Strategy
- Links:
  - LinkedIn
  - GitHub
  - Medium
  - Email

---

### 2. Certification Summary
- Total Certifications
- Total Vendors
- Latest Certification Date

(No learning hours metric included as requested)

---

### 3. Vendor Logo Wall

All vendor logos are loaded from:

```
/public/vendors/
```

Example structure:

```
anthropic.png
dataiku.png
ibm.png
google.png
aws.png
microsoft.png
databricks.png
```

Each logo acts as a filter shortcut.

---

### 4. Search & Filters

Search across:
- Title
- Tags
- Vendor
- Field
- Industry

Filters:
- Vendor
- Field
- Industry
- Tags
- Year

---

### 5. Certification Grid

Each certification card includes:
- Badge image
- Vendor logo
- Title
- Issue date
- Tags
- "View Details" action

---

### 6. Certification Detail View

Displays:
- Full certificate image
- Vendor
- Credential ID
- Issue / Expiry date
- Tags
- Verification link (external)

---

## Certification JSON Schema

```json
{
  "id": "anthropic-prompt-engineering",
  "title": "Prompt Engineering",
  "vendor": "Anthropic",
  "field": "Artificial Intelligence",
  "industry": ["Technology"],
  "tags": ["LLM", "Prompt Engineering", "AI"],
  "issueDate": "2025-06-01",
  "expiryDate": null,
  "credentialId": "ABC123",
  "verificationUrl": "https://verify-link",
  "image": "/certifications/anthropic/prompt-engineering.png",
  "featured": true
}
```

---

## Folder Structure

```
src/
  components/
  pages/
  hooks/
  utils/
  data/
    certifications.json
    vendors.json
    fields.json
    industries.json
    tags.json

public/
  vendors/
  certifications/
  profile/

.github/workflows/
```

---

## LinkedIn Strategy

Each vendor gets a dedicated link:

Example:

Anthropic:
```
https://qaisarrajput.github.io/Certifications/?vendor=Anthropic
```

Dataiku:
```
https://qaisarrajput.github.io/Certifications/?vendor=Dataiku
```

---

## GitHub Pages Deployment

- Build: Vite
- Deploy: GitHub Actions
- Target: `gh-pages` branch

---

## Future Enhancements

- Certification timeline view
- Skill heatmap visualization
- Featured certifications section
- Analytics dashboard
- PDF export for CV generation

---

## Owner
Qaisar Tanvir
AVP AI/ML Architecture & MLOps Strategy