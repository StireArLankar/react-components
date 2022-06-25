import { style, styleVariants } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars } from '~/theme/theme.css'

const baseButton = style({
  position: 'relative',
  height: '100%',
  width: '100%',
  borderRadius: '50%',
  border: 'none',
  padding: 0,
  background: 'transparent',
  outline: 'none',
  zIndex: 1,
  transition: 'transform 0.2s ease',
  selectors: {
    '&:hover': {
      transform: 'scale(1.2)',
    },
  },
})

const baseIcon = style({
  fill: 'currentColor',

  selectors: {
    '&&': {
      width: '100%',
      height: '100%',
      color: vars.color.text,
    },
  },
})

const iconVariant = styleVariants({
  open: { backgroundColor: `#2196f3` },
  close: { backgroundColor: `#f44336` },
})

const centralButton = style({ height: 100, width: 100 })
const overflow = style({ overflow: 'hidden' })

const animated = style({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  borderRadius: '50%',
})

export default {
  wrapper: style({
    position: 'relative',
    height: 100,
    width: 100,
  }),

  centralButton: style([baseButton, centralButton]),
  radialButton: style([baseButton, overflow]),

  button: baseButton,

  animated,
  animatedOverflow: style([animated, overflow]),

  icon: recipe({
    base: baseIcon,
    variants: { state: iconVariant },
  }),

  list: style({
    margin: 0,
    padding: 0,
    top: '50%',
    left: '50%',
    height: 50,
    width: 50,
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    listStyle: 'none',
  }),
}
