# Portfolio Site

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🚀 **Next.js 14** with App Router
- 🎨 **Tailwind CSS** with custom design system
- 🌙 **Dark/Light Mode** toggle
- 📱 **Mobile Responsive** design
- 🔍 **SEO Optimized** with metadata and sitemaps
- ⚡ **Performance** optimized
- 📝 **Git-based CMS** with Sveltia CMS
- 🚀 **GitHub Actions** for deployment

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (cms)/             # CMS admin routes
│   ├── (portfolio)/       # Main portfolio routes
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx           # Homepage
├── components/             # React components
│   ├── ui/                # shadcn/ui components
│   ├── sections/          # Page sections
│   └── layout/            # Layout components
├── lib/                   # Utilities
└── data/                  # Static data
```

## Deployment

This site is configured to deploy to GitHub Pages using GitHub Actions. The workflow is defined in `.github/workflows/deploy.yml`.

## CMS

Content management is handled through Sveltia CMS, which provides a modern Git-based content management interface.

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS + shadcn/ui
- **CMS**: Sveltia CMS
- **Deployment**: GitHub Pages
- **Package Manager**: npm

## License

MIT License - see LICENSE file for details.