# lib/constants.ts & lib/data.ts - 투어 정보 & 상수 (2026년 최종)

## constants.ts 전체 코드

```typescript
// 투어 기본 정보
export const TOUR_INFO = {
  title: "김맘바와 함께하는 NBA 직관투어 2026",
  shortTitle: "NBA 직관투어 2026",
  duration: "5박 7일",
  startDate: "2026-02-08",
  endDate: "2026-02-13",
  dateDisplay: "2026.02.08 ~ 2026.02.13",
  price: 6800000,
  deposit: 2000000,
  finalPayment: 4800000,
  description: "샌프란시스코, LA에서 만나는 NBA의 모든 것",
  subtitle: "NBA 유튜버 김맘바와 함께하는 농구 성지 순례",
}

// 경기 정보
export const GAMES = [
  {
    id: 1,
    teamA: "Golden State Warriors",
    teamB: "Memphis Grizzlies",
    teamAShort: "Warriors",
    teamBShort: "Grizzlies",
    venue: "Chase Center",
    city: "San Francisco",
    location: "샌프란시스코",
    date: "2026-02-09",
    dateDisplay: "2월 9일(일)",
    mealAllowance: "$30 (석식)",
    note: "빅매치!",
    logoA: "/images/warriors-logo.png",
    logoB: "/images/grizzlies-logo.png",
    image: "/images/chase-center.jpg",
  },
  {
    id: 2,
    teamA: "Los Angeles Lakers",
    teamB: "San Antonio Spurs",
    teamAShort: "Lakers",
    teamBShort: "Spurs",
    venue: "Crypto Arena",
    city: "Los Angeles",
    location: "로스앤젤레스",
    date: "2026-02-10",
    dateDisplay: "2월 10일(월)",
    mealAllowance: "$20 (중식), 자체 준비 (석식)",
    note: "빅매치!",
    logoA: "/images/lakers-logo.png",
    logoB: "/images/spurs-logo.png",
    image: "/images/crypto-arena.jpg",
  },
  {
    id: 3,
    teamA: "Los Angeles Lakers",
    teamB: "Dallas Mavericks",
    teamAShort: "Lakers",
    teamBShort: "Mavericks",
    venue: "Crypto Arena",
    city: "Los Angeles",
    location: "로스앤젤레스",
    date: "2026-02-12",
    dateDisplay: "2월 12일(수)",
    mealAllowance: "$20 (중식), 자체 준비 (석식)",
    note: "빅매치!",
    logoA: "/images/lakers-logo.png",
    logoB: "/images/mavericks-logo.png",
    image: "/images/crypto-arena.jpg",
  },
]

// FAQ 데이터
export const FAQ_DATA = [
  {
    id: 1,
    question: "환율 변동이 있는데, 가격이 올라가지는 않나요?",
    answer: "환율 영향이 있어도 전체 비용에선 1~20만원 정도의 차이이므로 680만원 동결입니다.",
  },
  {
    id: 2,
    question: "미국 현지에서 합류 가능한가요?",
    answer: "항공료 제외 합류 가능하며, 항공료를 별도 정산하면 모든 일정(숙식, 경기비용)에 참여할 수 있습니다.",
  },
  {
    id: 3,
    question: "귀국 후 추가 체류가 가능한가요?",
    answer: "항공료 추가 또는 항공권 개별 구매 후 귀국일자를 조정할 수 있습니다.",
  },
  {
    id: 4,
    question: "입금 일정은 어떻게 되나요?",
    answer: "항공권 부킹 마감이 1월 초이므로 1월 중순까지 계약금 200만원을 선입금하고, 투어 확정 후 출발 1~2주 전에 나머지 500만원을 결제합니다.",
  },
  {
    id: 5,
    question: "현재 신청자는 몇 명인가요?",
    answer: "20명부터 출발이며, 현재 약 10명이 신청했습니다.",
  },
]

// 포함사항
export const INCLUDED_ITEMS = [
  "왕복항공료 (아시아나항공 OZ212 / OZ201)",
  "항공세, 인천공항세, 관광진흥개발기금, 전쟁보험료, 유류할증료",
  "전일정 숙박 (Holiday Inn & Suites Hotel 또는 동급)",
  "전일정 식사 & 입장료",
  "물 (1일 1병)",
  "경기 중식 $20, 석식 $30 지급 (경기가 있는 날)",
  "₩1억 여행자보험",
  "가이드 & 식당 팁",
  "Asiana Airlines 블록 예약 (쾌적한 좌석)",
  "Intuit Dome 견학",
  "농구 성지 및 코비 벽화 투어",
]

// 불포함사항
export const EXCLUDED_ITEMS = [
  "호텔 룸메이드팁 등 매너팁 (자율)",
  "ESTA 비용 ($21 - 개인부담)",
  "ESTA 비자 대행료 (₩50,000, 투어사 이용 시 선택)",
]

// 항공 정보
export const FLIGHT_INFO = {
  outbound: {
    airline: "Asiana Airlines",
    flight: "OZ212",
    date: "2026-02-08",
    departure: "인천 20:50",
    arrival: "샌프란시스코 14:00 (현지시간)",
    duration: "약 11시간",
  },
  return: {
    airline: "Asiana Airlines",
    flight: "OZ201",
    date: "2026-02-13",
    departure: "LA 09:10",
    arrival: "인천 익일 15:45",
    duration: "약 13시간",
  },
}

// 호텔 정보
export const HOTEL_INFO = {
  name: "Holiday Inn & Suites Hotel (또는 동급)",
  quality: "4성급",
  meals: "호텔 조식 매일 제공",
}
```

---

## lib/data.ts - 5일 일정 데이터 (2026년)

```typescript
// 5일 일정 데이터
export const ITINERARY = [
  {
    day: 1,
    date: "2026-02-08",
    dateDisplay: "2월 8일(토)",
    title: "인천 → 샌프란시스코",
    titleEn: "Incheon → San Francisco",
    location: "San Francisco",
    locationKo: "샌프란시스코",
    activities: [
      "인천 국제공항 출발 (20:50)",
      "아시아나항공 OZ212 (약 11시간)",
      "샌프란시스코 도착 (14:00 현지시간)",
      "금문교, 피셔맨스워프 등 관광",
      "호텔 체크인 및 휴식",
    ],
    mealInfo: "기내식",
    image: "/images/san-francisco.jpg",
    type: "travel",
  },
  {
    day: 2,
    date: "2026-02-09",
    dateDisplay: "2월 9일(일)",
    title: "샌프란시스코 - Warriors vs Grizzlies",
    titleEn: "San Francisco - Warriors vs Grizzlies",
    location: "San Francisco",
    locationKo: "샌프란시스코",
    activities: [
      "호텔 조식",
      "가이드 미팅",
      "스탠포드 대학, Google, Apple 등 방문",
      "Chase Center 경기장 이동",
      "Golden State Warriors vs Memphis Grizzlies 경기 관람",
      "석식비 $30 지급",
      "샌프란시스코 시내 관광",
      "호텔 투숙 및 휴식",
    ],
    mealInfo: "호텔 조식, 자체 준비 (중식), 경기장/자체 (석식 $30 지급)",
    image: "/images/chase-center.jpg",
    gameInfo: {
      teams: "Warriors vs Grizzlies",
      venue: "Chase Center",
      date: "2026-02-09",
    },
    type: "game",
  },
  {
    day: 3,
    date: "2026-02-10",
    dateDisplay: "2월 10일(월)",
    title: "샌프란시스코 → LA - Lakers vs Spurs",
    titleEn: "San Francisco → LA - Lakers vs Spurs",
    location: "Los Angeles",
    locationKo: "로스앤젤레스",
    activities: [
      "호텔 조식",
      "가이드 미팅",
      "로스앤젤레스로 출발",
      "LA 도착 및 호텔 체크인",
      "Crypto Arena 이동",
      "Los Angeles Lakers vs San Antonio Spurs 경기 관람",
      "중식비 $20 지급",
      "호텔 투숙 및 휴식",
    ],
    mealInfo: "호텔 조식, 중식 $20 지급, 자체 준비 (석식)",
    image: "/images/crypto-arena.jpg",
    gameInfo: {
      teams: "Lakers vs Spurs",
      venue: "Crypto Arena",
      date: "2026-02-10",
    },
    type: "game",
  },
  {
    day: 4,
    date: "2026-02-11",
    dateDisplay: "2월 11일(화)",
    title: "LA - 관광 (산타모니카, 베니스, 할리우드)",
    titleEn: "LA - Sightseeing",
    location: "Los Angeles",
    locationKo: "로스앤젤레스",
    activities: [
      "호텔 조식",
      "가이드 미팅",
      "산타모니카 비치 (백사장, 국도 66번 종점)",
      "베니스 비치 (전위 예술가들의 마을)",
      "비벌리힐스, 로데오 거리",
      "할리우드 & 코비 벽화 투어",
      "호텔 투숙 및 휴식",
    ],
    mealInfo: "호텔 조식, 자체 준비 (중식, 석식)",
    image: "/images/los-angeles.jpg",
    type: "sightseeing",
  },
  {
    day: 5,
    date: "2026-02-12",
    dateDisplay: "2월 12일(수)",
    title: "LA - Lakers vs Mavericks & 귀국 준비",
    titleEn: "LA - Lakers vs Mavericks",
    location: "Los Angeles",
    locationKo: "로스앤젤레스",
    activities: [
      "호텔 조식",
      "가이드 미팅",
      "LA 다저스 경기장, 게티센터, 그리피스 천문대 등 관광",
      "Intuit Dome 견학",
      "Crypto Arena 이동",
      "Los Angeles Lakers vs Dallas Mavericks 경기 관람",
      "중식비 $20 지급",
      "호텔 투숙 및 휴식",
      "짐 정리 및 최종 준비",
    ],
    mealInfo: "호텔 조식, 중식 $20 지급, 자체 준비 (석식)",
    image: "/images/crypto-arena.jpg",
    gameInfo: {
      teams: "Lakers vs Mavericks",
      venue: "Crypto Arena",
      date: "2026-02-12",
    },
    type: "game",
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
  type: "travel" | "game" | "sightseeing"
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
```