# Cursor 프로젝트 설정 파일

## 1. `.cursor/rules.mdc` 파일 (프로젝트 루트)

프로젝트 루트에서 아래 명령어 실행:

```bash
# .cursor 디렉토리 생성
mkdir -p .cursor

# rules.mdc 파일 생성 (위의 CURSOR_RULES.mdc 내용 복사 붙여넣기)
touch .cursor/rules.mdc
```

`CURSOR_RULES.mdc` 파일의 전체 내용을 `.cursor/rules.mdc`에 복사하세요.

---

## 2. `.cursor/settings.json` (Cursor 확장 설정)

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "GitHub.copilot",
    "firsttris.vscode-jest-runner",
    "orta.vscode-jest",
    "ms-playwright.playwright"
  ],
  "settings": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "[typescript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.formatOnSave": true
    },
    "[typescriptreact]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.formatOnSave": true
    },
    "typescript.tsdk": "node_modules/typescript/lib",
    "typescript.enablePromptUseWorkspaceTsdk": true,
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit"
    },
    "tailwindCSS.experimental.classRegex": [
      ["clsx\\(([^)]*)\\)", "(?:'|\"|`|\\{|\\}|\\[|\\]|,)(\\s*[^\\s]*)"]
    ]
  }
}
```

---

## 3. `.prettierrc` (코드 포맷팅)

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "arrowParens": "always",
  "endOfLine": "lf",
  "bracketSpacing": true
}
```

---

## 4. `.eslintrc.json` (코드 린팅)

```json
{
  "extends": [
    "next/core-web-vitals",
    "prettier"
  ],
  "rules": {
    "react/no-unescaped-entities": "off",
    "@next/next/no-html-link-for-pages": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "argsIgnorePattern": "^_"
      }
    ]
  }
}
```

---

## 5. `tailwind.config.ts` (테일윈드 커스텀)

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'lakers-purple': '#552583',
        'warriors-blue': '#1D428A',
        'basketball-orange': '#FF7A00',
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-kr)'],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'slide-down': 'slide-down 0.3s ease-out',
      },
      keyframes: {
        'slide-down': {
          'from': { opacity: '0', transform: 'translateY(-10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

export default config
```

---

## 6. `tsconfig.json` (TypeScript 설정)

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "resolveJsonModule": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    },
    "jsx": "preserve",
    "jsxImportSource": "react"
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx"
  ],
  "exclude": [
    "node_modules",
    ".next"
  ]
}
```

---

## 7. `next.config.js` (Next.js 설정)

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on',
        },
      ],
    },
  ],
  compress: true,
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig
```

---

## 8. `package.json` (스크립트 & 의존성)

```json
{
  "name": "nba-tour-landing",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "format": "prettier --write \"**/*.{ts,tsx,css,json,md}\"",
    "format:check": "prettier --check \"**/*.{ts,tsx,css,json,md}\"",
    "type-check": "tsc --noEmit",
    "check-all": "npm run type-check && npm run lint && npm run format:check"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "next": "^14.2.0",
    "next-themes": "^1.0.0",
    "clsx": "^2.1.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "tailwindcss": "^4.0.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.2.0",
    "eslint-config-prettier": "^9.0.0",
    "prettier": "^3.0.0"
  }
}
```

---

## 9. `globals.css` (글로벌 스타일)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* 폰트 설정 */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');

:root {
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 255, 255, 255;
  --background-end-rgb: 240, 240, 245;
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground-rgb: 255, 255, 255;
    --background-start-rgb: 15, 15, 15;
    --background-end-rgb: 31, 41, 55;
  }
}

body {
  color: rgb(var(--foreground-rgb));
  background: linear-gradient(
    to bottom,
    transparent,
    rgb(var(--background-end-rgb))
  ) rgb(var(--background-start-rgb));
}

/* 스크롤 동작 */
html {
  scroll-behavior: smooth;
}

/* 포커스 스타일 */
:focus-visible {
  outline: 2px solid rgb(var(--foreground-rgb));
  outline-offset: 2px;
}

/* 선택 텍스트 스타일 */
::selection {
  background-color: #552583;
  color: white;
}

/* 애니메이션 설정 */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🚀 설정 적용 순서

1. **프로젝트 생성**
   ```bash
   pnpm create next-app@latest nba-tour-landing
   ```

2. **설정 파일 복사**
   - `.cursor/rules.mdc`
   - `.cursor/settings.json`
   - `.prettierrc`
   - `.eslintrc.json`
   - 위의 다른 설정 파일들

3. **의존성 설치**
   ```bash
   cd nba-tour-landing
   pnpm install
   ```

4. **Cursor 재시작**
   - Cursor 닫고 다시 열기
   - `.cursor` 폴더가 자동 인식됨

5. **개발 서버 시작**
   ```bash
   pnpm dev
   ```

---

## ✅ 설정 완료 확인

Cursor에서 확인:

- [ ] 파일 저장 시 자동 포맷팅 (Prettier)
- [ ] Tailwind CSS 자동완성 작동
- [ ] TypeScript 에러 감지
- [ ] ESLint 경고 표시
- [ ] `.cursor/rules.mdc` 내용이 컨텍스트에 포함됨

---

## 💡 팁

### Cursor 커스텀 지시사항
프롬프트 앞에 다음을 추가하면 `rules.mdc` 적용됨:

```
@codebase

당신은 NBA 투어 랜딩페이지 개발자입니다.

[프롬프트 내용...]
```

### 빠른 명령어
- `Cmd/Ctrl + K` - Cursor 명령 팔레트
- `Cmd/Ctrl + Shift + P` - VS Code 명령어
- `Cmd/Ctrl + .` - 빠른 수정 (Quick Fix)

---

## 📞 문제 해결

| 문제 | 해결책 |
|------|--------|
| `.cursor` 폴더 인식 안 됨 | Cursor 재시작 필요 |
| Tailwind 자동완성 안 됨 | `tailwind.config.ts` 경로 확인 |
| 포맷팅이 안 됨 | `editor.formatOnSave` 활성화 확인 |
| TypeScript 에러 많음 | `typescript.tsdk` 경로 확인 |

---

**이제 모든 설정이 완료되었습니다! 개발을 시작하세요! 🚀**