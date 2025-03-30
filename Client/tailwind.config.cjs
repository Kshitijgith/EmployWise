/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', // If using Vite or plain HTML
    './src/**/*.{js,ts,jsx,tsx}', // If using React/JS/TS files in src folder
  ],
  theme: {
    extend: {
      width: {
        '5p':'5%',
        '10p': '10%',
        '15p':'15%',
        '20p': '20%',
        '30p': '30%',
        '40p': '40%',
        '50p': '50%',
        '59p':'59%',
        '60p': '60%',
        '70p': '70%',
        '80p': '80%',
        '90p': '90%',
        '100p': '100%',
      },
      height: {
        '8p':'8%',
        '85p':'85%',
        '10p': '10%',
        '20p': '20%',
        '15p':'15%',
        '30p': '30%',
        '40p': '40%',
        '50p': '50%',
        '59p':'59%',
        '60p': '60%',
        '62p':'62%',
        '70p': '70%',
        '80p': '80%',
        '90p': '90%',
        '92p':'92%',
        '100p': '100%',
      },
      screens: {
        sm: { min: '300px', max: '600px' },
    },
  }
},
  plugins: [],
}

