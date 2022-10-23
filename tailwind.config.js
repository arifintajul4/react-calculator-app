/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: "hsl(0, 0%, 100%)",
      gray: colors.gray,
      "very-dstd-blue": {
        DEFAULT: "hsl(236, 21%, 26%)",
        bg: "hsl(222, 26%, 31%)",
        keypad: "hsl(223, 31%, 20%)",
        screen: "hsl(224, 36%, 15%)",
      },
      "dstd-blue": {
        DEFAULT: "hsl(235, 24%, 19%)",
        bg: "hsl(225, 21%, 49%)",
        key: "hsl(224, 28%, 35%)",
      },
      red: {
        DEFAULT: "hsl(6, 63%, 50%)",
        dark: "hsl(6, 70%, 34%)",
      },
      "grayish-orange": {
        light: "hsl(30, 25%, 89%)",
        DEFAULT: "hsl(28, 16%, 65%)",
      },
      "grayish-blue": "hsl(221, 14%, 31%)",
    },
    boxShadow: {
      "btn-orange": "0 5px #b4a597",
      "btn-red": "0 5px #93261a",
      "btn-blue": "0 5px #404e72",
    },
  },
  plugins: [],
};
