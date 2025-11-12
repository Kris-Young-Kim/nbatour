# DIR.md - 디렉토리 구조 & 파일 가이드

## 프로젝트 디렉토리 구조

```
nba-tour-landing/
├── .git/                          # Git 저장소
├── .next/                         # Next.js 빌드 결과물 (자동 생성)
├── node_modules/                  # 의존성 패키지 (자동 생성)
│
├── app/                           # Next.js App Router
│   ├── layout.tsx                 # 루트 레이아웃 (헤더, 푸터, 전역 구조)
│   ├── page.tsx                   # 메인 페이지 (모든 섹션 통합)
│   ├── globals.css                # 글로벌 스타일 (Tailwind, 커스텀)
│   ├── sitemap.ts                 # SEO 사이트맵
│   └── robots.ts                  # robots.txt 설정
│
├── components/                    # React 컴포넌트
│   ├── Header.tsx                 # 헤더 (로고, 네비게이션, 테마토글)
│   ├── Hero.tsx                   # 히어로 섹션
│   ├── NBA-Spotlight.tsx          # NBA 경기 카드 섹션
│   ├── Itinerary.tsx              # 5일 일정 (아코디언)
│   │   └── DayCard.tsx            # 각 일차 카드 (Itinerary 내부)
│   ├── Highlights.tsx             # 투어 하이라이트 (4개 카드)
│   ├── Pricing.tsx                # 가격 정보 섹션
│   ├── FAQ.tsx                    # 자주 묻는 질문 (아코디언)
│   ├── CTA.tsx                    # Call-to-Action 섹션 (신청 버튼)
│   ├── Newsletter.tsx             # 뉴스레터 (플레이스홀더)
│   ├── Footer.tsx                 # 푸터 (연락처, 소셜)
│   └── ThemeToggle.tsx            # 다크/라이트 모드 토글 (Header 내부)
│
├── lib/                           # 유틸리티 & 데이터
│   ├── constants.ts               # 상수 (투어 정보, 가격, FAQ)
│   ├── data.ts                    # 동적 데이터 (5일 일정)
│   └── utils.ts                   # 유틸리티 함수 (필요 시)
│
├── public/                        # 정적 자산
│   └── images/                    # 이미지 폴더
│       ├── hero-bg.jpg            # Hero 배경 이미지
│       ├── warriors-logo.png      # Warriors 로고
│       ├── grizzlies-logo.png     # Grizzlies 로고
│       ├── lakers-logo.png        # Lakers 로고
│       ├── spurs-logo.png         # Spurs 로고
│       ├── mavericks-logo.png     # Mavericks 로고
│       ├── chase-center.jpg       # Chase Center 사진
│       ├── crypto-arena.jpg       # Crypto Arena 사진
│       ├── san-francisco.jpg      # 샌프란시스코 랜드마크
│       ├── los-angeles.jpg        # 로스앤젤레스 랜드마크
│       └── nba-pattern.svg        # 배경 패턴
│
├── .gitignore                     # Git 무시 파일 목록
├── .prettierrc                    # Prettier 설정
├── .eslintrc.json                 # ESLint 설정
├── next.config.js                 # Next.js 설정
├── tailwind.config.ts             # Tailwind CSS 설정
├── tsconfig.json                  # TypeScript 설정
├── package.json                   # 프로젝트 메타데이터 & 의존성
├── pnpm-lock.yaml                 # pnpm 락 파일
│
├── README.md                      # 프로젝트 소개 & 설치 가이드
├── PRD_v2.md                      # 제품 요구사항 문서 (고도화 버전)
├── TODO.md                        # 개발 체크리스트
├── Mermaid.md                     # 시각화 다이어그램
└── DIR.md                         # 이 파일 (디렉토리 가이드)
```

---

## 파일별 상세 설명

### `/app` - Next.js App Router

| 파일 | 설명 |
|------|------|
| **layout.tsx** | 루트 레이아웃. Header, Footer 포함. 메타데이터 설정. |
| **page.tsx** | 메인 페이지. 모든 섹션 컴포넌트 임포트 및 통합. |
| **globals.css** | Tailwind CSS 임포트, 글로벌 폰트, 커스텀 스타일 정의. |
| **sitemap.ts** | SEO 사이트맵 생성. |
| **robots.ts** | robots.txt 설정. |

### `/components` - React 컴포넌트

#### Header 관련
| 파일 | 설명 |
|------|------|
| **Header.tsx** | 상단 네비게이션 바. 로고, 메뉴, 테마 토글 포함. |
| **ThemeToggle.tsx** | 다크/라이트 모드 토글 버튼. Header 내부에서 사용. |

#### 페이지 섹션
| 파일 | 설명 |
|------|------|
| **Hero.tsx** | 히어로 섹션. 큼직한 배경, 헤드라인, CTA 버튼. |
| **NBA-Spotlight.tsx** | 3경기 카드 레이아웃. 팀 로고, 경기 정보. |
| **Itinerary.tsx** | 5일 일정 아코디언. DayCard 컴포넌트 포함. |
| **DayCard.tsx** | 각 일차 카드. Itinerary 내부 컴포넌트. |
| **Highlights.tsx** | 투어 하이라이트 4개 카드. |
| **Pricing.tsx** | 가격 정보, 포함/불포함 항목. |
| **FAQ.tsx** | 자주 묻는 질문 아코디언. |
| **CTA.tsx** | 신청하기 버튼 섹션. |
| **Newsletter.tsx** | 뉴스레터 구독 플레이스홀더. |
| **Footer.tsx** | 푸터. 연락처, 소셜 링크. |

### `/lib` - 유틸리티 & 데이터

| 파일 | 설명 |
|------|------|
| **constants.ts** | 투어 정보, 가격, FAQ 등 상수 데이터. |
| **data.ts** | 5일 일정 데이터 구조, 경기 정보. |
| **utils.ts** | 공통 유틸리티 함수 (필요 시 추가). |

### `/public/images` - 이미지 자산

| 파일명 | 용도 | 권장 크기 |
|--------|------|----------|
| **hero-bg.jpg** | Hero 섹션 배경 | 1920x1080 이상 |
| **warriors-logo.png** | Warriors 로고 | 200x200 |
| **grizzlies-logo.png** | Grizzlies 로고 | 200x200 |
| **lakers-logo.png** | Lakers 로고 | 200x200 |
| **spurs-logo.png** | Spurs 로고 | 200x200 |
| **mavericks-logo.png** | Mavericks 로고 | 200x200 |
| **chase-center.jpg** | Chase Center 사진 | 800x600 |
| **crypto-arena.jpg** | Crypto Arena 사진 | 800x600 |
| **san-francisco.jpg** | 샌프란시스코 랜드마크 | 800x600 |
| **los-angeles.jpg** | LA 랜드마크 | 800x600 |
| **nba-pattern.svg** | 배경 패턴 | 벡터 파일 |

---

## 중요 파일 및 설정

### `package.json`
```json
{
  "name": "nba-tour-landing",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",           # 개발 서버 시작
    "build": "next build",       # 프로덕션 빌드
    "start": "next start",       # 프로덕션 서버 시작
    "lint": "next lint",         # ESLint 실행
    "format": "prettier --write \"**/*.{ts,tsx,css}\"" # Prettier 포맷팅
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "next": "^14.2.0",
    "next-themes": "^1.0.0"     # 다크/라이트 모드 지원
  },
  "devDependencies": {
    "tailwindcss": "^4.0.0",
    "typescript": "^5.0.0",
    "eslint": "^8.0.0",
    "prettier": "^3.0.0"
  }
}
```

### `tailwind.config.ts`
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'lakers-purple': '#552583',   # Lakers 보라색
        'warriors-blue': '#1D428A',    # Warriors 파란색
        'basketball-orange': '#FF7A00', # 농구 주황색
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-kr)'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',  # 다크모드 설정
}
export default config
```

### `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "strict": true,
    "resolveJsonModule": true,
    "allowJs": true,
    "noEmit": true,
    "esModuleInterop": true,
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules", ".next"]
}
```

---

## 컴포넌트별 상세 구조

### `Hero.tsx` 구조
```typescript
export default function Hero() {
  return (
    <section id="hero" className="...">
      {/* 배경 이미지 */}
      <Image src="/images/hero-bg.jpg" ... />
      
      {/* 컨텐츠 오버레이 */}
      <div className="...">
        <h1>김맘바와 함께하는 NBA 직관투어 2026</h1>
        <p>샌프란시스코, LA에서 만나는 NBA의 모든 것</p>
        <button>투어 신청하기</button>
        <button>일정 보기</button>
      </div>
    </section>
  )
}
```

### `Itinerary.tsx` 구조
```typescript
export default function Itinerary() {
  const [expanded, setExpanded] = useState<number | null>(null)
  
  return (
    <section id="itinerary" className="...">
      <h2>5일 일정</h2>
      {itineraryData.map((day, idx) => (
        <DayCard
          key={idx}
          day={day}
          isExpanded={expanded === idx}
          onToggle={() => setExpanded(expanded === idx ? null : idx)}
        />
      ))}
    </section>
  )
}
```

### `constants.ts` 구조
```typescript
export const TOUR_INFO = {
  title: "김맘바와 함께하는 NBA 직관투어 2026",
  duration: "5박 7일",
  dates: "2026.02.08 ~ 2026.02.13",
  price: 6800000,
  deposit: 2000000,
  finalPayment: 4800000,
}

export const GAMES = [
  {
    id: 1,
    teamA: "Warriors",
    teamB: "Grizzlies",
    venue: "Chase Center",
    location: "San Francisco",
    date: "2026.02.09",
    logo: "/images/warriors-logo.png"
  },
  // ... 더 많은 경기
]

export const FAQ_DATA = [
  {
    question: "환율 변동이 있는데...",
    answer: "환율 영향이 있어도..."
  },
  // ... 5개 항목
]
```

### `data.ts` 구조
```typescript
export const ITINERARY = [
  {
    day: 1,
    date: "2026-02-08",
    title: "인천 → 샌프란시스코",
    location: "San Francisco",
    activities: [
      "인천 출발 20:50 (OZ212)",
      "샌프란시스코 도착 14:00",
      "금문교, 피셔맨스워프 관광",
      "호텔 체크인"
    ],
    image: "/images/san-francisco.jpg"
  },
  // ... Day 2-5
]
```

---

## 개발 워크플로우

### 로컬 개발 시작
```bash
# 1. 프로젝트 클론
git clone <repository-url>
cd nba-tour-landing

# 2. 의존성 설치
pnpm install

# 3. 개발 서버 시작
pnpm dev
# http://localhost:3000 접속

# 4. 코드 수정 (컴포넌트 작업)
# -> Next.js 핫 리로드 자동 적용

# 5. 포맷팅 (선택사항)
pnpm format

# 6. 변경사항 커밋
git add .
git commit -m "feat: Add Hero component"

# 7. 푸시
git push origin main
```

### 배포 (Vercel)
```bash
# 1. Vercel 연동 (최초)
# GitHub에 push 후 Vercel 자동 감지

# 2. Vercel 자동 배포
# main 브랜치 푸시 시 자동 배포

# 3. 배포 상태 확인
# Vercel 대시보드에서 확인
```

---

## 주요 명명 규칙

| 대상 | 규칙 | 예시 |
|------|------|------|
| **파일명** | PascalCase (.tsx) | `Hero.tsx`, `NBA-Spotlight.tsx` |
| **함수/변수** | camelCase | `handleExpand()`, `tourPrice` |
| **CSS 클래스** | kebab-case (Tailwind) | `hero-section`, `game-card` |
| **ID 속성** | kebab-case | `id="hero"`, `id="itinerary"` |
| **상수** | UPPER_SNAKE_CASE | `TOUR_INFO`, `GAMES` |
| **Git 브랜치** | kebab-case | `feature/hero-section`, `fix/mobile-layout` |
| **Commit** | 타입: 설명 | `feat: Add NBA Spotlight component` |

---

## 커밋 메시지 규칙

```
<type>: <subject>

<body>
<footer>

Types:
- feat: 새로운 기능
- fix: 버그 수정
- refactor: 코드 리팩토링
- style: 스타일링 변경
- docs: 문서 수정
- test: 테스트 추가
- chore: 빌드, 패키지 관리 등

예시:
feat: Add Hero section with background image
fix: Fix mobile responsive layout for Hero section
refactor: Extract game card into separate component
```

---

## 마지막 체크리스트

- [ ] 모든 파일 구조 생성 완료
- [ ] 의존성 설치 (pnpm install)
- [ ] 개발 서버 정상 작동 (pnpm dev)
- [ ] 각 컴포넌트 파일 생성
- [ ] 데이터 파일 (constants.ts, data.ts) 작성
- [ ] 이미지 파일 `/public/images`에 배치
- [ ] Git 저장소 초기화 및 첫 커밋
- [ ] README.md 작성
- [ ] Vercel 배포 준비