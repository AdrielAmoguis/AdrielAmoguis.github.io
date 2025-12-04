import type { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, FileText, Quote } from 'lucide-react'
import Link from 'next/link'
import { getPublications } from '@/lib/content'

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
                    <CardTitle className="text-xl mb-2 leading-tight">
                      {pub.status === 'Under Review' && (
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded mr-2">
                          Under Review
                        </span>
                      )}
                      {pub.title}
                    </CardTitle>
                    <div className="text-sm text-muted-foreground mb-2">
                      {pub.authors.join(', ')}
                    </div>
                    <div className="text-sm font-medium">
                      {pub.venue} • {pub.year}
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    {pub.pdf_url && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={pub.pdf_url} target="_blank" rel="noopener noreferrer">
                          <FileText className="h-4 w-4 mr-1" />
                          PDF
                        </Link>
                      </Button>
                    )}
                    {pub.doi && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                          DOI
                        </Link>
                      </Button>
                    )}
                    {pub.arxiv_id && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`https://arxiv.org/abs/${pub.arxiv_id}`} target="_blank" rel="noopener noreferrer">
                          arXiv
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {pub.abstract && (
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Quote className="h-4 w-4 mr-2" />
                      Abstract
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pub.abstract}
                    </p>
                  </div>
                )}
                
                {pub.bibtex && (
                  <div>
                    <h4 className="font-semibold mb-2">BibTeX</h4>
                    <pre className="text-xs bg-muted p-3 rounded-md overflow-x-auto">
                      <code>{pub.bibtex}</code>
                    </pre>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Want to cite my work? All publications are available for academic use.
          </p>
          <Button variant="outline" asChild>
            <Link href="https://scholar.google.com/citations?user=YOUR_ID" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Google Scholar Profile
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Publications',
  description: 'Academic publications and research papers by Adriel Amoguis in computer vision, machine learning, and artificial intelligence.',
}

export default function PublicationsPage() {
  return (
    <div className="container py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 gradient-text">Publications</h1>
        <p className="text-xl text-muted-foreground mb-12">
          My works and publications in computer vision, machine learning, and artificial intelligence.
        </p>

        <div className="space-y-8">
          {publications.map((pub) => (
            <Card key={pub.id} className="overflow-hidden">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 leading-tight">
                      {pub.status === 'Under Review' && (
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded mr-2">
                          Under Review
                        </span>
                      )}
                      {pub.title}
                    </CardTitle>
                    <div className="text-sm text-muted-foreground mb-2">
                      {pub.authors.join(', ')}
                    </div>
                    <div className="text-sm font-medium">
                      {pub.venue} • {pub.year}
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    {pub.pdf && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={pub.pdf} target="_blank" rel="noopener noreferrer">
                          <FileText className="h-4 w-4 mr-1" />
                          PDF
                        </Link>
                      </Button>
                    )}
                    {pub.doi && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          DOI
                        </Link>
                      </Button>
                    )}
                    {pub.arxiv && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`https://arxiv.org/abs/${pub.arxiv}`} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          arXiv
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {pub.abstract && (
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Quote className="h-4 w-4 mr-2" />
                      Abstract
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pub.abstract}
                    </p>
                  </div>
                )}
                
                {pub.bibtex && (
                  <div>
                    <h4 className="font-semibold mb-2">BibTeX</h4>
                    <pre className="text-xs bg-muted p-3 rounded-md overflow-x-auto">
                      <code>{pub.bibtex}</code>
                    </pre>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Want to cite my work? All publications are available for academic use.
          </p>
          <Button variant="outline" asChild>
            <Link href="https://scholar.google.com/citations?user=YOUR_ID" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Google Scholar Profile
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}