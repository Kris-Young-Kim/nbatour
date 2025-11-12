# NBA 직관투어 랜딩페이지 - 제품 요구사항 문서 (고도화) [2026년 최종]

## 1. 개요

| 항목 | 내용 |
|------|------|
| **프로젝트명** | 김맘바와 함께하는 NBA 직관투어 2026 |
| **투어사** | 민투어 |
| **기간** | 2026.02.08(일) ~ 2026.02.13(금) / 5박 7일 |
| **가격** | ₩6,800,000 (계약금: ₩2,000,000 / 잔금: ₩4,800,000) |
| **목표** | NBA 직관 경험 홍보 및 신청 유도 |

---

## 2. 투어 정보

### 2.1 여행지 및 경기 일정
- **Day 1-2:** 샌프란시스코 (Warriors vs Grizzlies @ Chase Center)
- **Day 3-5:** 로스앤젤레스
  - Lakers vs Spurs @ Crypto Arena
  - Lakers vs Mavericks @ Crypto Arena

### 2.2 특징
- NBA 연예인 가이드 (김맘바)
- 3경기 직관 포함 (빅매치!)
- 농구 성지 및 코비 벽화 투어
- 전식사 포함 (북청 순두부, In-N-Out, 한식 바비큐)
- ₩1억 여행자보험 포함
- Intuit Dome 견학 포함

---

## 3. 페이지 구조 (간결형)

### 3.1 섹션 구성
1. **Hero** - 임팩트 있는 소개 + NBA 사진 배경
2. **NBA Spotlight** - 경기 정보를 큼직한 이미지와 함께 표시
3. **Itinerary Calendar** - 5일 일정 (확장/축약 가능)
4. **Highlights** - 카드형 하이라이트 (4개)
5. **Pricing** - 가격 정보 및 포함사항
6. **FAQ** - 자주 묻는 질문 (5개)
7. **CTA** - 신청하기 버튼
8. **Newsletter** - 플레이스홀더 div

### 3.2 NBA 사진 배치 전략
- **Hero Section** → 경기장 전경 또는 NBA 로고
- **NBA Spotlight** → 각 경기팀 선수 사진 또는 로고 (큼직하게)
- **Itinerary** → 각 도시별 랜드마크 사진 (작은 썸네일)
- **Background 요소** → 농구공, 코트 패턴 등 부드러운 배경

---

## 4. 상세 섹션 요구사항

### 4.1 Hero Section
**구성:**
- 헤드라인: "김맘바와 함께하는 NBA 직관투어 2026"
- 서브타이틀: "샌프란시스코, LA에서 만나는 NBA의 모든 것"
- NBA 경기장 또는 농구 테마 배경 이미지 (풀 너비)
- 주요 CTA: "투어 신청하기"
- 보조 CTA: "일정 보기"

### 4.2 NBA Spotlight Section
**구성:**
- 타이틀: "관람 경기"
- 각 경기별 카드 (3개):
  - 팀 로고 또는 선수 사진 (큼직함)
  - 경기 정보 (팀 vs 팀)
  - 장소 & 날짜
  - 간단한 설명

### 4.3 Itinerary Section
**구성:**
- 5일 일정을 시각적 타임라인 또는 카드 레이아웃
- 각 일차:
  - 날짜 (예: Day 1 | 2/8)
  - 위치 아이콘 + 도시명
  - 주요 활동 (1-2줄)
  - 클릭 시 상세 내용 표시
  - 작은 도시 사진 썸네일 (선택)

**세부 일정:**
```
Day 1 (2/8) | 인천 → 샌프란시스코
- 인천 출발 20:50 (OZ212)
- 샌프란시스코 도착 14:00
- 금문교, 피셔맨스워프 관광
- 호텔 체크인

Day 2 (2/9) | 샌프란시스코
- 호텔 조식, 가이드 미팅
- 스탠포드 대학, Google, Apple 방문
- Warriors vs Grizzlies @ Chase Center (석식비 $30 지급)
- 샌프란시스코 시내 관광

Day 3 (2/10) | 샌프란시스코 → LA
- 호텔 조식, 가이드 미팅
- LA 도착, 호텔 체크인
- Lakers vs Spurs @ Crypto Arena
- 호텔 투숙

Day 4 (2/11) | LA
- 호텔 조식, 가이드 미팅
- 산타모니카 비치
- 베니스 비치
- 비벌리힐스, 로데오 거리
- 할리우드

Day 5 (2/12) | LA
- 호텔 조식, 가이드 미팅
- LA 다저스 경기장, 게티센터, 그리피스 천문대 등
- Lakers vs Mavericks @ Crypto Arena
- 호텔 투숙

Day 6 (2/13) | LA → 인천
- 호텔 조식 후 LAX 공항 이동
- LA 출발 09:10 (OZ201)
- 익일 15:45 인천 도착
```

### 4.4 Highlights Section
**4개 카드 (간결형):**
- 연예인 가이드 + 농구 성지 순례
- 3경기 NBA 직관 (빅매치!)
- 전식사 프로그램 + Intuit Dome 견학
- ₩1억 여행자보험 + 럭셔리 호텔

### 4.5 Pricing Section
**구성:**
- 총액: ₩6,800,000
- 계약금: ₩2,000,000 (신청 시)
- 잔금: ₩4,800,000 (출발 15일 전)

**포함사항:**
- 왕복항공료 (아시아나항공)
- 전일정 숙박
- 전일정 식사 & 입장료
- 경기 중식, 석식 지급
- ₩1억 여행자보험
- 가이드 & 식당 팁
- 아시아나항공 블록 예약

**불포함 & 추가:**
- ESTA 비용 ($21)
- ESTA 대행료 (₩50,000, 선택)
- 호텔 팁 (자율)

### 4.6 FAQ (5개 핵심)
1. 환율 변동 시 가격 조정?
2. 현지 합류 가능?
3. 추가 체류 가능?
4. 입금 일정?
5. 현재 신청 현황?

---

## 5. 기술 스택 & 구조

### 5.1 Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Package Manager:** pnpm
- **Deployment:** Vercel
- **Version Control:** Git & GitHub

### 5.2 디렉토리 구조
```
nba-tour-landing/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── Hero.tsx
│   ├── NBA-Spotlight.tsx
│   ├── Itinerary.tsx
│   ├── Highlights.tsx
│   ├── Pricing.tsx
│   ├── FAQ.tsx
│   ├── CTA.tsx
│   ├── Newsletter.tsx
│   ├── Header.tsx
│   └── Footer.tsx
├── lib/
│   ├── constants.ts
│   └── data.ts
├── public/
│   └── images/
├── package.json
├── tailwind.config.ts
└── README.md
```

---

## 6. 디자인 & UX

### 6.1 색상
- 주요: NBA 팀 색상 (Purple/Gold Lakers, Blue Warriors)
- 악센트: 농구 주황색
- 중립: 검정/흰색

### 6.2 특징
- 반응형 (Mobile-first)
- 다크/라이트 모드 토글
- 부드러운 스크롤 & 트랜지션
- 이미지 중심 레이아웃 (NBA 사진 강조)

---

## 7. 성능 & SEO

### 7.1 목표
- Lighthouse: >90
- FCP: <2초
- CLS: <0.1
- 이미지 최적화 (Next.js Image)

### 7.2 SEO
- 메타 태그: NBA, 직관투어, 여행
- Open Graph: 소셜 미리보기
- JSON-LD: Event 스키마

---

## 8. 제공물

✅ 반응형 원페이지 랜딩페이지
✅ 다크/라이트 모드
✅ 인터랙티브 일정 캘린더
✅ NBA 사진 중심 배치
✅ 모바일 최적화
✅ SEO 설정
✅ Vercel 배포