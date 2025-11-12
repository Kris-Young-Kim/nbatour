'use client'

import { useState } from 'react'
import { ITINERARY } from '@/lib/data'

function ItineraryImage({ src, alt, location }: { src: string; alt: string; location: string }) {
  const [imageError, setImageError] = useState(false)

  if (imageError) {
    return (
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 to-gray-700 flex items-center justify-center rounded-lg">
        <div className="text-center text-white/80">
          <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <p className="text-sm font-medium">{location}</p>
        </div>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 w-full h-full object-cover"
      onError={() => setImageError(true)}
    />
  )
}

export function Itinerary() {
  const [openDay, setOpenDay] = useState<number | null>(1)

  const toggleDay = (day: number) => {
    setOpenDay(openDay === day ? null : day)
  }

  return (
    <section id="itinerary" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          투어 일정
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
          5박 7일의 특별한 NBA 직관투어
        </p>
        <div className="max-w-4xl mx-auto space-y-4">
          {ITINERARY.map((day) => (
            <div
              key={day.day}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <button
                onClick={() => toggleDay(day.day)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-expanded={openDay === day.day}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {day.day}
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {day.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {day.dateDisplay} · {day.locationKo}
                    </p>
                  </div>
                </div>
                <svg
                  className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform ${
                    openDay === day.day ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDay === day.day && (
                <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <ItineraryImage src={day.image} alt={day.title} location={day.locationKo} />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">주요 활동</h4>
                        <ul className="space-y-2">
                          {day.activities.map((activity, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                              <svg className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">식사 정보</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{day.mealInfo}</p>
                      </div>
                      {day.gameInfo && (
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-1">경기 정보</h4>
                          <p className="text-sm text-blue-700 dark:text-blue-400">
                            {day.gameInfo.teams} @ {day.gameInfo.venue}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

