'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { X } from 'lucide-react'

interface ContentPreviewProps {
  content: any;
  contentType: 'blog' | 'publication' | 'project';
  onClose?: () => void;
}

export function ContentPreview({ content, contentType, onClose }: ContentPreviewProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  const getPreviewUrl = () => {
    switch (contentType) {
      case 'blog':
        return `/preview/blog/${content.slug}`;
      case 'publication':
        return `/preview/publication/${content.slug}`;
      case 'project':
        return `/preview/project/${content.slug}`;
    }
  };
  
  const getPreviewTitle = () => {
    switch (contentType) {
      case 'blog':
        return 'Blog Post Preview';
      case 'publication':
        return 'Publication Preview';
      case 'project':
        return 'Project Preview';
    }
  };

  return (
    <Card className="mb-4">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{getPreviewTitle()}</CardTitle>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsVisible(!isVisible)}
            >
              {isVisible ? 'Hide' : 'Show'} Preview
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              asChild
            >
              <a 
                href={getPreviewUrl()} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                Full Preview
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6m6 6v6m0 0h6m-6 6v6" />
                </svg>
              </a>
            </Button>
          </div>
        </div>
      </CardHeader>
      
      {isVisible && (
        <CardContent>
          <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h4 className="text-lg font-semibold text-yellow-800 mb-2 flex items-center gap-2">
              🔍 Preview Mode
            </h4>
            <p className="text-yellow-700 mb-4">
              This is a preview of your content. Changes are not yet live.
            </p>
            <div className="text-sm text-yellow-600">
              <p><strong>Next Steps:</strong></p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Review all content carefully</li>
                <li>Check formatting and links</li>
                <li>Test on different devices</li>
                <li>Save changes when satisfied</li>
              </ol>
            </div>
          </div>
          
          <div className="prose prose-sm max-w-none">
            <h2>{content.title}</h2>
            {content.html && (
              <div dangerouslySetInnerHTML={{ __html: content.html }} />
            )}
            
            {content.authors && (
              <div className="mt-4">
                <h4>Authors</h4>
                <p>{content.authors.join(', ')}</p>
              </div>
            )}
            
            {content.abstract && (
              <div className="mt-4">
                <h4>Abstract</h4>
                <p className="text-sm leading-relaxed">{content.abstract}</p>
              </div>
            )}
            
            {content.tech_stack && (
              <div className="mt-4">
                <h4>Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {content.tech_stack.map((tech: string) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-6 flex justify-center gap-4">
            <Button variant="outline" onClick={() => setIsVisible(false)}>
              Close Preview
            </Button>
            <Button onClick={onClose}>
              Save & Publish
            </Button>
          </div>
        </CardContent>
      )}
    </Card>
  )
}