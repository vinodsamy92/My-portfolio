# Personal Portfolio

## Project overview

Single-page personal portfolio for Vinoth Periyasamy — fullstack developer and software engineer. Built with a premium dark theme, warm accent palette, and scroll-driven animations.

## Tech stack

- **Framework:** React 19 (via Vite 8)
- **Animations:** Framer Motion
- **Icons:** React Icons (Feather, Heroicons, Simple Icons)
- **Fonts:** Outfit (sans-serif) + Source Serif 4 (serif)
- **Styling:** Vanilla CSS (no preprocessor, no Tailwind)

## Project structure

```
personal-portfolio/
├── index.html              # Entry HTML with meta tags and font loading
├── vite.config.js          # Vite configuration
├── package.json
├── public/
│   └── favicon.svg         # Branded "V" favicon
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # Root component composing all sections
    ├── App.css             # All component styles (single stylesheet)
    ├── index.css           # CSS variables, resets, global styles
    ├── assets/             # Profile photo and project images
    └── components/
        ├── Navbar.jsx      # Fixed nav with scroll effect + mobile menu
        ├── Hero.jsx        # Hero section with profile image
        ├── About.jsx       # Three-card service overview
        ├── Work.jsx        # Filterable project gallery
        ├── Skills.jsx      # Skills grid + experience timeline
        ├── Testimonials.jsx # Carousel with brand logos
        ├── Contact.jsx     # Contact form + info methods
        └── Footer.jsx      # Footer with social links
```

## Commands

```bash
npm run dev     # Start dev server (localhost:5173)
npm run build   # Production build to dist/
npm run preview # Preview production build
```

## Design system

- **Background:** Off-black `#0c0c0e` with elevated surface `#141416`
- **Accent:** Warm copper `#c8956c`
- **Text:** Cream primary `#f0ece6`, muted grays for secondary
- **Borders:** Subtle dark borders, accent-tinted on hover
- **Shadows:** Tinted dark shadows, not pure black
- **Typography:** Outfit for UI, Source Serif 4 italic for display accents
- **Motion:** Staggered reveals, spring-based easing, scroll-triggered

## Content data

All portfolio content (projects, skills, experience, testimonials) is hardcoded in their respective components. No CMS or backend dependency. To update content, edit the data arrays at the top of each component file.

## Conventions

- Single CSS file (`App.css`) for all component styles — no CSS modules or SCSS
- CSS custom properties in `index.css` for theming
- Framer Motion for all animations
- Semantic HTML (`nav`, `main`, `section`, `footer`)
- Accessible: skip-link, focus-visible, aria-labels, alt text
