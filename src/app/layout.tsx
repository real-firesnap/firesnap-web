import type { Metadata } from 'next'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { Jost } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { ThemeProvider } from '@/components/ThemeProvider'
import ThemeSwitch from '@/components/ThemeSwitch'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })
const jost = Jost({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Firesnap',
  description: 'Firesnap home page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="flex justify-between py-3 px-40">
            <Link href="/" className={`${jost.className} font-bold text-2xl`}>
              Firesnap
            </Link>
            <div className="flex gap-3">
              <ThemeSwitch />
              <Link href="/signup">
                <Button>Sign Up</Button>
              </Link>
              <Link href="/login">
                <Button variant="outline">Login</Button>
              </Link>
            </div>
          </header>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
