import { style, styleVariants } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { type ToastItem } from './toasts'

const baseToast = style({
  color: 'white',
  padding: 20,
  margin: 20,
  borderRadius: 5,
  width: 200,
  maxWidth: '50vw',

  selectors: {
    "[data-swipe='cancel'] &": {
      transition: 'transform 0.1s ease',
    },
  },
})

type A = Record<ToastItem['type'], string>
const stateVariants: A = styleVariants({
  success: {
    background: '#81c784',
  },
  error: {
    background: '#e57373',
  },
  info: {
    background: '#4fc3f7',
  },
})

export default {
  toast: recipe({
    base: baseToast,
    variants: { state: stateVariants },
  }),
  viewport: style({
    position: 'fixed',
    right: 0,
    top: 0,
    padding: 10,
    margin: 0,
    listStyle: 'none',
    zIndex: 1000,
  }),
}
