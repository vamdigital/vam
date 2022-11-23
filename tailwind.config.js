/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        heading: 'Inter, sans-serif',
        body: 'Inter, sans-serif',
      },
      // fontSize: {
      //   xs: ['11px', '25px', { letterSpacing: '1' }],
      //   sm: ['12px', '25px', { letterSpacing: '2.6' }],
      //   base: ['14px', '25px', { letterSpacing: '0' }],
      //   lg: ['40px', '52px', { letterSpacing: '-1.5' }],
      //   xl: ['80px', '103px', { letterSpacing: '0' }],
      // },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  corePlugins: {
    container: false,
  },
}
