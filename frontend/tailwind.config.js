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
        agri: {
          green: {
            light: '#a7f3d0',
            DEFAULT: '#059669',
            dark: '#047857',
            deep: '#064e3b'
          },
          earth: {
            light: '#fef3c7',
            DEFAULT: '#d97706',
            dark: '#b45309',
            deep: '#78350f'
          },
          harvest: {
            light: '#fef08a',
            DEFAULT: '#f59e0b',
            dark: '#d97706'
          },
          bg: {
            light: '#f8faf5',
            dark: '#0c1a12',
            darkSurface: '#162119'
          },
          teal: {
            light: '#ccfbf1',
            DEFAULT: '#14b8a6',
            dark: '#0d9488'
          },
          gold: {
            light: '#fef9c3',
            DEFAULT: '#eab308',
            dark: '#ca8a04'
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'count-up': 'countUp 2s ease-out forwards',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(5, 150, 105, 0.2)' },
          '100%': { boxShadow: '0 0 40px rgba(5, 150, 105, 0.4)' },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-40px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: 0, transform: 'translateX(40px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
