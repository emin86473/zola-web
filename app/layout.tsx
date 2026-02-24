import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'ZOLA - Live in Dubai, Pay 0% Tax',
  description: 'AI-first platform for UAE structuring and company formation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, "antialiased bg-slate-950 text-white min-h-screen font-sans")}>
        {children}
      </body>
    </html>
  )
}
