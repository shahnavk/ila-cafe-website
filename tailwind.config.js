module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      keyframes: {
        zoomInOut: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        gradient: {
          '0%': { backgroundPosition: '90% 100%' },
      '100%': { backgroundPosition: '0% 10%' },
        },
      },
      animation: {
        zoomInOut: 'zoomInOut 2s ease-in-out infinite',
        'gradient-x': 'gradient 2s linear infinite',
      },
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
