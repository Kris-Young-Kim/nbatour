# NBA 직관투어 랜딩페이지 - 개발 TODO 리스트

> **프로젝트**: 김맘바와 함께하는 NBA 직관투어 2026  
> **기간**: 2026.02.07 ~ 2026.02.13 (6박 7일)  
> **가격**: ₩7,300,000 (계약금 ₩1,000,000, 잔금 ₩6,300,000)  
> **기술 스택**: Next.js 14+, TypeScript, Tailwind CSS, pnpm  
> **배포**: Vercel

---

## 📋 진행 상황

- [x] 프로젝트 초기 설정
- [x] 데이터 및 상수 정의
- [x] 컴포넌트 개발
- [x] 스타일링 및 디자인
- [x] SEO 및 성능 최적화
- [x] 테스트 및 배포

---

## 1. 프로젝트 초기 설정

### 1.1 Next.js 프로젝트 초기화

- [x] Next.js 14+ 프로젝트 생성 (수동으로 구조 생성 완료)
- [x] TypeScript 설정 확인
- [x] App Router 설정 확인
- [x] Tailwind CSS 설정 확인
- [x] ESLint 설정 확인

### 1.2 디렉토리 구조 생성

- [x] `app/` 디렉토리 구조 확인
  - [x] `app/layout.tsx`
  - [x] `app/page.tsx`
  - [x] `app/globals.css`
  - [x] `app/sitemap.ts`
  - [x] `app/robots.ts`
- [x] `components/` 디렉토리 생성
  - [x] `components/ThemeProvider.tsx`
- [x] `lib/` 디렉토리 생성
  - [x] `lib/constants.ts`
  - [x] `lib/data.ts`
- [x] `public/images/` 디렉토리 생성

### 1.3 의존성 설치

- [x] 기본 의존성 설치 (`npm install`)
- [x] `next-themes` 설치 (다크모드)
- [x] `clsx` 설치 (클래스 유틸리티)
- [x] 개발 도구 설정 (Prettier, ESLint)

### 1.4 설정 파일 확인

- [x] `tailwind.config.ts` (NBA 색상 팔레트 포함)
- [x] `tsconfig.json` (path alias 설정)
- [x] `next.config.js` (이미지 최적화)
- [x] `postcss.config.js` (Tailwind CSS용)
- [x] `.prettierrc`
- [x] `.eslintrc.json`
- [x] `.gitignore`

---

## 2. 데이터 및 상수 정의

### 2.1 `lib/constants.ts` 생성

- [x] 투어 기본 정보 (`TOUR_INFO`)
  - [x] 제목, 기간, 날짜
  - [x] 가격 정보 (총액, 계약금, 잔금)
  - [x] 설명 및 서브타이틀
- [x] 경기 정보 (`GAMES`)
  - [x] 4경기 데이터 (Lakers vs Warriors, Lakers vs Thunder, Lakers vs Spurs, Warriors vs Grizzlies)
  - [x] 팀 정보, 경기장, 날짜
  - [x] 로고 및 이미지 경로
- [x] FAQ 데이터 (`FAQ_DATA`)
  - [x] 5개 질문 및 답변
- [x] 포함사항 (`INCLUDED_ITEMS`)
  - [x] 전일정 호텔, 차량 및 가이드, 전일정 식사, 기사님 & 가이드 팁
- [x] 불포함사항 (`EXCLUDED_ITEMS`)
  - [x] NBA 입장권 등 각종 입장료, 옵션 관광
- [x] 항공 정보 (`FLIGHT_INFO`)
  - [x] 출발: LAX 공항 도착 06:50 AM (2/7)
  - [x] 귀국: SFO 공항 출발 (2/13)
- [x] 호텔 정보 (`HOTEL_INFO`)
  - [x] LA: Best Western Plus Hotel (2더블베드룸)
  - [x] 샌프란시스코: Bay Landing Hotel San Francisco (2더블베드룸)

### 2.2 `lib/data.ts` 생성

- [x] 7일 일정 데이터 (`ITINERARY`)
  - [x] Day 1: 로스앤젤레스 도착 & LA 투어 & Lakers vs Warriors
  - [x] Day 2: LA 투어
  - [x] Day 3: LA 관광 & Lakers vs Thunder
  - [x] Day 4: 아울렛 쇼핑 & Lakers vs Spurs (Intuit Dome 견학 포함)
  - [x] Day 5: 샌프란시스코 이동 & Warriors vs Grizzlies
  - [x] Day 6: 샌프란시스코 관광 (금문교, 피셔맨스워프, 페리빌딩, 베이크루즈 유람선)
  - [x] Day 7: 인천 귀국
- [x] 타입 정의 (`ItineraryDay`, `Game`)

---

## 3. 컴포넌트 개발

### 3.1 공통 컴포넌트

- [x] `components/Header.tsx`
  - [x] 로고 및 네비게이션
  - [x] 다크/라이트 모드 토글
  - [x] 반응형 메뉴
- [x] `components/Footer.tsx`
  - [x] 연락처 정보
  - [x] 소셜 미디어 링크
  - [x] 저작권 정보

### 3.2 Hero Section

- [x] `components/Hero.tsx`
  - [x] 헤드라인: "김맘바와 함께하는 NBA 직관투어 2026"
  - [x] 서브타이틀: "로스앤젤레스, 샌프란시스코에서 만나는 NBA의 모든 것"
  - [x] NBA 경기장 배경 이미지 (Next.js Image)
  - [x] 주요 CTA: "투어 신청하기"
  - [x] 보조 CTA: "일정 보기"
  - [x] 반응형 디자인 (모바일, 태블릿, 데스크톱)
  - [x] 다크/라이트 모드 지원

### 3.3 NBA Spotlight Section

- [x] `components/NBA-Spotlight.tsx`
  - [x] 타이틀: "관람 경기"
  - [x] 4개 경기 카드
    - [x] 팀 로고 또는 선수 사진 (큼직하게)
    - [x] 경기 정보 (팀 vs 팀)
    - [x] 장소 & 날짜
    - [x] 간단한 설명
  - [x] 그리드 레이아웃 (반응형)
  - [x] 호버 효과
  - [x] 다크/라이트 모드 지원

### 3.4 Itinerary Section

- [x] `components/Itinerary.tsx`
  - [x] 7일 일정 표시
  - [x] 아코디언 기능 (확장/축약)
  - [x] 각 일차 카드
    - [x] 날짜 (Day 1 | 2/8)
    - [x] 위치 아이콘 + 도시명
    - [x] 주요 활동 (1-2줄)
    - [x] 클릭 시 상세 내용 표시
    - [x] 도시 사진 썸네일
  - [x] 타임라인 또는 카드 레이아웃
  - [x] 부드러운 애니메이션 (transition)
  - [x] 반응형 디자인
  - [x] 다크/라이트 모드 지원

### 3.5 Highlights Section

- [x] `components/Highlights.tsx`
  - [x] 4개 카드 레이아웃
    - [x] 연예인 가이드 + 농구 성지 순례
    - [x] 4경기 NBA 직관 (빅매치!)
    - [x] 전식사 프로그램 + Intuit Dome 견학
    - [x] ₩1억 여행자보험 + 럭셔리 호텔
  - [x] 아이콘 또는 이미지
  - [x] 반응형 그리드 (모바일 1열, 태블릿 2열, 데스크톱 4열)
  - [x] 다크/라이트 모드 지원

### 3.6 Pricing Section

- [x] `components/Pricing.tsx`
  - [x] 총액: ₩7,300,000
  - [x] 계약금: ₩1,000,000 (신청 시)
  - [x] 잔금: ₩6,300,000 (출발 15일 전)
  - [x] 포함사항 목록
  - [x] 불포함사항 목록
  - [x] 명확한 시각적 구분
  - [x] 반응형 디자인
  - [x] 다크/라이트 모드 지원

### 3.7 FAQ Section

- [x] `components/FAQ.tsx`
  - [x] 5개 FAQ 항목
    - [x] 환율 변동 시 가격 조정? (730만원 동결)
    - [x] 현지 합류 가능?
    - [x] 추가 체류 가능?
    - [x] 입금 일정? (계약금 100만원, 잔금 630만원)
    - [x] 현재 신청 현황?
  - [x] 아코디언 기능 (확장/축약)
  - [x] 부드러운 애니메이션
  - [x] 접근성 (aria-expanded, aria-controls)
  - [x] 다크/라이트 모드 지원

### 3.8 CTA Section

- [x] `components/CTA.tsx`
  - [x] 신청하기 버튼 (강조)
  - [x] 연락처 정보 (선택)
  - [x] 시각적 강조 (색상, 크기)
  - [x] 반응형 디자인

### 3.9 Newsletter Section

- [x] `components/Newsletter.tsx`
  - [x] 플레이스홀더 div (추후 구현)
  - [x] 기본 레이아웃만 구성

---

## 4. 메인 페이지 통합

### 4.1 `app/page.tsx` 통합

- [x] 모든 컴포넌트 import
- [x] 섹션 순서 배치
  1. [x] Header
  2. [x] Hero
  3. [x] NBA Spotlight
  4. [x] Itinerary
  5. [x] Highlights
  6. [x] Pricing
  7. [x] FAQ
  8. [x] CTA
  9. [x] Newsletter
  10. [x] Footer
- [x] 섹션 ID 설정 (앵커 링크용)
- [x] 스크롤 애니메이션 (선택)

### 4.2 `app/layout.tsx` 설정

- [x] 메타데이터 설정
  - [x] title, description
  - [x] Open Graph 태그
  - [x] Twitter 카드
- [x] 다크모드 Provider 설정 (`next-themes`)
- [x] 폰트 설정 (Noto Sans KR)
- [x] 전역 스타일 적용

### 4.3 `app/globals.css` 설정

- [x] Tailwind CSS 기본 설정
- [x] 커스텀 CSS 변수
- [x] 다크/라이트 모드 변수
- [x] 스크롤 동작 (smooth)
- [x] 포커스 스타일
- [x] 선택 텍스트 스타일
- [x] 애니메이션 설정 (prefers-reduced-motion)

---

## 5. 이미지 및 자산

### 5.1 이미지 준비

- [x] Hero 배경 이미지 (`/public/images/hero-bg.jpg`)
- [x] NBA 팀 로고
  - [x] Warriors 로고
  - [x] Thunder 로고
  - [x] Lakers 로고
  - [x] Spurs 로고
- [x] 경기장 이미지
  - [x] Chase Center
  - [x] Crypto Arena
- [x] 도시 랜드마크 이미지
  - [x] 샌프란시스코
  - [x] 로스앤젤레스
- [x] 배경 패턴 (`nba-pattern.svg`)

### 5.2 이미지 최적화

- [x] 모든 이미지에 width, height 지정
- [x] Hero 이미지: `priority` 속성
- [x] 나머지 이미지: lazy loading
- [x] Next.js Image 컴포넌트 사용
- [x] 적절한 alt 텍스트

---

## 6. 스타일링 및 디자인

### 6.1 색상 팔레트

- [x] Lakers Purple (#552583)
- [x] Warriors Blue (#1D428A)
- [x] Basketball Orange (#FF7A00)
- [x] 라이트 모드 색상 (배경, 텍스트, 카드, 보더)
- [x] 다크 모드 색상 (배경, 텍스트, 카드, 보더)

### 6.2 반응형 디자인

- [x] 모바일 (< 640px)
- [x] 태블릿 (640-1024px)
- [x] 데스크톱 (> 1024px)
- [x] 모든 컴포넌트 반응형 테스트

### 6.3 다크/라이트 모드

- [x] 테마 토글 기능
- [x] 모든 컴포넌트 다크모드 지원
- [x] 부드러운 전환 애니메이션
- [x] 시스템 테마 감지 (선택)

### 6.4 애니메이션 및 트랜지션

- [x] 부드러운 스크롤
- [x] 호버 효과
- [x] 아코디언 애니메이션
- [x] 페이지 전환 (선택)
- [x] 로딩 애니메이션 (선택)

---

## 7. 접근성 (Accessibility)

### 7.1 시맨틱 HTML

- [x] 의미있는 HTML 태그 사용 (section, article, header, footer)
- [x] 제목 계층 구조 (h1, h2, h3)
- [x] 버튼 및 링크 적절한 사용

### 7.2 ARIA 속성

- [x] aria-expanded (아코디언)
- [x] aria-controls (아코디언)
- [x] aria-label (버튼, 링크)
- [x] aria-live (동적 콘텐츠)

### 7.3 키보드 내비게이션

- [x] 모든 인터랙티브 요소 키보드 접근 가능
- [x] 포커스 스타일 명확히 표시
- [x] Tab 순서 논리적

### 7.4 접근성 테스트

- [x] 스크린 리더 테스트
- [x] 키보드만으로 사용 가능한지 확인
- [x] 색상 대비 확인 (WCAG 2.1 AA)

---

## 8. SEO 및 메타데이터

### 8.1 기본 SEO

- [x] 페이지 title 설정
- [x] meta description 설정
- [x] meta keywords (선택)
- [x] canonical URL 설정

### 8.2 Open Graph

- [x] og:title
- [x] og:description
- [x] og:image
- [x] og:type
- [x] og:url

### 8.3 Twitter 카드

- [x] twitter:card
- [x] twitter:title
- [x] twitter:description
- [x] twitter:image

### 8.4 JSON-LD 구조화 데이터

- [x] Event 스키마
- [x] Organization 스키마 (선택)
- [x] BreadcrumbList 스키마 (선택)

### 8.5 기타 SEO 설정

- [x] `app/sitemap.ts` 생성
- [x] `app/robots.ts` 생성
- [x] 언어 설정 (lang="ko")

---

## 9. 성능 최적화

### 9.1 이미지 최적화

- [x] Next.js Image 컴포넌트 사용
- [x] 적절한 이미지 포맷 (WebP, AVIF)
- [x] 이미지 크기 최적화
- [x] Lazy loading 적용

### 9.2 코드 최적화

- [x] 컴포넌트 코드 스플리팅
- [x] 불필요한 리렌더링 방지
- [x] 메모이제이션 (필요 시)
- [x] 동적 import (필요 시)

### 9.3 성능 목표 달성

- [x] Lighthouse 점수 >90
- [x] FCP <2초
- [x] LCP <2.5초
- [x] CLS <0.1
- [x] TTI <3.5초

### 9.4 성능 테스트

- [x] Lighthouse 테스트
- [x] Core Web Vitals 확인
- [x] 네트워크 속도별 테스트

---

## 10. 테스트

### 10.1 기능 테스트

- [x] 모든 컴포넌트 정상 작동 확인
- [x] 다크/라이트 모드 전환 테스트
- [x] 아코디언 확장/축약 테스트
- [x] 반응형 레이아웃 테스트
- [x] 링크 및 버튼 작동 확인

### 10.2 브라우저 테스트

- [x] Chrome
- [x] Firefox
- [x] Safari
- [x] Edge

### 10.3 디바이스 테스트

- [x] 모바일 (iOS, Android)
- [x] 태블릿 (iPad, Android 태블릿)
- [x] 데스크톱 (다양한 해상도)

### 10.4 접근성 테스트

- [x] 스크린 리더 테스트
- [x] 키보드 내비게이션 테스트
- [x] 색상 대비 테스트
- [x] 접근성 감사 도구 사용

---

## 11. 배포 준비

### 11.1 빌드 테스트

- [x] 로컬 빌드 테스트 (`pnpm build`)
- [x] 빌드 에러 확인 및 수정
- [x] 프로덕션 빌드 최적화 확인

### 11.2 배포 체크리스트

- [x] 모든 컴포넌트 완성
- [x] 반응형 디자인 테스트 완료
- [x] 다크/라이트 모드 동작 확인
- [x] 모든 링크 & CTA 테스트 완료
- [x] 이미지 로딩 확인
- [x] Lighthouse 90+ 달성
- [x] Core Web Vitals 확인
- [x] 크로스브라우저 테스트 완료
- [x] 모바일 디바이스 테스트 완료
- [x] 접근성 감사 완료
- [x] SEO 메타데이터 설정 완료
- [x] Git commit 완료

### 11.3 Vercel 배포

- [x] Vercel 프로젝트 생성
- [x] 환경 변수 설정 (필요 시)
- [x] 도메인 설정 (필요 시)
- [x] 배포 후 최종 테스트
- [x] 배포 URL 확인

---

## 12. 문서화

### 12.1 README 업데이트

- [x] 프로젝트 소개
- [x] 설치 및 실행 방법
- [x] 프로젝트 구조 설명
- [x] 기술 스택 설명
- [x] 배포 방법

### 12.2 코드 주석

- [x] 주요 함수 및 컴포넌트 주석
- [x] 복잡한 로직 설명
- [x] 타입 정의 설명

---

## 📝 참고 사항

### 개발 우선순위

1. **1단계**: 프로젝트 초기 설정 및 데이터 정의
2. **2단계**: 기본 컴포넌트 개발 (Header, Footer, Hero)
3. **3단계**: 주요 섹션 개발 (NBA Spotlight, Itinerary, Highlights)
4. **4단계**: 추가 섹션 개발 (Pricing, FAQ, CTA)
5. **5단계**: 스타일링 및 디자인 완성
6. **6단계**: SEO 및 성능 최적화
7. **7단계**: 테스트 및 배포

### 주요 규칙

- ✅ Next.js Image 컴포넌트 사용 (HTML img 태그 금지)
- ✅ 시맨틱 HTML 사용 (의미없는 div 금지)
- ✅ TypeScript interface 정의 (any 타입 금지)
- ✅ Tailwind CSS 사용 (인라인 스타일 금지)
- ✅ 하드코딩 금지 (constants.ts에서 import)

### 성능 목표

- Lighthouse: >90
- FCP: <2초
- LCP: <2.5초
- CLS: <0.1
- TTI: <3.5초

---

**마지막 업데이트**: 2026년 기준  
**작성자**: 개발팀  
**버전**: 1.0.0
