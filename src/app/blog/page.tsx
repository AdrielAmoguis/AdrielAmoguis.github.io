import type { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import Link from 'next/link'
import { getBlogPosts } from '@/lib/content'

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
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.reading_time || '5 min read'}
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/blog/${post.slug}`}>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              {post.excerpt && (
                <CardContent>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No blog posts found.</p>
          </div>
        )}
      </div>
    </div>
  )
}