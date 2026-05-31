# openmaja-website

Public website for the [OpenMaja](https://github.com/openmaja/openmaja-private) project, hosted at **openmaja.org**.

## Goal

Provide a clean project presence for OpenMaja: what it is, why it matters, current status, and links to the repo and docs.

## Stack

- **[Astro](https://astro.build)** — static site generator with Markdown/MDX content support
- **GitHub Pages** — hosting, deployed via GitHub Actions on push to `main`
- **Custom domain** — `openmaja.org`

Content is authored in Markdown using Astro's Content Collections API. Layout and styling are intentionally minimal at this stage and will be developed separately from content.

## Color palette

| Role | Hex |
|---|---|
| Deep outline / text navy | `#012C73` |
| Main brand blue | `#148DFC` |
| Secondary blue | `#0B5DB3` |
| Fresh aqua accent | `#41DAD6` |
| Soft icy blue (background) | `#D9E8FA` |
| Clean warm white | `#FEFCF5` |
| Pure white (background) | `#ffffff` |

Usage: navy for outlines and body text, bright blue as the primary brand color, secondary blue for supporting UI elements, aqua for highlights and buttons, icy blue for subtle backgrounds, pure white as the main page background.

## Local development

```bash
npm install
npm run dev
```

## Deploy

Deployment is automatic via GitHub Actions on every push to `main`. The built site is published to GitHub Pages.
