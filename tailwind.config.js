module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./**/*.html", // tambahan agar detect file lain juga
  ],
  safelist: [
    'animate-scroll-x', // <== INI WAJIB! biar tailwind ga hapus class animasimu
  ],
  theme: {
    extend: {
      keyframes: {
        scrollX: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'scroll-x': 'scrollX 20s linear infinite',
      },
    },
  },
  plugins: [],
}
