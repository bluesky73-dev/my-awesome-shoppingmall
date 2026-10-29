import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Noto_Sans_KR, Noto_Serif_KR } from 'next/font/google'
import './globals.css'

const notoSans = Noto_Sans_KR({
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto-sans',
  display: 'swap',
  preload: false,
})

const notoSerif = Noto_Serif_KR({
  weight: ['400', '500', '600'],
  variable: '--font-noto-serif',
  display: 'swap',
  preload: false,
})

export const metadata: Metadata = {
  title: '아뜰리에 눈 | ATELIER NOON — 일상을 입는 패션 컴퍼니',
  description:
    '아뜰리에 눈은 좋은 소재와 정직한 만듦새로 매일 입고 싶은 옷을 만드는 패션 라이프스타일 기업입니다. 브랜드, 지속가능성, 연혁, 채용 정보를 확인하세요.',
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

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f8f5ef',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${notoSans.variable} ${notoSerif.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
