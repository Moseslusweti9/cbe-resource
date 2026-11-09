module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3f7ff',
          100: '#e4ebff',
          200: '#c8d7ff',
          300: '#a6c0ff',
          400: '#7c9dff',
          500: '#4f77ff',
          600: '#3558d9',
          700: '#2a46af',
          800: '#263d8b',
          900: '#243873'
        },
        success: '#14b26b',
        warning: '#f9b02d',
        danger: '#ef4b54'
      },
      boxShadow: {
        soft: '0 18px 45px rgba(22, 31, 70, 0.12)'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
