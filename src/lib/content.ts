import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  featured_image?: string;
  seo_description?: string;
  canonical_url?: string;
  content: string;
  html: string;
  excerpt?: string;
  reading_time?: string;
}

export interface Publication {
  slug: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: string;
  status: string;
  abstract: string;
  description?: string;
  date?: string;
  pdf_url?: string;
  doi?: string;
  arxiv_id?: string;
  bibtex?: string;
  citation_count?: number;
  featured: boolean;
  seo_description?: string;
  url?: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  tech_stack: string[];
  technologies?: string[];
  github_url?: string;
  live_url?: string;
  url?: string;
  project_image?: string;
  featured: boolean;
  order: number;
  status: string;
  start_date?: string;
  end_date?: string;
  language?: string;
  stars?: number;
  forks?: number;
  watchers?: number;
  seo_description?: string;
  name?: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  author: string;
  email: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    researchgate: string;
    orcid: string;
  };
  seo: {
    keywords: string;
    google_verification: string;
    analytics_id: string;
  };
}

// Blog posts loader
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const postsDirectory = path.join(process.cwd(), '_posts');
    const fileNames = fs.readdirSync(postsDirectory);
    
    const posts = fileNames
      .filter(name => name.endsWith('.md'))
      .map(fileName => {
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        
        const processedContent = remark()
          .use(remarkGfm)
          .processSync(content);
        
        return {
          slug: fileName.replace('.md', ''),
          ...data,
          content,
          html: processedContent.toString(),
        } as BlogPost;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return posts;
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}

// Publications loader
export async function getPublications(): Promise<Publication[]> {
  try {
    const publicationsDirectory = path.join(process.cwd(), '_publications');
    const fileNames = fs.readdirSync(publicationsDirectory);
    
    const publications = fileNames
      .filter(name => name.endsWith('.md'))
      .map(fileName => {
        const fullPath = path.join(publicationsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);
        
        return {
          slug: fileName.replace('.md', ''),
          ...data,
        } as Publication;
      })
      .sort((a, b) => b.year - a.year);
    
    return publications;
  } catch (error) {
    console.error('Error loading publications:', error);
    return [];
  }
}

// Projects loader
export async function getProjects(): Promise<Project[]> {
  try {
    const projectsDirectory = path.join(process.cwd(), '_projects');
    const fileNames = fs.readdirSync(projectsDirectory);
    
    const projects = fileNames
      .filter(name => name.endsWith('.md'))
      .map(fileName => {
        const fullPath = path.join(projectsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);
        
        return {
          slug: fileName.replace('.md', ''),
          ...data,
        } as Project;
      })
      .sort((a, b) => a.order - b.order);
    
    return projects;
  } catch (error) {
    console.error('Error loading projects:', error);
    return [];
  }
}

// Site config loader
export async function getSiteConfig(): Promise<SiteConfig | null> {
  try {
    const configPath = path.join(process.cwd(), '_config.yml');
    const fileContents = fs.readFileSync(configPath, 'utf8');
    const { data } = matter(fileContents);
    
    return data as SiteConfig;
  } catch (error) {
    console.error('Error loading site config:', error);
    return null;
  }
}

// Single post loader
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(process.cwd(), '_posts', `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    const processedContent = remark()
      .use(remarkGfm)
      .processSync(content);
    
    return {
      slug,
      ...data,
      content,
      html: processedContent.toString(),
    } as BlogPost;
  } catch {
    return null;
  }
}

// Single publication loader
export async function getPublication(slug: string): Promise<Publication | null> {
  try {
    const fullPath = path.join(process.cwd(), '_publications', `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    
    return {
      slug,
      ...data,
    } as Publication;
  } catch {
    return null;
  }
}

// Single project loader
export async function getProject(slug: string): Promise<Project | null> {
  try {
    const fullPath = path.join(process.cwd(), '_projects', `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    
    return {
      slug,
      ...data,
    } as Project;
  } catch {
    return null;
  }
}