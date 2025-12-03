import Link from 'next/link'

const socialLinks = [
  { name: 'Email', href: 'mailto:adriel.amoguis@dlsu.edu.ph', icon: '✉️' },
  { name: 'GitHub', href: 'https://github.com/AdrielAmoguis', icon: '🐙' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/adriel-amoguis', icon: '💼' },
  { name: 'Twitter', href: 'https://twitter.com/adrielamoguis', icon: '🐦' },
  { name: 'ResearchGate', href: 'https://www.researchgate.net/profile/Adriel-Isaiah-Amoguis', icon: '🔬' },
  { name: 'ORCID', href: 'https://orcid.org/0000-0001-8850-2344', icon: '🆔' },
]

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold">Adriel Isaiah V. Amoguis</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Research Assistant & AI/ML Engineer specializing in computer vision and machine learning.
            </p>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  title={link.name}
                >
                  <span className="text-xl">{link.icon}</span>
                  <span className="sr-only">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="text-right">
            <h4 className="text-sm font-semibold">Contact</h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Professional: <Link href="mailto:adriel.amoguis@dlsu.edu.ph" className="hover:text-foreground">adriel.amoguis@dlsu.edu.ph</Link>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Academic: <Link href="mailto:adriel_amoguis@dlsu.edu.ph" className="hover:text-foreground">adriel_amoguis@dlsu.edu.ph</Link>
            </p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Adriel Isaiah V. Amoguis. Built with Next.js & deployed on GitHub Pages.</p>
        </div>
      </div>
    </footer>
  )
}