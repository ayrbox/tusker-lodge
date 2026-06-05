# Tusker Lodge - Astro Website

This project is a high-performance, content-focused website for Tusker Lodge, a pet-friendly B&B in Torquay, Devon. It has been migrated from Next.js to **Astro** for optimal performance and easier content management.

## Project Structure

- `src/content/`: Contains all markdown/MDX content (Rooms, Attractions, Policies).
- `src/pages/`: File-based routing for the website.
- `src/components/`: Reusable React components used as "Islands" where interactivity is needed.
- `src/layouts/`: Main Astro layouts.
- `src/styles/`: Global CSS and Tailwind configurations.
- `public/`: Static assets (favicons, etc.).

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) with your browser to see the result.

## Content Management

To add or edit content, modify the files in `src/content/`:
- **Rooms:** `src/content/rooms/*.mdx`
- **Attractions:** `src/content/attractions/*.md`
- **Policies:** `src/content/policies/*.md`

All content is type-safe and validated against schemas defined in `src/content/config.ts`.

## Features

- **Islands Architecture:** Ship zero JavaScript by default. React is only used for interactive components like the Room Carousel and Cookie Banner.
- **Content Collections:** Type-safe markdown content with Zod validation.
- **MDX Support:** Embed React components directly in your markdown content.
- **Tailwind CSS:** Modern utility-first styling.

## Deployment

The project can be deployed to any static hosting provider (Vercel, Netlify, Cloudflare Pages, etc.).

```bash
npm run build
```
