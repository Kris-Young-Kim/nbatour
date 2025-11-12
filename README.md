# nbatour

NBA 직관투어 랜딩페이지 프로젝트

## 프로젝트 소개

김맘바와 함께하는 NBA 직관투어 2026 랜딩페이지입니다.

- **투어 기간**: 2026.02.08 ~ 2026.02.13 (5박 7일)
- **가격**: ₩6,800,000
- **투어사**: 민투어

## 기술 스택

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- React 18
- next-themes (다크모드)

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start
```

## 프로젝트 구조

```
nba-tour-landing/
├── app/              # Next.js App Router
│   ├── layout.tsx    # 루트 레이아웃
│   ├── page.tsx      # 메인 페이지
│   └── globals.css   # 글로벌 스타일
├── components/       # React 컴포넌트
│   └── ThemeProvider.tsx
├── lib/             # 유틸리티 & 데이터
│   ├── constants.ts  # 상수 데이터
│   └── data.ts       # 일정 데이터
├── public/          # 정적 자산
│   └── images/      # 이미지 파일
└── docs/            # 문서
```

## Git 초기화 (Git 설치 후 실행)

**⚠️ 현재 시스템에 Git이 설치되어 있지 않습니다.**

Git 설치 후 다음 명령어를 실행하세요:

```bash
# Git 저장소 초기화
git init

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "first commit"

# main 브랜치로 변경
git branch -M main

# 원격 저장소 추가
git remote add origin https://github.com/Kris-Young-Kim/nbatour.git

# 원격 저장소에 푸시
git push -u origin main
```

자세한 Git 설치 방법은 `GIT_SETUP.md` 파일을 참조하세요.

## 개발 명령어

```bash
# 타입 체크
npm run type-check

# 린트
npm run lint

# 코드 포맷팅
npm run format

# 전체 검사
npm run check-all
```

## 라이센스

MIT
