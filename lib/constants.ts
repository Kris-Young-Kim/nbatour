// 투어 기본 정보
export const TOUR_INFO = {
  title: '김맘바와 함께하는 NBA 직관투어 2026',
  shortTitle: 'NBA 직관투어 2026',
  duration: '5박 7일',
  startDate: '2026-02-08',
  endDate: '2026-02-13',
  dateDisplay: '2026.02.08 ~ 2026.02.13',
  price: 6800000,
  deposit: 2000000,
  finalPayment: 4800000,
  description: '샌프란시스코, LA에서 만나는 NBA의 모든 것',
  subtitle: 'NBA 유튜버 김맘바와 함께하는 농구 성지 순례',
}

// 경기 정보
export const GAMES = [
  {
    id: 1,
    teamA: 'Golden State Warriors',
    teamB: 'Memphis Grizzlies',
    teamAShort: 'Warriors',
    teamBShort: 'Grizzlies',
    venue: 'Chase Center',
    city: 'San Francisco',
    location: '샌프란시스코',
    date: '2026-02-09',
    dateDisplay: '2월 9일(일)',
    mealAllowance: '$30 (석식)',
    note: '빅매치!',
    logoA: '/images/warriors-logo.png',
    logoB: '/images/grizzlies-logo.png',
    image: '/images/chase-center-new.jpg',
  },
  {
    id: 2,
    teamA: 'Los Angeles Lakers',
    teamB: 'San Antonio Spurs',
    teamAShort: 'Lakers',
    teamBShort: 'Spurs',
    venue: 'Crypto Arena',
    city: 'Los Angeles',
    location: '로스앤젤레스',
    date: '2026-02-10',
    dateDisplay: '2월 10일(월)',
    mealAllowance: '$20 (중식), 자체 준비 (석식)',
    note: '빅매치!',
    logoA: '/images/lakers-logo.png',
    logoB: '/images/spurs-logo.png',
    image: '/images/crypto-arena-lakers-spurs.jpg',
  },
  {
    id: 3,
    teamA: 'Los Angeles Lakers',
    teamB: 'Dallas Mavericks',
    teamAShort: 'Lakers',
    teamBShort: 'Mavericks',
    venue: 'Crypto Arena',
    city: 'Los Angeles',
    location: '로스앤젤레스',
    date: '2026-02-12',
    dateDisplay: '2월 12일(수)',
    mealAllowance: '$20 (중식), 자체 준비 (석식)',
    note: '빅매치!',
    logoA: '/images/lakers-logo.png',
    logoB: '/images/mavericks-logo.png',
    image: '/images/crypto-arena-lakers-mavericks.jpg',
  },
]

// FAQ 데이터
export const FAQ_DATA = [
  {
    id: 1,
    question: '환율 변동이 있는데, 가격이 올라가지는 않나요?',
    answer:
      '환율 영향이 있어도 전체 비용에선 1~20만원 정도의 차이이므로 680만원 동결입니다.',
  },
  {
    id: 2,
    question: '미국 현지에서 합류 가능한가요?',
    answer:
      '항공료 제외 합류 가능하며, 항공료를 별도 정산하면 모든 일정(숙식, 경기비용)에 참여할 수 있습니다.',
  },
  {
    id: 3,
    question: '귀국 후 추가 체류가 가능한가요?',
    answer:
      '항공료 추가 또는 항공권 개별 구매 후 귀국일자를 조정할 수 있습니다.',
  },
  {
    id: 4,
    question: '입금 일정은 어떻게 되나요?',
    answer:
      '항공권 부킹 마감이 1월 초이므로 1월 중순까지 계약금 200만원을 선입금하고, 투어 확정 후 출발 1~2주 전에 나머지 500만원을 결제합니다.',
  },
  {
    id: 5,
    question: '현재 신청자는 몇 명인가요?',
    answer: '20명부터 출발이며, 현재 약 10명이 신청했습니다.',
  },
]

// 포함사항
export const INCLUDED_ITEMS = [
  '왕복항공료 (아시아나항공 OZ212 / OZ201)',
  '항공세, 인천공항세, 관광진흥개발기금, 전쟁보험료, 유류할증료',
  '전일정 숙박 (Holiday Inn & Suites Hotel 또는 동급)',
  '전일정 식사 & 입장료',
  '물 (1일 1병)',
  '경기 중식 $20, 석식 $30 지급 (경기가 있는 날)',
  '₩1억 여행자보험',
  '가이드 & 식당 팁',
  'Asiana Airlines 블록 예약 (쾌적한 좌석)',
  'Intuit Dome 견학',
  '농구 성지 및 코비 벽화 투어',
]

// 불포함사항
export const EXCLUDED_ITEMS = [
  '호텔 룸메이드팁 등 매너팁 (자율)',
  'ESTA 비용 ($21 - 개인부담)',
  'ESTA 비자 대행료 (₩50,000, 투어사 이용 시 선택)',
]

// 항공 정보
export const FLIGHT_INFO = {
  outbound: {
    airline: 'Asiana Airlines',
    flight: 'OZ212',
    date: '2026-02-08',
    departure: '인천 20:50',
    arrival: '샌프란시스코 14:00 (현지시간)',
    duration: '약 11시간',
  },
  return: {
    airline: 'Asiana Airlines',
    flight: 'OZ201',
    date: '2026-02-13',
    departure: 'LA 09:10',
    arrival: '인천 익일 15:45',
    duration: '약 13시간',
  },
}

// 호텔 정보
export const HOTEL_INFO = {
  name: 'Holiday Inn & Suites Hotel (또는 동급)',
  quality: '4성급',
  meals: '호텔 조식 매일 제공',
}

