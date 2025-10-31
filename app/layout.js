import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FollowLab from '@/components/FollowLab'

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://wedding21.co.kr',
  ),
  title: {
    default: '웨딩21 | 국내 웨딩 전문 매거진',
    template: '%s | 웨딩21',
  },
  description:
    '웨딩홀, 스드메, 예복&아이템, 트렌드, 웨딩뉴스, 이벤트까지 웨딩의 모든 것. 국내 대표 웨딩 매거진 웨딩21.',
  alternates: { caononical: '/' },
  openGraph: {
    type: 'website',
    siteName: '웨딩21',
    title: '웨딩21 | 국내 웨딩 전문 매거진',
    description:
      '웨딩홀, 스드메, 예복&아이템, 트렌드, 웨딩뉴스, 이벤트까지 웨딩의 모든 것.',
    url: '/',
    locale: 'ko_KR',
    images: [
      {
        url: '/images/hero/wedding21_logo.png',
        width: 1200,
        height: 630,
        alt: '웨딩21',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '웨딩21 | 국내 웨딩 전문 매거진',
    description:
      '웨딩홀, 스드메, 예복&아이템, 트렌드, LOOK, 이벤트까지 웨딩의 모든 것.',
    images: ['/images/hero/wedding21_logo.png'],
  },
  icons: {
    icon: '/images/hero/wedding21_logo.png', //app폴더 하위에 .ico파일속성으로 올리기
    apple: '/images/hero/wedding21_logo.png',
  },
  robots: { index: process.env.NEXT_PUBLIC_INDEX === 'true', follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <div className="bg-shite min-h-screen text-gray-900">{children}</div>
        <FollowLab />
        <Footer />
      </body>
    </html>
  )
}
