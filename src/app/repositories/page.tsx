import type { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Star, GitFork, Eye } from 'lucide-react'
import Link from 'next/link'
import { getProjects } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Repositories',
  description: 'GitHub repositories and open source projects by Adriel Amoguis.',
}

export default async function RepositoriesPage() {
  const projects = await getProjects()

  return (
    <div className="container py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 gradient-text">GitHub Repositories</h1>
          <p className="text-xl text-muted-foreground mb-8">
            My open source contributions and personal projects
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <Card className="inline-block">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Total Commits</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="inline-block">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Public Repos</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="inline-block">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Stars</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.slug} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">
                      {project.github_url ? (
                        <Link 
                          href={project.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                        >
                          {project.name}
                        </Link>
                      ) : (
                        project.name
                      )}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mb-3">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <div className={`w-3 h-3 rounded-full ${project.tech_stack ? 'bg-blue-500' : 'bg-gray-500'}`} />
                        <span>{project.tech_stack?.[0] || 'Various'}</span>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        <span>{project.stars || 0}</span>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <GitFork className="h-4 w-4" />
                        <span>{project.forks || 0}</span>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{project.watchers || 0}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              {project.tech_stack && project.tech_stack.length > 0 && (
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.tech_stack.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 text-xs bg-muted rounded-md"
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

        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="https://github.com/AdrielAmoguis" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              View on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

const languageColors: Record<string, string> = {
  Python: 'bg-blue-500',
  JavaScript: 'bg-yellow-500',
  TypeScript: 'bg-blue-600',
  HTML: 'bg-orange-500',
  CSS: 'bg-purple-500',
  Java: 'bg-red-500',
  'C++': 'bg-blue-400',
}

export const metadata: Metadata = {
  title: 'Repositories',
  description: 'GitHub repositories and open source projects by Adriel Amoguis.',
}

export default function RepositoriesPage() {
  return (
    <div className="container py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 gradient-text">GitHub Repositories</h1>
          <p className="text-xl text-muted-foreground mb-8">
            My open source contributions and personal projects
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <Card className="inline-block">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">100+</div>
                  <div className="text-sm text-muted-foreground">Total Commits</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="inline-block">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">10+</div>
                  <div className="text-sm text-muted-foreground">Public Repos</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="inline-block">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">50+</div>
                  <div className="text-sm text-muted-foreground">Stars</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {repositories.map((repo) => (
            <Card key={repo.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">
                      <Link 
                        href={repo.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        {repo.name}
                      </Link>
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mb-3">
                      {repo.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <div className={`w-3 h-3 rounded-full ${languageColors[repo.language] || 'bg-gray-500'}`} />
                        <span>{repo.language}</span>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        <span>{repo.stars}</span>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <GitFork className="h-4 w-4" />
                        <span>{repo.forks}</span>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{repo.watchers}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              {repo.topics && repo.topics.length > 0 && (
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {repo.topics.map((topic) => (
                      <span 
                        key={topic}
                        className="px-2 py-1 text-xs bg-muted rounded-md"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="https://github.com/AdrielAmoguis" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              View on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}