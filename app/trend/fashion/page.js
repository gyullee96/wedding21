import Image from 'next/image'
import Link from 'next/link'
import { articles } from '@/data/articles'

export const metadata = {
  title: '웨딩홀 | Wedding21',
  description: '웨딩홀 기사 모아보기',
}

function getHallArticles(limit = 9) {
  return [...articles]
    .filter((a) => a.section === 'wedding' && a.subSection === 'hall')
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit)
}

export default async function HallPage() {
  const halls = getHallArticles(9)

  return (
    <div className="mx-auto w-full max-w-6xl px-4">
      {/* 상단 바: 좌측 섹션 라벨 / 우측 더보기 */}
      <div className="flex w-full flex-col items-center justify-center px-2 pt-20 pb-20">
        <span className="pb-10 text-2xl font-bold text-pink-300">Wedding</span>
        <h2 className="text-5xl font-bold">웨딩홀</h2>
      </div>

      {/* 카드 그리드 4개 (3:4 비율) */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-x-3">
        {halls.map((a, i) => (
          <Link
            key={a.id}
            href={`/article/${a.id}/${a.slug}`}
            className="group block"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
              <Image
                src={a.image}
                alt={a.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority={i === 0}
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>

            {/* 아래 텍스트는 필요 최소만 — 점진적으로 디벨롭해도 OK */}
            <div className="line-clamp-2 p-3 text-xl font-semibold text-black">
              {a.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
