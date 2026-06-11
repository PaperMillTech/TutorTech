import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Fraunces, Lexend } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  display: 'swap',
})

const lexend = Lexend({
  variable: '--font-lexend',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Woodbridge Tutor | Specialist Primary Tuition in Woodbridge, Suffolk',
  description:
    'One-to-one English, phonics and maths plus expert SEND and anxiety support for children aged 4–11, from a former school leader and Level 7 SENDCo. Woodbridge studio and home visits across Ipswich, Colchester and the A12 corridor.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport = {
  themeColor: '#F5EDE3',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${lexend.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
