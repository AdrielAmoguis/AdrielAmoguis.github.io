---
title: "Portfolio Website"
description: "Modern portfolio website built with Next.js and Sveltia CMS"
github_url: "https://github.com/AdrielAmoguis/portfolio-site-opencode-poc"
live_url: "https://adrielamoguis.com"
project_image: "/images/cms/projects/portfolio-website.jpg"
featured: true
order: 1
status: "Active"
start_date: "2024-01-01"
tech_stack: ["Next.js", "TypeScript", "Tailwind CSS", "Sveltia CMS", "Framer Motion", "Lucide React"]
---

# Portfolio Website

A modern, responsive portfolio website showcasing my work in AI/ML research and software development.

## Features

- 🎨 **Modern Design**: Built with Next.js 14 and Tailwind CSS
- 📝 **Content Management**: Sveltia CMS for easy content updates
- 📱 **Mobile Responsive**: Optimized for all devices
- 🌙 **Dark Mode**: System theme preference support
- ⚡ **Performance**: Optimized for Core Web Vitals
- 🔍 **SEO Ready**: Structured data and meta tags

## Technical Implementation

### Frontend
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Components**: Reusable UI components with shadcn/ui
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React for consistent iconography

### Backend
- **CMS**: Sveltia CMS for Git-based content management
- **Deployment**: GitHub Pages with GitHub Actions
- **Content**: Markdown files with frontmatter
- **Images**: Optimized with Next.js Image component

### Development Tools
- **Language**: TypeScript for type safety
- **Package Manager**: npm for dependency management
- **Code Quality**: ESLint and Prettier configuration
- **Version Control**: Git with conventional commits

## Project Structure

```
portfolio-site/
├── _posts/                    # Blog posts
├── _publications/             # Academic papers
├── _projects/                 # Project showcase
├── _config.yml               # Site configuration
├── src/app/                  # Next.js pages
├── src/components/            # React components
├── src/lib/                  # Utilities
├── public/admin/              # CMS interface
└── public/images/             # Static assets
```

## Content Management

The site uses Sveltia CMS for content management:
- **Blog Posts**: Technical articles and tutorials
- **Publications**: Academic papers and research
- **Projects**: Software development portfolio
- **Settings**: Site configuration and metadata

All content is stored as Markdown files with YAML frontmatter, making it easy to version control and edit.

## Performance Optimizations

- **Image Optimization**: WebP format with blur placeholders
- **Code Splitting**: Automatic with Next.js
- **Static Generation**: Pre-built pages for fast loading
- **SEO**: Automatic sitemaps and meta tags
- **Bundle Analysis**: Optimized dependencies and tree shaking

---

*Tags: next.js, typescript, tailwind css, portfolio, web development*