/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F1F2EE',
        sheet: '#FAFAF8',
        ink: '#16201C',
        muted: '#56625C',
        rule: '#D5DDD6',
        green: { DEFAULT: '#12382C', deep: '#0C281F', soft: '#A9C2B4' },
        oxblood: '#8C1D2A',
      },
      fontFamily: {
        serif: ['"Libre Caslon Text"', 'Georgia', 'serif'],
        sans: ['"Public Sans Variable"', 'system-ui', 'sans-serif'],
      },
      maxWidth: { content: '70rem', prose: '38rem' },
    },
  },
  plugins: [],
}
