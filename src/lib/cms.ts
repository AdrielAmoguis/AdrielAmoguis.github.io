// CMS Configuration - Will be implemented with Sveltia CMS later
// For now, using static content from content/ directory

export const cmsConfig = {
  backend: {
    name: 'github',
    repo: 'AdrielAmoguis/portfolio-site-opencode-poc',
    branch: 'main',
  },
  media_folder: 'public/images',
  public_folder: '/images',
  site_url: 'https://adrielamoguis.com',
}