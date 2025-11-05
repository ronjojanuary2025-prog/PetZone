import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          white: '#ffffff',
          gray: '#f6f7f9',
          blue: '#d9e9ff',
          orange: '#ffd8b2',
          text: '#1b1e28',
          subtle: '#4b5563'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Lato', 'ui-sans-serif', 'system-ui']
      }
    },
  },
  plugins: [],
} satisfies Config


