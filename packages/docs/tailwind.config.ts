/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
import { masks, colorsBrand, colorsState, colorsBase } from 'daisy-vue/globals'

const prefixedMasks = masks.map((mask) => `mask-${mask}`)
const prefixedColors = [...colorsBrand, ...colorsState, ...colorsBase].map((color) => `bg-${color}`)
const prefixedText = [...colorsBrand, ...colorsState, ...colorsBase].map(
  (color) => `text-${color}-content`
)

export default {
  content: ['./**/*.md', './node_modules/daisy-vue/src/{components,directives}/**/*.{vue,ts}'],
  theme: {
    extend: {}
  },
  safelist: [...prefixedMasks, ...prefixedColors, ...prefixedText],
  plugins: [daisyui]
}
