/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#2B2D42",
        secondary: "#8D99AE",
        "first-red": "#D90429",
        "second-red": "#EF233C",
        "first-gray": "#EDF2F4",
      },
    },
  },
  plugins: [],
};
