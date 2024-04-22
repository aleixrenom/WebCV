/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#000080",
        complimentary: "#AFA8BA",
        tertiary: "#A90001",
      },
    },
  },
  plugins: [],
};
