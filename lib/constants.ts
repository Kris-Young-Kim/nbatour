// 투어 기본 정보
export const TOUR_INFO = {
  title: '김맘바와 함께하는 NBA 직관투어 2026',
  shortTitle: 'NBA 직관투어 2026',
  duration: '4박 5일',
  startDate: '2026-02-19',
  endDate: '2026-02-23',
  dateDisplay: '2026.02.19 ~ 2026.02.23',
  price: 6500000,
  deposit: 1000000,
  finalPayment: 5500000,
  description: '로스엔젤레스, 샌프란시스코에서 만나는 NBA의 모든 것',
  subtitle: 'NBA 유튜버 김맘바와 함께하는 농구 성지 순례',
};

// 경기 정보
export const GAMES = [
  {
    id: 1,
    teamA: 'LA Clippers',
    teamB: 'Denver Nuggets',
    teamAShort: 'Clippers',
    teamBShort: 'Nuggets',
    venue: 'Intuit Dome',
    city: 'Los Angeles',
    location: '로스엔젤레스',
    date: '2026-02-19',
    dateDisplay: '2월 19일(목)',
    mealAllowance: '호텔식',
    note: '빅매치!',
    logoA: '/images/clippers-logo.png',
    logoB: '/images/nuggets-logo.png',
    image: '/images/crypto-arena-game.jpg',
  },
  {
    id: 2,
    teamA: 'LA Lakers',
    teamB: 'LA Clippers',
    teamAShort: 'Lakers',
    teamBShort: 'Clippers',
    venue: 'Crypto Arena',
    city: 'Los Angeles',
    location: '로스엔젤레스',
    date: '2026-02-20',
    dateDisplay: '2월 20일(금)',
    mealAllowance: '호텔식',
    note: '빅매치!',
    logoA: '/images/lakers-logo.png',
    logoB: '/images/clippers-logo.png',
    image: '/images/crypto-arena-lakers-mavericks.jpg',
  },
  {
    id: 3,
    teamA: 'Golden State Warriors',
    teamB: 'Denver Nuggets',
    teamAShort: 'Warriors',
    teamBShort: 'Nuggets',
    venue: 'Chase Center',
    city: 'San Francisco',
    location: '샌프란시스코',
    date: '2026-02-22',
    dateDisplay: '2월 22일(일)',
    mealAllowance: '호텔식',
    note: '빅매치!',
    logoA: '/images/warriors-logo.png',
    logoB: '/images/nuggets-logo.png',
    image: '/images/chase-center-game.jpg',
  },
];

// FAQ 데이터
export const FAQ_DATA = [
  {
    id: 1,
    question: '환율 변동이 있는데, 가격이 올라가지는 않나요?',
    answer: '환율 영향이 있어도 전체 비용에선 1~20만원 정도의 차이이므로 650만원 동결입니다.',
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
];

// 포함사항
export const INCLUDED_ITEMS = [
  '전일정 호텔 (Best Western Plus Hotel / Embassy Suites Hotel by Hilton 또는 동급)',
  '차량 및 가이드',
  '전일정 식사 (호텔식)',
  'NBA 입장권',
  '기사님 & 가이드 팁',
];

// 불포함사항
export const EXCLUDED_ITEMS = ['각종 개인 경비'];

// 항공 정보
export const FLIGHT_INFO = {
  outbound: {
    airline: 'Asiana Airlines',
    flight: 'OZ212',
    date: '2026-02-19',
    departure: '인천 출발',
    arrival: 'LAX 공항 도착 08:00 AM (현지시간)',
    duration: '약 12시간',
  },
  return: {
    airline: 'Asiana Airlines',
    flight: 'OZ201',
    date: '2026-02-23',
    departure: 'SFO 공항 출발',
    arrival: '인천 공항 도착',
    duration: '약 13시간',
  },
};

// 호텔 정보
export const HOTEL_INFO = {
  name: 'Best Western Plus Hotel (로스엔젤레스) / Embassy Suites Hotel by Hilton (샌프란시스코) 또는 동급',
  quality: '3-4성급',
  meals: '호텔식 매일 제공',
  roomType: '2더블베드룸',
};
