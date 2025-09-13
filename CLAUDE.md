# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Tusker Lodge is a Next.js 15 website for a pet-friendly bed and breakfast in Torquay, Devon, UK. Built with React 19, TypeScript, and Tailwind CSS 4.

## Common Commands

### Development
```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm start           # Start production server
npm run lint        # Run ESLint
```

### Testing
No test framework is currently configured. Tests would need to be set up if required.

## Architecture Overview

### Framework & Structure
- **Next.js 15 App Router** - Modern file-based routing with nested layouts
- **TypeScript** - Full type safety throughout
- **Tailwind CSS 4** - Utility-first styling with latest version
- **Path aliases**: `@/*` maps to `./src/*`

### Key Directories
- `src/app/` - App Router pages and layouts
- `src/components/` - Reusable UI components  
- `src/components/sections/` - Page section components
- `src/images/` - Static image assets
- `public/` - Public static files

### Component Architecture
Pages are composed of section components (Hero, Rooms, Testimonials, etc.) that use smaller UI components (ButtonLink, RoomCard, NavItem). The Header component includes mobile-responsive navigation with a sidebar menu.

### Styling Patterns
- Mobile-first responsive design with Tailwind breakpoints
- Conditional styling using `clsx` utility
- Component-scoped Tailwind classes (no CSS modules)
- Images handled via Next.js Image component for optimization

## Room Types & Structure
The site features multiple room types with dedicated pages:
- King rooms (`/rooms/king/`)
- Queen rooms (`/rooms/queen/`)
- Double rooms (`/rooms/doubles/`)
- Family rooms (`/rooms/family/`)
- Single rooms (`/rooms/singles/`)

Each room type has its own page and associated images in `src/images/rooms/`.

## External Integrations
- Booking functionality integrated via external widget/iframe
- Phone number integration for direct calls
- GitHub Pages deployment via automated workflow

## Development Notes

### Image Handling
All images are imported as modules from `src/images/` and optimized using Next.js Image component. Room images should be placed in `src/images/rooms/` subdirectory.

### Navigation
The Header component manages responsive navigation including a mobile sidebar. Navigation items are defined as data and mapped to NavItem components.

### Content Updates
- Room information: Update individual room pages in `src/app/rooms/`
- Homepage sections: Modify components in `src/components/sections/`
- Contact details: Update in Contact page and Footer component
- Navigation: Modify navigation data in Header component

### Deployment
Project deploys automatically to GitHub Pages via workflow on main branch pushes. Build outputs to `./out` directory for static hosting.