export const cmsConfig = {
  backend: {
    name: 'github',
    repo: 'AdrielAmoguis/portfolio-site-opencode-poc',
    branch: 'main',
    auth_type: 'implicit',
    base_url: 'https://api.github.com',
    api_root: 'api/v4',
  },
  media_folder: 'public/images/cms',
  public_folder: '/images/cms',
  site_url: 'https://adrielamoguis.com',
  logo_url: '/images/logo.png',
  collections: [
    {
      name: 'blog',
      label: 'Blog Posts',
      folder: '_posts',
      create: true,
      slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
      fields: [
        { name: 'title', label: 'Title', widget: 'string' },
        { name: 'description', label: 'Description', widget: 'text' },
        { name: 'date', label: 'Publish Date', widget: 'datetime', format: 'YYYY-MM-DD HH:mm' },
        { name: 'author', label: 'Author', widget: 'string', default: 'Adriel Amoguis' },
        { name: 'tags', label: 'Tags', widget: 'list', default: [] },
        { name: 'featured_image', label: 'Featured Image', widget: 'image' },
        { name: 'body', label: 'Content', widget: 'markdown' },
        { name: 'seo_description', label: 'SEO Description', widget: 'text', required: false },
        { name: 'canonical_url', label: 'Canonical URL', widget: 'string', required: false }
      ]
    },
    {
      name: 'publications',
      label: 'Publications',
      folder: '_publications',
      create: true,
      slug: '{{year}}-{{slug}}',
      fields: [
        { name: 'title', label: 'Title', widget: 'string' },
        { name: 'authors', label: 'Authors', widget: 'list', field: { widget: 'string' } },
        { name: 'venue', label: 'Venue', widget: 'string' },
        { name: 'year', label: 'Year', widget: 'number' },
        { name: 'type', label: 'Type', widget: 'select', options: ['Conference', 'Journal', 'Workshop', 'Preprint', 'Thesis'] },
        { name: 'status', label: 'Status', widget: 'select', options: ['Published', 'In Press', 'Under Review', 'Draft'], default: 'Published' },
        { name: 'abstract', label: 'Abstract', widget: 'markdown' },
        { name: 'pdf_url', label: 'PDF URL', widget: 'file' },
        { name: 'doi', label: 'DOI', widget: 'string', required: false },
        { name: 'arxiv_id', label: 'arXiv ID', widget: 'string', required: false },
        { name: 'bibtex', label: 'BibTeX', widget: 'text', required: false },
        { name: 'citation_count', label: 'Citation Count', widget: 'number', required: false },
        { name: 'featured', label: 'Featured', widget: 'boolean', default: false }
      ]
    },
    {
      name: 'projects',
      label: 'Projects',
      folder: '_projects',
      create: true,
      slug: '{{slug}}',
      fields: [
        { name: 'title', label: 'Title', widget: 'string' },
        { name: 'description', label: 'Description', widget: 'text' },
        { name: 'tech_stack', label: 'Tech Stack', widget: 'list', field: { widget: 'string' } },
        { name: 'github_url', label: 'GitHub URL', widget: 'string', required: false },
        { name: 'live_url', label: 'Live URL', widget: 'string', required: false },
        { name: 'project_image', label: 'Project Image', widget: 'image', required: false },
        { name: 'featured', label: 'Featured', widget: 'boolean', default: false },
        { name: 'order', label: 'Order', widget: 'number', default: 0 },
        { name: 'status', label: 'Status', widget: 'select', options: ['Active', 'Archived', 'In Development'], default: 'Active' },
        { name: 'start_date', label: 'Start Date', widget: 'datetime', required: false },
        { name: 'end_date', label: 'End Date', widget: 'datetime', required: false }
      ]
    },
    {
      name: 'settings',
      label: 'Site Settings',
      files: [
        {
          name: 'general',
          label: 'General Settings',
          file: '_config.yml',
          fields: [
            { name: 'title', label: 'Site Title', widget: 'string' },
            { name: 'description', label: 'Site Description', widget: 'text' },
            { name: 'author', label: 'Author', widget: 'string' },
            { name: 'email', label: 'Contact Email', widget: 'string' },
            { name: 'social', label: 'Social Links', widget: 'object', fields: [
              { name: 'github', label: 'GitHub', widget: 'string' },
              { name: 'linkedin', label: 'LinkedIn', widget: 'string' },
              { name: 'twitter', label: 'Twitter', widget: 'string' },
              { name: 'researchgate', label: 'ResearchGate', widget: 'string' },
              { name: 'orcid', label: 'ORCID', widget: 'string' }
            ]},
            { name: 'seo', label: 'SEO Settings', widget: 'object', fields: [
              { name: 'keywords', label: 'Keywords', widget: 'text' },
              { name: 'google_verification', label: 'Google Verification', widget: 'string' },
              { name: 'analytics_id', label: 'Analytics ID', widget: 'string' }
            ]}
          ]
        }
      ]
    }
  ]
}