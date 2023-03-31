/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        'scroll-up': 'scrollUp 6s infinite',
      },
      keyframes: {
        scrollUp: {
          // '23.333%, 0%': {
          //   transform: 'translateY(-25%)',
          // },
          // '56.6665%, 33.333%': {
          //   transform: 'translateY(-50%)',
          // },
          // '90%, 66.6665%': {
          //   transform: 'translateY(-75%)',
          // },
          '15%, 25%': {
            transform: 'translateY(-20%)',
          },
          '40%, 50%': {
            transform: 'translateY(-40%)',
          },
          '65%, 75%': {
            transform: 'translateY(-60%)',
          },
          '90%, 100%': {
            transform: 'translateY(-80%)',
          },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'light',
  },
};
