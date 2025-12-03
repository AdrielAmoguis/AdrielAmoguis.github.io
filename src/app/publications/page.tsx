import type { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, FileText, Quote } from 'lucide-react'
import Link from 'next/link'

// Mock data - this will come from CMS later
const publications = [
  {
    id: 1,
    title: 'Baybayin Character Instance Detection',
    authors: ['Adriel Isaiah V. Amoguis', 'Gian Joseph B. Madrid', 'Benito Miguel D. Flores IV', 'Macario O. Cordel II'],
    year: 2023,
    type: 'Preprint',
    venue: 'arXiv',
    arxiv: '2304.09469',
    pdf: 'https://arxiv.org/pdf/2304.09469',
    abstract: 'This paper presents a novel approach to character instance detection for Baybayin, an ancient Filipino script...',
    bibtex: `@misc{amoguis2023baybayin,
      title = {Baybayin Character Instance Detection},
      author = {Amoguis, Adriel Isaiah V. and Madrid, Gian Joseph B. and IV, Benito Miguel D. Flores and II, Macario O. Cordel},
      year = {2023},
      eprint = {2304.09469},
      archivePrefix = {arXiv},
      primaryClass = {cs.CV},
    }`
  },
  {
    id: 2,
    title: 'Road Lane Segmentation Using Vehicle Trajectory Tracking and Lane Demarcation Lines',
    authors: ['Adriel Isaiah Valeroso Amoguis', 'Hernand Ang Hermida', 'Gian Joseph Bonilla Madrid', 'Gabriel Costes Marquez', 'Justin Opulencia Dy', 'Jose Gerardo Ortile Guerrero', 'Joel Paz Ilao'],
    year: 2023,
    type: 'Conference',
    venue: 'Proceedings of the 2023 6th International Conference on Machine Vision and Applications (ICMVA 2023)',
    doi: '10.1145/3589572.3589582',
    pdf: 'https://dl.acm.org/doi/10.1145/3589572.3589582?cid=99660925339',
    abstract: 'As levels of road traffic congestion increase relative to population density, it is becoming increasingly necessary for traffic managers to have awareness of road situations in real-time to keep up with traffic management...',
    bibtex: `@inproceedings{10.1145/3589572.3589582,
      author = {Amoguis, Adriel Isaiah Valeroso and Hermida, Hernand Ang and Madrid, Gian Joseph Bonilla and Marquez, Gabriel Costes and Dy, Justin Opulencia and Guerrero, Jose Gerardo Ortile and Ilao, Joel Paz},
      title = {Road Lane Segmentation Using Vehicle Trajectory Tracking and Lane Demarcation Lines},
      year = {2023},
      isbn = {9781450399531},
      publisher = {Association for Computing Machinery},
      address = {New York, NY, USA},
      url = {https://doi.org/10.1145/3589572.3589582},
      doi = {10.1145/3589572.3589582},
      booktitle = {Proceedings of the 2023 6th International Conference on Machine Vision and Applications},
      pages = {64–71},
      numpages = {8},
      keywords = {traffic engineering, vehicle tracking, transportation engineering, computer vision, road lane segmentation, YOLO},
      location = {Singapore, Singapore},
      series = {ICMVA '23},
    }`
  },
  {
    id: 3,
    title: 'Road Lane Segmentation and Functionality Detection',
    authors: ['Adriel Isaiah Valeroso Amoguis', 'Gabriel Costes Marquez', 'Jose Gerardo Ortile Guerrero', 'Hernand Ang Hermida'],
    year: 2023,
    type: 'Journal',
    venue: 'Pending Publication',
    abstract: 'Insights derived from surveillance-based road telemetry are vital for traffic engineers, managers, and policymakers to make well-informed decisions regarding traffic policies...',
    status: 'Under Review'
  }
]

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