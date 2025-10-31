'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import TagChip from '@/components/ui/TagChip'

export default function FilterBar({ tags = [] }) {
  const router = useRouter()
  const params = useSearchParams()
  const sort = params.get('sort') || 'latest'
  const selectedTags = params.getAll('tag')

  //   URLSearchParams를 문자열로 바꿔 현재 경로 + 쿼리만 바꾸어 이동.
  const pushQuery = (q) => router.push(`?${q.toString()}`, { scroll: false })

  const toggleTag = (tag) => {
    const q = new URLSearchParams(params.toString())
    const all = q.getAll('tag')
    if (all.includes(tag)) {
      const left = all.filter((t) => t !== tag)
      q.delete('tag')
      left.forEach((t) => q.append('tag', t))
    } else {
      q.append('tag', tag)
    }
    pushQuery(q)
  }

  const setSort = (value) => {
    const q = new URLSearchParams(params.toString())
    q.set('sort', value)
    pushQuery(q)
  }

  const search = (value) => {
    const q = new URLSearchParams(params.toString())
    if (value) q.set('q', value)
    else q.delete('q')
    pushQuery(q)
  }

  return (
    <div className="mb-4 flex flex-wrap items-center gap-2">
      <div className="flex w-full overflow-x-auto pb-1 sm:w-auto">
        {tags.map((t) => (
          <TagChip
            key={t}
            label={t}
            selected={selectedTags.includes(t)}
            onClick={() => toggleTag(t)}
          />
        ))}
      </div>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="ml-auto rounded border border-gray-300 bg-white px-3 py-2 text-sm"
      >
        <option value="latest">최신순</option>
        <option value="popular">인기순</option>
      </select>

      <input
        defaultValue={params.get('q') || ''}
        onKeyDown={(e) => e.key === 'Enter' && search(e.currentTarget.value)}
        placeholder="검색"
        className="w-full rounded border border-gray-300 px-3 py-2 text-sm sm:w-64"
      />
    </div>
  )
}
