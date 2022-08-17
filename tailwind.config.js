/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    colors: {
      primary: '#ffffff',
      secondary: '#666666',
      lightSecondary: '#d7d7d7',
      tertiary: '#131313',
      error: '#f62c2c',
    },
    boxShadow: {
      top: '0px 40px 100px #666;',
    },
  },
  plugins: []
}