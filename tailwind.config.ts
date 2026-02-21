import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F1923',
          light: '#1C2B3A',
        },
        charcoal: {
          DEFAULT: '#2D3136',
          light: '#4A5058',
        },
        stone: {
          DEFAULT: '#F5F5F3',
          dark: '#E8E8E5',
        },
        ink: {
          DEFAULT: '#0F1923',
          muted: '#6B7280',
          border: '#E2E2DE',
        },
        accent: {
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
