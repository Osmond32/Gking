/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/page_templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wrestling: {
          black: {
            DEFAULT: '#050505',
            light: '#121212',
            card: '#181818',
          },
          gold: {
            DEFAULT: '#FFD700',
            dark: '#C5A000',
            glow: 'rgba(255, 215, 0, 0.15)',
          },
          red: {
            DEFAULT: '#E50914',
            dark: '#8B0000',
            glow: 'rgba(229, 9, 20, 0.2)',
          }
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        anton: ['var(--font-anton)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
