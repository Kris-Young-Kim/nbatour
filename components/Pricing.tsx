'use client';

import { TOUR_INFO, INCLUDED_ITEMS, EXCLUDED_ITEMS } from '@/lib/constants';

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          가격 정보
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
          투어 비용 및 결제 안내
        </p>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-8 mb-8 text-white text-center shadow-xl">
            <p className="text-lg mb-2">투어 가격</p>
            <p className="text-5xl font-bold mb-4">₩{TOUR_INFO.price.toLocaleString()}</p>
            <p className="text-blue-100">6박 7일 전 일정 포함</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">계약금</h3>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                ₩{TOUR_INFO.deposit.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">선입금 원칙</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">잔금</h3>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                ₩{TOUR_INFO.finalPayment.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">출발 15일 전 결제</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                <svg
                  className="w-6 h-6 mr-2 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                포함 사항
              </h3>
              <ul className="space-y-2">
                {INCLUDED_ITEMS.map((item, index) => (
                  <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                    <svg
                      className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                <svg
                  className="w-6 h-6 mr-2 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                불포함 사항
              </h3>
              <ul className="space-y-2">
                {EXCLUDED_ITEMS.map((item, index) => (
                  <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                    <svg
                      className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors shadow-lg">
              투어 신청하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
