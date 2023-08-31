import type { Config } from 'tailwindcss'



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
        'light-primary': '#607B96',
        'peach': '#E99287',
        'mint': '#43D9AD',
        'dark-sea': '#4D5BCE',
      },
    },
    borderColor: {
      DEFAULT: '#607B96',
      'plum': '#FEA55F'
    }
  },
  plugins: [],
}
export default config
