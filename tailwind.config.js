/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       'white': 'hsl(0, 100%, 100%)',
       'grey-500': 'hsl(0, 0%, 63%)',
       'grey-800': 'hsl(0, 0%, 27%)',
       'black': 'hsl(0, 0%, 0%)',
      },
    },
  },
  plugins: [],
}
