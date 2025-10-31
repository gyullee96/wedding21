export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-2xl font-bold">페이지를 찾을 수 없습니다</h1>
      <p className="mt-2 text-gray-600">
        요청하신 기사가 존재하지 않거나 주소가 잘못되었습니다.
      </p>
      <a
        href="/"
        className="mt-6 inline-block rounded border px-4 py-2 text-sm"
      >
        홈으로 가기
      </a>
    </main>
  )
}
