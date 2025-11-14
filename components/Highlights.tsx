'use client';

const HIGHLIGHTS = [
  {
    id: 1,
    title: '농구 성지 순례',
    description: (
      <>
        NBA 유튜버 김맘바와 함께하는
        <br />
        특별한 농구 성지 투어
      </>
    ),
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: '4경기 NBA 직관',
    description: (
      <>
        Warriors, Lakers 등 빅매치
        <br />
        4경기를 직접 관람
      </>
    ),
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: '전 식사 프로그램',
    description: (
      <>
        호텔 조식, 경기장 식사비 지급 등<br />
        완벽한 식사 제공
      </>
    ),
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: '₩1억 여행자보험 + 호텔',
    description: (
      <>
        안전한 여행을 위한 보험과
        <br />
        4성급 호텔 숙박
      </>
    ),
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

export function Highlights() {
  return (
    <section id="highlights" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          투어 하이라이트
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
          특별한 경험을 제공하는 주요 장점
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {HIGHLIGHTS.map((highlight) => (
            <div
              key={highlight.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="flex justify-center mb-4 text-blue-600 dark:text-blue-400">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {highlight.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
