import ArticleCard from '@/components/cards/ArticleCard'

export default function ArticleGrid({ items = [] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item) => (
        <ArticleCard key={item._id || item.slug} {...item} />
      ))}
    </div>
  )
}
