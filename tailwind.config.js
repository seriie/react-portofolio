/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        "customLight": "0 0 20px 3px #F8FAFC",
        "customDark": "0 0 20px 3px #020617",
      }
    },
  },
  plugins: [],
}