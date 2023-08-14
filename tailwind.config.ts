import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'midnight': '#010203',
      current: 'currentColor',
      transparent: 'transparent',
      'blood': '#800000',
      'steel': '#708090',
      'rose': '#b38b6d',
      'lavender': '#e6e6fa',
      white: colors.white,
      black: colors.black,
      yellow: colors.yellow,
      green: colors.green,
      red: colors.red,
      gray: colors.gray,
      blue: colors.blue
    }
  },
  plugins: [],
}
export default config
