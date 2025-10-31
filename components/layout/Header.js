import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-8">
        <Link href="/">
          <Image
            src="/images/hero/wedding21_logo.png"
            alt="logo"
            width={240}
            height={80}
            className="object-cover"
          />
        </Link>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-center pt-4">
        <nav className="font-m flex items-center gap-10 font-bold">
          <Link href="/wedding" className="hover:underline">
            WEDDING
          </Link>
          <Link href="/trend" className="hover:underline">
            TREND
          </Link>
          <Link href="/life" className="hover:underline">
            LIFE
          </Link>
          <Link href="/interview" className="hover:underline">
            INTERVIEW
          </Link>
          <Link href="/community" className="hover:underline">
            COMMUNITY
          </Link>
          <Link href="/contact" className="hover:underline">
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  )
}
