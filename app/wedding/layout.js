export const metadata = {
  title: 'Wedding21 Magazine',
  description: '웨딩21 웹진',
}

export default function WeddingLayout({ children }) {
  return (
    <section>
      {/* <h1 className="mb-4 text-2xl font-bold">웨딩</h1>
      <nav className="mb-6 flex gap-3 text-sm">
        <a href="/wedding/hall">웨딩홀</a>
        <a href="/wedding/sdm">스드메</a>
        <a href="/wedding/items">아이템</a>
        <a href="/wedding/guide">가이드</a>
      </nav> */}
      {children} {/* 웨딩 오버뷰/하위 페이지가 여기로 */}
    </section>
  )
}
