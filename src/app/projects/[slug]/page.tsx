import type { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Star, GitFork, Eye } from 'lucide-react'
import Link from 'next/link'
import { getProject } from '@/lib/content'
import { OptimizedImage } from '@/lib/images'

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = await getProject(params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }

  return {
    title: `${project.title} | Adriel Amoguis`,
    description: project.seo_description || project.description,
    openGraph: {
      title: project.title,
      description: project.seo_description || project.description,
      type: 'website',
      url: `https://adrielamoguis.com/projects/${project.slug}`,
      images: project.project_image ? [
        {
          url: project.project_image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ] : [],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProject(params.slug);
  
  if (!project) {
    return (
      <div className="container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link href="/repositories">
              Back to Projects
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button variant="outline" size="sm" asChild>
            <Link href="/repositories">
              ← Back to Projects
            </Link>
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Project Image */}
          {project.project_image && (
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-0">
                  <OptimizedImage 
                    src={project.project_image}
                    alt={project.title}
                    width={800}
                    height={600}
                    priority={true}
                    className="rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          )}

          {/* Project Details */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                <div className="text-sm text-muted-foreground mb-4">
                  {project.status === 'Active' ? (
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded">
                      Active
                    </span>
                  ) : (
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 rounded">
                      {project.status}
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                {project.tech_stack && project.tech_stack.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech_stack.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-md text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Project Links */}
                <div className="flex gap-4">
                  {project.github_url && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.github_url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        GitHub
                      </Link>
                    </Button>
                  )}
                  
                  {project.live_url && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.live_url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                </div>

                {/* Project Dates */}
                {(project.start_date || project.end_date) && (
                  <div className="mt-6 pt-6 border-t">
                    <h4 className="font-semibold mb-3">Timeline</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      {project.start_date && (
                        <div>
                          <strong>Started:</strong> {new Date(project.start_date).toLocaleDateString()}
                        </div>
                      )}
                      {project.end_date && (
                        <div>
                          <strong>Completed:</strong> {new Date(project.end_date).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}