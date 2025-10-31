import Image from 'next/image'
import { notFound, redirect } from 'next/navigation'
import { articles } from '@/data/articles'

export async function generateMetadata({ params }) {
  const article = articles.find((a) => a.id.toString() === params.id)
  if (!article) return { title: '기사 없음 | Wedding21' }
  return {
    title: `${article.title} | Wedding21`,
    description: article.excerpt ?? '웨딩21 기사 상세',
    openGraph: {
      title: `${article.title} | Wedding21`,
      description: article.excerpt ?? '',
      images: article.image ? [{ url: article.image }] : [],
      type: 'article',
    },
  }
}

export default async function ArticleDetailPage({ params }) {
  const { id, slug } = params
  const article = articles.find((a) => a.id.toString() === id)

  // 없는 글
  if (!article) return notFound()

  // slug가 틀렸다면 정정 URL로 리디렉트 (SEO/정합성)
  if (slug !== article.slug) {
    redirect(`/article/${article.id}/${article.slug}`)
  }

  // (선택) 연관 기사 3개: 같은 섹션/서브섹션, 현재 글 제외, 최신순
  const related = articles
    .filter(
      (a) =>
        a.id !== article.id &&
        a.section === article.section &&
        a.subSection === article.subSection,
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3)

  return (
    <article className="mx-auto max-w-3xl px-4 py-20">
      {/* 제목/메타 */}
      <header>
        <h1 className="text-5xl font-extrabold">{article.title}</h1>
        <p className="mt-2 py-5 text-sm text-gray-500">
          {new Date(article.date).toLocaleDateString('ko-KR')}
          {article.tags?.length ? (
            <>
              {' · '}
              {article.tags.map((t) => `#${t}`).join(' ')}
            </>
          ) : null}
        </p>
      </header>

      {/* 대표 이미지 */}
      {article.image && (
        <div className="relative mt-6 aspect-[3/4] w-full overflow-hidden rounded-lg">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      )}

      {/* 본문 */}
      <div
        className="prose prose-neutral prose-img:rounded-lg mt-10 max-w-none"
        dangerouslySetInnerHTML={{ __html: article.contentHtml }}
      />

      {/* 태그 칩 */}
      {article.tags?.length ? (
        <ul className="mt-10 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-600"
            >
              #{tag}
            </li>
          ))}
        </ul>
      ) : null}

      {/* 연관 기사 */}
      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="mb-4 text-xl font-semibold">이 기사와 비슷한 글</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {related.map((r) => (
              <a
                key={r.id}
                href={`/article/${r.id}/${r.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={r.image}
                    alt={r.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 33vw, 256px"
                  />
                </div>
                <p className="mt-2 line-clamp-2 text-sm font-semibold group-hover:underline">
                  {r.title}
                </p>
              </a>
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
