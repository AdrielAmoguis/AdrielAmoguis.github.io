import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Adriel Amoguis - AI/ML Engineer and Research Assistant at ALTDSI.',
}

export default function AboutPage() {
  return (
    <div className="container py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 gradient-text">About Me</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="lead text-xl text-muted-foreground mb-8">
            Adriel Isaiah V. Amoguis is a Research Assistant in the 
            <a href="https://altdsi.dlsu.edu.ph" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Dr. Andrew L. Tan Data Science Institute (ALTDSI)
            </a> 
            of De La Salle University, with a passion for artificial intelligence and machine learning.
          </p>

          <p>
            He is currently completing both a Bachelor&apos;s and a Master&apos;s degree in Computer Science at De La Salle University - Manila. 
            Adriel&apos;s primary focus and most important skill is in machine learning engineering and artificial intelligence, 
            and he has honed these skills through research and practice. He is a proficient developer in back-end web development, 
            desktop application development, and database systems management.
          </p>

          <p>
            Adriel has already made a significant impact in his field, having published 
            <a href="/publications">two papers</a> on computer vision, and he is currently working on a project for his Bachelor's thesis 
            in the domain of computer vision. He is eager to publish this work this year and is working hard to get acceptance, 
            presentation, and publication in the 
            <a href="https://www.thecvf.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Conference on Computer Vision and Pattern Recognition (CVPR)
            </a> 
            for future works.
          </p>

          <p>
            Adriel is also an avid reader of literature on computer science and technology and stays up-to-date with the latest 
            advancements in the field through subscriptions to tech news and by being a member of the 
            <a href="https://acm.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Association for Computing Machinery (ACM)
            </a>.
          </p>

          <p>
            Adriel's greatest professional accomplishment thus far is his publication in the 
            <a href="http://icmva.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              6th International Conference for Machine Vision and Applications (ICMVA 2023)
            </a>. 
            This SCOPUS-indexed publication led him to the ACM and allowed him to network with other professionals in his field globally. 
            He is also excited about his upcoming journal publication on reading ancient Filipino scripts using computer vision.
          </p>

          <p>
            Adriel is determined to break through limits and push for something greater in his career. His mentors have inspired him to aim high, 
            and he is determined to continue making meaningful contributions to the field of computer science and artificial intelligence.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg p-6 border">
            <h3 className="text-xl font-semibold mb-4">Academic Interests</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Machine Vision / Computer Vision</li>
              <li>• Object Detection and Segmentation Algorithms</li>
              <li>• CNNs and RNNs in Machine Vision</li>
              <li>• Image Processing Techniques</li>
              <li>• Machine Learning</li>
              <li>• Time-Series Analysis</li>
              <li>• Mathematical Modeling</li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-6 border">
            <h3 className="text-xl font-semibold mb-4">Other Interests</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Aviation (Aspiring to have at least a Private Pilot License - PPL)</li>
              <li>• Music (Classical & Jazz Piano)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}