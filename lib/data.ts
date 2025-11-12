// 5???Όμ • ?°μ΄??
export const ITINERARY = [
  {
    day: 1,
    date: '2026-02-08',
    dateDisplay: '2??8????',
    title: '?Έμ² ???ν”„?€?μ¤μ½?,
    titleEn: 'Incheon ??San Francisco',
    location: 'San Francisco',
    locationKo: '?ν”„?€?μ¤μ½?,
    activities: [
      '?Έμ² κµ? κ³µν•­ μ¶λ° (20:50)',
      '?„μ‹?„λ‚??³µ OZ212 (??11?κ°„)',
      '?ν”„?€?μ¤μ½??„μ°© (14:00 ?„μ??κ°„)',
      'κΈλ¬Έκµ? ?Όμ…”λ§¨μ¤?ν”„ ??κ΄€κ΄?,
      '?Έν…” μ²΄ν¬??λ°??΄μ‹',
    ],
    mealInfo: 'κΈ°λ‚΄??,
    image: '/images/san-francisco.jpg',
    type: 'travel',
  },
  {
    day: 2,
    date: '2026-02-09',
    dateDisplay: '2??9????',
    title: '?ν”„?€?μ¤μ½?- Warriors vs Grizzlies',
    titleEn: 'San Francisco - Warriors vs Grizzlies',
    location: 'San Francisco',
    locationKo: '?ν”„?€?μ¤μ½?,
    activities: [
      '?Έν…” μ΅°μ‹',
      'κ°€?΄λ“ λ―Έν…',
      '?¤νƒ ?¬λ“ ?€?? Google, Apple ??λ°©λ¬Έ',
      'Chase Center κ²½κΈ°???΄λ™',
      'Golden State Warriors vs Memphis Grizzlies κ²½κΈ° κ΄€??,
      '?μ‹λΉ?$30 μ§€κΈ?,
      '?ν”„?€?μ¤μ½??λ‚΄ κ΄€κ΄?,
      '?Έν…” ?¬μ™ λ°??΄μ‹',
    ],
    mealInfo: '?Έν…” μ΅°μ‹, ?μ²΄ μ¤€λΉ?(μ¤‘μ‹), κ²½κΈ°???μ²΄ (?μ‹ $30 μ§€κΈ?',
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
    dateDisplay: '2??10????',
    title: '?ν”„?€?μ¤μ½???LA - Lakers vs Spurs',
    titleEn: 'San Francisco ??LA - Lakers vs Spurs',
    location: 'Los Angeles',
    locationKo: 'λ΅μ¤?¤μ ¤?μ¤',
    activities: [
      '?Έν…” μ΅°μ‹',
      'κ°€?΄λ“ λ―Έν…',
      'λ΅μ¤?¤μ ¤?μ¤λ΅?μ¶λ°',
      'LA ?„μ°© λ°??Έν…” μ²΄ν¬??,
      'Crypto Arena ?΄λ™',
      'Los Angeles Lakers vs San Antonio Spurs κ²½κΈ° κ΄€??,
      'μ¤‘μ‹λΉ?$20 μ§€κΈ?,
      '?Έν…” ?¬μ™ λ°??΄μ‹',
    ],
    mealInfo: '?Έν…” μ΅°μ‹, μ¤‘μ‹ $20 μ§€κΈ? ?μ²΄ μ¤€λΉ?(?μ‹)',
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
    dateDisplay: '2??11????',
    title: 'LA - κ΄€κ΄?(?°ν?λª¨λ‹μΉ? λ² λ‹?? ? λ¦¬?°λ“)',
    titleEn: 'LA - Sightseeing',
    location: 'Los Angeles',
    locationKo: 'λ΅μ¤?¤μ ¤?μ¤',
    activities: [
      '?Έν…” μ΅°μ‹',
      'κ°€?΄λ“ λ―Έν…',
      '?°ν?λª¨λ‹μΉ?λΉ„μΉ (λ°±μ‚¬?? κµ?„ 66λ²?μΆ…μ )',
      'λ² λ‹??λΉ„μΉ (?„μ„ ?μ κ°€?¤μ λ§μ„)',
      'λΉ„λ²λ¦¬ν?? λ΅λ°??κ±°λ¦¬',
      '? λ¦¬?°λ“ & μ½”λΉ„ λ²½ν™” ?¬μ–΄',
      '?Έν…” ?¬μ™ λ°??΄μ‹',
    ],
    mealInfo: '?Έν…” μ΅°μ‹, ?μ²΄ μ¤€λΉ?(μ¤‘μ‹, ?μ‹)',
    image: '/images/KakaoTalk_20251112_155242330_05.jpg',
    type: 'sightseeing',
  },
  {
    day: 5,
    date: '2026-02-12',
    dateDisplay: '2??12????',
    title: 'LA - Lakers vs Mavericks & κ·€κµ?μ¤€λΉ?,
    titleEn: 'LA - Lakers vs Mavericks',
    location: 'Los Angeles',
    locationKo: 'λ΅μ¤?¤μ ¤?μ¤',
    activities: [
      '?Έν…” μ΅°μ‹',
      'κ°€?΄λ“ λ―Έν…',
      'LA ?¤μ???κ²½κΈ°?? κ²ν‹°?Όν„°, κ·Έλ¦¬?Όμ¤ μ²λ¬Έ?€ ??κ΄€κ΄?,
      'Intuit Dome κ²¬ν•™',
      'Crypto Arena ?΄λ™',
      'Los Angeles Lakers vs Dallas Mavericks κ²½κΈ° κ΄€??,
      'μ¤‘μ‹λΉ?$20 μ§€κΈ?,
      '?Έν…” ?¬μ™ λ°??΄μ‹',
      'μ§??•λ¦¬ λ°?μµμΆ… μ¤€λΉ?,
    ],
    mealInfo: '?Έν…” μ΅°μ‹, μ¤‘μ‹ $20 μ§€κΈ? ?μ²΄ μ¤€λΉ?(?μ‹)',
    image: '/images/crypto-arena-new.jpg',
    gameInfo: {
      teams: 'Lakers vs Mavericks',
      venue: 'Crypto Arena',
      date: '2026-02-12',
    },
    type: 'game',
  },
]

// ?€???•μ
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

