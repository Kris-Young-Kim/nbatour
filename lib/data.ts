// 5일 일정 데이터
export const ITINERARY = [
  {
    day: 1,
    date: '2026-02-08',
    dateDisplay: '2월 8일(토)',
    title: '인천 → 샌프란시스코',
    titleEn: 'Incheon → San Francisco',
    location: 'San Francisco',
    locationKo: '샌프란시스코',
    activities: [
      '인천 국제공항 출발 (20:50)',
      '아시아나항공 OZ212 (약 11시간)',
      '샌프란시스코 도착 (14:00 현지시간)',
      '금문교, 피셔맨스워프 등 관광',
      '호텔 체크인 및 휴식',
    ],
    mealInfo: '기내식',
    image: '/images/san-francisco.jpg',
    type: 'travel',
  },
  {
    day: 2,
    date: '2026-02-09',
    dateDisplay: '2월 9일(일)',
    title: '샌프란시스코 - Warriors vs Grizzlies',
    titleEn: 'San Francisco - Warriors vs Grizzlies',
    location: 'San Francisco',
    locationKo: '샌프란시스코',
    activities: [
      '호텔 조식',
      '가이드 미팅',
      '스탠포드 대학, Google, Apple 등 방문',
      'Chase Center 경기장 이동',
      'Golden State Warriors vs Memphis Grizzlies 경기 관람',
      '석식비 $30 지급',
      '샌프란시스코 시내 관광',
      '호텔 투숙 및 휴식',
    ],
    mealInfo: '호텔 조식, 자체 준비 (중식), 경기장/자체 (석식 $30 지급)',
    image: '/images/chase-center.jpg',
    gameInfo: {
      teams: 'Warriors vs Grizzlies',
      venue: 'Chase Center',
      date: '2026-02-09',
    },
    type: 'game',
  },
  {
    day: 3,
    date: '2026-02-10',
    dateDisplay: '2월 10일(월)',
    title: '샌프란시스코 → LA - Lakers vs Spurs',
    titleEn: 'San Francisco → LA - Lakers vs Spurs',
    location: 'Los Angeles',
    locationKo: '로스앤젤레스',
    activities: [
      '호텔 조식',
      '가이드 미팅',
      '로스앤젤레스로 출발',
      'LA 도착 및 호텔 체크인',
      'Crypto Arena 이동',
      'Los Angeles Lakers vs San Antonio Spurs 경기 관람',
      '중식비 $20 지급',
      '호텔 투숙 및 휴식',
    ],
    mealInfo: '호텔 조식, 중식 $20 지급, 자체 준비 (석식)',
    image: '/images/crypto-arena.jpg',
    gameInfo: {
      teams: 'Lakers vs Spurs',
      venue: 'Crypto Arena',
      date: '2026-02-10',
    },
    type: 'game',
  },
  {
    day: 4,
    date: '2026-02-11',
    dateDisplay: '2월 11일(화)',
    title: 'LA - 관광 (산타모니카, 베니스, 할리우드)',
    titleEn: 'LA - Sightseeing',
    location: 'Los Angeles',
    locationKo: '로스앤젤레스',
    activities: [
      '호텔 조식',
      '가이드 미팅',
      '산타모니카 비치 (백사장, 국도 66번 종점)',
      '베니스 비치 (전위 예술가들의 마을)',
      '비벌리힐스, 로데오 거리',
      '할리우드 & 코비 벽화 투어',
      '호텔 투숙 및 휴식',
    ],
    mealInfo: '호텔 조식, 자체 준비 (중식, 석식)',
    image: '/images/los-angeles.jpg',
    type: 'sightseeing',
  },
  {
    day: 5,
    date: '2026-02-12',
    dateDisplay: '2월 12일(수)',
    title: 'LA - Lakers vs Mavericks & 귀국 준비',
    titleEn: 'LA - Lakers vs Mavericks',
    location: 'Los Angeles',
    locationKo: '로스앤젤레스',
    activities: [
      '호텔 조식',
      '가이드 미팅',
      'LA 다저스 경기장, 게티센터, 그리피스 천문대 등 관광',
      'Intuit Dome 견학',
      'Crypto Arena 이동',
      'Los Angeles Lakers vs Dallas Mavericks 경기 관람',
      '중식비 $20 지급',
      '호텔 투숙 및 휴식',
      '짐 정리 및 최종 준비',
    ],
    mealInfo: '호텔 조식, 중식 $20 지급, 자체 준비 (석식)',
    image: '/images/crypto-arena.jpg',
    gameInfo: {
      teams: 'Lakers vs Mavericks',
      venue: 'Crypto Arena',
      date: '2026-02-12',
    },
    type: 'game',
  },
]

// 타입 정의
export interface ItineraryDay {
  day: number
  date: string
  dateDisplay: string
  title: string
  titleEn: string
  location: string
  locationKo: string
  activities: string[]
  mealInfo: string
  image: string
  gameInfo?: {
    teams: string
    venue: string
    date: string
  }
  type: 'travel' | 'game' | 'sightseeing'
}

export interface Game {
  id: number
  teamA: string
  teamB: string
  teamAShort: string
  teamBShort: string
  venue: string
  city: string
  location: string
  date: string
  dateDisplay: string
  mealAllowance: string
  note: string
  logoA: string
  logoB: string
  image: string
}

