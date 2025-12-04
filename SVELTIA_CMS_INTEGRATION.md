# Sveltia CMS Integration Documentation

## 🎯 Overview

This document outlines the complete Sveltia CMS integration for the portfolio website, providing a modern, Git-based content management system with GitHub OAuth authentication and pull request deployment.

## 📋 Table of Contents

- [Architecture](#architecture)
- [Setup Instructions](#setup)
- [Content Structure](#content-structure)
- [Authentication](#authentication)
- [Deployment](#deployment)
- [Features](#features)
- [Troubleshooting](#troubleshooting)

---

## 🏗️ Architecture

### System Components

```
┌─────────────────┐
│   GitHub Pages   │   Static Site
├─────────────────┤
│   Sveltia CMS    │   Content Management
├─────────────────┤
│   GitHub API     │   Authentication
├─────────────────┤
│   GitHub Actions  │   Deployment
└─────────────────┘
```

### Data Flow

1. **Content Creation**: Author creates content via Sveltia CMS
2. **Git Storage**: Content stored as Markdown files in repository
3. **Build Process**: Next.js builds static site from Markdown files
4. **Deployment**: GitHub Actions deploy to GitHub Pages
5. **Live Site**: Published content available to visitors

---

## 🚀 Setup Instructions

### Step 1: GitHub OAuth App Setup

1. **Create GitHub OAuth App**:
   - Go to GitHub Settings → Developer settings → OAuth Apps
   - Click "New OAuth App"
   - Fill in application details:
     ```
     Application name: Adriel Portfolio CMS
     Homepage URL: https://adrielamoguis.com
     Authorization callback URL: https://adrielamoguis.com/admin/callback
     Setup URL: https://adrielamoguis.com/admin
     ```

2. **Configure Scopes**:
   - ✅ `public_repo` (Read access to repositories)
   - ✅ `user:email` (Read email address)
   - ✅ `read:user` (Read user profile data)

3. **Save Credentials**:
   - Copy **Client ID** (will be shown once)
   - Copy **Client Secret** (save immediately, won't be shown again)

### Step 2: Environment Variables

Create `.env.local` in project root:

```bash
# .env.local
GITHUB_CLIENT_ID=your_client_id_here
GITHUB_CLIENT_SECRET=your_client_secret_here
NEXT_PUBLIC_SITE_URL=https://adrielamoguis.com
NEXT_PUBLIC_GITHUB_REPO=AdrielAmoguis/portfolio-site-opencode-poc
```

### Step 3: GitHub Actions Secrets

Add to repository secrets:
- `GITHUB_CLIENT_ID`: Your OAuth Client ID
- `GITHUB_CLIENT_SECRET`: Your OAuth Client Secret

---

## 📁 Content Structure

### Industry-Standard Jekyll Layout

```
portfolio-site/
├── _posts/                    # Blog posts
│   ├── 2024-01-15-getting-started-cv.md
│   ├── 2024-02-20-sveltia-cms-integration.md
│   └── YYYY-MM-DD-slug.md
├── _publications/             # Academic papers
│   ├── 2023-baybayin-character-detection.md
│   ├── 2023-road-lane-segmentation.md
│   └── YYYY-slug.md
├── _projects/                 # Project showcase
│   ├── portfolio-website.md
│   ├── trajectory-clustering.md
│   └── slug.md
├── _config.yml               # Site configuration
└── assets/                   # Static assets
    └── files/
```

### File Naming Convention

- **Underscore prefix**: `_posts`, `_publications`, `_projects`
- **Date-based slugs**: `YYYY-MM-DD-title`
- **SEO-friendly URLs**: Clean, descriptive paths
- **Frontmatter**: YAML metadata with consistent fields

---

## 🔐 Authentication

### GitHub OAuth Flow

1. **User visits** `/admin`
2. **Redirects to GitHub** for OAuth authentication
3. **GitHub prompts** for authorization
4. **User grants** access to repository
5. **CMS receives** temporary access token
6. **Content changes** committed to repository

### Security Features

- **No secrets in code**: All sensitive data in environment variables
- **Token expiration**: Short-lived tokens for security
- **Repository scope**: Limited to specific repository
- **HTTPS only**: All communications encrypted

---

## 🚀 Deployment

### Pull Request Workflow

```yaml
# .github/workflows/deploy.yml
name: Deploy on Content Update

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
    types: [opened, synchronize, reopened]

jobs:
  detect-changes:
    # Detect content changes
    build-and-deploy:
    # Build and deploy site
    # Deploy preview for PRs
```

### Deployment Process

1. **Content Change**: Author updates content via CMS
2. **Automatic Commit**: Sveltia CMS commits to repository
3. **Build Trigger**: GitHub Actions detects changes
4. **Static Build**: Next.js generates static files
5. **Deploy**: Files pushed to GitHub Pages
6. **Live Update**: Site updates automatically

---

## ✨ Features

### Content Management

- **Rich Text Editor**: Markdown with live preview
- **Media Management**: Image uploads with optimization
- **Draft Mode**: Save work-in-progress content
- **Content Scheduling**: Publish content at future dates
- **Version Control**: Full Git history of all changes

### User Experience

- **Mobile Responsive**: Works on tablets and phones
- **Dark/Light Mode**: System theme preference
- **Real-time Preview**: See changes before publishing
- **Auto-save**: Prevents data loss
- **Keyboard Shortcuts**: Power user features

### SEO & Performance

- **Automatic Sitemaps**: Generated for all content
- **Meta Tags**: Optimized for search engines
- **Open Graph**: Rich social sharing previews
- **Core Web Vitals**: Optimized for performance
- **Image Optimization**: WebP format with blur placeholders

---

## 🛠️ Troubleshooting

### Common Issues

#### Authentication Problems

**Issue**: GitHub OAuth not working
**Solution**: 
1. Check Client ID and Secret in environment variables
2. Verify callback URL matches GitHub OAuth app
3. Ensure repository has proper OAuth permissions

#### Build Errors

**Issue**: Content not loading
**Solution**:
1. Check file paths in content loaders
2. Verify Markdown frontmatter syntax
3. Check file permissions in repository

#### Deployment Issues

**Issue**: Changes not appearing on live site
**Solution**:
1. Check GitHub Actions workflow logs
2. Verify GitHub Pages settings
3. Check DNS propagation for domain

### Debug Mode

Enable debug logging by adding to `.env.local`:

```bash
DEBUG=sveltia-cms
```

### Performance Issues

**Issue**: Slow loading times
**Solution**:
1. Optimize image sizes
2. Enable Next.js image optimization
3. Use Next.js static generation

---

## 📚 Migration Guide

### From Mock Data to Real Content

1. **Backup existing content**: Save current mock data
2. **Create content files**: Use proper frontmatter structure
3. **Test locally**: Verify content loads correctly
4. **Update components**: Replace mock data with content loaders
5. **Deploy changes**: Push to main branch

### Content Validation

Validate all content files:

```bash
# Check Markdown syntax
npx markdownlint _posts/**/*.md

# Validate frontmatter
node -e "
const yaml = require('js-yaml');
const fs = require('fs');
const files = fs.readdirSync('_posts');
files.forEach(file => {
  const content = fs.readFileSync(\`_posts/\${file}\`, 'utf8');
  try {
    yaml.load(content);
    console.log(\`✅ \${file}: Valid frontmatter\`);
  } catch (e) {
    console.error(\`❌ \${file}: Invalid frontmatter\`);
  }
});
"
```

---

## 🎯 Best Practices

### Content Creation

- **Descriptive titles**: Clear, SEO-friendly headlines
- **Meta descriptions**: 150-160 characters for each page
- **Tag consistency**: Use controlled vocabulary
- **Image optimization**: WebP format, proper sizing
- **Internal linking**: Cross-reference related content

### Git Workflow

- **Atomic commits**: One logical change per commit
- **Descriptive messages**: Clear commit history
- **Branch protection**: Prevent force pushes to main
- **Regular backups**: Multiple backup strategies

### Security

- **Environment variables**: Never commit secrets
- **HTTPS everywhere**: All external resources secure
- **Input validation**: Sanitize all user inputs
- **Access control**: Principle of least privilege

---

## 📞 Support

### Documentation

- [Sveltia CMS Docs](https://github.com/sveltia/sveltia-cms)
- [Next.js Docs](https://nextjs.org/docs)
- [GitHub Actions Docs](https://docs.github.com/en/actions)

### Community

- [GitHub Issues](https://github.com/sveltia/sveltia-cms/issues)
- [Discussions](https://github.com/sveltia/sveltia-cms/discussions)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/sveltia-cms)

---

## 🔄 Updates & Maintenance

### Regular Tasks

- **Dependency updates**: Keep packages current
- **Security patches**: Apply security updates promptly
- **Performance monitoring**: Track Core Web Vitals
- **Content audits**: Regular content reviews
- **Backup verification**: Ensure backup systems working

### Monitoring

Set up monitoring for:
- Site uptime
- Build success/failure rates
- Content update frequency
- User engagement metrics
- SEO performance

---

This integration provides a complete, modern content management solution while maintaining the simplicity and reliability of static site hosting.