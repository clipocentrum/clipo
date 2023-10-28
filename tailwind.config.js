/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/*.{js,ts,jsx,tsx,mdx}",
    "./app/*.tsx",
    "./app/**/*.tsx",
    "./app/**/**/*.tsx"
  ],
  theme: {
    extend: {
    },
  },
  plugins: [],
}

