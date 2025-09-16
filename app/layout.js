import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Wedding21 Magazine',
  description: 'K-Wedding LifeStyle Magazine',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <div className="bg-shite min-h-screen text-gray-900">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
