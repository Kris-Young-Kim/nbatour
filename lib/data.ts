// 5일 일정 데이터
export const ITINERARY = [
  {
    day: 1,
    date: '2026-02-19',
    dateDisplay: '2월 19일(목)',
    title: '로스엔젤레스 도착 & LA 투어 & Clippers vs Nuggets',
    titleEn: 'Los Angeles Arrival & LA Tour & Clippers vs Nuggets',
    location: 'Los Angeles',
    locationKo: '로스엔젤레스',
    activities: [
      'LAX 공항 도착 (08:00)',
      '가이드 미팅 후 LA 관광 출발',
      '산타모니카 비치 (백사장, 국도 66번 종점 지역)',
      '베니스 비치 (젊은 전위 예술가들의 마을)',
      '베버리힐스, 로데오거리 (유명 연예인들과 부자 마을)',
      '할리우드 (전세계 영화산업의 메카)',
      '호텔 이동 체크인',
      'LA Clippers 홈구장 이동 (17:00)',
      'NBA 경기 관람 (19:30)',
      'LA Clippers vs Denver Nuggets',
      '경기 관람 후 호텔 도착 휴식 (22:00)',
    ],
    mealInfo: '호텔식',
    image: '/images/istockphoto-1692389542-612x612.jpg',
    gameInfo: {
      teams: 'Clippers vs Nuggets',
      venue: 'Intuit Dome',
      date: '2026-02-19',
    },
    type: 'game',
  },
  {
    day: 2,
    date: '2026-02-20',
    dateDisplay: '2월 20일(금)',
    title: 'LA 투어 & Lakers vs Clippers',
    titleEn: 'LA Tour & Lakers vs Clippers',
    location: 'Los Angeles',
    locationKo: '로스엔젤레스',
    activities: [
      '조식 후 LA 관광 출발 (10:00)',
      'LA 다저스 경기장, 게티센터, 그리피스 천문대 등 관광',
      '(아울렛 쇼핑으로 대체 가능)',
      'LA Lakers 홈구장 Crypto Arena 이동 (17:00)',
      'NBA 경기 관람 (19:00)',
      'LA Lakers vs LA Clippers',
      '경기 관람 후 호텔 도착 휴식 (22:00)',
    ],
    mealInfo: '호텔식',
    image: '/images/crypto-arena-lakers-mavericks.jpg',
    gameInfo: {
      teams: 'Lakers vs Clippers',
      venue: 'Crypto Arena',
      date: '2026-02-20',
    },
    type: 'game',
  },
  {
    day: 3,
    date: '2026-02-21',
    dateDisplay: '2월 21일(토)',
    title: '샌프란시스코 이동',
    titleEn: 'San Francisco Depart',
    location: 'San Francisco',
    locationKo: '샌프란시스코',
    activities: [
      '조식 후 샌프란시스코 출발 (09:00)',
      '호텔 도착 체크인',
      '휴식',
    ],
    mealInfo: '호텔식',
    image: '/images/san-francisco-tour.jpg',
    type: 'travel',
  },
  {
    day: 4,
    date: '2026-02-22',
    dateDisplay: '2월 22일(일)',
    title: '샌프란시스코 투어 & Warriors vs Nuggets',
    titleEn: 'San Francisco Tour & Warriors vs Nuggets',
    location: 'San Francisco',
    locationKo: '샌프란시스코',
    activities: [
      '조식 후 Golden State Warriors 홈구장 이동 (10:00)',
      'NBA 경기 관람 (12:30)',
      'Golden State Warriors vs Denver Nuggets',
      '경기 관람 후 샌프란시스코 피셔맨스워프 관광',
      '석식 후 호텔 도착 휴식 (19:00)',
    ],
    mealInfo: '호텔식',
    image: '/images/chase-center-game.jpg',
    gameInfo: {
      teams: 'Warriors vs Nuggets',
      venue: 'Chase Center',
      date: '2026-02-22',
    },
    type: 'game',
  },
  {
    day: 5,
    date: '2026-02-23',
    dateDisplay: '2월 23일(월)',
    title: '인천 귀국',
    titleEn: 'Incheon Depart',
    location: 'San Francisco',
    locationKo: '샌프란시스코',
    activities: [
      '조식 후 SFO 공항 이동',
      '공항 도착 티켓팅 후 공항 탑승 수속',
      '인천 공항 출발',
    ],
    mealInfo: '호텔식',
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
