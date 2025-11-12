# Cursor MCP 설정 가이드

## 📋 목차

1. [필요한 MCP 도구](#필요한-mcp-도구)
2. [Cursor 설정 파일](#cursor-설정-파일)
3. [프롬프트 템플릿](#프롬프트-템플릿)
4. [사용 방법](#사용-방법)

---

## 필요한 MCP 도구

### 1. **GitHub MCP** (GitHub 저장소 관리)
```json
{
  "tool": "github-mcp",
  "enabled": true,
  "version": "latest",
  "capabilities": [
    "create_repository",
    "create_pull_request",
    "create_branch",
    "push_files",
    "create_or_update_file",
    "delete_file"
  ]
}
```

### 2. **File System MCP** (로컬 파일 관리)
```json
{
  "tool": "filesystem-mcp",
  "enabled": true,
  "version": "latest",
  "capabilities": [
    "read_file",
    "write_file",
    "create_directory",
    "delete_file",
    "list_directory"
  ]
}
```

### 3. **NPM/Node MCP** (패키지 설치 & 실행)
```json
{
  "tool": "npm-mcp",
  "enabled": true,
  "version": "latest",
  "capabilities": [
    "install_package",
    "run_script",
    "check_version",
    "list_scripts"
  ]
}
```

### 4. **Git MCP** (Git 작업)
```json
{
  "tool": "git-mcp",
  "enabled": true,
  "version": "latest",
  "capabilities": [
    "git_init",
    "git_commit",
    "git_push",
    "git_status",
    "git_log"
  ]
}
```

---

## Cursor 설정 파일

### `.cursor/rules.mdc` 생성
프로젝트 루트에 아래 파일을 생성하세요:

```markdown
# NBA 직관투어 랜딩페이지 개발 규칙

## 프로젝트 정보
- 프레임워크: Next.js 14+ (App Router)
- 스타일링: Tailwind CSS
- 언어: TypeScript
- 패키지 매니저: pnpm
- 배포: Vercel

## 디렉토리 규칙
- `/app` - Next.js 페이지 & 레이아웃
- `/components` - React 컴포넌트 (PascalCase)
- `/lib` - 상수, 데이터, 유틸리티
- `/public/images` - 이미지 자산

## 파일 명명 규칙
- 컴포넌트: PascalCase (.tsx)
  - ✅ Hero.tsx, NBA-Spotlight.tsx
  - ❌ hero.tsx, nbaSpotlight.tsx
- 함수/변수: camelCase
  - ✅ handleExpand(), tourPrice
  - ❌ handle_expand(), tour_price
- 상수: UPPER_SNAKE_CASE
  - ✅ TOUR_INFO, GAMES
  - ❌ tourInfo, games

## 코드 스타일
- TypeScript strict mode 사용
- 모든 컴포넌트 Props에 interface 정의
- 클라이언트 컴포넌트는 'use client' 지시어 명시
- Tailwind 클래스 축약형 사용 불가 (완전 클래스명 사용)

## Git 커밋 규칙
```
<type>: <subject>

Types:
- feat: 새로운 기능 추가
- fix: 버그 수정
- refactor: 코드 리팩토링 (기능 변화 없음)
- style: 스타일링 변경 (CSS, Tailwind)
- docs: 문서 수정
- chore: 빌드, 패키지 관리

예시:
- feat: Add Hero component with background image
- style: Apply responsive design to mobile view
- fix: Fix Itinerary accordion toggle animation
```

## 성능 & SEO
- 모든 이미지에 Next.js Image 컴포넌트 사용
- Lazy loading 활용
- 메타데이터 정의 필수
- Lighthouse 목표: > 90

## 접근성
- WCAG 2.1 AA 표준 준수
- 시맨틱 HTML 사용
- ARIA 라벨 포함 (필요 시)
- 색상만으로 정보 전달 금지
```

### `.cursor/extensions.json` 생성
```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "GitHub.copilot",
    "merlinvsc.next-js"
  ],
  "settings": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "typescript.tsdk": "node_modules/typescript/lib",
    "typescript.enablePromptUseWorkspaceTsdk": true
  }
}
```

---

## 프롬프트 템플릿

### 프롬프트 1: 프로젝트 초기화

```
당신은 경험 많은 Next.js 개발자입니다.

## 작업: NBA 투어 랜딩페이지 프로젝트 초기화

### 요구사항
1. Next.js 14+ 프로젝트를 pnpm으로 초기화
2. Tailwind CSS 설정
3. TypeScript strict mode 활성화
4. 필요한 의존성:
   - next-themes (다크/라이트 모드)
   - clsx (조건부 클래스)
   - zod (데이터 유효성 검사)

### 수행할 작업
1. pnpm create next-app@latest nba-tour-landing 실행
   - TypeScript: Yes
   - Tailwind: Yes
   - ESLint: Yes
   - App Router: Yes
2. .cursor/rules.mdc 파일 생성
3. package.json 수정 (추가 의존성 포함)
4. pnpm install 실행
5. 프로젝트 구조 생성
   - /components 디렉토리
   - /lib 디렉토리
   - /public/images 디렉토리
6. Git 초기화 및 초기 커밋

### 산출물
- 초기화된 Next.js 프로젝트
- 올바른 폴더 구조
- 설치된 의존성
- Git 저장소 준비 완료
```

### 프롬프트 2: 컴포넌트 생성

```
당신은 React/Next.js 전문가입니다.

## 작업: NBA 투어 랜딩페이지 - 컴포넌트 생성

### 컨텍스트
- 프로젝트: NBA 직관투어 랜딩페이지
- 목표: 5일 일정을 확장/축약 가능한 아코디언으로 구현
- 참고: /lib/data.ts 파일에 ITINERARY 배열 정의됨

### 요구사항
1. Itinerary.tsx 컴포넌트 생성
   - 5일 일정을 카드 형식으로 표시
   - 각 카드는 클릭 시 상세 내용 표시 (아코디언)
   - 반응형: 모바일(1열), 태블릿(2열), 데스크톱(3열)
   - 다크/라이트 모드 지원

2. DayCard.tsx 컴포넌트 생성 (Itinerary 내부)
   - 날짜, 장소, 활동 표시
   - 확장/축약 아이콘
   - 부드러운 애니메이션

### 코드 요구사항
- TypeScript interface 정의
- Tailwind CSS로 스타일링
- 접근성: ARIA 라벨 포함
- Props 타입: interface로 정의

### 산출물
- components/Itinerary.tsx
- components/DayCard.tsx
- 타입 정의 포함
- 사용 예시 포함

### 추가 지시사항
- 'use client' 지시어 포함
- 상태 관리는 useState 사용
- 다크 모드 고려: dark:bg-slate-900 등
```

### 프롬프트 3: 스타일링 & 반응형

```
당신은 Tailwind CSS 전문가입니다.

## 작업: Hero 섹션 반응형 디자인 적용

### 요구사항
1. Hero.tsx 컴포넌트 완성
   - 배경: 경기장 이미지 (hero-bg.jpg)
   - 텍스트: 헤드라인 + 서브타이틀
   - CTA: 2개 버튼 ("투어 신청하기", "일정 보기")

2. 반응형 디자인
   - 모바일 (< 640px): 텍스트 크기 작음, 버튼 풀너비
   - 태블릿 (640-1024px): 중간 크기, 버튼 나란히
   - 데스크톱 (> 1024px): 큰 텍스트, 최대 너비 제한

3. 다크/라이트 모드
   - 라이트: 배경 투명도 낮음, 텍스트 검정
   - 다크: 배경 투명도 높음, 텍스트 흰색

4. 색상 (변수 사용)
   - Lakers Purple: #552583
   - Warriors Blue: #1D428A
   - Basketball Orange: #FF7A00

### 개선사항
- 이미지는 Next.js Image 컴포넌트 사용
- 성능: lazy loading 활용
- 접근성: alt 텍스트 포함

### 산출물
- 완성된 Hero.tsx
- 모든 화면 크기에서 테스트 가능한 코드
- Tailwind 설정 업데이트 (필요 시)
```

### 프롬프트 4: 데이터 & 상수 정의

```
당신은 데이터 구조 설계 전문가입니다.

## 작업: lib/constants.ts & lib/data.ts 파일 작성

### constants.ts - 정적 데이터
```typescript
// 투어 정보
export const TOUR_INFO = {
  title: "string",
  duration: "string",
  dates: "string",
  price: number,
  deposit: number,
  finalPayment: number,
}

// 경기 정보
export const GAMES: Game[] = [
  {
    id: number,
    teamA: string,
    teamB: string,
    venue: string,
    location: string,
    date: string,
    logo: string,
  }
]

// FAQ 데이터
export const FAQ_DATA: FAQ[] = [
  {
    id: number,
    question: string,
    answer: string,
  }
]
```

### data.ts - 동적 데이터
```typescript
export const ITINERARY: ItineraryDay[] = [
  {
    day: 1,
    date: "2026-02-08",
    title: string,
    location: string,
    activities: string[],
    image: string,
  }
]
```

### 요구사항
1. 정확한 투어 정보 포함 (PDF 참고)
   - 기간: 2026.02.08 ~ 2026.02.13
   - 가격: ₩6,800,000
   - 계약금: ₩2,000,000
   - 잔금: ₩4,800,000

2. 5일 일정 (샌디에이고 제외)
   - Day 1: 인천 → 샌프란시스코
   - Day 2: Warriors vs Grizzlies
   - Day 3: SF → LA
   - Day 4: LA 관광
   - Day 5: Lakers vs Mavericks

3. 3경기 정보
   - Warriors vs Grizzlies @ Chase Center
   - Lakers vs Spurs @ Crypto Arena
   - Lakers vs Mavericks

4. FAQ 5개 (기존 내용 사용)

### 타입 정의
```typescript
interface Game {
  id: number
  teamA: string
  teamB: string
  venue: string
  location: string
  date: string
  logo: string
}

interface ItineraryDay {
  day: number
  date: string
  title: string
  location: string
  activities: string[]
  image: string
}
```

### 산출물
- /lib/constants.ts
- /lib/data.ts
- 타입 정의 포함
```

### 프롬프트 5: 전체 페이지 통합

```
당신은 Next.js 페이지 통합 전문가입니다.

## 작업: page.tsx에 모든 섹션 컴포넌트 통합

### 컴포넌트 목록
1. Header (네비게이션, 테마 토글)
2. Hero (히어로 섹션)
3. NBA-Spotlight (경기 카드)
4. Itinerary (일정 아코디언)
5. Highlights (투어 특징 4개)
6. Pricing (가격 정보)
7. FAQ (자주 묻는 질문)
8. CTA (신청하기)
9. Newsletter (플레이스홀더)
10. Footer (푸터)

### 요구사항
1. page.tsx 작성
   - 모든 섹션 import
   - 섹션별 id 지정 (네비게이션용)
   - 순서: Header → Hero → NBA Spotlight → Itinerary → Highlights → Pricing → FAQ → CTA → Newsletter → Footer

2. 메타데이터 설정
   - title: "NBA 직관투어 2026 - 김맘바와 함께하는 NBA 경험"
   - description: "샌프란시스코, LA에서 만나는 NBA 직관투어..."
   - keywords: NBA, 직관, 여행, 레이커스, 워리어스

3. 스크롤 동작
   - "상세 일정 보기" 클릭 → Itinerary 섹션으로 스크롤
   - 네비게이션 링크 동작

### 산출물
- app/page.tsx (완성)
- 모든 섹션 연결 완료
- 네비게이션 동작 확인
```

### 프롬프트 6: SEO & 배포 준비

```
당신은 SEO 최적화 전문가입니다.

## 작업: SEO 메타데이터 & 배포 설정

### 1. 메타데이터 설정
- layout.tsx에서 generateMetadata() 함수 정의
- Open Graph 태그
- Twitter 카드
- JSON-LD Event 스키마

### 2. SEO 파일 생성
- app/sitemap.ts (사이트맵)
- app/robots.ts (robots.txt)

### 3. 성능 최적화
- 모든 이미지 Next.js Image 컴포넌트 사용
- Dynamic import (필요 시)
- Font optimization (Noto Sans KR)

### 4. Vercel 배포 설정
- next.config.js 검토
- .env.local 예시 작성
- vercel.json 생성 (필요 시)

### 산출물
- 메타데이터 설정 완료
- SEO 파일 생성
- 배포 준비 완료
```

---

## 사용 방법

### Step 1: Cursor에서 프롬프트 입력
1. Cursor 열기
2. 좌측 패널에서 `@codebase` 입력
3. 프로젝트 폴더 지정
4. 위의 프롬프트 중 하나 복사 & 붙여넣기

### Step 2: MCP 도구 활성화
1. Cursor 설정 열기 (Cmd+,)
2. "Model Configuration" 검색
3. 위의 MCP 도구 설정 추가

### Step 3: 단계별 실행
1. **프롬프트 1** - 프로젝트 초기화
2. **프롬프트 4** - 데이터 & 상수 정의
3. **프롬프트 2** - 컴포넌트 생성 (반복)
4. **프롬프트 3** - 스타일링 & 반응형
5. **프롬프트 5** - 전체 페이지 통합
6. **프롬프트 6** - SEO & 배포 준비

### Step 4: 로컬 테스트
```bash
pnpm dev
# http://localhost:3000
```

### Step 5: Git & 배포
```bash
git add .
git commit -m "feat: Complete landing page"
git push origin main
# Vercel 자동 배포
```

---

## 팁 & 주의사항

### ✅ Do's
- 각 프롬프트는 독립적으로 실행 가능
- 프롬프트 결과는 자동 파일 저장
- Git 커밋은 각 프롬프트마다 하나씩
- 반응형 디자인 테스트는 DevTools 사용

### ❌ Don'ts
- 모든 프롬프트를 한 번에 실행하지 말 것
- Tailwind 클래스 축약형 사용 금지
- 이미지는 반드시 Next.js Image 컴포넌트 사용
- 하드코딩된 값 대신 constants.ts에서 import

### 🔧 문제 해결
- `pnpm install` 에러: `pnpm store prune` 실행
- 이미지 로드 안 됨: `public/images` 경로 확인
- Tailwind 클래스 미적용: `tailwind.config.ts` 콘텐츠 경로 확인

---

## 추가 리소스

- [Next.js 공식 가이드](https://nextjs.org/docs)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [TypeScript 기초](https://www.typescriptlang.org/docs/)
- [Cursor AI 사용 가이드](https://docs.cursor.sh/)