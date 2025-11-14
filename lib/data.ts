// 7일 일정 데이터
export const ITINERARY = [
  {
    day: 1,
    date: '2026-02-07',
    dateDisplay: '2월 7일(토)',
    title: '로스앤젤레스 도착 & LA 투어 & Lakers vs Warriors',
    titleEn: 'Los Angeles Arrival & LA Tour & Lakers vs Warriors',
    location: 'Los Angeles',
    locationKo: '로스앤젤레스',
    activities: [
      'LAX 공항 도착 (06:50 AM)',
      '가이드 미팅',
      '산타모니카 비치 관광 (백사장, 국도 66번 종점)',
      '베버리힐스 등 관광',
      '한인타운 이동 중식',
      '호텔 도착 체크인 (13:30)',
      'Crypto Arena 이동 (15:00)',
      'NBA 경기 관람 (17:30)',
      'Los Angeles Lakers vs Golden State Warriors',
      '경기 관람 후 호텔 도착 휴식 (21:00)',
    ],
    mealInfo: '기내식, 중식, 석식',
    image: '/images/crypto-arena.jpg',
    gameInfo: {
      teams: 'Lakers vs Warriors',
      venue: 'Crypto Arena',
      date: '2026-02-07',
    },
    type: 'game',
  },
  {
    day: 2,
    date: '2026-02-08',
    dateDisplay: '2월 8일(일)',
    title: 'LA 투어',
    titleEn: 'LA Tour',
    location: 'Los Angeles',
    locationKo: '로스앤젤레스',
    activities: [
      '호텔 조식 (10:00)',
      'LA 관광 출발',
      '베니스 비치, 게티센터, 할리우드, 그리피스 천문대 등 관광',
      '석식 후 휴식 (19:00)',
    ],
    mealInfo: '호텔 조식, 자체 준비 (중식), 석식',
    image: '/images/los-angeles.jpg',
    type: 'sightseeing',
  },
  {
    day: 3,
    date: '2026-02-09',
    dateDisplay: '2월 9일(월)',
    title: 'LA 관광 & Lakers vs Thunder',
    titleEn: 'LA Tour & Lakers vs Thunder',
    location: 'Los Angeles',
    locationKo: '로스앤젤레스',
    activities: [
      '호텔 조식 (10:00)',
      'LA 관광 출발',
      'LA 다저스 경기장, 다운타운, 저팬타운, 레돈도 비치 등 관광',
      'Crypto Arena 이동 (17:00)',
      'NBA 경기 관람 (19:00)',
      'Los Angeles Lakers vs Oklahoma City Thunder',
      '경기 관람 후 호텔 도착 휴식 (22:00)',
    ],
    mealInfo: '호텔 조식, 자체 준비 (중식, 석식)',
    image: '/images/crypto-arena.jpg',
    gameInfo: {
      teams: 'Lakers vs Thunder',
      venue: 'Crypto Arena',
      date: '2026-02-09',
    },
    type: 'game',
  },
  {
    day: 4,
    date: '2026-02-10',
    dateDisplay: '2월 10일(화)',
    title: '아울렛 쇼핑 & Lakers vs Spurs',
    titleEn: 'Outlet Shopping & Lakers vs Spurs',
    location: 'Los Angeles',
    locationKo: '로스앤젤레스',
    activities: [
      '호텔 조식 (10:00)',
      '아울렛 쇼핑 출발',
      '쇼핑 후 Crypto Arena 이동 (17:00)',
      'NBA 경기 관람 (19:30)',
      'Los Angeles Lakers vs San Antonio Spurs',
      '경기 관람 후 호텔 도착 휴식 (22:30)',
    ],
    mealInfo: '호텔 조식, 자체 준비 (중식, 석식)',
    image: '/images/crypto-arena-lakers-spurs.jpg',
    gameInfo: {
      teams: 'Lakers vs Spurs',
      venue: 'Crypto Arena',
      date: '2026-02-10',
    },
    type: 'game',
  },
  {
    day: 5,
    date: '2026-02-11',
    dateDisplay: '2월 11일(수)',
    title: '샌프란시스코 이동 & Warriors vs Grizzlies',
    titleEn: 'San Francisco Depart & Warriors vs Grizzlies',
    location: 'San Francisco',
    locationKo: '샌프란시스코',
    activities: [
      '호텔 조식 (07:00)',
      '샌프란시스코 출발',
      '호텔 도착 체크인 (15:00)',
      'Golden State Warriors 홈구장 이동 (17:00)',
      'NBA 경기 관람 (19:00)',
      'Golden State Warriors vs Memphis Grizzlies',
      '경기 관람 후 호텔 도착 휴식 (22:00)',
    ],
    mealInfo: '호텔 조식, 자체 준비 (중식, 석식)',
    image: '/images/chase-center.jpg',
    gameInfo: {
      teams: 'Warriors vs Grizzlies',
      venue: 'Chase Center',
      date: '2026-02-11',
    },
    type: 'game',
  },
  {
    day: 6,
    date: '2026-02-12',
    dateDisplay: '2월 12일(목)',
    title: '샌프란시스코 관광',
    titleEn: 'San Francisco Tour',
    location: 'San Francisco',
    locationKo: '샌프란시스코',
    activities: [
      '샌프란시스코 공항 도착 (오전)',
      '가이드 미팅',
      '샌프란시스코 관광 출발',
      '금문교, 피셔맨스워프, 페리빌딩, 베이크루즈 유람선 등 관광',
      '베이크루즈 유람선 (1인 $40, 옵션)',
      '석식 후 호텔 이동 휴식 (19:00)',
    ],
    mealInfo: '호텔 조식, 자체 준비 (중식), 석식',
    image: '/images/san-francisco.jpg',
    type: 'sightseeing',
  },
  {
    day: 7,
    date: '2026-02-13',
    dateDisplay: '2월 13일(금)',
    title: '인천 귀국',
    titleEn: 'Incheon Depart',
    location: 'San Francisco',
    locationKo: '샌프란시스코',
    activities: [
      '호텔 조식 (07:30)',
      'SFO 공항 이동',
      '공항 도착 티켓팅 후 공항 탑승 수속',
      '인천 공항 출발',
    ],
    mealInfo: '호텔 조식, 기내식',
    image: '/images/istockphoto-1692389542-612x612.jpg',
    type: 'travel',
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

