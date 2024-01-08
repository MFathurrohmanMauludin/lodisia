/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '2xl': { 'max': '1535px' },
      'xl': { 'max': '1279px' },
      'lg': { 'max': '1024px' },
      'md': { 'max': '820px' },
      'sm': { 'max': '639px' },
      'xs': { 'max': '450px' },
    }
  },
  darkMode: "class",
  plugins: [nextui()]
}