import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{html,svelte}'],
  theme: {
    extend: {
      colors: {
        default: {
          100: '#fefcf7',
          200: '#83888f',
          300: '#333d4b'
        },
        primary: '#0e8784',
        secondary: '#fdd6ba'
      },
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
        serif: ['Fraunces Variable', 'serif']
      }
    }
  }
}

export default config
