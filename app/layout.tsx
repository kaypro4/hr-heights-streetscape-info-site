import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat, Source_Serif_4 } from 'next/font/google'
import { AppShell } from '@/components/app-shell'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-montserrat',
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
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#232c39',
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
        className={`${inter.variable} ${montserrat.variable} ${sourceSerif.variable} font-sans antialiased`}
      >
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
