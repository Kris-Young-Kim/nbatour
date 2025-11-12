# Mermaid.md - 시각화 다이어그램

## 1. 사용자 여정 (User Journey)

```mermaid
graph TD
    A[랜딩페이지 접속] --> B[Hero Section 보기]
    B --> C[NBA Spotlight 보기<br/>경기 정보 확인]
    C --> D{관심 있음?}
    D -->|No| E[페이지 이탈]
    D -->|Yes| F[Itinerary 확인<br/>일정 검토]
    F --> G{더 알고 싶음?}
    G -->|Yes| H[Highlights 보기<br/>투어 특징 확인]
    H --> I[Pricing 확인<br/>가격 정보 검토]
    I --> J[FAQ 확인<br/>질문 해결]
    J --> K{신청 결정}
    K -->|Yes| L[CTA 클릭<br/>투어 신청하기]
    K -->|No| M[Newsletter 구독<br/>나중에 고려]
    L --> N[신청 폼으로 이동]
    G -->|No| M
```

---

## 2. 페이지 구조 (Page Layout)

```mermaid
graph TD
    subgraph LAYOUT["페이지 레이아웃"]
        HEADER["Header<br/>로고, 네비게이션, 테마토글"]
        HERO["Hero Section<br/>김맘바와 함께하는 NBA 직관투어<br/>배경: NBA 경기장"]
        NBA["NBA Spotlight<br/>3경기 카드 레이아웃<br/>Warriors vs Grizzlies<br/>Lakers vs Spurs<br/>Lakers vs Mavericks"]
        ITINERARY["Itinerary Section<br/>5일 일정 확장/축약<br/>Day1~5 카드"]
        HIGHLIGHTS["Highlights Section<br/>4개 카드<br/>연예인가이드, 3경기, 전식사, 보험"]
        PRICING["Pricing Section<br/>₩6,800,000<br/>포함/불포함 항목"]
        FAQ["FAQ Section<br/>5개 Q&A<br/>Accordion"]
        CTA["CTA Section<br/>투어 신청하기 버튼"]
        NEWSLETTER["Newsletter<br/>플레이스홀더 div"]
        FOOTER["Footer<br/>연락처, 소셜링크"]
    end
    
    HEADER --> HERO
    HERO --> NBA
    NBA --> ITINERARY
    ITINERARY --> HIGHLIGHTS
    HIGHLIGHTS --> PRICING
    PRICING --> FAQ
    FAQ --> CTA
    CTA --> NEWSLETTER
    NEWSLETTER --> FOOTER
```

---

## 3. 컴포넌트 계층 (Component Hierarchy)

```mermaid
graph TD
    App["App (page.tsx)<br/>메인 페이지"]
    
    App --> Layout["Layout (layout.tsx)<br/>전체 레이아웃"]
    App --> Globals["globals.css<br/>글로벌 스타일"]
    
    Layout --> Header["Header.tsx<br/>네비게이션, 테마토글"]
    
    App --> Hero["Hero.tsx<br/>히어로 섹션"]
    App --> NBASpotlight["NBA-Spotlight.tsx<br/>3경기 카드"]
    App --> Itinerary["Itinerary.tsx<br/>5일 일정 아코디언"]
    App --> Highlights["Highlights.tsx<br/>4개 하이라이트"]
    App --> Pricing["Pricing.tsx<br/>가격 정보"]
    App --> FAQ["FAQ.tsx<br/>자주 묻는 질문"]
    App --> CTA["CTA.tsx<br/>신청 버튼"]
    App --> Newsletter["Newsletter.tsx<br/>뉴스레터"]
    App --> Footer["Footer.tsx<br/>푸터"]
    
    Itinerary --> DayCard["DayCard.tsx<br/>각 일차 카드"]
    
    lib["lib/"]
    lib --> Constants["constants.ts<br/>투어정보, 가격"]
    lib --> Data["data.ts<br/>일정데이터, 경기정보"]
```

---

## 4. 데이터 흐름 (Data Flow)

```mermaid
graph LR
    A["constants.ts<br/>투어정보<br/>가격정보<br/>FAQ데이터"]
    B["data.ts<br/>5일 일정<br/>경기 정보"]
    
    A --> Hero
    A --> Pricing
    A --> FAQ
    B --> Itinerary
    B --> NBASpotlight
    
    Hero["Hero.tsx"]
    Pricing["Pricing.tsx"]
    FAQ["FAQ.tsx"]
    Itinerary["Itinerary.tsx"]
    NBASpotlight["NBA-Spotlight.tsx"]
    
    style A fill:#e1f5ff
    style B fill:#e1f5ff
```

---

## 5. 반응형 디자인 브레이크포인트

```mermaid
graph LR
    Mobile["📱 Mobile<br/>< 640px<br/>1열 레이아웃<br/>큰 터치 영역"]
    Tablet["📱 Tablet<br/>640-1024px<br/>2열 레이아웃<br/>최적화된 여백"]
    Desktop["💻 Desktop<br/>> 1024px<br/>3열 레이아웃<br/>풍부한 여백"]
    
    style Mobile fill:#ffeb3b
    style Tablet fill:#ff9800
    style Desktop fill:#4caf50
```

---

## 6. 다크/라이트 모드 테마

```mermaid
graph TD
    Theme["테마 시스템"]
    
    Theme -->|라이트 모드| Light["배경: 흰색<br/>텍스트: 검정<br/>카드: 밝은 회색<br/>강조: NBA 팀 색상"]
    Theme -->|다크 모드| Dark["배경: 검정/어두운 회색<br/>텍스트: 흰색<br/>카드: 어두운 배경<br/>강조: 밝은 NBA 색상"]
    
    Light --> Header["Header 적용"]
    Dark --> Header
    Light --> Components["모든 컴포넌트"]
    Dark --> Components
    
    style Light fill:#e3f2fd
    style Dark fill:#212121,color:#fff
```

---

## 7. 개발 워크플로우 (Development Workflow)

```mermaid
graph TD
    A["시작: GitHub 저장소 생성"]
    A --> B["Phase 1: 프로젝트 설정<br/>Next.js, Tailwind 설정"]
    B --> C["Phase 2: 코어 컴포넌트<br/>Hero, NBA Spotlight, 등"]
    C --> D["Phase 3: 추가 컴포넌트<br/>Footer, CTA, Newsletter"]
    D --> E["Phase 4: 스타일링 & 반응형<br/>Tailwind 커스터마이징"]
    E --> F["Phase 5: 이미지 최적화<br/>NBA 사진 배치"]
    F --> G["Phase 6: SEO & 성능<br/>메타데이터, Lighthouse"]
    G --> H["Phase 7: 기능 & 인터랙션<br/>Accordion, 스크롤"]
    H --> I["Phase 8: 테스트<br/>크로스브라우저, 디바이스"]
    I --> J["Phase 9: 배포 준비<br/>환경 설정"]
    J --> K["Phase 10: Vercel 배포"]
    K --> L["배포 완료 ✅"]
    
    style A fill:#4caf50,color:#fff
    style L fill:#4caf50,color:#fff
    style B fill:#2196f3,color:#fff
    style K fill:#ff9800,color:#fff
```

---

## 8. NBA 사진 배치 전략

```mermaid
graph TD
    Images["NBA 사진 배치"]
    
    Images --> Hero["Hero Section<br/>경기장 전경 또는<br/>NBA 로고 배경<br/>풀 너비 이미지"]
    
    Images --> NBA["NBA Spotlight<br/>각 팀별 선수 사진<br/>또는 로고 이미지<br/>큼직한 사이즈"]
    
    Images --> Itinerary["Itinerary Section<br/>도시별 랜드마크<br/>샌프란시스코: 금문교<br/>LA: 비벌리힐스, 할리우드<br/>썸네일 사이즈"]
    
    Images --> Background["배경 요소<br/>농구공 패턴<br/>코트 라인<br/>부드러운 오버레이"]
    
    style Hero fill:#ff6f00,color:#fff
    style NBA fill:#d32f2f,color:#fff
    style Itinerary fill:#1976d2,color:#fff
    style Background fill:#7b1fa2,color:#fff
```

---

## 9. SEO & 메타데이터 구조

```mermaid
graph TD
    SEO["SEO 최적화"]
    
    SEO --> Meta["메타데이터<br/>Title: NBA 직관투어 2026<br/>Description: 김맘바와 함께<br/>Keywords: NBA, 여행, 직관"]
    
    SEO --> OG["Open Graph<br/>og:title<br/>og:description<br/>og:image<br/>og:url"]
    
    SEO --> JSON["JSON-LD<br/>Event 스키마<br/>투어 정보 구조화"]
    
    SEO --> Sitemap["sitemap.ts<br/>모든 페이지 나열"]
```

---

## 10. 배포 파이프라인 (Deployment Pipeline)

```mermaid
graph LR
    A["Local Development<br/>Cursor IDE"]
    B["Git Commit<br/>의미 있는 메시지"]
    C["GitHub Push<br/>main 브랜치"]
    D["Vercel 자동 배포"]
    E["배포 확인<br/>라이브 URL"]
    F["최종 검증<br/>링크, 이미지, 기능"]
    
    A -->|pnpm dev| B
    B -->|git push| C
    C -->|자동| D
    D -->|배포 완료| E
    E -->|검증| F
    
    style D fill:#4caf50,color:#fff
    style F fill:#4caf50,color:#fff
```

---

## 11. 컴포넌트 상태 관리

```mermaid
graph TD
    State["상태 관리"]
    
    State -->|테마| ThemeContext["다크/라이트 모드<br/>Context API 또는<br/>localStorage"]
    
    State -->|확장| ExpandedState["Itinerary & FAQ<br/>Accordion 상태<br/>useState"]
    
    State -->|네비게이션| NavState["현재 활성<br/>섹션 추적<br/>필요 시 구현"]
    
    style ThemeContext fill:#2196f3,color:#fff
    style ExpandedState fill:#2196f3,color:#fff
    style NavState fill:#2196f3,color:#fff
```

---

## 12. 성능 최적화 체크리스트

```mermaid
graph TD
    Perf["성능 최적화"]
    
    Perf --> Images["이미지<br/>Next.js Image<br/>Lazy Loading<br/>Responsive sizes"]
    
    Perf --> Fonts["폰트<br/>Noto Sans KR<br/>Variable Font<br/>preload"]
    
    Perf --> Code["코드<br/>Code Splitting<br/>Dynamic Import<br/>Tree Shaking"]
    
    Perf --> Metrics["메트릭스<br/>Lighthouse > 90<br/>FCP < 2초<br/>CLS < 0.1"]
    
    style Metrics fill:#4caf50,color:#fff
```