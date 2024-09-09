/** @type {import('tailwindcss').Config} */
export default {
  content: ['./resources/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/typography'),
      require('daisyui')
  ],
    daisyui: {
      themes: ['bumblebee']
    }
}

