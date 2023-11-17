/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    animationDelay: {
      100: '0.1s',
      200: '0.3s',
      300: '0.5s',
      400: '0.7s',
      500: '0.9s',
    },
    extend: {
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      colors: {
        primary: '#131424',
        secondary: '#393A47',
        accent: '#F13024',
        darkbg: '#121212',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'custom-gradient':
          'linear-gradient(180deg, hwb(200deg 0% 98%) 1%, hsl(200deg 100% 3%) 17%, hsl(200deg 100% 6%) 26%, hsl(200deg 100% 9%) 37%, hsl(200deg 100% 12%) 46%, hsl(200deg 100% 15%) 53%, hsl(200deg 100% 18%) 59%, hsl(200deg 100% 21%) 65%, hsl(200deg 100% 24%) 70%, hsl(200deg 100% 27%) 74%, hsl(200deg 100% 30%) 78%, hsl(200deg 100% 33%) 81%, hsl(200deg 100% 36%) 84%, hsl(200deg 100% 39%) 87%, hsl(200deg 100% 42%) 89%, hsl(200deg 100% 45%) 91%, hsl(200deg 100% 48%) 93%, hsl(200deg 100% 51%) 95%, hsl(200deg 100% 54%) 96%, hsl(200deg 100% 57%) 97%, hsl(200deg 100% 60%) 98%, hsl(200deg 100% 63%) 99%, hsl(200deg 100% 66%) 100%)',
        explosion: 'url("/bg-explosion.png")',
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/site-bg.svg")',
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
        poppins: [`var(--font-poppins)`, 'sans-serif'],
        sora: [`var(--font-sora)`, 'sans-serif'],
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
