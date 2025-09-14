import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RepoSensei - AI Repository Mentor',
  description: 'AI-driven mentorship platform for developers and teams. Get personalized insights, best practices, and recommendations to improve your code quality and productivity.',
  keywords: ['repository analysis', 'code quality', 'AI mentor', 'developer tools', 'team collaboration'],
  authors: [{ name: 'RepoSensei Team' }],
  openGraph: {
    title: 'RepoSensei - AI Repository Mentor',
    description: 'AI-driven mentorship platform for developers and teams',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
