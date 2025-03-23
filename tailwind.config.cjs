/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,astro}",
    "./public/index.html",
    "./.storybook/**/*.{js,jsx,ts,tsx,mdx}",
    "./stories/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [],
};
