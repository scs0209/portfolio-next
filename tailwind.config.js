/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // 이 설정을 추가 해준다
  theme: {
    animationDelay: {
      100: '0.1s',
      200: '0.3s',
      300: '0.5s',
      400: '0.7s',
      500: '0.9s',
    },
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
          gold: '#4389d9',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        xs: '8px',
        sm: '12px',
      },
      fontFamily: {
        body: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
      animation: {
        circleMotion: 'circleMotion 3s linear infinite',
        circleMotionReverse: 'circleMotionReverse 3s linear infinite',
        circleMotionLight: 'circleMotionLight .5s linear infinite',
        circleMotionReverseLight:
          'circleMotionReverseLight .5s linear infinite',
        vibration: 'vibration .2s infinite',
        moveSide: 'moveSide 2s linear infinite',
        diagonalFly: 'diagonalFly 2s linear infinite',
        fadeInOut: 'fadeInOut 2s infinite',
        moveUpDown: 'moveUpDown 2s infinite',
        moveDownUp: 'moveDownUp 2s infinite',
        moveLeft: 'moveLeft 2s infinite',
        moveRight: 'moveRight 2s infinite',
        moveUpLeft: 'moveUpLeft 2s infinite',
        moveDownLeft: 'moveDownLeft 2s infinite',
        moveUpRight: 'moveUpRight 2s infinite',
        moveDownRight: 'moveDownRight 2s infinite',
        shakeSemiCircle: 'shakeSemiCircle 2s infinite',
      },
      keyframes: {
        circleMotion: {
          '0%, 100%': { transform: 'rotate(0) translateY(-20px) rotate(0)' },
          '100%': {
            transform: 'rotate(360deg) translateY(-20px) rotate(-360deg)',
          },
        },
        circleMotionReverse: {
          '0%, 100%': { transform: 'rotate(0) translateY(-20px) rotate(0)' },
          '100%': {
            transform: 'rotate(-360deg) translateY(-20px) rotate(360deg)',
          },
        },
        circleMotionLight: {
          '0%, 100%': { transform: 'rotate(0) translateY(-10px) rotate(0)' },
          '100%': {
            transform: 'rotate(360deg) translateY(-10px) rotate(-360deg)',
          },
        },
        circleMotionReverseLight: {
          '0%, 100%': { transform: 'rotate(0) translateY(-10px) rotate(0)' },
          '100%': {
            transform: 'rotate(-360deg) translateY(-10px) rotate(360deg)',
          },
        },
        vibration: {
          from: {
            transform: 'rotate(0.1deg)', // Apply one more rotation
          },
          to: {
            transform: 'rotate(-0.1deg)', // Apply one more rotation
          },
        },
        moveSide: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2%)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(2%)' },
        },
        diagonalFly: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(100%, -100%)' },
        },
        fadeInOut: {
          '0%': { opacity: 1 },
          '50%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        moveUpDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        moveDownUp: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(0)' },
        },
        moveLeft: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-10px)' },
          '100%': { transform: 'translateX(0)' },
        },
        moveRight: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
          '100%': { transform: 'translateX(0)' },
        },
        moveUpLeft: {
          '0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-10px, -10px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        moveUpRight: {
          '0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(10px, -10px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        moveDownLeft: {
          '0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-10px, 10px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        moveDownRight: {
          '0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(10px, 10px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        shakeSemiCircle: {
          '0%': { transform: 'rotate(0)' },
          '25%': { transform: 'rotate(-5deg)' },
          '75%': { transform: 'rotate(5deg)' },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover'],
    },
  },
  plugins: [require('flowbite/plugin'), require('tailwindcss-animation-delay')],
}
