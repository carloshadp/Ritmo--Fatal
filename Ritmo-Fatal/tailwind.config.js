/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      "desktop": "1024px",
      "tablet": "685px",
      "mini": "350px"
    },
    fontFamily:{
      helvetica: ["Helvetica", "sans-serif"],
      helvetica_thin: ["Helvetica_thin", "sans-serif"],
      starbirl: ["Starbirl", "sans-serif"]
    },
    extend: {
      colors:{
        "bege": "#E8E59B",
        "bege-claro": "#FEFAF0",
        "cinza" : "#CBC8C0",
        "marrom" : "#856F5A",
        "cor" : "#403F2B"
      },
    },  
  },
  plugins: [],
}

