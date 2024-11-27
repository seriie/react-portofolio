/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        customLight: '0 0 20px 3px #F8FAFC',
        customDark: '0 0 20px 3px #020617',
      },
      backgroundImage: {
        gradientToRight: 'linear-gradient(to right, rgb(20, 184, 166), rgb(168, 85, 247, 0.3))',
        opacityToRight: 'linear-gradient(to right, rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.3))',
        animateOpacity: 'linear-gradient(to right, rgb(20, 184, 166, 0.9), rgb(0, 0, 0, 0.3))'
      },
    },
  },
  plugins: [],
}