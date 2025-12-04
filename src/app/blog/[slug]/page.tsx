import type { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { getBlogPost, getBlogPosts } from '@/lib/content'
import { OptimizedImage } from '@/lib/images'

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: post.title,
    description: post.seo_description || post.description,
    openGraph: {
      title: post.title,
      description: post.seo_description || post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: post.featured_image ? [
        {
          url: post.featured_image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.seo_description || post.description,
      images: post.featured_image ? [post.featured_image] : [],
    },
  };
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return (
      <div className="container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The requested blog post could not be found.
          </p>
          <Button variant="outline" asChild>
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <article className="container py-20">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link href="/blog" className="mb-8">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>
          
          <h1 className="text-4xl font-bold mb-4 gradient-text">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-muted-foreground mb-8">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString()}
            </div>
            <span>•</span>
            <span>{post.author}</span>
          </div>

          {post.featured_image && (
            <div className="mb-8">
              <OptimizedImage
                src={post.featured_image}
                alt={post.title}
                width={1200}
                height={630}
                priority
              />
            </div>
          )}
        </header>

        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>

        <footer className="mt-12 pt-8 border-t">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold mb-2">Share this post</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://adrielamoguis.com/blog/${post.slug}`)}`}>
                    Twitter
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://adrielamoguis.com/blog/${post.slug}`)}`}>
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
            
            <Button variant="outline" asChild>
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </footer>
      </div>
    </article>
  );
}