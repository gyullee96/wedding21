'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

const slides = [
  {
    src: '/images/hero/issue10.png',
    alt: 'issue10',
    title: '웨딩21 9월호',
    desc: '9월호를 장식한 표지 사진은?',
  },
  {
    src: '/images/hero/rium1.jpg',
    alt: 'rium1',
    title: '청리움 데스티네이션 웨딩',
    desc: '청리움이 제안하는 한국에서 가능한 유럽풍 웨딩',
  },
  { src: '/images/hero/honeymoon.jpg', alt: 'honeymoon' },
]

const Carousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map(({ src, alt, title, desc }, i) => (
        <SwiperSlide key={src}>
          <div className="relative mx-auto aspect-[4/3] w-full max-w-6xl overflow-hidden rounded-xl md:aspect-[3/2]">
            {/* 이미지 */}
            <Image
              src={src}
              alt={alt}
              width={600}
              height={300}
              className="h-auto w-full object-cover"
              priority={i === 0}
            />

            {/* 텍스트 오버레이 */}
            <div className="absolute inset-0 flex items-end justify-center">
              <div className="p-6 text-white">
                <h2 className="mb-2 text-5xl font-bold">{title}</h2>
                <p className="mb-4 text-lg">{desc}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel
