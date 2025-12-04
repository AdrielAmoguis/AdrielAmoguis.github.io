import type { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import Link from 'next/link'
import { getBlogPosts } from '@/lib/content'
import { ContentPreview } from '@/components/content-preview'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog posts and articles by Adriel Amoguis about computer science, machine learning, and technology.',
}

export default async function BlogPage() {
  const posts = await getBlogPosts()
  const allTags = Array.from(new Set(posts.flatMap(post => post.tags || [])))

  return (
    <div className="container py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Blog</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Interesting experiences in my career and academic journey
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button variant="outline" size="sm">
              All Posts
            </Button>
            {allTags.map((tag) => (
              <Button key={tag} variant="outline" size="sm">
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Card key={post.slug} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {post.title}
                      </Link>
                    </CardTitle>
                    <p className="text-muted-foreground mb-3">
                      {post.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {Math.ceil(post.content.length / 1000)} min read
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              {post.tags.length > 0 && (
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 text-xs bg-muted rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center items-center gap-4">
          <Button variant="outline" disabled>
            Previous
          </Button>
          
          <div className="flex gap-2">
            <Button variant="default" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
          </div>
          
          <Button variant="outline">
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

export default async function BlogPage() {
  const posts = await getBlogPosts()
  const allTags = Array.from(new Set(posts.flatMap(post => post.tags || [])))

  return (
    <div className="container py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Blog</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Interesting experiences in my career and academic journey
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button variant="outline" size="sm">
              All Posts
            </Button>
            {allTags.map((tag) => (
              <Button key={tag} variant="outline" size="sm">
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Card key={post.slug} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {post.title}
                      </Link>
                    </CardTitle>
                    <p className="text-muted-foreground mb-3">
                      {post.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {Math.ceil(post.content.length / 1000)} min read
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              {post.tags && post.tags.length > 0 && (
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 text-xs bg-muted rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center items-center gap-4">
          <Button variant="outline" disabled>
            Previous
          </Button>
          
          <div className="flex gap-2">
            <Button variant="default" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
          </div>
          
          <Button variant="outline">
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
]

const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)))

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog posts and articles by Adriel Amoguis about computer science, machine learning, and technology.',
}

export default function BlogPage() {
  return (
    <div className="container py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Blog</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Interesting experiences in my career and academic journey
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button variant="outline" size="sm">
              All Posts
            </Button>
            {allTags.map((tag) => (
              <Button key={tag} variant="outline" size="sm">
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">
                      {post.externalUrl ? (
                        <a 
                          href={post.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                        >
                          {post.title}
                          <ArrowRight className="inline h-4 w-4 ml-1" />
                        </a>
                      ) : (
                        <Link 
                          href={`/blog/${post.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {post.title}
                        </Link>
                      )}
                    </CardTitle>
                    <p className="text-muted-foreground mb-3">
                      {post.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              {post.tags.length > 0 && (
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 text-xs bg-muted rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center items-center gap-4">
          <Button variant="outline" disabled>
            Previous
          </Button>
          
          <div className="flex gap-2">
            <Button variant="default" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
          </div>
          
          <Button variant="outline">
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}