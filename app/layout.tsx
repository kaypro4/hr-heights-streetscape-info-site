import type { Metadata, Viewport } from 'next'
import { Inter, Source_Serif_4 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
})

export const metadata: Metadata = {
  title: 'Heights Streetscape Plan | City of Hood River',
  description:
    'Explore the Heights Streetscape Plan for the City of Hood River. Learn about upcoming street improvements, bike paths, pedestrian safety, and community projects in the Heights neighborhood.',
  icons: {
    icon: [
      {
        url: '/placeholder-logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/placeholder-logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/placeholder-logo.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/placeholder-logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1e3a5f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Apply stored accessibility preferences before first paint to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var ts=localStorage.getItem('heights-text-size');var hc=localStorage.getItem('heights-high-contrast');if(ts==='large')document.documentElement.classList.add('text-size-large');if(ts==='larger')document.documentElement.classList.add('text-size-larger');if(hc==='true')document.documentElement.classList.add('high-contrast');}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${sourceSerif.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
