/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        matte: {
          main: '#0B0D0E',
          surface: '#111416',
          card: '#15191B',
          hover: '#1B2023',
          border: 'rgba(214, 173, 96, 0.20)',
        },
        champagne: {
          DEFAULT: '#D6AD60',
          50: '#FAF5EC',
          100: '#F5E6C8',
          200: '#EDD6A6',
          300: '#E4C483',
          400: '#D6AD60',
          500: '#C59A49',
          600: '#A98135',
          700: '#846325',
          800: '#5F4618',
          900: '#3D2C0D',
        },
        palette: {
          main: '#0B0D0E',
          surface: '#111416',
          card: '#15191B',
          accent: '#D6AD60',
          cream: '#F5E6C8',
          text: '#F5F5F0',
          muted: '#A7AAA8',
          border: 'rgba(214, 173, 96, 0.20)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'gold-subtle': '0 0 25px -5px rgba(214, 173, 96, 0.15)',
        'gold-card': '0 10px 30px -10px rgba(0, 0, 0, 0.7), 0 0 15px -3px rgba(214, 173, 96, 0.08)',
      }
    },
  },
  plugins: [],
}
