/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
import { masks } from 'daisy-vue/globals'

const prefixedMasks = masks.map((mask) => `mask-${mask}`)

export default {
  content: ['./**/*.md', './node_modules/daisy-vue/src/{components,directives}/**/*.{vue,ts}'],
  theme: {
    extend: {}
  },
  safelist: [...prefixedMasks],
  plugins: [daisyui]
}
