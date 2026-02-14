/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./frontend/src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html",
    "./*.html",
  ],
  theme: {
    extend: {
      colors: {
        // Tema hitam pekat dan ungu
        dark: {
          900: "#000000",
          800: "#0a0a0a", 
          700: "#1a1a1a",
          600: "#2a2a2a",
          500: "#3a3a3a",
        },
        primary: {
          50: "#f3e8ff",
          100: "#e9d5ff", 
          200: "#d8b4fe",
          300: "#c084fc",
          400: "#a855f7",
          500: "#9333ea",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },
        purple: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe", 
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7c3aed",
          800: "#6d28d9",
          900: "#581c87",
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #9333ea 0%, #7c3aed 50%, #6d28d9 100%)",
        "gradient-dark": "linear-gradient(135deg, #000000 0%, #0a0a0a 100%)",
        "gradient-purple": "linear-gradient(135deg, #a855f7 0%, #9333ea 50%, #7c3aed 100%)",
      },
    },
  },
  plugins: [],
};
