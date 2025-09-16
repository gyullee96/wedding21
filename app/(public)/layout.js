import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Wedding21 Magazine',
  description: 'K-Wedding Lifestyle Magazine',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-white text-gray-900">
        <Header />
        <main className="mx-auto max-w-6xl px-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
