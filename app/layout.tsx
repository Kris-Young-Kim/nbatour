import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: '김맘바와 함께하는 NBA 직관투어 2026',
  description: '샌프란시스코, LA에서 만나는 NBA의 모든 것 - NBA 유튜버 김맘바와 함께하는 농구 성지 순례',
  keywords: ['NBA', '직관투어', '김맘바', '농구', '투어', '로스앤젤레스', '샌프란시스코'],
  openGraph: {
    title: '김맘바와 함께하는 NBA 직관투어 2026',
    description: '샌프란시스코, LA에서 만나는 NBA의 모든 것',
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: '김맘바와 함께하는 NBA 직관투어 2026',
    description: '샌프란시스코, LA에서 만나는 NBA의 모든 것',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

