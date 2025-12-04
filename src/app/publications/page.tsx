import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { getPublications } from '@/lib/content'
import { ExternalLink, FileText, Quote } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Publications',
  description: 'Academic publications and research papers by Adriel Amoguis in computer vision, machine learning, and artificial intelligence.',
}

export default async function PublicationsPage() {
  const publications = await getPublications()

  return (
    <div className="container py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 gradient-text">Publications</h1>
        <p className="text-xl text-muted-foreground mb-12">
          My works and publications in computer vision, machine learning, and artificial intelligence.
        </p>

        <div className="space-y-8">
          {publications.map((pub) => (
            <Card key={pub.slug} className="overflow-hidden">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">
                      {pub.title}
                    </CardTitle>
                    <p className="text-muted-foreground mb-3">
                      {pub.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span>{pub.venue}</span>
                      <span>•</span>
                      <span>{pub.date ? new Date(pub.date).toLocaleDateString() : ''}</span>
                    </div>
                    {pub.authors && (
                      <p className="text-sm text-muted-foreground mb-3">
                        Authors: {pub.authors.join(', ')}
                      </p>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {pub.abstract && (
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Quote className="h-4 w-4" />
                      Abstract
                    </h4>
                    <p className="text-sm text-muted-foreground italic">
                      {pub.abstract}
                    </p>
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {pub.pdf_url && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={pub.pdf_url} target="_blank" rel="noopener noreferrer">
                        <FileText className="h-4 w-4 mr-2" />
                        PDF
                      </Link>
                    </Button>
                  )}
                  {pub.doi && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        DOI
                      </Link>
                    </Button>
                  )}
                  {pub.url && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={pub.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Online
                      </Link>
                    </Button>
                  )}
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/publications/${pub.slug}`}>
                      View Details
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {publications.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No publications found.</p>
          </div>
        )}
      </div>
    </div>
  )
}