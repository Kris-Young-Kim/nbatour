'use client'

import { useState } from 'react'
import { TOUR_INFO } from '@/lib/constants'

export function Hero() {
  const [imageError, setImageError] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        {!imageError ? (
          <img
            src="/images/arena-hero-new.jpg"
            alt="NBA 경기장"
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-900 via-gray-900 to-black">
            {/* 플레이스홀더 패턴 */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`,
              }} />
            </div>
            {/* 농구공 아이콘 */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white/40">
                <svg className="w-32 h-32 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.09 11l1.86-1.86a1 1 0 0 0 0-1.41l-2.58-2.58a1 1 0 0 0-1.41 0L13.5 6.09 12.09 4.68a1 1 0 0 0-1.41 0L8.1 7.27a1 1 0 0 0 0 1.41L9.5 10.09l-1.4 1.4a1 1 0 0 0 0 1.41l2.58 2.58a1 1 0 0 0 1.41 0l1.4-1.4 1.41 1.41a1 1 0 0 0 1.41 0l2.58-2.58a1 1 0 0 0 0-1.41L17.09 11zm-5.66 2.83l-1.41-1.41-4.24 4.24a1 1 0 0 0 0 1.41l2.58 2.58a1 1 0 0 0 1.41 0l4.24-4.24-1.41-1.41zM4.83 13.41l4.24-4.24 1.41 1.41-4.24 4.24a1 1 0 0 1-1.41 0l-2.58-2.58a1 1 0 0 1 0-1.41l2.58-2.58a1 1 0 0 1 1.41 0z"/>
                </svg>
                <p className="text-xl font-semibold">NBA 직관투어 2026</p>
                <p className="text-sm mt-2">김맘바와 함께하는 특별한 경험</p>
              </div>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10" />
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-20 container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
          <span className="block">김맘바와 함께하는</span>
          <span className="block">NBA 직관투어 2026</span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-4 drop-shadow-md">
          {TOUR_INFO.description}
        </p>
        <p className="text-lg md:text-xl text-white/80 mb-8 drop-shadow-md">
          {TOUR_INFO.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('pricing')}
            className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all transform hover:scale-105 shadow-lg"
          >
            투어 신청하기
          </button>
          <button
            onClick={() => scrollToSection('itinerary')}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white text-lg font-semibold rounded-lg hover:bg-white/20 transition-all border-2 border-white/30"
          >
            일정 보기
          </button>
        </div>
        <div className="mt-12 text-white/90">
          <p className="text-lg md:text-xl mb-2">
            <span className="font-semibold">투어 기간:</span> {TOUR_INFO.dateDisplay} ({TOUR_INFO.duration})
          </p>
          <p className="text-lg md:text-xl">
            <span className="font-semibold">투어 가격:</span> ₩{TOUR_INFO.price.toLocaleString()}
          </p>
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

