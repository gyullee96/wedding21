import HeroCarousel from '@/components/HeroCarousel'

export default function Home() {
  const slides = [
    {
      id: 's1',
      title: '불가리 장원영',
      subtitle: '장원영 불가리 홍보대사 발탁',
      image: { src: '/images/hero/bulgari.jpg', alt: '불가리' },
    },
    {
      id: 's2',
      title: '서울패션위크',
      subtitle: '서울패션위크 개최',
      image: { src: '/images/hero/seoulfashionweek.jpg', alt: '서울패션위크' },
    },
    {
      id: 's3',
      title: '호텔',
      subtitle: '호텔 숙박',
      image: { src: '/images/hero/hotel.jpg', alt: '호텔' },
    },
    {
      id: 's4',
      title: '허니문',
      subtitle: '허니문 여행지',
      image: { src: '/images/hero/honey.jpg', alt: '허니문' },
    },
    {
      id: 's5',
      title: '향수',
      subtitle: '겐조 향수',
      image: { src: '/images/hero/perfume.jpg', alt: '향수' },
    },
  ]
  return (
    <div className="py-10">
      <HeroCarousel slides={slides} autoPlayMs={5000} />
      {/* 캐러셀 아래에 다른 섹션 추가 */}
      <h1 className="text-3xl font-bold">wedding21 메인 페이지</h1>
      <p className="mt-4 text-gray-600">
        여기로 앞으로 섹션을 하나씩 추가합니다.
      </p>
    </div>
  )
}
