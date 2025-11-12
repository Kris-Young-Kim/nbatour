'use client'

import { TOUR_INFO } from '@/lib/constants'

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{TOUR_INFO.shortTitle}</h3>
            <p className="text-gray-400 mb-2">{TOUR_INFO.description}</p>
            <p className="text-gray-400">
              투어 기간: {TOUR_INFO.dateDisplay}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">빠른 링크</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('games')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  경기 일정
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('itinerary')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  투어 일정
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  가격 정보
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">연락처</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <p className="font-semibold text-white">민투어(국내외여행업)</p>
              <p>등록번호: 146-02-02477</p>
              <p>주소: 강원특별자치도 원주시 서원대로 172, 3층(단계동)</p>
              <p>전화: 033-742-8053, 010-4766-8053</p>
              <p>대표: 김민규</p>
              <p>카카오톡: mintour</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 {TOUR_INFO.shortTitle}. All rights reserved.</p>
          <p className="mt-2 text-sm">민투어 제공</p>
        </div>
      </div>
    </footer>
  )
}

