# John Carlo Red Portfolio

This repository contains John Carlo Red's personal portfolio built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

The site is designed as a clean portfolio for showcasing:
- a hero section with resume and social links
- selected Salesforce projects
- a tabbed experience timeline for work and education
- grouped technical skills
- Salesforce certification cards with PDF credential links
- a contact page for professional inquiries
- generated social preview images for richer shared links

## What The Project Does

This portfolio presents John Carlo Red as a Salesforce Developer through a small set of focused pages:

- `Home`
  Highlights the hero section, current role, featured companies, selected projects, and supporting portfolio sections.
- `Projects`
  Shows data-driven case studies for `sf-portfolio-website` and `sf-spendly`.
- `Experience`
  Renders a tabbed timeline for work history and education using shared structured data.
- `Skills`
  Displays grouped skill cards with a responsive layout.
- `Certifications`
  Displays Salesforce certification cards with issue dates, credential IDs, descriptions, and links to supporting PDF files.
- `Contact`
  Provides contact details, social links, and an email-based contact form.

The portfolio content is intentionally driven by local data files so the UI stays reusable while text, links, dates, PDFs, and images can be updated without rewriting layout components. The app also includes a responsive navbar with active route states and a mobile slide-over drawer, plus generated Open Graph image routes with project-specific preview details for cleaner shared links.

## Main Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- React Icons
- Next.js metadata and `next/og` generated images
- Vercel Analytics and Speed Insights

## Project Structure

```txt
app/
  (portfolio)/
    _home/
      featured-projects/
      hero/
    certifications/
      _components/
    experience/
    projects/
      _components/
      _lib/
      [slug]/
    skills/
    contact/
  components/
  lib/
  og/
    certifications/
    projects/
      [slug]/
public/
  certifications/
  images/
  John-Carlo-Red-resume.pdf
```

Key content files:

- `app/(portfolio)/_home/hero/hero.data.ts`
  Hero copy, portrait, social links, resume link, and worked-with logos
- `app/(portfolio)/contact/contact.data.ts`
  Contact page copy, contact details, and social links
- `app/(portfolio)/projects/projects.data.ts`
  Project cards, featured-project selection, and slug-page content
- `app/(portfolio)/experience/experience.data.ts`
  Work and education timeline data
- `app/(portfolio)/skills/skills.data.ts`
  Skill group data
- `app/(portfolio)/certifications/certifications.data.ts`
  Certification card content, issue dates, credential IDs, summaries, and PDF paths

Route-specific and domain-specific components live beside their route in private `_components` folders. Shared app components, such as the navbar and footer, live in `app/components/`.

Shared metadata helpers live in `app/lib/metadata.ts`, and generated social preview image rendering lives in `app/lib/og-image.tsx`. Public Open Graph image endpoints are served from `app/og/`, including `/og`, `/og/projects`, `/og/projects/[slug]`, and `/og/certifications`.

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

## Notes

- Project, experience, skills, and certification sections are data-driven.
- Project detail pages use `generateStaticParams` and route-specific metadata.
- Open Graph and Twitter metadata are generated through shared helpers, with custom generated preview images for the home page, projects, project details, and certifications. Project detail previews include status and top technology tags from the shared project data.
- Public assets are stored in `public/` and referenced by path from the app.
- Certification PDFs live in `public/certifications/` and open in a new tab from each certification card.
- The resume button opens the PDF in a new tab from `public/John-Carlo-Red-resume.pdf`.
