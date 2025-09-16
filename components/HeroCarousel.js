'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function HeroCarousel({ slides, autoPlayMs = 5000 }) {
  const viewportRef = useRef(null)
  const [active, setActive] = useState(0)
  const timerRef = useRef(null)

  // 현재 보이는 슬라이드 감지
  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const items = Array.from(viewport.querySelectorAll('[data-slide-idx]'))
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) {
          const idx = Number(visible.target.dataset.slideIdx || 0)
          setActive(idx)
        }
      },
      { root: viewport, threshold: [0.6] },
    )
    items.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!autoPlayMs) return
    stopAuto()
    timerRef.current = setInterval(() => {
      goTo((active + 1) % slides.length)
    }, autoPlayMs)
    return stopAuto
  }, [active, autoPlayMs, slides.length])

  function stopAuto() {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  function goTo(idx) {
    const viewport = viewportRef.current
    const target = viewport?.querySelector(`[data-slide-idx="${idx}"]`)
    target?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    })
  }
  function prev() {
    stopAuto()
    goTo((active - 1 + slides.length) % slides.length)
  }
  function next() {
    stopAuto()
    goTo((active + 1) % slides.length)
  }

  return (
    <section aria-label="메인 프로모션 캐러셀" className="relative">
      {/* 뷰포트 */}
      <div
        ref={viewportRef}
        className="no-scrollbar relative mx-auto h-[280px] w-full max-w-4xl snap-x snap-mandatory overflow-x-auto scroll-smooth"
      >
        {/* 가로 트랙 */}
        <div className="flex">
          {slides.map((s, i) => (
            <article
              key={s.id}
              data-slide-idx={i}
              className="relative h-full min-w-full flex-none snap-start"
              aria-roledescription="slide"
              aria-label={`${i + 1} / ${slides.length}`}
            >
              <Image
                src={s.image.src}
                alt={s.image.alt}
                fill
                priority={i === 0}
                className="rounded-xl object-cover object-center"
                sizes="100vw"
              />

              {(s.title || s.subtitle) && (
                <div className="absolute inset-0 bg-black/20">
                  <div className="mx-auto flex h-full max-w-6xl items-end px-4 pb-8">
                    <div className="text-white drop-shadow">
                      {s.title && (
                        <h2 className="text-2xl font-bold md:text-4xl">
                          {s.title}
                        </h2>
                      )}
                      {s.subtitle && (
                        <p className="mt-2 text-sm opacity-90 md:text-base">
                          {s.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {s.href && (
                <a
                  href={s.href}
                  className="absolute inset-0"
                  aria-label={s.title ?? '자세히 보기'}
                />
              )}
            </article>
          ))}
        </div>
      </div>

      {/* 좌우 버튼 */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
        <button
          aria-label="이전 슬라이드"
          onClick={prev}
          className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-white/80 p-2 shadow hover:bg-white"
        >
          ‹
        </button>
        <button
          aria-label="다음 슬라이드"
          onClick={next}
          className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-white/80 p-2 shadow hover:bg-white"
        >
          ›
        </button>
      </div>

      {/* 점 네비게이션 */}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`${i + 1}번째 슬라이드로 이동`}
            onClick={() => {
              stopAuto()
              goTo(i)
            }}
            className={[
              'h-2 w-2 rounded-full transition-all',
              active === i
                ? 'scale-110 bg-white ring-2 ring-white/60'
                : 'bg-white/60 hover:bg-white',
            ].join(' ')}
          />
        ))}
      </div>
    </section>
  )
}
