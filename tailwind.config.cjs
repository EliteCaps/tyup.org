/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': {
          "blue":'#194DAB',
          'blue-light': '#6880AB',
        },
        'background': {
          'primary': '#0C0C14',
          'secondary': '#0B0C14',
        },
        'accent': '#939DB8',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
    }
  },
  plugins: []
}
