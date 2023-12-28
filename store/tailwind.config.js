import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Teko: ['Teko'],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['bumblebee'],
  },
}
