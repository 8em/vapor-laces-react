import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      unbounded: ['Unbounded', 'sans-serif'],
    },
    extend: {
      fontSize: {
        xs: ['11px', { lineHeight: '1rem' }],
        sm: ['13px', { lineHeight: '1.25rem' }],
        base: ['15px', { lineHeight: '1.5rem' }],
        lg: ['17px', { lineHeight: '1.75rem' }],
        xl: ['19px', { lineHeight: '1.75rem' }],
        '2xl': ['22px', { lineHeight: '2rem' }],
        '3xl': ['26px', { lineHeight: '2.25rem' }],
        '4xl': ['32px', { lineHeight: '2.5rem' }],
        '5xl': ['44px', { lineHeight: '1' }],
      },
      colors: {
        primary: '#3971FF',
        'primary-active': '#1355FF',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        xl: '1440px',
      },
    },
  },
  plugins: [],
}

export default config
