/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    colors: {
      primary: '#ffffff',
      secondary: {
        600: 'hsl(0deg 0% 40%)',
        500: 'hsl(0deg 0% 50%)',
        400: 'hsl(0deg 0% 60%)',
        300: 'hsl(0deg 0% 70%)',
        200: 'hsl(0deg 0% 80%)',
        100: 'hsl(0deg 0% 90%)',
        50: 'hsl(0deg 0% 97%)',
      },
      tertiary: '#131313',
      error: '#f62c2c',
      fade:'rgba(0, 0, 0, 0.4)',
    },
    boxShadow: {
      top: '0px 40px 100px #666;',
      box: '0px 2px 10px  rgb(0 0 0 / 0.1)',
      none: '0px',
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }

  },
  plugins: [require('@tailwindcss/line-clamp'),]
}