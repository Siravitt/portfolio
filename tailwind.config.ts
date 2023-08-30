import type { Config } from 'tailwindcss'
import backgroundBlur from './public/images/background-blurs.png'



const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#011627',
        'light-primary': '#607B96'
      },
    },
    borderColor: {
      DEFAULT: '#607B96'
    }
  },
  plugins: [],
}
export default config
