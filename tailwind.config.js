/** @type {import('tailwindcss').Config} */
const { createThemes } = require("tw-colors");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [
    createThemes({
      teacher: {
        primary: "orange",
        secondary: "yellow",
      },
      student: {
        primary: "pink",
        secondary: "red",
      },
      parent: {
        primary: "steelblue",
        secondary: "darkblue",
      },
    }),
  ],
};
