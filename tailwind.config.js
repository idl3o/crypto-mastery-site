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
        primary: '#f7931a',
        secondary: '#627eea',
        dark: '#0d1117',
        darker: '#010409',
        light: '#c9d1d9',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#c9d1d9',
            a: {
              color: '#f7931a',
              '&:hover': {
                color: '#ffa94d',
              },
            },
            h1: { color: '#ffffff' },
            h2: { color: '#ffffff' },
            h3: { color: '#ffffff' },
            h4: { color: '#ffffff' },
            strong: { color: '#ffffff' },
            code: { color: '#f7931a' },
            blockquote: {
              color: '#8b949e',
              borderLeftColor: '#f7931a',
            },
          },
        },
      },
    },
  },
  plugins: [],
}
