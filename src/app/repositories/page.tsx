import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { getProjects } from '@/lib/content'
import { ExternalLink, Star, GitFork, Eye, Code } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Repositories',
  description: 'Open source projects and repositories by Adriel Amoguis on GitHub.',
}

export default async function RepositoriesPage() {
  const projects = await getProjects()

  return (
    <div className="container py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 gradient-text">Repositories</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Open source projects and contributions to the developer community.
        </p>

        <div className="space-y-6">
          {projects.map((project) => (
            <Card key={project.slug} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">
                      <Link 
                        href={project.url || '#'}
                        className="hover:text-primary transition-colors flex items-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Code className="h-5 w-5" />
                        {project.title}
                      </Link>
                    </CardTitle>
                    <p className="text-muted-foreground mb-3">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      {project.language && (
                        <span className="px-2 py-1 bg-muted rounded text-xs">
                          {project.language}
                        </span>
                      )}
                      {project.stars !== undefined && (
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4" />
                          {project.stars}
                        </div>
                      )}
                      {project.forks !== undefined && (
                        <div className="flex items-center gap-1">
                          <GitFork className="h-4 w-4" />
                          {project.forks}
                        </div>
                      )}
                      {project.watchers !== undefined && (
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {project.watchers}
                        </div>
                      )}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={project.url || '#'} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              {project.technologies && project.technologies.length > 0 && (
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No repositories found.</p>
          </div>
        )}
      </div>
    </div>
  )
}