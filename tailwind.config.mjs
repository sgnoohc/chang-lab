/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0b5fff',
          dark: '#0a3fb5',
        },
        accent: '#00b3a4',
      },
      fontFamily: {
        sans: [
          'Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto',
          'Ubuntu', 'Cantarell', '"Helvetica Neue"', 'Arial', '"Noto Sans"',
          '"Apple Color Emoji"', '"Segoe UI Emoji"', 'sans-serif',
        ],
      },
    },
  },
  // Safelist classes used dynamically by inline scripts or in HTML strings
  safelist: [
    'hidden',
    'opacity-0',
    'opacity-100',
    'show',
    'active',
    'bg-white',
    'bg-white/50',
    { pattern: /^(text|bg|border|ring)-/ },
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
