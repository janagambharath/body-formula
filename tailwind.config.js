/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        formula: {
          orange: '#f97316',
          amber: '#f59e0b',
          ember: '#ea580c',
          dark: '#070707',
          panel: '#111111',
          line: '#27211d',
        },
      },
      fontFamily: {
        display: ['Barlow Condensed', 'sans-serif'],
        body: ['Barlow', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 45px rgba(249, 115, 22, 0.24)',
        'deep-glow': '0 28px 90px rgba(0, 0, 0, 0.55)',
      },
      backgroundImage: {
        'premium-radial':
          'radial-gradient(circle at 20% 20%, rgba(249,115,22,0.14), transparent 30%), radial-gradient(circle at 80% 0%, rgba(245,158,11,0.09), transparent 26%)',
      },
    },
  },
  plugins: [],
};
