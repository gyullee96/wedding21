import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tight text-pink-300"
        >
          wedding21
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/plan" className="hover:underline">
            웨딩준비
          </Link>
          <Link href="/dress" className="hover:underline">
            웨딩드레스
          </Link>
          <Link href="/beautyfashion" className="hover:underline">
            뷰티/패션
          </Link>
          <Link href="/travellife" className="hover:underline">
            여행/라이프
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </nav>
      </div>
    </header>
  )
}
