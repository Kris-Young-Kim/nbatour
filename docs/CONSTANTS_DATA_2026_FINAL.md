# lib/constants.ts & lib/data.ts - 투어 정보 & 상수 (2026년 최종)

## constants.ts 전체 코드

```typescript
// 투어 기본 정보
export const TOUR_INFO = {
  title: '김맘바와 함께하는 NBA 직관투어 2026',
  shortTitle: 'NBA 직관투어 2026',
  duration: '6박 7일',
  startDate: '2026-02-07',
  endDate: '2026-02-13',
  dateDisplay: '2026.02.07 ~ 2026.02.13',
  price: 7300000,
  deposit: 1000000,
  finalPayment: 6300000,
  description: '로스앤젤레스, 샌프란시스코에서 만나는 NBA의 모든 것',
  subtitle: 'NBA 유튜버 김맘바와 함께하는 농구 성지 순례',
};

// 경기 정보
export const GAMES = [
  {
    id: 1,
    teamA: 'Los Angeles Lakers',
    teamB: 'Golden State Warriors',
    teamAShort: 'Lakers',
    teamBShort: 'Warriors',
    venue: 'Crypto Arena',
    city: 'Los Angeles',
    location: '로스앤젤레스',
    date: '2026-02-07',
    dateDisplay: '2월 7일(토)',
    mealAllowance: '자체 준비 (중식, 석식)',
    note: '빅매치!',
    logoA: '/images/lakers-logo.png',
    logoB: '/images/warriors-logo.png',
    image: '/images/crypto-arena-game.jpg',
  },
  {
    id: 2,
    teamA: 'Los Angeles Lakers',
    teamB: 'Oklahoma City Thunder',
    teamAShort: 'Lakers',
    teamBShort: 'Thunder',
    venue: 'Crypto Arena',
    city: 'Los Angeles',
    location: '로스앤젤레스',
    date: '2026-02-09',
    dateDisplay: '2월 9일(월)',
    mealAllowance: '자체 준비 (중식, 석식)',
    note: '빅매치!',
    logoA: '/images/lakers-logo.png',
    logoB: '/images/thunder-logo.png',
    image: '/images/crypto-arena-game.jpg',
  },
  {
    id: 3,
    teamA: 'Los Angeles Lakers',
    teamB: 'San Antonio Spurs',
    teamAShort: 'Lakers',
    teamBShort: 'Spurs',
    venue: 'Crypto Arena',
    city: 'Los Angeles',
    location: '로스앤젤레스',
    date: '2026-02-10',
    dateDisplay: '2월 10일(화)',
    mealAllowance: '자체 준비 (중식, 석식)',
    note: '빅매치!',
    logoA: '/images/lakers-logo.png',
    logoB: '/images/spurs-logo.png',
    image: '/images/crypto-arena-lakers-spurs.jpg',
  },
  {
    id: 4,
    teamA: 'Golden State Warriors',
    teamB: 'Memphis Grizzlies',
    teamAShort: 'Warriors',
    teamBShort: 'Grizzlies',
    venue: 'Chase Center',
    city: 'San Francisco',
    location: '샌프란시스코',
    date: '2026-02-11',
    dateDisplay: '2월 11일(수)',
    mealAllowance: '자체 준비 (중식, 석식)',
    note: '빅매치!',
    logoA: '/images/warriors-logo.png',
    logoB: '/images/grizzlies-logo.png',
    image: '/images/chase-center-game.jpg',
  },
];

// FAQ 데이터
export const FAQ_DATA = [
  {
    id: 1,
    question: '환율 변동이 있는데, 가격이 올라가지는 않나요?',
    answer: '환율 영향이 있어도 전체 비용에선 1~20만원 정도의 차이이므로 730만원 동결입니다.',
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
    answer: '항공료 추가 또는 항공권 개별 구매 후 귀국일자를 조정할 수 있습니다.',
  },
  {
    id: 4,
    question: '입금 일정은 어떻게 되나요?',
    answer:
      '항공권 부킹 마감이 1월 초이므로 12월 중순까지 계약금 100만원을 선입금하고, 투어 확정 후 출발 15일 전에 나머지 630만원을 결제합니다.',
  },
  {
    id: 5,
    question: '현재 신청자는 몇 명인가요?',
    answer: '20명부터 출발이며, 현재 약 10명이 신청했습니다.',
  },
];

// 포함사항
export const INCLUDED_ITEMS = [
  '전일정 호텔 (Best Western Plus Hotel / Bay Landing Hotel San Francisco 또는 동급)',
  '차량 및 가이드',
  '전일정 식사',
  '기사님 & 가이드 팁',
];

// 불포함사항
export const EXCLUDED_ITEMS = ['NBA 입장권 등 각종 입장료'];

// 항공 정보
export const FLIGHT_INFO = {
  outbound: {
    airline: 'Asiana Airlines',
    flight: 'OZ212',
    date: '2026-02-07',
    departure: '인천 출발',
    arrival: 'LAX 공항 도착 06:50 AM (현지시간)',
    duration: '약 12시간',
  },
  return: {
    airline: 'Asiana Airlines',
    flight: 'OZ201',
    date: '2026-02-13',
    departure: 'SFO 공항 출발',
    arrival: '인천 공항 도착',
    duration: '약 13시간',
  },
};

// 호텔 정보
export const HOTEL_INFO = {
  name: 'Best Western Plus Hotel (로스앤젤레스) / Bay Landing Hotel San Francisco (샌프란시스코) 또는 동급',
  quality: '3-4성급',
  meals: '호텔 조식 매일 제공',
  roomType: '2더블베드룸',
};
```

---

## lib/data.ts - 7일 일정 데이터 (2026년)

```typescript
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
    image: '/images/istockphoto-1692389542-612x612.jpg',
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
    image: '/images/los-angeles-tour.jpg',
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
    image: '/images/crypto-arena-game.jpg',
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
      'Intuit Dome 견학',
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
    image: '/images/chase-center-game.jpg',
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
    image: '/images/san-francisco-tour.jpg',
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
];

// 타입 정의
export interface ItineraryDay {
  day: number;
  date: string;
  dateDisplay: string;
  title: string;
  titleEn: string;
  location: string;
  locationKo: string;
  activities: string[];
  mealInfo: string;
  image: string;
  gameInfo?: {
    teams: string;
    venue: string;
    date: string;
  };
  type: 'travel' | 'game' | 'sightseeing';
}

export interface Game {
  id: number;
  teamA: string;
  teamB: string;
  teamAShort: string;
  teamBShort: string;
  venue: string;
  city: string;
  location: string;
  date: string;
  dateDisplay: string;
  mealAllowance: string;
  note: string;
  logoA: string;
  logoB: string;
  image: string;
}
```
