# John Carlo Red Portfolio

This repository contains John Carlo Red's personal portfolio built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

The site is designed as a clean portfolio for showcasing:
- a hero section with resume and social links
- selected Salesforce projects
- a tabbed experience timeline for work and education
- grouped technical skills

## What The Project Does

This portfolio presents John Carlo Red as a Salesforce Developer through a small set of focused pages:

- `Home`
  Highlights the hero section, current role, featured companies, selected projects, and supporting portfolio sections.
- `Projects`
  Shows data-driven case studies for `sf-workfolio` and `sf-spendly`.
- `Experience`
  Renders a tabbed timeline for work history and education using shared structured data.
- `Skills`
  Displays grouped skill cards with a responsive layout.

The portfolio content is intentionally driven by local data files so the UI stays reusable while text, links, dates, and images can be updated without rewriting layout components.

## Main Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- React Icons

## Project Structure

```txt
app/
  (portfolio)/
    _home/
    experience/
    projects/
    skills/
public/
  images/
  John-Carlo-Red-resume.pdf
```

Key content files:

- `app/(portfolio)/_home/hero/hero.data.ts`
  Hero copy, portrait, social links, resume link, and worked-with logos
- `app/(portfolio)/projects/projects.data.ts`
  Project cards and slug-page content
- `app/(portfolio)/experience/experience.data.ts`
  Work and education timeline data
- `app/(portfolio)/_home/skills/skills.data.ts`
  Skill group data

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

- Project and experience sections are data-driven.
- Public assets are stored in `public/` and referenced by path from the app.
- The resume button opens the PDF in a new tab from `public/John-Carlo-Red-resume.pdf`.
