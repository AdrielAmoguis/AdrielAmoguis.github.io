import type { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, FileText, Quote } from 'lucide-react'
import Link from 'next/link'
import { getPublication, getPublications } from '@/lib/content'

interface PublicationPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PublicationPageProps): Promise<Metadata> {
  const publication = await getPublication(params.slug);
  
  if (!publication) {
    return {
      title: 'Publication Not Found',
      description: 'The requested publication could not be found.',
    };
  }

  return {
    title: `${publication.title} | Adriel Amoguis`,
    description: publication.seo_description || publication.abstract?.substring(0, 160),
    openGraph: {
      title: publication.title,
      description: publication.seo_description || publication.abstract?.substring(0, 160),
      type: 'article',
      publishedTime: publication.year ? new Date(publication.year, 0, 1).toISOString() : undefined,
      authors: publication.authors,
      url: `https://adrielamoguis.com/publications/${publication.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: publication.title,
      description: publication.seo_description || publication.abstract?.substring(0, 160),
    },
  };
}

export default async function PublicationPage({ params }: PublicationPageProps) {
  const publication = await getPublication(params.slug);
  
  if (!publication) {
    return (
      <div className="container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Publication Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The publication you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link href="/publications">
              Back to Publications
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <article className="container py-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button variant="outline" size="sm" asChild>
            <Link href="/publications">
              ← Back to Publications
            </Link>
          </Button>
        </div>

        <header className="mb-8">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">{publication.title}</h1>
              <div className="text-lg text-muted-foreground mb-4">
                {publication.authors.join(', ')}
              </div>
              <div className="text-sm font-medium">
                {publication.venue} • {publication.year}
              </div>
            </div>
            
            <div className="flex gap-2">
              {publication.pdf_url && (
                <Button variant="outline" size="sm" asChild>
                  <Link href={publication.pdf_url} target="_blank" rel="noopener noreferrer">
                    <FileText className="h-4 w-4 mr-1" />
                    PDF
                  </Link>
                </Button>
              )}
              
              {publication.doi && (
                <Button variant="outline" size="sm" asChild>
                  <Link href={`https://doi.org/${publication.doi}`} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    DOI
                  </Link>
                </Button>
              )}
              
              {publication.arxiv_id && (
                <Button variant="outline" size="sm" asChild>
                  <Link href={`https://arxiv.org/abs/${publication.arxiv_id}`} target="_blank" rel="noopener noreferrer">
                    arXiv
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          {publication.abstract && (
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Quote className="h-4 w-4 mr-2" />
                  Abstract
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {publication.abstract}
                </p>
              </CardContent>
            </Card>
          )}

          {publication.bibtex && (
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  BibTeX
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-xs bg-muted p-3 rounded-md overflow-x-auto">
                  <code>{publication.bibtex}</code>
                </pre>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Want to cite this work? Use the BibTeX citation above or find more publications.
          </p>
          <Button variant="outline" asChild>
            <Link href="/publications">
              View All Publications
            </Link>
          </Button>
        </div>
      </div>
    </article>
  )
}

export async function generateStaticParams() {
  const publications = await getPublications()
  return publications.map((publication) => ({
    slug: publication.slug,
  }))
}