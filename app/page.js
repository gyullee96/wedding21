import HeroCarousel from '@/components/HeroCarousel'
import Image from 'next/image'

export default function Home() {
  const slides = [
    { src: '/images/hero/soft1.png', alt: 'soft1' },
    { src: '/images/hero/pium.png', alt: 'pium' },
    { src: '/images/hero/soft2.png', alt: 'soft2' },
    { src: '/images/hero/gd.png', alt: 'gd' },
    { src: '/images/hero/rihihod.png', alt: 'rihihod' },
    { src: '/images/hero/baekjak.png', alt: 'baekjak' },
  ]
  return (
    <div className="px-180 pt-5 pb-10">
      <HeroCarousel slides={slides} autoPlayMs={5000} />
      {/* 캐러셀 아래에 다른 섹션 추가 */}

      {/* 1번째 */}
      <div>
        <div className="flex w-full items-center justify-between px-2 pt-20 pb-3">
          <div className="text-3xl font-bold">Wedding</div>
          <div className="text-xl">더보기</div>
        </div>
        <div className="grid grid-cols-4 grid-rows-2 gap-6">
          {/* 1번 칸 */}
          <div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
              <Image
                src="/images/hero/soft1.png"
                alt="sub1"
                fill
                className="object-cover"
              />
            </div>
            <div className="pt-3 text-xl font-semibold">
              소피텔 서울 2026 웨딩 LEclat Bleu 공개
            </div>
          </div>

          {/* 2,3,6,7 합쳐진 메인 이미지 */}

          <div className="relative col-span-2 row-span-2 overflow-hidden rounded-xl">
            <Image
              src="/images/hero/lihihod.png"
              alt="main"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-end justify-center">
              <div className="p-6 text-white">
                <h2 className="mb-5 text-5xl font-bold">
                  현대적인 우아함 리히호드
                </h2>
                <p className="mb-15 text-xl">웨딩21 8월호 표지장식</p>
              </div>
            </div>
          </div>

          {/* 4번 칸 */}
          <div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
              <Image
                src="/images/hero/pium.png"
                alt="sub4"
                fill
                className="object-cover"
              />
            </div>
            <div className="pt-3 text-xl font-semibold">
              서울시 대표 웨딩홀 1호 '피움 서울' 7월 1일 문 연다
            </div>
          </div>
          {/* 5번 칸 */}
          <div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
              <Image
                src="/images/hero/baekjak.png"
                alt="sub5"
                fill
                className="object-cover"
              />
            </div>
            <div className="pt-3 text-xl font-semibold">
              사랑하는 이들을 위한 선택, 백작피렌체
            </div>
          </div>

          {/* 8번 칸 */}
          <div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
              <Image
                src="/images/hero/gd.png"
                alt="sub8"
                fill
                className="object-cover"
              />
            </div>
            <div className="pt-3 text-xl font-semibold">
              빌라드지디 안양 웨딩홀, 내년 1월 화려한 오픈 예고
            </div>
          </div>
        </div>
      </div>

      {/* 2번째 */}
      <div>
        <div className="flex w-full items-center justify-between px-2 pt-20 pb-3">
          <div className="text-3xl font-bold">Wedding</div>
          <div className="text-xl">더보기</div>
        </div>
        <div className="grid grid-cols-4 gap-x-4">
          {slides.slice(0, 4).map(({ src, alt }, i) => (
            <div
              key={src}
              className="relative aspect-[3/4] w-65 overflow-hidden rounded-xl"
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 3번째 */}
      <div>
        <div className="flex w-full items-center justify-between px-2 pt-30 pb-3">
          <div className="text-3xl font-bold">Trend</div>
          <div className="text-xl">더보기</div>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center">
            <div className="relative items-center justify-center">
              <Image
                src="/images/hero/bulgari.jpg"
                alt="bulgari"
                width={500}
                height={1000}
                className="object-cotain"
              />
              <div className="flex-1">
                <h2 className="pt-5 text-4xl font-bold">
                  불가리, 뉴 앰버서더 장원영 공개 !
                </h2>
              </div>
            </div>
          </div>
          <div className="pl-10">
            <div className="flex justify-center pb-5">
              <Image
                src="/images/hero/bulgari.jpg"
                alt="bulgari"
                width={170}
                height={450}
                className="object-cotain"
              />
              <div className="flex-1 pl-5">
                <h3 className="text-2xl font-bold">기사제목</h3>
                <p className="max-w-sm text-base text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias nesciunt deleniti delectus beatae, porro corporis?
                  Culpa provident qui ad cumque dolores, sed amet voluptas id
                  doloremque aut accusamus praesentium molestiae.
                </p>
              </div>
            </div>
            <div className="flex justify-center pb-5">
              <Image
                src="/images/hero/bulgari.jpg"
                alt="bulgari"
                width={170}
                height={450}
                className="object-cotain"
              />
              <div className="flex-1 pl-5">
                <h3 className="text-2xl font-bold">기사제목</h3>
                <p className="max-w-sm text-base text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio, blanditiis? Eius doloremque optio recusandae
                  maxime maiores sapiente? Eius non autem perferendis omnis
                  quidem repudiandae eaque ipsa voluptatibus necessitatibus!
                  Quos, voluptas.
                </p>
              </div>
            </div>
            <div className="flex justify-center pb-5">
              <Image
                src="/images/hero/bulgari.jpg"
                alt="bulgari"
                width={170}
                height={450}
                className="object-cotain"
              />
              <div className="flex-1 pl-5">
                <h3 className="text-2xl font-bold">기사제목</h3>
                <p className="max-w-sm text-base text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus excepturi, voluptas atque rerum maiores, vel
                  temporibus accusantium repudiandae blanditiis, quas a aut
                  saepe error veritatis sed eius ratione! Nulla, sint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 팔로우랩 */}
      <div className="my-30 w-full bg-pink-100 py-10">
        <div className="flex items-center justify-between px-30">
          <Image
            src="/images/hero/wedding21_logo.png"
            alt="logo"
            width={180}
            height={60}
            className="object-cover"
          />
          <div>실시간으로 업데이트 되는 웨딩21의 최신소식</div>
          <button className="bg-white p-5">팔로우하기 +</button>
        </div>
      </div>
    </div>
  )
}
