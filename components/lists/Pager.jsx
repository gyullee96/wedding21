'use client'
import { useRouter, useSearchParams } from 'next/navigation'

export default function Pager({ page = 1, total = 0, limit = 12 }) {
  const router = useRouter()
  const params = useSearchParams()
  const pageCount = Math.max(1, Math.ceil(total / limit)) // 총 페이지 수 계산
  if (pageCount <= 1) return null // 페이지 수가 1개면 페이저 안 보이게

  const go = (p) => {
    const q = new URLSearchParams(params.toString())
    q.set('page', String(p))
    q.set('limit', String(limit))
    router.push(`?${q.toString()}`, { scroll: true })
  }
  // 페이지 버튼 배열 (최대 10개까지 보여줌)
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1).slice(0, 10) // 처음엔 10페이지까지만 노출

  return (
    <nav className="mt-6 flex items-center justify-center gap-2">
      <button
        onClick={() => page > 1 && go(page - 1)}
        className="rounded border px-3 py-1 text-sm disabled:opacity-40"
        disabled={page <= 1}
        aria-label="이전 페이지"
      >
        이전
      </button>
      <ul className="flex items-center gap-1">
        {pages.map((p) => (
          <li key={p}>
            <button
              onClick={() => go(p)}
              className={[
                'rounded px-3 py-1 text-sm',
                p === page ? 'bg-black text-white' : 'border',
              ].join(' ')}
              aria-current={p === page ? 'page' : undefined}
            >
              {p}
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => page < pageCount && go(page + 1)}
        className="rounded border px-3 py-1 text-sm disabled:opacity-40"
        disabled={page >= pageCount}
        aria-label="다음 페이지"
      >
        다음
      </button>
    </nav>
  )
}
