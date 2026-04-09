import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import { Navigation } from '../components/navigation'
import { Footer } from '@/components/sections/footer'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://ecoroots.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'EcoRoots | Estufa Inteligente Amazônica',
    template: '%s | EcoRoots',
  },
  description:
    'Monitoramento em tempo real com IA Gemini Vision, ESP32 e gêmeo digital 3D. Sistema de estufa inteligente inspirado na biodiversidade da Amazônia.',
  keywords: [
    'estufa inteligente',
    'IoT',
    'ESP32',
    'inteligência artificial',
    'agricultura',
    'monitoramento',
    'Next.js',
    'gêmeo digital',
    'Amazônia',
    'hidroponia',
    'Gemini Vision',
  ],
  authors: [{ name: 'EcoRoots Team' }],
  creator: 'EcoRoots Team',
  publisher: 'EcoRoots',
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
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: BASE_URL,
    siteName: 'EcoRoots',
    title: 'EcoRoots | Estufa Inteligente Amazônica',
    description:
      'Monitoramento em tempo real com IA Gemini Vision, ESP32 e gêmeo digital 3D. Sistema de estufa inteligente inspirado na biodiversidade da Amazônia.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'EcoRoots — Estufa Inteligente Amazônica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EcoRoots | Estufa Inteligente Amazônica',
    description:
      'Monitoramento em tempo real com IA Gemini Vision, ESP32 e gêmeo digital 3D.',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: [
      { url: '/logo.png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: '#0B3D2E',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Resource hints — load CDN assets faster */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured Data — WebApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'EcoRoots',
              description:
                'Sistema de estufa inteligente com monitoramento em tempo real via IA Gemini Vision, sensores IoT ESP32 e gêmeo digital 3D.',
              url: BASE_URL,
              applicationCategory: 'UtilityApplication',
              operatingSystem: 'Web',
              inLanguage: 'pt-BR',
              author: {
                '@type': 'Organization',
                name: 'EcoRoots Team',
              },
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'BRL',
              },
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {/* Semantic landmark: skip-nav for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-9999 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
          >
            Ir para o conteúdo principal
          </a>

          <header className="fixed top-0 left-0 right-0 z-50">
            <Navigation />
          </header>

          <main id="main-content">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}