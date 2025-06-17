module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'cafe-texture': "url('assets/home-banner.png')",
      },
      colors: {
        cafebeige: "#fde7cc",
        cafebrown: "#b38e67",
        textbrown: "#382218",
        cafegreen: "#749d5e",
        brand: {
          
          DEFAULT: '#f97316', // orange
          light: '#fdebd0',
          dark: '#c2410c',
        },
      },
    },
  },
  plugins: [],
};
