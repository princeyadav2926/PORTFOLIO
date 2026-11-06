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
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-1': 'float1 5s ease-in-out infinite',
        'float-2': 'float2 6.5s ease-in-out 1.2s infinite',
        'float-3': 'float3 5.5s ease-in-out 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        float1: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1.5deg)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(-1.5deg)' },
        },
        float3: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' },
        }
      },
      boxShadow: {
        'gold-subtle': '0 0 25px -5px rgba(214, 173, 96, 0.15)',
        'gold-card': '0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 15px -3px rgba(214, 173, 96, 0.08)',
        'floating-3d': '0 20px 40px -10px rgba(0, 0, 0, 0.9), 0 0 20px -2px rgba(214, 173, 96, 0.15)',
      }
    },
  },
  plugins: [],
}
