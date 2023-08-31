import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1000px",
      xl: "1200px",
      xxl: "1440px"
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        inter: ['Inter']
      },
      colors: {
        darkBlue: '#0054a6',
        veryLightBlue: '#f6f8fb',
        facebookBlue: '#1877f2',
        twitterBlue: '#1da1f2',
        shoppingGreen: '#2fb344'
      },
      spacing: {
        88: '22rem',
        90.5: '22.625rem',
        92: '23rem',
        100: '25rem',
        108: '27rem',
        122: '30.5rem',
        128: '32rem',
        136: '34rem',
        138: '34.5rem',
        140: '35rem'
      }
    },
  },
  plugins: [],
}
export default config
