import tailwindcssAnimated from 'tailwindcss-animated'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{html,svelte}'],
  theme: {
    extend: {
      borderRadius: {
        xl: '0.625rem'
      },
      colors: {
        default: {
          100: '#fefcf7',
          200: '#83888f',
          300: '#333d4b'
        },
        primary: {
          100: '#3bb7a9',
          200: '#0e8784'
        },
        secondary: '#fdd6ba'
      },
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
        serif: ['Fraunces Variable', 'serif']
      },
      fontSize: {
        xs: ['0.75rem', '1.25'],
        sm: ['0.9375rem', '1.625'],
        base: ['1rem', '1.625rem'],
        lg: ['1.125rem', '1.5625rem']
      },
      letterSpacing: {
        widest: '0.07691666em'
      },
      spacing: {
        13: '3.25rem',
        21: '5.25rem',
        22.5: '5.625rem',
        41: '10.25rem'
      }
    }
  },
  plugins: [tailwindcssAnimated]
}

export default config
