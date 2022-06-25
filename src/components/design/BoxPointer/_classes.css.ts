import { style, styleVariants } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

const sideVariants = styleVariants({
  bottom: {
    '::before': { bottom: -15, transform: 'rotate(45deg)' },
  },
  left: {
    '::before': { left: -15, transform: 'rotate(135deg)' },
  },
  right: {
    '::before': { right: -15, transform: 'rotate(315deg)' },
  },
  top: {
    '::before': { top: -15, transform: 'rotate(225deg)' },
  },
})

const baseBox = style({
  minHeight: 200,
  position: 'relative',
  border: `2px solid #262626`,
  display: 'grid',
  placeItems: 'center',
  fontSize: 36,
  color: '#262626',
  textTransform: 'uppercase',
  transition: 'all 0.5s ease-in-out',
  background: '#ffef64',

  selectors: {
    '&::before': {
      content: "''",
      position: 'absolute',
      width: 30,
      height: 30,
      background: '#ffef64',
      border: `2px solid #262626`,
      borderLeftColor: 'transparent',
      borderTopColor: 'transparent',
      transition: 'all 0.5s ease-in-out',
    },

    '&:hover': {
      background: '#262626',
      color: 'white',
    },

    '&:hover::before': {
      background: '#262626',
    },
  },
})

export default {
  wrapper: style({
    maxWidth: 1200,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: 50,
  }),

  box: recipe({
    base: baseBox,
    variants: { side: sideVariants },
  }),
}
