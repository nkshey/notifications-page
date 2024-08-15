/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      red: "hsl(1, 90%, 64%)",
      blue: "hsl(219, 85%, 26%)",

      white: "hsl(0, 0%, 100%)",
      "very-light-grayish-blue": "hsl(210, 60%, 98%)",
      "light-grayish-blue-one": "hsl(211, 68%, 94%)",
      "light-grayish-blue-two": "hsl(205, 33%, 90%)",
      "grayish-blue": "hsl(219, 14%, 63%)",
      "dark-grayish-blue": "hsl(219, 12%, 42%)",
      "very-dark-blue": "hsl(224, 21%, 14%)",
    },

    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
    },

    fontWeight: {
      normal: "500",
      bold: "800",
    },

    extend: {},
  },
  plugins: [],
};
