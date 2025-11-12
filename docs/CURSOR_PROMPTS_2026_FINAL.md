# 🎯 Cursor 프롬프트 - NBA 투어 2026 최종 버전

## 💬 Cursor 프롬프트 (6가지) - 2026년 최종

### 프롬프트 2️⃣: 데이터 & 상수 정의 (2026년 최종)

```
@codebase

## 작업: lib/constants.ts & lib/data.ts 작성 (2026년 데이터)

### 투어 정보 (constants.ts)

투어 기본 정보:
- 제목: "김맘바와 함께하는 NBA 직관투어 2026"
- 기간: 2026.02.08(일) ~ 2026.02.13(금) / 5박 7일
- 가격: ₩6,800,000 (계약금 ₩2,000,000, 잔금 ₩4,800,000)
- 설명: "샌프란시스코, LA에서 만나는 NBA의 모든 것"

3경기 정보 (정확하게!):
1. Warriors vs Grizzlies @ Chase Center (2026-02-09)
   - 석식비 $30 지급
2. Lakers vs Spurs @ Crypto Arena (2026-02-10)
   - 중식비 $20 지급
3. Lakers vs Mavericks @ Crypto Arena (2026-02-12)
   - 중식비 $20 지급

포함사항:
- 왕복항공료 (아시아나항공 OZ212 / OZ201)
- 항공세, 인천공항세, 관광진흥개발기금, 전쟁보험료, 유류할증료
- 전일정 숙박 (Holiday Inn & Suites Hotel)
- 전일정 식사 & 입장료
- 경기 중식 $20, 석식 $30 지급 (경기가 있는 날)
- ₩1억 여행자보험
- 가이드 & 식당 팁
- Asiana Airlines 블록 예약
- Intuit Dome 견학

불포함사항:
- 호텔 룸메이드팁 등 매너팁 (자율)
- ESTA 비용 ($21 - 개인부담)
- ESTA 대행료 (₩50,000, 선택)

FAQ 5개:
1. 환율 변동 시 가격 조정?
2. 미국 현지 합류 가능?
3. 추가 체류 가능?
4. 입금 일정?
5. 현재 신청 현황?

### 5일 일정 (data.ts)

Day 1 (2/8) | 인천 → 샌프란시스코
- 인천 출발 20:50 (OZ212)
- 샌프란시스코 도착 14:00
- 금문교, 피셔맨스워프 관광
- 호텔 체크인

Day 2 (2/9) | 샌프란시스코 - Warriors vs Grizzlies
- 호텔 조식, 가이드 미팅
- 스탠포드 대학, Google, Apple 방문
- Warriors vs Grizzlies @ Chase Center (석식비 $30)
- 샌프란시스코 시내 관광

Day 3 (2/10) | SF → LA - Lakers vs Spurs
- 호텔 조식, 가이드 미팅
- LA 도착, 호텔 체크인
- Lakers vs Spurs @ Crypto Arena (중식비 $20)

Day 4 (2/11) | LA - 관광
- 호텔 조식, 가이드 미팅
- 산타모니카 비치, 베니스 비치
- 비벌리힐스, 로데오 거리
- 할리우드

Day 5 (2/12) | LA - Lakers vs Mavericks
- 호텔 조식, 가이드 미팅
- LA 다저스 경기장, 게티센터, 그리피스 천문대
- Intuit Dome 견학
- Lakers vs Mavericks @ Crypto Arena (중식비 $20)

### 타입 정의
- interface Game: id, teamA, teamB, venue, location, date, logoA, logoB 등
- interface ItineraryDay: day, date, location, activities, image, type 등

### 요구사항
- TypeScript interface 정의 (완전함)
- 모든 정보 정확하게 (2026년 기준)
- 빈 image 경로는 나중에 채울 것
- 5일 일정 모두 포함
```

---

### 프롬프트 3️⃣: Itinerary 컴포넌트 (5일 일정)

```
@codebase

## 작업: Itinerary 컴포넌트 생성 (5일 일정)

### 파일 생성
- components/Itinerary.tsx
- components/DayCard.tsx

### Itinerary.tsx 요구사항
- 5일 일정을 아코디언으로 표시 (Day 1 ~ Day 5)
- 각 카드는 클릭 시 확장/축약
- 반응형: 모바일(1열), 태블릿(2열), 데스크톱(3열)
- 다크/라이트 모드 지원
- /lib/data.ts의 ITINERARY 데이터 사용

### DayCard.tsx 요구사항
- 날짜, 위치, 활동 표시
- 경기 정보 (Game Day는 별도로 표시)
- 확장/축약 아이콘
- 부드러운 애니메이션 (transition-all)
- 클릭 가능한 헤더

### 각 Day별 특징
- Day 1: 여행 시작 (비행기 아이콘)
- Day 2: 경기 있음 (Warriors vs Grizzlies)
- Day 3: 경기 있음 (Lakers vs Spurs)
- Day 4: 관광 (카메라 아이콘)
- Day 5: 경기 있음 (Lakers vs Mavericks)

### 코드 요구사항
- TypeScript interface 정의 (Props)
- 'use client' 지시어 포함
- useState로 상태 관리
- tailwindCSS로 완전 스타일링
- 다크모드: dark: 클래스 사용
- 5일 모두 정확히 표시
```

---

### 프롬프트 4️⃣: NBA Spotlight 섹션

```
@codebase

## 작업: NBA Spotlight 컴포넌트 생성 (3경기)

### 파일 생성
- components/NBA-Spotlight.tsx

### 요구사항
- 3경기를 카드 형식으로 표시:
  1. Warriors vs Grizzlies @ Chase Center (2/9)
  2. Lakers vs Spurs @ Crypto Arena (2/10)
  3. Lakers vs Mavericks @ Crypto Arena (2/12)

- 각 카드: 팀 로고/이미지, 팀명, 장소, 날짜, 팀 vs 팀
- 호버 효과: 약간 위로 올라가는 애니메이션
- 반응형: 모바일(1열), 태블릿(2열), 데스크톱(3열)
- 다크/라이트 모드 지원

### 데이터 소스
- /lib/constants.ts의 GAMES 배열 사용 (3개 경기)

### 코드 요구사항
- TypeScript interface 정의
- grid 레이아웃 (md:grid-cols-2 lg:grid-cols-3)
- 호버: shadow, translate 효과
- 다크모드 지원
```

---

### 프롬프트 5️⃣: Hero 섹션 + 스타일링

```
@codebase

## 작업: Hero 섹션 완성 & 반응형 디자인

### Hero.tsx 요구사항
- 헤드라인: "김맘바와 함께하는 NBA 직관투어 2026"
- 서브타이틀: "샌프란시스코, LA에서 만나는 NBA의 모든 것"
- 배경: 경기장 이미지 (/images/hero-bg.jpg)
- 2개 CTA 버튼: "투어 신청하기", "일정 보기"

### 반응형 설계
모바일 (< 640px)
- 텍스트 크기: 작음 (text-2xl)
- 버튼: 풀너비, 세로 정렬

태블릿 (640-1024px)
- 텍스트 크기: 중간 (text-4xl)
- 버튼: 나란히, 가로 정렬

데스크톱 (> 1024px)
- 텍스트 크기: 큼 (text-6xl)
- 버튼: 나란히, 가로 정렬

### 다크/라이트 모드
- 라이트: 배경 투명도 낮음, 텍스트 검정
- 다크: 배경 투명도 높음, 텍스트 흰색

### 코드 요구사항
- Next.js Image 컴포넌트 사용
- priority 속성 추가 (빠른 로딩)
- alt 텍스트 포함
- 완전한 Tailwind 클래스명

### 스타일 색상
- Lakers Purple: #552583
- Warriors Blue: #1D428A
- Basketball Orange: #FF7A00
```

---

### 프롬프트 6️⃣: 페이지 통합 & 배포 준비

```
@codebase

## 작업: app/page.tsx 전체 통합 & 배포 준비

### 통합할 컴포넌트 (순서대로)
1. Header (네비게이션, 테마 토글)
2. Hero (히어로 섹션)
3. NBA-Spotlight (3경기 카드)
4. Itinerary (5일 일정 아코디언)
5. Highlights (4개 카드)
6. Pricing (₩6,800,000 가격 정보)
7. FAQ (5개 Q&A)
8. CTA (신청하기 버튼)
9. Newsletter (플레이스홀더 div)
10. Footer (푸터)

### page.tsx 구조
```typescript
export const metadata: Metadata = {
  title: "NBA 직관투어 2026 - 김맘바와 함께하는 NBA 경험",
  description: "샌프란시스코, LA에서 만나는 NBA 직관투어. Warriors vs Grizzlies, Lakers vs Spurs, Lakers vs Mavericks 관람...",
}

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <NBA-Spotlight />
      <Itinerary />
      <Highlights />
      <Pricing />
      <FAQ />
      <CTA />
      <Newsletter />
      <Footer />
    </main>
  )
}
```

### 섹션별 ID 설정
- id="hero"
- id="nba-spotlight"
- id="itinerary"
- id="highlights"
- id="pricing"
- id="faq"
- id="cta"

### SEO 메타데이터
- 제목: "NBA 직관투어 2026 - 김맘바와 함께하는 NBA 경험"
- 설명: 위 참고
- 키워드: NBA, 직관, 여행, 레이커스, 워리어스, 2026
- Open Graph 태그
- JSON-LD Event 스키마

### 배포 준비
1. 모든 컴포넌트 import 확인
2. 5일 일정 모두 표시 확인
3. 3경기 모두 표시 확인
4. Lighthouse 테스트 (90+ 목표)
5. 모바일 반응형 테스트
6. 다크모드 테스트
7. 모든 링크 & CTA 동작 확인
8. Git 커밋: "feat: Complete 2026 landing page"
```

---

## 📝 2026년 최종 데이터

| 항목 | 값 |
|------|-----|
| **연도** | **2026** |
| **기간** | **2026.02.08 ~ 2026.02.13** |
| **경기 1** | **Warriors vs Grizzlies** |
| **경기 2** | **Lakers vs Spurs** |
| **경기 3** | **Lakers vs Mavericks** |
| **일정** | **5일** |
| **가격** | **₩6,800,000** |

---

## 🚀 실행 순서

1. **프롬프트 1** - 프로젝트 초기화
2. **프롬프트 2** - 데이터 & 상수 (2026년 데이터)
3. **프롬프트 3** - Itinerary 컴포넌트 (5일 일정)
4. **프롬프트 4** - NBA Spotlight (3경기)
5. **프롬프트 5** - Hero + 스타일링
6. **프롬프트 6** - 페이지 통합 & 배포

---

**모든 파일이 2026년 기준으로 최종 업데이트되었습니다! ✅**