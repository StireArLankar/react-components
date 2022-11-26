import { style, styleVariants } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars } from '~/theme/theme.css'

const baseBackground = style({
  width: 80,
  height: 80,
  position: 'absolute',
  border: `1px solid ${vars.color.border}`,

  '::before': {
    boxSizing: 'inherit',
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
    background: vars.color.light,
    transition: 'all 0.35s ease',
  },
})

const activeVariants = styleVariants({
  true: {
    '::before': { opacity: 1 },
  },
  false: {},
})

export default {
  wrapper: style({
    position: 'relative',
  }),

  background: recipe({
    base: baseBackground,
    variants: { active: activeVariants },
  }),

  box: style({
    position: 'absolute',
    background: '#91c9f9',
    borderRadius: 16,
    height: 80,
    width: 80,
    zIndex: 10000,
    cursor: 'grab',
  }),
}
