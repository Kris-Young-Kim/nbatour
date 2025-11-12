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

