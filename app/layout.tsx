import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '삼삼데이 태전점',
  description: '삼삼데이 태전점',
  metadataBase: new URL('https://samsamday.vercel.app'),
  openGraph: {
    title: '삼삼데이 태전점',
    description: '삼삼데이 태전점',
    siteName: '삼삼데이 태전점',
    url: 'https://samsamday.vercel.app',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '삼삼데이 태전점',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '삼삼데이 태전점',
    description: '삼삼데이 태전점',
    site: '@samsamday',
    creator: '@samsamday',
  },
  alternates: {
    canonical: 'https://samsamday.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  )
}