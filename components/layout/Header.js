import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-8">
        <Image
          src="/images/hero/wedding21_logo.png"
          alt="logo"
          width={240}
          height={80}
          className="object-cover"
        />
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-center pt-4">
        <nav className="font-m flex items-center gap-10 font-semibold">
          <Link href="/Wedding" className="hover:underline">
            Wedding
          </Link>
          <Link href="/Trend" className="hover:underline">
            Trend
          </Link>
          <Link href="/Life" className="hover:underline">
            Life
          </Link>
          <Link href="/Interview" className="hover:underline">
            Interview
          </Link>
          <Link href="/community" className="hover:underline">
            Community
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
