import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./resources/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
      daisyui
  ],
}

