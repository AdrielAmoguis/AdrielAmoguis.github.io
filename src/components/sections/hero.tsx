'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const socialLinks = [
  { name: 'Email', href: 'mailto:adriel.amoguis@dlsu.edu.ph', icon: '✉️' },
  { name: 'GitHub', href: 'https://github.com/AdrielAmoguis', icon: '🐙' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/adriel-amoguis', icon: '💼' },
  { name: 'ResearchGate', href: 'https://www.researchgate.net/profile/Adriel-Isaiah-Amoguis', icon: '🔬' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Adriel Isaiah V. Amoguis</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
              <span className="inline-block">AI/ML Engineer</span>
              <span className="mx-2">•</span>
              <span className="inline-block">Research Assistant</span>
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Research Assistant at the Dr. Andrew L. Tan Data Science Institute (ALTDSI) 
              specializing in computer vision, machine learning, and artificial intelligence. 
              Graduate student in Computer Science at De La Salle University.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button asChild size="lg" className="group">
                <Link href="/publications">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <Link href="/cv">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-2xl hover:scale-110 transition-transform"
                  title={link.name}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <Card className="w-80 h-80 md:w-96 md:h-96 overflow-hidden border-2 shadow-2xl">
              <CardContent className="p-0 h-full">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <div className="text-6xl mb-4">👨‍💻</div>
                    <div className="text-xl font-semibold">Adriel Amoguis</div>
                    <div className="text-sm opacity-90">AI/ML Engineer</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '3+', label: 'Publications' },
            { number: '10+', label: 'Projects' },
            { number: '2+', label: 'Years Research' },
            { number: '∞', label: 'Coffee Cups' }
          ].map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}