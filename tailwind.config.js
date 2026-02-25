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
        // Tema hitam pekat dan ungu - optimized palette
        dark: {
          900: "#000000",
          800: "#0a0a0a", 
          700: "#1a1a1a",
        },
        primary: {
          400: "#a855f7",
          500: "#9333ea",
          600: "#7c3aed",
        },
        purple: {
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #9333ea 0%, #7c3aed 50%, #6d28d9 100%)",
        "gradient-dark": "linear-gradient(135deg, #000000 0%, #0a0a0a 100%)",
      },
    },
  },
  // Optimize for production
  corePlugins: {
    preflight: true,
  },
  plugins: [],
};
