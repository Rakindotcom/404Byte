/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'carbon-black': '#0D1117',
        'electric-blue': '#00BFFF',
        'neon-teal': '#00FFC6',
        'smoke-gray': '#A9B2BA',
        'error-red': '#FF4D4D',
      },
      fontFamily: {
        'jetbrains': ['JetBrains Mono', 'monospace'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 1s infinite',
      },
      boxShadow: {
        'neon': '0 0 10px #00BFFF, 0 0 20px #00BFFF, 0 0 30px #00BFFF',
        'neon-teal': '0 0 10px #00FFC6, 0 0 20px #00FFC6, 0 0 30px #00FFC6',
      }
    },
  },
  plugins: [],
}