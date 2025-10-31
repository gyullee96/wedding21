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
function getSdmArticles(limit = 9) {
  return [...articles]
    .filter((a) => a.section === 'wedding' && a.subSection === 'sdm')
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit)
}
function getItemsArticles(limit = 9) {
  return [...articles]
    .filter((a) => a.section === 'wedding' && a.subSection === 'items')
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit)
}
function getGuideArticles(limit = 9) {
  return [...articles]
    .filter((a) => a.section === 'wedding' && a.subSection === 'guide')
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit)
}

export default async function WeddingPage() {
  const halls = getHallArticles(9)
  const sdms = getSdmArticles(9)
  const items = getItemsArticles(9)
  const guides = getGuideArticles(9)

  return (
    <div>
      <div>
        <div className="mx-auto w-full max-w-6xl px-4">
          {/* 상단 바: 좌측 섹션 라벨 / 우측 더보기 */}
          <div className="flex w-full items-center justify-center pt-30 text-6xl font-bold text-pink-400">
            WEDDING
          </div>
          <div className="flex w-full items-center justify-between px-2 pt-30 pb-5">
            <a href={`/wedding/hall`} className="text-4xl font-bold">
              Hall
            </a>
            <a href={`/wedding/hall`} className="text-xl">
              더보기
            </a>
          </div>

          {/* 웨딩홀 */}
          {/* 카드 그리드 4개 (3:4 비율) */}
          <div className="grid grid-cols-4 grid-rows-2 gap-6">
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
      </div>

      {/* 스드메 */}
      <div>
        <div className="mx-auto w-full max-w-6xl px-4">
          {/* 상단 바: 좌측 섹션 라벨 / 우측 더보기 */}
          <div className="flex w-full items-center justify-between px-2 pt-30 pb-5">
            <a href={`/wedding/sdm`} className="text-4xl font-bold">
              Studio Dress Makeup
            </a>
            <a href={`/wedding/sdm`} className="text-xl">
              더보기
            </a>
          </div>

          {/* 카드 그리드 4개 (3:4 비율) */}
          <div className="grid grid-cols-4 grid-rows-2 gap-6">
            {sdms.map((a, i) => (
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
      </div>

      {/* 웨딩 아이템 */}
      <div>
        <div className="mx-auto w-full max-w-6xl px-4">
          {/* 상단 바: 좌측 섹션 라벨 / 우측 더보기 */}
          <div className="flex w-full items-center justify-between px-2 pt-30 pb-5">
            <a href={`/wedding/items`} className="text-4xl font-bold">
              Wedding Items
            </a>
            <a href={`/wedding/items`} className="text-xl">
              더보기
            </a>
          </div>

          {/* 카드 그리드 4개 (3:4 비율) */}
          <div className="grid grid-cols-4 grid-rows-2 gap-6">
            {items.map((a, i) => (
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
      </div>

      {/* 플래닝 가이드 */}
      <div>
        <div className="mx-auto w-full max-w-6xl px-4">
          {/* 상단 바: 좌측 섹션 라벨 / 우측 더보기 */}
          <div className="flex w-full items-center justify-between px-2 pt-30 pb-5">
            <a href={`/wedding/guide`} className="text-4xl font-bold">
              Planning Guide
            </a>
            <a href={`/wedding/guide`} className="text-xl">
              더보기
            </a>
          </div>

          {/* 카드 그리드 4개 (3:4 비율) */}
          <div className="grid grid-cols-4 grid-rows-2 gap-6">
            {guides.map((a, i) => (
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
      </div>
    </div>
  )
}
