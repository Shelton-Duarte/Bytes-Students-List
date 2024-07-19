/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "purple-bytes": "#8447ff",
        "purple-bytes-1000": "#10002b",
        "green-bytes": "#21dda2",
        black: "#000000",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
}
