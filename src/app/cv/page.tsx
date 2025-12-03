import type { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Download, Mail, Calendar, MapPin, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CV',
  description: 'Curriculum Vitae and resume of Adriel Amoguis - AI/ML Engineer and Research Assistant.',
}

export default function CVPage() {
  return (
    <div className="container py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Curriculum Vitae</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Professional and academic background
          </p>
          
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/files/resume.pdf" download>
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <Link href="mailto:adriel.amoguis@dlsu.edu.ph">
                <Mail className="h-4 w-4 mr-2" />
                Contact Me
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-8">
          {/* General Information */}
          <Card>
            <CardHeader>
              <CardTitle>General Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Full Name</h4>
                  <p className="text-muted-foreground">Adriel Isaiah V. Amoguis</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Date of Birth</h4>
                  <p className="text-muted-foreground">26th September 2000</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Languages</h4>
                  <p className="text-muted-foreground">English, Filipino (Tagalog & Cebuano), Mandarin Chinese</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Location</h4>
                  <p className="text-muted-foreground flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    Manila, Philippines
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                      M
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold">MSc in Computer Science</h4>
                        <p className="text-muted-foreground">De La Salle University - Manila</p>
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        2022 - Present
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Still ongoing study.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                      B
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold">BSc in Computer Science with Specialization in Software Technology</h4>
                        <p className="text-muted-foreground">De La Salle University - Manila</p>
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        2019 - Present
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Still ongoing study, graduating within the year!</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card>
            <CardHeader>
              <CardTitle>Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                      A
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold">Research Assistant</h4>
                        <p className="text-muted-foreground">Dr. Andrew L. Tan Data Science Institute, De La Salle University - Manila</p>
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        2022 - Present
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                      L
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold">Head Developer</h4>
                        <p className="text-muted-foreground">Lasallian Youth Orchestra, De La Salle University - Manila</p>
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        2020 - Present
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">
                      P
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold">President</h4>
                        <p className="text-muted-foreground">Lasallian Youth Orchestra, De La Salle University - Manila</p>
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        2020-2022
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Honors and Awards */}
          <Card>
            <CardHeader>
              <CardTitle>Honors and Awards</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">2023</h4>
                  <ul className="mt-2 space-y-2 text-muted-foreground">
                    <li>• Nomination for Best Paper in the Philippine Computing Science Congress 2023 (PCSC 2023)</li>
                    <li>• Gawad Sanghaya Award for Leadership and Service in the Arts</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Academic Interests */}
          <Card>
            <CardHeader>
              <CardTitle>Academic Interests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Machine Vision / Computer Vision</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Object Detection and Segmentation Algorithms</li>
                    <li>• CNNs and RNNs in Machine Vision</li>
                    <li>• Image Processing Techniques</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Machine Learning</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Time-Series Analysis</li>
                    <li>• Mathematical Modeling</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Other Interests</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Aviation (Aspiring to have at least a Private Pilot License - PPL)</li>
                    <li>• Music (Classical & Jazz Piano)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            You may contact me via email for professional or personal inquiries.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" asChild>
              <Link href="mailto:adriel.amoguis@dlsu.edu.ph">
                <Mail className="h-4 w-4 mr-2" />
                Professional Email
              </Link>
            </Button>
            
            <Button variant="outline" asChild>
              <Link href="mailto:adriel_amoguis@dlsu.edu.ph">
                <Mail className="h-4 w-4 mr-2" />
                Academic Email
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}