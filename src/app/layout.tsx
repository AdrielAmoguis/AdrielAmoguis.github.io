import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/layout/theme-provider'
import { cn } from '@/lib/utils'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://adrielamoguis.com'),
  title: {
    template: '%s | Adriel Amoguis',
    default: 'Adriel Amoguis - AI/ML Engineer & Researcher'
  },
  description: 'Research Assistant at ALTDSI specializing in computer vision, machine learning, and artificial intelligence. Graduate student in Computer Science at De La Salle University.',
  keywords: ['computer vision', 'machine learning', 'artificial intelligence', 'research', 'software engineering', 'De La Salle University'],
  authors: [{ name: 'Adriel Isaiah V. Amoguis' }],
  creator: 'Adriel Isaiah V. Amoguis',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adrielamoguis.com',
    siteName: 'Adriel Amoguis',
    title: 'Adriel Amoguis - AI/ML Engineer & Researcher',
    description: 'Research Assistant at ALTDSI specializing in computer vision, machine learning, and artificial intelligence.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Adriel Amoguis - AI/ML Engineer & Researcher',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@adrielamoguis',
    creator: '@adrielamoguis',
    title: 'Adriel Amoguis - AI/ML Engineer & Researcher',
    description: 'Research Assistant at ALTDSI specializing in computer vision, machine learning, and artificial intelligence.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "min-h-screen bg-background font-sans antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}