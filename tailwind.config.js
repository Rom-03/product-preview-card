/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(158, 36%, 37%)",
        secondary: "hsl(30, 38%, 92%)",
        darkblue: "hsl(212, 21%, 14%)",
        grayishblue: "hsl(228, 12%, 48%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        fraunces: "'Fraunces', serif",
        montserrat: "'Montserrat', sans-serif",
      },
    },
  },
  plugins: [],
};
