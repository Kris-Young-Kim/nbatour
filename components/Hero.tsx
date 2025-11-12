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
            src="/images/arena-hero.jpg"
            alt="NBA 경기장"
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-900 via-gray-900 to-black flex items-center justify-center">
            <div className="text-center text-white/50">
              <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-lg">NBA 경기장 이미지</p>
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

