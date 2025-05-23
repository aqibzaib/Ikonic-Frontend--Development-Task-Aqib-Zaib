/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.html"], // Adjust path to scan HTML files
  theme: {
    extend: {
      fontFamily: {
        hero: ["Hero New", "sans-serif"], // Custom font
      },
    },
  },
  plugins: [],
};
