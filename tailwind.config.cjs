module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
