import { style, styleVariants } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

const raisedShadow =
  '4px 2px 16px rgba(136, 165, 191, 0.8), -4px -2px 16px #FFFFFF'

const wrapper = style({
  padding: 4,
  width: 200,
  height: 200,
  borderRadius: 16,
  position: 'relative',
  zIndex: 1,

  selectors: {
    '&::before, &::after': {
      content: '""',
      zIndex: -1,
      position: 'absolute',
      left: 0,
      top: 0,
      borderRadius: 16,
      width: '100%',
      height: '100%',
      transition: 'opacity 0.5s ease',
    },
    '&::before': {
      background: 'linear-gradient(0deg, #E3EDF7, #E3EDF7)',
      boxShadow: raisedShadow,
      opacity: 1,
    },
    '&::after': {
      background: '#E3EDF7',
      boxShadow:
        'inset 3px 3px 7px rgba(136, 165, 191, 0.48), inset -3px -3px 7px #FFFFFF',

      opacity: 0,
    },
  },
})

const activeVariants = styleVariants({
  true: {
    '::before': { opacity: 0 },
    '::after': { opacity: 1 },
  },
  false: {},
})

export default {
  wrapper: recipe({
    base: wrapper,
    variants: { active: activeVariants },
  }),

  nestedContainer: style({
    width: 311,
    height: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 16,

    background: '#E3EDF7',
    boxShadow: raisedShadow,
    borderRadius: 16,
  }),

  nestedItem: style({
    width: 36,
    height: 36,

    background: '#E3EDF7',
    boxShadow: raisedShadow,
    borderRadius: '50%',
  }),
}
