/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // BikeC Custom Theme
        bikec: {
          primary: '#FDB913',      // Yellow-gold from logo
          secondary: '#B0B5BA',    // Cool gray from logo
          dark: '#1A1A1A',         // Deep rugged charcoal
          'dark-alt': '#252525',   // Slightly lighter charcoal for contrast
          black: '#0F0F0F',        // True deep black
        },
      },
      backgroundColor: {
        'default': '#1A1A1A',      // Deep charcoal background
      },
      fontFamily: {
        // Hebrew-friendly fonts
        sans: ['Inter', 'Heebo', 'system-ui', 'sans-serif'],
        hebrew: ['Heebo', 'Assistant', 'Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [
    // RTL support plugin - install with: npm install tailwindcss-rtl
    require('tailwindcss-rtl'),
  ],
}
