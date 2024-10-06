module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        yellow: {
          400: '#fbbf24',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}