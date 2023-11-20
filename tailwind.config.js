/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          default: "#27292E",
          white: "#FFFFFF",
          transparent: "#FFFFFF00",
          "bg-dark": "#0F111A",
          "bg-light": "#5100FF",
        },
      },
    },
  },
  plugins: [],
};
