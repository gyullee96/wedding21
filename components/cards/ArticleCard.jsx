import Link from 'next/link'
import Image from 'next/image'
import Badge from '@/components/ui/Badge'

export default function ArticleCard({
  title,
  slug,
  thumbnail,
  summary,
  date,
  tags = [],
  badges = [],
}) {
  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <Link href={slug} aria-label={title} className="block h-full">
        {/* 이미지 */}
        <div className="relative">
          <div className="aspect-[3/2] overflow-hidden">
            {thumbnail && (
              <Image
                src={thumbnail}
                alt={title}
                fill
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            )}
          </div>
          <div className="absolute top-2 left-2 space-x-1">
            {badges.map((b) => (
              <Badge key={b} text={b} />
            ))}
          </div>
        </div>

        {/* 텍스트 */}
        <div className="p-4">
          {date && <p className="mb-1 text-xs text-gray-500">{date}</p>}
          <h3 className="mb-2 line-clamp-2 text-lg leading-snug font-semibold">
            {title}
          </h3>
          {summary && (
            <p className="line-clamp-2 text-sm text-gray-600">{summary}</p>
          )}
          {!!tags.length && (
            <div className="mt-2 flex flex-wrap gap-1">
              {tags.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-700"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </article>
  )
}
